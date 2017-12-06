module.exports = function(app) {
  app.get('/noticias', function(req, res) {
    // Renderiza as views
    res.render('noticias/noticias')
  });
}

class Teste {
  testFunc() {
    return false
  }
}