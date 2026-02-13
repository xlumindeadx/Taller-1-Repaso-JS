#  Repaso de JavaScript – Proyecto Práctico

Este proyecto consiste en un repaso práctico de los conceptos fundamentales de JavaScript, aplicando diferentes temas como CRUD, Callbacks, Promesas, Async/Await y Desestructuración.

Cada tema fue desarrollado en su propio archivo HTML + JavaScript, organizados de manera independiente y estructurada.

El diseño fue realizado utilizando Bootstrap y estilos personalizados en CSS.

---

##  Tecnologías Utilizadas

- HTML5  
- CSS3  
- JavaScript (ES6+)  
- Bootstrap  
- JSON  

---

#  Contenido del Proyecto

## 1️⃣ CRUD con Validaciones

Se desarrolló un sistema CRUD que permite:

### Campos del formulario:
- Nombre
- Correo electrónico
- Número de documento

### Funcionalidades:
- Guardar registros
- Limpiar formulario
- Editar registros
- Eliminar registro individual
- Eliminar todos los registros
- Exportar datos a formato JSON
-Evita Repeticion de Datos Guardados

El formulario incluye validaciones para asegurar que los datos ingresados sean correctos antes de guardarlos.

---

## 2️⃣ Uso de Callbacks

En esta sección se trabaja el concepto de Callbacks en JavaScript.

###  Funcionamiento:
- El usuario ingresa el nombre de un país.
- El sistema busca el país en dos bases de datos.
- Mediante un callback se devuelve el resultado indicando:
  -  Si el país fue encontrado.
  - No  Si el país no existe en las bases de datos.

Esto permite entender cómo funcionan las funciones que se ejecutan después de otra operación.

---

## 3️⃣ Uso de Promesas

Aquí se implementa el concepto de Promesas en JavaScript.

###  Funcionamiento:
- El usuario ingresa una palabra.
- Se crea una promesa que evalúa si la palabra termina en vocal.
- La promesa:
  - Se resuelve si termina en vocal.
  - Se rechaza si no termina en vocal.

Este ejercicio permite comprender cómo manejar operaciones asíncronas con .then() y .catch().

---

## 4️⃣ Async / Await

En esta sección se trabaja el manejo moderno de asincronía con async/await.

###  Funcionamiento:
- El usuario ingresa un número.
- Después de 2 segundos, el sistema muestra el número duplicado.

Este ejercicio demuestra cómo trabajar con tiempos de espera simulados y cómo simplificar el manejo de promesas usando async y await.

---

## 5️⃣ Desestructuración

Se implementa el uso de Destructuring en JavaScript.

###  Funcionamiento:
- Se toma la base de datos de una persona.
- Mediante desestructuración se extraen únicamente algunos datos específicos.
- No se utiliza todo el objeto, solo las propiedades necesarias.

Esto permite comprender cómo acceder de manera más limpia y eficiente a propiedades de objetos.

---

#  Diseño y Estructura

- Cada tema tiene su propio:
  - Archivo HTML
  - Archivo JS

- En la parte superior de cada página se encuentra:
  - Un banner con el título del tema.
  - El logo del SENA.
  
- Todas las páginas incluyen:
  - Navbar superior
  - Footer al final

- Se creó un archivo styles.css que contiene:
  - Colores de fondo
  - Ajustes de imágenes
  - Edición de texto
  - Personalización de estilos

El diseño general del proyecto fue realizado utilizando Bootstrap para mantener una estructura ordenada y responsiva.

---

#  Objetivo del Proyecto

Reforzar y practicar los principales conceptos de JavaScript mediante ejercicios prácticos aplicados, comprendiendo tanto la manipulación del DOM como la programación asíncrona.

---

#  Autor
Aprendiz: Mariana Cardona Mazo
Proyecto realizado como práctica académica para reforzar conocimientos en JavaScript.
