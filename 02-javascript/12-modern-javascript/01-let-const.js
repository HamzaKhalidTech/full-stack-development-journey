/*
  12-modern-javascript
  File: 01-let-const.js

  Topics:
  1. let
  2. const
  3. Declaration and reassignment
  4. var
  5. Block scope
  6. const with objects and arrays
*/

// ==========================================
// 1. LET: REASSIGNMENT
// ==========================================

console.log("==== 1. LET ====");

let age = 20;

console.log("Initial age:", age);

age = 21;

console.log("Updated age:", age);

// ==========================================
// 2. CONST: FIXED BINDING
// ==========================================

console.log("\n===== 2. CONST =====");

const country = "Pakistan";
// Try this separately to understand the error:
// country = "Canada";

// ==========================================
// 3. DECLARATION AND INITIALIZATION
// ==========================================

console.log("\n===== 3. DECLARATION =====");

let score;

score = 50;

console.log("Score:", score);

score = 90;

console.log("Updated score:", score);

// ==========================================
// 4. BLOCK SCOPE: LET AND CONST
// ==========================================

console.log("\n===== 4. BLOCK SCOPE =====");

if(true) {
  let city = "Lahore";
  const province = "Punjab";

  console.log("City:", city);
  console.log("Province:", province);
}

// Try outside the block:
// console.log(city);

// ==========================================
// 5. VAR: BLOCK SCOPE DIFFERENCE
// ==========================================

console.log("\n===== 5. VAR =====");

if (true) {
  var language = "JavaScript";
}

console.log("Language:", language);

// ==========================================
// 6. CONST WITH OBJECTS
// ==========================================

console.log("\n===== 6. CONST OBJECT =====");

const student = {
  name : "Hamza",
  age : 21
};

student.age = 22;

console.log("Student:", student);
console.log("Student age:", student.age);

// Try this separately:
// student = { name: "Ali", age: 20 };

// ==========================================
// 7. CONST WITH ARRAYS
// ==========================================

console.log("\n===== 7. CONST ARRAY =====");

const tasks = ["Learn HTML", "Learn CSS"];

tasks.push("Learn JavaScript");

console.log("Tasks", tasks);

// ==========================================
//       8. REAL-WORLD EXAMPLE: 
// ==========================================

console.log("\n===== 8. EXAMPLE =====");

const task = {
  title : "Learn Modern JavaScript",
  completed: false
};

let completedTasks = 0;

console.log("Task title:", task.title);
console.log("Completed", task.completed);

task.completed = true;
completedTasks = completedTasks + 1;

console.log("Updated completed:", task.completed);
console.log("Completed tasks:", completedTasks);