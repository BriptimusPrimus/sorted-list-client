var supertest = require('supertest');

describe('Server API Routes', () => {
    var app = require('../../../app');
    var api = supertest(app);

    describe('employees', () => {
        test('Gets 20 rows by default', done => {
            api
                .get('/api/employees')
                .expect("Content-type", /json/)
                .expect(200)
                .end((err, res) => {
                    expect(res.body.list).toBeDefined();
                    expect(res.body.list).toBeInstanceOf(Array);
                    expect(res.body.list.length).toBe(20);
                    done();
                });
        });

        test('Gets specified number of rows', done => {
            api
                .get('/api/employees')
                .query('count=5')
                .expect(200)
                .end((err, res) => {
                    expect(res.body.list).toBeDefined();
                    expect(res.body.list).toBeInstanceOf(Array);
                    expect(res.body.list.length).toBe(5);
                    done();
                });
        });

        test('Returns with error message on service failure', done => {
            api
                .get('/api/employees')
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
                .get('/api/employees')
                .query('count=5&page=2')
                .expect(200)
                .end((err, res) => {
                    expect(res.body.list.length).toBe(5);
                    expect(res.body.list[0].firstName.toLowerCase()).toEqual('pedro antonio');
                    expect(res.body.list[0].id).toEqual(10155);
                    done();
                });
        });

        test('Skips 20 rows by default when asked for page 2', done => {
            api
                .get('/api/employees')
                .query('page=2')
                .expect(200)
                .end((err, res) => {
                    expect(res.body.list.length).toBe(20);
                    expect(res.body.list[0].firstName.toLowerCase()).toEqual('feliciano');
                    expect(res.body.list[0].id).toEqual(10976);
                    done();
                });
        });

        test('Gets first page when invalid page number is provided', done => {
            api
                .get('/api/employees')
                .query('page=x')
                .expect(200)
                .end((err, res) => {
                    expect(res.body.list).toBeDefined();
                    expect(res.body.list[0].id).toEqual(10001);
                    done();
                });
        });
    });

    describe('Hello world', () => {
        test('Returns greeting message', done => {
            api
                .get('/api/')
                .expect("Content-type", /json/)
                .expect(200)
                .end((err, res) => {
                    expect(res.body).toEqual({
                        data: 'Hello World!'
                    });
                    done();
                });
        });
    });
});