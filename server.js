const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// analisa solicitações do tipo de conteúdo - application/json
app.use(express.json());

// analisar solicitações do tipo de conteúdo - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize
  .sync()
  .then(() => {
    console.log("Banco de dados sincronizado.");
  })
  .catch((err) => {
    console.log("Falha ao sincronizar banco de dados: " + err.message);
  });

// rota simples
app.get("/", (req, res) => {
  res.json({ message: "Bem-vindo ao aplicativo." });
});

require("./app/routes/turorial.routes")(app);

// definir porta, ouvir solicitações
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`O servidor está rodando na porta ${PORT}.`);
});
