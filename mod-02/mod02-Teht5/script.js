`use strict`;

function numbersGiven() {
  const targetId = document.getElementById('targetId');
  let numbers = [];
  let number;
  
  do {
    number = parseInt(prompt('Give a number (0 to stop):'));
    if (!isNaN(number)) {
      if (numbers.includes(number)) {
        alert(`The number ${number} has already been given!`);
        break;
      }
      numbers.push(number);
    }
    else {
      alert('Please give a number!');
    }
  } while (number !== 0) ;
  
  numbers.sort((a, b) => a - b);
  
  targetId.innerHTML = numbers.join(', ');
}

numbersGiven();
