setImmediate(function(){
  console.log("Hola");
});
let i = 0;
let intervalo = setInterval(function(){
  i++;
  if(i===3 ){
    clearInterval(intervalo);
  }
  console.log("hola 2");
},1000);

console.log(process);