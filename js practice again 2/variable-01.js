const car = {
    names:'volvo',weight:'500kg',color:'black'
}
let text=" ";
for(let x in car){
    text += car[x] + " ";
}
console.log(text);

const person = {fname:"John", lname:"Doe", age:25}; 
    
    let txt = "";
    for (let x in person) {
      txt += person[x] + " ";
    }
    
    document.getElementById("demo").innerHTML = txt;
    
const number = [45,7,8,9,4];
let txt1 = " ";

number.forEach(myfunction);

function myfunction(value,index,array){
    txt1 += value + " ";
}
console.log(txt1);

//for of   looping over a array

const cars = ['bmw','car','bus','treain'];
let txt2 = " ";

for(let x of cars){
    txt2 += x + " ";
}
console.log(txt2);

//looping over a string

let word = "javascript";

let txt3=" ";
for(let x of word){
    txt3 += x + " ";
}
console.log(txt3);

