
/*
======================================================
13 - ARRAY DESTRUCTURING
======================================================
*/

// 1. Basic destructuring
const colors = ["Red", "Green", "Blue"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// 2. Destructuring numbers
const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);

// 3. Skip an element
const values = [100, 200, 300];

const [start, , end] = values;

console.log("Start:", start);
console.log("End:", end);

// 4. Default values
const user = ["Hamza"];

const [name, city = "Lahore"] = user;

console.log("Name:", name);
console.log("City:", city);

// 5. Swapping variables
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("a:", a); // 10
console.log("b:", b); // 5
