/*
Topic: Changing Content
File: 03-changing-content.js
*/

const contentTitle = document.getElementById("content-title");
const contentText = document.getElementById("content-text");
const contentButton = document.getElementById("content-btn");

contentButton.addEventListener("click", function () {
    contentTitle.textContent = "DOM Updated Successfully";

    contentText.textContent =
        "JavaScript has changed this paragraph.";

    console.log("Content updated!");
});
