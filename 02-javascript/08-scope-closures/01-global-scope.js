/*
Topic: Global Scope
File: 01-global-scope.js
*/

// Global variable
const appName = "Zyvora";
let totalUsers = 100;

// Global variables can be accessed inside functions
function showAppInfo() {
    console.log("App Name:", appName);
    console.log("Total Users:", totalUsers);
}

showAppInfo();

// Global variable can be updated when declared with let
totalUsers = 150;

console.log("Updated Users:", totalUsers);

// const cannot be reassigned
// appName = "New App"; // TypeError
