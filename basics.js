console.log("Hello World...!");

// var ES5 engine and introduced let, const ES6

let a = 6;
console.log(a);
console.log(typeof(a));

let b = 2.34;
console.log(b);
console.log(typeof(b));

var c = "Java Script";
console.log(c);
console.log(typeof(c));

let required = true;
console.log(required);
console.log(typeof("/n /n" +required));


/* redeclaration of variables won't work with let but it will work with var
 we can redeclare and reassign variables with var
 we can only reassign variables with let example: let a = 6; let a = 7; // this will throw an error
a = "Java"; // this will work fine
but var a = 6; var a = 7; // this will work fine
*/

var c = a+b;
console.log(c);
//we can't redeclare the variable with let but it is possible with var


console.log(!required);

/* differnece between const and let
const is used to declare a constant variable whose value cannot be changed
let is used to declare a variable whose value can be changed
const pi = 3.14;
let radius = 5;
const area = pi * radius * radius;
console.log(area); // 78.5
// const cannot be reassigned
let radius = 5;
 radius = 10; // this will work fine
 const pi = 3.14; // this will throw an error
*/