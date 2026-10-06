// ======================================================
// 08 - CALLBACK FUNCTIONS
// ======================================================


// ======================================================
// 1. BASIC CALLBACK
// ======================================================

function sayHello() {
    console.log("Hello Hamza");
}

function execute(callback) {
    callback();
}

execute(sayHello);


// ======================================================
// 2. CALLBACK WITH ANONYMOUS FUNCTION
// ======================================================

function runFunction(callback) {
    callback();
}

runFunction(function () {
    console.log("Hello from callback");
});


// ======================================================
// 3. CALLBACK WITH ARROW FUNCTION
// ======================================================

runFunction(() => {
    console.log("Hello from arrow callback");
});


// ======================================================
// 4. CALLBACK WITH PARAMETER
// ======================================================

function processUser(name, callback) {
    callback(name);
}

function greetUser(name) {
    console.log(`Hello ${name}`);
}

processUser("Hamza", greetUser);


// ======================================================
// 5. CALLBACK WITH TWO PARAMETERS
// ======================================================

function calculate(a, b, callback) {

    let result = a + b;

    callback(result);
}

function showResult(result) {
    console.log(`Result: ${result}`);
}

calculate(10, 20, showResult);


// ======================================================
// 6. ECOMMERCE TOTAL
// ======================================================

function calculateTotal(price, quantity, callback) {

    let total = price * quantity;

    callback(total);
}

function showTotal(total) {
    console.log(`Total: Rs. ${total}`);
}

calculateTotal(2000, 3, showTotal);


// ======================================================
// 7. ECOMMERCE WITH ARROW CALLBACK
// ======================================================

calculateTotal(1500, 4, (total) => {
    console.log(`Order Total: Rs. ${total}`);
});


// ======================================================
// 8. ORDER PROCESS
// ======================================================

function processOrder(callback) {

    console.log("Processing order...");

    callback();
}

function orderComplete() {
    console.log("Order completed!");
}

processOrder(orderComplete);


// ======================================================
// 9. CALLBACK WITH MESSAGE
// ======================================================

function showMessage(message, callback) {

    console.log(message);

    callback();
}

showMessage("Payment successful!", () => {
    console.log("Order confirmed!");
});


// ======================================================
// 10. SET TIMEOUT CALLBACK
// ======================================================

setTimeout(() => {
    console.log("This message appears after 2 seconds");
}, 2000);