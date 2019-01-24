window.cipher = {

  //Formula cifrar
  encode: (numero, texto) => {

    let rescifrado = "";
    for (let i = 0; i < texto.length; i++) {

      //Mayusculas ASCII
      if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90){
        let formula = (texto.charCodeAt(i) - 65 + parseInt(numero)) % 26 + 65;
        let claveuno = String.fromCharCode(formula);
        rescifrado += claveuno;

        //Minusculas ASCII
      } else if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122){
        let formula = (texto.charCodeAt(i) - 97 + parseInt(numero)) % 26 + 97;
        let claveuno = String.fromCharCode(formula);
        rescifrado += claveuno;

        //Signos ASCII
      } else {
        let claveuno = String.fromCharCode(texto.charCodeAt(i));
        rescifrado += claveuno;
      }
    }
    return rescifrado;

  },
  //Formula descifrar
  decode: (numero, texto) => {
    
    let rescifrado = "";
    for (let i = 0; i < texto.length; i++) {

      //Mayusculas ASCII
      if (texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90){
        let formula = (texto.charCodeAt(i) + 65 - parseInt(numero)) % 26 + 65;
        let claveuno = String.fromCharCode(formula);
        rescifrado += claveuno;

        //Minusculas ASCII
      } else if (texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122){
        let formula = (texto.charCodeAt(i) - 122 - parseInt(numero)) % 26 + 122;
        let claveuno = String.fromCharCode(formula);
        rescifrado += claveuno;

        //Signos ASCII
      } else {
        let claveuno = String.fromCharCode(texto.charCodeAt(i));
        rescifrado += claveuno;
      }
    }
    return rescifrado;
  }
};

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
