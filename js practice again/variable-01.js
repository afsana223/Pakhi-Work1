function time(){
    document.getElementById("demo").innerHTML = Date();
}

document.getElementById("time1").addEventListener('click' , function(){
    document.getElementById("test").innerHTML = Date();
})

//arrays

const cars =['volvo','bmw','saab'];
console.log(cars);
const bus =['podda expres','jomuna expres','meghna expres'];

const addArray = cars.concat(bus);
console.log(addArray);
document.getElementById("array").innerHTML = cars;
//join() method
let test = bus.join();
document.getElementById("array").innerHTML = test;
//slice
const slice = addArray.slice(-3);
console.log(slice);
//toString
const names = ['reme','nur','fatema','lamiya','pakhi'];
document.getElementById("test").innerHTML = names.toString();
document.getElementById("test").innerHTML = names.join(" + ");
//pop
names.pop();
console.log(names);
//push
names.push('afsana');
console.log(names);

//shift
names.shift();
console.log(names);

//unshift

names.unshift('reme','pakhi');
console.log(names);

//splice
const cutOfName = names.splice(3,3);
console.log(names);
console.log(cutOfName);

//=====================
//sort alphabetically

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

//sort numerically

const poient = [40,60,50,20,10,30,100,30,20,5,6,7,8];
poient.sort(function(a,b){return a - b});
console.log(poient);

const num = [30,1, 6,7, 9, 0, 10,6,4,3];
num.sort(function(a,b){return b - a});
console.log(num);
document.getElementById("test").innerHTML = num;
//lowest value.....
document.getElementById("test").innerHTML = poient[0];

//height value 
let height = poient[poient.length-1];
console.log(height);

//sort

const num1 = [3,6,8,9,0,2,3,4,5,10,11,33,44,54,32];
document.getElementById("sort").innerHTML = num1;

function num2(){
    num1.sort();
    document.getElementById("sort").innerHTML = num1;
}
function num3(){
    num1.sort(function(a,b){return a - b});
    document.getElementById("sort").innerHTML = num1;
}

//math.random

const poient1 =[40,19,30,100,30];
document.getElementById("try").innerHTML = poient1;

function poient2(){
    poient1.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("try").innerHTML = poient1;
}
//max and  min;

function max(arr){
   return Math.max.apply(null,arr);
}

 function min(arr){
     return Math.min.apply(null,arr)
}

const arrMin =[3,4,2,1,5,9,8,7,6,10];
document.getElementById("test").innerHTML = max(arrMin);

document.getElementById("test").innerHTML = min(arrMin);

//=============================
//practice
//sort
const home = ['villa','banglo','hotel','smart home','flat','bilding'];
home.sort();
console.log(home);

//numerically

const mynum =[100,80,90,40,20,30,10,50,70];
mynum.sort(function(a,b){return a - b});
console.log(mynum);

//js introduction

function myp(){
    document.getElementById("myp").innerHTML = 'hellow javascript';


}

//light on off

function trunon(){
    document.getElementById("image").src =' img/mypic1.gif';
}

function trunoff(){
    document.getElementById("image").src = 'img/mypic.gif'
}

//change the fontsize

function font(){
    document.getElementById("font").style.fontSize = '40px';
}

function displaynone(){
    document.getElementById("font").style.display = 'none';
}

//output

document.getElementById("output").innerHTML = 5+6;



function output(){
    document.getElementById("output").innerHTML = 5+10;
}
// window.alert('hellow javascript');
// alert('hellow afsana')  window object is optional

console.log(5+7);
let textOne = 'jone';
let textTwo = 'doe';
let textTree = textOne + ' ' + textTwo;
console.log(textTree);

let text1 = 'what a very';
 text1 += ' nice day!';
 console.log(text1);

 //function
 function p1(a,b){
   
    return a * b
    
 } console.log(p1(4,5));

let x = p1(9,10);
console.log(x);

function toCelcius(farenhigh){
    return (5/9) * (farenhigh - 32)
}
console.log(toCelcius(77) , 'celcius');

//object
const car = {
    carName:'flat',
    model: 500,
    weioght: '850kg',
    color: 'white',
    start: function(){
        this.driving();
        console.log('car is start');
    },
driving: function(){
    console.log('car is driving');
},
fullName: function(){
   return  this.carName + ' ' + this.model},

};

console.log(car.carName);
console.log(car['model']);
car.start();
console.log(car.fullName());

//string
let texts = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = texts.length;
console.log(length);

console.log("i am reme &&  \" be qucek \" is a");
console.log("i am reme &&  \\ be qucek \\ is a");

let str = "apple, bannana, kivi";
let r = str.slice(7,13);
console.log(r);

//replase
function replase() {
    let text = document.getElementById("again").innerHTML;
    document.getElementById("again").innerHTML =
    text.replace("Microsoft","W3Schools");
  }