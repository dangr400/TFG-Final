/**
 * Punto de entrada da aplicación. Neste documento cárganse todas as librerías do proxecto, configúrase o servidor máis o RTC, e continúa a execución.
 * @author Daniel Gómez Rodriguez
 *
 */
// variables de entorno
require('dotenv').config();
// paquetes necesarios
const { Server } = require("socket.io");
const http = require("http");
const express = require("express");
const cors = require("cors");
const logger = require("morgan");
const path = require('path');
const db = require("./app/models");
const filesys = require('fs');

// Conexión coa base de datos
db.mongoose
  .connect(`${db.url_atlas}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Conectado con la base de datos");
    initial();
  })
  .catch(err => {
    console.log("No se ha podido conectar con la base de datos:", err);
  });
  

// aplicación de Express. Necesario para a API
const app = express();

// port polo cal escoiuta o servidor. Hai que incorporalo a Express
const port = process.env.PORT || 8081
app.set("port", port);

// middleware para Cross-Origin Resource Sharing (para solicitar recursos dende un dominio distinto ao recurso)
// actualmente está configurado para aceptar calquer orixe.
var corsOptions = {
  "origin": '*',
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 200,
};

// engadir logger
app.use(logger("dev"));

// engadir CORS á aplicación
app.use(cors(corsOptions));

// parseador de peticións content-type - application/json
app.use(express.json());

// parseador de peticións content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// engadimos a seguinte ruta estática para o acceso á vista que está cargada na aplicacion. Isto permite ao servidor ofrecer o front, sen necesidade de ter outro servidor ofrecéndoo
// Se non existe, non se aplica
if (filesys.existsSync(__dirname + '/public')) {
  app.use(express.static(__dirname + '/public'));
  app.use(express.static(__dirname + '/public/docs/TFG_DOCUMENTACION.pdf'));
} else {
  console.log("WARNING: Non se atopa a carpeta co front, cárgase únicamente o servizo de API");
}

// rutas da API para clientes externos
require('./app/rutas/auth.routes')(app);
require('./app/rutas/user.routes')(app);
require('./app/rutas/grupo.routes')(app);
require('./app/rutas/salas.routes')(app);
require('./app/rutas/index.routes')(app);

// capturador de accesos a la API que no existen
app.use('*', (req, res) => {
  return res.status(404).json({
    success: false,
    message: 'No existe la ruta especificada'
  })
});

// Crear servidor HTTP, cargando a instancia de Express. 
const server = http.createServer(app);

// Crease unha instancia de Socket.IO
global.io = new Server(server, {
  cors: {
    origin: '*',
    //origin: ["*"],
    methods: ["GET", "POST"]
  }
  });
let usuariosConectados = [];
// Decláranse os eventos aos que debe reaccionar socket.IO
// Cando apareza unha nova conexión
global.io.on("connection", (socket) => {
  // Lanzase cando un usuario conéctase a unha sala
  socket.on('join', function(datos) {
    socket.join(datos.sala);
  });
  // Lanzase cando un usuario envía unha mensaxe
  socket.on('enviarMensaje', function(datos) {
    /**
     * Función que devolve true no caso de que o usuario forme parte do grupo
     * @param {*} listaUsuarios 
     * @returns Boolean
     */
    function getNombreSocket(listaUsuarios) {
      return listaUsuarios.socketId === socket.id;
    }
    const usuario = usuariosConectados.find(getNombreSocket);
    const enviar = {
      mensaje: datos.mensaje,
      emisor: usuario.username,
    };
    global.io.to(datos.sala).emit('emitirMensaje', enviar);
  });
  // Evento de cando un usuario abandona o chat
  socket.on("salirChat", () => {
    socket.disconnect();
  })
  // borrar usuario del registro
  socket.on("disconnecting", () => {
    for (var i = usuariosConectados.length - 1; i >= 0; --i) {
      if (usuariosConectados[i].socketId == socket.id) {
          usuariosConectados.splice(i,1);
      }
    }
  });
// Log de cando alguén se desconecta do chat
  socket.on("disconnect", () => {
    console.log('Got disconnect!');
  });

  // añadir identidad del usuario mapeado al socket id
  socket.on("identity", (user) => {
    var actualizar = false;
    for (var i = usuariosConectados.length - 1; i >= 0; --i) {
      if (usuariosConectados[i].userId == user.id) {
          usuariosConectados[i].socketId = socket.id;
          actualizar = true;
          console.log("Actualizado usuario")
      }
    }
    if (!actualizar){
      usuariosConectados.push({
        socketId: socket.id,
        username: user.username,
        userId: user.id,
      });
      console.log("Nuevo usuario conectado");
    }
  });
});

// Escoitar no puerto seleccionado.
server.listen(port);
// Capturador de eventos cando o servidor estea á espera de conexions.
server.on("listening", () => {
  console.log(`Servidor ejecutandose, escuchando a través del puerto: ${port}`)
});

function initial() {
  console.log("configuraciones iniciales finalizadas.");
}