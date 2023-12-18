// 
let obj = {name:"david"};
let arr = [obj];
obj = null;
console.log(obj);
console.log(arr);//occupies memory and may not be garbage collected.