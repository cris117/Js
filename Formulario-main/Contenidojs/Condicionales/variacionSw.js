"use strick"

 let num1;

 num1 = 3.9;

 let mensaje;
 mensaje = "";
 switch(true){
    case 
     num1 >= 0 && num1 <= 2.9:
        //template string
        mensaje = `Insuficiente la calificacion: ${num1}`;
        break;
    case 
    num1 >= 3.0 && num1 <= 3.5:
        //template string
        mensaje = `Insuficiente la calificacion: ${num1}`;
        break;
    case 
        num1 >= 3.6 && num1 <= 4.0:
            //template string
            mensaje = `Insuficiente la calificacion: ${num1}`;
            break;
    case 
        num1 >= 4.1 && num1 <= 4.5:
            //template string
            mensaje = `Insuficiente la calificacion: ${num1}`;
            break;
    case 
        num1 >= 4.6 && num1 <= 5.0:
            //template string
            mensaje = `Insuficiente la calificacion: ${num1}`;
            break;
    default:
        mensaje = `La calificacion no puede ser procesada: ${num1}`;
        break;
 }
 console.log(mensaje)