/*Actividad 6: Destructuring Objects
Agregar una descripción de Destructuring Objects y luego implementar 
la siguiente función utilizando Destructuring Objects:

* Dado el siguiente objeto:
const person = {
  name: 'Juan Carlos Valencia',
  age: 30,
  city: 'Cali',
  profession: 'Desarrollador'
};          
Utilizando destructuring, extraer el nombre, la edad y la profesión de
 la persona e imprimirlos.*/


 
/*informacion de la persona */
const persona = {
  nombre: 'Juan Carlos Valencia',
  edad: 30,
  ciudad: 'Cali',
  profesion: 'Desarrollador'
};

/*propiedades-necesarias uso de la destructuracion */
const { nombre, edad, profesion } = persona;
console.log( "Nombre:" , nombre);
console.log("Edad:" , edad);
console.log("Profesion" , profesion);

document.getElementById('resultado').textContent = 
  `Persona Llamada:${nombre} , Cuenta con la Edad de ${edad}  ,  Actualmente dedicado a ${profesion}`;








