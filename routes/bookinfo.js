module.exports = function(app,controller) {
  app.get('/api/BookInfo/:isbn',function(req, res) {
    var isbn = req.param('isbn');
    var bookinfo = controller.getbookinfo(isbn);
    res.set({'Content-type':'application/json'});
    res.send(200, bookinfo);
  });

  app.get('/api/BookInfo',function(req,res) {
    res.set({'Content-type':'application/json'});
    res.send(422,{'Message': 'Calls to /api/BookInfo require an isbn number. See /profile.'});
  });
};
