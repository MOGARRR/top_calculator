// operator functions
const addFunc = function(num1, num2){
  return num1 + num2;
}
const subtractFunc = function(num1, num2){
  return num1 - num2;
}
const multiplyFunc = function(num1, num2){
  return num1 * num2;
}
const divideFunc = function(num1, num2){
  return num1 / num2;
}

let operate = function(operator, num1, num2){
  if(operator === '+'){
    return addFunc(num1, num2);
  }else if(operator === '-'){
    return subtractFunc(num1, num2);
  }else if(operator === 'x'){
    return multiplyFunc(num1, num2)
  }else if(operator ==='/'){
    return divideFunc(num1, num2);
  }
}
//

//digit button functions
let display = document.querySelector('#display')
let num1 = 0;
let num2 = 0;
let operater = null;
let numbers = document.querySelectorAll('.numbers');
Array.from(numbers);

for(let number of numbers){
  number.addEventListener('click',()=>{
    display.textContent += number.textContent;
  });
}
//

//operator button functions
let operatorButtons = document.querySelectorAll('.operateButtons');
Array.from(operatorButtons);

for(let operateButton of operatorButtons){
  operateButton.addEventListener('click', () =>{
    num1 = display.textContent;
    display.textContent += operateButton.textContent;
    operater = operateButton.textContent;

  });
}
//