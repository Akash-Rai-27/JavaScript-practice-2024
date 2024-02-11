const mc_heros = ["thor","ironman","spiderman"];
const dc_heros = ["superman","batman","flash"];

// mc_heros.push(dc_heros);  
//* --> here it pushes the dc_hero array into mc_hero array creating a nested array ( array is collection of mix data tyes) 
// ! --> push add the element at the end of the array;
// ? [ 'thor', 'ironman', 'spiderman', [ 'superman', 'batman', 'flash' ] ]

// console.log(mc_heros);

const allHeros = mc_heros.concat(dc_heros); // ! METHOD --> 1
// console.log(allHeros);


const altHeros = [...mc_heros,...dc_heros]; // ! METHOD --> 2 ** Better **
// * this is know as spread method in JS --> take two or more array and spread it(drop it)
// console.log(altHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7[8,9,2,1]]];
const tempArr = another_array.flat(Infinity); // returns a flat array
// * create a single array flatting all -- we have to pass a depth i.e how many depth or inside the array has to be flaten, here we have pass Infinity 
// console.log(tempArr);

console.log(Array.isArray("akyworks")); //* return a boolean 
// The Array.isArray() static method determines whether the passed value is an Array.
console.log(Array.from("skyworld")); // * creates a array of passed value
console.log(Array.from({name:"skyruler"})); // ! intersting case
// ? you have to specific to make array from taking which values , keys or values ,if not it will return an empty array ; 

// console.log(Array.from(Object.values({name:"madharjaat placement cell"})))



// todo ----> Converting multiple variable into array

let score1 = 120;
let score2 = 140;
let score3 = 160;

console.log(Array.of(score1,score2,score3)); // * --> return a array from a set of  passed values