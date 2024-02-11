// ? using constructor --> singleton

/*
* const tinderUser = new Object();

 both are same but the difference it 
! this create a singleton : This is a singleton object ---> interview

* const tinderUser = {};

! this is will  not create a singleton : This is a non singleton object --> interview
 
*/

const tinderUser ={};
tinderUser.id = "12Tid";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// todo NESTED OBJECT --> Object inside object

const regularUser = {
    email:"fly@space22",
    fullName: {
        userfullname:{
            firstName:"Bruce",
            lastName:"Wane",
        },
    },
}
//  ! accessing the nested values
// console.log(regularUser.fullName.userfullname.firstName);

// ! merge object
const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {1:"a",2:"b",3:"c"};
const obj3 = {1:"a",2:"b",3:"c"};
const objectComb = {obj1 ,obj2} //* -->returns a object having two object obj1 , obj2 inside it
// creates nested object
 /*
 {
  obj1: { '1': 'a', '2': 'b', '3': 'c' },
  obj2: { '1': 'a', '2': 'b', '3': 'c' }
}
  */
// console.log(objectComb);

// const objectMain = Object.assign({},obj1,obj2,obj3);
// ? --> merge all three object into one 
//? --> first one is target --> {} in which all the other objects are merged and return as a single object

// ! Using spread method 

const objectMain = {...obj1, ...obj2, ...obj3};

// console.log(objectMain);

// ! when we get data from database --> we get in form of <---- arrays of object ---->

const users = [
    {
        id: 1,
        email :"f@gamil.com",
    },
    {
        id: 2,
        email :"g@gamil.com",
    },
    {
        id: 3,
        email :"h@gamil.com",
    },
]
// console.log(users[2].email);
// console.log(tinderUser);

// todo --> some more method we use in projects
// console.log(Object.keys(tinderUser)); 

//* --> return an object-array of all the keys of an object 
// *  AS its return type is array object we can use many methods on it --loops,etc;

// console.log(Object.values(tinderUser)); 

console.log(Object.entries(tinderUser));
// * Returns an array of key/values of  properties of an object
/*
[       key: value
    [ 'id', '12Tid' ], 
    [ 'name', 'Sammy' ],
    [ 'isLoggedIn', false ] 
]
*/
// ! retuns a boolean -->checking it this property exists in the object or not
console.log(tinderUser.hasOwnProperty('name'));

