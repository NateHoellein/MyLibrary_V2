module.exports = function(app,controller) {
  app.get('/api/BookInfo',function(req, res) {
    var bookinfo = controller.getbookinfo();
    res.set({'Content-type':'application/json'});
    res.send(200, bookinfo);
  });
};
