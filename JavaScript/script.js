/*Poner ";" al final de cada instrucción */

/*alert("Hola Mundo"); 

/*Declarar es reservar el espacio  en memoria para la variable e inicializar es asignar valores a las variables */

/*var frasco="pastillas";
var frasco="pasitas con chocolate";
var frasco="shampoo";

/*Toma el último valor y lo asigna en la consola, en este caso sería "shampoo" */
/*console.log(frasco);


/*Tipos de datos:
  1.Primitivos
  string: lleva comillas y se refiere a una cadena de texto
  number: no lleva comillas y se refiere a un número con el cual podemos hacer operaciones 
  boolean
  undefined
  null
  symbol

  2.No primitivos
  object
*/

/*String es una cadena de texto, que siempre debe ir entre comillas simples o comillas dobles*/
//var vaso="leche";

/*number no lleva comillas y se refiere a un número con el cual podemos hacer operaciones  */
//var edad= 31;

/*boolean solamente tiene dos salidas true o false */
//var cuentasPremium = false;

/*undefined es un tipo de dato que existe pero no está definido (fue declarado pero no inicialiado) */
//var proximaCita=;

/*null es un valor que no tenemos pero que declaramos */
//var asistenciaInvitado=null;


var edad="31";
var peso=66;

console.log(typeof(edad));

var pesoCadena=peso.toString(); /*Se vuelve a declarar la variable (pesoCadena) para que se haga cambio de number a string */
console.log(pesoCadena);
console.log(typeof(pesoCadena));



var edadNumero=parseInt(edad);
console.log(edadNumero);
console.log(typeof(edadNumero));

/*typeof es una palabra reservada que nos ayuda a saber que tipo de dato tenemos */
/*var es una variable con alcance global (tiene mayor alcance)  */
/*let es una variable con alcance local (solo se utiliza dentro de un bloque de código)  */
/*const es una constante, es decir que es una variable que no cambia */





