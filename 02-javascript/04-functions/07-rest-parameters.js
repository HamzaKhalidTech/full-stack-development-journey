// ======================================================
// 07 - REST PARAMETERS
// ======================================================


// ======================================================
// 1. BASIC REST PARAMETER
// ======================================================

function showNumbers(...numbers) {
    console.log(numbers);
}

showNumbers(10, 20, 30);
showNumbers(5, 10, 15, 20);


// ======================================================
// 2. LOOP THROUGH REST PARAMETER
// ======================================================

function displayNumbers(...numbers) {

    for (let number of numbers) {
        console.log(number);
    }
}

displayNumbers(10, 20, 30);


// ======================================================
// 3. ADD ALL NUMBERS
// ======================================================

function addAll(...numbers) {

    let total = 0;

    for (let number of numbers) {
        total = total + number;
    }

    return total;
}

console.log(addAll(10, 20));
console.log(addAll(10, 20, 30));
console.log(addAll(10, 20, 30, 40, 50));


// ======================================================
// 4. NORMAL PARAMETER + REST PARAMETER
// ======================================================

function showUser(name, ...skills) {

    console.log(`Name: ${name}`);
    console.log(`Skills: ${skills}`);
}

showUser(
    "Hamza",
    "HTML",
    "CSS",
    "JavaScript",
    "React"
);


// ======================================================
// 5. ECOMMERCE TOTAL
// ======================================================

function calculateTotal(...prices) {

    let total = 0;

    for (let price of prices) {
        total = total + price;
    }

    return total;
}

console.log(`Total: Rs. ${calculateTotal(1000, 2000)}`);

console.log(
    `Total: Rs. ${calculateTotal(1000, 2000, 3000)}`
);


// ======================================================
// 6. CALCULATE AVERAGE
// ======================================================

function calculateAverage(...numbers) {

    let total = 0;

    for (let number of numbers) {
        total = total + number;
    }

    return total / numbers.length;
}

console.log(calculateAverage(10, 20, 30));


// ======================================================
// 7. FIND LARGEST NUMBER
// ======================================================

function findLargest(...numbers) {

    let largest = numbers[0];

    for (let number of numbers) {

        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log(findLargest(10, 50, 30, 80, 20));


// ======================================================
// 8. ARROW FUNCTION + REST
// ======================================================

const addNumbers = (...numbers) => {

    let total = 0;

    for (let number of numbers) {
        total = total + number;
    }

    return total;
};

console.log(addNumbers(5, 10, 15, 20));