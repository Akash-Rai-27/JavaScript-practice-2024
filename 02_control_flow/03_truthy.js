// todo --->  Truthy and falsy 
//! when we asssume something is true --> truthy value

const userEmail = "sku@gmail.com"; // true
// const userEmail = ""; // false --> (empty string)
// const userEmail = "[]; // true --> (empty array)

/*

* Falsy values
fasle, 0, -0, BigInt 0n, "", null. undefined, NaN
? except above mention, All are truthy value

* Truthy value
"0", "false", " ", [], {}, function(){} --> empty function , 


*/

// if(userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Dont have user email");
// }

// const userArr = []; // ? --> check the array for empty
// if(userArr.length === 0){
//     console.log("Array is empty");
// }

// const emptyObj = {} // ? ---> check the object for empty
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }

/*
false == 0 ---> returns true
false == '' ---> returns true
0 == '' ---> returns true

*/
// * Logical operator
// && , ||

//!  Nullish  Coalescing Operator (??) :null undefined
let val1;
// val1 = 5 ?? 10; //? here assign value is 5
val1 = null ?? 10; //? here assign value is 10
// ! act as a safty check for null and undefined
// val1= undefined ?? 13;
val1 = null ?? 10 ?? 20; //? here assign value is 10
// ? which ever value it gets first it assign it


// console.log(val1);
/*
sometime we get data from database and it can be null or undefined , which futher declaration of it can ruin or throw errors 
to avoid that, we use this 
it take first value if its not null or undefined and second if the value comes null or undefined

*/

// ! Terniary Operator
 // condition ? true : false ;
const iceTeaPrice = 10;
iceTeaPrice >= 80 ? console.log("more or equal to 80"):console.log("less than 80");;

