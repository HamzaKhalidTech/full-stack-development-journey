// ======================================================
// 06 - DEFAULT PARAMETERS
// ======================================================


// ======================================================
// 1. BASIC DEFAULT PARAMETER
// ======================================================

function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet("Hamza");
greet();


// ======================================================
// 2. MULTIPLE DEFAULT PARAMETERS
// ======================================================

function introduce(name = "Guest", age = 18) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}

introduce("Hamza", 20);
introduce();


// ======================================================
// 3. ONE ARGUMENT
// ======================================================

introduce("Ali");


// ======================================================
// 4. DEFAULT QUANTITY
// ======================================================

function calculateTotal(price, quantity = 1) {
    return price * quantity;
}

console.log(calculateTotal(1000));
console.log(calculateTotal(1000, 3));


// ======================================================
// 5. ECOMMERCE ORDER
// ======================================================

function createOrder(product, quantity = 1) {
    return `${product} - Quantity: ${quantity}`;
}

console.log(createOrder("AirPods"));
console.log(createOrder("Keyboard", 2));


// ======================================================
// 6. DEFAULT DISCOUNT
// ======================================================

function calculateDiscount(price, discount = 10) {
    return price * discount / 100;
}

console.log(calculateDiscount(10000));
console.log(calculateDiscount(10000, 20));


// ======================================================
// 7. DEFAULT TAX
// ======================================================

function calculateTax(price, taxRate = 10) {
    return price * taxRate / 100;
}

console.log(calculateTax(5000));
console.log(calculateTax(5000, 15));


// ======================================================
// 8. ARROW FUNCTION WITH DEFAULT PARAMETER
// ======================================================

const welcomeUser = (name = "Guest") => {
    console.log(`Welcome ${name}`);
};

welcomeUser("Hamza");
welcomeUser();


// ======================================================
// 9. DEFAULT VALUE WITH UNDEFINED
// ======================================================

function test(value = 100) {
    console.log(value);
}

test();
test(undefined);
test(50);
test(null);