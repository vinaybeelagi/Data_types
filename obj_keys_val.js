// task:Sum the properties
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
    function sumSalaries(salaries){
    let sum = 0;
    let arr = Object.values(salaries)
    console.log(arr)
    for(let item of arr ){
sum += item;
    }
return sum;
  }
  console.log(sumSalaries(salaries));