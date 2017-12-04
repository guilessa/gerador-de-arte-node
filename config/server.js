var express = require('express');
var app = express();

// Troca a engine do express para utilizar o EJS nas views
app.set('view engine', 'ejs');

module.exports = app;