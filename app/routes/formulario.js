module.exports = function(app) {
  app.get('/formulario', function(req, res) {
    // Renderiza as views
    res.render('admin/form_add_noticia')
  });
}
