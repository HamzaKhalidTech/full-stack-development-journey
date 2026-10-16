/*
Topic: Select and Options
File: 04-select-options.js
*/

const courseForm = document.getElementById("course-form");
const courseSelect = document.getElementById("course-select");
const courseOutput = document.getElementById("course-output");

courseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const selectedValue = courseSelect.value;

    const selectedText =
        courseSelect.options[courseSelect.selectedIndex].text;

    courseOutput.textContent =
        "Selected course: " + selectedText +
        " | Course value: " + selectedValue;

    console.log("Selected value:", selectedValue);
    console.log("Selected text:", selectedText);
});