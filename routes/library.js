
module.exports = function(app,controller) {
  app.get('/api/Library',function(req, res) {
    var books = controller.getallbooks();
    res.set({'Content-type':'application/json'});
    res.send(200,books);
  });

  app.post('/api/Library',function(req, res) {
    var newBook = controller.addbook(req.body);
    res.set({'Content-type':'application/json'});
    res.send(201,newBook);
  });

  app.put('/api/Library',function(req, res) {
    var updatedBook = controller.updatebook();
    res.set({'Content-type':'application/json'});
    res.send(201, updatedBook);
  });

  app.delete('/api/Library',function(req, res) {
    var deleteBook = controller.deletebook();
    res.send(204);
  });
};
