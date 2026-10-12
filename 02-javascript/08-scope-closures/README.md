# JavaScript Scope & Closures

This section explores how JavaScript determines variable accessibility and how functions retain access to their lexical environment.

## 📚 Topics Covered

| File | Topic | Key Concepts |
|---|---|---|
| `01-global-scope.js` | Global Scope | Variables declared at the top level |
| `02-function-scope.js` | Function Scope | Variables accessible within a function |
| `03-block-scope.js` | Block Scope | `let`, `const`, and `var` behavior |
| `04-lexical-scope.js` | Lexical Scope | Access to variables from outer scopes |
| `05-closures.js` | Closures | Functions retaining access to their lexical environment |

## 🎯 Learning Objectives

After completing this section, I should be able to:

- Explain the difference between global, function, and block scope.
- Understand how `let`, `const`, and `var` differ in scope behavior.
- Explain lexical scope using nested functions.
- Understand how closures preserve access to surrounding variables.
- Apply closures to counters, private state, and practical JavaScript problems.

## 🧠 Key Concepts

### Global Scope

A top-level variable may be accessible throughout the relevant program environment, subject to JavaScript's module and execution rules.

### Function Scope

Variables declared with `let` or `const` inside a function are accessible within that function and its nested scopes.

### Block Scope

Variables declared with `let` and `const` inside a block are limited to that block and nested scopes.

### Lexical Scope

A function can access variables from the scope in which it was defined, including accessible outer scopes.

### Closures

A closure allows a function to retain access to variables from its surrounding lexical environment, even after the outer function has returned.

## 🛠️ Practice Exercises

1. Create a global variable for an application name and access it inside a function.
2. Write a function that calculates an order total using local variables.
3. Compare `var`, `let`, and `const` inside an `if` block.
4. Create nested functions that access variables from multiple scopes.
5. Build a counter using a closure.
6. Extend the counter with a reset function.

## ▶️ How to Run

Run each JavaScript file with Node.js:

```bash
node 01-global-scope.js
node 02-function-scope.js
node 03-block-scope.js
node 04-lexical-scope.js
node 05-closures.js
```

## ✅ Completion Checklist

- [ ] Understand global scope.
- [ ] Understand function scope.
- [ ] Understand block scope.
- [ ] Understand lexical scope.
- [ ] Explain closures in my own words.
- [ ] Complete the practice exercises.

## 🔗 Next Steps

After this section, continue practicing arrays, objects, functions, and asynchronous JavaScript. Revisit closures when learning callbacks, event handlers, and React hooks.

---

**Learning principle:** Understand where a variable is accessible, why it remains accessible, and when its value can be changed.
