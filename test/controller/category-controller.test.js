import request from 'supertest'
import should from 'should'
import app from '../../app'
import statusCode from '../../constant/constant'

describe('API /category', function() {
    it('respond with all categories', function(done) {
        request(app)
            .get('/categories')
            .set('Accept', 'application/json')
            .expect(statusCode.GET)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

    it('respond with a error with getting undefiened category', function(done) {
        request(app)
            .get('/categories/5a586f535199be300c671dea')
            .set('Accept', 'application/json')
            .expect(statusCode.NO_CONTENT)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

    it('respond a category', function(done) {
        request(app)
            .get('/categories/5a5cbd0c4c17883fb00d0504')
            .set('Accept', 'application/json')
            .expect(statusCode.GET)
            .end(function(err, res) {
                should.not.exist(err);
                let category =JSON.parse(res.text);
                console.log(category);
                done();
            });
    });

    it('add a category', function(done) {
        let category = {
            name: "食品"
        };
        request(app)
          .post('/categories')
          .set('Accept', 'application/json')
          .send(category)
          .expect(statusCode.CREATE)
          .end(function(err, res) {
            should.not.exist(err);
            console.log(res.text);
            done();
          });
    });

    it('should response a NO_CONTENT error with updating an undefiened  category', function(done) {
        let category = {
            _id: "5a586f535199be300c671deb",
            name: "饮料"
        };
        request(app)
            .put('/categories')
            .set('Accept', 'application/json')
            .send(category)
            .expect(statusCode.NO_CONTENT)
            .end(function(err, res) {
                should.not.exist(err);
                console.log(res.text);
                done();
            });
    });

    it('update a category', function(done) {
        let category = {
            _id: "5a5cbd0c4c17883fb00d0504",
            name: "饮料"
        };
        request(app)
            .put('/categories')
            .set('Accept', 'application/json')
            .send(category)
            .expect(statusCode.PUT)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

    //5a58353a016aa55ea4c1d8ae
    it('should response an error with category no defiened', function(done) {
        let category = {
          _id: "5a58353a016aa55ea4c1d8ae"
        };
        request(app)
          .delete('/categories')
          .set('Accept', 'application/json')
          .send(category)
          .expect(statusCode.NOT_FOUND)
          .end(function(err, res) {
            should.not.exist(err);
            console.log(res.text);
            done();
          });
      });
});