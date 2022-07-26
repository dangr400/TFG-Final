const db = require("../models");
const User = db.usuario;

/**
 * Función para comprobar que el nombre de usuario o el email no están registrados en la aplicación
 * @param {any} req
 * @param {any} res
 * @param {any} next
 * @returns {any}
 */
const checkDuplicateUsername = (req, res, next) => {
  // Comprobacion de nombre de usuario
  User.findOne({
    nome_usuario: req.body.username
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    if (user) {
      res.status(400).send({ message: "Nombre de usuario en uso, escoja otro" });
      return;
    }
    next();
  });
};
/*
checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }

  next();
};
*/
const verifySignUp = {
  checkDuplicateUsername: checkDuplicateUsername
};

module.exports = verifySignUp;