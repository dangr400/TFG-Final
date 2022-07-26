/**
 * Módulo para la conexión con la base de datos, así como para poder acceder a las distintas colecciones.
 * 
 * @file Modulo de la base de datos
 * @author Daniel Gomez Rodriguez
 * @since 02.10.2021
 */

 const mongoose = require("mongoose");
 mongoose.Promise = global.Promise;
 
 const db = {};
 db.mongoose = mongoose;
 db.url_atlas = process.env.DB_URL_ATLAS;
 db.url_local = process.env.DB_URL;
 db.usuario = require("./usuario.model.js");
 db.grupos = require("./chatgroup.model.js");
 db.peticion = require("./peticionContacto.model.js");
 db.salas = require("./sala.model.js");
 
 db.ROLES = ["user", "admin", "moderator"];
 
 module.exports = db;