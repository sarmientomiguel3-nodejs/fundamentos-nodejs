process.on('exit', function(){
  console.log('El proceso termino');
  //todo lo demas tiene que ser sincrono
  setTimeout(function(){
    console.log('Esto no se va a imprimir');
  });
})
process.on('beforeExit', function(){
  console.log('accion antes que termine el proceso');
})
process.on('uncaughtException', function(err, origen){
  console.error('Tenemos un error: ' + err.message);
  console.warn('origen: ' + origen);
})
funcionerror();
console.log('texto sin error');
