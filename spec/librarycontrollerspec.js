var libraryController = require('../controllers/libraryController'),
  dbcontroller = require('../controllers/dbcontroller.js'); 
  sinon = require('sinon');


describe('Library Controller', function() {
  var db,controller;

  before(function() {
    db = new dbcontroller();
    controller = new libraryController(db);
  });

  it('sends the book to the db controller', function() {
    var myBook = {
      Title: "Yay",
      Author: "me"
    };

    sinon.stub(db,'addnewbook').returns('mongo DB ID');  

    var id = controller.addbook(myBook);
   
    db.addnewbook.called.should.be.true;
    id.should.equal('mongo DB ID');
  });

});
