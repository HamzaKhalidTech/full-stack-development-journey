
/*
======================================================
10 - SOME AND EVERY
======================================================
*/

// 1. some() - at least one number is greater than 10
const numbers = [2, 5, 8, 12];

const hasLargeNumber = numbers.some((number) => {
  return number > 10;
});

console.log("Has number greater than 10:", hasLargeNumber);
// true

// 2. some() - no number matches
const smallNumbers = [1, 2, 3];

const hasLargeValue = smallNumbers.some((number) => {
  return number > 10;
});

console.log("Has number greater than 10:", hasLargeValue);
// false

// 3. every() - all numbers are positive
const values = [10, 20, 30];

const allPositive = values.every((value) => {
  return value > 0;
});

console.log("All positive:", allPositive);
// true

// 4. every() - not all numbers are positive
const mixedNumbers = [10, -5, 20];

const allPositiveValues = mixedNumbers.every((value) => {
  return value > 0;
});

console.log("All positive:", allPositiveValues);
// false

// 5. Ecommerce example: product stock
const products = [
  { name: "Mouse", inStock: true },
  { name: "Keyboard", inStock: false },
  { name: "Monitor", inStock: true }
];

const anyProductAvailable = products.some((product) => {
  return product.inStock === true;
});

const allProductsAvailable = products.every((product) => {
  return product.inStock === true;
});

console.log("Any product available:", anyProductAvailable);
// true

console.log("All products available:", allProductsAvailable);
// false
