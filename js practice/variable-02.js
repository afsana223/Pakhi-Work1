// //porbo-11............loop
// var i =10;
// while(i-- > 1){
//     console.log(i);
// }

//porbo-12
var i = 0;
while(i<=10){
    console.log(i);
    i += 2;
}

var i = 0;
while(true){
    i++;
    console.log(i);
   
    if(10==i){
        break;
    }
}

//porbo-13
//oisic

//porbo-14
var i = 0;
do{
    i++;
    console.log(i);
}while(i<10)

//porbo-15
var i= 0;
for(i=0; i<10; i++){
    console.log(i);
}

var i =1;
for(i=1; i<=10; i += 2){
    console.log(i);
}

//porbo-16

var i,j;
for(i=0,j=10; i<10; i++,j--){
    console.log(i,j);
}

// //porbo-17
// var n = 1;
// var factorial = 1;
// for(i=n;i>1;i--){
//     factorial = factorial * i;
// }
// console.log(factorial);

// //factorial of 10

// var factorial = 1;
// for(i=n;i<=10;i++){
// factorial *= i;
// console.log('factorial of',i,'is',factorial);
// }
//porbo-18
//s4
var series = '  ';
var n;
for(var i = 1;i<10;i++){
    n = i ;
    if(n%2 == 0){
        n = i*2;
    }series = series + n + ' ';
}console.log(series);

//s5= 0 1 1 2 3 5 8 13
var series= " 0 1 ";
var n = 0;
var x = 0;
var y = 1;
for(var i =1;i<10;i++){
    n =x+y;
    x = y;
    y = n;
    series = series + n + ' ';
}
console.log(series);

//porbo-19
var series;
for(var i =1;i<=10;i++){
    series = i+' = ';
    for(var j = 1;j<=10;j++){
        series = series + i*j + ' ';
    }console.log(series);
}

//porbo-20  math.celi()=11.6=12 && meth.floor()=11.6=11  ...squre root ar jonno math.sqrt()
var n =144;
var renge = Math.ceil(Math.sqrt(n));
var divisors ='';
for(var i =1;i<=renge; i++){
    if(n%i ==0){
        if(i==n/i){
            divisors += i + ' ';
        }else{
            divisors += i + ' ' + (n/i) + ' ';
        }
         
    }
}console.log(divisors);

//porbo-21
var monthName = 'April';
var day =30;
var startingDay = 0;

console.log('Calender Of April')
console.log('sun   mon   tue   wed   thu   fri   sat')
for(var i=0; i<5;i++){
    var dayRow =' ';
    for(var j = 1;j<=7;j++){
        var currentDay = 7*i + j ; 
        if(currentDay>day){
            break;
        }
        if(currentDay>9){
            dayRow += currentDay + '    ' ;
        }else{
            dayRow += currentDay + '     ';
        }
        
    }console.log(dayRow);
}

//reset
var monthName = 'May';
var day =31;
var startingDay = 4;

console.log('Calender Of April')
console.log('sun   mon   tue   wed   thu   fri   sat')
for(var i=0; i<5;i++){
    var dayRow =' ';
    for(var j = 1;j<=7;j++){
        var currentDay = 7*i + j-startingDay; 
        if(currentDay>day){
            break;
        }else if(currentDay<1){
            currentDay =' ';
        }
        if(currentDay>9){
            dayRow += currentDay + '    ' ;
        }else{
            dayRow += currentDay + '     ';
        }
        
    }console.log(dayRow);
}

//========================================
//porbo-22 && 23
 var nameOfStudent = ['rakib','rana','laila'];
 console.log(nameOfStudent);
 console.log(nameOfStudent[1]);
 console.log(nameOfStudent.length);

 var lastOfset = nameOfStudent.length-1;
 console.log(nameOfStudent[lastOfset]);

 //porbo-24
 var list =['apple','bannana','orange','lemon'];
 list.push('painaple');//last a add
 console.log(list);
 list.unshift('aggur');//frist a add
 console.log(list);
 list.pop();//last teke bad
 console.log(list);
 list.shift();
 console.log(list);
 var lastElement = list.pop();
 console.log(lastElement);
 console.log(list);

 //porbo-25
 var male = ['rahim','rani','korim'];
 var female = ['afsana','rothy','riya'];

//  var lastPerson = male.pop();
//  female.push(lastPerson);
//  console.log(male,female);


var personToRemove = male[1];
female.push(male[1]);
// delete(male[1])
male.splice(1,1);
console.log(male,female);
console.log(male.length,female.length);


//porbo - 26
var list = [ 
    'sat',//0
    'sun',//1
    'mon',//2
    'tue',//3...-4
    'wed',//4..-3
    'thu',//5....-2
    'fri'//6...-1
];

var chunk = list.slice(0,3);
console.log(chunk);

var few = list.slice(-3);
console.log(few);

var little = list.slice(-4,-2);
console.log(little);

//porbo-27
var list1 = ['sat','sun','mon','tue','wed','thu','fri'];
var chunk1 = list1.splice(1,3);
console.log(list1,chunk1);

//porbo-28...copy shallow copy / deep copy

var list1 = ['sat','sun','mon','tue','wed','thu','fri'];

var list2 = list1.slice();//[....list1]--es6
list2[1] = 'no day';
console.log(list1,list2);

//porbo-29 ..marge 
var list3 = list1.concat(list2,list);
console.log(list3);

//porbo-30

console.log('reset')
for(var i=(list.length-1); i>=0;i--){
    console.log('element at',i,'osfet is',list[i]);
}
var length = list.length;
for(var i =0; i<length;i++){
    console.log('element at',i,'ofset is',list[i]);
}

console.log('reset');

for(i in list){
    console.log('element at',i,'ofset is',list[i]);
}

//porbo-31

var list4 = ['sat',null,'sun', NaN,'mon','tue',undefined,'wed','thu',NaN,'fri',null];

console.log(list4);
var newList = [];
for(i in list4){
    if(list4[i]){
        newList.push(list4[i]);
    }
}
console.log(newList);

console.log('reset');

var newList1;
newList1 = list4.filter(Boolean);
console.log(newList1);

//porbo-32
list4.sort();
console.log(list4);

var number =[1,2,5,11,33,6,77,89,4,55,7];
 

 var a = 1, b = 3;
 [a,b] = [b,a];
 console.log(a,b);

//  var length = number.length-1;
 for(var i =0; i<number.length-1;i++){
   for( var j = 0;j<number.length-1; j++){
    if(number[j] > number[j+1]){
        [ number[j],number[j+1]] =[ number[j+1],number[j]]
    }
   }
 }
 console.log(number);


 //porbo-33
  console.log('number...')

  //dom ...tag name
  var para = document.getElementsByTagName("p");
  para[0].style.color ='red';

  // id
  document.getElementById('test').style.color = 'green';
  document.getElementById('test').innerHTML = 'Hellow earth';
  //class

 var con = document.getElementsByClassName('demo');
 con[0].style.color = 'red';

 document.querySelector('h2').style.color = 'pink';
 var element =document.getElementById('intro');
 
 document.getElementById('div1').innerHTML = 'oma amr prane bazay basi sonar bangla '  +  element.innerHTML ;
 
 var params = document.getElementsByTagName('P');
document.getElementById("test").innerHTML = 'my nike name is pakhi.' + params[0].innerHTML;


//================================================


function calculate(num){
    const inputBtn =  document.getElementById("input-btn").value;
    const inputTotal =inputBtn + num;
    const inputValue = document.getElementById("input-btn").value = inputTotal;
    return inputValue;
  }

  const equalBtn  = document.getElementById("equal-btn");
equalBtn.addEventListener('click', function(){
    const equalNumber =  document.getElementById("input-btn").value;
    const total = eval(equalNumber);
    document.getElementById("input-btn").value = total;
})
  
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener('click', function(){
    document.getElementById("input-btn").value = '';
})