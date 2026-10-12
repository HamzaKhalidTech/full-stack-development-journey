
/*
    JavaScript Objects
    Lesson 8: Spread Operator
*/

// 1. Create an original object
const user = {
    name: "Hamza",
    age: 21,
    role: "Developer"
};

// 2. Copy the object
const userCopy = { ...user };

console.log(userCopy);

// 3. Copy and add a new property
const userWithCity = {
    ...user,
    city: "Lahore"
};

console.log(userWithCity);

// 4. Copy and update an existing property
const updatedUser = {
    ...user,
    age: 22
};

console.log(updatedUser);

// 5. Combine two objects
const personalDetails = {
    name: "Hamza",
    city: "Lahore"
};

const professionalDetails = {
    role: "Full Stack Developer",
    experience: "Beginner"
};

const completeProfile = {
    ...personalDetails,
    ...professionalDetails
};

console.log(completeProfile);

// 6. Later properties overwrite earlier ones
const defaultSettings = {
    theme: "light",
    language: "English"
};

const customSettings = {
    theme: "dark"
};

const settings = {
    ...defaultSettings,
    ...customSettings
};

console.log(settings);

// 7. Original object remains unchanged
console.log(user.age);
// 21
