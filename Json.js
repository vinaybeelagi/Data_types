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

//   nested objects are supported and converted automatically
let meetup = {
  title: "Conference",
  room: {
    number: 23,
    participants: ["john", "ann"]
  }
};

console.log( JSON.stringify(meetup) );

// The important limitation: there must be no circular references.
let room = {
    number: 24
  };
  
  let meetup1 = {
    title: "Conference",
    participants: ["henry", "ann"]
  };
  
  meetup1.place = room; 
  console.log(meetup1)  ;    // meetup references room
  room.occupiedBy = meetup1; // room references meetup
  console.log(room);
  JSON.stringify(meetup); // Error: Converting circular structure to JSON

//   TASK-Turn the object into JSON and back
let user4 = {
    name: "John Smith",
    age: 35
  };
  console.log(JSON.stringify(user4));
  let user5 = JSON.parse(JSON.stringify(user4));
  console.log(user5);

//   task-
let room = {
    number: 23
  };
  
  let meetup2= {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
  };
  
  room.occupiedBy = meetup;
  meetup2.self = meetup2;
  
  alert( JSON.stringify(meetup2, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
  }));

