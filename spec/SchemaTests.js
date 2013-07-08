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
  var verifySchemaProperty = function(property, type) {
    librarySchema.paths.hasOwnProperty(property);
    librarySchema.paths[property].instance.should.equal(type);
  };
});
