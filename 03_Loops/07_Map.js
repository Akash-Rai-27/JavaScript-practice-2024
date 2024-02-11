const myNumber = [1,2,3,4,5,6,7,8,9,10]
// const myNum = myNumber.map( (num)=> num+11);

// const myNum = myNumber.map().map().filter() // ! --> chaining  ---> means using two or more methods directly on one another

const myNum = myNumber
                    .map( (num)=> num * 10)
                    .map( (num)=> num+2)
                    .filter( (num)=> num>=60)

console.log(myNum);