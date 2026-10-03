// ==========================================
// 03 - OPERATORS
// ==========================================


// ==========================================
// 1. ARITHMETIC OPERATORS
// ==========================================

let a = 10;
let b = 5;

console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Remainder
console.log(a ** b); // Power


// ==========================================
// 2. REMAINDER OPERATOR
// ==========================================

console.log(10 % 3); // 1
console.log(10 % 2); // 0

// 0 means the number is evenly divisible by 2.


// ==========================================
// 3. ASSIGNMENT OPERATOR
// ==========================================

let price = 1000;

console.log(price);


// ==========================================
// 4. COMPOUND ASSIGNMENT
// ==========================================

let score = 100;

score += 20;

console.log(score); // 120


let balance = 1000;

balance -= 200;

console.log(balance); // 800


let amount = 100;

amount *= 2;

console.log(amount); // 200


let totalAmount = 1000;

totalAmount /= 2;

console.log(totalAmount); // 500


// ==========================================
// 5. INCREMENT
// ==========================================

let count = 5;

count++;

console.log(count); // 6


// ==========================================
// 6. DECREMENT
// ==========================================

let items = 5;

items--;

console.log(items); // 4


// ==========================================
// 7. POSTFIX
// ==========================================

let x = 5;

console.log(x++); // 5
console.log(x);   // 6


// ==========================================
// 8. PREFIX
// ==========================================

let y = 5;

console.log(++y); // 6
console.log(y);   // 6


// ==========================================
// 9. COMPARISON OPERATORS
// ==========================================

console.log(5 == 5);
console.log(5 === 5);

console.log(5 != 10);
console.log(5 !== 10);

console.log(10 > 5);
console.log(5 < 10);

console.log(10 >= 10);
console.log(5 <= 10);


// ==========================================
// 10. == VS ===
// ==========================================

console.log(5 == "5");   // true
console.log(5 === "5");  // false


// ==========================================
// 11. LOGICAL AND
// ==========================================

console.log(true && true);   // true
console.log(true && false);  // false

let age = 21;
let hasCNIC = true;

console.log(age >= 18 && hasCNIC);


// ==========================================
// 12. LOGICAL OR
// ==========================================

console.log(true || false);  // true
console.log(false || false); // false

let isAdmin = false;
let isManager = true;

console.log(isAdmin || isManager);


// ==========================================
// 13. LOGICAL NOT
// ==========================================

console.log(!true);  // false
console.log(!false); // true

let isLoggedIn = false;

console.log(!isLoggedIn);


// ==========================================
// 14. TERNARY OPERATOR
// ==========================================

let userAge = 21;

let ageStatus = userAge >= 18 ? "Adult" : "Minor";

console.log(ageStatus);


// ==========================================
// 15. E-COMMERCE TERNARY
// ==========================================

let stock = 5;

let stockStatus = stock > 0
    ? "In Stock"
    : "Out of Stock";

console.log(stockStatus);


// ==========================================
// 16. OPERATOR PRECEDENCE
// ==========================================

let result1 = 10 + 5 * 2;

console.log(result1); // 20


let result2 = (10 + 5) * 2;

console.log(result2); // 30


// ==========================================
// 17. STRING + NUMBER
// ==========================================

console.log("10" + 5); // "105"
console.log("10" - 5); // 5


// ==========================================
// 18. E-COMMERCE CALCULATION
// ==========================================

let productPrice = 2000;
let quantity = 3;

let total = productPrice * quantity;

console.log(total); // 6000


// Apply discount

let discount = 500;

total -= discount;

console.log(total); // 5500


// One product sold

let availableStock = 10;

availableStock--;

console.log(availableStock); // 9


// ==========================================
// 19. FINAL PRACTICAL EXAMPLE
// ==========================================

let productPrice2 = 2500;
let productQuantity = 2;
let productDiscount = 500;

let cartTotal = productPrice2 * productQuantity;

cartTotal -= productDiscount;

console.log(cartTotal);


// Check stock

let productStock = 8;

let availability = productStock > 0
    ? "Product Available"
    : "Product Sold Out";

console.log(availability);