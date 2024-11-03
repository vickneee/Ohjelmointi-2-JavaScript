`use strict`;


function calculateSquareRoot() {
  const answer = confirm("Should I calculate the square root?");
  
  if (answer) {
    const number = prompt("Enter a number: ");
    if (number !== null) {
      const parsedNumber = parseInt(number);
      document.getElementById(
          "result").innerHTML = `The square root of ${parsedNumber} is ${Math.sqrt(
          parsedNumber)}.`;
    }
    else {
      document.getElementById(
          "result").innerHTML = `The number is not entered.`;
    }
  }
  else {
    document.getElementById(
        "result").innerHTML = `The square root is not calculated.`;
  }
}

calculateSquareRoot();
