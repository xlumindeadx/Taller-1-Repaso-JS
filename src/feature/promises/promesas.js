/*NOTAS CLASE :
Promesas 
Pendiente/Pending:viene relacionado con la promesa,
es el que permite
Una Promesa es un objeto que representa una operación que puede completarse
en el futuro. */

/*Actividad 4: Promises
Agregar una descripción de Promises y luego implementar la siguiente función 
utilizando Promises:

* Crear una promesa que reciba una cadena y si esta finaliza en vocal devolver 
con el resolve la vocal, en caso contrario en el reject retornar ‘el caracter no
 es una vocal’. Se deben tener encuenta las vocales en minúsculas y en mayúsculas.
*/


document.getElementById("btnValidar").onclick=function () {
let texto=document.getElementById("cadena").value.trim();

/* Creamos promesa*/
    let vocalPromesa = new Promise(function (resolve, reject) {

        if (texto === "") {
            reject("Ingresa Una Palabra");
            return;
        }
    let ultimaLetra=texto[texto.length - 1];
        let vocales="aeiouAEIOU";

        if (vocales.includes(ultimaLetra)) {
        resolve(ultimaLetra);
        } else {
        reject("Caracter-No Termina en una Vocal");
        }
    });

    vocalPromesa.then(
        function (value) {
        myDisplayer("Termina en la vocal: " +value,"success");
        },
        function(error){
        myDisplayer(error,"error");
        }
    );
};
// resultado
function myDisplayer(mensaje,tipo){
    let resultado=document.getElementById("resultado");
    resultado.innerHTML=mensaje;
    resultado.className=tipo;
}

