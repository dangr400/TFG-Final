/**
 * @file Módulo que describe o esquema dun usuario na BD.
 * @author Daniel Gomez Rodriguez
 * @since 20.05.2022
 * @returns mongoose.model
 */
const mongoose = require("mongoose");

const UsuarioSchema = 
  new mongoose.Schema({
    nome_usuario: String,
    contrasinal: {type: String, select: false},
    configuracion: 
      { select:false,
        publico: {type: Boolean, default: false},
        persistencia_msgs: {type: Boolean, default: false}
      },
    contactos:
      [
        {type: mongoose.Schema.Types.ObjectId, ref: "usuario"}
      ]
      
  },
  {
    timestamps : true,
    collection : "usuarios",
  });

UsuarioSchema.statics.getUserById = async function (id) {
  try {
    const usuario = await this.find({ _id: id });
    return usuario;
  } catch (error) {
    console.log("No se ha encontrado el usuario")
  }
}

UsuarioSchema.statics.getUsersByIds = async function (ids) {
  try {
    const users = await this.find({ _id: { $in: ids } });
    return users;
  } catch (error) {
    console.log("ERROR ENCONTRANDO USUARIO");
    throw error;
  }
}

UsuarioSchema.statics.getUserIdByName = async function (nombre) {
  try {
    const usuario = await this.findOne({ nome_usuario: nombre });
    return usuario._id;
  } catch (error) {
    console.log("Error buscando usuario:\n" + error);
    throw error;
  }
  
}

UsuarioSchema.statics.permanenciaMsgs = async function (id) {
  try {
    const usuario = await this.findById(id, 'configuracion');
    return usuario.configuracion.persistencia_msgs;
  } catch(error) {
    console.log("Error recuperando permisos de usuario:\n" + error);
    throw error;
  }
}

const Usuario = mongoose.model("usuario", UsuarioSchema);
module.exports = Usuario;