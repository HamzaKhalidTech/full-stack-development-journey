
/*
    JavaScript Objects
    Lesson 3: Nested Objects
*/

// 1. Create a customer object
const customer = {
    name: "Hamza",
    email: "hamza@example.com",
    age: 21,

    address: {
        street: "Main Boulevard",
        city: "Lahore",
        country: "Pakistan",
        postalCode: "54000"
    },

    account: {
        type: "Premium",
        isActive: true
    }
};

// 2. Access top-level properties
console.log(customer.name);
console.log(customer.email);

// 3. Access nested object properties
console.log(customer.address.city);
console.log(customer.address.country);

// 4. Access another nested object
console.log(customer.account.type);
console.log(customer.account.isActive);

// 5. Update a nested property
customer.address.city = "Islamabad";

console.log(customer.address.city);

// 6. Add a property inside a nested object
customer.address.area = "Blue Area";

console.log(customer.address.area);

// 7. Display the complete object
console.log(customer);
