import request from 'supertest'
import should from 'should'
import app from '../../app'
import statusCode from '../../constant/statusCode'

describe('API /items', function() {
    it('respond with all items', function(done) {
      request(app)
        .get('/items')
        .set('Accept', 'application/json')
        .expect(statusCode.GET)
        .end(function(err, res) {
          should.not.exist(err);
          done();
        });
    });

    it('if itemId not exist,should respond with a NO_CONTENT error', function(done) {
      request(app)
        .get('/items/5a58353a016aa55ea4c1d8ae')
        .set('Accept', 'application/json')
        .expect(statusCode.NO_CONTENT)
        .end(function(err, res) {
          should.not.exist(err);
          done();
        });
    });

    it('correct request should respond with a item', function(done) {
      request(app)
        .get('/items/5a5cc3d21fcd5c453815297a')
        .set('Accept', 'application/json')
        .expect(statusCode.GET)
        .end(function(err, res) {
          should.not.exist(err);
          done();
        });
    });

    it("create a item should throw a NOT_FOUND error when item's category is not define" , function(done) {
      let item = {
        title: "牛奶",
        price: "8:00",
        category_id: "5a586f535199be300c671deb"
      };
      request(app)
        .post('/items')
        .set('Accept', 'application/json')
        .send(item)
        .expect(statusCode.NOT_FOUND)
        .end(function(err, res) {
          should.not.exist(err);
          console.log(res.text);
          done();
        });
    });

    it('create a item', function(done) {
      let item = {
        title: "牛奶",
        price: "8:00",
        category_id: "5a5cbd0c4c17883fb00d0504"
      };
      request(app)
        .post('/items')
        .set('Accept', 'application/json')
        .send(item)
        .expect(statusCode.CREATE)
        .end(function(err, res) {
          should.not.exist(err);
          console.log(res.text);
          done();
        });
    });

    it('should responce a error when update a not defined item', function(done) {
      let item = {
        _id: "5a5cc3d21fcd5c453815297b",
        title: "牛奶",
        price: "7:00",
        category_id: "5a5cbd0c4c17883fb00d0504"
      };
      request(app)
        .put('/items')
        .set('Accept', 'application/json')
        .send(item)
        .expect(statusCode.NO_CONTENT)
        .end(function(err, res) {
          should.not.exist(err);
          console.log(res.text);
          done();
        });
    });

    it("should responce a error when item's category is not defined", function(done) {
      let item = {
        _id: "5a5cc3d21fcd5c453815297a",
        title: "牛奶",
        price: "7:00",
        category_id: "5a5cbd0c4c17883fb00d0505"
      };
      request(app)
        .put('/items')
        .set('Accept', 'application/json')
        .send(item)
        .expect(statusCode.NOT_FOUND)
        .end(function(err, res) {
          should.not.exist(err);
          console.log(res.text);
          done();
        });
    });

    it('update a item', function(done) {
      let item = {
        _id: "5a5cc3d21fcd5c453815297a",
        title: "牛奶",
        price: "7:00",
        category_id: "5a5cbd0c4c17883fb00d0504"
      };
      request(app)
        .put('/items')
        .set('Accept', 'application/json')
        .send(item)
        .expect(statusCode.PUT)
        .end(function(err, res) {
          should.not.exist(err);
          console.log(res.text);
          done();
        });
    });
    
    //5a58353a016aa55ea4c1d8ae
    it('should response an error with item no defiened', function(done) {
      let item = {
        _id: "5a58353a016aa55ea4c1d8ae"
      };
      request(app)
        .delete('/items')
        .set('Accept', 'application/json')
        .send(item)
        .expect(statusCode.NO_CONTENT)
        .end(function(err, res) {
          should.not.exist(err);
          console.log(res.text);
          done();
        });
    });
});