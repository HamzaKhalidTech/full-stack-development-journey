/*
Topic: Changing Styles
File: 04-changing-styles.js
*/

const styleCard = document.getElementById("style-card");
const styleText = document.getElementById("style-text");
const styleButton = document.getElementById("style-btn");

styleButton.addEventListener("click", function () {
    styleCard.classList.toggle("highlight");

    if (styleCard.classList.contains("highlight")) {
        styleText.textContent = "Highlight is enabled.";
    } else {
        styleText.textContent = "Highlight is disabled.";
    }
});
