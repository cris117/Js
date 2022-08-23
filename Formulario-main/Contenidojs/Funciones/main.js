"use strict";

//Funsion clasica en JS
function numbreFuncion(/**recibo de parametros */){
/**cuerpo de la funcion  */
return 0;

}

//Invocacion de la funcion
//nombreFuncion();

function suma(num1, num2 = 0){
    return num1 + num2;

}

let result = 0;
result = suma(4);
//console.log(result);

//Funsion tipo flecha

const resta = (num1 = 1, num2 = 1) =>{
    return num1 - num2;
}
console.log(resta(12));