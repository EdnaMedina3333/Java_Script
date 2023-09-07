/* Programa para prepararse para inspeccionar al paciente
1. Colocarse la bata
2. Lavarse las manos
3. Colocarse guantes
4. Colocarse cubrebocas 

Si la bata, los guantes y el cubrebocas están puestos y tiene las manos lavadas entonces puede inspeccionar al paciente. Si no no puede inspeccionar al paciente.

*/

//Función 1. Colocarse la bata
function colocarBata() {
    console.log("Colocarse la bata y abrocharla/cerrarla");
    bata = true;
    return bata;
}

//Función 2.1 Mojarse las manos
function mojarManos (){
    console.log("Abrir la llave del lavabo");
    console.log("Mojarte las manos");
    console.log("Cerrar la llave del lavabo");
}

//Función 2.2 Enjabonarse las manos
function enjabonarManos (tiempo){
    console.log("Tomar el jabon y enjabonarse las manos por " + tiempo + " segundos");
}

//Función 2.3 Enjuagarse las manos
function enjuagarManos (){
    console.log("Abrir la llave del lavabo");
    console.log("Enjuagarse las manos hasta que ya no tengan jabon");
    console.log("Cerrar la llave del lavabo");
}

//Función 2.4 Secarse las manos
function secarManos (){
    console.log("Secarse manos en la toalla hasta que ya no esten humedas");
}

//Función 2. Lavarse las manos
function lavarManos (tiempo){
    //Función 2.1
    mojarManos();
    //Función 2.2
    enjabonarManos(tiempo);
    //Función 2.3
    enjuagarManos();
    //Función 2.4
    secarManos();
}

//Función 3. Colocarse guantes
function colocarGuantes (){
    console.log("Colocarse el guante izquierdo");
    console.log("Colocarse el guante derecho");
    guantes = true;
    return guantes;
}

//Función 4. Colocarse cubrebocas
function colocarCubrebocas (){
    console.log("Colocarse el cubrebocas, tapando nariz y boca")
    cubrebocas = true;
    return cubrebocas;
}

//Función Principal (función que llama al resto de funciones)
function preparacionInspeccion (){
    tiempo = 20;
    bata = colocarBata();
    lavarManos(tiempo);
    guantes = colocarGuantes();
    cubrebocas = colocarCubrebocas();
    if((bata = true) && (guantes = true) && (cubrebocas = true)){
        console.log("Preparación completada, puede empezar la inspección");
    }
}

//main
preparacionInspeccion();
