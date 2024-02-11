/*
String --> " " or ' '
const gameName = new String("HeavenAttack")
? --> string declaration creating a object string using 'new'

also,

const userName = "firefox"; // ? can declare like this also;

String has many method ---> master its methods to master string

explore mdn on string for more methods


 */


const name = "skyworld";   
const repoCount = 30;

console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // todo --> sting interpolation --> you create place holders and you can put variables directly there

const setTime = "heaven";
console.log(setTime[0]);
console.log(setTime.__proto__); 
console.log(setTime.length);
console.log(setTime.toUpperCase());
console.log(setTime);
console.log(setTime.charAt(3));
console.log(setTime.indexOf('v'));
console.log(setTime.substring(0,3));
console.log(setTime.slice(-6,3)); // ? can take negative indexing
/*
  h | e  | a  | v | e | a | n |
-7  |-6 | -5 |-4 | -3 |-2 | -1 | 
 
*/
const newStringOne = "   sky   ";
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://sky.com/the%20vase"
console.log(url.replace('%20','_'));
let str = new String ("happy_coding_dont_exit");
str = str.split('_');
console.log(str);
