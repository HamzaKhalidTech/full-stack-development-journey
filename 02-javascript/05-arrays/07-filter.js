
/*
======================================================
07 - FILTER METHOD
======================================================
*/

// 1. Original array
const numbers = [1, 2, 3, 4, 5, 6];

console.log("Original numbers:", numbers);

// 2. Filter even numbers
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log("Even numbers:", evenNumbers);

// 3. Filter numbers greater than 10
const scores = [5, 15, 8, 20, 12];

const highScores = scores.filter((score) => {
  return score > 10;
});

console.log("High scores:", highScores);

// 4. Filter names starting with A
const names = ["Ali", "Hamza", "Ahmed", "Usman"];

const aNames = names.filter((name) => {
  return name.startsWith("A");
});

console.log("Names starting with A:", aNames);

// 5. Ecommerce example
const products = [
  { name: "Mouse", price: 1500 },
  { name: "Keyboard", price: 3500 },
  { name: "USB Cable", price: 500 },
  { name: "Monitor", price: 30000 }
];

const affordableProducts = products.filter((product) => {
  return product.price < 2000;
});

console.log("Affordable products:", affordableProducts);
