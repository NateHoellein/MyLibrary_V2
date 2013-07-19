module.exports = function(app,controller) {
  require('./main.js')(app);
  require('./library.js')(app,controller);
  require('./bookinfo.js')(app,controller);
};
