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