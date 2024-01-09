const http = require('http');

function router (req, res) {
  switch (req.url) {
    case '/hola':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('hola');
      res.end();
      break;
    case '/adios':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write('adios');
      res.end();
      break;
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('no existe el recurso');
      res.end();
      break;
  }
}

http.createServer(router).listen(3000);

console.log('escuchando en el puerto 3000!');