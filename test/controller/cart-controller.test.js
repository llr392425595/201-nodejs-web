import request from 'supertest'
import should from 'should'
import app from '../../app'
import constant from '../../constant/constant'

describe('API /cart', function() {
    it('GET /carts should return all carts', function(done) {
        request(app)
            .get('/carts')
            .set('Accept', 'application/json')
            .expect(constant.httpCode.OK)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

    it('GET /carts/:cartId', function(done) {
        request(app)
            .get('/carts/5a6fffd73344026010e19038')
            .set('Accept', 'application/json')
            .expect(constant.httpCode.OK)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

    it('POST /carts should return uri', (done) => {
        const cart = {
            _id:"587f0f2586653d19297d40c6",
            userId: '2',
            items: [
                {
                    count: 4,
                    item: '587f0f2586653d19297d40c2'
                }
            ]
        };
        request(app)
            .post('/carts')
            .send(cart)
            .expect(constant.httpCode.CREATED)
            .end(function(err, res) {
                should.not.exist(err);
                done();
            });
    });

    it('PUT /carts/:cartId should return 204', (done) => {
        const cartId = '5a6fff703344026010e19036';
        const cart = {
            userId: '9',
            items: [
                {
                    count: 4,
                    item: '587f0f2586653d19297d40c2'
                }
            ]
        };

        request(app)
            .put(`/carts/${cartId}`)
            .send(cart)
            .expect(constant.httpCode.NO_CONTENT)
            .end(done);
    });


    it('DELETE /carts/:cartId should return 204', (done) => {
        request(app)
            .delete('/carts/587f0f2586653d19297d40c6')
            .expect(constant.httpCode.NO_CONTENT)
            .end(done);
    });
});