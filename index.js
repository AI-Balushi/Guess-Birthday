#! /usr/bin/env node
import * as readlineSync from 'readline-sync';
import chalk from "chalk";
import figlet from "figlet";
import gradient from "gradient-string";
let todoList = [];
let conditions = true;
// Print welcome message with ASCII art and colorful gradient
console.log(gradient.instagram(figlet.textSync("Code with Abdul Waheed", { horizontalLayout: "full" })));
const set1 = " 1 3 5 7\n" +
    " 9 11 13 15\n" +
    "17 19 21 23\n" +
    "25 27 29 31";
const set2 = " 2 3 6 7\n" +
    "10 11 14 15\n" +
    "18 19 22 23\n" +
    "26 27 30 31";
const set3 = " 4 5 6 7\n" +
    "12 13 14 15\n" +
    "20 21 22 23\n" +
    "28 29 30 31";
const set4 = " 8 9 10 11\n" +
    "12 13 14 15\n" +
    "24 25 26 27\n" +
    "28 29 30 31";
const set5 = "16 17 18 19\n" +
    "20 21 22 23\n" +
    "24 25 26 27\n" +
    "28 29 30 31";
let day = 0;
console.log(chalk.cyan("\nIs your birthday in Set1?"));
console.log(chalk.green(set1));
let answer = readlineSync.questionInt("Enter 0 for No and 1 for Yes: ");
if (answer === 1)
    day += 1;
console.log(chalk.cyan("\nIs your birthday in Set2?"));
console.log(chalk.green(set2));
answer = readlineSync.questionInt("Enter 0 for No and 1 for Yes: ");
if (answer === 1)
    day += 2;
console.log(chalk.cyan("\nIs your birthday in Set3?"));
console.log(chalk.green(set3));
answer = readlineSync.questionInt("Enter 0 for No and 1 for Yes: ");
if (answer === 1)
    day += 4;
console.log(chalk.cyan("\nIs your birthday in Set4?"));
console.log(chalk.green(set4));
answer = readlineSync.questionInt("Enter 0 for No and 1 for Yes: ");
if (answer === 1)
    day += 8;
console.log(chalk.cyan("\nIs your birthday in Set5?"));
console.log(chalk.green(set5));
answer = readlineSync.questionInt("Enter 0 for No and 1 for Yes: ");
if (answer === 1)
    day += 16;
console.log(chalk.yellowBright(`\nYour birthday is ${day}!`));
