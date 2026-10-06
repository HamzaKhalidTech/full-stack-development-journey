// ======================================================
// 04 - FUNCTION EXPRESSIONS
// ======================================================


// ======================================================
// 1. BASIC FUNCTION EXPRESSION
// ======================================================

const greet = function () {
    console.log("Hello Hamza");
};

greet();


// ======================================================
// 2. FUNCTION EXPRESSION WITH PARAMETER
// ======================================================

const sayHello = function (name) {
    console.log(`Hello ${name}`);
};

sayHello("Hamza");
sayHello("Ali");


// ======================================================
// 3. MULTIPLE PARAMETERS
// ======================================================

const introduce = function (name, age) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
};

introduce("Hamza", 20);


// ======================================================
// 4. RETURN VALUE
// ======================================================

const add = function (a, b) {
    return a + b;
};

let result = add(10, 20);

console.log(result);


// ======================================================
// 5. MULTIPLICATION
// ======================================================

const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(5, 10));


// ======================================================
// 6. CHECK EVEN NUMBER
// ======================================================

const isEven = function (number) {
    return number % 2 === 0;
};

console.log(isEven(10));
console.log(isEven(7));


// ======================================================
// 7. ECOMMERCE TOTAL
// ======================================================

const calculateTotal = function (price, quantity) {
    return price * quantity;
};

let total = calculateTotal(2000, 3);

console.log(`Order Total: Rs. ${total}`);


// ======================================================
// 8. DISCOUNT CALCULATION
// ======================================================

const calculateDiscount = function (price, discount) {
    return price * discount / 100;
};

let discountAmount = calculateDiscount(10000, 20);

console.log(`Discount: Rs. ${discountAmount}`);


// ======================================================
// 9. FINAL PRICE
// ======================================================

const calculateFinalPrice = function (price, discount) {

    let discountAmount = price * discount / 100;

    return price - discountAmount;
};

let finalPrice = calculateFinalPrice(10000, 20);

console.log(`Final Price: Rs. ${finalPrice}`);