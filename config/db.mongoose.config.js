const mongoose = require('mongoose');
var conn;

async function connect() {
    try {
        conn = mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("CONEXÃO COM BANCO DE DADOS ESTABELECIDA COM SUCESSO");
        mongoose.connection.on('error', err => {
            console.log('<<<<ERRO DURANTE A CONEXÃO>>>>', err);
        })
    } catch (error) {
        console.log("CONEXÃO COM BANCO DE DADOS ESTABELECIDA <SEM> SUCESSO")
        throw new error("Database connection error");
    }
}

function closeConnection() {
    if (conn != null) {
        mongoose.disconnect();
    }
}
module.exports = { connect, closeConnection }