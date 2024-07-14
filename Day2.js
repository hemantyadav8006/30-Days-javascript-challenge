/*
Day 2: Operators

Tasks/Activities:
Activity 1: Arithmetic Operations
• Task 1: Write a program to add two numbers and log the result to the console.
• Task 2: Write a program to subtract two numbers and log the result to the console.
• Task 3: Write a program to multiply two numbers and log the result to the console.
• Task 4: Write a program to divide two numbers and log the result to the console.
• Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
*/

const a = 10;
const b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(b % a);

/*
Activity 2: Assignment Operators
• Task 6: Use the += operator to add a number to a variable and log the result to the console.
• Task 7: Use the -= operator to subtract a number from a variable and log the result to the console.
*/

let addNumber1 = 45;
let addNumber2 = 1;
addNumber1 += addNumber2;
console.log(addNumber1);
addNumber1 -= addNumber2;
console.log(addNumber1);


/*
Activity 3: Comparison Operators
• Task 8: Write a program to compare two numbers using > and < and log the result to the console.
• Task 9: Write a program to compare two numbers using >= and <= and log the result to the console.
• Task 10: Write a program to compare two numbers using == and === and log the result to the console.
*/

let compareNumber1 = 34;
let compareNumber2 = 3;
console.log(compareNumber1 > compareNumber2);
console.log(compareNumber1 < compareNumber2);
console.log(compareNumber1 <= compareNumber2);
console.log(compareNumber1 >= compareNumber2);
console.log(compareNumber1 == compareNumber2);
console.log(compareNumber1 === compareNumber2);

/*
Activity 4: Logical Operators
• Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console. 
• Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
• Task 13: Write a program that uses the ! operator to combine two conditions and log the result to the console.
*/
let Number1 = 30;
let Number2 = 40;
let compare = 20;
console.log(Number1 > compare && Number2 > compare); // ek bhi condition fail hoti h to false return krta h ye (isse dono condition true hi chahiye)
console.log(Number1 > compare && Number2 < compare);
console.log(Number1 > compare && Number2 < compare);
console.log(Number1 > compare || Number2 < compare); // ek bhi condition true hui to true;
console.log(!Number2 < compare);
console.log(!true); // false ko true and true ko false
console.log(!false);


/*
Activity 5: Ternary Operator
• Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
*/
const tryNum = 5;
const checkNegative = tryNum >= 0 ? "positive" : "negative";
console.log(checkNegative);


const str1 = "Hemant";
const str2 = "Hemant";
const str3 = str1 === str2 ? "True" : "False";  // condition ? exprIfTrue : exprIfFalse
console.log(str3);


/*
Feature Request:
1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results.
2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

Achievement:
By the end of these activities, students will:
• Understand and use arithmetic operators to perform basic calculations.
• Use assignment operators to modify variable values.
• Compare values using comparison operators.
• Combine conditions using logical operators.
• Use the ternary operator for concise conditional expressions.

*/