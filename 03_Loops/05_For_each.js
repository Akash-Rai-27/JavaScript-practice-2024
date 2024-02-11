const coding = ["js","ruby","java","python","cpp"]
//! for each loop
// coding.forEach( function (item) { //? for each loop take a call back function
//     console.log(item);
// })

// ? using arrow function

// coding.forEach( (item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe); // we just have to give reference and not execute it


// coding.forEach(printMe()) ---> this is call execution that is using -->() -->this

// coding.forEach( (item, index, arr)=>{ // * we can have item, array index ,and arr accesses
//     console.log(item, index, arr);
// })


//* objects in array -- for each loop

const myCoding = [
    {
        languageName: "javascript",
        languageFileName:"js"
    },
    {
        languageName: "java",
        languageFileName:"java"
    },
    {
        languageName: "python",
        languageFileName:"py"
    }
]
myCoding.forEach( (item)=>{
    console.log(item.languageName);
})