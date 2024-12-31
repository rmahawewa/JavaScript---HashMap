import Hashmap from "./script.js";
import Hashset from "./hashset.js";

const test = new Hashmap(0.75, 8);

let set1 = test.set('apple', 'red');
let set2 = test.set('banana', 'yellow');
let set3 = test.set('carrot', 'orange');
let set4 = test.set('dog', 'brown');
let set5 = test.set('elephant', 'gray');
let set6 = test.set('frog', 'green');
let set7 = test.set('grape', 'purple');
let set8 = test.set('hat', 'black');
let set9 = test.set('ice cream', 'white');
let set10 = test.set('jacket', 'blue');
let set11 = test.set('kite', 'pink');
let set12 = test.set('lion', 'golden');
let set14 = test.set('moon', 'silver')

// let set11 = test.set('a', 'b');
// let set12 = test.set('call', 'd');
// let set14 = test.set('eld', 'f');
// let set6 = test.set('a', 'b');
// let set7 = test.set('c', 'd');
// let set8 = test.set('e', 'f');



console.log(set1);
console.log(set2);
console.log(set3);
console.log(set4);
console.log(set5);
console.log(set6);
console.log(set7);
console.log(set8);
console.log(set9);
console.log(set10);
console.log(set11);
console.log(set12);
console.log(set14);
// console.log(12345);

let key = 'ice cream';

console.log("get key");
console.log(test.get(key));
console.log("has key");
console.log(test.has(key));
console.log("remove key");
console.log(test.remove(key));
console.log("length");
console.log(test.length());
// console.log("clear");
// console.log(test.clear());
console.log("keys");
console.log(test.keys());
console.log("values");
console.log(test.values());
console.log("entries");
console.log(test.entries());

let testnew = new Hashset(0.8, 8);

console.log(testnew.set("peach"));
console.log(testnew.set("peach"));