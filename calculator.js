// operator functions
const addFunc = function(array){
  return array.reduce((total,currentnum) => total + currentnum,);
};
const subtractFunc = function(array){
  return array.reduce((total,currentnum) => total - currentnum,);
};
const multiplyFunc = function(array){
  return array.reduce((total,currentnum) => total * currentnum,);
};
const divideFunc = function(array){
  if(array[0] === 0 || array[1] === 0){
    alert("ha nice try buster");
    return 0;
  }else{
    return array.reduce((total,currentnum) => total / currentnum,);
  }
};
//

// operate function
let operate = function(array){
  let operators = ['+','-','x','/'];
  let operator = '';
  let numArray =[];
  for(let num of array){
    if(operators.includes(num)){
      operator = num;
    }else{
    numArray.push(parseFloat(num));
    }
  }
  if(operator === '+'){
    return addFunc(numArray);
  }else if(operator === '-'){
    return subtractFunc(numArray);
  }else if(operator === 'x'){
    return multiplyFunc(numArray)
  }else if(operator ==='/'){
    return divideFunc(numArray);
  }
};
//

//digit button function
let display = document.querySelector('#display')
let numbers = document.querySelectorAll('.numbers');
for(let number of numbers){
  number.addEventListener('click',()=>{
    display.textContent += number.textContent;
  });
};
//

//operator button function
let operatorButtons = document.querySelectorAll('.operateButtons');
for(let operateButton of operatorButtons){
  operateButton.addEventListener('click', () =>{
    display.textContent += ` ${operateButton.textContent} `;
    for(let button of operatorButtons){
      button.setAttribute('disabled',true);
    }
  });
}; 
//

// equal button function
let equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () =>{
  let equationStr = display.textContent;
  let equationArray = equationStr.split(' ');
  let answer = Math.round(operate(equationArray) *100) / 100;
  if(isNaN(answer) === true){
    answer = 'Error';
  }
  display.textContent = answer;
  operatorButtonCheck(display.textContent.split(''));
});
//

// clear button function
let clearButton = document.querySelector('#clear');
clearButton.addEventListener('click',() =>{
  display.textContent = '';
  let empty = [];
  operatorButtonCheck(empty);
  decimalButtonCheck(empty);
});
//

// delete button function
let deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', () =>{
  let currentDisplay = display.textContent.split('');
  currentDisplay.pop();
  operatorButtonCheck(currentDisplay);
  decimalButtonCheck(currentDisplay);
  display.textContent = currentDisplay.join('')
});
//

//operator button check function
let operatorButtonCheck = function(array){
  let operators = ['+','-','x','/'];
  let confirm = true;
  for(let operator of operators){
    if(array.includes(operator) ){
      confirm = false;
    }
  }
  if(confirm === true){
    for(let button of operatorButtons){
      button.removeAttribute('disabled');
    }
  }
};
//

// decimal button function
let decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () =>{
  display.textContent += '.';
  decimalButton.setAttribute('disabled',true);
});
//

// decimal button checker
let decimalButtonCheck = function(array){
  let confirm = true;
  for(let char of array){
    if(array.includes('.')){
      confirm = false;
    }    
  }
  if(confirm === true){
    decimalButton.removeAttribute('disabled');
  }
};
//