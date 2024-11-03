`use strict`;

const num1 = parseInt(prompt(`Type a first number:`));
const num2 = parseInt(prompt(`Type a second number:`))
const num3 = parseInt(prompt(`Type a third number:`))

function summation(num1, num2, num3) {
  return num1 + num2 + num3;
}

function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

function average(num1, num2, num3) {
  return summation(num1, num2, num3) / 3;
}

summa = summation(num1, num2, num3);
product = product(num1, num2, num3);
average = average(num1, num2, num3);

document.getElementById("target").innerHTML = `The inserted numbers were ${num1}, ${num2} and ${num3}.`
document.getElementById("summation").innerHTML = `The sum of the numbers is ${summa}.`
document.getElementById("product").innerHTML = `The product of the numbers is ${product}.`
document.getElementById("average").innerHTML = `The average of the numbers is ${average}.`
