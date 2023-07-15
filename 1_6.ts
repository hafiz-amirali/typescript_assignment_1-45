//Moday 10 July 2023
// Task 2 print message 
console.log("1. Answer \n")
let person = "Talha"
// contcat strings with plus sign with variable
let message = "Hello " + person + ", would you like to learn some TypeScript today?"
// we can also use backticks to store a string with variable , use ${} to put variable inside string
//let message = `Hello ${person}, would you like to learn some TypeScript today?`
console.log(message)

// Task 3:  change Cases Uppercase , lowercase and Titlecase

let person1 = "Karim"
// uppercase all chars are in capital form
let nameInUppercase = person1.toUpperCase()
console.log(nameInUppercase)
// lowercase all chars are in small form
let nameInLowercase = person1.toLowerCase()
console.log(nameInLowercase)
// titlcase: 1st char is capital and remaining are small like "K" and "arim" = Karim
let nameInTitlecase = person1.charAt(0).toUpperCase() + person1.slice(1)
console.log(nameInTitlecase)

// Task 4:  
//“Speak good or remain silent.” Prophet Muhammad (peace be upon him)


let hadith = "Prophet Muhammad (peace be upon him) once said, \"Speak good or remain silent.\""
console.log(hadith)


/* Task 5:   Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
Then compose your message and store it in a new variable called message.
 Print your message.*/
let famous_person = "Prophet Muhammad (peace be upon him)"
//use \" to put " inside the string
let message1 = famous_person + " once said, \"Speak good or remain silent.\""
// using backticks 
//let message1 = `${famous_person} once said, \"Speak good or remain silent.\"`
console.log(message1)


/* Task 6: Stripping Names: Store a person’s name, and include some whitespace
 characters at the beginning and end of the name.
 Make sure you use each character combination, "\t" and "\n", at least once.
 Print the name once, so the whitespace around the name is displayed.
 Then print the name after striping the white spaces. */


let nameWithWhitspaces = " Aamir  "
// \n used for line break and \t used for tab space
console.log("Name With Whitespaces:\n\t" + nameWithWhitspaces)

// stripping whitespaces from both sides using trim method
let strippedName = nameWithWhitspaces.trim()
console.log(strippedName)