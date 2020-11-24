const supertest = require('supertest');
const app = require('../../../app');

describe('Server API Routes', () => {
  const api = supertest(app);

  describe('customers', () => {
    test('Gets 20 rows by default', done => {
      api
        .get('/api/customers')
        .expect('Content-type', /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body.customers).toBeDefined();
          expect(res.body.customers).toBeInstanceOf(Array);
          expect(res.body.customers.length).toBe(20);
          done();
        });
    });

    test('Gets specified number of rows', done => {
      api
        .get('/api/customers')
        .query('count=5')
        .expect(200)
        .end((err, res) => {
          expect(res.body.customers).toBeDefined();
          expect(res.body.customers).toBeInstanceOf(Array);
          expect(res.body.customers.length).toBe(5);
          done();
        });
    });

    test('Returns with error message on service failure', done => {
      api
        .get('/api/customers')
        .query('sort=forceServiceError')
        .expect(500)
        .end((err, res) => {
          expect(res.body.errMessage).toBe('Mock DAL error');
          done();
        });
    });
  });

  describe('Sort', () => {
    test('Skips specific number of rows when asked for page 2', done => {
      api
        .get('/api/customers')
        .query('count=5&page=2')
        .expect(200)
        .end((err, res) => {
          expect(res.body.customers.length).toBe(5);
          expect(res.body.customers[0].firstName.toLowerCase()).toEqual(
            'jennifer'
          );
          expect(res.body.customers[0].id).toEqual(6);
          done();
        });
    });

    test('Skips 20 rows by default when asked for page 2', done => {
      api
        .get('/api/customers')
        .query('page=2')
        .expect(200)
        .end((err, res) => {
          expect(res.body.customers.length).toBe(20);
          expect(res.body.customers[0].firstName.toLowerCase()).toEqual(
            'michelle'
          );
          expect(res.body.customers[0].id).toEqual(21);
          done();
        });
    });

    test('Gets first page when invalid page number is provided', done => {
      api
        .get('/api/customers')
        .query('page=x')
        .expect(200)
        .end((err, res) => {
          expect(res.body.customers).toBeDefined();
          expect(res.body.customers[0].id).toEqual(1);
          done();
        });
    });
  });
});
