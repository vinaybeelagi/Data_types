// There are two syntaxes for creating an empty array:
// let arr = new Array();
// let arr = [];

// let fruits = ["apple","orange","plum"];
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// We can replace an element:
// fruits[2] = "pear";
// console.log(fruits);
// // add a new one to the array:
// fruits[3] = "lemon";
// console.log(fruits); //[ 'apple', 'orange', 'pear', 'lemon' ]
// // An array can store elements of any type.
// let arr1 = ["apple",{name:'john'},true,function(){console.log('hello')}];
// console.log(arr1[1].name);
// console.log(arr1[3]());

// Get last elements with “at”
let fruits = ["apple","orange","plum"];
console.log(fruits[fruits.length-1]);
console.log(fruits.at(-1));
console.log(fruits.at(-2));
console.log(fruits.pop());
console.log(fruits);
fruits.push("pear");
console.log(fruits);
console.log(fruits.shift());
console.log(fruits);
fruits.unshift("apple","lemon");
console.log(fruits);

// internals
let fruits2 = [];
fruits2[999] = 5;
fruits2.age = 30;
console.log(fruits2);



