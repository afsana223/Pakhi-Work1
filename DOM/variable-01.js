const element = document.getElementsByTagName("p");

document.getElementById("demo").innerHTML = 'the text in the frist paragraph is: ' + element[0].innerHTML;

element[0].style.color = 'red';
console.log(element.length);

var init = document.getElementsByClassName("intro");
init[0].style.color = 'green';

document.getElementById("demo").innerHTML = 'green is green' + init[0].innerHTML;

//querySelectorAll

var x = document.querySelectorAll("p.test");
var y = document.querySelectorAll("p.test1");
document.getElementById("demo1").innerHTML = 'hellow earth ' + x[0]. innerHTML  +  y[0].     innerHTML;

x[0].style.color = 'green';
//form

var x = document.forms["fm"];
var text = '';
for(var i =0; i<x.length;i++){
   text += x.elements[i].value + "<br>";
}

document.getElementById("fdemo").innerHTML = text;

//selecting by id/classname/tagname
const old =document.getElementById("old");
old.innerHTML = 'new heading';
old.style.color = 'red';
old.style.fontSize = '50px';

const demo3 = document.getElementsByClassName("new");
demo3[0].innerHTML = 'only hellow world';
demo3[1].innerHTML = 'your world';

const paragraph = document.getElementsByTagName("p");
paragraph[10].innerHTML ='amar sonar bangla';

paragraph[10].style.fontSize = '20px';
paragraph[10].style.color = 'red';
paragraph[10].style.margin = '0px 200px';
//image

document.getElementById("image").src = "img/img1.jpg";

//date

document.getElementById("time").innerHTML = 'date :' + Date();

//document.write

// document.write('date:' + Date());

//onclick
function name(id){
   id.innerHTML = 'yes';
}

function mymessege(){
   alert('hellow everyone');
}

//======================================



function nature(){
   let i = document.getElementById("img").src = 'img/img1.jpg';
}

function road(){
   let i = document.getElementById("img").src = 'img/img.png';
}

function displaydate(){
   document.getElementById("date").innerHTML = Date();
}

function time(){
   document.getElementById("time2").innerHTML = Date();
}
document.getElementById("mybtn").onclick = time;


//upper case
function uppercase(){
   let f = document.getElementById("fmname");
   f.value = f.value.toUpperCase();
}

//on mouse over...on mouse out
function mOver(obj){
   obj.innerHTML = 'Thank you';


}
function mOut(obj){
   obj.innerHTML = 'Welcome';
}

function ofcus(obj){
   obj.style.backgroundColor = 'red';
}

function mouseover(obj){
   obj.style.color ='red';
}

function mouseout(obj){
   obj.style.color = 'black';
}

//addEventLestener method

let tevent = document.getElementById("add");
tevent.addEventListener("click",function listen(){
   alert('hellow world');
   tevent.classList.add("mouse");
});


//date
document.getElementById("btn").addEventListener("click",function(){
   document.getElementById("time3").innerHTML = Date();
})

//===============================
//addeventlestener method
let add1 = document.getElementById("btn1");
add1.addEventListener("click",function(){
   alert('hellow world');
})

add1.addEventListener("click",function(){
   alert('this function was also execute.')
})
//================================
let add2 = document.getElementById("btn2");
add2.addEventListener("click",function(){
   document.getElementById("para").innerHTML += 'clicked <br>'; 
})

add2.addEventListener("mouseover",function(){
   document.getElementById("para").innerHTML += 'mouseover <br>'; 
})


add2.addEventListener("mouseout",function(){
   document.getElementById("para").innerHTML += 'mouseout <br>'; 
})

//=================================
//resize...math.randome()

window.addEventListener("resize",function(){
   document.getElementById("demo4").innerHTML = math.random();
});
//=====================================
let p1 = 5;
let p2 = 7;
document.getElementById("btn3").addEventListener("click",function(){
   myfunction(p1,p2);
});

function myfunction(a,b){
   document.getElementById("demo5").innerHTML = a * b;
}
//=========================================
document.getElementById("mydiv").addEventListener("click",function(){
   alert('you click the orange element')
},false);

document.getElementById("mybtn1").addEventListener("click",function(){
   alert('you click the white element')
},false);
//=========================================
function test(){
  let im = document.getElementById("image3").src = "img/img.png";
}
function test1(){
   let im = document.getElementById("image3").src = "img/img1.jpg";
 }
document.getElementById("date1").addEventListener("click",function(){
   document.getElementById("title").innerHTML = Date();
});

//practise
