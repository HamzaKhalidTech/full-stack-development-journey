// javascript
// 01-string-methods.js

// 1. String basics
const userName = "Hamza Khalid";

console.log(userName);
console.log(userName.length);

// 2. Uppercase and lowercase
console.log(userName.toUpperCase());
console.log(userName.toLowerCase());

// 3. Remove extra spaces
const email = "   hamza@example.com   ";

console.log(email);
console.log(email.trim());

// 4. Check if text contains something
const message = "Welcome to JavaScript";

console.log(message.includes("JavaScript"));
console.log(message.includes("Python"));

// 5. Extract part of a string
const language = "JavaScript";

console.log(language.slice(0, 4));
console.log(language.slice(4));

// 6. Replace text
const greeting = "Hello Hamza";

console.log(greeting.replace("Hamza", "Ali"));

// 7. Check where text starts and ends
console.log(language.startsWith("Java"));
console.log(language.endsWith("Script"));

// 8. Strings are immutable
const original = "hello";
const upper = original.toUpperCase();

console.log(original);
console.log(upper);
