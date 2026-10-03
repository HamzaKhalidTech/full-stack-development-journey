// ======================================================
// 06 - NESTED LOOPS
// ======================================================


// ======================================================
// 1. BASIC NESTED LOOP
// ======================================================

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {
        console.log(`i=${i}, j=${j}`);
    }

}


// ======================================================
// 2. MULTIPLICATION TABLES
// ======================================================

for (let table = 2; table <= 5; table++) {

    console.log(`--- Table of ${table} ---`);

    for (let i = 1; i <= 10; i++) {
        console.log(`${table} × ${i} = ${table * i}`);
    }

}


// ======================================================
// 3. STAR TRIANGLE
// ======================================================

for (let row = 1; row <= 5; row++) {

    let pattern = "";

    for (let column = 1; column <= row; column++) {
        pattern += "* ";
    }

    console.log(pattern);
}


// ======================================================
// 4. RECTANGLE PATTERN
// ======================================================

for (let row = 1; row <= 3; row++) {

    let pattern = "";

    for (let column = 1; column <= 5; column++) {
        pattern += "* ";
    }

    console.log(pattern);
}


// ======================================================
// 5. NUMBER PATTERN
// ======================================================

for (let row = 1; row <= 5; row++) {

    let pattern = "";

    for (let column = 1; column <= row; column++) {
        pattern += column + " ";
    }

    console.log(pattern);
}


// ======================================================
// 6. ECOMMERCE PRODUCT + VARIANT
// ======================================================

for (let product = 1; product <= 3; product++) {

    for (let variant = 1; variant <= 3; variant++) {

        console.log(
            `Product ${product} - Variant ${variant}`
        );

    }

}


// ======================================================
// 7. NESTED LOOP WITH BREAK
// ======================================================

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 5; j++) {

        if (j === 3) {
            break;
        }

        console.log(`i=${i}, j=${j}`);
    }

}


// ======================================================
// 8. NESTED LOOP WITH CONTINUE
// ======================================================

for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 5; j++) {

        if (j === 3) {
            continue;
        }

        console.log(`i=${i}, j=${j}`);
    }

}