/*
Day 3: Control Structures
Tasks/Activities:
Activity 1: If-Else Statements
• Task 1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.
• Task 2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.
*/

// let num = 2;
// if (num > 0) {
//     console.log(`${num} is Positive`);
// }
// else if (num < 0) {
//     console.log(`${num} is Negative`);
// }
// else {
//     console.log(`${num} is zero`);
// }

// let personName = "Hemant";
// let personAge = 23;
// if (personAge >= 18) {
//     console.log(`${personName} is eligible to vote`);
// } else {
//     console.log(`${personName} is not eligible to vote`);
// }


/*
Activity 2: Nested If-Else Statements
Task 3: Write a program to find the largest of three numbers using nested if-else statements.
*/

// let num1 = 5;
// let num2 = 12;
// let num3 = 32;
// if (num1 > num2 && num1 > num3) {
//     console.log(`num1: ${num1} is greater than num2: ${num2} and num3: ${num3}`);
// } else if (num2 > num1 && num2 > num3) {
//     console.log(`num2: ${num2} is greater than num1: ${num1} and num3: ${num3}`);
// } else {
//     console.log(`num3: ${num3} is greater than num1: ${num1} and num2: ${num2}`);
// }

/*
Activity 3: Switch Case
• Task 4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
• Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console.
*/
// Task4
// let numDay = 4;
// switch (numDay) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("INVALID NUMBER!");
//         break;
// }

// Task 5
// let studentScore = 10;
// switch (studentScore) {
//     case 10:
//         console.log("Student grade is : A!");
//         break;
//     case 9:
//         console.log("Student grade is : A!");
//         break;
//     case 8:
//         console.log("Student grade is : B!");
//         break;
//     case 7:
//         console.log("Student grade is : B!");
//         break;
//     case 6:
//         console.log("Student grade is : C!");
//         break;
//     case 5:
//         console.log("Student grade is : C!");
//         break;
//     case 4:
//         console.log("Student grade is : D!");
//         break;

//     default:
//         console.log("FAILED!");
//         break;
// }

/*
Activity 4: Conditional (Ternary) Operator
• Task 6: Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console.
*/
// task 6

// let num = 30;
// let result = num % 2 == 0 ? `${num} is Even!` : `${num} is Odd!`;
// console.log(result);

/*
Activity 5: Combining Conditions
Task 7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console. 
*/



/*
Feature Request:
1. Number Check Script: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.
2. Voting Eligibility Script: Create a script to check if a person is eligible to vote based on their age and log the result.
3. Day of the Week Script: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name.
4. Grade Assignment Script: Create a script that uses a switch case to assign a grade based on a score and logs the grade.
5. Leap Year Check Script: Write a script that checks if a year is a leap year using multiple conditions and logs the result.
Achievement:
By the end of these activities, students will:
• Implement and understand basic if-else control flow.
• Use nested if-else statements to handle multiple conditions.
• Utilize switch cases for control flow based on specific values.
• Apply the ternary operator for concise condition checking.
• Combine multiple conditions to solve more complex problems.
 */