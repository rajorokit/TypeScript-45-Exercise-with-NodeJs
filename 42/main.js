/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
Call show_magicians() to see that the list has actually been modified.*/
// Define the function to show magician names
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to make magicians great through .map() it wil modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "The Great ".concat(name); });
}
//Define an array of magician names
var magician_names = ["Harry Potal", "Hasnain", "Hiba"];
//Call make great function to modify magicians names
var great_magician = make_great(magician_names);
//Call show_magicians that show modified list of magicians
show_magicians(great_magician);
