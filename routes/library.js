
module.exports = function(app) {
  app.get('/api/Library',function(req, res) {
    res.set({'Content-type':'application/json'});
    res.send(200);
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
