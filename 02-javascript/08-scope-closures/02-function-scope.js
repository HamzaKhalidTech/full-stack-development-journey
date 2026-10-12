/*
Topic: Function Scope
File: 02-function-scope.js
*/

function calculatePrice() {
    const price = 2000;
    const quantity = 3;

    const total = price * quantity;

    console.log("Total Price:", total);
}

calculatePrice();

// These variables are not accessible here
// console.log(price);    // ReferenceError
// console.log(quantity); // ReferenceError
// console.log(total);    // ReferenceError
