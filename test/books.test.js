const request = require('supertest');
const app = require('../app');
const { expect } = require('chai');

describe('Books API', () => {
    it('should add a book', async () => {
        const res = await request(app)
            .post('/books')
            .send({ id: '1', title: '1984' });
        expect(res.status).to.equal(201);
        expect(res.body.title).to.equal('1984');
    });

    it('should get all books', async () => {
        const res = await request(app).get('/books');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    });

    it('should get a single book', async () => {
        const res = await request(app).get('/books/1');
        expect(res.status).to.equal(200);
        expect(res.body.id).to.equal('1');
    });

    it('should delete a book', async () => {
        const res = await request(app).delete('/books/1');
        expect(res.status).to.equal(204);
    });
});
