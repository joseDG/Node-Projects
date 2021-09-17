const express = require("express");
const router = express.Router();

//Importar el cosntrolador
const proyectosController = require("../controllers/proyectosController");

module.exports = function () {
  //ruta para el home
  router.get("/", proyectosController.proyectosHome);

  router.get("/nosotros", (req, res) => {
    res.render("nosotros");
  });

  return router;
};
