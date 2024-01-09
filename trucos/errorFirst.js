function asincrona(callback) {
  setTimeout(function(){
    try {
      let a = 3 + z;
      callback(null, a)
    } catch (e) {
      callback(e);
    }
  }, 1000);
}

asincrona(function (err, a){
  if (err) {
    console.error(err.message);
    return;
  }
  else {
    console.log(a);
    return;
  }
});