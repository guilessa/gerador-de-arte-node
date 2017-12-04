module.exports = function(app) {
  app.get('/', function(req, res) {
    // Renderiza as views
    res.render('home/index')
  });
}
