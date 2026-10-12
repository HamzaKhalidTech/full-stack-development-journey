/*
======================================================
01 - ARRAY BASICS
======================================================
*/

// 1. Create an array

const products = ["AirPods", "Keyboard", "Mouse"];

console.log(products);

// 2. Access array elements

console.log(products[0]);
console.log(products[1]);
console.log(products[2]);

// 3. Array length

console.log("Total products:", products.length);

// 4. Last element

console.log("Last product:", products[products.length - 1]);

// 5. Array of numbers

const prices = [1000, 2500, 1500];

console.log(prices);
console.log("First price:", prices[0]);

// 6. Array of strings

const skills = ["HTML", "CSS", "JavaScript", "React"];

console.log(skills);

// 7. Mixed data types

const user = ["Hamza", 20, true];

console.log(user);

// 8. Update an array element

products[1] = "Mechanical Keyboard";

console.log(products);

// 9. Empty array

const cart = [];

console.log(cart);
console.log("Cart length:", cart.length);

// 10. Ecommerce example

const cartPrices = [2000, 1500, 3000];

const total = cartPrices[0] + cartPrices[1] + cartPrices[2];

console.log("Cart total: Rs.", total);
