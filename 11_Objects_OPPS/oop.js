
// in js object is base unit
 
// object is the object litral

// object litrals have collections and properties


const user = {
    username: "hitesh",
    loginCount : 8,
    signedIn : true,
    getUserDetails : function(){
        console.log("Get user details from database")
        // console.log(this); // current context -- function context 
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); // this will give empty object -- global object

// in broswer  'this' -- > this give a [window object] which is a global object 

// 'this' -- current context



// ------------- constructor function

/*

'new' -- constructor function 
- can make multiple instance from a single object


*/

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.logincount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}


const userOne = new User("Water", 12, true);
const userTwo = new User("Ocean", 122, false); // overwrites userone without new


console.log(userOne.constructor);
// console.log(userTwo);


/*
1. 'new' it create an empty object called instance

2. a construction fn is called due to 'new' keyword -- all the arguments are packed in it and give it to us

3. 'this' keyword is injected auto in the arguments

4. we get it all inside the fn


*/

