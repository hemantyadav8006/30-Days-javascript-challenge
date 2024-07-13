/* Data Types and Variables */

/*
Activity 1: Variable Declaration

• Task 1: Declare a variable using var, assign it a number, and log the value to the console.

• Task 2: Declare a variable using let, assign it a string, and log the value to the console.

Activity 2: Constant Declaration

• Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
*/

var a = 12;
console.log(a);

let b = "Hemant";
console.log(b);

const constant = true;
console.log(constant);


/*
Activity 3: Data Types
• Task 4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the typeof operator.
*/

const num = 12;
const str = "Hemant";
const bool = true;
const obj = {
    name: "Hemant",
    age: 22,
    goal: "Software Engineer"
};
const arr = [1, 2, 3, "Hemant", "kumar", "Yadav"];

console.log(typeof num); // number
console.log(typeof str); // string
console.log(typeof bool); // boolean
console.log(typeof obj); // object
console.log(typeof arr); // object


/*
Activity 4: Reassigning Variables
• Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
*/

let good = 45;
console.log(good);

good = 34;
console.log(good);
// It won't give any error, coz let is modifiable

/*
Activity 5: Understanding const
Task 6: Try reassigning a variable declared with const and observe the error.
*/

const d = "Hemant";
console.log(d);

d = 4;  // TypeError: Assignment to constant variable.
console.log(d);


