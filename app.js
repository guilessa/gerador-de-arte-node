// Módulo de configuração do server
var app = require('./config/server');

var teste = new Teste;

// Modulos de routes
var routeHome = require('./app/routes/home')(app);
var routeFormulario = require('./app/routes/formulario')(app);
var routeNoticias = require('./app/routes/noticias')(app);

// Sobe o server na porta 3000
app.listen(3000, function() {
  console.log('Servidor ON');
});