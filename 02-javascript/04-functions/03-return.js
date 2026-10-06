// ======================================================
// 03 - RETURN
// ======================================================


// ======================================================
// 1. BASIC RETURN
// ======================================================

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);


// ======================================================
// 2. RETURN WITH MULTIPLICATION
// ======================================================

function multiply(a, b) {
    return a * b;
}

let multiplicationResult = multiply(5, 4);

console.log(multiplicationResult);


// ======================================================
// 3. DIRECT RETURN
// ======================================================

function subtract(a, b) {
    return a - b;
}

console.log(subtract(20, 5));


// ======================================================
// 4. RETURN VALUE IN ANOTHER CALCULATION
// ======================================================

function calculatePrice(price, quantity) {
    return price * quantity;
}

let total = calculatePrice(1500, 3);

let tax = total * 0.10;

console.log(`Total: Rs. ${total}`);
console.log(`Tax: Rs. ${tax}`);


// ======================================================
// 5. BOOLEAN RETURN
// ======================================================

function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(7));


// ======================================================
// 6. AGE CHECK
// ======================================================

function checkAge(age) {

    if (age >= 18) {
        return "Adult";
    }

    return "Minor";
}

console.log(checkAge(20));
console.log(checkAge(15));


// ======================================================
// 7. RETURN ENDS FUNCTION
// ======================================================

function test() {
    return "Hello";

    console.log("This will not run");
}

console.log(test());


// ======================================================
// 8. FUNCTION RESULT USED BY ANOTHER FUNCTION
// ======================================================

function addNumbers(a, b) {
    return a + b;
}

function double(number) {
    return number * 2;
}

let numberResult = addNumbers(10, 20);

console.log(double(numberResult));


// ======================================================
// 9. ECOMMERCE TOTAL
// ======================================================

function calculateTotal(price, quantity) {
    return price * quantity;
}

let orderTotal = calculateTotal(2000, 3);

console.log(`Order Total: Rs. ${orderTotal}`);