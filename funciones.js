//alert
// ("funciones");

function suma(num1, num2){

    var resultado = num1 + num2
    console.log(resultado);
}

suma(2,5); 
suma(5,8);
suma(8,51);

'</br>'

var num1 = 5;
var num2 = 3;
var resultado = num1 + num2;
console.log(resultado);

// progra para saber el maximo en la solicitud de tres cantidades

var monto1 = parseInt(prompt("ingresar cantidades:")); 
var monto2 = parseInt(prompt("ingresar cantidades:")); 
var monto3 = parseInt(prompt("ingresar cantidades:")); 

cantidades = [monto1, monto2, monto3] 

cantidades.sort();
document.write("la cantidad mayor es: ", cantidades[2] + '</br>'); 


//programa para solicitar nombre 


var nombre =prompt("hola cual es tu nombre?"); 
console.log("hola " + nombre + " saludos desde javascript");

document.write("hola " + nombre + " saludos desde javascript" + '</br>')


// Este programa es para realizar operaciones básicas
// mediante una función.

var num1 = parseInt(prompt("introducir cantidad:"));
var num2 = parseInt(prompt("introducir cantidad"));

function operaciones(num1, num2){

    var summ = num1 + num2;
    var resta = num1 - num2;
    var multiplicacion = num1 * num2;
    var division = num1 / num2;

    document.write("El resultado de la suma es: ", summ + '</br>' );
    document.write("El resultado de la resta es: ", resta + '</br>' );
    document.write("El resultado dela multiplicacion es: ", multiplicacion + '</br>' );
    document.write("El resultado de la division es: ", division + '</br>' );
    
}

operaciones(num1, num2)
