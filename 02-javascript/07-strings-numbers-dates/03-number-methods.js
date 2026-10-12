
 // 03-number-methods.js

// 1. Convert string to number
const price = "2500";

console.log(price);
console.log(typeof price);

const convertedPrice = Number(price);

console.log(convertedPrice);
console.log(typeof convertedPrice);

// 2. Convert to integer
const quantity = parseInt("25");

console.log(quantity);

// 3. Convert to decimal number
const rating = parseFloat("4.8");

console.log(rating);

// 4. toFixed() - decimal places
const amount = 125.6789;

console.log(amount.toFixed(2));
console.log(amount.toFixed(1));

// 5. Number.isNaN()
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(100));

// 6. Check finite numbers
console.log(Number.isFinite(100));
console.log(Number.isFinite(Infinity));

// 7. Practical example: product total
const productPrice = Number("1500");
const productQuantity = Number("3");

const total = productPrice * productQuantity;

console.log(`Total price: Rs. ${total}`);

// 8. Practical example: percentage
const marks = 85;
const totalMarks = 100;

const percentage = (marks / totalMarks) * 100;

console.log(`Percentage: ${percentage.toFixed(2)}%`);
