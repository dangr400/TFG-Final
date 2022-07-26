/**
 * @file Módulo de controlador para os usuarios
 * @description Contén os métodos para acceder aos datos do usuario, así como as accións que pode levar a cabo
 * @author Daniel Gómez Rodríguez
 * Referenzas: Bezkoder
 * Data de última modificación: 29/05/22
 */
// Módulo de funciones para gestionar las acciones de los usuarios
// Autor: Daniel Gómez Rodríguez
// Referencias: Bezkoder

const db = require("../models");
const User = db.usuario;
const Grupos = db.grupos;
const Peticion = db.peticion;

exports.getEu = (req, res) => {
  
  User.findById(req.userId)
  .exec((err, user) => {
    if (err) {
      return res.status(500).send({message: "error en el servidor"});
    }
    if (!user){
      return res.status(404).send({ message: "No existe el usuario." });
    }
    return res.status(200).json({success: true, user});
  })
}

exports.getUsuario = (req, res) => {
  console.log(req.body);
  const idUsuario = req.body.id;
  User.getUsersByIds(idUsuario)
  .exec((err, usuarios) => {
    if (err) {
      return res.status(500).send({message: "error en el servidor"});
    }
    if (usuarios) {
      return res.status(200).send({ success: true, usuarios});
    }
  });
}

exports.actualizarUsuario = (req, res) => {
  User.findByIdAndUpdate(req.body.id, {"configuracion": req.body.configuracion}, function(err, resultado) {
    if (err) {
      return res.status(500).send({message: "error en el servidor"});
    }
    else {
      return res.status(200).send({ success: true, message: "actualizado con éxito"});
    }
  })
}

exports.getContactos = (req, res) => {
  User.findById(req.userId, 'contactos')
    .populate("contactos")
    .exec((err, contact) => {
      if (err) {
        console.log(err);
        return res.status(500).send({message: "error en el servidor"});
        
      }
      if (!contact){
        return res.status(404).send({ message: "No hay contactos añadidos." });
        
      }
      const contactos = contact.contactos;
      return res.status(200).json({success: true, contactos});
    });
}

exports.eliminarContacto = (req, res) => {
  User.findById(req.userId, 'contactos')
  .exec((err, contact) => {
    if (err) {
      console.log(err);
      return res.status(500).send({message: "error en el servidor"});
    }
    if (!contact){
      return res.status(404).send({ message: "No hay contactos añadidos." });
    }
    var contactosActualizado = contact.filter(function(value, index, arr){ 
      return value._id !== req.body._id;
    });
    User.findByIdAndUpdate(req.userId,{contactos: contactosActualizado})
    .exec((err, actualizacion) => {
      if (err) {
        console.log(err);
        return res.status(500).send({message: "error en el servidor"});
      }
      if (actualizacion){
        return res.status(200).send({ message: "Contacto eliminado" });
      }
    });
  })
}

/**
 * Función para devolver los contactos, filtrados por un nombre
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.getContactosNome = (req, res) => {
  const nombre = req.params.nombre;
  User.findById(req.userId, 'contactos')
    .populate("contactos")
    .exec((err, contact) => {
      if (err) {
        console.log(err);
        return res.status(500).send({message: "error en el servidor"});
      }
      if (!contact){
        return res.status(404).send({ message: "No hay contactos añadidos." });
      }
      const sinFiltro = contact.contactos;
      const contactos = [];
      sinFiltro.forEach(c => {
        if (c.nome_usuario.match(new RegExp(nombre))) {
          contactos.push(c);
        }
      })  
      return res.status(200).json({success: true, contactos});
    });
}

/**
 * Función para enviar una petición de contacto a otro usuario
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.enviarPeticionContacto = (req, res) => {
    User.getUserIdByName(req.body.nombre)
    .then(usuarioId => {
      const nuevaPeticion = new Peticion({
        idEmisor: req.userId,
        idReceptor: usuarioId,
        estado: "PENDIENTE",
        fecha: new Date(),
      });
      // Comprobar que non existe xa unha petición
      Peticion.countDocuments({idEmisor: req.userId, idReceptor: nuevaPeticion.idReceptor}, function (err, count) {
        if (count > 0) {
          continuar = false;
        } else {
          continuar = true;
        }
      })
      if (continuar) {
        // Comprobar que non son contactos
        User.getUserById(req.userId)
        .then(usuInit =>{
          var esContacto = false;
          var existe = usuInit[0].contactos.includes(usuarioId);
          if (existe){
            esContacto = true;
          }
          // Se non existe a peticion e non son contactos, agregar peticion
          if (!esContacto){
            nuevaPeticion.save((err, peticion) => {
              if (err) {
                return res.status(500).send({ success: false, message: err});
              }
              return res.status(200).send({ success: true, message: "Peticion Enviada"});
            });
          } else return res.status(406).send({success: true, message: "Xa é contacto, non se envia peticion"});
        });
        
      } else {
        return res.status(200).send({ success: true, message: "Xa existe unha petición para este usuario"});
      }
    }).catch(err => {
      return res.status(500).send({ message: err});
    })
}

/**
 * Función para aceptar una petición de contacto
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.aceptarPeticion = (req, res) => {
  Promise.all([
    Peticion.findById(req.body._id),
    User.findById(req.userId),
    User.findById(req.body.idEmisor._id)
  ]).then(([peticion, usuario1, usuario2]) => {
    usuario1.contactos.push(usuario2._id);
    usuario2.contactos.push(usuario1._id);
    usuario1.save();
    usuario2.save();
    peticion.delete();
    return res.status(200).send({ success: true, message: "Contacto añadido"});
  }).catch((error) => {
    console.log(error);
    return res.status(500).send({ success: false, message: "Hubo un error en el proceso"});
  });
}

/**
 * Función para rechazar una petición de contacto
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.cancelarPeticion =(req, res) => {
  Peticion.findByIdAndDelete(req.body.peticion._id)
  .exec((err) => {
    if (err) {
      return res.status(500).send({ success: true, message: err});
    }
    return res.status(200).send({ success: true, message: "peticion cancelada"});
  })

}

/**
 * Función para ver las peticiones de contacto enviadas
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.verPeticions = (req, res) => {
  Peticion.find({idEmisor: req.userId})
  .populate("idReceptor")
  .exec((err, peticiones) =>{
    if (err) {
      return res.status(500).send({ message: err});
    }
    return res.status(200).json({success:true, peticiones});
  })
}

/**
 * Función para ver las peticiones de contacto recibidas
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.verPeticionsPendentes = (req, res) => {
  Peticion.find({idReceptor: req.userId})
  .populate("idEmisor", "nome_usuario")
  .exec((err, peticiones) =>{
    if (err) {
      console.log(err);
      return res.status(500).send({ message: err});
    }
    return res.status(200).json({success:true, peticiones});
  })
}

/**
 * Función para ver los grupos creados por el usuario
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.getGrupos = (req, res) => {
  Grupos.find({creador: req.userId})
  .exec((err, grupos) => {
    if (err) {
      return res.status(500).send({ message: "grupos no encontrados"});
    }
    return res.status(200).send(grupos);
  });
}

/**
 * Funcion para eliminar un usuario de la aplicación
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.eliminarUsuario = (req, res) => {
  User.findByIdAndDelete(req.userId)
  .exec((err, exito) =>{
    if (err) {
      return res.status(500).send({ message: "No se pudo eliminar"});
    }
    return res.status(200).send({ message: "usuario eliminado"});
  })
}