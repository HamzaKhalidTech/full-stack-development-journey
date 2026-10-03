// ==========================================
// 02 - DATA TYPES
// ==========================================

// Data type tells us what kind of value
// is stored inside a variable.


// ==========================================
// 1. STRING
// ==========================================

let firstName = "Hamza";
let city = "Lahore";
let message = "Welcome to JavaScript";

console.log(firstName);
console.log(city);
console.log(message);

console.log(typeof firstName);


// ==========================================
// 2. NUMBER
// ==========================================

let age = 21;
let price = 1500;
let cgpa = 2.31;
let temperature = -5;

console.log(age);
console.log(price);
console.log(cgpa);
console.log(temperature);

console.log(typeof age);
console.log(typeof cgpa);


// ==========================================
// 3. BOOLEAN
// ==========================================

let isStudent = true;
let isLoggedIn = false;

console.log(isStudent);
console.log(isLoggedIn);

console.log(typeof isStudent);
console.log(typeof isLoggedIn);


// ==========================================
// 4. UNDEFINED
// ==========================================

let username;

console.log(username);
console.log(typeof username);


// ==========================================
// 5. NULL
// ==========================================

// null means intentionally empty/no value.

let selectedProduct = null;

console.log(selectedProduct);
console.log(typeof selectedProduct);

// Note:
// typeof null returns "object".
// This is a historical JavaScript quirk.


// ==========================================
// 6. BIGINT
// ==========================================

let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);


// ==========================================
// 7. SYMBOL
// ==========================================

let userId = Symbol("userId");

console.log(userId);
console.log(typeof userId);


// ==========================================
// 8. SYMBOLS ARE UNIQUE
// ==========================================

let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2);

// Output:
// false


// ==========================================
// 9. TYPEOF
// ==========================================

console.log(typeof "Hello");
console.log(typeof 100);
console.log(typeof 10.5);
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);


// ==========================================
// 10. STRING VS NUMBER
// ==========================================

let numberValue = 21;
let stringValue = "21";

console.log(typeof numberValue);
console.log(typeof stringValue);


// ==========================================
// 11. EMPTY STRING
// ==========================================

let emptyName = "";

console.log(emptyName);
console.log(typeof emptyName);


// ==========================================
// 12. DIFFERENCE BETWEEN
// STRING, NULL AND UNDEFINED
// ==========================================

let name = "";
let user = null;
let email;

console.log(name);
console.log(user);
console.log(email);

console.log(typeof name);
console.log(typeof user);
console.log(typeof email);


// ==========================================
// 13. E-COMMERCE EXAMPLE
// ==========================================

const productName = "AirPods Pro";
const productPrice = 299;
let productStock = 15;
const isAvailable = true;
const discount = null;

console.log(productName);
console.log(productPrice);
console.log(productStock);
console.log(isAvailable);
console.log(discount);

console.log(typeof productName);
console.log(typeof productPrice);
console.log(typeof productStock);
console.log(typeof isAvailable);
console.log(typeof discount);


// ==========================================
// 14. ALL MAIN PRIMITIVE TYPES
// ==========================================

// String
let exampleString = "Hello";

// Number
let exampleNumber = 100;

// Boolean
let exampleBoolean = true;

// Undefined
let exampleUndefined;

// Null
let exampleNull = null;

// BigInt
let exampleBigInt = 1000000000000000000n;

// Symbol
let exampleSymbol = Symbol("example");

console.log(exampleString);
console.log(exampleNumber);
console.log(exampleBoolean);
console.log(exampleUndefined);
console.log(exampleNull);
console.log(exampleBigInt);
console.log(exampleSymbol);