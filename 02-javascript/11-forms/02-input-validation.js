/*
Topic: Input Validation
File: 02-input-validation.js
*/

const validationForm = document.getElementById("validation-form");
const validationName = document.getElementById("validation-name");
const validationPassword = document.getElementById("validation-password");
const validationAge = document.getElementById("validation-age");
const validationOutput = document.getElementById("validation-output");

validationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = validationName.value.trim();
  const password = validationPassword.value;
  const age = Number(validationAge.value);

  if (name.length < 3) {
    validationOutput.textContent = "Name must contain at least 3 characters.";
    validationOutput.className = "error";
    return;
  }

  if (password.length < 8) {
    validationOutput.textContent =
      "Password must contain at least 8 characters.";
    validationOutput.className = "error";
    return;
  }

  if (age < 18 || age > 100 || validationAge.value === "") {
    validationOutput.textContent = "Age must be between 18 and 100.";
    validationOutput.className = "error";
    return;
  }

  validationOutput.textContent = "All validation checks passed!";
  validationOutput.className = "success";
});
