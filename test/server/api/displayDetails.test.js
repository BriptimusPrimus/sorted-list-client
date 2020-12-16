const supertest = require('supertest');
const app = require('../../../app');

describe('Server API Routes', () => {
  const api = supertest(app);

  describe('details', () => {
    test('Gets record by id', done => {
      api
        .get('/api/details?id=24')
        .expect('Content-type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.customerDetails).toBeDefined();
          expect(res.body.customerDetails).toBeInstanceOf(Object);
          expect(res.body.customerDetails.id).toBe(24);
          done();
        });
    });

    test('Responds 404 when customer is not found', done => {
      api
        .get('/api/details?id=9999')
        .expect(404)
        .end((err, res) => {
          expect(res.body.customerDetails).toBe(undefined);
          done();
        });
    });

    test('Returns with error message on service failure', done => {
      api
        .get('/api/details?id=invalidval')
        .expect(500)
        .end((err, res) => {
          expect(res.body.errMessage).toBe('Mock DAL error');
          done();
        });
    });
  });
});
