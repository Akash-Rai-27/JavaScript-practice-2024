 // todo to learn javaScript learn 2 things ----1> Object ----2> Event

 /*
* we can declare object by 2 ways
* 1> literal
* 2> constructor

only difference is of singleton , both ways are same.

* when we create object using constructor it makes a singleton object 
* i.e only one object of its type

todo---> to remember just in <--interview--->

! singleton --> when we declare object as literals it doesnot make singleton

! constructor always make singleton

 */
// * object.create ---> constructor method --> gives singleton


// ? Object literals

const userJs = {
    name:"skyworld",
//! key : value
//* by default name is string--> we dont have to declare it, it just internalyl works and we can assign any value or data type to a key

    age:18,
    location:"Delhi",
    email:"sku@gamil.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]

};

// console.log(userJs.name); //* this is not a better way to access the object

// square 
// console.log(userJs["location"]); // ? better ways, as key are string internally and if someone wrote key using double quote --->" location" we cant access this using dot operator
// const nestedObject = {
//     outer: {
//       inner: {
//         value: "nested value"
//       }
//     }
//   };

// * using for nested arrays
// console.log(nestedObject["outer"]["inner"]["value"]);
// console.log(nestedObject.outer.inner.value);


/*
 ! how to use Symbol data type in object and  make it a key and access it --> (interview Ques)

*/

const mysym = Symbol("key1");

// we cant directly declare Symbol as key like --> mysym = "i am value" ---> if doing this it is store a string in datatype

/*
console.log(myObj.mysym); // ! it will print i am value but it will a string not Symbol data type

console.log(typeof myObj.mysym); // ! will give string
 
* to use it as Symbol declare in square bracket--->
[mysym] :"i am value",
 */

const myObj = {
    name: "batman",
    [mysym]: 'bat-sign', // correct way
    age:30,
    power: "super super rich rich",
    location: "Gotham",

};

// console.log(myObj[mysym]);
// console.log(typeof myObj[mysym]);
// console.log(myObj);

/*
 ! learning explore
const mySymbol = Symbol();
const myObject = {
    [mySymbol]:"Hello world",
};

console.log(myObject[mySymbol]);

 */

userJs.email = "antman here";

// Object.freeze(userJs); // ! used to lock the values of an object

userJs.email = "power ";
// console.log(userJs["email"]);

// add function in object
// in JS function can be treated as variables

userJs.greeting = function(){
    console.log("Hello i am function");
}



console.log(userJs.greeting); // * --> function is not executed, it is giving function reference only
console.log(userJs.greeting()); // * --> exectue the function


userJs.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // ! use 'this' key word to reference the same object 
}
console.log(userJs.greetingTwo());