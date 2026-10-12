
/*
======================================================
12 - SORT
======================================================
*/

// 1. Default sorting
const defaultNumbers = [40, 5, 100, 25, 10];

defaultNumbers.sort();

console.log("Default sort:", defaultNumbers);

// 2. Numbers in ascending order
const ascendingNumbers = [40, 5, 100, 25, 10];

ascendingNumbers.sort((a, b) => a - b);

console.log("Ascending:", ascendingNumbers);
// [5, 10, 25, 40, 100]

// 3. Numbers in descending order
const descendingNumbers = [40, 5, 100, 25, 10];

descendingNumbers.sort((a, b) => b - a);

console.log("Descending:", descendingNumbers);
// [100, 40, 25, 10, 5]

// 4. Strings in alphabetical order
const names = ["Hamza", "Ali", "Zain", "Ahmed"];

names.sort();

console.log("Sorted names:", names);
// ["Ahmed", "Ali", "Hamza", "Zain"]

// 5. Original array gets modified
const fruits = ["Mango", "Apple", "Banana"];

fruits.sort();

console.log("Modified original array:", fruits);
// ["Apple", "Banana", "Mango"]
