
/*
======================================================
02 - ARRAY METHODS
======================================================
*/

// 1. Original array

const numbers = [10, 20, 30];

console.log("Original:", numbers);


// 2. push() - add at the end

numbers.push(40);

console.log("After push:", numbers);


// 3. pop() - remove from the end

numbers.pop();

console.log("After pop:", numbers);


// 4. includes() - check a value

console.log(numbers.includes(20)); // true
console.log(numbers.includes(50)); // false


// 5. indexOf() - find the index

console.log(numbers.indexOf(30)); // 2
console.log(numbers.indexOf(50)); // -1


// 6. join() - convert array into a string

const skills = ["HTML", "CSS", "JavaScript"];

console.log(skills.join(", "));
// HTML, CSS, JavaScript


// 7. reverse() - reverse the array

const letters = ["A", "B", "C"];

letters.reverse();

console.log(letters);
// ["C", "B", "A"]


// 8. Ecommerce example

const cart = ["AirPods", "Keyboard"];

cart.push("Mouse");

console.log("Cart:", cart);

console.log("Mouse in cart:", cart.includes("Mouse"));
