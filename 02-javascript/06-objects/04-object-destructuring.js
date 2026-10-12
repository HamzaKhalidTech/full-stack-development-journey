
/*
    JavaScript Objects
    Lesson 4: Object Destructuring
*/

// 1. Create a user object
const user = {
    name: "Hamza",
    age: 21,
    city: "Lahore",
    profession: "Web Developer"
};

// 2. Extract properties using destructuring
const { name, age, city } = user;

console.log(name);
console.log(age);
console.log(city);

// 3. Destructure and rename a variable
const { profession: jobTitle } = user;

console.log(jobTitle);
// Web Developer

// 4. Set a default value
const { country = "Pakistan" } = user;

console.log(country);
// Pakistan

// 5. Destructure a nested object
const customer = {
    name: "Ali",
    address: {
        city: "Karachi",
        postalCode: "75000"
    }
};

const {
    address: { city: customerCity, postalCode }
} = customer;

console.log(customerCity);
// Karachi

console.log(postalCode);
// 75000
