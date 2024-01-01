// Importa as configurações do banco de dados do arquivo db.config.js
const dbConfig = require("../config/db.config.js");

// Importa a biblioteca Sequelize para manipulação do banco de dados
const Sequelize = require("sequelize");

// Cria uma nova instância do Sequelize utilizando as configurações do banco de dados
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST, // Define o host do banco de dados
  dialect: dbConfig.dialect, // Define o dialeto do banco de dados (postgres, no caso)

  // Configuração do pool de conexões
  pool: {
    max: dbConfig.pool.max, // Número máximo de conexões no pool
    min: dbConfig.pool.min, // Número mínimo de conexões no pool
    acquire: dbConfig.pool.acquire, // Tempo máximo de espera para adquirir uma conexão
    idle: dbConfig.pool.idle, // Tempo máximo de inatividade de uma conexão antes de ser fechada
  },
});

// Cria um objeto 'db' para armazenar instâncias do Sequelize, Sequelize em si e modelos do banco de dados
const db = {};

// Adiciona Sequelize e a instância do Sequelize ao objeto 'db'
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importa e inicializa o modelo 'tutorials' definido no arquivo tutorial.model.js
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);

// Exporta o objeto 'db' para ser utilizado em outras partes da aplicação
module.exports = db;
