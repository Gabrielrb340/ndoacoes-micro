//cinema-catalog.test.js
const test = require('tape');
const supertest = require('supertest');
const app = require('../app');

function runTests() {

    test('GET /doador/5ef5066612881f2e50f38a1f', (t) => {
        supertest(app)
            .get('/doador/5ef5066612881f2e50f38a1f')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (res.body && res.body.length > 0);
                t.error(err, 'Sem erros')
                t.assert(res.body, "Campanha id 5ef5066612881f2e50f38a1f retornado" + JSON.stringify(res.body))
                t.end()
            })
    })
}

module.exports = { runTests }