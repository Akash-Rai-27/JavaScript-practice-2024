const myNums=[1,2,3,4];
// const mytotal = myNums.reduce( function (acc,currVal){
    // console.log(`acc: ${acc} and currVal: ${currVal}`)
//     return acc+ currVal
// },0)


// const mytotal = myNums.reduce( (acc,currVal)=>(acc+ currVal),0)


// console.log(mytotal);

const shoppingCart = [
    {
        itemName:"js course",
        price:2999
    },
    {
        itemName:"py course",
        price:999
    },
    {
        itemName:"mobile dev course",
        price:2999
    },
    {
        itemName:" data science ourse",
        price:2999
    }
]

const total = shoppingCart.reduce( (acc,item)=>(acc + item.price),0)
console.log(total);