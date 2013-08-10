module.exports = function(app,controller) {
  app.get('/api/BookInfo/:isbn',function(req, res) {
    var isbn = req.param('isbn');
    var bookinfo = controller.getbookinfo(isbn);
    res.set({'Content-type':'application/json'});
    res.send(200, bookinfo);
  });
};
