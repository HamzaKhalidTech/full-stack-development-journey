
/*
======================================================
09 - FIND METHOD
======================================================
*/

// 1. Find the first number greater than 10
const numbers = [5, 8, 12, 20, 30];

const foundNumber = numbers.find((number) => {
  return number > 10;
});

console.log("Found number:", foundNumber);

// 2. Find a specific name
const names = ["Ali", "Hamza", "Ahmed"];

const foundName = names.find((name) => {
  return name === "Hamza";
});

console.log("Found name:", foundName);

// 3. Find a product by name
const products = [
  { id: 1, name: "Mouse", price: 1500 },
  { id: 2, name: "Keyboard", price: 2500 },
  { id: 3, name: "Monitor", price: 30000 }
];

const product = products.find((item) => {
  return item.name === "Keyboard";
});

console.log("Found product:", product);

// 4. Search for a product that does not exist
const missingProduct = products.find((item) => {
  return item.name === "Laptop";
});

console.log("Missing product:", missingProduct);

// 5. Find the first affordable product
const affordableProduct = products.find((item) => {
  return item.price < 2000;
});

console.log("Affordable product:", affordableProduct);
