// ======================================================
// 01 - FUNCTION BASICS
// ======================================================


// ======================================================
// 1. BASIC FUNCTION
// ======================================================

function greet() {
    console.log("Hello Hamza");
}

greet();


// ======================================================
// 2. CALL FUNCTION MULTIPLE TIMES
// ======================================================

function sayHello() {
    console.log("Hello!");
}

sayHello();
sayHello();
sayHello();


// ======================================================
// 3. USER INFORMATION
// ======================================================

function showUserInfo() {
    console.log("Name: Hamza");
    console.log("Role: Full Stack Developer");
    console.log("Country: Pakistan");
}

showUserInfo();


// ======================================================
// 4. WELCOME MESSAGE
// ======================================================

function showWelcomeMessage() {
    console.log("Welcome to our store!");
}

showWelcomeMessage();


// ======================================================
// 5. CALCULATE TOTAL MESSAGE
// ======================================================

function calculateTotal() {
    console.log("Calculating total...");
}

calculateTotal();


// ======================================================
// 6. CHECK STOCK
// ======================================================

function checkStock() {
    console.log("Checking product stock...");
}

checkStock();


// ======================================================
// 7. ORDER PROCESS
// ======================================================

function processOrder() {
    console.log("Checking stock...");
    console.log("Calculating total...");
    console.log("Creating order...");
    console.log("Order confirmed!");
}

processOrder();


// ======================================================
// 8. FUNCTION CALL FLOW
// ======================================================

function showMessage() {
    console.log("This is inside the function");
}

console.log("Start");

showMessage();

console.log("End");