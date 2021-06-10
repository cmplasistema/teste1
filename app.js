const { Sequelize, DataTypes } = require('sequelize');


// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize('melob187_cmp', 'melob187_cmpu', '7B6h&c3mu', { });


var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {
            if (req.url === '/') {
                log('Received message: ' + body);
            } else if (req.url = '/scheduled') {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
            }

            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
            res.end();
        });
    } else {
        res.writeHead(200);
        res.write(html);
        res.end();
    }
});

// Listen on port 3000, IP defaults to 127.0.0.1
server.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');





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

//Cria colunas caso não exista no banco de dados
// Clientes.sync({ force: true });         //// sequelize.sync({ force: true }); sincroniza todas as talelas de uma só vez
// console.log("The table for the Clientes model was just (re)created!");

// async function main() {
//     const jane = Clientes.build({ nome: "Jack" });
//     console.log(jane instanceof Clientes); // true
//     console.log(jane.nome); // "Jane"
    
//     await jane.save();
//     console.log('Jane was saved to the database!');
//   }

// main();