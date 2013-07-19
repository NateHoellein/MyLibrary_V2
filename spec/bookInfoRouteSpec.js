var should = require('should'),
  mocha = require('mocha'),
  request = require('supertest'),
  express = require('express'),
  app = require('../app'),
  routes = require('../routes'),
  sinon = require('sinon'),
  bookinfoController = require('../controllers/bookinfocontroller.js'); 

describe('BookInfo Routes', function() {
  var infoController = new bookinfoController();
  it('get\'s a books details; /api/BookInfo',function(done) {
    app = express();
    routes(app);
    request(app)
      .get('/api/BookInfo')
      .expect(200)
      .expect('Content-type', /application\/json/)
      .end(function(err, response) {
        if(err) {
          return done(err);
        }
        done();
      });
  });

});
