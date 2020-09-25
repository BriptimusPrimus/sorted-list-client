var supertest = require('supertest');

describe('Server API Routes', function() {
  process.env.NODE_ENV = 'test';
  var app = require('../../app');
  var api = supertest(app);

  describe('employees', function() {

    it('should get 20 rows by default', function(done) {
      api
        .get('/api/employees')
        .expect("Content-type",/json/)
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.have.property('list');
          expect(res.body.list).to.be.a('array');
          expect(res.body.list).to.have.length(20);
          done();
        });
    });

    it('should get specified number of rows', function(done) {
      api
        .get('/api/employees')
        .query('count=5')
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.have.property('list');
          expect(res.body.list).to.be.a('array');
          expect(res.body.list).to.have.length(5);
          done();
        });
    });
  });

  describe('sort', function() {

    it('should sort by first name', function(done) {
      api
        .get('/api/employees')
        .query('sort=firstName')
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.have.property('list');
          expect(res.body.list[0].firstName.toLowerCase())
            .to.be.equal('aaron');
          expect(res.body.list[0].id).to.be.equal(40797);
          done();
        });
    });

    it('should sort in descendant order', function(done) {
      api
        .get('/api/employees')
        .query('sort=firstName&order=DESC')
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.have.property('list');
          expect(res.body.list[0].firstName.toLowerCase())
            .to.be.equal('zulma');
          expect(res.body.list[0].id).to.be.equal(42014);
          done();
        });
    });

    it('should not sort when non existant field is provided', function(done) {
      api
        .get('/api/employees')
        .query('sort=lastname')
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.have.property('list');
          expect(res.body.list[0].id).to.be.equal(10001);
          done();
        });
    });
  });

  describe('pagination', function() {

    it('should skip specific number of rows when asked for page 2', function(done) {
      api
        .get('/api/employees')
        .query('count=5&page=2')
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.have.property('list');
          expect(res.body.list).to.have.length(5);
          expect(res.body.list[0].firstName.toLowerCase())
            .to.be.equal('pedro antonio');
          expect(res.body.list[0].id).to.be.equal(10155);
          done();
        });
    });

    it('should skip 20 rows by default when asked for page 2', function(done) {
      api
        .get('/api/employees')
        .query('page=2')
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.have.property('list');
          expect(res.body.list).to.have.length(20);
          expect(res.body.list[0].firstName.toLowerCase())
            .to.be.equal('feliciano');
          expect(res.body.list[0].id).to.be.equal(10976);
          done();
        });
    });

    it('should get first page when invalid page number is provided', function(done) {
      api
        .get('/api/employees')
        .query('page=x')
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.have.property('list');
          expect(res.body.list[0].id).to.be.equal(10001);
          done();
        });
    });
  });
});