`use strict`;

const target = document.getElementById("target");
const summationId = document.getElementById("summationId");
const productId = document.getElementById("productId");
const averageId = document.getElementById("averageId");

let num1 = parseInt(prompt(`Type a first number:`));
let num2 = parseInt(prompt(`Type a second number:`))
let num3 = parseInt(prompt(`Type a third number:`))

function summation(num1, num2, num3) {
  return num1 + num2 + num3;
}

function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

function average(num1, num2, num3) {
  return summation(num1, num2, num3) / 3;
}

let summationResult = summation(num1, num2, num3);
let productResult = product(num1, num2, num3);
let averageResult = average(num1, num2, num3);

target.innerHTML = `The inserted numbers were ${num1}, ${num2} and ${num3}.`
summationId.innerHTML = `The sum of the numbers is ${summationResult}.`
productId.innerHTML = `The product of the numbers is ${productResult}.`
averageId.innerHTML = `The average of the numbers is ${averageResult.toFixed(2)}.`
