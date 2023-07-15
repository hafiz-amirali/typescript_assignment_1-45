//Wednesday 12 July 2023

/*20. Think of something you could store in a array. For example, you could make a list
of mountains, rivers, countries, cities, languages, or anything else you’d like. Write
a program that creates a list containing these items.
*/
const thingsToExplore = ["mountain", "river", "country", "city", "language"]


// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, 
//or anything else you’d like. Write a program that creates a list containing these items.

const listOfrivers = ["Ravi", "Ganga", "Amazon", "Neil", "Kabul"]

// Task 21: Then think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let student = { "name": "Amir", "batch": 47, "Quarter": "Q1", "city": "Lahore" }

// Task 22: Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. 
//Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
let indexErorr = listOfrivers.indexOf("River")

console.log("index Error: ", indexErorr) // gives -1 when try to find the index of the value
//Or
console.log("Index Error: ", listOfrivers[8]) // gives "undefined" when fecth the value by giving wrong index


