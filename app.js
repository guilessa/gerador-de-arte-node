var express = require('express');
var app = express();

// Troca a engine do express para utilizar o EJS nas views
app.set('view engine', 'ejs');

// Cria às páginas
app.get('/', function(req, res) {
  res.send("<html><body>HTML</body></html>")
});

app.get('/moda', function(req, res) {
  // Renderiza as views
  res.render('secao/moda')
});

// Sobe o server na porta 3000
app.listen(3000, function() {});