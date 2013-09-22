var libraryController = require('../controllers/libraryController'),
  dbcontroller = require('../controllers/dbcontroller.js'); 
  sinon = require('sinon');

describe('Library Controller', function() {
  it('sends the book to the db controller', function() {
    var db = new dbcontroller();
    var controller = new libraryController(db);
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
