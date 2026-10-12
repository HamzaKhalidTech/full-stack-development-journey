
/*
======================================================
08 - REDUCE METHOD
======================================================
*/

// 1. Calculate the total
const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log("Total:", total);

// 2. Calculate the sum of prices
const prices = [1000, 2500, 1500];

const totalPrice = prices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log("Total price: Rs.", totalPrice);

// 3. Calculate the product of numbers
const values = [2, 3, 4];

const product = values.reduce((result, value) => {
  return result * value;
}, 1);

console.log("Product:", product);

// 4. Count the total quantity in a cart
const cart = [
  { name: "Mouse", quantity: 2 },
  { name: "Keyboard", quantity: 1 },
  { name: "USB Cable", quantity: 3 }
];

const totalQuantity = cart.reduce((sum, item) => {
  return sum + item.quantity;
}, 0);

console.log("Total items:", totalQuantity);

// 5. Count occurrences of numbers
const scores = [10, 20, 10, 30, 10];

const countOfTen = scores.reduce((count, score) => {
  if (score === 10) {
    return count + 1;
  }

  return count;
}, 0);

console.log("Number of tens:", countOfTen);
