// Módulo de funciones para las salas donde se establecen las convesaciones
// Autor: Daniel Gómez Rodríguez
// Referencias: Bezkoder

const makeValidation = require('@withvoid/make-validation');
const Salas  = require("../models/sala.model");
const Mensajes = require("../models/mensaje.model");
const Usuarios = require("../models/usuario.model");

/**
 * Función para iniciar una sala de chat para un grupo
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.initiateGrupos = async (req, res) => {
    try {
      const iniciador = req.userId;
      const grupo = req.body._id;
      const chatRoom = await Salas.iniciarChatGrupo(grupo , iniciador);
      return res.status(200).json({ success: true, chatRoom });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, message: error });
    }
};

/**
 * Función para iniciar una sala de chat para dos usuarios
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.initiateUsuarios = async (req, res) => {
  try {
    const receptor = req.body._id;
    const iniciadorChat = req.userId;
    const allUserIds = [receptor, iniciadorChat];
    const chatRoom = await Salas.iniciarChatUsuarios(allUserIds);
    return res.status(200).json({ success: true, chatRoom });
  } catch (error) {

    return res.status(500).json({ success: false, message: error });
  }
};

/**
 * Función para emitir un mensaje a los integrantes de la sala, así como de guardarlo en la base de datos
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.postMessage = async (req, res) => {
    try {
      const salaId = req.params.roomId;
      const validacion = makeValidation(types => ({
        payload: req.body,
        checks: {
          contenido: { type: types.string },
        }
      }));
      if (!validacion.success) return res.status(400).json({ ...validacion });
  
      const messagePayload = {
        contenido: req.body.contenido,
        type: "text"
      };

      const emisor = req.userId;
      const permisosMsgs = await Usuarios.permanenciaMsgs(emisor) 
      if (permisosMsgs){
        const post = await Mensajes.createPostInChatRoom(salaId, messagePayload, emisor);
        if (post) {
          return res.status(200).json({ success: true, post });
        }
        else {
          return res.status(500).json({ success: false, message: "error al guardar el mensaje"});
        }
      }
      else {
        return res.status(200).json({success: true, message: "mensaje no guardado"});
      }
    } catch (error) {
      return res.status(500).json({ success: false, error: error })
    }
  };
/*
exports.getRecentConversation = async (req, res) => {
try {
    const usuarioLogueado = req.userId;
    const opciones = {
    page: parseInt(req.query.page) || 0,
    limit: parseInt(req.query.limit) || 10,
    };
    const salas = await Salas.getChatRoomsByUserId(usuarioLogueado);
    const salasIds = salas.map(sala => sala._id);
    const recentConversation = await Mensajes.getRecentConversation(
    salasIds, opciones, usuarioLogueado
    );
    return res.status(200).json({ success: true, conversation: recentConversation });
} catch (error) {
    return res.status(500).json({ success: false, error: error })
}
},
*/
/**
 * Función para recuperar la conversacion de una sala
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.getConversationByRoomId = async (req, res) => {
    try {
      const salaId = req.params.roomId;
      const sala = await Salas.getChatRoomByRoomId(salaId)
      if (!sala) {
        return res.status(400).json({
          success: false,
          message: 'No existe una sala con este id',
        })
      }
      const users = await Usuarios.getUsersByIds(sala.hablando);
      const opciones = {
        page: parseInt(req.query.page) || 0,
        limit: parseInt(req.query.limit) || 10,
      };
      const conversation = await Mensajes.getConversationByRoomId(salaId, opciones);
      return res.status(200).json({
        success: true,
        conversation,
        users,
      });
    } catch (error) {
      return res.status(500).json({ success: false, error });
    }
};

/**
 * Función para marcar un mensaje como leido por el usuario
 * @param {any} req
 * @param {any} res
 * @returns {any}
 */
exports.markConversationReadByRoomId = async (req, res) => {
    try {
      const { roomId } = req.params;
      const room = await Salas.getChatRoomByRoomId(roomId)
      if (!room) {
        return res.status(400).json({
          success: false,
          message: 'Non existe unha sala con este id',
        })
      }

      const currentLoggedUser = req.userId;
      const result = await Mensajes.markMessageRead(roomId, currentLoggedUser);
      return res.status(200).json({ success: true, data: result });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ success: false, error });
    }
};

exports.entrarConversacion = async (req, res) => {
  try {
    const { roomId } = req.params;
    const sala = await Salas.getChatRoomByRoomId(roomId)
    if (!sala) {
      return res.status(400).json({
        success: false,
        message: 'Non existe unha sala con este id',
      })
    }

    const currentLoggedUser = req.userId;
    const result = await Salas.addHablante(roomId, currentLoggedUser);
    return res.status(200).json({ success: true, data: result });

  } catch(error) {
    console.log(error);
    return res.status(500).json({ success: false, error});
  }
};

exports.salirConversacion = async (req, res) => {
  try {
    const { roomId } = req.params;
    const sala = await Salas.getChatRoomByRoomId(roomId)
    if (!sala) {
      return res.status(400).json({
        success: false,
        message: 'Non existe unha sala con este id',
      })
    }

    const currentLoggedUser = req.userId;
    const result = await Salas.salirHablante(roomId, currentLoggedUser);
    return res.status(200).json({ success: true, data: result });

  } catch(error) {
    console.log(error);
    return res.status(500).json({ success: false, error});
  }
};