// Arrow function and 'this' keyword
//! this --> used to access the current context inside the scope.
const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        // console.log(this); //?  the current context --- the current values --> inside it the existed variables what are they holding
    }
}
// user.welcomeMessage();
// user.username = "Batman";
// user.welcomeMessage();
// console.log(this); // * {} --->empty object--> this gives current context empty
// ! bocz we are in node environment
// ! in node env --> this is refering to empty object bocz  till now there is no context in global
// todo ---> Interview <----
// todo ---> in browser the global object for 'this' is window -->i.e why we are able to capture all window event like ---> click, form submit

// +++++++++++++++++++ ARROW FUNCTION ++++++++++++++++++++++++
// function chai(){
//     console.log(this); //? gives many values
//     // console.log("give me chaii");
// }
// chai();


// function chai(){
//     let userName = "akash";
//     console.log(this.userName); //? undefined --> we cant use this in function like this ---> like we did in object
     // ! this info comes handy in DOM 
// }
// chai();

// const chai = function(){
//     let username = "batman";
//     console.log(this.username); //? --> undefined
// }
// chai();

const chai = ()=>{
    let userName = "kingkong-pingpong";
    console.log(this); // ? ---> give--> {}
    console.log(this.userName); // ? --> give --> undefined
}
// chai();

() =>{} // todo --> my basic arrow function
 // ! now we can hold this in variable --> basic arrow function 
// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// console.log(addTwo(3,4));

// ! implecit return --> remove {} and remove return --> means we dont have to write the return it assumes the return automatically when we have one line statement
// const addTwo = (num1, num2) => num1 + num2

//? --> we use parenthese instead of return
//? if we wrrap in {} --> we have to write return but using ---> () ---> we dont have to write return
// const addTwo = (num1, num2) => (num1 + num2) // todo ---> used many times in react
// console.log(addTwo(3,4));
// ! explecit return --> when we use 'return' keyword

// * --> OBJECT IN ARROW FUNCTION
// const addTwo = (num1, num2) =>(username:"hitesh") //? --> we cant return object like this --> to return object we have to wrrap it into {};
const addTwo = (num1, num2) =>({username:"hitesh"})

console.log(addTwo(2,2));


