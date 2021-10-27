// variables
var x;
x = 7;
x = 15;
x = "hello"
console.log(x);

let y;
y = 20;
y = "John"
console.log(x + " " + y);

// const can not reassigned and redecleared.
// const z; 
// z = 14;
// console.log(z);

const z = 14;
console.log(z);

// Primitives / value type
 
let name = "John"; //string literal
let age = 35; // Number literal
let isApproved = false; //Boolean Literal
let firstName =  undefined;
let selectSection = null;

// Dynamic and Static
console.log(typeof age); //Number
 age = "forty"
 console.log( typeof age); //string

// Object
const person = {
    name : 'Ali',
    age : 25
}
console.log(person)

// Dot notation
person.name = "Mosh";
console.log(person.name)

//Bracket Notation
person['name'] = "John";
console.log(person.name);

//Array
let month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
console.log(month[2]);

// Function
function greet (X){
    console.log(x);
}
greet('hello');

//type of function
// performing task
function names (firstName, secondName){
    console.log("hello"+" "+firstName+" "+"and"+ " " +secondName)
}
names('John', 'Ali');

//calculating a value 
function numbers (){
    console.log(2*5);
}
numbers();

//Operators
//Arithmetic operator

let x = 100 + 50;

x = 5;
let y = 2;
let z = x - y;

z = x * y;

z = x/y;

z = x % y;

x = 5;
x++;
z = x;

x--;
z = x;

z = x ** 2;

//Assignment Operators

x += y
x -= y
x *= y
x /= y
x %= y
