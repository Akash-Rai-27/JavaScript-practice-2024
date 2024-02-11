// control flow - logic flow

/*

if(true){
    execute
}

if(false){
    doesnt execute
}

* comparisions
> , < , <=, >=, ==, !=, ===. !==, 
*/

// const isUserLogged  = "true"

// if(isUserLogged){

// }

// const score =200;
// if(score >100){ // ! <---------- this curly braces represent a diff scope --- a block of scope
//     const power = "fly"
//     console.log(`User power: ${power}`); 
// }

// console.log(`User power: ${power}`); 

//? short hand notation
// const balaance =1000;
// if(balaance >500) console.log("test"); //! -->this is called implecit scope --> means we assume it is a scope , it is written in one line

// if(balaance >500) console.log("test"),console.log("test2"); // todo --> we can write like this using the commas(,) and both have same scope but it is not a good practise to write like this--- dont use it 


// * ---> NESTING

// const balance =1000;
// if(balance<500){
//     console.log("less than 500");
// } else if(balance <750){
//     console.log("less than 750");
// }else if(balance <900){
//     console.log("less than 750");
// } else {
//     console.log("less than 1300");
// }

// ? real life example

// const userLoggedIn = true;
// const debitCard = true;

// if(userLoggedIn && debitCard){
//     console.log("Allow to buy course");
// }

// const loggedFromGoogle = false;
// const loggedFromEmail = true;

// if(loggedFromGoogle || loggedFromEmail){
//     console.log("user logged in");
// }

