const clock = document.querySelector('#clock');



// setInterval(function(){
//     let date = new Date();
//     const setTime = date.toLocaleTimeString();
//     console.log(setTime);
//     clock.textContent="";
//     let textNode = document.createTextNode(setTime)
//     clock.appendChild(textNode);
// },1000);

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000);

