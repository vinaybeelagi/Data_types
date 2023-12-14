// // Initial array
// let arr = [2, 4, 6, 8, 10];

// // Using slice to create a new array arr2 from index 1 (inclusive) to index 2 (exclusive)
// let arr2 = arr.slice(1, 2);

// // Output the original array and the sliced array
// console.log(arr);  // Output: [2, 4, 6, 8, 10]
// console.log(arr2); // Output: [4]

// // Using splice to remove elements from index 0 to 2 and add elements 11 and 12 at the same positions
// let arr3 = arr.splice(0, 2, 11, 12);

// // Output the modified array and the removed elements
// console.log(arr);  // Output: [11, 12, 6, 8, 10]
// console.log(arr3); // Output: [2, 4]

// // array concat
// let num = [1,2];
// let num1 =num.concat([3,4]);
// console.log(num1);
// let num2 = num.concat([3,4],5,6);
// console.log(num2);

// let num3 = [1,2];
// let arraylike = {0:"some",length:"1"};
// let num4 = (num3.concat(arraylike));
// console.log(num4);

// // forEach() method:
// ["cat","fish","horse"].forEach(alert);
// ["cat","fish","horse"].forEach((item,index,array)=>{
//     alert(`${item} is at index${index} in ${array}`);
// });

// indexOf/lastIndexOf and includes
// let arr5 = [1,0,false];
// console.log(arr5.indexOf(0));
// console.log(arr5.indexOf(false));
// console.log(arr5.indexOf(null));

// console.log(arr5.includes(1));

// // find and findIndex/findLastIndex
// let users = [
//     {id:1,name:"peter"},
//     {id:2,name:"jony"},
//     {id:3, name:"kate"},
//     {id:1,name:"peter"}

// ];
// let user = users.find(item => item.id == 1);
// console.log(user.name);

// let user1 = users.findIndex(user1 => user1.name === "peter");
// console.log(user1);

// let user3 = users.findIndex(user3 => user3.name === "kate");
// console.log(user3);

// let user2 = users.findLastIndex(user2 => user2.name === "peter");
// console.log(user2);

// map and filter method
// const numbers = [1,2,3,4];
// const doubled = numbers.map(item => item*2);
// console.log(doubled);

// let str = ["venu","rocker","petel"]
// let length = str.map(item => item.length);
// console.log(length);

// const num = [1,2,3,4];
// const evens = num.filter(i=>i%2===0);
// console.log(evens);

// const students = [
//     {name:"aaru",grade:95},
//     {name:"viraj",grade:99},
//     {name:"raghu",grade:82},
//     {name:"john",grade:52}
// ];
// const studentGrades = students.filter(student => student.grade>=90);
// console.log(studentGrades);

// Task-Translate border-left-width to borderLeftWidth
// function camelize(str){
//     return str.split('-')
//     .map((word,index) => index === 0 ? word : word[0].toUpperCase()+ word.slice(1))
//     .join('');
// }
// console.log(camelize("my-short-string" ));

// // task-Filter range
// function filterRange(arr,a,b){
//     return arr.filter (i => (a <= i && i<= b));
// }
// let arr = [5,3,8,1];
// let filtered = filterRange(arr, 1, 4);
// console.log( filtered ); 
// console.log(arr);

//Task-Filter range "in place"
// function filterRangeInPlace(arr, a, b) {
//    for(let i=0;i<arr.length;i++){
//     let val = arr[i];   
//    if (val < a || val > b) {
//     arr.splice(i,1);
//     i--;
//    }
// }
// }
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4);
//   console.log(arr); // Output: [3, 1]
  
// Task-Sort in decreasing order
// let arr = [5,2,1,-10,8];
// arr.sort((a,b) => b-a);
// console.log(arr);

// task-Copy and sort array
// function copySorted(arr){
//     return arr.slice().sort();
// }
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// console.log(sorted);
// console.log(arr);  
// // another method
// function copySort(arr1){
//     return [...arr1].sort();
// }
// let arr1 = ["HTML", "JavaScript", "CSS"];
// let sort = copySort(arr1);
// console.log(sort);
// console.log(arr1); 

// Task -Map to names:
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];
//  let names = users.map(item => item.name);
// console.log(names);

// Task-Map to objects
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];
let usersMapped = users.map(user =>({
    fullName : `${user.name} ${user.surname}`,
    id: user.id
}));
console.log(usersMapped[0].id);
console.log(usersMapped[0].fullName);