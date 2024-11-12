`use strict`;

function calculator() {
  const firstInteger = parseInt(document.getElementById('num1').value, 10);
  const secondInteger = parseInt(document.getElementById('num2').value, 10);
  const selectedValue = document.getElementById('operation').value;
  const result = document.getElementById('result');
  
  if (isNaN(firstInteger) || isNaN(secondInteger)) {
    result.innerHTML = `Please enter a number`;
    return;
  }
  
  switch (selectedValue) {
    case 'add':
      let addition = firstInteger + secondInteger;
      result.innerHTML = `${addition}`;
      break;
    case 'sub':
      let subtraction = firstInteger - secondInteger;
      result.innerHTML = `${subtraction}`;
      break;
    case 'multi':
      let multiply = firstInteger * secondInteger;
      result.innerHTML = `${multiply}`;
      break;
    case 'div':
      let division = firstInteger / secondInteger;
      result.innerHTML = `${division}`;
      break;
    default:
      result.innerHTML = `No Result`;
  }
}

document.getElementById('start').addEventListener('click', calculator);

