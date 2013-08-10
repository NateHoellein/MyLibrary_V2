var should = require('should'),
  mocha = require('mocha'),
  request = require('supertest'),
  express = require('express'),
  app = require('../app'),
  routes = require('../routes'),
  sinon = require('sinon'),
  bookinfoController = require('../controllers/bookinfocontroller.js'); 

describe('BookInfo Routes', function() {
  var infoController;
  var bookSpy;

  before(function() {
    infoController = new bookinfoController();
    app = express();
    routes(app,infoController);
  });

  afterEach(function() {
    infoController.getbookinfo.restore();
  });

  it('get\'s a books details; /api/BookInfo/ISBN-NUMBER',function(done) {
    bookSpy = sinon.stub(infoController, 'getbookinfo').returns({Title:'I found you'});
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

  it('returns a 422 when requested with no parameter; /api/BookInfo',function(done) {
    bookSpy = sinon.stub(infoController, 'getbookinfo');
    request(app)
      .get('/api/BookInfo')
      .expect(422)
      .expect('Content-type', /application\/json/)
      .end(function(err, response) {
        if(err) {
          return done(err);
        }
        infoController.getbookinfo.calledOnce.should.be.false; 
        response.body.Message.should.be.equal('Calls to /api/BookInfo require an isbn number. See /profile.');
        done();
      });
    });
});
