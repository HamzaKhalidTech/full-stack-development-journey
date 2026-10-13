/*
Topic: DOM Basics
File: 01-dom-basics.js
*/

// Browser ke document ko access karna
console.log(document);

// Page ka title
console.log(document.title);


// Main heading select karna
const mainTitle = document.getElementById("main-title");


console.log(mainTitle);
console.log(mainTitle.textContent);

// Page par kitne paragraphs hain?
console.log("Total paragraphs:", document.querySelectorAll("p").length);
