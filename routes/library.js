//var libraryController = require('../controllers/libraryController');

module.exports = function(app,controller) {
  app.get('/api/Library',function(req, res) {
    //var controller = new libraryController();
    var books = controller.getAllBooks();
    res.set({'Content-type':'application/json'});
    res.send(200,books);
  });

  app.post('/api/Library',function(req, res) {
    res.set({'Content-type':'applicaiton/json'});
    res.send(201);
  });

  app.put('/api/Library',function(req, res) {
    res.set({'Content-type':'applicaiton/json'});
    res.send(201);
  });
};
