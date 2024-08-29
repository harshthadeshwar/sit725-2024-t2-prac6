const request = require('supertest');
const { expect } = require('chai');
const app = require('../server');

describe('API Endpoints', () => {
    describe('GET /', () => {
        it('should return a welcome message', async () => {
            const res = await request(app).get('/');
            expect(res.status).to.equal(200);
            expect(res.body.message).to.equal('Welcome to the API!');
        });
    });

    describe('POST /add', () => {
        it('should return the sum of two numbers', async () => {
            const res = await request(app)
                .post('/add')
                .send({ a: 5, b: 10 });

            expect(res.status).to.equal(200);
            expect(res.body.sum).to.equal(15);
        });

        it('should return 400 for invalid inputs', async () => {
            const res = await request(app)
                .post('/add')
                .send({ a: '5', b: '10' });

            expect(res.status).to.equal(400);
            expect(res.body.message).to.equal('Invalid input, numbers expected.');
        });
    });
});
