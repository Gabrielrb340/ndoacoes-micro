//cinema-catalog.test.js
const test = require('tape');
const supertest = require('supertest');
const app = require('../app');

function runTests() {

    test('GET /campanha/5ef502d9b2e40346cc4ede04', (t) => {
        supertest(app)
            .get('/campanha/5ef502d9b2e40346cc4ede04')
            .expect('Content-Type', /json/)
            .expect(200)
            .end((err, res) => {
                if (res.body && res.body.length > 0);
                t.error(err, 'Sem erros')
                t.assert(res.body, "Campanha id 1 retornado" + res.body)
                t.end()
            })
    })
}

module.exports = { runTests }