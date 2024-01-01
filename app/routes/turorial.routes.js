// Exporta uma função que recebe a instância do aplicativo Express (app) como parâmetro
module.exports = (app) => {
  // Importa o controlador que contém as funções para manipulação dos Tutoriais
  const tutorials = require("../controllers/tutorial.controller.js");

  // Cria uma instância do roteador Express
  var router = require("express").Router();

  // Define rotas para manipulação de Tutoriais usando o controlador

  // Rota para criar um novo Tutorial usando o método 'create' no controlador
  router.post("/", tutorials.create);

  // Rota para recuperar todos os Tutoriais usando o método 'findAll' no controlador
  router.get("/", tutorials.findAll);

  // Rota para recuperar todos os Tutoriais publicados usando o método 'findAllPublished' no controlador
  router.get("/published", tutorials.findAllPublished);

  // Rota para recuperar um único Tutorial com base no ID usando o método 'findOne' no controlador
  router.get("/:id", tutorials.findOne);

  // Rota para atualizar um Tutorial com base no ID usando o método 'update' no controlador
  router.put("/:id", tutorials.update);

  // Rota para excluir um Tutorial com base no ID usando o método 'delete' no controlador
  router.delete("/:id", tutorials.delete);

  // Rota para excluir todos os Tutoriais usando o método 'deleteAll' no controlador
  router.delete("/", tutorials.deleteAll);

  // Aplica as rotas definidas ao caminho "/api/tutorials" no aplicativo Express
  app.use("/api/tutorials", router);
};
