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
