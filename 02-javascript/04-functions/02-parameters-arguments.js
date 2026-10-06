// ======================================================
// 02 - PARAMETERS & ARGUMENTS
// ======================================================


// ======================================================
// 1. ONE PARAMETER
// ======================================================

function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Hamza");
greet("Ali");
greet("Ahmed");


// ======================================================
// 2. MULTIPLE PARAMETERS
// ======================================================

function introduce(name, age) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}

introduce("Hamza", 20);


// ======================================================
// 3. THREE PARAMETERS
// ======================================================

function showProduct(name, price, category) {
    console.log(`Product: ${name}`);
    console.log(`Price: ${price}`);
    console.log(`Category: ${category}`);
}

showProduct("AirPods", 5000, "Electronics");


// ======================================================
// 4. DIFFERENT PRODUCTS
// ======================================================

function displayProduct(name, price) {
    console.log(`${name} - Rs. ${price}`);
}

displayProduct("AirPods", 5000);
displayProduct("Keyboard", 3000);
displayProduct("Mouse", 1500);


// ======================================================
// 5. PARAMETERS ORDER
// ======================================================

function userInfo(name, age) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}

userInfo("Hamza", 20);


// ======================================================
// 6. ADDITION
// ======================================================

function add(a, b) {
    console.log(a + b);
}

add(10, 20);
add(50, 30);
add(100, 200);


// ======================================================
// 7. MULTIPLICATION
// ======================================================

function multiply(a, b) {
    console.log(a * b);
}

multiply(5, 10);
multiply(7, 8);


// ======================================================
// 8. ECOMMERCE TOTAL
// ======================================================

function calculateTotal(price, quantity) {
    console.log(`Total: Rs. ${price * quantity}`);
}

calculateTotal(1000, 3);
calculateTotal(2500, 2);


// ======================================================
// 9. DISCOUNT
// ======================================================

function calculateDiscount(price, discount) {

    let discountAmount = price * discount / 100;

    console.log(`Discount: Rs. ${discountAmount}`);
}

calculateDiscount(10000, 20);