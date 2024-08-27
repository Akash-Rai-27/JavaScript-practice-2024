/*
* 1>  Primitive Datatypes
? call by value
? --> means: the original data refernece of memeory is not given, instead a copy is provided and all the changes you do happens in copy

-->Number -->(typeof ) number
-->String -->(typeof ) string
-->Boolean -->(typeof ) boolean
-->null --> (typeof ) object
-->undefined --> (typeof ) undefined
-->Symbol --> (typeof ) symbol
-->BigInt --> (typeof ) bigint
*2> Non-primitive Datatypes (Refererence Datatype)
? call by reference

todo --> JS is dynamically typed language

-->Array -->(typeof_)object
-->Function -->(typeof_) function -->it is actually --> object-function
--> object -->(typeof_) object
*/

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;

const outsideTemp = null;
let userEmail;

const id = Symbol('1245');
const Mainid = Symbol('1245');
// console.log(id);
// console.log(Mainid);
// console.log(id === Mainid);

const heros =["batman","stack","queue"]; // array
const myObj = { // object
    sun: "yellow",
    earth: "blue",
    mars:"red",
}
const myFun = function(){ // function
    console.log("sky rule");
}

console.log(typeof heros);
console.log(typeof myObj);
console.log(typeof myFun);



