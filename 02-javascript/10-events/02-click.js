/*
Topic: Click Event
File: 02-click.js
*/

const clickButton = document.getElementById("click-btn");
const clickOutput = document.getElementById("click-output");

let clickCount = 0;

clickButton.addEventListener("click", function () {
  clickCount++;

  clickOutput.textContent = "Button clicked " + clickCount + " time(s).";
});
