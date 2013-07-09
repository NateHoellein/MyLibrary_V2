
module.exports = function(app) {
  app.get('/api/Library',function(req, res) {
    console.log('in library');
    res.set({'Content-type':'application/json'});
    res.send({'Hello':'Boo'});
    res.send(200);
  });
};
