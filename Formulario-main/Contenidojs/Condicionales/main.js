"use strict";

let num1;
let num2;
num1 = 9;
num2 = "9";

if(num1 > 0){

}else if (num1 > 0){
    if ((num1 % 3 === 0) && (parseInt(num2)>0)){
        console.log(" num1 es multiplo de 3 y num2 > 0 ");
    }else{
        if(num1 % 2 === 0)
              console.log("num1 es multiplo de 2");
    }
}
//switch
let opcion;
opcion = prompt("Introduzca una opcion 1-4");

switch (opcion){
    case "1":
        alert("a seleccionado la opcion 1");
    case "2" :
        alert("a seleccionado la opcion 2");
    case "3":
        alert("a seleccionado la opcion 3");
    case "4":
        alert("a seleccionado la opcion 4");
    default:
        alert("a seleccionado una opcion invalida")
}