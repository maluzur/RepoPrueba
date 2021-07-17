//Captura de elementos del DOM

const botonNumeros = document.getElementsByName('data-number');

const botonOpera = document.getElementsByName('data-opera');

const botonIgual = document.getElementsByName('data-igual')[0];

const botonDelete = document.getElementsByName('data-delete')[0];

var result = document.getElementById('result');
var opeActual = '';
var opeAnterior = '';
var operacion = undefined;

//Agregar eventos

botonNumeros.forEach(function(boton){// para cada elemento "boton" del array se aplica una funcion; el parametro "boton" se crea ahi
    boton.addEventListener('click', function(){
        agregarNumero(boton.innerText); //extraemos el número en string
    })
})

botonOpera.forEach(function(boton){// para cada elemento "boton" del array se aplica una funcion
    boton.addEventListener('click', function(){
        selectOperacion(boton.innerText);//extraemos signo de la operacion en string para enviarlo como parámetro
    })
    
})

botonIgual.addEventListener('click', function(){//activa el calculo y actualiza el display 
    calcular();
    actualizarDisplay();
})

botonDelete.addEventListener('click', function(){//limpio y actulizo display
    clear();
    actualizarDisplay();
})

//*************Programar las funciones*******************


function selectOperacion(op){
    if(opeActual === '') return; // si esta vacio el display no hace nada y sale de la función

    /*if(opeAnterior !== ''){
        calcular()
    }// no tiene sentido, porque al reiniciar la variable nunca entra en el "IF", ademas la variable opeAnterior se va pisando por el siguiente código*/
    operacion = op.toString();// pasa en string otra vez el "+", "-", "/" o "*"
    opeAnterior = opeActual; //pasa los numeros(en string) del display
    opeActual = '';
}

function calcular(){
    var calculo;
    const anterior = parseFloat(opeAnterior); //display anterior a número con coma
    const actual = parseFloat(opeActual); //display "agragando numeros" otra vez a número con coma
    
    if(isNaN(anterior) || isNaN(actual)) return; //Is Not-a-Number, si alguna de las variables "no es un número" sale de la función
    switch(operacion){
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case 'x':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    opeActual = calculo; //asigna al display el resultado
    
    // reinicia las variables de apoyo
    operacion = undefined;
    //opeAnterior = ''; no tiene relevancia por que se va pisando al calcular

}

function agregarNumero(num){//Va a gregando los numeros en formato string para visulizarlos en el display
    opeActual = opeActual.toString() + num.toString();//vuelve a convertir en string por si acaso jaja
    actualizarDisplay();
}

function clear(){ //reinicia las variables
    opeActual = '';
    opeAnterior = '';
    operacion = undefined;
}

function actualizarDisplay(){ //asigna al display el valor(string) de opeActual
    result.value = opeActual;
}

//Comentario de prueba