module.exports = function(app) {
  require('./main.js')(app);
  require('./library.js')(app);
  require('./bookinfo.js')(app);
};
