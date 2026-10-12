
/*
======================================================
03 - PUSH AND POP
======================================================
*/

// 1. Create an array
const cart = ["AirPods", "Keyboard"];

console.log("Original cart:", cart);

// 2. Add one item using push()
const newLength = cart.push("Mouse");

console.log("After push:", cart);
console.log("New length:", newLength);

// 3. Add multiple items
cart.push("Monitor", "USB Cable");

console.log("After adding multiple items:", cart);

// 4. Remove the last item using pop()
const removedItem = cart.pop();

console.log("After pop:", cart);
console.log("Removed item:", removedItem);

// 5. Ecommerce example
const shoppingCart = [];

shoppingCart.push("Laptop");
shoppingCart.push("Mouse");

console.log("Shopping cart:", shoppingCart);

const removedProduct = shoppingCart.pop();

console.log("Removed product:", removedProduct);
console.log("Final cart:", shoppingCart);
