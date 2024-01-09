let sum = 0;

console.time('suma');
for (let i = 0; i < 1000000; i++) {
  sum += 1;
}
console.timeEnd('suma');

function asincrona() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('revisando el tiempo');
      resolve();
    }, 30000);
  })
}

console.time('asincrono');
asincrona().then(function() {
  console.timeEnd('asincrono');
});