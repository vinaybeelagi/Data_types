// Initial array
let arr = [2, 4, 6, 8, 10];

// Using slice to create a new array arr2 from index 1 (inclusive) to index 2 (exclusive)
let arr2 = arr.slice(1, 2);

// Output the original array and the sliced array
console.log(arr);  // Output: [2, 4, 6, 8, 10]
console.log(arr2); // Output: [4]

// Using splice to remove elements from index 0 to 2 and add elements 11 and 12 at the same positions
let arr3 = arr.splice(0, 2, 11, 12);

// Output the modified array and the removed elements
console.log(arr);  // Output: [11, 12, 6, 8, 10]
console.log(arr3); // Output: [2, 4]


