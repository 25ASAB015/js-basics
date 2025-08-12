// modulo 3: Operators

//////////////////////
// 2. Arithmetic Operators
//////////////////////

let x = 10;
let y = 20;

console.log(x+y); // suma  0 + 20 = 30
console.log(x-y); // resta 10 - 20 = -10
console.log(x*y); // multiplicación 10 * 20 = 200
console.log(x/y); // división 10 / 20 = 0.5
console.log(x%y); // módulo 10 % 20 = 10
console.log(x**y); // potencia 10 ** 20 = 100000000000000000000

// increment and decrement
let a = 10;
console.log(a++); // 10
console.log(a); // 11
console.log(++a); // 12
console.log(a--); // 12
console.log(a); // 11
console.log(--a); // 10

//////////////////////
// 3. assignment Operators
//////////////////////

let d = 10;

x++;
x = x + 1;

x =
x = x + 5;
x +=


x *= 2;
x = x * 2;

x /= 2;
x = x / 2;


//////////////////////
// 4. comparison Operators
//////////////////////

let b = 10;
let c = 20;

// equality operators (loose equality)
console.log(b == c); // false
console.log(b != c); // true
// strict equality operators (type and value)
console.log(b === c); // false
console.log(b !== c); // true

// inequality operators (loose inequality)
console.log(1 == 1  ); // true
console.log("1" == 1); // true
console.log(true == 1); // true
console.log(false == 0); // true
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(0 == false); // true
console.log(0 === false); // false


console.log("hola mundo"); // false
// relational operators+
console.log(b > c); // false
console.log(b < c); // true
console.log(b >= c); // false
console.log(b <= c); // true


//////////////////////
// 6. ternary operator
//////////////////////
