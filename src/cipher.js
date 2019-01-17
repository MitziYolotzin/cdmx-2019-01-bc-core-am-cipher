window.cipher = {
  // ... 
  /*
  encode: function(){
  }
  decode: function(){
  }
  */

  // encode: () => 'ABCD',
  //encode: () => (),
  //decode: () => ()

  encode: (numero, texto) => {
let resultado = texto;
let upmayus = resultado.toUpperCase();
let rescifrado = "";

for (let i=0; i<upmayus.length; i++) {
let codascii = upmayus.charCodeAt(i);
let formula = (codascii + 65 - parseInt(numero)) % 26 + 65;
let claveuno = String.fromCharCode(formula);
rescifrado += claveuno;

console.log (rescifrado)
}
  }

  
};

// "un error, algo que no esta siendo ultilizado" const algo = () => ()