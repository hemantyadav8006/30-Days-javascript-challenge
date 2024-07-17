/*
Day 4: Loops

Tasks/Activities:

Activity 1: For Loop
• Task 1: Write a program to print numbers from 1 to 10 using a for loop.
• Task 2: Write a program to print the multiplication table of 5 using a for loop.
*/
// task 1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// task 2
for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} = ${5 * i}`);
}

/*
Activity 2: While Loop
• Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop.
• Task 4: Write a program to print numbers from 10 to 1 using a while loop.
*/

// task 3
let sum = 0;
let r = 1;
while (r <= 10) {
    sum = sum + r;
    r++;
}
console.log(`Sum is : ${sum}`);

// task 4
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

/*
Activity 3: Do...While Loop
• Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
• Task 6: Write a program to calculate the factorial of a number using a do...while loop.
*/

// task 5
let f = 1;
do {
    console.log(f);
    f++;
} while (f <= 5);

// task 6
let fact = 1;
let i = 0;
do {
    if (i === 0) {
        break;
    } else {
        fact = fact * i;
        i--;
    }
} while (i >= 1);
console.log(`Factorial is : ${fact}`);


/*
Activity 4: Nested Loops
·
Task 7: Write a program to print a pattern using nested for loops:
*
**
***
****
*****
*/

// task 7
let t = 1;
while (t <= 5) {
    let str = "";
    let j = 1;
    while (j <= t) {
        str = str + "* ";
        j++;
    }
    t++;
    console.log(str);
}


/*
Activity 5: Loop Control Statements
• Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
• Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
*/

// task 8
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;
    }
    console.log(i);
}

// task 9
for (let i = 0; i <= 10; i++) {
    if (i == 7) {
        break;
    }
    console.log(i);
}



/*
Feature Request:
1. Number Printing Script: Write a script that prints numbers from 1 to 10 using a for loop and a while loop.
2. Multiplication Table Script: Create a script that prints the multiplication table of 5 using a for loop.
3. Pattern Printing Script: Write a script that prints a pattern of stars using nested loops.
4. Sum Calculation Script: Write a script that calculates the sum of numbers from 1 to 10 using a while loop.
5. Factorial Calculation Script: Create a script that calculates the factorial of a number using a do...while loop.
Achievement:
By the end of these activities, students will:
• Understand and use for loops to iterate over a sequence of numbers.
• Utilize while loops for iteration based on a condition.
•
Apply do...while loops to ensure the loop body is executed at least once.
Implement nested loops to solve more complex problems.
Use loop control statements (break and continue) to control the flow of loops.

*/