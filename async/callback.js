function hola(nombre, miCallback) {
  console.log("Bienvenida");
  setTimeout(function(){
    console.log("hola " + nombre );
    miCallback(nombre);
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(function(){
    console.log("adios " + nombre );
    otroCallback();
  }, 1000);
}

function soyAsyncrono(miCallback) {
  console.log("soy una funcion asincrona");
  setTimeout(function(){
    console.log("estoy siendo asincrona");
    miCallback();
  }, 1000);
}

//console.log("Iniciando proceso");
//soyAsyncrono(function(){
  //console.log("Terminando proceso");
//});

hola("carlos", function(nombre){
  adios(nombre, function(){
    console.log("Terminando proceso");
  })
});