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
    app.configure(function(){
      app.use(express.bodyParser());
    });
    routes(app, libController);
  });

  after(function() {

  });

  it('for all books; /api/Library',function(done) {
    
    var libraryspy = sinon.stub(libController,'getallbooks').returns({'Title':'arrgghhhh!'});
    
    request(app)
      .get('/api/Library')
      .set('Accept','application/json')
      .expect(200)
      .expect('Content-type', /application\/json/)
      .end(function(err, response) {
        if(err) {
          return done(err);
        }
        libController.getallbooks.calledOnce.should.be.true; 
        var body = response.body;
        body.Title.should.equal('arrgghhhh!');
        done();
      });
  });

  it('adds a book; /api/Library',function(done) {
    var newBookRequest = {
      Title: 'Some Title',
      Author: 'Me!'
    };
    var newBook = newBookRequest;
    newBook.Id = 123456;
    var libraryspy = sinon.stub(libController,'addbook').returns(newBook);
    request(app)
      .post('/api/Library')
      .set('Accept','application/json')
      .send(newBookRequest)
      .expect(201)
      .expect('Content-type', /application\/json/)
      .end(function(err, response) {
        if(err) {
          return done(err);
        }
        libController.addbook.calledOnce.should.be.true;
        libraryspy.calledWithMatch(newBookRequest).should.be.true;
        response.body.Title.should.equal("Some Title");
        response.body.Author.should.equal("Me!");
        response.body.Id.should.equal(123456);
        response.headers["location"].should.be.equal('/api/Library/123456');
        done();
      });
  });

  it('updates a book; /api/Library',function(done) {
    var newBook = {
      Title: 'Some Title',
      Author: 'Me!'
    };
    var libraryspy = sinon.stub(libController,'updatebook').returns(newBook);
    request(app)
      .put('/api/Library')
      .set('Accept','application/json')
      .expect(201)
      .expect('Content-type', /application\/json/)
      .end(function(err, response) {
        if(err) {
          return done(err);
        }
        libController.updatebook.calledOnce.should.be.true;
        response.body.Title.should.be.equal('Some Title');
        response.body.Author.should.be.equal('Me!');
        done();
      });
  });

  it('deletes a book; /api/Library',function(done) {
    var newBook = {
      Title: 'Some Title',
      Author: 'Me!'
    };
    var libraryspy = sinon.stub(libController,'deletebook').returns(newBook);
    request(app)
      .del('/api/Library')
      .set('Accept','application/json')
      .set('Body',newBook)
      .expect(204)
      .end(function(err, response) {
        if(err) {
          return done(err);
        }
        libController.deletebook.calledOnce.should.be.true;
        done();
      });
    });
});
