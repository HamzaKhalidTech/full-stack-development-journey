// 02-template-literals.js

// 1. Variables
const name = "Hamza";
const age = 22;
const skill = "JavaScript";

// 2. Basic template literal
const message = `My name is ${name}.`;

console.log(message);

// 3. Multiple variables
console.log(`I am ${age} years old and learning ${skill}.`);

// 4. Expressions inside template literals
const a = 10;
const b = 20;

console.log(`Total: ${a + b}`);
console.log(`Double of a: ${a * 2}`);

// 5. Multiline string
const profile = `
Name: ${name}
Age: ${age}
Skill: ${skill}
`;

console.log(profile);

// 6. Practical website example
const productName = "Wireless Mouse";
const price = 2500;
const quantity = 2;

const orderMessage = `
Product: ${productName}
Price per item: Rs. ${price}
Quantity: ${quantity}
Total: Rs. ${price * quantity}
`;

console.log(orderMessage);
