/**
 * @file Fichero de rutas iniciales.
 * @author Daniel Gomez Rodriguez
 * @since 20.10.2021
 * @returns mongoose.model
 */

const express = require("express");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.use('/', express.static(__dirname + '/public'));
    app.use('/static/docs.pdf', express.static(__dirname + '/public/docs/TFG_DOCUMENTACION.pdf'))
  };