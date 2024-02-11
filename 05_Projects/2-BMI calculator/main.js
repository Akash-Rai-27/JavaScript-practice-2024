const form = document.querySelector('form')
console.log(form);
form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    // const textNode = document.createTextNode("Please enter vaild height")
let tempStore = 0;
    if(height === ''|| height<0 || isNaN(height)){
        // results.appendChild(document.createTextNode("Please enter vaild height"));
        results.innerHTML = `<span>${"please enter a valid height"}</span>`;
        results.style.color = "tomato";

    } else if(weight === ''|| weight<0 || isNaN(weight)){
        // results.appendChild(document.createTextNode("\nPlease enter vaild weight"));
        results.innerHTML = `<span>${"please enter a valid weight"}</span>`;
        results.style.color = "tomato";
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        tempStore = bmi;
        // show the result
        results.innerHTML = `<span><b>${bmi}</b></span><br>`;

    }

    


    if(tempStore<18.6){
        const addText = document.createTextNode("Under Weigth");
        results.appendChild(addText);
        results.style.color = "tomato";
        
    }
    else if(tempStore>=18.6 && tempStore <= 24.9){
        const addText = document.createTextNode("Normal Range");
        results.appendChild(addText);
        results.style.color = "yellow";
        
        
    }
    else if(tempStore>24.9){
        const addText = document.createTextNode("Over Weigth");
        results.appendChild(addText);
        results.style.color = "tomato";
    }
})