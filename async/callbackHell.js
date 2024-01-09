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
function hablar(callbackHablar){
  setTimeout(function(){
    console.log("Hablar");
    callbackHablar();
  }, 1000)
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
hola("carlos", function(nombre){
  conversacion(nombre,10,function(nombre){
    adios(nombre, function(){
      console.log("Terminamos");
    });
  });
  //hablar(function(){
    //hablar(function(){
      //hablar(function(){
        //hablar(function(){
          //adios(nombre, function(){
            //console.log("Terminando proceso");
          //})
        //});
      //});
    //});
  //});
});