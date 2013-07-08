var should = require('should'),
mocha = require('mocha'),
bookSchema = require('../lib/MyLibrarySchema');


describe('My Library Schema',function() {
  var librarySchema;
  before(function() {
    librarySchema = bookSchema();
    
    });

  it('has the book info layout for Title',function() {
    verifySchemaProperty('Title','String');
  });

  it('has the book info layout for Author',function() {
    verifySchemaProperty('Author','String');
  });

  it('has the book info layout for ISBN number',function() {
    verifySchemaProperty('ISBN','String');
  });

  it('has the book info layout for Subject',function() {
    verifySchemaProperty('Subject','String');
  });

  it('has the book info layout for Location',function() {
    verifySchemaProperty('Location','String');
  });
  var verifySchemaProperty = function(property, type) {
    librarySchema.paths.should.have.property(property);
    librarySchema.paths[property].instance.should.equal(type);
  };
});
