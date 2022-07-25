
const carsOf = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text6 = " ";
for (let i = 0; i < carsOf.length; i++) {
  text6 += cars[i] + "<br>";
}

document.getElementById("pl").innerHTML = text6;

let text7 = " ";
for(let i = 0;i < 5;i++){
text7 += "the number is"+ i + " <br> ";
console.log(i);
document.getElementById("pl1").innerHTML = text7;
}


// for in

const person2 = {
  name:'jone',surName:'doe',age:35}
let word =" ";
for(let x in person2){
word += person2[x] + " ";

}
console.log(word);
