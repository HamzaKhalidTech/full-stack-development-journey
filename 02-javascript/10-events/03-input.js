/*
Topic: Input Event
File: 03-input.js
*/

const nameInput = document.getElementById("name-input");
const inputOutput = document.getElementById("input-output");

nameInput.addEventListener("input", function () {
  const enteredName = nameInput.value;

  if (enteredName.trim() === "") {
    inputOutput.textContent = "Your text will appear here.";
  } else {
    inputOutput.textContent = "Hello, " + enteredName + "!";
  }
});
