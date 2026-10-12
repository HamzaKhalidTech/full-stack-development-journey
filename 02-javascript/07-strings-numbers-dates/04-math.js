
 // 04-math.js

// 1. Math.round() - nearest integer
console.log(Math.round(4.3)); // 4
console.log(Math.round(4.7)); // 5

// 2. Math.floor() - round down
console.log(Math.floor(4.9)); // 4
console.log(Math.floor(4.1)); // 4

// 3. Math.ceil() - round up
console.log(Math.ceil(4.1)); // 5
console.log(Math.ceil(4.9)); // 5

// 4. Math.trunc() - remove decimal part
console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(-4.9)); // -4

// 5. Math.min() - smallest number
console.log(Math.min(10, 5, 20, 3)); // 3

// 6. Math.max() - largest number
console.log(Math.max(10, 5, 20, 3)); // 20

// 7. Math.abs() - absolute value
console.log(Math.abs(-15)); // 15
console.log(Math.abs(15));  // 15

// 8. Math.pow() - power
console.log(Math.pow(2, 3)); // 8

// Modern alternative for powers
console.log(2 ** 3); // 8

// 9. Math.sqrt() - square root
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(81)); // 9

// 10. Math.random() - random decimal from 0 up to, but not including, 1
console.log(Math.random());

// 11. Random integer between 1 and 10, inclusive
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);

// 12. Practical example: discount
const price = 5000;
const discountPercentage = 20;

const discount = price * (discountPercentage / 100);
const finalPrice = price - discount;

console.log(`Discount: Rs. ${discount}`);
console.log(`Final price: Rs. ${finalPrice}`);
