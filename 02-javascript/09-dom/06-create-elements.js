/*
Topic: Creating Elements
File: 06-create-elements.js
*/

const itemInput = document.getElementById("item-input");
const addButton = document.getElementById("add-btn");
const itemList = document.getElementById("item-list");

addButton.addEventListener("click", function () {
    const itemName = itemInput.value.trim();

    // Empty input ko reject karna
    if (itemName === "") {
        alert("Please enter an item name.");
        return;
    }

    // Naya li element create karna
    const newItem = document.createElement("li");

    // User ka text insert karna
    newItem.textContent = itemName;

    // Naye element ko list mein add karna
    itemList.appendChild(newItem);

    // Input clear karna
    itemInput.value = "";
});
