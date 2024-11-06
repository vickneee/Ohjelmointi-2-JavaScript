`use strict`;

function largestToTheSmallest() {
  const targetId = document.getElementById('targetId');
  let numbers = [];
  let number;
  
  do {
    number = parseInt(prompt('Give a number (0 to stop):'));
    if (!isNaN(number)) {
      numbers.push(number);
    }
    else {
      alert('Please give a number!');
    }
  } while (number !== 0);
  
  numbers.pop(); // remove the last zero
  
  numbers.sort((a, b) => b - a);
  
  targetId.innerHTML = numbers.join(', ');
  console.log(numbers);
}

largestToTheSmallest();
