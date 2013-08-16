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

  it('looks for the right format for a 13 digit isbn number; /api/BookInfo',function(done) {
    bookSpy = sinon.stub(infoController, 'getbookinfo').returns({Title:'I found you'});
    request(app)
      .get('/api/BookInfo/1-123-12345-1')
      .expect(200)
      .expect('Content-type', /application\/json/)
      .end(function(err, response) {
        if(err) {
          return done(err);
        }
        infoController.getbookinfo.calledOnce.should.be.true; 
        infoController.getbookinfo.calledWith('1-123-12345-1').should.be.true; 
        response.body.Title.should.be.equal('I found you');
        done();
      });
    });

  it('returns a 422 when ISBN not in right format; /api/BookInfo',function(done) {
    bookSpy = sinon.stub(infoController, 'getbookinfo').returns({Title:'I found you'});
    request(app)
      .get('/api/BookInfo/1-1R-123045-10')
      .expect(422)
      .expect('Content-type', /application\/json/)
      .end(function(err, response) {
        if(err) {
          return done(err);
        }
        infoController.getbookinfo.calledOnce.should.be.false; 
        response.body.Message.should.be.equal('ISBN number is in the incorrect format.');
        done();
      });
    });

  it('accepts 10 digit isbn number; /api/BookInfo',function(done) {
    bookSpy = sinon.stub(infoController, 'getbookinfo').returns({Title:'I found you'});
    request(app)
      .get('/api/BookInfo/123456789-0')
      .expect(200)
      .expect('Content-type', /application\/json/)
      .end(function(err, response) {
        if(err) {
          return done(err);
        }
        infoController.getbookinfo.calledOnce.should.be.true; 
        infoController.getbookinfo.calledWith('123456789-0').should.be.true; 
        response.body.Title.should.be.equal('I found you');
        done();
      });
    });
});
