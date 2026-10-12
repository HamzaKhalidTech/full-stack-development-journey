
/*
    JavaScript Objects
    Lesson 6: this Keyword
*/

// 1. Basic example
const user = {
    name: "Hamza",
    age: 21,

    introduce: function () {
        console.log("My name is " + this.name);
        console.log("My age is " + this.age);
    }
};

user.introduce();

// 2. Product example
const product = {
    name: "Wireless Headphones",
    price: 4500,

    showDetails: function () {
        console.log("Product: " + this.name);
        console.log("Price: " + this.price);
    }
};

product.showDetails();

// 3. Update a property and call the method again
product.price = 4000;

product.showDetails();

// 4. Two objects with the same method behavior
const userOne = {
    name: "Ali",

    greet: function () {
        console.log("Hello, " + this.name);
    }
};

const userTwo = {
    name: "Ahmed",

    greet: function () {
        console.log("Hello, " + this.name);
    }
};

userOne.greet();
userTwo.greet();
