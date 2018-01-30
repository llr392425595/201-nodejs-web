import request from 'supertest'
import should from 'should'
import app from '../../app'
import constant from '../../constant/constant'

describe('API /items', function() {
    it('respond with all items', function(done) {
      request(app)
        .get('/items')
        .set('Accept', 'application/json')
        .expect(constant.httpCode.OK)
        .end(function(err, res) {
          should.not.exist(err);
          done();
        });
    });

    it('GET /items/:itemId should return a item', function(done) {
      request(app)
        .get('/items/5a6fea4ae80f324f00aec58e')
        .set('Accept', 'application/json')
        .expect(constant.httpCode.OK)
        .end(function(err, res) {
          should.not.exist(err);
          done();
        });
    });

    it("POST /items should return uri" , function(done) {
      let item = {
        _id:"5a6fedc2ed02db47f831d446",
        title: "牛奶",
        price: 8.00,
        category: "5a6af4489fb8c52abc3182e2"
      };
      request(app)
        .post('/items')
        .set('Accept', 'application/json')
        .send(item)
        .expect(constant.httpCode.CREATED)
        .end(function(err, res) {
          should.not.exist(err);
          done();
        });
    });


    it('PUT /items/:itemId should return 204', function(done) {
      let item = {
        title: "牛奶",
        price: 7.01,
        category: "5a5cbd0c4c17883fb00d0504"
      };
      request(app)
        .put('/items/5a6fea4ae80f324f00aec58e')
        .set('Accept', 'application/json')
        .send(item)
        .expect(constant.httpCode.NO_CONTENT)
        .end(function(err, res) {
          should.not.exist(err);
          done();
        });
    });

    it('DELETE /items/:itemId should return 204', function(done) {
        request(app)
            .delete('/items/5a6fedc2ed02db47f831d446')
            .set('Accept', 'application/json')
            .expect(constant.httpCode.NO_CONTENT)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });
});