
/*
======================================================
06 - MAP METHOD
======================================================
*/

// 1. Original array
const numbers = [1, 2, 3, 4, 5];

console.log("Original numbers:", numbers);

// 2. Double every number
const doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log("Doubled numbers:", doubledNumbers);

// 3. Convert prices into discounted prices
const prices = [1000, 2000, 3000];

const discountedPrices = prices.map((price) => {
  return price * 0.9;
});

console.log("Original prices:", prices);
console.log("Discounted prices:", discountedPrices);

// 4. Convert names to uppercase
const names = ["hamza", "ali", "ahmed"];

const uppercaseNames = names.map((name) => {
  return name.toUpperCase();
});

console.log("Uppercase names:", uppercaseNames);

// 5. Practical ecommerce example
const products = [
  { name: "Keyboard", price: 2500 },
  { name: "Mouse", price: 1500 },
  { name: "Monitor", price: 30000 }
];

const productNames = products.map((product) => {
  return product.name;
});

console.log("Product names:", productNames);
