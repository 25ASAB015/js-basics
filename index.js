// Este es un comentario explicativo del archivo
// console.log("Hello World from JavaScript at index.js");

//////////////////////
// Variables
//////////////////////
// Declaración de variables usando 'let' - pueden cambiar su valor
let userName = "Robert";
console.log(userName);

let userAge = 20;
console.log(userAge);

let userIsStudent = true;
console.log(userIsStudent);

//////////////////////
// Constants
//////////////////////
// Declaración de constantes usando 'const' - no pueden cambiar su valor
const interestRate = 0.3;
console.log(interestRate);


//////////////////////
// Data Types
//////////////////////
// Tipos de datos primitivos en JavaScript
let personName = "Robert"; //string literal - texto
let personAge = 20; //number literal - número
let personIsStudent = true; //boolean literal - verdadero/falso
let firstName = undefined; // valor indefinido
let secondName = null; // valor nulo intencionalmente
// undefined es un valor que no está definido
// null es un valor que está definido pero no tiene valor

// Operaciones aritméticas básicas
let x = 10; //number literal
let y = 20; //number literal
let z = x + y; //suma de dos números

// Mostrando los resultados en consola
console.log(z);
console.log(firstName);
console.log(secondName);

//////////////////////
// Dynamic typing
//////////////////////

// Ejemplo de Dynamic Typing en JavaScript
// Una misma variable puede cambiar de tipo durante la ejecución

let dynamicVariable = "Hola Mundo"; // Inicialmente es string
console.log("Valor:", dynamicVariable, "- Tipo:", typeof dynamicVariable);

dynamicVariable = 42; // Ahora es number
console.log("Valor:", dynamicVariable, "- Tipo:", typeof dynamicVariable);

dynamicVariable = true; // Ahora es boolean
console.log("Valor:", dynamicVariable, "- Tipo:", typeof dynamicVariable);

dynamicVariable = [1, 2, 3]; // Ahora es object (array)
console.log("Valor:", dynamicVariable, "- Tipo:", typeof dynamicVariable);

dynamicVariable = null; // Ahora es null (pero typeof devuelve 'object')
console.log("Valor:", dynamicVariable, "- Tipo:", typeof dynamicVariable);

dynamicVariable = undefined; // Ahora es undefined
console.log("Valor:", dynamicVariable, "- Tipo:", typeof dynamicVariable);

// Función que puede recibir diferentes tipos de datos
function procesarDato(dato) {
    console.log("\n--- Procesando dato ---");
    console.log("Valor recibido:", dato);
    console.log("Tipo:", typeof dato);

    // Verificamos el tipo de dato recibido y actuamos en consecuencia
    if (typeof dato === "string") {
        console.log("Es un texto de", dato.length, "caracteres");
    } else if (typeof dato === "number") {
        console.log("Es un número, su doble es:", dato * 2);
    } else if (typeof dato === "boolean") {
        console.log("Es un booleano:", dato ? "verdadero" : "falso");
    }
}

// Llamamos la función con diferentes tipos de datos para probar
procesarDato("JavaScript");
procesarDato(25);
procesarDato(false);


//////////////////////
// Objects
//////////////////////

// Creación de un objeto en JavaScript con propiedades de diferentes tipos
let person = {
    name: "Robert",        // propiedad string
    age: 20,              // propiedad number
    isStudent: true       // propiedad boolean
};
console.log(person); // Muestra todo el objeto

// Dot Notation - Acceso a propiedades usando punto (.)
// Es la forma más común y legible de acceder a propiedades
console.log(person.name);        // Accede a la propiedad 'name'
console.log(person.age);         // Accede a la propiedad 'age'
console.log(person.isStudent);   // Accede a la propiedad 'isStudent'

// Bracket Notation - Acceso a propiedades usando corchetes ['']
// Útil cuando el nombre de la propiedad contiene espacios, caracteres especiales
// o cuando el nombre de la propiedad está en una variable
console.log(person['name']);     // Accede a la propiedad 'name' usando string
console.log(person['age']);      // Accede a la propiedad 'age' usando string
console.log(person['isStudent']); // Accede a la propiedad 'isStudent' usando string

//////////////////////
// Arrays
//////////////////////

// Array con diferentes tipos de elementos (como strings)
let selectedColors = ['red', 'blue', 'green', '5', 'true', 'false', 'null', 'undefined', 'NaN', 'Infinity', 'Symbol'];
console.log(selectedColors); // Muestra todo el array

// Acceso a elementos del array usando índices (empiezan en 0)
console.log(selectedColors[0]); // Accede al primer elemento (índice 0)
console.log(selectedColors[1]); // Accede al segundo elemento (índice 1)

// Propiedad length nos da la cantidad de elementos
console.log(selectedColors.length);

// Acceso individual a varios elementos del array
console.log(selectedColors[0]); // 'red'
console.log(selectedColors[1]); // 'blue'
console.log(selectedColors[2]); // 'green'
console.log(selectedColors[3]); // '5'
console.log(selectedColors[4]); // 'true'



//////////////////////
// Functions
//////////////////////

// Declaración de función básica con dos parámetros
function greet(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}

// Llamadas a la función con diferentes argumentos
greet("Roberto", "Flores");
greet("Jese", "Daniel");

// Llamadas con menos argumentos - los parámetros faltantes serán 'undefined'
greet("Roberto"); // lastName será undefined
greet("Jese"); // lastName será undefined

// Diferencia entre parámetros y argumentos:
// - Parámetros: son las variables definidas en la declaración de la función (name, lastName)
// - Argumentos: son los valores reales que se pasan cuando se llama a la función ("Roberto", "Flores")


//////////////////////
// Types of Functions
//////////////////////

// Function Declaration - Se puede llamar antes de ser declarada (hoisting)
function greetDeclaration(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}

// Function Expression - Se asigna a una variable, no tiene hoisting
let greetExpression = function(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}

// Arrow Function - Sintaxis más concisa, introducida en ES6
let greetArrow = (name, lastName) => {
    console.log("Hello " + name + " " + lastName);
}

// Llamadas a los diferentes tipos de funciones
greetDeclaration("Roberto", "Flores");  // Function Declaration
greetExpression("Jese", "Daniel");      // Function Expression
greetArrow("Juan", "Perez");            // Arrow Function


//////////////////////
// ternary operator
//////////////////////

// Definimos una variable con la hora actual (en formato de 24 horas)
let hour = 10;

// Usamos el operador ternario para asignar un mensaje basado en la hora
// Sintaxis: condición ? valor_si_verdadero : valor_si_falso
let message = hour < 12 ? "Good Morning" : "Good Afternoon";

// Mostramos el mensaje en la consola
console.log(message);


//////////////////////
// logical operators
//////////////////////

let a = 10;
let b = 20;
let c = 30;

// AND (&&) - Retorna true solo si ambas condiciones son verdaderas
console.log(a > b && a > c); // false && false = false

// OR (||) - Retorna true si al menos una condición es verdadera
console.log(a > b || a > c); // false || false = false

// NOT (!) - Invierte el valor booleano (true se convierte en false y viceversa)
console.log(!(a > b)); // !(false) = true


//////////////////////
// logical operators with non boolean values
//////////////////////

// falsy values: 0, "", null, undefined, NaN
// truthy values: 1, "a", true, [], {}

let userColor = "red";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(currentColor);

