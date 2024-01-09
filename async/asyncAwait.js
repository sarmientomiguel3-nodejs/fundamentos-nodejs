async function hola(nombre) {
  return await new  Promise(function (resolve, reject) {
    setTimeout(function(){
      console.log("hola " + nombre );
      resolve(nombre);
    }, 1000);
  })
}
async function adios(nombre) {
  return await new  Promise(function (resolve, reject) {
    setTimeout(function(){
      console.log("adios " + nombre );
      resolve(nombre);
    }, 1000);
  })
}
async function hablar(nombre){
  return await new  Promise(function (resolve, reject) {
    setTimeout(function(){
      console.log("bla bla");
      resolve(nombre);
      //reject("Hay un error");
    }, 1000)
  })
}
conversacion = async (nombre) => {
  console.log("Iniciando proceso");
  await hola(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await hablar(nombre);
  await adios(nombre);
  console.log("Terminando el proceso");
}
conversacion("Carlos");