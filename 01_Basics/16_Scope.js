// Scope 
//! {} --> this is scope
// ? in function , in if else ---> it is called scope, scope of that program, scope of that function,if_else scope

/*
{
    * inside curly --> it is block scope
}
* outside --> global scope

*/ 

let a = 300; //! --> global scope
if(true){
    let a = 10;
    const b = 30;
    console.log("INNER: ",a); // ! --> block scope 
}
console.log(a); 

// ! interview Ques  ---> scope in window web browser and scope in our code environment node, both are different 


