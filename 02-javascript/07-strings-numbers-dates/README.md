# JavaScript Strings, Numbers, Math & Dates

This section covers essential JavaScript methods and built-in objects for working with text, numeric values, mathematical operations, and dates.

## 📚 Topics Covered

| File | Topic | Key Concepts |
|---|---|---|
| `01-string-methods.js` | String Methods | `length`, `trim()`, `includes()`, `slice()`, `replace()`, `startsWith()`, `endsWith()` |
| `02-template-literals.js` | Template Literals | Backticks, `${}`, expressions, multiline strings |
| `03-number-methods.js` | Number Methods | `Number()`, `parseInt()`, `parseFloat()`, `toFixed()`, `Number.isNaN()`, `Number.isFinite()` |
| `04-math.js` | Math Object | `Math.round()`, `Math.floor()`, `Math.ceil()`, `Math.random()`, `Math.min()`, `Math.max()` |
| `05-date-basics.js` | Date Basics | `new Date()`, `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`, `getTime()` |

## 1. String Methods

String methods help us inspect, search, extract, and modify text.

```js
const username = "  Hamza Khalid  ";

console.log(username.length);
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.includes("Hamza"));
console.log(username.trim().slice(0, 5));
```

**Important concepts:**
- `length` returns the number of characters.
- `trim()` removes whitespace from both ends.
- `includes()` checks whether a string contains specific text.
- `slice(start, end)` extracts part of a string; the end index is excluded.
- Strings are immutable, so string methods do not directly change the original string.

## 2. Template Literals

Template literals make it easier to combine text and variables using backticks.

```js
const name = "Hamza";
const course = "Computer Science";

const message = `My name is ${name} and I study ${course}.`;

console.log(message);
```

**Important concepts:**
- Use backticks (`` ` ``), not ordinary quotation marks.
- Insert variables and expressions using `${}`.
- Template literals support multiline strings.
- They are useful for messages, reports, receipts, and dynamic website content.

## 3. Number Methods

Number methods help convert values, parse numeric text, and format results.

```js
console.log(Number("25"));
console.log(parseInt("25px"));
console.log(parseFloat("12.75"));
console.log((99.456).toFixed(2));
console.log(Number.isNaN(Number("hello")));
```

**Important concepts:**
- `Number()` converts a value to a number when possible.
- `parseInt()` parses an integer from the beginning of a string.
- `parseFloat()` parses a decimal number from the beginning of a string.
- `toFixed(2)` formats a number to two decimal places and returns a string.
- `Number.isNaN()` checks whether a value is the numeric `NaN`.
- `Number.isFinite()` checks whether a number is finite.

Always validate user input before performing calculations. An empty input and an invalid numeric input may need to be handled separately.

## 4. Math Object

The `Math` object provides built-in mathematical operations.

```js
console.log(Math.round(4.6));  // 5
console.log(Math.floor(4.9));  // 4
console.log(Math.ceil(4.1));   // 5
console.log(Math.abs(-10));    // 10
console.log(Math.max(10, 20, 5)); // 20
console.log(Math.sqrt(25));    // 5
```

Generate a random integer from 1 to 10:

```js
const randomNumber = Math.floor(Math.random() * 10) + 1;

console.log(randomNumber);
```

**Important concepts:**
- `Math.round()` rounds to the nearest integer.
- `Math.floor()` rounds down toward negative infinity.
- `Math.ceil()` rounds up toward positive infinity.
- `Math.trunc()` removes the fractional part.
- `Math.random()` returns a number greater than or equal to `0` and less than `1`.
- `Math.min()` and `Math.max()` find the smallest and largest values.

## 5. Date Basics

The `Date` object is used to work with dates and times.

```js
const today = new Date();

console.log(today);
console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());
console.log(today.getTime());
```

**Important concepts:**
- `new Date()` creates a date object for the current date and time.
- `getFullYear()` returns the year.
- `getMonth()` returns a zero-based month index: January is `0` and December is `11`.
- `getDate()` returns the day of the month, from `1` to `31`.
- `getDay()` returns the day of the week, from Sunday `0` to Saturday `6`.
- `getTime()` returns milliseconds since January 1, 1970 UTC.

For a date created with numeric arguments, the month is zero-based:

```js
const eventDate = new Date(2026, 11, 25);

console.log(eventDate);
```

Here, `11` represents December.

**Date and timezone note:** Date-only ISO strings such as `"2026-12-25"` are interpreted as UTC. Local display can therefore differ by timezone. Numeric date constructors use local time.

## 🛠️ Practice Projects

Complete these exercises to reinforce the concepts:

- **String Formatter:** Remove extra spaces and format a user's name.
- **Student Report:** Use template literals to display a student's name, marks, and percentage.
- **Price Calculator:** Convert input values into numbers and calculate a purchase total.
- **Discount Calculator:** Calculate a discount using the `Math` object.
- **Event Date Checker:** Display an event's date and determine whether it is in the future.

## ▶️ How to Run

Make sure Node.js is installed on your computer. Open a terminal in this directory and run any file:

```bash
node 01-string-methods.js
node 02-template-literals.js
node 03-number-methods.js
node 04-math.js
node 05-date-basics.js
```

Run one file at a time to understand its output.

## 🎯 Learning Outcomes

After completing this section, I should be able to:

- Work with common string methods.
- Build dynamic strings using template literals.
- Convert and validate numeric values.
- Perform calculations and generate random numbers.
- Create date objects and retrieve date/time information.
- Apply these concepts to practical JavaScript tasks.

---

**Status:** Completed core lessons and introductory practice. Continue reviewing the concepts and solving exercises before moving to the next topic.