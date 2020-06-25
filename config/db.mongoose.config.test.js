//cinema-catalog.test.js
const test = require('tape');
const supertest = require('supertest');
const app = require('../app');
const mongoose = require('mongoose')

function runTests() {

    test('Mongoose Connection', (t) => {
        mongoose.connect(process.env.MONGO_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true });
        t.assert(mongoose.connection.readyState == 2, "Conectado com sucesso")
        t.end()
    })
    mongoose.disconnect()
    test('Mongoose Disconnection', (t) => {
        t.assert(mongoose.connection.readyState == 2, "desconectado com sucesso");
        t.end();
    })
}

module.exports = { runTests }