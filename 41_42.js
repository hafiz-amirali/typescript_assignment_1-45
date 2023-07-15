"use strict";
//Saturday 15 July 2023
// Task 41: Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
let magicians = ["Samiri", "Afrasiyab", "Amar Ayyar", "Bilbatori"];
function printNameOfMagicians(magicians) {
    for (const name in magicians) {
        console.log(magicians[name]);
    }
}
printNameOfMagicians(magicians);
// Task 42: Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(arrayOfNames) {
    for (var i = 0; i < arrayOfNames.length; i++) {
        arrayOfNames[i] = `The Great ${arrayOfNames[i]}`;
    }
}
make_great(magicians);
function show_magicians() {
    return console.log(magicians);
}
show_magicians();
