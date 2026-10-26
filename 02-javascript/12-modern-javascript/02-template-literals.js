/*
  12-modern-javascript
  File: 02-template-literals.js

  Topics:
  1. String concatenation
  2. Template literals
  3. Expression interpolation
  4. Multiline strings
  5. Object properties
  6. Real-world examples
*/

// ==========================================
// 1. OLD WAY: STRING CONCATENATION
// ==========================================

console.log("===== 1. OLD WAY =====");

const oldName = "Hamza";
const oldAge = 21;

const oldMessage =  "My name is " + oldName + " and I am " + oldAge + " Years old.";

console.log(oldMessage);

// ==========================================
// 2. TEMPLATE LITERALS
// ==========================================

console.log("\n===== 2. TEMPLATE LITERALS =====");

const name = "Hamza";
const age = 21;

const message = `My name is ${name} and I am ${age} years old.`;

console.log(message);

// ==========================================
// 3. EXPRESSIONS INSIDE ${}
// =========================================
console.log("\n===== 3. EXPRESSIONS =====");

const a = 10;
const b = 20;

console.log(`Sum: ${a + b}`);
console.log(`Product: ${a * b}`);
console.log(`Is a greater then 5? ${a > b}`);

// ==========================================
// 4. MULTILINE STRINGS
// ==========================================

console.log("\n===== 4. MULTILINE =====");

const introduction = `Hello!
My name is ${name}.
I am learning JavaScript.
My goal is to become a full-stack developer.`;

console.log(introduction);

// ==========================================
// 5. OBJECT PROPERTIES
// ==========================================

console.log("\n===== 5. OBJECT PROPERTIES =====");

const task = {
  title: "Learn JavaScript",
  status: "In Progress",
  priority: "High"
};

const taskDetails = `
  Task: ${task.title}
  Status: ${task.status}
  Priority: ${task.priority}
`;

console.log(taskDetails);

// ==========================================
// 6. CONDITIONAL EXPRESSION
// ==========================================

console.log("\n===== 6. CONDITIONAL =====");

const score = 75;

const result = `Result: ${score >= 50 ? "Pass" : "Fail"}`;
console.log(result);

// ==========================================
// 7. REAL-WORLD PROFILE MESSAGE
// ==========================================

console.log("\n===== 7. PROFILE =====");

const developer = {
  name: "Hamza",
  skill: "JavaScript",
  level: "Beginner"
};

const profile = `
Developer Profile
-----------------
Name: ${developer.name}
Skill: ${developer.skill}
Level: ${developer.level}
Next Goal: Learn React
`;

console.log(profile);

