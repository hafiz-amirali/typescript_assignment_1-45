// Saturday 15 July 2023
// Task 43: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
//of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names and one array 
//with the Great added to each magician’s name.
let greatMagicians = ["Samiri", "Afrasiyab", "Amar Ayyar", "Bilbatori"]
function make_great_magicians(arrayOfNames: Array<string>) {
    let newArray: any[] = []
    for (const i in arrayOfNames) {
        newArray.unshift(`The great ${arrayOfNames[i]}`)

    }
    return newArray

}
let separateArray = make_great_magicians(greatMagicians)
console.log(separateArray)
console.log(greatMagicians)

// Task 44: Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function sandwichSummary(...args: any) {
    return console.log(`Sandwich is made of ${args}`)
}


sandwichSummary("Bun", "Mayo", "Chicken", "Salad")
sandwichSummary("Chicken", "Pickle", "Onion rings", "Tomatto")
sandwichSummary("mutton", 12, "Fries", "Catchup")


// Task 45: Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car(manufacturer: string, model: any, { ...feature }) {
    return {
        manufacturer: manufacturer,
        model: model,
        ...feature
    }
}
console.log(car("Honda", "Civic", { "color": "red", "Year": 2012 }))
