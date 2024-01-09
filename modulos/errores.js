function otrafuncion(){
  seRompeAsincrona(function(){
    console.log("existe eun error");
  });
}

function serompe(){
  return 3+z;
}

function seRompeAsincrona(callback) {
  setTimeout(function(){
    try {
      return 3+z;
    } catch (e) {
      console.error(e.message);
      callback(e);
    }
  })
}

try{
  otrafuncion();
}
catch(e){
  console.error(e.message);
  console.info("ya se imprimio el error");
}