
/*
    JavaScript Objects
    Lesson 5: Object Methods
*/

const product = {
    name: "Laptop",
    price: 150000,
    stock: 5
};

// 1. Check whether an object owns a property
console.log(Object.hasOwn(product, "name"));
// true

console.log(Object.hasOwn(product, "brand"));
// false

// 2. Copy properties into another object
const extraDetails = {
    brand: "Dell",
    color: "Silver"
};

Object.assign(product, extraDetails);

console.log(product);

// 3. Create a new object by combining objects
const pricing = {
    currency: "PKR",
    discount: 10
};

const productDetails = Object.assign({}, product, pricing);

console.log(productDetails);

// 4. Freeze an object
const settings = {
    theme: "dark",
    language: "English"
};

Object.freeze(settings);

// This change will not be applied in normal JavaScript execution.
settings.theme = "light";

console.log(settings.theme);
// dark

// 5. Check whether an object is frozen
console.log(Object.isFrozen(settings));
// true

// 6. Seal an object
const user = {
    name: "Hamza",
    role: "Developer"
};

Object.seal(user);

// Existing properties can still be updated.
user.role = "Full Stack Developer";

// But new properties cannot be added.
user.email = "hamza@example.com";

console.log(user.role);
// Full Stack Developer

console.log(user.email);
// undefined

console.log(Object.isSealed(user));
// true
