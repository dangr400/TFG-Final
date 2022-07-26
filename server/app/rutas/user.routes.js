const { authJwt, verificarContactos } = require("../middlewares");
const controller = require("../controllers/usuario.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.get("/usuarios/yo", [authJwt.verifyToken], controller.getEu);

  app.get("/usuarios", [authJwt.verifyToken], controller.getUsuario)

  app.get("/usuarios/contactos", [authJwt.verifyToken], controller.getContactos);

  app.get("/usuarios/contactos/:nombre", [authJwt.verifyToken], controller.getContactosNome);

  app.delete("/usuarios/contactos/eliminarContacto", [authJwt.verifyToken], controller.eliminarContacto);

  app.post("/usuarios/enviarPeticion", [authJwt.verifyToken], [verificarContactos.comprobarExisteUsuario],[verificarContactos.comprobarContactoAgregado], [verificarContactos.comprobarPeticionExistente],  controller.enviarPeticionContacto);

  app.post("/usuarios/aceptarPeticion", [authJwt.verifyToken], controller.aceptarPeticion);

  app.delete("/usuarios/cancelarPeticion", [authJwt.verifyToken], controller.cancelarPeticion);

  app.get("/usuarios/verMisPeticiones", [authJwt.verifyToken], controller.verPeticions);

  app.get("/usuarios/verPeticionesPendientes", [authJwt.verifyToken], controller.verPeticionsPendentes);

  app.get("/usuarios/misGrupos", [authJwt.verifyToken], controller.getGrupos);

  app.put("/usuarios/actualizarUsuario", [authJwt.verifyToken], controller.actualizarUsuario)
};