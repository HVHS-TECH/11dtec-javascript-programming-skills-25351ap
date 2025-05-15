var myVar = 0;
console.log("Start: "+myVar);

functionOne();
function functionOne() {
  myVar = 1;
  console.log("functionOne: "+myVar);
}

functionTwo();
function functionTwo() {
  var myVar = 2;
  console.log("functionTwo: "+myVar);
}

console.log("end: "+myVar);