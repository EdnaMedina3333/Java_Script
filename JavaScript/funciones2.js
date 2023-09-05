//Funciones
//Programa para hacer Limonada
function exprimirLimones(cantidad){
    console.log("Exprimiendo" + cantidad + "Limones");
    let jugoExtraido=cantidad *10; //considerando obtener 10 ml de jugo por cada limón
    console.log("Se obtuvo" + jugoExtraido + "ml de jugo de Limón");
    return jugoExtraido; //return
}

//Función para mezclar el jugo de limón con agua y azúcar
function mezclarJugoDeLimón(cantidadDeJugo, cantidadDeAgua, cantidadDeAzucar){
console.log("Mezclando" + cantidadDeJugo + "ml de jugo de Limón" + cantidadDeAgua + "ml de Agua" + cantidadDeAzucar + "gr de Azucar")
}

//Función para servir la limonada
function servirLimonada(){
    console.log("Sirviendo la Limonada en un vaso");
    vasoDeLimonada=true;

}

//Función principal que prepare mi limonada
function prepararLimonada(cantidadDeLimon){
let jugoDeLimon= exprimirLimones(cantidadDeLimon);
mezclarJugoDeLimón(jugoDeLimon, 200, 10); //cantidades ficticias de jugo de limon de agua y de azucar
servirLimonada();
}

//Llamamos a la función principal para que nos prepare nuestra limonada
var vasoDeLimonada= false;
prepararLimonada(5); //llamando al programa