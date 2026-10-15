
/*
Topic: Event Basics
File: 01-event-basics.js
*/

const basicButton = document.getElementById("basics-btn");

basicButton.addEventListener("click", function () {
    console.log("Button was clicked!");
    alert("Event successfully triggered!");
})
