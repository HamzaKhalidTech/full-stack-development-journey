/*
Topic: Checkbox and Radio Buttons
File: 03-checkbox-radio.js
*/

const preferencesForm = document.getElementById("preferences-form");
const preferencesOutput = document.getElementById("preferences-output");

preferencesForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedInterests = document.querySelectorAll(
        'input[name="interest"]:checked'
    );

    const interests = [];

    selectedInterests.forEach(function (checkbox) {
        interests.push(checkbox.value);
    });

    const selectedMode = document.querySelector(
        'input[name="learningMode"]:checked'
    );

    preferencesOutput.textContent =
        "Interests: " +
        (interests.length > 0 ? interests.join(", ") : "None selected") +
        " | Learning mode: " +
        selectedMode.value;
});