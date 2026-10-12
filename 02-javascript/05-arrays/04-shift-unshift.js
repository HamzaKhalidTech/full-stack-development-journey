
/*
======================================================
04 - SHIFT AND UNSHIFT
======================================================
*/

// 1. Original array
const tasks = ["Learn HTML", "Learn CSS"];

console.log("Original tasks:", tasks);

// 2. unshift() - add at the beginning
const newLength = tasks.unshift("Learn JavaScript");

console.log("After unshift:", tasks);
console.log("New length:", newLength);

// 3. Add multiple items at the beginning
tasks.unshift("Install VS Code", "Create project");

console.log("After adding multiple tasks:", tasks);

// 4. shift() - remove the first item
const removedTask = tasks.shift();

console.log("After shift:", tasks);
console.log("Removed task:", removedTask);

// 5. Practical example: priority tasks
const priorityTasks = ["Complete assignment", "Practice coding"];

priorityTasks.unshift("Submit project");

console.log("Priority tasks:", priorityTasks);

// Remove the first priority task
const completedTask = priorityTasks.shift();

console.log("Completed task:", completedTask);
console.log("Remaining tasks:", priorityTasks);
