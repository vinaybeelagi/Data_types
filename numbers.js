// Task-Sum numbers from the visitor
let a = +prompt("1st no.","");
let b = +prompt("2nd no.","");
alert (a+b);

//Task-Why 6.35.toFixed(1) == 6.3?
// QUESTION: In the similar example below, why is 6.35 rounded to 6.3, not 6.4?

// alert( 6.35.toFixed(1) ); // 6.3

alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4

// task-Repeat until the input is a number
function readNumber() {
    let num;
  
    do {
      num = prompt("Enter a number please?", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
  }
  
  alert(`Read: ${readNumber()}`);

// task-  An occasional infinite loop
//Question: This loop is infinite. It never ends. Why?
// let i = 0;
// while (i != 10) {
//   i += 0.2;
// }
// ANS:That’s because i would never equal 10.
let i = 0;
while (i < 11) {
  i += 0.2;
  if (i > 9.8 && i < 10.2) alert( i );
}