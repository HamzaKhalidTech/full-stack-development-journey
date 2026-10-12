/*
Topic: Block Scope
File: 03-block-scope.js
*/

if (true) {
    let userName = "Hamza";
    const role = "Developer";

    console.log(userName);
    console.log(role);
}

// Outside the block, these variables are unavailable
// console.log(userName); // ReferenceError
// console.log(role);     // ReferenceError

// var is not block-scoped
if (true) {
    var message = "Hello from var";
}

console.log(message);
