const fs = require('fs');

function leer(ruta, callback){
  fs.readFile(ruta, (err, data) => {
    callback(data);
  });
}

function escribir(ruta, contenido, callback){
  fs.writeFile(ruta, contenido , (err, data) => {
    if (err){
      console.error("tuvo un error: " + err);
    }
    else{
      console.log("success");
    }
  });
}

function borrar(ruta, callback){
  fs.unlink(ruta, callback);
}

//leer(__dirname + '/archivo.txt', console.log);
//escribir(__dirname + '/archivo2.txt', "soy un archivo");
borrar(__dirname + '/archivo2.txt', console.log);