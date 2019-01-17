
//Guarda valor offset y texto

const offset = document.getElementById('offset')
const clave1 = document.getElementById('clave1')
const bcifrar = document.getElementById('bcifrar')

const clave2= document.getElementById('clave2')
const bdescif = document.getElementById ('bdescif')



bcifrar.addEventListener('click', () => {
let numero = offset.value;
let texto = clave1.value;
document.getElementById('clave2').value = window.cipher.encode(numero,texto);

//console.log(numero,texto)

})

bdescif.addEventListener('click', ()=> {
    let numero = offset.value;
    let texto = clave1.value;
document.getElementById('clave2').value = window.cipher.decode(numero,texto);

})





























