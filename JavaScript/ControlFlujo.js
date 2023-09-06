console.log("Hola Generation");

/* Flujo de control
Cuando hablamos de flujo de control, hablamos del orden natural en el que se ejecutan las instrucciones de nuestro programa (arriba/abajo, izq/der). Estas instrucciones pueden ser una función, un concole.log, un ciclo, etc. 

La importancia que tiene el control de flujo radica en la posibilidad de poder ejecutar cosas o instrucciones dependiendo de una condicional (elemento o instrucción detonante).

Condicionales
Las condicionales son palabras reservadas que nos permiten evaluar si una condición se cumple o no bajo ciertos criterios, estos criterios (estipulados por el programador). Las respuestas o salidas esperadas siempre partiran de un true o un false.
Ejemplo:
Tengo la camisa limpia? 
Si: voy a la fiesta
No: Me quedo en casa

Tengo esta variable?
Si: ejecuto la línea 57 de mi código
No: ejecuto la línea 80 de mi código


Condicional if(si)

If nos sirve para validar si una condición se cumple o no, si se cumple ejecutamos una línea de código que está dentro del if. Si no, entonces no hacemos nada.
Nota: es la condicional más sencilla pero también la más limitante.

if(condición){
    bloque de código que se ejecuta si la condicion es verdadera (se cumple)
}

*/

//Ejemplo: Felipe va a ir a una fiesta y necesita tener su camisa favorita limpia para poder ir.
if(camisaLimpia=true){ //Siempre tiene que ser true para que se ejecute el código
    console.log("Felipe va a la fiesta con if");
}

/*
else (de otro modo, de lo contrario, si no)

if(condición){
    bloque de código que se ejecuta si la condición es verdadera
} else{
    bloque de código que se ejecuta si la condición es false
}

*/
if(camisaLimpia=false){
    console.log("Felipe va a la fiesta con if else"); //true
} else{
    console.log("Felipe se queda en casa llorando") //false
}

/*
else if

Esta condición nos ayuda a jugar con más opciones y más detonantes para tener más posibilidades en el mismo código. Para lograr esto vamos a unir el else con el if.

if(condicion){
    bloque de código si la condición es true
} else if (condicion 2){
    bloque de código si la condición 1 es false y si la 2 es true
} else{
    bloque de código si ambas condiciones son false
}

*/

/*Ejemplo 2: Felipe tiene hambre y quiere comer chilaquiles verdes
if(Hambre=true){
    console.log("Felipe va a comer");
} else if(chilaquilesVerdes = true){
    console.log("Felipe come chilaquiles");
}else{
    console.log("Felipe no come y se pone triste");
}
*/

//Ejemplo 3: Escribe un programa que muestre 3 mensajes diferentes. Primer mensaje se muestra si son las 13:00 horas y deberá imprimir "Vamos a descanso", el segundo mensaje se muestra si son las 14:00 horas y deberá imprimir "Vamos a comer", y el tercer mensaje se muestra si no se cumple nada de lo anterior y deberá imprimir "Lo siento mi ciela seguimos programando"
//Lista

//Prompt es una forma de ingresar datos y poder hacer uso de ellos
let hora=prompt("Hola dime una hora");



//let hora=13 antes del prompt
if(hora==13){
    console.log("Vamos a descanso");
} else if(hora==14){
    console.log("Vamos a comer");
}else{
    console.log("Lo siento mi ciela seguimos programando")
}

/*
switch (cambiar, intercambiar, según sea el caso)
Esta condicional nos permite hacer multiples operaciones y tomar decisiones en función  de la opcion deseada (estado de la variable)

Evalua una expresión comparando el valor  de una variable con la expresión o caso, y ejecuta las declaraciones asociadas con ese caso, así como los casos que siguen.

Elementos principales del switch
un valor a evaluar, un detonante para cada caso, una salida para cada caso, y una salida en general.

expresion con un valor

switch(expresion){
    case 1:
    bloque de código que se ejecuta si la opcion seleccionada es igual a 1
    break;

    case 2:
    bloque de código que se ejecuta si la opcion seleccionada es igual a 2
    break;
    
    case 3:
    bloque de código que se ejecuta si la opcion seleccionada es igual a 3
    break;
    
    default:
    bloque de código que se ejecuta si ninguna opción coincide   
}
*/

//Elevador con else if
let piso = 5;

if (piso == 1){
    console.log("Llegamos al piso 1");
} else if (piso == 2){
    console.log("Llegamos al piso 2");
}else if (piso == 3){
    console.log("Llegamos al piso 3");
}else if (piso == 4){
    console.log("Llegamos al piso 4");
}else if (piso == 5){
    console.log("Llegamos al piso 5");// piso de destino
} else {
    console.log("Piso no encontrado");
}


//Elevador con switch
let pisoSwitchOriginal = prompt("A que piso vas?");
console.log(typeof(pisoSwitchOriginal));
pisoSwitch = parseInt(pisoSwitchOriginal);


switch (pisoSwitch){ //si recibo un numero
    case 1: //caso evalua un string
        console.log("Llegaste al piso 1");
        break;

    case 2:
        console.log("Llegaste al piso 2");
       break;

    case 3:
        console.log("Llegaste al piso 3");
       break;

    default:
        console.log("Opcion no valida");
}


//Funciones aplicables a un consultorio dental

//Funcion calcular costo de una consulta (condicionales)

//Variables para mis datos
let tipoServicio;
let tiempoConsulta;
let emergencia;
let promocion;
let clienteFrecuente;
let costo;

/*Funcion incompleta
function calcularCostoConsulta (tipoServicio, tiempoConsulta, emergencia, promocion, clienteFrecuente){

    //Datos que necesito para mi funcion
    tipoServicio = "extraccion";
    tiempoConsulta = 120;
    emergencia = true;
    promocion = .10;
    clienteFrecuente = true;
    costo = 5000;
    promocionClienteFrecuente = .10;


    //Calcular el costo total (antes de validar si es cliente frecuente)
    let costoTotal = costo - promocion;

    //condicional para saber si agrego otra promocion por ser cliente frecuente

    if (clienteFrecuente == true){
        
    }

}
*/


//Un ejemplo mas sencillo
function calcularCostoConsultaDos(duracionMinutos, costoPorMinuto, clienteFrecuente){
    let costoTotal = duracionMinutos * costoPorMinuto;


    if (clienteFrecuente){
        costoTotalConDescuento = costoTotal*.9;
    }

    return costoTotalConDescuento;

}

console.log(calcularCostoConsultaDos(45, 15, true));




  
