// ======================================================
// 01 - IF ELSE
// ======================================================


// ======================================================
// 1. BASIC IF
// ======================================================

let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
}


// ======================================================
// 2. IF ELSE
// ======================================================

let userAge = 15;

if (userAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// ======================================================
// 3. MARKS EXAMPLE
// ======================================================

let marks = 75;

if (marks >= 50) {
    console.log("You passed the exam.");
} else {
    console.log("You failed the exam.");
}


// ======================================================
// 4. PRODUCT STOCK
// ======================================================

let stock = 10;

if (stock > 0) {
    console.log("Product is available.");
} else {
    console.log("Out of stock.");
}


// ======================================================
// 5. LOGIN EXAMPLE
// ======================================================

let password = "12345";

if (password === "12345") {
    console.log("Login successful.");
} else {
    console.log("Incorrect password.");
}


// ======================================================
// 6. MULTIPLE CONDITIONS
// ======================================================

let userAgeForApplication = 22;
let hasCNIC = true;

if (userAgeForApplication >= 18 && hasCNIC === true) {
    console.log("You can apply.");
} else {
    console.log("You cannot apply.");
}


// ======================================================
// 7. EVEN / ODD
// ======================================================

let number = 10;

if (number % 2 === 0) {
    console.log("Even number");
} else {
    console.log("Odd number");
}


// ======================================================
// 8. TEMPERATURE EXAMPLE
// ======================================================

let temperature = 35;

if (temperature > 30) {
    console.log("It is hot.");
} else {
    console.log("The weather is normal.");
}