const score = 300;
// console.log(score);

const balance  = new Number(200);
// console.log(balance);

// console.log(balance.toString().length); // ? --> convert it into string
// const otherNumber = 123.8649;
// console.log(otherNumber.toPrecision(3)); // ? --> precise upto the given argument-- e.g--124 here

const bighundreds = 1000000;
// console.log(bighundreds.toLocaleString('en-IN'));

//? change it to local format which is by default is US fomat
// * we use --> 'en-IN' to set it in indian format
// ? -->  return a string


// ------------Maths--------------------

// console.log(Math); //! returns --> Object [Math] {} ---> typeof object
// console.log(Math.abs(-4)); //? ---> gives absolute value --> convert -ve into postive but not vice-versa

// console.log(Math.round(4.6));

// console.log(Math.ceil(4.2)); //? -->return the smallest int greater than or equal to the passed value;


// console.log(Math.floor(4.9)); //? --> return the greatest integer less than or equal to the passed value 
// console.log(Math.sqrt(49));
// console.log(Math.max(1,2,3,4))
// console.log(Math.min(1,2,3,4))


console.log(Math.random()); // generates a random number
console.log(Math.floor(Math.random()*10) + 1);

//! trick --> in certain range

const max = 30;
const min = 40;
const randomNumber = Math.floor(Math.random()*(max - min + 1) + min);
console.log(randomNumber);