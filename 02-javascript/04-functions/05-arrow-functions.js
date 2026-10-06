// ======================================================
// 05 - ARROW FUNCTIONS
// ======================================================


// ======================================================
// 1. BASIC ARROW FUNCTION
// ======================================================

const greet = () => {
    console.log("Hello Hamza");
};

greet();


// ======================================================
// 2. ARROW FUNCTION WITH PARAMETER
// ======================================================

const sayHello = (name) => {
    console.log(`Hello ${name}`);
};

sayHello("Hamza");
sayHello("Ali");


// ======================================================
// 3. MULTIPLE PARAMETERS
// ======================================================

const introduce = (name, age) => {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
};

introduce("Hamza", 20);


// ======================================================
// 4. RETURN VALUE
// ======================================================

const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));


// ======================================================
// 5. MULTIPLICATION
// ======================================================

const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(5, 4));


// ======================================================
// 6. SHORT RETURN
// ======================================================

const subtract = (a, b) => a - b;

console.log(subtract(20, 5));


// ======================================================
// 7. SQUARE
// ======================================================

const square = (number) => number * number;

console.log(square(5));


// ======================================================
// 8. EVEN NUMBER CHECK
// ======================================================

const isEven = (number) => number % 2 === 0;

console.log(isEven(10));
console.log(isEven(7));


// ======================================================
// 9. ECOMMERCE TOTAL
// ======================================================

const calculateTotal = (price, quantity) => {
    return price * quantity;
};

console.log(`Total: Rs. ${calculateTotal(2000, 3)}`);


// ======================================================
// 10. DISCOUNT
// ======================================================

const calculateDiscount = (price, discount) => {
    return price * discount / 100;
};

console.log(`Discount: Rs. ${calculateDiscount(10000, 20)}`);


// ======================================================
// 11. FINAL PRICE
// ======================================================

const calculateFinalPrice = (price, discount) => {

    const discountAmount = price * discount / 100;

    return price - discountAmount;
};

console.log(`Final Price: Rs. ${calculateFinalPrice(10000, 20)}`);