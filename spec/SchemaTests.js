var should = require('should'),
mocha = require('mocha'),
bookSchema = require('../lib/MyLibrarySchema');


describe('My Library Schema',function() {
    it('has the book info layout',function() {
     var librarySchema = bookSchema(); 
    });
});
