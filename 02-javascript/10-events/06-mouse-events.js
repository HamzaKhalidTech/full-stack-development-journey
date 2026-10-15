/*
Topic: Mouse Events
File: 06-mouse-events.js
*/

const mouseArea = document.getElementById("mouse-area");
const mouseOutput = document.getElementById("mouse-output");

mouseArea.addEventListener("mouseenter", function () {
  mouseOutput.textContent = "Mouse entered the area.";
});

mouseArea.addEventListener("mouseleave", function () {
  mouseOutput.textContent = "Mouse left the area.";
});

mouseArea.addEventListener("mousemove", function (event) {
  console.log("Mouse position:", event.offsetX, event.offsetY);
});

mouseArea.addEventListener("click", function () {
  mouseOutput.textContent = "Mouse area clicked!";
});
