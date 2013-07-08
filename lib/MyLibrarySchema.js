var mongoose = require('mongoose');
  Schema = require('mongoose').Schema;

var myLibrarySchema = function() {
  var bookSchema = new Schema({
    Title: String,
    Author: String 
  }); 
  console.log(bookSchema.paths);
  return bookSchema;
};

module.exports = myLibrarySchema;
