var should = require('should'),
mocha = require('mocha'),
bookSchema = require('../lib/MyLibrarySchema');


describe('My Library Schema',function() {
  var librarySchema;
  before(function() {
    librarySchema = bookSchema();
    
  });

  it('has the book info layout for Title',function() {
    verifySchemaProperty('Title', stringType);
  });

  it('has the book info layout for Author',function() {
    verifySchemaProperty('Author',stringType);
  });

  it('has the book info layout for ISBN number',function() {
    verifySchemaProperty('ISBN',stringType);
  });

  it('has the book info layout for Subject',function() {
    verifySchemaProperty('Subject',stringType);
  });

  it('has the book info layout for Location',function() {
    verifySchemaProperty('Location',stringType);
  });

  it('has the book info layout for LoanedOut',function() {
    verifySchemaProperty('LoanedOut',function() {
      return librarySchema.paths['LoanedOut'].defaultValue.should.be.false; 
    });
  });

  var stringType = function(property) {
    librarySchema.paths[property].instance.should.equal('String'); 
  };

  var verifySchemaProperty = function(property, typeAssert) {
    librarySchema.paths.should.have.property(property);
    typeAssert(property);
  };
});
