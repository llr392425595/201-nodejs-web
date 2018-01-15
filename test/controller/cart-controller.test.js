// import request from 'supertest'
// import should from 'should'
// import app from '../../app'
// import statusCode from '../../config/statusCode'

// describe('API /cart', function() {
//     it('respond with all carts', function(done) {
//         request(app)
//             .get('/carts')
//             .set('Accept', 'application/json')
//             .expect(statusCode.GET)
//             .end(function(err, res) {
//                 should.not.exist(err);
//                 done();
//             });
//     });

//     it('respond with a error', function(done) {
//         request(app)
//             .get('/carts/1')
//             .set('Accept', 'application/json')
//             .expect(statusCode.INTERNALSERVERERROR)
//             .end(function(err, res) {
//                 should.not.exist(err);
//                 done();
//             });
//     });
// })