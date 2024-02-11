// * Switch

// switch(key){  //? --> Basic Syntax
//     case value:
//         break;
//     default:
//         break;
// }

// const month = 7;
// switch(month){
//     case 1:
//         console.log("Jan");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("Mar");
//         break;  // ! if we dont use break ,  the case which match --> the code will run from there till every case to end --> E X C E P T default ; thats is why we use break;
//     case 4:
//         console.log("Apr");
//         break;
//     default: 
//         console.log("i am default");
//     }

const month = "mar";
switch(month){
    case "jan":
        console.log("Jan");
        break;
    case "feb":
        console.log("Feb");
        break;
    case "mar":
        console.log("Mar");
        break;  // ! if we dont use break ,  the case which match --> the code will run from there till every case to end --> E X C E P T default ; thats is why we use break;
    case "apr":
        console.log("Apr");
        break;
    default: 
        console.log("i am default");
    }


    