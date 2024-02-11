const arr = [0, 1, 2, 3, 4];
// * -->  shallow copy and deep copy
/*
* -->  can store same or diff datatype 
// TODO
--> JS arrays are resizable and mix data types
--> zero indexed
! ! ! JS array-copy create shallow copies
javascript object --> create shallow copies
 todo < Shallow copy > -->A shallow copy of an object is a copy whose properties share the same references 

 todo < Deep copy > --> A deep copy of an object is a copy whose properties do not share the same references

*/ 

console.log(arr[0]);
// declaring arr by other ways methods
const myHeros = ["batman","spiderman"];

const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr2);


// Methods
myArr2.push(88); // ! add a element into the array at the last
myArr2.push(99); 
// console.log(myArr.push(40)); // ? --> push method alos return new length
// console.log(myArr2); 
myArr2.pop(); // ! remove a element from the last
myArr2.pop();
// console.log(myArr2.pop()); //? --> returns the element which is removed
// console.log(myArr2);

myArr2.unshift(11); // todo--> add a element at the front of array shifitng all the elemnets by one ; Time comsuming if elements in the array very much; can create load on computer;
console.log(myArr2);

myArr2.shift();
// todo --> remove the first element from the front of the array;
// console.log(myArr2);
// console.log(myArr2.shift()); // returns the element which is removed

// console.log(myArr2.includes(3)); // * return a boolean
// console.log(myArr2.indexOf(6)); 

const newArr = myArr2.join() // * --> join all elements in the array seperated by any string passed or default by commas --> returns a string ;
// console.log(newArr); 

// ! slice , splice ---> ** Interview question **


console.log("Printing normal array:\n",myArr2);
console.log("using slice: ",myArr2.slice(0,3),"\nnow the arr :",myArr2);
console.log("using splice: ",myArr2.splice(0,2),"\nnow the array:",myArr2);


// ? --> splice returns the elements which are removed from the array 
// ? --> it is a method which is performed on the array and it changes the array
// ? --> where as slice returns a copy of array on which the method is performed
