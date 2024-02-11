const myObject = {
    js:'javaScript',
    cpp:'C++',
    rb:"ruby",
    swift:"swift"
}
// as we cant use for of loop in object we use for in loop 
//! for in loop
// for (const key in myObject) {
//     console.log(key); // -->will only give keys
// }

// for (const key in myObject) {
//     console.log(myObject[key]); // values of keys
// }
for (const key in myObject) {
    // console.log(`${key} --> shorcut is for ${myObject[key]}`); // values of keys
}

// * for in loops using array
const programming = ["js","rb","py","java","cpp"]
for (const key in programming) {
    // console.log(key); // it will give the keys of array ---
}
/*
key of array start from 0 and by default it is number only

but in object we can set the keys by us

    0
    1
    2
    3
    4
*/

for (const key in programming) {
    // console.log(programming[key]); 
}


//! for in loop in Map

const map = new Map()
map.set('IN',"India");
map.set("USA","United States of America");
map.set("FR","France");

for (const key in map) {
    // console.log(key); // * this will give nothing because map is not iterable 
}