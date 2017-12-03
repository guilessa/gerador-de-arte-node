var express = require('express');
var app = express();

// Cria às páginas
app.get('/', function(req, res) {
  res.send("<html><body>HTML</body></html>")
});

app.get('/moda', function(req, res) {
  res.send("<html><body>MODA</body></html>")
});

// Sobe o server na porta 3000
app.listen(3000, function() {});