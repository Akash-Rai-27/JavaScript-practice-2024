// dates
let myDate = new Date();
//? --> object of Date --named --> myDate
// console.log(typeof myDate); // ? --> Object
// console.log(myDate);
// console.log(myDate.toString()); //? --> string representation of date
// console.log(myDate.toDateString());//? --> return date as a sting
// console.log(myDate.toISOString());//? --> date in ISO
// console.log(myDate.toJSON());//? -->
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString()); //? -- your local date in string
// console.log(myDate.toLocaleTimeString());//? give ur local time in string

// let myCreatedDate = new Date(2023,0,23);
// let myCreatedDate = new Date(2023,0,23,4,30);
// let myCreatedDate = new Date("2023-02-14");
let myCreatedDate = new Date("02-14-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp); // millisecond
// console.log(myCreatedDate.getTime()); // millisecond

// console.log(Math.floor(Date.now()/1000)); //? --> convert milliseconds to seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());


