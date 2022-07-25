function validform(){
    let x = document.forms["form"]["fname"].value;
    if(x == ""){
        alert('name must be filled up');
        return false
    }
}

//input valid number

function myfunction(){
    let y = document.getElementById("number").value;
    let text;
    if( (y == '') || (y<0) || (y>10)){
        text ='input not valid';
    }else{text = 'input ok'}
    document.getElementById("demo").innerHTML = text;
}


//onclick change the color
function color(){
    let c = document.getElementById("color").style.color = 'red';
}

//visibility show and hide the text
function show(){
    let d =document.getElementById("hide").style.visibility = 'visible';
}

function hide(){
    let e = document.getElementById("hide").style.visibility = 'hidden';
}

//input fild 1 to 100
