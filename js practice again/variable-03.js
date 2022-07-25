function myRandomFunction(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    

}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

//lip year cheak
function lipyear(year){
    if((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)){
        console.log(year,'is a lip year')
    }else{
        console.log(year,'is not a lip year')
    }
}

lipyear(2032);

// vawel cheak







//............


//dublicate number ber kore ana

let numbers = [1,2,3,3,4,5,6,6,7,7,8,9,0,0];

const dublicate = numbers.filter(function(value,index,array){
    return array.indexOf(value) !== index;
});
console.log(dublicate);

// filter unick numbers

const unick = numbers.filter(function(value,index,array){
    return array.indexOf(value) === index;
});

console.log(unick);

//boolean

let boolean = Boolean(20>9);
console.log(boolean);

//comparison oparetor
//==  (value equal)
let x1 = 5;
let x2 = (8 == x1);
console.log(x2);

let x3 = 5;
let x4 = (5 == x1);
console.log(x4);

let x5 = 5;
let x6 = ('5' == x1);
console.log(x6);


//=== (value & type both equal)

let a1 = 6;
let b1 = '6';
let c1 = (a1 === b1);
console.log(c1);

let a2 = 6;
let b2 = 6;
let c2 = (a2 === b2);
console.log(c2);

// !=  (not equal value)

let d1 = 4;
let d2 = 9;
let d3 = (d1 != d2);
console.log(d3);

// !== (not equal value && type)
let e1 = 5;
let e2 ='5';
let e3 = (e1 !== e2);
console.log(e3);
console.log('..........')

let e4 = 5;
let e5 = 5;
let e6 = (e4 !== e5);
console.log(e6);


// ternary oparator

function myNumber(){
    let age = document.getElementById("age").value;
let inputNumber = (age<18) ? 'to young to vote' : 'to longer to vote';


    document.getElementById("number").innerHTML = inputNumber;
}

// practice ternay

function myFunction1(){
    let age1 = document.getElementById("age1").value;
    let mynum1 = (age1 < 18) ? 'to young' : 'to longer';

    document.getElementById("number1").innerHTML = mynum1 + ' to vote';
}


document.getElementById("true").innerHTML = 2<12;
document.getElementById("true").innerHTML = 2<"jone";
document.getElementById("true").innerHTML = '2'<'12';

//if,else,else if

if(new Date().getHours() < 18){
    document.getElementById("goodday").innerHTML = 'good day';
}else{
    document.getElementById("goodday").innerHTML = 'good night';  
}

if(new Date().getDay() < 7){
    document.getElementById("day").innerHTML = 'sunday';
}else{
    document.getElementById("day").innerHTML = 'none of';
}

//switch

let day;
switch(new Date().getDay()){
    case 0:
        day = 'sunday';
        break;
        case 1:
            day = 'Monday';
            break;

            case 2:
            day = 'Tuesday';
            break;

            case 3:
            day = 'Wednesday';
            break;

            case 4:
            day = 'Thursday';
            break;

            case 5:
                day = 'Friday';
                break;

                case 6:
                    day = 'Saturday';

}
document.getElementById("week").innerHTML = 'today is '+ day;

//its js mistake

function myFunction2(a){
let power = 10;
return a * power;

}
console.log(myFunction2(55));

document.getElementById("unde").innerHTML = (typeof myObj === "undefined");
