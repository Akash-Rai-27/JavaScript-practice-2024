/*

document.getElementById //? ---> get elememt by Id --> it is a function
document.getElementById('') //? use () --> to mention which id

document.getElementById('title')  // todo ---> we get the whole value of that id as a return
 * output --> <h1 id=​"title" class=​"heading">​DOM learning on Chai aur code​</h1>​

 ? --> we can access its differet element by using dot notation

document.getElementById('title').id // ? -->  will give me the value of the id --> 'title'

document.getElementById('title').className //? --> get the class name

! this will get the attribute of that id
document.getElementById('title').getAttribute
? --->  this will return a function
? -->  we have to specifiy the attribute which we want to get

document.getElementById('title').getAttribute('id') //? --> 'title

document.getElementById('title').getAttribute('class') //? --> 'heading

! --> setAttribute
document.getElementById('title').setAttribute('class', 'batman')
? --> it will set the class attribute to the 'batman 
? it will overwrite the previous given value of set value and in console it will return 'undefined' --> but it already have overwritten

todo -->  if we dont want to overwrite the previous value

document.getElementById('title').setAttribute('class', 'batman heading')


* Store and Access

const title = document.getElementById('title') //? --> storing the value into a variable --> we can perform many things on variable now
? -- we can insert other style elements using title variable
? -->  we can access using .dot opertator as it is whole a object


title.style.backgroundColor="green"

title.style.padding ="15px"

title.style.borderRadius="20px"

* getting content of html via JS
? title -- > previous set variable

title.textContext
---> 'DOM learning on Chai aur code'
title.innerHTML
title.innerText
? -->all three give same context

! diff between --> textContent and innerText

title.innerText --> // ? --> show us the texts which are being display over the web browser screen of the website

'DOM learning on Chai aur code'



title.textContent --> //? --> show us all the text present in the html of the selected element , even if the text is hidden using css properties like display --> it still show us all the texts

'DOM learning on Chai aur code text batman'



title.innerHTML --> //? --> this will give exact same value of that attribute

'DOM learning on Chai aur code <span style="display: none;">text batman</span>'

? --> it give us whole html value ,, and if we have written any html inside it we will get that also

? --> innerHTML support html tags but innerText , textContent doesnot support any html

!---------------------------------------------------
* document.getElementsByClassName('heading')

HTMLCollection [h1#title.heading, title: h1#title.heading]

todo -->  give us a html collection --> what is html collection? <later>

! more query selector which we will use in real world

! 1> document.querySelector()
* document.querySelector('h2')
-- select the first tag 

* document.querySelector('#title')
-- select the id

* document.querySelector('.heading')
-- select the class

documnet.querySelector('input[type ="password"]')

-- select the input with specific password

todo --->  all css selector support here

e.g:
document.querySelector('p:first-child')

const myul = document.querySelector('ul')

myul.querySelector('li')

const turngreen = myul.querySelector('li')

turngreen.style.backgroundColor = "green"

turngreen.style.padding = "15px"

turngreen.innerText

turngreen.innerText = "batman"

* DOM is easy once you know how to select the elements



! 2> querySelectorAll()

document.querySelectorAll('li')

return a nodeList

const tempList = document.querySelectorAll('li')

tempList
NodeList(3) [li, li, li]


? -- nodeList and HTML collection are not pure array so dont thing this is an array

? -- nodeList dont work like HTML Collection 

tempList[0].style.color = "green"
? --> set the color green for the first element

? for each loop --> we can use for each loop on nodeList

tempList.forEach( (l)=>{
    l.style.backgroundColor = "orange"
})

? there are ways to convert nodeList into arrays
? but whenever we use nodeList it better to use forEach as its not a array 


* -----------------

* nodeList and HTML collection are different

document.getElementsByClassName('list-item')
? --> give us html collection

to use loops on html collection we have to convert it

const tempList = document.getElementsByClassName('list-item')

tempList
? --> output---> HTMLCollection(4) [li.list-item, li.list-item, li.list-item, li.list-item]

? converting tempList into array
Array.from(tempList)

const myConvArr = Array.from(tempList)

myConvArr.forEach( (li)=>{ li.style.color = "orange"})

myConvArr.map( (li) => {
    li.style.color = "tomato"
})


? wikipedia js web page manipulation


! DOM is important for interview 
! More DOM practice more better











*/