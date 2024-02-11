// ! Object de-structuring

const course = {
    courseName : "js in hindi",
    price: "999",
    courseInstructor:"histesh"
}

// const {courseInstructor} = course;
const {courseInstructor: instructor } = course;
console.log(instructor);

/*

? const {courseInstructor} = course;
! (what value to be extracted) = (from where to be extracted)

? const {courseInstructor: instructor } = course;
! we can change name to our own convience to anything --> instuctor
* {} --> curly brases syntax --> de-structuring in react/js
* we can de-structure array also but used rarely

*/


// todo <----------  A P I  ----------->

/*
* API --> do work for us -- we just order it
* API is nothing but values, values we get form backend 
* previouly we used to get data/value in XML str --which was very complex
* now we get values in JSON
! JSON --> Object but dont have name 
! JavaScript Object Notation

{
    "name": "panda",
    "location":"china",
    "eats": "banboo"
}

* keys are also in string --> in double quotes "  "
* values is also string

* this is how our API calls come

* how to fetch in JS --> the using fetch call url --> in response we get data

* now i know object --> i will convert this into object and gets the values one by one.

! many times we get api in format of <--ARRAYS OF OBJECT-->

[
    {},
    {},
    {}
]


*/


