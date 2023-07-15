//Tuesday 11 July 2023
/** Task 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would
you invite? Make a list that includes at least three people you’d like to invite to
dinner. Then use your list to print a message to each person, inviting them to
dinner.
 */
let guestList = ["Brother Umair", "Uncle Johns", "Miss Kathie"]
// create a function
function invitationText(index: String) {
  console.log(`Hello ${index}!  I am arranging a dinner party tonight. It will be my pleasure if you can come over and have dinner with us. Thanks`)

}
// passing function to foreach
guestList.forEach(invitationText)

// using foreach 
guestList.forEach(function (string) {
  console.log(`Hello ${string}!  I am arranging a dinner party tonight. It will be my pleasure if you can come over and have dinner with us. Thanks`)
})
console.log("\n using for loop \n")
// using for loop 
for (var i = 0; i < guestList.length; i++) {
  console.log(`Hello ${guestList[i]}!  I am arranging a dinner party tonight. It will be my pleasure if you can come over and have dinner with us. Thanks`)
}

/** Task 15:Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.
Start with your program from Exercise 14. Add a print statement at the end of your
program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of
the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list
 * 
 */
console.log("\nMiss Kathie cannot come so replacing her name with Mr. Ali's name\n")

//replcement
function replaceGuest(guests: Array<string>, oldGuest: string, newGuest: string): Array<string> {
  const index = guests.indexOf(oldGuest)
  if (index > -1) {
    guests.splice(index, 1)
    guests.push(newGuest)

  }
  return guests

}
console.log(replaceGuest(guestList, "Miss Kathie", "Mr. Ali"))
//new invitation list
guestList.forEach(invitationText)

/** Task 16: More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. 
  Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in
your list.
 * 
 */
console.log("New announcement: Hello friends I have found a bigger dining table. Hurray!!!")

//additional guest list
let moreGuestList = ["Khalid", "Imran", "Faizan"]
//addding in starting of list usingunshift()
guestList.unshift(moreGuestList[0])
console.log("adding in the start", guestList)
// adding in the middle at index of 2 using splice()
guestList.splice(2, 0, moreGuestList[1])
console.log("adding in the mid", guestList)
// adding at the end usinf push()
guestList.push(moreGuestList[2])
console.log("adding at the end", guestList)

guestList.forEach(invitationText)

/** Task 17: 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in
time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying
that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them
know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re
still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to
make sure you actually have an empty list at the end of your program.
 * 
 */
console.log("Attention!!! I am sorry But I can invite only two people.")
for (i; guestList.length > 2; i++) {
  console.log(`Sorry ${guestList.pop()} you can’t invite them to dinner`)
}
guestList.forEach(invitationText)
// remaining guests
console.log("last two remaining names", guestList)

// removing all guest and print empty list
while (guestList.length != 0) {
  guestList.shift()
  console.log(guestList)
}

/** Task 18: 18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
*/
let places = ["Mecca", "Madina", "Qatar", "Germany", "Turkey"]

//• Print your array in its original order.

console.log("Original Order of array: ", places)

// Print your array in alphabetical order without modifying the actual list.
let sortedListOfPlaces = [...places].sort()
function sortarray(arr: Array<string>): Array<string> {
  let array = arr.sort()
  return array
}
console.log("sorted array in alphabetic order", sortedListOfPlaces)

// • Show that your array is still in its original order by printing it.
console.log("\n First Array is Still Original Order: ", places)

// • Print your array in reverse alphabetical order without changing the order of the
// original list.
let reverseOrderList = [...places].reverse()
console.log("\n reverse alphbetic order", reverseOrderList)
// • Show that your array is still in its original order by printing it again.
console.log("\n First Array is Still Original Order: ", places)
// • Reverse the order of your list. Print the array to show that its order has changed.
let revereseOriginalList = places.reverse()
console.log("\n Reverse Order List", revereseOriginalList)
// • Reverse the order of your list again.Print the list to show it’s back to its original order.
let againReverseList = revereseOriginalList.reverse()
console.log("\n Again Reverse Order List to get the Orgional form", againReverseList)
// • Sort your array so it’s stored in alphabetical order.Print the array to show that its order
// has been changed.
let sortedArray = places.sort()
console.log("Sorted Arry", sortedArray)
// • Sort to change your array so it’s stored in reverse alphabetical order.Print the list to
// show that its order has changed
let reverseArray = places.reverse()
console.log("Reverse Array", reverseArray)
//   *
//  * /


// Task 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18,
// print a message indicating the number of people you are inviting to dinner.
function guestCount(invitedGuests: Array<string>) {
  let message = `\n\t we are inviting ${invitedGuests.length} guests for dinner.`
  console.log(message)
}

guestCount(guestList)
