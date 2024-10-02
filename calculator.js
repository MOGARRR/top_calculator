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

//digit button functions
let display = document.querySelector('#display')
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
  });
}
//