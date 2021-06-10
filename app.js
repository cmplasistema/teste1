const { Sequelize, DataTypes } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('melob187_cmp', 'melob187_cmpu', '7B6h&c3mu', {
    host: 'br882.hostgator.com.br',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 5000
      },
  });

var Clientes = sequelize.define('clientes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING
    },
    endereco: {
        type: DataTypes.STRING
    },
    cidade: {
        type: DataTypes.STRING
    },
    telefone: {
        type: DataTypes.STRING
    }
})

//Cria colunas caso não exista no banco de dados
// Clientes.sync({ force: true });         //// sequelize.sync({ force: true }); sincroniza todas as talelas de uma só vez
// console.log("The table for the Clientes model was just (re)created!");

async function main() {
    const jane = Clientes.build({ nome: "Jack" });
    console.log(jane instanceof Clientes); // true
    console.log(jane.nome); // "Jane"
    
    await jane.save();
    console.log('Jane was saved to the database!');
  }

main();