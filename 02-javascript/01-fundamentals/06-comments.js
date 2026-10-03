// ======================================================
// 06 - COMMENTS
// ======================================================


// ======================================================
// 1. SINGLE-LINE COMMENT
// ======================================================

// This is a single-line comment.

let name = "Hamza";

console.log(name);


// ======================================================
// 2. COMMENT AFTER CODE
// ======================================================

let age = 22; // User age

console.log(age);


// ======================================================
// 3. MULTI-LINE COMMENT
// ======================================================

/*
This is a multi-line comment.

It can contain multiple lines
and JavaScript will ignore it.
*/


// ======================================================
// 4. USING COMMENTS TO EXPLAIN WHY
// ======================================================

let price = 5000;
let discount = 20; // Discount percentage for the customer

let discountAmount = price * discount / 100;
let finalPrice = price - discountAmount;

console.log(`Final Price: ${finalPrice}`);


// ======================================================
// 5. TEMPORARILY DISABLE CODE
// ======================================================

// console.log("This message is disabled.");

console.log("This message is active.");


// ======================================================
// 6. COMMENTS IN FUNCTIONS / LOGIC
// ======================================================

// Calculate total product price
let productPrice = 3000;
let quantity = 2;

let total = productPrice * quantity;

console.log(`Total: ${total}`);


// ======================================================
// 7. GOOD COMMENT
// ======================================================

// Apply discount before calculating the final price.
let salePrice = 4000;
let saleDiscount = 10;

let discountValue = salePrice * saleDiscount / 100;
let finalSalePrice = salePrice - discountValue;

console.log(`Sale Price: ${finalSalePrice}`);


// ======================================================
// 8. MULTI-LINE PROJECT NOTE
// ======================================================

/*
Project:
E-commerce Store

Purpose:
Calculate the final price after discount.

Topics used:
- Variables
- Numbers
- Operators
- Comments
*/