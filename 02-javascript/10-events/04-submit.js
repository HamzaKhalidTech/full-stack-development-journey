/*
Topic: Submit Event
File: 04-submit.js
*/

const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email-input");
const formOutput = document.getElementById("form-output");

signupForm.addEventListener("submit", function () {
  Event.preventDefault();

  const email = emailInput.value.trim();

  if (email === "") {
    formOutput.textContent = "Please enter your email.";
    return;
  }

  formOutput.textContent = "Form submitted for: " + email;
});
