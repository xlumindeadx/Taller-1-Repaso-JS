
/* Actividad 3: 
1. Dado los siquientes arrays:  
baseDatos1=[‘Canada’, ‘EUA’, ‘Mexico’,‘Ecuador, ‘Brazil’, ‘Argentina’, ‘Uruguay’]
baseDatos2 =[‘Japón’, ‘Irán’, ‘Corea del Sur’, ‘Alemania’, ‘Croacia’, ‘España’, ‘Inglaterra’]

Implementar una función busquedaBaseDatos1 que busque en baseDatos1 
un país, y si lo encuentra retorne con un call back a la función encontrado
 la cual debe imprimir el mensaje ‘pais encontrado’.
Si el dato NO se encontró en baseDatos1 deberá retornar con un callback a la 
función busquedaBaseDatos2, y si lo encuentra retornar con un callback a la función
 encontrado la cual debe imprimir el mensaje ‘Pais encontrado’.
Si el dato NO se encontró en baseDatos2 deberá mostrar el mensaje ‘Dato no encontrado’

*/

let baseDatos1 = ['Canada', 'EUA', 'Mexico', 'Ecuador', 'Brazil', 'Argentina', 'Uruguay'];
let baseDatos2 = ['Japón', 'Irán', 'Corea del Sur', 'Alemania', 'Croacia', 'España', 'Inglaterra'];

/*mensaje*/
function encontrado() {
    document.getElementById("resultado").textContent = "País encontrado";
}

/*busca en la BD2*/
function busquedaBaseDatos2(pais, callback) {
    if (baseDatos2.includes(pais)) {
        callback();
    } else {
        document.getElementById("resultado").textContent = "Dato no encontrado";
    }
}

/*busca en la BD1 y usa callback para manejar resultado*/
function busquedaBaseDatos1(pais, callbackEncontrado, callbackNoEncontrado) {
    if (baseDatos1.includes(pais)) {
        callbackEncontrado();
    } else {
        callbackNoEncontrado(pais, callbackEncontrado);
    }
}
/*botoncito_buscar*/
document.getElementById("btnBuscar").onclick = function() {
    let pais = document.getElementById("inputPais").value.trim();

    if (pais === "") {
        document.getElementById("resultado").textContent = "Por favor ingresa un país para buscar.";
        return;
    }
    busquedaBaseDatos1(pais, encontrado, busquedaBaseDatos2);
};
