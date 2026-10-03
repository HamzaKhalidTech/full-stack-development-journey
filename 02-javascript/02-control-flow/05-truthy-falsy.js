// ======================================================
// 05 - TRUTHY & FALSY
// ======================================================


// ======================================================
// 1. FALSY VALUES
// ======================================================

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


// ======================================================
// 2. TRUTHY VALUES
// ======================================================

console.log(Boolean(true));
console.log(Boolean(1));
console.log(Boolean(-1));
console.log(Boolean("Hello"));
console.log(Boolean("0"));
console.log(Boolean("false"));
console.log(Boolean([]));
console.log(Boolean({}));


// ======================================================
// 3. EMPTY STRING
// ======================================================

let name = "";

if (name) {
    console.log("Name exists.");
} else {
    console.log("Name is empty.");
}


// ======================================================
// 4. NULL
// ======================================================

let user = null;

if (user) {
    console.log("User exists.");
} else {
    console.log("No user found.");
}


// ======================================================
// 5. UNDEFINED
// ======================================================

let username;

if (username) {
    console.log("Username exists.");
} else {
    console.log("Username is missing.");
}


// ======================================================
// 6. ZERO
// ======================================================

let cartItems = 0;

if (cartItems) {
    console.log("Cart has products.");
} else {
    console.log("Your cart is empty.");
}


// ======================================================
// 7. NaN
// ======================================================

let result = Number("Hello");

if (result) {
    console.log("Result is truthy.");
} else {
    console.log("Result is falsy.");
}


// ======================================================
// 8. FORM VALIDATION
// ======================================================

let email = "";

if (!email) {
    console.log("Email is required.");
}


// ======================================================
// 9. DEFAULT VALUE USING ||
// ======================================================

let customerName = "";

let displayName = customerName || "Guest";

console.log(`Welcome, ${displayName}`);


// ======================================================
// 10. ARRAY IS TRUTHY
// ======================================================

let products = [];

if (products) {
    console.log("Products variable exists.");
}


// ======================================================
// 11. OBJECT IS TRUTHY
// ======================================================

let product = {};

if (product) {
    console.log("Product object exists.");
}


// ======================================================
// 12. REAL-WORLD ECOMMERCE EXAMPLE
// ======================================================

let coupon = "";

if (coupon) {
    console.log(`Coupon applied: ${coupon}`);
} else {
    console.log("No coupon applied.");
}