//!  <-------  for of -------------->
// array specfic loops
// ["","",""]
// objects inside array
// [{},{},{}] // ?---> common object inside array and we have to get value inside the object which itself is inside array

const arr =[1,2,3,4,5];
// for of loop
// used for -- array, object, string 
for (const num of arr) {
    // console.log(num); // todo --> automatically get when to start and end
}
const greetings = "Hello world!";
for(const greet of greetings){
    // console.log(`each char is ${greet}`);
}

//! Maps //? --> unique values
/*
*<w3 school>
A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.

A Map has a property that represents the size of the map.

* <mdn> The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

*/
const map = new Map()
map.set('IN',"India");
map.set("USA","United States of America");
map.set("FR","France");
console.log(map);

// for(const key of map){
//     console.log(key); //? this will print every value along with values;
// }
for (const [key,value] of map) { // this is destructuring of map --> we use sq brackets destrc of key and value 
    console.log(key,":",value);
}

// using for of loop on object
const myObject = {
    'game1':'God of War',
    'game2':'Assassins cred'
}

// for(const [key,value] of myObject){
//     console.log(key,":",value); //? this will give error  --->TypeError: myObject is not iterable
// } // ? --> we cant do <for of loop> in object

