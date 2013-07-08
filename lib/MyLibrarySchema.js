var mongoose = require('mongoose');
  Schema = require('mongoose').Schema;

var myLibrarySchema = function() {
  var bookSchema = new Schema({
    Title: String,
    Author: String,
    ISBN: String,
    Subject: String,
    Location: String,
    LoanedOut: {type: Boolean, default: false}
  }); 
  return bookSchema;
};

module.exports = myLibrarySchema;
