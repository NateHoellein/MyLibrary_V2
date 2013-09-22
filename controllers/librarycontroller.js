var libraryController =  function(dbcontroller) {
  var db = dbcontroller;
  var addBook = function() {
    var bookId = db.addnewbook();
    return bookId;
  }; 
  var getBooks = function() {
  };
  var updateBook = function() {
  };
  var deleteBook = function() {
  };
  return {
    addbook: addBook,
    getallbooks: getBooks,
    updatebook: updateBook,
    deletebook: deleteBook
  };
};

module.exports = libraryController;
