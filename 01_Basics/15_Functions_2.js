// how many more different type of parameter we can be passed in function

//* when we not dont know how many arguments are gonna come --> like shopping cart

/*
? --> to solve this we have < rest operator > --> ...num1
?  ---> ... this 3 dots are called rest and spread operator 
? use case define them if its rest or spread
? --> REST ---> all the element spearated ---> pack it into a bundle and return an array 

[ 300, 400, 800, 1200 ]

*/

// function calculateCartPrice(...num1){
//     return num1
// }

// console.log(calculateCartPrice(300, 400, 800, 1200));


function calculateCartPrice( val1,val2,...num1){
    return num1
}
/*
val1 = 300
val2 = 400
rest are into num1 --> as rest operator --> ...num1;
[ 800, 1200 ]
*/
// console.log(calculateCartPrice(300, 400, 800, 1200));

const user = {
    username: "Dead-Pool",
    price: 199
}

// ! ---> how this object is passed and used in a function

function handleObject(anyObject){
    console.log(`usename is ${anyObject.username} and price is ${anyObject.price}`); 
}
// handleObject(user);
// ? --> we can pass an object directly, by creating it into it 
// handleObject({
//     username:"batty",
//     price:559
// })

// ! passing an array into function

const myNewArray = [200, 400, 500, 600];
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
