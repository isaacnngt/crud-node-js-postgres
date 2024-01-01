const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

// Criar e salvar um novo tutorial
exports.create = (req, res) => {
  // Validar a requisição
  if (!req.body.title) {
    res.status(400).send({
      message: "Conteúdo não pode estar vazio!",
    });
    return;
  }

  // Criar um tutorial com os dados da requisição
  const tutorial = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  // Salvar o tutorial no banco de dados
  Tutorial.create(tutorial)
    .then((data) => {
      res.send(data); // Enviar o tutorial criado como resposta
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao criar o tutorial.",
      });
    });
};

// Recuperar todos os tutoriais do banco de dados.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  // Encontrar todos os tutoriais com base nas condições
  Tutorial.findAll({ where: condition })
    .then((data) => {
      res.send(data); // Enviar os tutoriais encontrados como resposta
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao recuperar os tutoriais.",
      });
    });
};

// Encontrar um único tutorial pelo id
exports.findOne = (req, res) => {
  const id = req.params.id;

  // Encontrar um tutorial pelo id
  Tutorial.findByPk(id)
    .then((data) => {
      res.send(data); // Enviar o tutorial encontrado como resposta
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao recuperar tutorial com id=" + id,
      });
    });
};

// Atualizar um tutorial pelo id na requisição
exports.update = (req, res) => {
  const id = req.params.id;

  // Atualizar o tutorial com base no id
  Tutorial.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial foi atualizado com sucesso.",
        });
      } else {
        res.send({
          message: `Não foi possível atualizar o tutorial com id=${id}. Talvez o tutorial não tenha sido encontrado ou req.body está vazio!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Erro ao atualizar o tutorial com id=" + id,
      });
    });
};

// Excluir um tutorial com o id especificado na requisição
exports.delete = (req, res) => {
  const id = req.params.id;

  // Excluir o tutorial com base no id
  Tutorial.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial foi excluído com sucesso!",
        });
      } else {
        res.send({
          message: `Não foi possível excluir o tutorial com id=${id}. Talvez o tutorial não tenha sido encontrado!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Não foi possível excluir o tutorial com id=" + id,
      });
    });
};

// Excluir todos os tutoriais do banco de dados.
exports.deleteAll = (req, res) => {
  // Excluir todos os tutoriais
  Tutorial.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} tutoriais foram excluídos com sucesso!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao remover todos os tutoriais.",
      });
    });
};

// Encontrar todos os tutoriais publicados
exports.findAllPublished = (req, res) => {
  // Encontrar todos os tutoriais onde 'published' é verdadeiro
  Tutorial.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data); // Enviar os tutoriais encontrados como resposta
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Ocorreu um erro ao recuperar os tutoriais.",
      });
    });
};
