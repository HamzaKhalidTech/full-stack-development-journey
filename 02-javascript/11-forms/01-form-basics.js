/*
Topic: Form Basics
File: 01-form-basics.js
*/

const basicForm = document.getElementById("basic-form");
const basicName = document.getElementById("basic-name");
const basicEmail = document.getElementById("basic-email");
const basicOutput = document.getElementById("basic-output");

basicForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = basicName.value.trim();
    const email = basicEmail.value.trim();

    basicOutput.textContent =
        "Welcome, " + name + "! Your email is " + email + ".";

    console.log({
        name: name,
        email: email
    });
});