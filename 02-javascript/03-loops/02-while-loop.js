// ======================================================
// 02 - WHILE LOOP
// ======================================================


// ======================================================
// 1. BASIC WHILE LOOP
// ======================================================

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}


// ======================================================
// 2. PRINT 1 TO 10
// ======================================================

let number = 1;

while (number <= 10) {
    console.log(number);
    number++;
}


// ======================================================
// 3. REVERSE LOOP
// ======================================================

let count = 5;

while (count >= 1) {
    console.log(count);
    count--;
}


// ======================================================
// 4. EVEN NUMBERS
// ======================================================

let evenNumber = 1;

while (evenNumber <= 10) {
    if (evenNumber % 2 === 0) {
        console.log(evenNumber);
    }

    evenNumber++;
}


// ======================================================
// 5. ODD NUMBERS
// ======================================================

let oddNumber = 1;

while (oddNumber <= 10) {
    if (oddNumber % 2 !== 0) {
        console.log(oddNumber);
    }

    oddNumber++;
}


// ======================================================
// 6. SUM OF NUMBERS
// ======================================================

let sumNumber = 1;
let sum = 0;

while (sumNumber <= 5) {
    sum = sum + sumNumber;
    sumNumber++;
}

console.log(`Sum: ${sum}`);


// ======================================================
// 7. MULTIPLICATION TABLE
// ======================================================

let tableNumber = 7;
let tableCounter = 1;

while (tableCounter <= 10) {
    console.log(
        `${tableNumber} × ${tableCounter} = ${tableNumber * tableCounter}`
    );

    tableCounter++;
}


// ======================================================
// 8. ECOMMERCE STOCK EXAMPLE
// ======================================================

let stock = 5;

while (stock > 0) {
    console.log(`Product sold. Remaining stock: ${stock}`);
    stock--;
}

console.log("Out of stock");