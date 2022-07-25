

//touppercase
let text = 'i am afsana rokaya reme.';
let dtext = text.toUpperCase();
console.log(dtext);

//to lowercase
let namesOf = 'MY NAME IS PAKHI.';
let dnames = namesOf.toLowerCase();
console.log(dnames);

//trim() method

let tim = '     hellow   world    ';
let tim1 = tim.trim();
console.log(tim1);
let tim2 = tim.split('');
console.log(tim2);


//string search

let search = tim.indexOf('world');
console.log(search);

let search1 = tim.lastIndexOf('hellow');
console.log(search1);

//tamplate literals
console.log(`hellow's "world" in  
'banhladesh' of country`);

//interpolation
let country = 'bangladesh';
let sentence = `i love my country ${country} and it is a big country`;
console.log(sentence);


//number
let m = 4;
let k = 5;
let y = 9.10;

console.log('this is result', m + k);
console.log(typeof y);
let n = 123e5;
console.log(n);

//NaN= not a number
// NaN is a number
// typeof NaN  return number.

let hexa = 0xABC;
console.log(hexa);

let b = 500;
a = b.toString(2);
console.log(a);

// number method

let u = 123;
let t = u.toString();
(123).toString();
(100 + 23).toString();
console.log(typeof t);

//toExponential() method


let expo = 45.777;
let exponen = expo.toExponential(5);
console.log(exponen);

// toFixed() method
let fix = 9.566;
let fixed = fix.toFixed(0);
console.log(fixed);

//for mouny tofixed(2);

let con =Number('30');
console.log(con);

//arrays
let array =['reme','lamiya','tabassum','tia'];
let arrays = array.toString();

console.log(typeof arrays);

let join = array.join(' * ');
console.log(join);
console.log(typeof join);
delete array[3];
console.log(array);

//max mini
let maxnum = [200,100,40,50];

function max(arrp){
   return Math.max.apply(null,arrp)

}
console.log(max(maxnum));



function low(arrl){
    return Math.min.apply(null,arrl)
}
console.log(low(maxnum));

//sort object
const carrs = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ];
  carrs.sort();
  console.log(carrs);

  carrs.sort(function(a,b){
    return a.year - b.year
  })
  console.log(carrs);

  //arrays iteration

  const nim = [45,6,7,8,9];












//====================================================
//   Date ..........time
//===================================================
  // //date
  // const f = new Date();
  // document.getElementById('year').innerHTML = f.getFullYear();

  //practice
  let year = new Date();
  document.getElementById("year").innerHTML = year.getFullYear();


  let minite = new Date();
  document.getElementById("year").innerHTML ='month:' +(minite.getMonth()+1);
  let j = document.getElementById("year");
  j.style.background='#337EF0';

  document.getElementById("dem").innerHTML = minite.getDate();
  
  //houres

  document.getElementById("year").innerHTML = minite.getHours();

  //minite
  document.getElementById("year").innerHTML = minite.getMinutes();

  //second
  document.getElementById("year").innerHTML = minite.getSeconds();

  //newdate
  document.getElementById("newdate").innerHTML = Date();
  
  document.getElementById("date").innerHTML =new Date();

  const d = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById("year").innerHTML = d;
  
  //js count month 0 to 11
  //0 = january & 11 = december;

  const w = new Date(2018);

document.getElementById("year").innerHTML = w;
  
  let h = new Date("september 13, 2021 10:11:11");
  document.getElementById("year").innerHTML = h;

  //date string();
  let newTime = new Date();
  document.getElementById("newtime").innerHTML = newTime.toDateString();


   //isoString(international)
   document.getElementById("iso").innerHTML = newTime.toISOString();

  //parse
  document.getElementById("parse").innerHTML = Date.parse('mar 25,2022');
  //find month
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

 let dom = document.getElementById("demo1").innerHTML = months[newTime.getMonth()];

 //bikolpo
 document.getElementById("demo2").innerHTML = newTime.getMonth();
//days
 document.getElementById("demo3").innerHTML = newTime.getDay();

 const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

document.getElementById("demo4").innerHTML = days[newTime.getDay()];

//====================================
//math
//==========================================
let math = Math.PI;
console.log(math);

//math object has no constucttor
let e = Math.E;
console.log(e);

//math.round()
let round = Math.round(4.6);
console.log(round);

let round1 = Math.round(4.3);
console.log(round1);

//math.ceil();
let ceil = Math.ceil(4.4);
console.log(ceil);

//math.floor
let floor = Math.floor(4.5);
console.log(floor);

//math.trunc
let trunc = Math.trunc(4.4);
console.log(trunc);

//math.sign

//math.pow
let pow = Math.pow(8,2);
console.log(pow);

let sqrt = Math.sqrt(64);
console.log(sqrt);

//math.abs() return the value positive

//math.sin()

let sin = Math.sin(90* Math.PI/180);
console.log(sin);

//math.cos()

let cos = Math.cos(180 * Math.PI/180);
console.log(cos);

//min max

let min1 = Math.min(4,5,70,9,8);
console.log(min1);

let max1 = Math.max(20,3,4,5,60);
console.log(max1);

//math.log();
let log = Math.log(1);
console.log(log);

let log1 = Math.log(2);
console.log(log1);

let log2 = Math.log2(8);
console.log(log2);

let log10 = Math.log10(1000);
console.log(log10);


//random (vvi);
let ran = Math.random();
console.log(ran);

//return a number integer from 0 to 9

let ran1 = Math.floor(Math.random() *10);
console.log(ran1);
console.log(ran1);

let ran2 = Math.floor(Math.random() *10);
console.log(ran2);

//return a number integer from 0 to 10

let random = Math.floor(Math.random() * 11);
console.log(random);

//return a number integer from 1 to 10
let random1 = Math.floor(Math.random() *10) +1;
console.log(random1);

// return a number integer from 1 to 100

let random2 = Math.floor(Math.random() *100)+1;
console.log(random2);

//random function  min incluid

 function getRandom(max,min){
  return Math.floor(Math.random() * (max-min)  ) +min;
 }


 //min max both incluid

 function myRandom(max,min){
  return Math.floor(Math.random() * (max-min + 1)) + min;
 }
