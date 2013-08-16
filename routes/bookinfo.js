module.exports = function(app,controller) {
  app.get('/api/BookInfo/:isbn',function(req, res) {
    var isbn = req.param('isbn');
    var valid = isbn.match(/\d{1}-\d{3}-\d{5}-\d{1}/);
    if(!valid) {
      res.set({'Content-type':'application/json'});
      res.send(422,{'Message': 'ISBN number is in the incorrect format.'});
    }
    else {
      var bookinfo = controller.getbookinfo(isbn);
      res.set({'Content-type':'application/json'});
      res.send(200, bookinfo);
    }
  });

  app.get('/api/BookInfo',function(req,res) {
    res.set({'Content-type':'application/json'});
    res.send(422,{'Message': 'Calls to /api/BookInfo require an isbn number. See /profile.'});
  });
};
