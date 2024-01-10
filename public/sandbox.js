"use strict";
// let greet: Function
// Example 1
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// Example 2 
let calc;
calc = (n1, n2, action) => {
    if (action === 'add') {
        return n1 + n2;
    }
    else {
        return n1 - n2;
    }
};
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age}`);
};
