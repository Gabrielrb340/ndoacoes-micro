//cinema-catalog.test.js
const test = require('tape');
const supertest = require('supertest');
const app = require('../app');

function runTests() {

    test('GET /ong/5ef50cde12881f2e50f38a22', (t) => {
        supertest(app)
            .get('/ong/5ef50cde12881f2e50f38a22')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (res.body && res.body.length > 0);
                t.error(err, 'Sem erros')
                t.assert(res.body != null, "Ong id 5ef50cde12881f2e50f38a22 retornado" + JSON.stringify(res.body))
                t.end()
            })
    })
}

module.exports = { runTests }