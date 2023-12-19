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

// JSON is data-only language-independent specification, so some JavaScript-specific object properties are skipped by JSON.stringify
let user = {
    sayHi() { 
      alert("Hello");
    },
    [Symbol("id")]: 123, // ignored
    something: undefined // ignored
  };
  
  console.log( JSON.stringify(user) );