var should = require('should'),
  mocha = require('mocha'),
  request = require('supertest'),
  express = require('express'),
  app = require('../app'),
  routes = require('../routes');

app = express();
routes(app);

describe('My library routes', function() {

  it('for all books; /api/Library',function(done) {
    request(app)
      .get('/api/Library')
      .set('Accept','application/json')
      .expect(200)
      .expect('Content-type', /json/)
      .end(function(err, response) {
        if(err) {
          return done(err);
        }
        done();
      });
  });
});
