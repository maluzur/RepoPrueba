/*Uso de Variables
var nombre = 'Mario';
console.log(nombre);
console.log(typeof(nombre)); //string

var edad = 34;
console.log(edad);
console.log(typeof(edad)); //number

edad ='Cinco'
console.log(edad);
console.log(typeof(edad)); //string

var sueldo = 1900.99;
console.log(sueldo);
console.log(typeof(sueldo)); //number

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo)); //boolean

var puestoDeTrabajo;
console.log(puestoDeTrabajo); //undefined, no se le asigno nada

puestoDeTrabajo = null;
console.log(puestoDeTrabajo); /*null, esta definido pero tiene un contenido nulo*/

/****************
 * Operadores matemáticos: +, -, *, /
 
var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, yearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
yearActual = 2021;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nació Ana ' + yearAna); // concatena todo 
console.log('Año en que nació Maria ' + yearMaria)
console.log(yearActual * 5); // operaciones dentro de la salida
console.log(yearActual / 2); */

/****************
 * Operadores lógicos, unarios y de asignación

//Lógicos: < > <= >= == "!="[no igual] "!()"[not logical]

var edadAna, edadMaria, diferenciaEdad;
edadAna = 34;
edadMaria = 28;

var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

//Unarios: ++Incremento --Decremento

//edadAna++
console.log(edadAna++); //el operador se aplicó luego de la empresión
console.log(edadAna);

//Asignación: += , -=, *=, /=, %=

var a = 12;
var b = 5;

var c = a % 5; //Módulo da el residuo o resto de la operación
console.log(c);

a += ++b; // es una expresión equivalente a "a = a + b"
 console.log(a); */

 /***********
  * Sentencia if..else
  

 var nombre ='Mario';
 var esCasado = true;

 if (esCasado == true) {
    console.log(nombre + ' es casado.');
 } else{
     console.log(nombre + ' es soltero.');
 }

// Sentencias logicas: && (AND), || (OR) y !(NOT)

var nombre = 'Mario';
var edad = 63;

// edad < 12 es un niño.
// edad > 11, es < de 18 es un adolecente.
// edad > 17, es < 60, es un adulto.
// edad > 60 es un anciano.

if (edad < 12){
    console.log(nombre + ' es un niño.');
} else if ((edad > 11) && (edad < 18)){
    console.log(nombre + ' es un adolecente.')
} else if ((edad > 17) && (edad < 60)){
    console.log(nombre + ' es un adulto.')
} else {
    console.log(nombre + ' es un anciano.')
}*/

/***********
  * Sentencia switch

var mes = 1;

switch (mes){
    case 1:
        console.log('Enero');
        break;
    case 2:
        console.log('Febrero');
        break;
    case 3:
        console.log('Marzo');
        break;    
    case 4:
        console.log('Abril');
        break;
    case 5:
        console.log('Mayo');
        break;
    default:
        console.log('Mes no encontrado.')
}*/

/***********
  * Sentencia For (variable inicial; condicion de break; modificacion sucesiva de la variable inicial para que rompa el for)


var j = 0

for (var i = 5 ; i <= 25 ; i+=5){
    console.log(i);
}
*/

/***********
  * Sentencia While [si no se cumple la condicion de entrada, no se ejecuta ni una vez]

var i = 10;

while(i>=1){
    console.log(i);
    i--;
}*/

/***********
  * Sentencia Do ... While [se ejecuta al menos una vez, si no cumple la condicion de salida se quiebra]


var i = 1;

do{
    console.log(i);
    i++;
} while(i<=10);
*/

