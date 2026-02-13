/*1)fUNCION DE QUE SIMULA UNA PETICION 
asincronica  (como fetcha a una API*/
/*Primero declaramos , Realizamos una funcion obtener usuario por id */


/*Actividad 5: Async/Await
Agregar una descripción de Async/Await y luego implementar la siguiente función utilizando
 Async/Await:* Crear una función asíncrona que reciba un número y retorne el doble del número
  después de 2 segundos. Utilizar async/await para manejar la promesa.*/

/*duplicar */
function Duplicar(numero) {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (isNaN(numero) || numero === "") {
            reject("El valor ingresado no es un número válido");
        }else {
            resolve(numero * 2);
            }
        }, 2000);
    });
}

/* async que usa await*/
async function calcularDoble(numero) {
    const resultadoDiv = document.getElementById("resultado");
    try {
        resultadoDiv.innerText = "Calculando...";
        const resultado = await Duplicar(numero);
        resultadoDiv.innerText = "El doble es: " + resultado;
    } catch (error) {
        resultadoDiv.innerText = "Error: " + error;
    }
}

/*botoncito */
document.getElementById("btnBuscar").addEventListener("click", () => {
    const numero = document.getElementById("inputId").value;
    calcularDoble(numero);
});

/*____-Luego vemos un ejemplo de destructuracion-_ en clase___ */