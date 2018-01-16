import request from 'supertest'
import should from 'should'
import app from '../../app'
import statusCode from '../../constant/statusCode'

describe('API /cart', function() {
    it('respond with all carts', function(done) {
        request(app)
            .get('/carts')
            .set('Accept', 'application/json')
            .expect(statusCode.GET)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

    it('response a NO_CONTENT error with undefined cart_id', function(done) {
        request(app)
            .get('/carts/5a5dbd652097a143b813edf2')
            .set('Accept', 'application/json')
            .expect(statusCode.NO_CONTENT)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

    it('respond with a cart', function(done) {
        request(app)
            .get('/carts/5a5dbd652097a143b813edf1')
            .set('Accept', 'application/json')
            .expect(statusCode.GET)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

    it('should response an error with  undefiened cart', function(done) {
        let cart = {
          _id: "5a58353a016aa55ea4c1d8ae"
        };
        request(app)
          .delete('/carts')
          .set('Accept', 'application/json')
          .send(cart)
          .expect(statusCode.NOT_FOUND)
          .end(function(err, res) {
            should.not.exist(err);
            console.log(res.text);
            done();
          });
      });
})