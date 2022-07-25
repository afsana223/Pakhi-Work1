//while
let i = 0;
let txt4 = "";

while(i<10){
    
    txt4 += 'this number is' + i + " <br>";
    i++;
}
console.log(txt4);
document.getElementById("demo1").innerHTML = txt4;

// do while

//break
let text2 =" ";
for(let i =0; i<10;i++){
    if(i===3){
        break;
    }
     text2 +=  " this num is "+ i;
}
console.log(text2);


//continue

let text3 =" ";
for(let i =0; i<10;i++){
    if(i===3){
        continue;
    }
     text3 +=  " this num is "+ i;
}
console.log(text3);

//new set
 const myset = new Set();  
myset.add("A");
myset.add("b");
myset.add("c");
console.log(myset);
console.log(myset.size);

//forEach

const setOne = new Set(['a','b','c']);

let word1 =" ";
setOne.forEach(function stOne(value){
    word1 += value + " ";
}
);



console.log(setOne);
document.getElementById("demo3").innerHTML = word1;


//values method
const gig = new Set(['gig1','gig2','gig3']);
let word2 =" ";

for(let x of gig.values()){
    word2 += x + ' ';
};
console.log(word2);


//maps

const mymap = new Map([
    ['apple',500],['bannana',600],['mango',700]
])
//or

const mymap1 = new Map();
mymap1.set('apple',500);
mymap1.set('bannana',600);
mymap1.set('mango',700);


console.log(mymap.get('apple'));
console.log(mymap.size);
mymap1.delete('apple');

console.log(mymap1.has('apple'));
console.log(mymap1);

//each of
let word4 =" ";

mymap.forEach(function(value,key){
    word4 += key + ' = ' + value + " ";
});
console.log(word4);

let word5 =" ";
for(const x of mymap.entries()){
word5 += x + " ";
}

console.log(word5);

function myfun(){

}
console.log(typeof myfun);


//type of oparator