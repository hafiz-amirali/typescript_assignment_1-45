"use strict";
//Friday 14 July 2023
// Task 37: T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, message) {
    console.log(`A shirt of ${size} size with message "${message}" on it.`);
}
make_shirt("large", "Panaverse is Amazing");
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt2(size = "large", message = "I love TypeScript") {
    if ((size == "large" || size == "medium") && message == "I love TypeScript") {
        console.log(`A shirt of ${size} size with message "${message}" on it.`);
    }
    console.log(`A shirt of ${size} size with message "${message}" on it.`);
}
make_shirt2("large", "Hello World!");
// Task 38: Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("London", "UK");
// Taks 39: City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city, country) {
    return `"${city}, ${country}"`;
}
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Dehli", "India"));
console.log(city_country("Beijing", "China"));
