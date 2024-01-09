function hola(nombre) {
  return new  Promise(function (resolve, reject) {
    setTimeout(function(){
      console.log("hola " + nombre );
      resolve(nombre);
    }, 1000);
  })
}
function adios(nombre) {
  return new  Promise(function (resolve, reject) {
    setTimeout(function(){
      console.log("adios " + nombre );
      resolve(nombre);
    }, 1000);
  })
}
function hablar(nombre){
  return new  Promise(function (resolve, reject) {
    setTimeout(function(){
      console.log("bla bla");
      //resolve(nombre);
      reject("Hay un error");
    }, 1000)
  })
}
function conversacion(nombre, veces, callback){
  if(veces >= 0) {
    hablar(function(){
      conversacion(nombre, --veces, callback);
    });
  }
  else{
    callback(nombre);
  }
}
console.log("Iniciando proceso");
hola("carlos")
  .then(hablar)
  .then(adios)
  .then((nombre) => {
    console.log("Terminando el proceso");
  })
  .catch((err) => {
    console.log("Error: " + err);
  });