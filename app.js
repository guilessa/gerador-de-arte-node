var app = require('./config/server');

// Cria às páginas
app.get('/', function(req, res) {
  res.render("home/index")
});

app.get('/noticias', function(req, res) {
  // Renderiza as views
  res.render('noticias/noticias')
});

app.get('/formulario', function(req, res) {
  // Renderiza as views
  res.render('admin/form_add_noticia')
});

// Sobe o server na porta 3000
app.listen(3000, function() {});