
/*function mensaje1(){
    console.log('Mensjae desde la función')
}
mensaje1(); // 1RO--lo llamo para que se ejecute tipo procedimiento

function mensaje2(msj){
    console.log(msj)
}

var msj = 'Mensaje como argumento de la función';
mensaje2(msj); //2DO--le envio un argumento para que ejecute

function mensaje(){
    return 'Mensaje como devolución de la función';
}

var msj = mensaje();
console.log(msj); //3RO--me devuelve un valor para ser utilizado


var sumar = function (a, b , c=3){ //otra forma de crear una funcion
    return a + b + c;
}
var result = sumar(4, 5, 8);
var result1 = sumar (3, 7);
console.log(result);
console.log(result1);*/

/******
* Funciones recursivas


var factorial = function(n){
    if ((n==0) || (n==1))
    return 1;
    else
        return (n * factorial (n-1));
}

console.log(factorial(4));

/Funciones predefinidas:
- eval
- isFinite
- isNaN
- parseInt o parseFloat
- Number / String


/******
* Arreglos: indices empiezan en cero
*/

var nombres = ['Mario', 'Luigi', 'Laura', 'Fernando'];//corchete
var vegetales = new Array('Tomate', 'Lechuga','Zanahoria'); //paréntesis

//console.log(nombres[3]);
//console.log(vegetales[1]);

//nombres[0] = 'José';
//vegetales[2] = 'Nabo';

//console.log(nombres[0]);
//console.log(vegetales[2]); 

//console.log(nombres.length);

//for (var i = 0; i <= nombres.length -1; i++){
//    console.log(nombres[i]);
//}

//vegetales.forEach(function(elemento, indice){
//console.log(elemento, indice)
//})

console.log(nombres);
nombres.push('Pedro');
console.log(nombres);
nombres.unshift('Liliana');
console.log(nombres);
nombres.pop();
console.log(nombres);
nombres.shift();
console.log(nombres);


var pos = nombres.indexOf('Luigi');
console.log(pos);

nombres.splice(1, 2);
console.log(nombres);


var pos = nombres.indexOf('Fernando');
console.log(pos);
