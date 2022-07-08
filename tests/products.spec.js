const request = require('supertest');
const app = require('../app');

describe('Products Tests', () => {

    describe('GET /api/products', () => {

        let response;
        beforeEach(async () => {
            response = await request(app).get('/api/products').send();
        })

        it('debería devolver una respuesta correcta', async () => {


            expect(response.statusCode).toBe(200);
        });

        it('debería devolver un objeto en formato json', async () => {
            expect(response.headers['content-type']).toContain('json');
        });

        it(('deberia devolver un array'), () => {
            expect(response.body).toBeInstanceOf(Array);
        })

    });

});