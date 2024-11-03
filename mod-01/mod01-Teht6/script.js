`use strict`;

const resultId = document.getElementById("resultId");

function calculateSquareRoot() {
  const answer = confirm("Should I calculate the square root?");
  
  if (answer) {
    const number = prompt("Enter a number: ");
    if (number !== null) {
      const parsedNumber = parseInt(number);
      resultId.innerHTML = `The square root of ${parsedNumber} is ${Math.sqrt(
          parsedNumber).toFixed(2)}.`;
    }
    else {
      resultId.innerHTML = `The number is not entered.`;
    }
  }
  else {
    resultId.innerHTML = `The square root is not calculated.`;
  }
}

calculateSquareRoot();
