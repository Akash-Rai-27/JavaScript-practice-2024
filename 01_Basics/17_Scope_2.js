// nested scope
function one(){
    const username = "sky";
    function two(){
        const website = "utube";
        // console.log(username);
    }
    // console.log(website); // ! --> can not access this
    two();
}

one();

// ! +++++++++++ interesting ++++++++++++++++
addOne(5); // --> No ERROR
function addOne(num){
    return num + 1;
}


addTwo(4); // ! --> this will give error
const addTwo = function(num){
    return num+2;
}
// todo ------> Hoisting concept  --> we cant access a function before declaration 
