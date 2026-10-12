
 // 05-date-basics.js

// 1. Current date and time
const now = new Date();

console.log(now);

// 2. Current year, month and day
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());

// 3. Day of the week
console.log(now.getDay());

// 4. Current time
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

// 5. Create a specific date
const birthday = new Date("2004-05-15");

console.log(birthday);

// 6. Create date using numbers
// Month index: January = 0, February = 1, ...
const eventDate = new Date(2026, 9, 12);

console.log(eventDate);

// 7. Get timestamp in milliseconds
console.log(now.getTime());

// 8. Compare two dates
const date1 = new Date("2026-01-01");
const date2 = new Date("2026-12-31");

console.log(date1 < date2);

// 9. Practical example: order date
const orderDate = new Date();

const orderSummary = `
Order placed successfully!
Year: ${orderDate.getFullYear()}
Month: ${orderDate.getMonth() + 1}
Day: ${orderDate.getDate()}
`;

console.log(orderSummary);
