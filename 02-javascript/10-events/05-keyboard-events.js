
/*
Topic: Keyboard Events
File: 05-keyboard-events.js
*/

const keyboardInput = document.getElementById("keyboard-input");
const keyboardOutput = document.getElementById("keyboard-output");

keyboardInput.addEventListener("keydown", function (event) {
    keyboardOutput.textContent =
        "Key pressed: " + event.key;
});

keyboardInput.addEventListener("keyup", function (event) {
    console.log("Key released:", event.key);
});
