/*
* Function
* some codes in a package --> and we can take that package anywhere and many time 


*/

function skyName(){
    console.log("i am a function");
}

/*
! --> skyName ----> this is refernece of the function
! --> skyName() ----> this is execute of the function --> parentheses gives us execution 
 */
// skyName();



// function addTwoNumbers(number1 , number2){
//     console.log(number1 + number2);
// }

/*

* Parameters --> where you make defination of function --->addTwoNumbers(number1, number2) --> 
* (number1,number2) --> parameters
* Arguments --> when we call the function the value passed in it is called arguments
* addTwoNumbers(5,5); --> arguments -->(5,5);

*/

// addTwoNumbers(2,2); // ? here (2,2) --> is known as ARGUMENT
/*
* addTwoNumbers(3,null); --> 3
* addTwoNumbers(3,"a"); --> 3a   bocoz there is no type checking so its important to type check before using operators
*/
// const result = addTwoNumbers(4,5);
// console.log(result); // ! --> this is give us undefined bocz the function is not returing anything it just simpling printing a value

function addTwoNumbers(number1, number2){

    return number1+ number2 // ! we can do this also 
    // let result = number1+number2;
    // return result; // ? after return nothing is accessable or implement
    // console.log("this will not be printed")
}

const result = addTwoNumbers(5,5);
// console.log(result); // * --> this will now have a value which is store as the function return some value

// function loginUserMessage(username){
//     return `${username} just logged in !!!!!!`;
// }
// loginUserMessage("Batman"); // -->  this function will execute and function will return a value but we did not say anything like store or print the value so in console we dont see anything

// console.log(loginUserMessage("Batman"));
// console.log(loginUserMessage("")); // ! INTERVIEW QUES
// todo --> when we dont pass any value/argument this function will return <-------- U N D E F I N E D ---->  can handle using type-checking

// function loginUserMessage(username){
//     if(username === undefined){ // ? type-checking using if -->  can also write ---> if(!username){}
//         console.log("Please enter a username ");
//         return; // ! --> this return will end the function here only next lines will not be executed
//     }
//     return `${username} just logged in !!!!!!`;
// }

// console.log(loginUserMessage());


// ! USING DEFAULT VALUE

function loginUserMessage(username ="default batman"){
    if(username === undefined){ 
        console.log("Please enter a username ");
        return; 
    }
    return `${username} just logged in !!!!!!`;
}

console.log(loginUserMessage());
console.log(loginUserMessage("FBI")); // this will override the default value;


