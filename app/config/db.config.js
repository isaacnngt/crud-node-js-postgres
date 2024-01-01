module.exports = {
  HOST: "localhost", // Host do banco de dados (pode ser um endereço IP ou 'localhost' para o mesmo servidor)
  USER: "postgres", // Nome de usuário do banco de dados
  PASSWORD: "123", // Senha do banco de dados
  DB: "postgres", // Nome do banco de dados
  dialect: "postgres", // Dialeto do banco de dados (postgres para PostgreSQL)
  pool: {
    max: 5, // Número máximo de conexões no pool
    min: 0, // Número mínimo de conexões no pool
    acquire: 30000, // Tempo máximo, em milissegundos, que uma conexão pode ser mantida no pool. Após esse tempo, será liberada.
    idle: 10000, // Tempo máximo, em milissegundos, que uma conexão pode estar inativa no pool antes de ser liberada.
  },
};
