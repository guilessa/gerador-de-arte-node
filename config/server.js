var express = require('express');
var app = express();

// Troca a engine do express para utilizar o EJS nas views
app.set('view engine', 'ejs');
// Troca o diretório das views
app.set('views', './app/views');

module.exports = app;