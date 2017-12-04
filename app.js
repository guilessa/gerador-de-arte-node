var express = require('express');
var app = express();

// Fazendo a requisição do módulo modtest
var msg = require('./modtest')();

// Troca a engine do express para utilizar o EJS nas views
app.set('view engine', 'ejs');

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