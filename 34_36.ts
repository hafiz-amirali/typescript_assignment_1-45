//Thursday 13 July 2023

// Task 34: Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for (let number in arrayOfNumbers) {
    if (arrayOfNumbers[number] == 1) {
        console.log("1st")
    }
    else if (arrayOfNumbers[number] == 2) {
        console.log("2nd")
    }
    else if (arrayOfNumbers[number] == 3) {
        console.log("3rd")
    }
    else {

        console.log(`${arrayOfNumbers[number]}th`)

    }

}
// Task 35: Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
let fav_pizzas = ["Chicken Fajita", "Veggie", "Afghani Tikka", "Pepperoni", "Peri-peri"]
for (let pizza in fav_pizzas) {
    console.log(fav_pizzas[pizza])
}
// • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
for (let pizza in fav_pizzas) {
    console.log(`I like ${fav_pizzas[pizza]} pizza.`)
}

// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("\n They have amazing taste and each of them gives a joyful meal.\n These are availavle in almost each cafe.\n I really Like the Pizza")
// Task 36: Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.
let birds = ["Kukoo", "Parrot", "Eagle"]
birds.forEach(function (name) {
    console.log(name)

});
// • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

birds.forEach(function (name) {
    console.log(`${name} is a beautiful bird.`)

});
console.log("Any of thesen birds is beautiful")

