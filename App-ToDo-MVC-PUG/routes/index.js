const express = require("express");
const router = express.Router();

//paquete para validar datos
const { body } = require("express-validator/check");

//Importar el cosntrolador
const proyectosController = require("../controllers/proyectosController");
const tareasController = require("../controllers/tareasController");

module.exports = function () {
  //ruta para el home
  router.get("/", proyectosController.proyectosHome);

  /*================================*/
  /*|===========Rutas Proyectos=======|/
  /*===============================*/

  //obtener los proyectos
  router.get("/nuevo-proyecto", proyectosController.formularioProyecto);

  //creacion del nuevo proyecto
  router.post(
    "/nuevo-proyecto",
    body("nombre").not().isEmpty().trim().escape(),
    proyectosController.nuevoProyecto
  );

  //Listar Proyecto
  router.get("/proyectos/:url", proyectosController.proyectoPorUrl);

  //Actualziar el proeycto
  router.get("/proyecto/editar/:id", proyectosController.formularioEditar);

  //Guardar proyecto actualizado
  router.post(
    "/nuevo-proyecto/:id",
    //authController.usuarioAutenticado,
    body("nombre").not().isEmpty().trim().escape(),
    proyectosController.actualizarProyecto
  );

  // Eliminar Proyecto
  router.delete(
    "/proyectos/:url",
    //authController.usuarioAutenticado,
    proyectosController.eliminarProyecto
  );

  /*================================*/
  /*|===========Rutas Tareas=======|/
  /*===============================*/

  //Crear una tarea
  router.post(
    "/proyectos/:url",
    //authController.usuarioAutenticado,
    tareasController.agregarTarea
  );

  // Actualizar Tarea
  router.patch(
    "/tareas/:id",
    //authController.usuarioAutenticado,
    tareasController.cambiarEstadoTarea
  );

  // Eliminar Tarea
  router.delete(
    "/tareas/:id",
    authController.usuarioAutenticado,
    tareasController.eliminarTarea
  );

  return router;
};
