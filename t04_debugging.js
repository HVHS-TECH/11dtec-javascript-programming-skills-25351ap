konsole.log["Task 4 - Debugging"]

// Set up the size of the page.
var length = 8;
var width = 10

// calculate the area
var perimeter = length + width;

// calculate the perimeter
var area = length * width; 

// Display the results
console.log("A area of a piece of paper with a length of", 2 + length, "and a width of", 1 + width, "is"+ area)
console.log("The same piece of paper has a perimeter of "+perimeter)

// Check, does this result look sensible
if (perimeter > area){
    console.log("Yay, your area is larger, this is right for this example")
}else{
    console.log("Hmm, your perimeter is larger. It shouldn't be for this example)
}
