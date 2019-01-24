
//Variables guardar valor offset y textos
const offset = document.getElementById('offset')
const clave1 = document.getElementById('clave1')
const bcifrar = document.getElementById('bcifrar')
//const clave2 = document.getElementById('clave2')
const bdescif = document.getElementById ('bdescif')
const borra = document.getElementById ('borra')

//Boton cifrar, guardar valores
bcifrar.addEventListener('click', () => {
  let numero = offset.value;
  let texto = clave1.value;
  document.getElementById('clave2').value = window.cipher.encode(numero,texto);
  //console.log(numero,texto)
})
//Boton descifrar, guarda valores
bdescif.addEventListener('click', ()=> {
  let numero = offset.value;
  let texto = clave1.value;
  document.getElementById('clave2').value = window.cipher.decode(numero,texto);
})
//Boton borrar info
const vaciar = () => {
  document.getElementById('offset').value='';
  document.getElementById('clave2').value='';
  document.getElementById('clave1').value='';
}
borra.addEventListener('click', vaciar);

/*
//Boton refresca pag
const cleaner = () => {
location.reload(true);
};
clean.addEventListener("click",cleaner); */
