fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("errror in bat way: ",error);
})
.finally(function(){
    console.log("tasked is completed ");
})