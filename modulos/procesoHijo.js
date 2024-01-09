const { exec, spawn } = require('child_process');

//exec('ls -la', (err, stdout, sterr) =>{
  //if(err) {
    //console.error(err);
    //return false
  //}
  //console.log(stdout);
//});

let proceso = spawn('ls', ['-la'])
console.log(proceso);
console.log(proceso.pid);
console.log(proceso.connected);

//cuando hayga la salida stdout
proceso.stdout.on('data', function (data) {
  console.log("eliminando proceso");
  console.log(data.toString());
});

proceso.on('exit', function () {
  console.log("el proceso ya  termino");
  console.log(proceso.killed);
});