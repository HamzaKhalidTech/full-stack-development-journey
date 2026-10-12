
/*
    JavaScript Objects
    Lesson 7: Object Keys, Values and Entries
*/

const product = {
    name: "Laptop",
    price: 150000,
    brand: "Dell",
    stock: 5
};

// 1. Get all property names
const keys = Object.keys(product);

console.log(keys);

// 2. Get all property values
const values = Object.values(product);

console.log(values);

// 3. Get all key-value pairs
const entries = Object.entries(product);

console.log(entries);

// 4. Count the number of properties
console.log(Object.keys(product).length);

// 5. Loop through all entries
for (const [key, value] of Object.entries(product)) {
    console.log(key + ": " + value);
}
