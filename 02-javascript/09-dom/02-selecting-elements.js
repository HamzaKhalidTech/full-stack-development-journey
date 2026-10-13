/*
Topic: Selecting Elements
File: 02-selecting-elements.js
*/

// ID se element select karna
const title = document.getElementById("main-title");
console.log(title);

// CSS selector se pehla matching element
const firstDescription = document.querySelector(".description");

console.log(firstDescription);

// Saare matching elements
const descriptions = document.querySelectorAll(".description");

descriptions.forEach(function (description) {
    console.log(description.textContent);
});

// Button click par selected elements ki information
const selectButton = document.getElementById("select-btn");

selectButton.addEventListener("click", function () {
    console.log("Main title:", title.textContent);
    console.log("Descriptions found:", descriptions.length);
});
