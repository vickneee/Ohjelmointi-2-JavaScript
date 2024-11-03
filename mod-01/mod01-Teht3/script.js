`use strict`;

const num1 = parseInt(prompt(`Type a first number:`));
const num2 = parseInt(prompt(`Type a second number:`))
const num3 = parseInt(prompt(`Type a third number:`))

function summation(num1, num2, num3) {
  return num1 + num2 + num3;
}

summa = summation(num1, num2, num3);

document.getElementById("target").innerHTML = `The sum of ${num1}, ${num2} and ${num3} is ${summa}.`
