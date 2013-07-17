var should = require('should'),
  mocha = require('mocha'),
  request = require('supertest'),
  express = require('express'),
  app = require('../app'),
  routes = require('../routes'),
  sinon = require('sinon'),
  libraryController = require('../controllers/librarycontroller.js'); 



describe('My library routes', function() {
  var libController;

  before(function() {
    libController = new libraryController();
    app = express();
    routes(app, libController);
  });

  after(function() {

  });

  it('for all books; /api/Library',function(done) {
    
    var libraryspy = sinon.stub(libController,'getAllBooks').returns({'Title':'arrgghhhh!'});
    
    request(app)
      .get('/api/Library')
      .set('Accept','application/json')
      .expect(200)
      .expect('Content-type', /json/)
      .end(function(err, response) {
        if(err) {
          return done(err);
        }
         
        libController.getAllBooks.calledOnce.should.be.true; 
        var body = response.body;
        body.Title.should.equal('arrgghhhh!');
        done();
      });
  });

  it('adds a book; /api/Library',function(done) {
    var libraryspy = sinon.stub(libController,'addbook').returns({'Title':'Some Title'});
    request(app)
      .post('/api/Library')
      .set('Accept','application/json')
      .set('Body',{Title: 'Some Title',Author:'Me'})
      .expect(201)
      .expect('Content-type', /json/)
      .end(function(err, response) {
        if(err) {
          return done(err);
        }
        libController.addbook.calledOnce.should.be.true;

        done();
      });
  });

  it('updates a book; /api/Library',function(done) {
    request(app)
      .put('/api/Library')
      .set('Accept','application/json')
      .expect(201)
      .expect('Content-type', /json/)
      .end(function(err, response) {
        if(err) {
          return done(err);
        }
        done();
      });
  });

  it('get\'s a books details; /api/BookInfo',function(done) {
    request(app)
      .get('/api/BookInfo')
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
