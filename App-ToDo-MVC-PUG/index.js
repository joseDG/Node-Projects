const express = require("express");
const routes = require("./routes");
const path = require("path");
const bodyParser = require("body-parser");
//const expressValidator = require("express-validator");

//Helpers con algunas funciones
const helpers = require("./helpers");

//Crear la conexion a la DB
const db = require("./config/db");

//Importar los modelos de la base de datos
require("./models/Proyectos");
require("./models/Tareas");

db.sync()
  .then(() => console.log("Conectado al Servidor"))
  .catch((error) => console.log(error));

//crea la app de express
const app = express();

//Donde cargar los archivos estaticos
app.use(express.static("public"));

//Habilitar Pug
app.set("view engine", "pug");

//Añadir la carpeta de las vistas
app.set("views", path.join(__dirname, "./views"));

//Pasar var dump a la aplicacion
app.use((req, res, next) => {
  res.locals.vardump = helpers.vardump;
  next();
});

//Habiltiando bodyParse para leer datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));

// Agregamos express validator a toda la aplicación
//app.use(expressValidator());

//Se llama alas rutas
app.use("/", routes());

app.listen(3000);
