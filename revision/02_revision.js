// * declaring an array
// const myHeros =["bat","cat"]
// const myArr = new Array(1,2,3,4);
// console.log(myArr);
// const myArr = [1,2,3,4]
// myArr.push(30);
// myArr.push(45);
// myArr.push(78);

// console.log(myArr);

// myArr.pop();
// console.log(myArr.pop());

// myArr.unshift(11);
// myArr.unshift(12);
// myArr.unshift(1100);

// console.log(myArr);

// myArr.shift(); 
// console.log(myArr.shift()); // returns the element which is removed
// console.log(myArr);
// const newArr = myArr.join();
// // console.log( typeof newArr);

// //?  slice and splice
// console.log(`this is normal array: ${myArr}`);
// console.log(`this is using slice: ${myArr.slice(0,3)} arr : ${myArr}`);
// console.log(`this is using splice: ${myArr.splice(0,3)} arr : ${myArr}`);

// const mc_heros = ['jack sabka papa','oggy','bob','olivia']
// const dc_heros = ['mottu','pattlu','lambu','octopus']

// mc_heros.push(dc_heros);
// console.log(mc_heros);
// const all = mc_heros.concat(dc_heros);
// console.log(all);

// using spread method
// const allHeros = [...mc_heros, ...dc_heros];
// console.log(allHeros);
// const tempArr = [1,2,3,[4,5,6],7,[9,10,[30,40,50,[44,55,66]]]];
// const getArr = tempArr.flat(Infinity);
// console.log(typeof getArr);

// console.log(Array.isArray(getArr));
// console.log(Array.from("Chandigarh madarchod "));
// console.log(Array.from({name:"madharjaat placement"}))
// const obj = {
//     name:"skyworld",
//     ruler:"sky",
//     power:"infinity"
// }
// const fileArr = Array.from(Object.values(obj));
// console.log(fileArr)
// console.log(Array.from(Object.values({name:"madharjaat placement"})))

// let score1 =200;
// let score2 =400;
// let score3 =600;
// let score4 =200;

// console.log(Array.of(score1,score2,score3,score4));

// declation of arrays in two ways
// 1> literal
// 2> constructor

// const userData = {
//     name:"world of fire",
//     age:34,
//     anotherObj:{
//         againObj:{
//             name:"nothing so special"
//         }
//     }
// }
// console.log(userData["anotherObj"]["againObj"]["name"]);
// console.log(userData.anotherObj.againObj.name);

// const mysym = Symbol();
// const obj = {
//     name:"batman",
//     [mysym] : "HelloWorld"
// }
// console.log(obj[mysym])
// obj.name = "superman"
// console.log(obj)
// Object.freeze(obj);
// obj.name = "joker"
// console.log(obj)

// const userData ={
//     name:"batman",
//     id:124,
//     location:"gothom"
// }

// userData.greeting = function(){
//     console.log(`i am ${this.name} from universe ${this.id}`);
// }

// console.log(userData.greeting());

//? using constructor

//const tinderUser = new Object() // * --> this is object using constructor and this will create a singleton value

// const tinderUser = {};
// tinderUser.id = "1234";
// tinderUser.name = "flank"
// tinderUser.isLoggedIn= true;

// console.log(tinderUser)
// console.log(typeof tinderUser.id)

// ? merge object
// const obj1 = {1:'a',2:'b',3:'c',4:'d'};
// const obj2 = {4:'aa',5:'bb',6:'cc',7:'dd'};
// const obj3 = {8:'aaa',9:'bbb',10:'ccc',11:'ddd'};
// const obj4 = {12:'aaaa',13:'bbbb',14:'cccc',15:'dddd'};
// const objeCom = {obj1,obj2,obj3,obj4}
// const objeCom = Object.assign({},obj1,obj2,obj3,obj4);
// const objeCom = {...obj1, ...obj2, ...obj3, ...obj4};
// console.log(objeCom);


// arrays of object

// [{}, {}, {}, {}, {}]

// const users = [
//     {
//       id:1,
//       email:"v@gmail.com"  
//     },
//     {
//         id:2,
//         email:"n@gmail.com"  
//     },
//     {
//         id:3,
//         email:"b@gmail.com"  
//     }
// ]

// console.log(users[0].email);
// console.log(Object.keys(users));
// console.log(Object.values(users[0]));
// console.log(Object.entries(users[0]));

// console.log(users[0].hasOwnProperty("email"));

// ! object de-structuring
// const course = {
//     courseName : "go lang",
//     price: '999',
//     courseInstructor: "batman"
// }

// const {courseInstructor:who} = course;
// console.log(who);


// ! function

// function batman(){
//     console.log("i am batman");
// }
// batman()

// function addTwoNumbers(num1,num2){
//     return(num1+num2);
// }
// const result = addTwoNumbers(10,50);
// console.log(result);

// function calculateCartPrice(val1,val2,...num1){
//     return num1;
// }
// console.log(calculateCartPrice(200,300,400,500));

// const user = {
//     username : "Dead-pool",
//     price:188
// }

// function handleObject(anyObject){
//     console.log(`username is ${user.username} and price is ${user.price}`);
// }
// handleObject(user)

// {} --> this is scope
// let a = 39;
// if (true){
//     let a = 8;
//     const b = 7;
//     console.log("inner: ",a);
// }
// console.log("outer: ",a);

// function one(){
//     const userName = "sky";
//     function two(){
//         const website = "utube";
//         console.log(userName);
//     }
    // console.log(website);
//     two()
// }

// one();

// addOne(3)
// function addOne(num){
//     return num+1;
// }

// addTwo(44);
// const addTwo = function(num){
//     return num + 2;
// }


// const user = {
//     username: 'sky',
//     balance:800000000,

//     welcomeMeassage : function(){
//         console.log(`${this.username}, welcome to website`);
        // console.log(this);
//     }
// }

// user.welcomeMeassage();
// user.username = "batman"
// user.welcomeMeassage();
// console.log(this);

// function chai(){
//     console.log(this);
// }
// chai()

// const chai = () =>{
//     let userName = "KingKong";
//     console.log(this);
//     console.log(this.userName);
// }
// chai()
// const addOne = (num1, num2)=> (num1+num2);

// console.log(addOne(3,4));

// const addTwo = (num1, num2) =>({username:"hissssssss"})
// console.log(addTwo(2,3));

// ? iife --> immediately invoked function expression
// ()()
// (function chaiTry(){
//     console.log(`DB is connected---> batman listening`);
// })()
// console.log("here it comes");

// (function chai(){ // ? --> this is called name iife as it have name
//     console.log(`DB connected --- batman coming`);
// })();

// (()=>{
//     console.log(`spiderman coming for partyS`);
// })();
// ((name)=>{
//     console.log(`this is ${name}`);
// })("Ironman");

// switch(key){
//     case value:
//         break;
//     case value:
//         break;
//     default:
//         break;
// }

// ? truthy and falsy


// * falsy values
// false , 0 , -0, 0n, "", null, undefined, NaN

// * truthy value
// 0, false, " ", [], {}, function(){},

// terniary opertor

// condition ? true : false;
// const iceTeaPrice =2;
// iceTeaPrice>=10 ? console.log("i am chai") : console.log("i am batman");;

// ! for of 

// const arr = [1,2,3,4,5];
// for(const num of arr){
//     console.log(num);
// }
// const greet = "Hello world !";
// for(const item of greet){
//     console.log(item);
// }

// const map = new Map()
// map.set('IN','India');
// map.set('USA',"United");
// map.set('FR',"France");
// // console.log(map);

// for(const [key,value] of map){
//     console.log(key,":",value);
// }
// ? -- we cant use for of loop on object

//! for in loop
const myObject = {
    js:"javaScript",
    cpp:"C++",
    rb:"ruby",
    swift:"swift"
}
// for (const key in myObject){
//     console.log(myObject[key]);
// }

// const data = [1,2,3,4,5,6]
// for(const key in data){
//     console.log(key);
// }

// const map = new Map()
//     map.set("A","apple");
//     map.set("B","ball")
//     map.set("C","cat")
//     console.log(map);

//     for(const key in map){

//     }

//! for each loop
// const coding =["js","ruby","java","python","cpp"]
// coding.forEach( function(item) {
//     console.log(item);
// })

// coding.forEach( (item,index,arr)=>{
//     console.log(`value is ${item} its index ${index} of array ${arr}`);
// })

// const myCoding = [
//     {
//         languageName: "javascript",
//         languageFileName:"js"
//     },
//     {
//         languageName: "java",
//         languageFileName:"java"
//     },
//     {
//         languageName: "python",
//         languageFileName:"py"
//     }
// ]

// myCoding.forEach( (item) => {
//     console.log(item.languageFileName);
// })


// ! filter
const numbers = [1,2,3,4]

// const newNum = numbers.filter( (num)=> num<4);
// console.log(newNum);
// const mynum = numbers.map( (num)=> num+20).filter((num)=>num>25);
// console.log(mynum);

// const mytotal = numbers.reduce( (acc,currval)=>( acc + currval),0)
// console.log(mytotal);


