console.log(document.title);

document.title = 'Prueba de título';
console.log(document.title);
console.log(document.body);
var h1 = document.getElementsByTagName('h1'); //captura en array del tag 
h1[0].innerHTML = 'Prueba'; //cambio el string

console.log(h1);

var boton = document.getElementById('boton');//captura por el id
console.log(boton);

boton.addEventListener('click', mensaje)//agregar un evento a un objeto 

function mensaje(){
    alert('Mensaje');
}