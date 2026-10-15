/*
Topic: Event Object
File: 07-event-object.js
*/

const objectButton = document.getElementById("object-btn");
const objectOutput = document.getElementById("object-output");

objectButton.addEventListener("click", function (event) {
  console.log(event);

  objectOutput.textContent = 
  "Event Type: " + event.type + " | Target: " + event.target.id;
  
 })