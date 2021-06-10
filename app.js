let AWS = require("aws-sdk");
const { v4: uuidv4 } = require('uuid');

AWS.config.update({
  region: "us-east-2",
  endpoint: "https://dynamodb.us-east-2.amazonaws.com",
  accessKeyId: "AKIAUHCAVDONGAUSAM7U",
  secretAccessKey: "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"
});

let docClient = new AWS.DynamoDB.DocumentClient();

let getClientes = async () => {

    let params = {
        TableName: "clientes",
    }

    let clientes = await docClient.scan(params).promise();
    console.log(clientes);
    return clientes;

};

let putClient = function (data) {

    // let input = {
    //     "nome": "José"
    // };

    let params = {
        TableName : "clientes",
        Item: data
    };

    docClient.put(params, function (err,data) {
        if (err) {
            console.error("clientes::save::error. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("clientes::save::success. Table description JSON:", JSON.stringify(data, null, 2));
        }
    })

};

let c1 = {
    "id": uuidv4(),
    "nome": "Raquel",
    "cidade": "Novo Hamburgo"
};

console.log(c1);

putClient(c1);
getClientes();

// save();

// var dynamodb = new AWS.DynamoDB();


// dynamodb.createTable(params, function(err, data) {
//     if (err) {
//         console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
//     } else {
//         console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
//     }
// });









// var port = process.env.PORT || 3000,
//     http = require('http'),
//     fs = require('fs'),
//     html = fs.readFileSync('index.html');

// var log = function(entry) {
//     fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
// };

// var server = http.createServer(function (req, res) {
//     res.writeHead(200);
//     res.write(html);
//     res.end();
// });

// // Listen on port 3000, IP defaults to 127.0.0.1
// server.listen(port);

// // Put a friendly message on the terminal
// console.log('Server running at http://127.0.0.1:' + port + '/');










// const { Sequelize, DataTypes } = require('sequelize');


// // Option 2: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('melob187_cmp', 'melob187_cmpu', '7B6h&c3mu', {
//     host: 'br882.hostgator.com.br',
//     port: 3306,
//     dialect: 'mysql',
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 5000
//       },
//   });

// var Clientes = sequelize.define('clientes', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true
//     },
//     nome: {
//         type: DataTypes.STRING
//     },
//     endereco: {
//         type: DataTypes.STRING
//     },
//     cidade: {
//         type: DataTypes.STRING
//     },
//     telefone: {
//         type: DataTypes.STRING
//     }
// })

// //Cria colunas caso não exista no banco de dados
// // Clientes.sync({ force: true });         //// sequelize.sync({ force: true }); sincroniza todas as talelas de uma só vez
// // console.log("The table for the Clientes model was just (re)created!");

// async function main() {
//     const jane = Clientes.build({ nome: "Jack" });
//     console.log(jane instanceof Clientes); // true
//     console.log(jane.nome); // "Jane"
    
//     await jane.save();
//     window.console.log('Jane was saved to the database!');
//   }

//   main();


