import request from 'supertest'
import should from 'should'
import app from '../../app'

describe('API /category', function() {
    it('respond with all categories', function(done) {
        request(app)
            .get('/categories')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

    it('respond with a error', function(done) {
        request(app)
            .get('/categories/1')
            .set('Accept', 'application/json')
            .expect(500)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

    it('respond a category', function(done) {
        request(app)
            .get('/categories/5a586f535199be300c671dea')
            .set('Accept', 'application/json')
            .expect(200)
            .end(function(err, res) {
                should.not.exist(err);
                let category =JSON.parse(res.text);
                console.log(JSON.parse(res.text));
                done();
            });
    });
});