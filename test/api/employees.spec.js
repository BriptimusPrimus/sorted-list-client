var supertest = require('supertest');

describe('Server API Routes', function() {
  process.env.NODE_ENV = 'test';
  var app = require('../../app');
  var api = supertest(app);

  before(function() {
    console.log('API Routes tests');
  });
 
  after(function() {
    console.log('API Routes tests are done');
  });  

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
        })
    });
  });

});