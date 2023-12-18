// 
let obj = {name:"david"};
let arr = [obj];
obj = null;
console.log(obj);
console.log(arr);//occupies memory and may not be garbage collected.

// WeakMap
let weakMap = new WeakMap();

let obj1 = {};

weakMap.set(obj1, "ok"); // works fine (object key)
console.log(weakMap);
// can't use a string as the key
// weakMap.set("test", "Whoops");

//task-Store "unread" flags
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let readMessages = new WeakSet();
  
  // two messages have been read
  readMessages.add(messages[0]);
  readMessages.add(messages[1]);
  // readMessages has 2 elements
  
  // ...let's read the first message again!
  readMessages.add(messages[0]);
  // readMessages still has 2 unique elements
  
  // answer: was the message[0] read?
  console.log("Read message 0: " + readMessages.has(messages[0])); // true
  
  messages.shift();