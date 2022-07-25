
//variable-porbo-3
var myName = 'reme';
console.log(myName);

var myAge ='21';
myAge ='20';
console.log(myAge);

console.log('my name is',myName,'age is',myAge);
const pi ='3.1416';

console.log(pi);
//porbo-4
  var a = '2';
  var b = '3';
  var c = '4';
var d=e= '5';
  console.log(a,b,c,d,e);

  var myVillageName = 'beruan';
  console.log(typeof myVillageName);

  var numberOfAge = 20;
  console.log(typeof numberOfAge);
  var carName;
  console.log( typeof carName);
  var villageName = null;
  console.log(typeof villageName);
var earthIsRound = true;
console.log(typeof earthIsRound);

//porbo-5 js math
var eggPrice = 10;
var numberOfEgg =15;
var totalEggPrice = eggPrice * numberOfEgg;
console.log('total egg price is',totalEggPrice,'taka');


var radius =7;
var py =3.1416;
var areaOfCricle = py * (radius * radius);
console.log(areaOfCricle);

//even or odd

var n1 = 9;
var rate = 9%2;
console.log('this number is odd',rate);

var n2 =10;
var rate1 =10%2;
console.log('this number is even',rate1);

//porbo-6(imp)
var x;
var y = 4;
x = y++;//x=y....y=y+1
console.log(x,y);


var x;
var y =4;
x=++y;
console.log(x,y);

var x;
var y = 4;
y += 2;
console.log(y);
//porbo-7 comparizom oparator;

var n =7;
if(n<10){
    console.log(n);
    console.log('n is smaller then 10')
}
else if(n<20){
    console.log(n,'this number is greater than 10')
}

else{console.log('this number is greater than 10')}

var n =10;
if(10==n){
    console.log('n is equalto 10')
}else{console.log('n is not equalto 10')}


//porbo-8

var personOne ='jamal';
var personTwo ='kamal';
var theyAreBrother = true;

if('jamal'==personOne && 'kamal'==personTwo && theyAreBrother){
  console.log('they are brother');
}else{console.log('they are not brother')}

//2 3 5 7

var n = 7;
if(n<10){
  if(2==n || 3==n || 5==n || 7==n){
    console.log('n is less then 10 & its  a prime number');
  }else{console.log('n is less then 10 && its not a prime number')}
}else{console.log('n is greater then 10')}

//porbo-9

var n =-6;
if(n>0){
  var result ='this number' +n+ 'is positive';
}else{var result = 'this number' +n+ 'is nagetive'}

console.log(result);

var n = 0;
var result;
var remainder = n%2;
if(0==n){result = 'this number is nutrual'}
else if(0==remainder){result ='this number is even'}else{result ='this number is odd'}
console.log(result);


var movieRating ='g';
var age = 5;

if('pg'==movieRating && age>=13 || 'r'==movieRating && age>=18 || 'g'==movieRating){
  console.log('you can watch this movie')
}else{console.log('you cannot watch this movie')}


var yourAge = 16;
var result;

if(yourAge<=1){result='baby';}
else if(yourAge<=3){result='toddler';}
else if(yourAge<=12){result='kid';}
else if(yourAge<18){result='teeneger';}
else if(yourAge>=18){result='adalt';}
console.log('you are a',result);

//porbo-10
  var n =8;
  var result;
  result=(n%2==0) ? 'even': 'odd';
  console.log('this number is',result);


  var n =10;
  var result;
  result =(n>0) ? 'positive' : 'negative';
  console.log('this number is',result);

  //porbo-11

  