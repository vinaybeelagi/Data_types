//creation of map:
let map = new Map();
map.set('1','str1');
map.set(1,'num1');
map.set(true,'bool1');

console.log(map.get(1));
console.log(map.get('1'));
console.log(map.size);

const map1 = new Map();
map1.set('a',1);
map1.set('b',2);
map1.set('c',3);
console.log(map1.get('a'));
map1.set('a',97)
console.log(map1.get('a'));
console.log(map1.size);
map1.delete('b');
console.log(map1.size);
map1.set({user:"gyan",age:82},"marathon").set("key1","value1")
console.log(map1);

// Map can also use objects as keys
let john = {name:"john"};
let visitCountMap = new Map();
visitCountMap.set(john,123);
console.log(visitCountMap);
console.log(visitCountMap.get(john));
let team = {player:"virat"};
visitCountMap.set(team,98)
console.log(visitCountMap);
console.log(visitCountMap.get(team));

console.log(visitCountMap.has(team));

// clear() mehod
const map2 = new Map();
map2.set('bar','baz');
map2.set(1,'foo');
console.log(map2.size);
map2.clear();
console.log(map2.size);
// delete()
const map3 = new Map();
map3.set('bar','foo');
console.log(map3.delete('bar'));
console.log(map3.has('bar'));

//entries() method 
const map4 = new Map();
map4.set('0','foo');
map4.set(1,'bar');

const iterator1 = map4.entries();
console.log(map4.entries());
console.log(iterator1.next().value);
console.log(iterator1.next().value);
console.log(map4.get(1));

//Iteration over Map
let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
  ]);
  for (let vegetable of recipeMap.keys()){
    console.log(vegetable);
  }

  for(let amount of recipeMap.values()){
    console.log(amount);
  }
  for(let entry of recipeMap){
    console.log(entry);
  }

//forEach method
recipeMap.forEach((value,key,map) => {
  console.log(`${key}:${value}`)
})
//Object.fromEntries
let map6 = new Map();
map6.set('banana', 1);
map6.set('orange', 2);
map6.set('meat', 4);
let obj = Object.fromEntries(map6.entries());
console.log(obj)
console.log(obj.meat);