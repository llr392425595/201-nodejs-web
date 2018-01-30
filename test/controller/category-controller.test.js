import request from 'supertest'
import should from 'should'
import app from '../../app'
import constant from '../../constant/constant'

describe('API /category', function() {
    it('GET /categories should return all category', function(done) {
        request(app)
            .get('/categories')
            .set('Accept', 'application/json')
            .expect(constant.httpCode.OK)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

    it('GET /categories/:categoryId', function(done) {
        request(app)
            .get('/categories/5a6af4489fb8c52abc3182e4')
            .set('Accept', 'application/json')
            .expect(constant.httpCode.OK)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

    it('POST /categories', function(done) {
        let category = {
            _id:"5a6af4489fb8c52abc3182e3",
            name: "测试分类"
        };
        request(app)
          .post('/categories')
          .set('Accept', 'application/json')
          .send(category)
          .expect(constant.httpCode.CREATED)
          .end(function(err, res) {
            should.not.exist(err);
            done();
          });
    });

    it('update a category', function(done) {
        let category = {
            name: "更改后的类别"
        };
        request(app)
            .put('/categories/5a6af4489fb8c52abc3182e4')
            .set('Accept', 'application/json')
            .send(category)
            .expect(constant.httpCode.NO_CONTENT)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

    it('delete a category', function(done) {
        request(app)
            .delete('/categories/5a6af4489fb8c52abc3182e3')
            .set('Accept', 'application/json')
            .expect(constant.httpCode.NO_CONTENT)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

});