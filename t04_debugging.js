console.log("Running t04_degugging.js");

//calculate the perimeter
var perimeter = 36; 

//Set up the size of the page
var length = 8;
var width = 10;

//calculate the area
var area = length * width;

//Display the results
console.log("The area of a piece of paper with a length of", length, "and a width of", width, "is", area);
console.log("The same piece of paper has a perimeter of", perimeter);

//Check, does this result look sensible
if (perimeter < area){
    console.log("Yay, your area is larger, this is right for this example");
}else{
    console.log("Hmm, your perimeter is larger. It shouldn't be for this example");
}
