const promiseOne = new Promise(function(resolve,reject){
    //? new key give us a new instant of the object
    // do a async task
    // DB calls, ceryptography . newtwork
    setTimeout(function(){
        console.log('async task is complete');
        resolve();
    },1000)
});


// .then is connected to resolve 
promiseOne.then(function(){
    console.log("promise consumed");
})


// another way

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai",email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"sky",password:"123"})
        }
        else{
            reject('Error something went batway')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("the promise either resolved or rejected"));

//todo <----------- --------- async wait
//async wait ---> similar to .then().catch() tpye---> it waits sometimes for the work to execute ---and if that work execute then only it moves forward other wise not and will give error that place only.
// we dont handle catch  gracefully-- much in this
// but its imp bocz we need it many places like database ---> if our database is not connected we dont need to move forward : there it helps

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            
            resolve({username: "javascript",password:"1234"});
        }
        else{
            reject("ERROR: JS went wrong")
        }
    },1000)
});

async function consumePromiseFive(){
    // const response = await promiseFive;
    // promise is a object so we dont -----> 
    // const response = await promiseFive(); --> wrong
    // console.log(response);----> this will give error as we didnt handle the error

    // ? new way
    // here we handle the error gracefully
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }

}
consumePromiseFive();

//
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("Error in getting data :",error);
//     }
// }
// getAllUsers();

// using with then() catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("errror in bat way: ",error);
})
.finally(function(){
    console.log("tasked is completed ");
})