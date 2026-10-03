// ======================================================
// 03 - SWITCH STATEMENT
// ======================================================


// ======================================================
// 1. BASIC SWITCH
// ======================================================

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day.");
}


// ======================================================
// 2. PAYMENT METHOD
// ======================================================

let paymentMethod = "card";

switch (paymentMethod) {
    case "cash":
        console.log("Cash on Delivery selected.");
        break;

    case "card":
        console.log("Credit/Debit Card selected.");
        break;

    case "bank":
        console.log("Bank Transfer selected.");
        break;

    default:
        console.log("Invalid payment method.");
}


// ======================================================
// 3. DEFAULT CASE
// ======================================================

let month = 15;

switch (month) {
    case 1:
        console.log("January");
        break;

    case 2:
        console.log("February");
        break;

    case 3:
        console.log("March");
        break;

    default:
        console.log("Invalid month.");
}


// ======================================================
// 4. MULTIPLE CASES
// ======================================================

let today = "Saturday";

switch (today) {
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;

    default:
        console.log("Weekday");
}


// ======================================================
// 5. PRODUCT CATEGORY
// ======================================================

let category = "electronics";

switch (category) {
    case "electronics":
        console.log("Showing electronic products.");
        break;

    case "clothing":
        console.log("Showing clothing products.");
        break;

    case "shoes":
        console.log("Showing shoes.");
        break;

    case "accessories":
        console.log("Showing accessories.");
        break;

    default:
        console.log("Category not found.");
}


// ======================================================
// 6. ORDER STATUS
// ======================================================

let orderStatus = "shipped";

switch (orderStatus) {
    case "pending":
        console.log("Order is pending.");
        break;

    case "confirmed":
        console.log("Order confirmed.");
        break;

    case "shipped":
        console.log("Order has been shipped.");
        break;

    case "delivered":
        console.log("Order delivered.");
        break;

    case "cancelled":
        console.log("Order cancelled.");
        break;

    default:
        console.log("Unknown order status.");
}