
/*
Topic: Event Bubbling
File: 08-event-bubbling.js
*/

const parentBox = document.getElementById("parent-box");
const childBox = document.getElementById("child-box");
const bubblingOutput = document.getElementById("bubbling-output");

parentBox.addEventListener("click", function () {
    console.log("Parent box clicked");
});

childBox.addEventListener("click", function (event) {
    console.log("Child box clicked");

    bubblingOutput.textContent =
        "Child handler and then parent handler can run. Check Console.";


    event.stopPropagation();
});
