// * --> Immediately Inovked Function Expression (IIFE)
/*

to write a function and immediately evoke it/ execute it

e.g --> for database conection 
to avoid global scope pollution -- so we create a seperate function scope --> and immediately execute it
! --> interview --> what is iife 
! -->  global scope pollution create problems sometimes --- so to remove the global scope  variables/declaration pollution we use iife
! --> a function which executes immediately 


--> iife syntax -->  ()()
-> first parenthese () --> function defination
-> second parenthese () --> function call/exection call
 */

// --> iife -->  ()()

//! every method or line above it should have ended with semicolon or it will throw error
(function chai(){ // ? --> this is called name iife as it have name
    console.log(`DB connected --- batman coming`);
})(); // -->iife evokes but they dont know when to stop the context , so for this we have to end it or end that line --> so we use semi colon to end it ---putting it at the last

// in arrow func
// ( ()=>{
//     console.log(`this is batman-connecting`);
// })();
//! --> passing argument in iife
( (name)=>{
    console.log(`this is batman-connecting ${name}`);
})('sky');