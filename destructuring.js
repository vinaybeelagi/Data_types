// Array destructuring
let arr = ["viraj", "beelagi"]
let [firstName,surname] = arr;
console.log(firstName);
console.log(surname);

let [firstName1,surname1] = "viraj beelagi".split(' ');
console.log(firstName1);
console.log(surname1);

const numbers = [1,2,3,4,5];
const [first,second,third] = numbers;
console.log(first);

const [one, , three]=numbers;
console.log(one,three);

//rest operator
const [head, ...rest] = numbers;
console.log(head);
console.log(rest);

// object destructuring
const person = {name:'aaru',age:4,city:'dwd'};
const{name,age} =person;
console.log(name);
console.log(age);

//varible renmaing
const{name:personName,age:personAge} =person;
console.log(personName,personAge);

const{country = 'usa'} = person;
console.log(country);

const student = {details:{name:'Alice',age:26}};
const {details:{name:studentName,age:studentAge}}=student;
console.log(studentName,studentAge);

//Looping with .entries()
let user = {
    name : "rohit",
    age:38
};
for(let [key, value] of Object.entries(user)){
    console.log(`${key}:${value}`);
}

