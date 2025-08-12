// This is a comment
// console.log("Hello World from JavaScript at index.js");

//////////////////////
// Variables
//////////////////////
// let name = "Robert";
// console.log(name);

// let age = 20;
// console.log(age);

// let isStudent = true;
// console.log(isStudent);

//////////////////////
// Constants
//////////////////////
// const  interestRate = 0.3;
// console.log(interestRate);


//////////////////////
// Data Types
//////////////////////
// let name = "Robert"; //string literal
// let age = 20; //number literal
// let isStudent = true; //boolean literal
// let firstName = undefined;
// let secondName = null;
// // undefined is a value that is not defined
// // null is a value that is defined but has no value

// let x = 10; //number literal
// let y = 20; //number literal
// let z = x + y; //number literal

// console.log(z);
// console.log(firstName);
// console.log(secondName);

//////////////////////
// Dynamic typing
//////////////////////

// Ejemplo de Dynamic Typing en JavaScript
// Una misma variable puede cambiar de tipo durante la ejecución

// let dynamicVariable = "Hola Mundo"; // Inicialmente es string
// console.log("Valor:", dynamicVariable, "- Tipo:", typeof dynamicVariable);

// dynamicVariable = 42; // Ahora es number
// console.log("Valor:", dynamicVariable, "- Tipo:", typeof dynamicVariable);

// dynamicVariable = true; // Ahora es boolean
// console.log("Valor:", dynamicVariable, "- Tipo:", typeof dynamicVariable);

// dynamicVariable = [1, 2, 3]; // Ahora es object (array)
// console.log("Valor:", dynamicVariable, "- Tipo:", typeof dynamicVariable);

// dynamicVariable = null; // Ahora es null (pero typeof devuelve 'object')
// console.log("Valor:", dynamicVariable, "- Tipo:", typeof dynamicVariable);

// dynamicVariable = undefined; // Ahora es undefined
// console.log("Valor:", dynamicVariable, "- Tipo:", typeof dynamicVariable);

// // Función que puede recibir diferentes tipos de datos
// function procesarDato(dato) {
//     console.log("\n--- Procesando dato ---");
//     console.log("Valor recibido:", dato);
//     console.log("Tipo:", typeof dato);

//     if (typeof dato === "string") {
//         console.log("Es un texto de", dato.length, "caracteres");
//     } else if (typeof dato === "number") {
//         console.log("Es un número, su doble es:", dato * 2);
//     } else if (typeof dato === "boolean") {
//         console.log("Es un booleano:", dato ? "verdadero" : "falso");
//     }
// }

// // Llamamos la función con diferentes tipos
// procesarDato("JavaScript");
// procesarDato(25);
// procesarDato(false);


//////////////////////
// Objects
//////////////////////

// Creación de un objeto en JavaScript con propiedades de diferentes tipos
// let person = {
//     name: "Robert",
//     age: 20,
//     isStudent: true
// };
// console.log(person);

// // Dot Notation - Acceso a propiedades usando punto (.)
// // Es la forma más común y legible de acceder a propiedades
// console.log(person.name);        // Accede a la propiedad 'name'
// console.log(person.age);         // Accede a la propiedad 'age'
// console.log(person.isStudent);   // Accede a la propiedad 'isStudent'

// // Bracket Notation - Acceso a propiedades usando corchetes ['']
// // Útil cuando el nombre de la propiedad contiene espacios, caracteres especiales
// // o cuando el nombre de la propiedad está en una variable
// console.log(person['name']);     // Accede a la propiedad 'name' usando string
// console.log(person['age']);      // Accede a la propiedad 'age' usando string
// console.log(person['isStudent']); // Accede a la propiedad 'isStudent' usando string

//////////////////////
// Arrays
//////////////////////

// let selectedColors = ['red', 'blue', 'green', '5', 'true', 'false', 'null', 'undefined', 'NaN', 'Infinity', 'Symbol'];
// console.log(selectedColors);

// // Acceso a elementos del array
// console.log(selectedColors[0]); // Accede al primer elemento
// console.log(selectedColors[1]); // Accede al segundo elemento

// // Acceso a la longitud del array
// console.log(selectedColors.length);

// // Acceso a los elementos del array
// console.log(selectedColors[0]);
// console.log(selectedColors[1]);
// console.log(selectedColors[2]);
// console.log(selectedColors[3]);
// console.log(selectedColors[4]);



//////////////////////
// Functions
//////////////////////

// // function declaration
// function greet(name, lastName) {
//     console.log("Hello " + name + " " + lastName);
// }

// // function call
// greet("Roberto", "Flores");
// greet("Jese", "Daniel");

// greet("Roberto"); // second argument is defined but first is not
// greet("Jese"); // second argument is defined but first is not

// // Diferencia entre parámetros y argumentos:
// // - Parámetros: son las variables definidas en la declaración de la función (name, lastName)
// // - Argumentos: son los valores reales que se pasan cuando se llama a la función ("Roberto", "Flores")


//////////////////////
// Types of Functions
//////////////////////

// Function Declaration
function greet(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}

// Function Expression
let greetExpression = function(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}

// Arrow Function
let greetArrow = (name, lastName) => {
    console.log("Hello " + name + " " + lastName);
}

// Function Call
greet("Roberto", "Flores");
greetExpression("Jese", "Daniel");
greetArrow("Juan", "Perez");
