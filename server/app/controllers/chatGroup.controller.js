// Módulo de funciones específico para grupos de chat
// Autor: Daniel Gómez Rodríguez
// Referencias: Bezkoder
const db = require("../models");
const Grupo = db.grupos;
const Usuario = db.usuario;
const Mensaje = db.mensaje;

/**
 * Método para crear un nuevo grupo.
 * Recibe el nombre del grupo, usuario creador y tipo de grupo (público o privado)
 * @param {any} req Petición recibida por la API
 * @param {any} res Respuesta ofrecida por la API
 * @returns {any}
 */
exports.crearGrupo = (req, res) => {
    const visibilidad = req.body.visibilidad ? true : false;
    const grupo = new Grupo({
        nombre: req.body.nombre,
        creador: req.userId,
        moderadores: [],
        integrantes: [req.userId],
        publico: visibilidad
      });
    grupo.save((err) => {
        if (err) {
          return res.status(500).send({ message: "Problema coa conexión, probe nun rato." });
        }
        return res.status(200).send({ message: "Grupo creado!" });
    });
};

exports.getGrupoPorId = (req, res) => {
  Grupo.findById(req.params.id)
  .populate("creador", "nome_usuario")
  .populate("moderadores", "nome_usuario")
  .populate("integrantes", "nome_usuario")
  .exec((err, grupo) => {
    if (err) {
      console.log(err);
      return res.status(500).send({success: false, message: "error en el servidor"});
    }
    if (!grupo){
      return res.status(404).send({success: false, message: "no existe el grupo"});
    }
    return res.status(200).send({success: true, grupo});
  })
}

exports.permisosGrupo = (req, res) => {
  Grupo.find({_id: req.params.grupoId , creador: req.userId})
  .exec((err, grupo) => {
    if (err) {
      return res.status(404).send({success: false})
    }
    if (grupo){
      return res.status(200).send({success: true , esCreador: true , esModerador: true})

    }
    else{
      Grupo.find({_id: req.params.grupoId, moderador: req.userId })
      .exec(
        (err, grupo) => {
          if (err) {
            return res.status(404).send({success: false})
          }
          if (grupo){
            return res.status(200).send({success: true , esCreador: false , esModerador: true})
            
          }
          return res.status(404).send({success: false, esCreador: false, esModerador: false})
        })
    }
    
  })
}

/**
 * Método para grabar un mensaje en la base de datos
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.nuevoMensaje = (req, res) => {
  const mensaje = new Mensaje({
    origen: req.userId,
    destino: req.body.grupoId,
    fecha: Date.now(),
    contenido: req.body.contenido
  });
  mensaje.save((err) => {
    if (err) {
      return res.status(500).send({ message: err});
    }
    return res.status(200).send({ message: "Mensaje Guardado"});
  })
};

/**
 * Método para ver los mensajes (guardados en la base de datos) de un grupo
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.verMensajes = (req, res) => {
  Mensaje.find({destino: req.body.grupoId})
  .exec((err, msgs) => {
    if (err) {
      return res.status(500).send({ message: err});
    }
    return res.status(200).send(msgs);
  })
};

/**
 * Método para eliminar un grupo
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.eliminarGrupo = (req, res) => {
  Grupo.findByIdAndDelete(req.body.grupoId)
  .exec((err) => {
    if (err) {
      return res.status(500).send({ message: err});
    }
    return res.status(200).send({ message: "grupo eliminado"});
  });
};

/**
 * Método para ver los grupos creados por el usuario que realiza la petición
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.misGrupos = (req, res) => {
  Grupo.find({creador: req.userId})
  .exec((err, grupos) => {
    if (err) {
      return res.status(500).send({ message: err});
    }
    return res.status(200).send(grupos);
  })
};

/**
 * Método para ver los grupos de los cuales el usuario forma parte
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.integranteEnGrupos = (req, res) => {
  Grupo.find({integrantes: req.userId})
  .exec((err, grupos) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ message: err});
    }
    return res.status(200).send(grupos);

  });
};

/**
 * Método para ver los grupos en los que el usuario es moderador
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.moderadorEnGrupos = (req, res) => {
  Grupo.find({moderadores: req.userId})
  .exec((err, grupos) => {
    if (err) {
      return res.status(500).send({ message: err});
    }
    return res.status(200).send(grupos);
  });
};

/**
 * Método para visualizar los grupos públicos registrados en la aplicación
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.gruposPublicos = (req, res) => {
  Grupo.find({publico: true})
  .exec((err, grupos) => {
    if (err) {
      return res.status(500).send({ message: err});
    }
    return res.status(200).send(grupos);
  });
};

/**
 * Método para agregar a un usuario como integrante de un grupo
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.agregarUsuario = (req, res) => {
    Grupo.findById(req.body.grupoId)
    .exec((err, grupo) => {
      if (err) {
        return res.status(500).send({ message: err });
      }
      if (!grupo) {
        return res.status(404).send({ message: "Grupo no encontrado." });
      }
      Usuario.findById(req.body.usuarioId)
      .exec((err,user) => {
        if (err) {
          return res.status(500).send({ message: err });
        }
        if (!user) {
          return res.status(404).send({ message: "Usuario no encontrado." });
        }
        grupo.integrantes.push(user._id);
        grupo.save();
        return;
      })
    });
};

exports.addIntegrantes = (req, res) => {
  Grupo.findById(req.params.id)
  .exec((err, grupo) => {
    if (err) {
      return res.status(500).send({ message: err });
    }
    if (!grupo) {
      return res.status(404).send({ message: "Grupo no encontrado." });
    }
    // Se filtran los usuarios que ya son integrantes para evitar duplicados
    const integrantesFiltrado = [];
    req.body.forEach(elemento => {
      if (!grupo.integrantes.includes(elemento)){
        integrantesFiltrado.push(elemento);
      }
    });
    console.log("Original: " + req.body)
    console.log("Filtrado: " + integrantesFiltrado)
    grupo.integrantes = grupo.integrantes.concat(integrantesFiltrado)
    grupo.save();
    
    return res.status(200).send({ message: "Moderadores añadidos" });
  })
}

exports.addModeradores = (req, res) => {
  Grupo.findById(req.params.id)
  .exec((err, grupo) => {
    if (err) {
      return res.status(500).send({ message: err });
    }
    if (!grupo) {
      return res.status(404).send({ message: "Grupo no encontrado." });
    }
    // Se filtran los usuarios que ya estan integrados para evitar duplicados
    const integrantesFiltrado = [];
    req.body.forEach(elemento => {
      if (!grupo.moderadores.includes(elemento)){
        integrantesFiltrado.push(elemento);
      }
    });
    grupo.moderadores = grupo.moderadores.concat(integrantesFiltrado)
    grupo.save();
    
    return res.status(200).send({ message: "Integrantes añadidos" });
  })
}
