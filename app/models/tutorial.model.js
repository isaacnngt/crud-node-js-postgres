// Define e exporta um modelo Sequelize chamado "tutorial" para interagir com a tabela correspondente no banco de dados
module.exports = (sequelize, Sequelize) => {
  // Define a estrutura da tabela 'tutorial' com colunas: title, description e published
  const Tutorial = sequelize.define("tutorial", {
    title: {
      type: Sequelize.STRING, // Coluna 'title' do tipo STRING
    },
    description: {
      type: Sequelize.STRING, // Coluna 'description' do tipo STRING
    },
    published: {
      type: Sequelize.BOOLEAN, // Coluna 'published' do tipo BOOLEAN
    },
  });

  // Retorna o modelo 'Tutorial' para ser utilizado em outras partes da aplicação
  return Tutorial;
};
