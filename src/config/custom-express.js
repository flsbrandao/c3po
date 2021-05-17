const express = require('express');
const routes = require('../app/routes');
const app = express();

app.use(express.json());

routes(app);

//Middleware que irá retorna a página 404 - not found
app.use((req, res, next) => {
  return res.status(404).json({message: "Route invalid"});
});

//Middleware que irá retornar página de erro
app.use((error, req, res, next) => {
  console.log(error.message)
  return res.status(500).json({message: "Error"});
});


module.exports = app;