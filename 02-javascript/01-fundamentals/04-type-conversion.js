// ==========================================
// 04 - TYPE CONVERSION
// ==========================================

// Type conversion means changing one data
// type into another data type.


// ==========================================
// 1. EXPLICIT CONVERSION
// ==========================================

// We manually convert the value.

let age = "21";

let convertedAge = Number(age);

console.log(convertedAge);
console.log(typeof convertedAge);


// ==========================================
// 2. STRING TO NUMBER
// ==========================================

let price = "99.99";

let convertedPrice = Number(price);

console.log(convertedPrice);
console.log(typeof convertedPrice);


// ==========================================
// 3. INVALID STRING TO NUMBER
// ==========================================

let invalidNumber = Number("Hello");

console.log(invalidNumber);
console.log(typeof invalidNumber);


// ==========================================
// 4. NaN
// ==========================================

let result = Number("Hamza");

console.log(result);

console.log(Number.isNaN(result));


// ==========================================
// 5. NUMBER TO STRING
// ==========================================

let score = 100;

let scoreText = String(score);

console.log(scoreText);
console.log(typeof scoreText);


// ==========================================
// 6. toString()
// ==========================================

let amount = 500;

let amountText = amount.toString();

console.log(amountText);
console.log(typeof amountText);


// ==========================================
// 7. BOOLEAN CONVERSION
// ==========================================

console.log(Boolean(true));
console.log(Boolean(false));


// ==========================================
// 8. TRUTHY VALUES
// ==========================================

console.log(Boolean(1));
console.log(Boolean(100));
console.log(Boolean("Hello"));


// ==========================================
// 9. FALSY VALUES
// ==========================================

console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


// ==========================================
// 10. STRING TO BOOLEAN
// ==========================================

console.log(Boolean("Hello"));
console.log(Boolean(""));

console.log(Boolean("false"));


// ==========================================
// 11. NUMBER TO BOOLEAN
// ==========================================

console.log(Boolean(10));
console.log(Boolean(1));
console.log(Boolean(0));


// ==========================================
// 12. NULL TO BOOLEAN
// ==========================================

console.log(Boolean(null));


// ==========================================
// 13. UNDEFINED TO BOOLEAN
// ==========================================

console.log(Boolean(undefined));


// ==========================================
// 14. NaN TO BOOLEAN
// ==========================================

console.log(Boolean(NaN));


// ==========================================
// 15. parseInt()
// ==========================================

let integerValue = "100";

console.log(parseInt(integerValue));


// Decimal using parseInt

let decimalValue = "99.99";

console.log(parseInt(decimalValue));


// ==========================================
// 16. parseFloat()
// ==========================================

let decimalPrice = "99.99";

console.log(parseFloat(decimalPrice));


// ==========================================
// 17. parseInt() VS Number()
// ==========================================

console.log(Number("100px"));
console.log(parseInt("100px"));


// ==========================================
// 18. parseInt() INVALID VALUE
// ==========================================

console.log(parseInt("px100"));


// ==========================================
// 19. NUMBER CONVERSION
// ==========================================

console.log(Number(null));
console.log(Number(undefined));
console.log(Number(""));
console.log(Number("100"));


// ==========================================
// 20. STRING CONVERSION
// ==========================================

console.log(String(null));
console.log(String(undefined));
console.log(String(100));
console.log(String(true));


// ==========================================
// 21. BOOLEAN CONVERSION
// ==========================================

console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(""));
console.log(Boolean("Hello"));


// ==========================================
// 22. IMPLICIT CONVERSION
// ==========================================

// JavaScript automatically converts types
// in some situations.

console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 2);
console.log("10" / 2);


// ==========================================
// 23. EXPLICIT VS IMPLICIT
// ==========================================

// Explicit conversion

let numberFromString = Number("50");

console.log(numberFromString);


// Implicit conversion

let implicitResult = "50" * 2;

console.log(implicitResult);


// ==========================================
// 24. REAL FORM EXAMPLE
// ==========================================

// Form input values are commonly strings.

let quantity = "3";
let productPrice = 1500;

// Explicit conversion

quantity = Number(quantity);

let total = quantity * productPrice;

console.log(total);


// ==========================================
// 25. E-COMMERCE EXAMPLE
// ==========================================

let cartPrice = "2500";
let cartQuantity = "2";

// Convert strings to numbers

cartPrice = Number(cartPrice);
cartQuantity = Number(cartQuantity);

let cartTotal = cartPrice * cartQuantity;

console.log(cartTotal);


// ==========================================
// 26. DISCOUNT EXAMPLE
// ==========================================

let productAmount = "5000";
let discountAmount = "500";

productAmount = Number(productAmount);
discountAmount = Number(discountAmount);

let finalAmount = productAmount - discountAmount;

console.log(finalAmount);


// ==========================================
// 27. CHECK NaN
// ==========================================

let userInput = "abc";

let convertedInput = Number(userInput);

if (Number.isNaN(convertedInput)) {
    console.log("Invalid number");
}


// ==========================================
// 28. IMPORTANT FALSY VALUES
// ==========================================

// false
// 0
// -0
// 0n
// ""
// null
// undefined
// NaN