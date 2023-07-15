"use strict";
//Wednesday 12 July 2023
// Task 23: Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
// Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let myBike = "Yamaha";
const myGrades = 90;
console.log("Is bike =='Yamaha'? I predict True \n");
// becuase it is a logical expression which always return "true" or "false" based upon condition given
// true
console.log(myBike == "Yamaha");
console.log(1 < 2);
console.log(3 > 1);
console.log(4 == 4);
console.log(true);
//False
console.log(myGrades != 90);
console.log(3 < 1);
console.log(8 > 10);
console.log(myBike != "Yamaha");
console.log(myBike == "yamaha");
// Task 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
console.log(myBike === "Yamaha"); // == only for value , === for value plus type
console.log(myBike != "Yamaha");
// • Tests using the lower case function
console.log(myBike.toLocaleLowerCase() == myBike);
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(8 > 9); // fasle
console.log(9 < 8); // false
console.log(9 == 9); //true
console.log(7 > 3); //true
console.log(myBike.toString == myGrades.toString); //fasle
// • Tests using "and" and "or" operators
console.log(myBike == "Yamaha" && myGrades == 90); // true
console.log(7 > 9 || 9 > 8); // true
let rivers = ["Ravi", "Ganga", "Amazon", "Neil", "Kabul"];
// • Test whether an item is in a array
let item = "Amazon";
if (rivers.includes(item)) {
    console.log(`The item ${item} is present in the array`);
}
// • Test whether an item is not in a array
let item2 = "Arabian Sea";
if (rivers.includes(item2)) {
    console.log(`The item ${item2} is present in the array`);
}
// Task 25: Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
let alien_color = "green";
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
if (alien_color == "red") {
    console.log("This is red color");
}
if (alien_color === "green") {
    console.log("The condition passes and returned true");
}
// Task 26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
let alien_color2 = "yellow";
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else {
    console.log("You earned 10 points");
}
// • Write one version of this program that runs the if block and another that runs the else block.
if (alien_color == "yellow") {
    console.log("You earned 5 points.");
}
else {
    console.log("You earned 10 points");
}
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else {
    console.log("You earned 10 points");
}
// Task 27: Alien Colors #3: Turn your if-else chain from Exercise 25-24 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
//version 1
if (alien_color == "yellow") {
    console.log("You earned 5 points.");
}
else {
    console.log("You earned 10 points");
}
//version 2 
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color2 == "yellow") {
    console.log("You earned 10 points");
}
//version 3: 
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color2 == "yellow") {
    console.log("You earned 10 points");
}
else {
    console.log("You earned 15 points");
}
// Task 28: Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
let age = 20;
// • If the person is less than 2 years old, print a message that the person is a baby.
if (age < 2) {
    console.log("The person is a baby");
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if (age >= 4 && age < 13) {
    console.log("The person is a kid");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if (age >= 20 && age < 65) {
    console.log("The person is a adult");
}
// • If the person is age 65 or older, print a message that the person is an elder.
else {
    console.log("The person is an elder");
}
// Task 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits = ["Mango", "Grapes", "Leechi"];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits.indexOf("Mango") > -1) {
    console.log("You like Mangos.");
}
if (favorite_fruits.indexOf("Grapes") > -1) {
    console.log("I love grapes. ");
}
if (favorite_fruits.indexOf("Leechi") > -1) {
    console.log(`I like Leechi too much.`);
}
if (favorite_fruits.indexOf("Peach") == -1) {
    console.log("Peach is not my favorite fruit.");
}
if (favorite_fruits.indexOf("Banana") == -1) {
    console.log("He like Bananas but I don't.");
}
