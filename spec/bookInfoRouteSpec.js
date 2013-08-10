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
  var bookSpy = sinon.stub(infoController, 'getbookinfo').returns({Title:'I found you'});

  before(function() {
    app = express();
    routes(app,infoController);
  });

  after(function() {

  });
  it('get\'s a books details; /api/BookInfo',function(done) {
    request(app)
      .get('/api/BookInfo/some-isbn-number')
      .expect(200)
      .expect('Content-type', /application\/json/)
      .end(function(err, response) {
        if(err) {
          return done(err);
        }
        infoController.getbookinfo.calledOnce.should.be.true; 
        infoController.getbookinfo.calledWith('some-isbn-number').should.be.true; 
        response.body.Title.should.be.equal('I found you');
        done();
      });
  });

});
