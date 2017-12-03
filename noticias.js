// Fazendo o require da biblioteca HTTP do node
var http = require('http');

// Function de criação do server
var server = http.createServer( function(req, res) {

  var categoria = req.url;

  switch(categoria) {
    default: 
      res.end("<html><body>Porta de Notícias</body></html>");
    break;
    case '/moda':
      res.end("<html><body>Porta de Notícias - Moda</body></html>");
    break;
  };

});

// Ligando servidor
if(server.listen(3000)) { 
  console.log('Servidor ativado. Para desliga-lo, pressionar CTRL + C.')
}