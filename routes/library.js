
module.exports = function(app,controller) {
  app.get('/api/Library',function(req, res) {
    var books = controller.getAllBooks();
    res.set({'Content-type':'application/json'});
    res.send(200,books);
  });

  app.post('/api/Library',function(req, res) {
    var newBook = controller.addbook();
    res.set({'Content-type':'application/json'});
    res.send(201,newBook);
  });

  app.put('/api/Library',function(req, res) {
    controller.updatebook();
    res.set({'Content-type':'applicaiton/json'});
    res.send(201);
  });
};
