// ======================================================
// 05 - INPUT & OUTPUT
// ======================================================


// ======================================================
// 1. OUTPUT USING console.log()
// ======================================================

console.log("Hello World!");

let name = "Hamza";
let age = 22;

console.log(name);
console.log(age);

console.log("Name:", name);
console.log("Age:", age);

console.log(`My name is ${name} and I am ${age} years old.`);


// ======================================================
// 2. console.error()
// ======================================================

console.error("This is an error message.");


// ======================================================
// 3. console.warn()
// ======================================================

console.warn("This is a warning message.");


// ======================================================
// 4. console.table()
// ======================================================

let products = [
    "AirPods",
    "Headphones",
    "Smart Watch"
];

console.table(products);


// ======================================================
// 5. BROWSER OUTPUT
// ======================================================

// These examples work in the browser.

// alert("Welcome to our store!");


// ======================================================
// 6. BROWSER INPUT USING prompt()
// ======================================================

// let userName = prompt("Enter your name:");

// console.log(userName);


// ======================================================
// 7. prompt() RETURNS STRING
// ======================================================

// let userAge = prompt("Enter your age:");

// console.log(userAge);
// console.log(typeof userAge);


// ======================================================
// 8. CONVERT STRING INPUT INTO NUMBER
// ======================================================

// let userAge = Number(prompt("Enter your age:"));

// console.log(userAge);
// console.log(typeof userAge);


// ======================================================
// 9. ECOMMERCE EXAMPLE
// ======================================================

// let price = Number(prompt("Enter product price:"));
// let quantity = Number(prompt("Enter quantity:"));

// let total = price * quantity;

// console.log(`Total Price: ${total}`);


// ======================================================
// 10. NODE.JS INPUT USING readline
// ======================================================

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (userName) => {

    console.log(`Welcome, ${userName}!`);

    rl.close();
});