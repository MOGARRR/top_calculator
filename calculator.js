// operator functions
const addFunc = function(array){
  return array.reduce((total,currentnum) => total + currentnum,);
}
const subtractFunc = function(array){
  return array.reduce((total,currentnum) => total - currentnum,);
}
const multiplyFunc = function(array){
  return array.reduce((total,currentnum) => total * currentnum,);
}
const divideFunc = function(array){
  return array.reduce((total,currentnum) => total / currentnum,);
}
//

// operate function
let operate = function(array){
  let operators = ['+','-','x','/'];
  let operator = '';
  for(let i = 0; i <= array.length; i++){
    if(operators.includes(array[i])){
      operator = array[i];
      array.splice(i,1);
    } else{
      Number(array[i]);
    }

  }
  if(operator === '+'){
    return addFunc(array);
  }else if(operator === '-'){
    return subtractFunc(array);
  }else if(operator === 'x'){
    return multiplyFunc(array)
  }else if(operator ==='/'){
    return divideFunc(array);
  }
}
//

//digit button function
let display = document.querySelector('#display')
let numbers = document.querySelectorAll('.numbers');
for(let number of numbers){
  number.addEventListener('click',()=>{
    display.textContent += number.textContent;
  });
}
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
} 

// equal button function
let equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () =>{
  let equationStr = display.textContent;
  let equationArray = equationStr.split(' ')
  display.textContent = operate(equationArray);
  for(let button of operatorButtons){
    button.removeAttribute('disabled');
  }
});
