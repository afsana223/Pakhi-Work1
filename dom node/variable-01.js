function sleep(){
    console.log('jasim is sleeping in 10pm')
}
sleep();

function myfunction(flower){
    console.log(flower,'is a flower.')
}

myfunction('rose');
myfunction('beli');
myfunction('chamily');

function f(forenhight){
    return (5/9) * (forenhight-32);
}
document.getElementById("demo").innerHTML = f(77);
//self-invokink function iife-immediately invoke function esspretion;   
(function (){
    console.log('my name is pakhi');
})();


//parameter

function math(x,y){
    if(y === undefined){y=2}
    return x * y;
}
document.getElementById("demo").innerHTML = math(4);

//or

function mathOr(x,y=2){
    console.log(arguments);
    return x * y;
}
document.getElementById("test").innerHTML = mathOr(5);
//======================
function findMax(){
    let max = -Infinity;
    for(let i = 0;i<arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}

document.getElementById("test").innerHTML = findMax(3,5,7,8);

//==========================
function sum(){
    let sum = 0;
    for(let i = 0;i<arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}
document.getElementById("demo").innerHTML = sum(4,5,6,7);

//===================================

//invoking

const myobj ={
    fristName:'afsana',
    lastName:'reme',
    fullName:function(){
        return this.fristName +' '+this.lastName;
    }
    }
    
document.getElementById("list").innerHTML = myobj.fullName();

//=====================================
//function call

const person ={
  fullName:  function(){
    return this.fristName +' '+this.lastName;


    }
}

const person1 ={
    fristName:'jone',
    lastName:'doe'
}

const person2 ={
    fristName:'mathin',
    lastName:'doei'
}
console.log(person.fullName.call(person2));
document.getElementById("demo").innerHTML = person.fullName.call(person1);


//===============================
const pepole ={
    fullName:function(city,country){
        return this.fristName + ' ' + this.lastName + ','
         + city + ' ,'+ country ;
    }
}

const pepole1 = {
    fristName:'afsana',
    lastName:'reme'
}

console.log(pepole.fullName.call(pepole1,'dakha','bangladesh'));


//=================================
//apply function

const man ={
    fullName:function(city,country){
        return this.fristName + ' ' + this.lastName +' '+ city + ' ' + country;
    }
}

const man1 ={
    fristName:'jone',
    lastName:'mill'
}

console.log(man.fullName.apply(man1,['dilli','india']));


document.getElementById('demo').innerHTML = Math.max(4,5,6,7);
console.log(Math.max(91,4,5,6));

console.log(Math.max.apply(null,[6,7,9,13]));
//====================================

//bind function
//implicit binding
var saima ={
    name:'saima',
    age:'23',

    print:function(){
        console.log(this.name);
    }
}
saima.print();


//explicit binding
var printNameOfNaima =function(){
    console.log(this.name)
};
var naima ={
    name:'naima jahan',
    age:35
}

printNameOfNaima.call(naima);
//=====================
function myMath(x){
    return x * x;
}
console.log(myMath(4));
//=============
//bind same as call,just this function store a var..let or const ..
const member = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member1 = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = member.fullName.bind(member1);
  
  console.log(fullName());
  console.log(member.fullName.apply(member1));

  //===================================
  //function closures

  function myMath1(){
    let a = 4;
    return a * a;
  }
  console.log(myMath1());

  let a = 5;
  function myMath2(){
    return a * a;
  }
  console.log(myMath2());

  let counter = 0;
  function add(){
    return counter += 1;
  }

  add();
  add();
add();
console.log(counter);
document.getElementById("list").innerHTML = counter;
//solution

function temporary(){
    let counter = 0;

    return function(){
        counter += 1;
    }
}
const add1 = temporary();
add1();
add1();
console.dir(add);