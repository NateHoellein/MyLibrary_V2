module.exports = function(app,controller) {
  app.get('/api/BookInfo/:isbn',function(req, res) {
    var isbn = req.param('isbn');
    var match13 = (/\d{1}-\d{3}-\d{5}-\d{1}/).test(isbn);
    var match10 = (/\d{9}-\d{1}/).test(isbn);
    console.log('match13: ' + match13 + ' match10: ' + match10);
    if(match13 || match10) {
      var bookinfo = controller.getbookinfo(isbn);
      res.set({'Content-type':'application/json'});
      res.send(200, bookinfo);
    }
    else {
      res.set({'Content-type':'application/json'});
      res.send(422,{'Message': 'ISBN number is in the incorrect format.'});
    }
  });

  app.get('/api/BookInfo',function(req,res) {
    res.set({'Content-type':'application/json'});
    res.send(422,{'Message': 'Calls to /api/BookInfo require an isbn number. See /profile.'});
  });
};
