/*
Topic: HTML Attributes
File: 05-attributes.js
*/

const websiteLink = document.getElementById("website-link");
const attributeButton = document.getElementById("attribute-btn");
const dataButton = document.getElementById("data-btn");

// Attribute read karna
console.log("Current href:", websiteLink.getAttribute("href"));

// Attribute update karna
attributeButton.addEventListener("click", function () {
    websiteLink.setAttribute("href", "https://www.wikipedia.org");
    websiteLink.textContent = "Visit Wikipedia";

    console.log("Updated href:", websiteLink.getAttribute("href"));
});

// data-* attribute read karna
dataButton.addEventListener("click", function () {
    console.log("Current status:", dataButton.dataset.status);

    dataButton.dataset.status = "active";

    console.log("Updated status:", dataButton.dataset.status);
});