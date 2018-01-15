// import request from 'supertest'
// import should from 'should'
// import app from '../../app'
// import statusCode from '../../config/statusCode'

// describe('API /items', function() {
//     it('respond with all items', function(done) {
//       request(app)
//         .get('/items')
//         .set('Accept', 'application/json')
//         .expect(statusCode.GET)
//         .end(function(err, res) {
//           should.not.exist(err);
//           done();
//         });
//     });

//     it('respond with a error', function(done) {
//       request(app)
//         .get('/items/1')
//         .set('Accept', 'application/json')
//         .expect(statusCode.INTERNALSERVERERROR)
//         .end(function(err, res) {
//           should.not.exist(err);
//           done();
//         });
//     });

//     it('respond with a item', function(done) {
//       request(app)
//         .get('/items/5a58353a016aa55ea4c1d8ae')
//         .set('Accept', 'application/json')
//         .expect(statusCode.GET)
//         .end(function(err, res) {
//           should.not.exist(err);
//           done();
//         });
//     });

//     it("should throw a error when item's category is not define" , function(done) {
//       let item = {
//         title: "牛奶",
//         price: "8:00",
//         category_id: "5a586f535199be300c671deb"
//       };
//       request(app)
//         .post('/items')
//         .set('Accept', 'application/json')
//         .send(item)
//         .expect(statusCode.INTERNALSERVERERROR)
//         .end(function(err, res) {
//           should.not.exist(err);
//           console.log(res.text);
//           done();
//         });
//     });

//     it('add a item', function(done) {
//       let item = {
//         title: "牛奶",
//         price: "8:00",
//         category_id: "5a586f535199be300c671dea"
//       };
//       request(app)
//         .post('/items')
//         .set('Accept', 'application/json')
//         .send(item)
//         .expect(statusCode.CREATE)
//         .end(function(err, res) {
//           should.not.exist(err);
//           console.log(res.text);
//           done();
//         });
//     });

//     it('update a item', function(done) {
//       let item = {
//         _id: "5a58711b0f11163930729373",
//         title: "牛奶",
//         price: "7:00",
//         category_id: "5a586f535199be300c671dea"
//       };
//       request(app)
//         .put('/items')
//         .set('Accept', 'application/json')
//         .send(item)
//         .expect(statusCode.PUT)
//         .end(function(err, res) {
//           should.not.exist(err);
//           console.log(res.text);
//           done();
//         });
//     });
    
//     //5a58353a016aa55ea4c1d8ae
//     it('delete a item', function(done) {
//       let item = {
//         _id: "5a58353a016aa55ea4c1d8ae"
//       };
//       request(app)
//         .delete('/items')
//         .set('Accept', 'application/json')
//         .send(item)
//         .expect(statusCode.INTERNALSERVERERROR)
//         .end(function(err, res) {
//           should.not.exist(err);
//           console.log(res.text);
//           done();
//         });
//     });
// });