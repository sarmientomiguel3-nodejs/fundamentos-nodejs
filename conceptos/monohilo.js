console.log('hola mundo');
let i = 0;
let j = 0;
//ejecucion asincrona corta el proceso
setInterval(function() {
  console.log(i);
  console.log("sigo corrriendo");
  i++;
  if (i === 5) {
    //acarrea un error que detiene el proceso
    var a = 3+z;
  }
}, 1000);

setInterval(function() {
  console.log(j);
  console.log("sigo corrriendo");
  j++;
  ///if (i === 5) {
    //acarrea un error que detiene el proceso
    ///var a = 3+z;
  ///}
}, 1000);
console.log("segunda instruccion");