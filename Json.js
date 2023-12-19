// JSON.stringify to convert objects into JSON.
const student = {
    name:"gibs",
    age:34,
    isAdmin:false,
    courses:["html","css","js"],
    spouse:null
};
let json  = JSON.stringify(student);
console.log(typeof json);
console.log(json);