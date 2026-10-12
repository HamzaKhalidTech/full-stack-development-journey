// JavaScript topic placeholder.
// This file will be completed during the JavaScript learning phase.

/*
    JavaScript Objects
    Lesson 2: Properties and Methods
*/

// 1. Create an object
const product = {
    name: "Wireless Headphones",
    price: 4500,
    stock: 20,
    category: "Electronics"
};

// 2. Access properties using dot notation
console.log(product.name);
console.log(product.price);

// 3. Access properties using bracket notation
console.log(product["name"]);
console.log(product["category"]);

// 4. Access a property using a variable
const propertyName = "price";

console.log(product[propertyName]); 
// 4500

// 5. Update an existing property
product.price = 4000;

console.log(product.price);
// 4000

// 6. Add a new property
product.brand = "SoundMax";

console.log(product.brand);
// SoundMax

// 7. Delete a property
delete product.stock;

console.log(product.stock);
// undefined

// 8. Display the updated object
console.log(product);
