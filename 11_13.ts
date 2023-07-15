//Moday 10 July 2023
/* Task 11:  Names: Store the names of a few of your friends in a array called names. 
  Print each person’s name by accessing each element in the list, one at a time.
*/

let friends = ["Hafiz", "Awais", "Zeeshan", "Talha"]
// for in loop used to itrate one by one through the given array
for (let x in friends) {
  console.log(friends[x])
}

/** Task 12: Greetings: Start with the array you used in Exercise 11, 
 * but instead of just printing each person’s name, print a message to them.
 *  The text of each message should be the same, 
 * but each message should be personalized with the person’s name. */
// array of friends already decleared in task 11.
for (let x in friends) {
  let greetings = ` Hello ${friends[x]}, Welcome to the Future.`
  console.log(greetings)
}

/** Task 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 *  and make a list that stores several examples. Use your list to print a series of statements about these items, 
 * such as “I would like to own a Honda motorcycle.”
 */
let myFavTransports = ["Honda Bike", "Jeep", "Ship"]

console.log(`I like to ride ${myFavTransports[0]}.`)
console.log(`I love to travel on a ${myFavTransports[1]} through the northern areas.`)
console.log(`I have a plan to buy a ${myFavTransports[2]}.`)