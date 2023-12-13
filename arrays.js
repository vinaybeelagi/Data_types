// There are two syntaxes for creating an empty array:
// let arr = new Array();
// let arr = [];

let fruits = ["apple","orange","plum"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// We can replace an element:
fruits[2] = "pear";
console.log(fruits);
// add a new one to the array:
fruits[3] = "lemon";
console.log(fruits); //[ 'apple', 'orange', 'pear', 'lemon' ]
