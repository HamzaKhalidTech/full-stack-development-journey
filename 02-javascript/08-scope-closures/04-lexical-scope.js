/*
Topic: Lexical Scope
File: 04-lexical-scope.js
*/

const companyName = "Zyvora";

function outerFunction() {
    const department = "Development";

    function innerFunction() {
        const employee = "Hamza";

        console.log("Company:", companyName);
        console.log("Department:", department);
        console.log("Employee:", employee);
    }

    innerFunction();
}

outerFunction();
