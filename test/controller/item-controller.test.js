var request = require('supertest');
var should = require('should');
var app = require('../../app');

describe('GET /', function() {
    it('respond with items', function(done) {
      request(app)
        .get('/')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });