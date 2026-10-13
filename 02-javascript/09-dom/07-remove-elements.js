
/*
Topic: Removing Elements
File: 07-remove-elements.js
*/

const removeText = document.getElementById("remove-text");
const removeButton = document.getElementById("remove-btn");

removeButton.addEventListener("click", function () {
    if (removeText) {
        removeText.remove();

        console.log("Paragraph removed successfully.");
    } else {
        console.log("Paragraph has already been removed.");
    }
});