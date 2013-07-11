module.exports = function(app) {
  app.get('/api/BookInfo',function(req, res) {
    res.set({'Content-type':'application/json'});
    res.send(200);
  });
};
