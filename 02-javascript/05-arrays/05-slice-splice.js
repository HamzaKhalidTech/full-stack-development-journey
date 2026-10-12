
/*
======================================================
05 - SLICE AND SPLICE
======================================================
*/

// 1. slice() - select a portion
const fruits = ["Apple", "Mango", "Banana", "Orange"];

const selectedFruits = fruits.slice(1, 3);

console.log("Selected fruits:", selectedFruits);
console.log("Original fruits:", fruits);

// 2. slice() - copy the array
const copiedFruits = fruits.slice();

console.log("Copied array:", copiedFruits);

// 3. splice() - remove elements
const tasks = ["HTML", "CSS", "JavaScript", "React"];

const removedTasks = tasks.splice(1, 2);

console.log("Removed tasks:", removedTasks);
console.log("Remaining tasks:", tasks);

// 4. splice() - insert an item
const colors = ["Red", "Blue"];

colors.splice(1, 0, "Green");

console.log("After insertion:", colors);

// 5. splice() - replace an item
const products = ["Mouse", "Keyboard", "Monitor"];

products.splice(1, 1, "Mechanical Keyboard");

console.log("Updated products:", products);
