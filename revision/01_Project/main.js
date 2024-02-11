const clock = document.querySelector('.clock');
const dateSet = document.querySelector('.date');

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    dateSet.innerHTML = date.toLocaleDateString();
},1000);


const inputBox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

// add a task;
document.querySelector('button').addEventListener('click',function(e){
   
    if(inputBox.value ===''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(inputBox.value));
        // listContainer.appendChild(li);
        listContainer.prepend(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
})

document.querySelector('ul').addEventListener('click',function(e){
    
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
})

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

document.querySelector('.clean-btn').addEventListener('click',function(e){
   
    localStorage.clear();
    alert("Local storage cleaned Successfully!")
    
})
