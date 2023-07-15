"use strict";
//Thursday 13 July 2023
// Task 30: Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
let userNames = ["admin", "faxi98", "kate001", "amir33", "samijk"];
for (let user in userNames) {
    // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
    if (userNames[user] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    else {
        console.log(`Hello ${userNames[user]}, thank you for logging in again.`);
    }
}
// Task 31:  No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
if (userNames.length > 0) {
    console.log("Users' List is not empty");
}
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
if (userNames.length > 0) {
    userNames.splice(0, userNames.length);
    if (userNames.length == 0) {
        console.log("We need to find some users.");
    }
}
console.log(userNames);
// Task 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
let current_users = ['bsmal', "jane", "sahil", "kamal", "danish"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users = ["jane", "kamal", "fareeha", "haali", "Danish"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
function isUserExit(user) {
    if (current_users.indexOf(user) > -1)
        console.log("User name already exists. Please try a new username.");
    else {
        console.log("User name is available.");
    }
}
new_users.forEach(isUserExit);
for (let user in new_users) {
    if (current_users.includes(new_users[user])) {
        console.log("User name already exists. Please try a new username.");
    }
    else {
        console.log("User name available");
    }
}
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
