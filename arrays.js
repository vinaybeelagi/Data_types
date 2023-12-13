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
fruits2.name = "mark";
fruits2[999] = 5;
fruits2.age = 30;
fruits2[1]={};
fruits2[1].age = 25;
console.log(fruits2);

// pass by reference
let car = ["BMW"]
let vehicle = car;
console.log(car === vehicle);
vehicle.push("audi");
console.log(car);

let fruits3 = ["apple","banana","kiwi"];
for (let fruit of fruits3) {
    console.log(fruit)
}

//array length
let arr2 = [1,2,3,4,5];
arr2.length = 2;
console.log(arr2);
arr2.length = 5
console.log(arr2[3]);

// multidimensional arrays
let matrix = [
    [1,2,3,4],
    [4,5,6,2],
    [7,8,3,8]
];
console.log(matrix[1][2]);

// task-Is array copied?
let fruits5 = ["Apples", "Pear", "Orange"];

let shoppingCart = fruits5;

shoppingCart.push("Banana");

console.log( fruits5.length ); // 4

// task-Array operations.
let styles = ["Jazz","Blue"];
console.log(styles);

styles.push ("Rock-n-Roll");
console.log(styles);

styles[Math.floor(styles.length-1)/2]="Classics";
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Rap","Reggae");
console.log(styles);

// task-Calling in an array context
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // a,b,function(){...}

