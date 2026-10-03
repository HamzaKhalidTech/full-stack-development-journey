// ==========================================
// 01 - VARIABLES
// ==========================================

// A variable is a named container used to store data.


// ==========================================
// 1. LET
// ==========================================

// Use let when the value can change.

let age = 21;

console.log(age);

// Reassigning a let variable
age = 22;

console.log(age);


// ==========================================
// 2. CONST
// ==========================================

// Use const when the value should not be reassigned.

const country = "Pakistan";

console.log(country);


// ==========================================
// 3. VAR
// ==========================================

// var is the old way of declaring variables.
// In modern JavaScript, prefer let and const.

var oldVariable = "Old JavaScript";

console.log(oldVariable);


// ==========================================
// 4. DECLARATION
// ==========================================

let username;

console.log(username);


// ==========================================
// 5. INITIALIZATION
// ==========================================

let studentName = "Hamza";

console.log(studentName);


// ==========================================
// 6. REASSIGNMENT
// ==========================================

let score = 50;

console.log(score);

score = 80;

console.log(score);


// ==========================================
// 7. VARIABLE NAMING
// ==========================================

let firstName = "Hamza";
let lastName = "Khalid";
let phoneNumber = "03001234567";

console.log(firstName);
console.log(lastName);
console.log(phoneNumber);


// ==========================================
// 8. MULTIPLE VARIABLES
// ==========================================

let productName = "AirPods Pro";
let productPrice = 299;
let productStock = 20;

console.log(productName);
console.log(productPrice);
console.log(productStock);


// ==========================================
// 9. VARIABLES WITH CALCULATIONS
// ==========================================

let price = 1000;
let quantity = 3;

let total = price * quantity;

console.log(total);


// ==========================================
// 10. REASSIGNING STOCK
// ==========================================

let stock = 20;

stock = stock - 1;

console.log(stock);


// ==========================================
// 11. DIFFERENT VALUES
// ==========================================

let name = "Hamza";
let studentAge = 21;
let cgpa = 2.31;
let isStudent = true;

console.log(name);
console.log(studentAge);
console.log(cgpa);
console.log(isStudent);


// ==========================================
// 12. PRACTICAL E-COMMERCE EXAMPLE
// ==========================================

const product = "AirPods Pro";
let productPriceUSD = 299;
let availableStock = 15;

console.log(product);
console.log(productPriceUSD);
console.log(availableStock);

// One product is sold
availableStock = availableStock - 1;

console.log(availableStock);


// ==========================================
// KEY POINTS
// ==========================================

// let   -> value can be changed
// const -> value cannot be reassigned
// var   -> old variable declaration, generally avoid
// camelCase -> common JavaScript naming convention
// meaningful names -> make code easier to understand