// ======================================================
// 03 - DO WHILE LOOP
// ======================================================


// ======================================================
// 1. BASIC DO WHILE LOOP
// ======================================================

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);


// ======================================================
// 2. PRINT 1 TO 10
// ======================================================

let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 10);


// ======================================================
// 3. REVERSE LOOP
// ======================================================

let count = 5;

do {
    console.log(count);
    count--;
} while (count >= 1);


// ======================================================
// 4. EVEN NUMBERS
// ======================================================

let evenNumber = 1;

do {
    if (evenNumber % 2 === 0) {
        console.log(evenNumber);
    }

    evenNumber++;
} while (evenNumber <= 10);


// ======================================================
// 5. ODD NUMBERS
// ======================================================

let oddNumber = 1;

do {
    if (oddNumber % 2 !== 0) {
        console.log(oddNumber);
    }

    oddNumber++;
} while (oddNumber <= 10);


// ======================================================
// 6. SUM OF NUMBERS
// ======================================================

let sumNumber = 1;
let sum = 0;

do {
    sum = sum + sumNumber;
    sumNumber++;
} while (sumNumber <= 5);

console.log(`Sum: ${sum}`);


// ======================================================
// 7. MULTIPLICATION TABLE
// ======================================================

let tableNumber = 7;
let tableCounter = 1;

do {
    console.log(
        `${tableNumber} × ${tableCounter} = ${tableNumber * tableCounter}`
    );

    tableCounter++;
} while (tableCounter <= 10);


// ======================================================
// 8. AT LEAST ONE EXECUTION
// ======================================================

let testNumber = 10;

do {
    console.log(`Executed: ${testNumber}`);
} while (testNumber < 5);


// ======================================================
// 9. ECOMMERCE MENU EXAMPLE
// ======================================================

let choice = 3;

do {
    console.log("1. View Products");
    console.log("2. Add Product");
    console.log("3. Exit");
} while (choice !== 3);

console.log("Program Ended");