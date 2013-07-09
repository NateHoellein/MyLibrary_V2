
module.exports = function(app) {
  app.get('/',function(req, res) {
    console.log('in main.js');
    res.render('index', { title: 'Nate\'s Express' })
  });
};
