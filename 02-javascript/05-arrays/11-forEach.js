
/*
======================================================
11 - FOREACH
======================================================
*/

// 1. Print every fruit
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit) => {
  console.log(fruit);
});

// 2. Print elements with their indexes
const names = ["Ali", "Hamza", "Ahmed"];

names.forEach((name, index) => {
  console.log(index, name);
});

// 3. Calculate total cart price
const prices = [500, 1000, 1500];

let total = 0;

prices.forEach((price) => {
  total = total + price;
});

console.log("Total cart price:", total);
// 3000

// 4. Display product information
const products = [
  { name: "Mouse", price: 1500 },
  { name: "Keyboard", price: 3000 },
  { name: "Monitor", price: 25000 }
];

products.forEach((product) => {
  console.log(product.name, "-", product.price);
});

// 5. Remember: forEach returns undefined
const numbers = [10, 20, 30];

const result = numbers.forEach((number) => {
  console.log(number);
});

console.log("Return value:", result);
// undefined
