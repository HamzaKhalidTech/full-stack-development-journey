// ======================================================
// 02 - ELSE IF
// ======================================================


// ======================================================
// 1. BASIC ELSE IF
// ======================================================

let marks = 85;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 50) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}


// ======================================================
// 2. SHOPPING DISCOUNT
// ======================================================

let total = 12000;

if (total >= 20000) {
    console.log("20% discount");
} else if (total >= 10000) {
    console.log("10% discount");
} else if (total >= 5000) {
    console.log("5% discount");
} else {
    console.log("No discount");
}


// ======================================================
// 3. AGE CATEGORY
// ======================================================

let age = 25;

if (age < 13) {
    console.log("Child");
} else if (age < 20) {
    console.log("Teenager");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior Citizen");
}


// ======================================================
// 4. TEMPERATURE
// ======================================================

let temperature = 35;

if (temperature >= 40) {
    console.log("Extremely Hot");
} else if (temperature >= 30) {
    console.log("Hot");
} else if (temperature >= 20) {
    console.log("Normal");
} else if (temperature >= 10) {
    console.log("Cold");
} else {
    console.log("Very Cold");
}


// ======================================================
// 5. LOGIN STATUS
// ======================================================

let username = "admin";
let password = "12345";

if (username === "" || password === "") {
    console.log("Please fill all fields.");
} else if (username === "admin" && password === "12345") {
    console.log("Login successful.");
} else {
    console.log("Invalid username or password.");
}


// ======================================================
// 6. BALANCE STATUS
// ======================================================

let balance = 7500;

if (balance <= 0) {
    console.log("Account balance is empty.");
} else if (balance < 5000) {
    console.log("Low balance.");
} else if (balance < 10000) {
    console.log("Normal balance.");
} else {
    console.log("Healthy balance.");
}