/*
Topic: Closures
File: 05-closures.js
*/

function createCounter() {
    let count = 0;

    function increment() {
        count++;
        console.log("Count:", count);
    }

    return increment;
}

const counter = createCounter();

counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3
