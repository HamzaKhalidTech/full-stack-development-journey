// ======================================================
// 04 - TERNARY OPERATOR
// ======================================================


// ======================================================
// 1. BASIC TERNARY
// ======================================================

let age = 20;

let ageStatus = age >= 18 ? "Adult" : "Minor";

console.log(ageStatus);


// ======================================================
// 2. PASS / FAIL
// ======================================================

let marks = 70;

let result = marks >= 50 ? "Pass" : "Fail";

console.log(result);


// ======================================================
// 3. PRODUCT STOCK
// ======================================================

let stock = 5;

let stockStatus = stock > 0 ? "In Stock" : "Out of Stock";

console.log(stockStatus);


// ======================================================
// 4. DISCOUNT
// ======================================================

let total = 6000;

let discount = total >= 5000
    ? "10% Discount"
    : "No Discount";

console.log(discount);


// ======================================================
// 5. VOTING ELIGIBILITY
// ======================================================

let userAge = 22;

let votingMessage = userAge >= 18
    ? "You can vote."
    : "You cannot vote.";

console.log(votingMessage);


// ======================================================
// 6. LOGIN STATUS
// ======================================================

let isLoggedIn = true;

let loginMessage = isLoggedIn
    ? "Welcome back!"
    : "Please login first.";

console.log(loginMessage);


// ======================================================
// 7. POSITIVE / NEGATIVE
// ======================================================

let number = -10;

let numberStatus = number >= 0
    ? "Positive"
    : "Negative";

console.log(numberStatus);


// ======================================================
// 8. BOOLEAN EXAMPLE
// ======================================================

let userAgeForCheck = 25;

let isAdult = userAgeForCheck >= 18;

console.log(isAdult);


// ======================================================
// 9. NESTED TERNARY
// ======================================================

let studentMarks = 85;

let grade =
    studentMarks >= 90 ? "A+" :
    studentMarks >= 80 ? "A" :
    studentMarks >= 70 ? "B" :
    studentMarks >= 60 ? "C" :
    "F";

console.log(grade);