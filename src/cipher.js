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

  //Formula cifrar
  encode: (numero, texto) => {
    let resultado = texto;
    let upmayus = resultado.toUpperCase();
    let rescifrado = "";

    for (let i = 0; i < upmayus.length; i++) {
      let codascii = upmayus.charCodeAt(i);
      let formula = (codascii - 65 + parseInt(numero)) % 26 + 65;
      let claveuno = String.fromCharCode(formula);
      rescifrado += claveuno;

    }
    return rescifrado;
  },

  //Formula descifrar
  decode: (numero2, texto2) => {
    let resultado2 = texto2;
    let upmayus2   = resultado2.toUpperCase();
    let rescifrado2 = "";

    for (let i = 0; i < upmayus2.length; i++) {
      let codascii2 = upmayus2.charCodeAt(i);
      let formula2 = (codascii2 + 65 - parseInt(numero2)) % 26 + 65;
      let claveuno2 = String.fromCharCode(formula2);
      rescifrado2 += claveuno2;

    }
    return rescifrado2;
  }

};




// "un error, algo que no esta siendo ultilizado" const algo = () => ()