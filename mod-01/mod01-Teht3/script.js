`use strict`;

const targetId = document.getElementById('targetId');
const summationId = document.getElementById('summationId');
const productId = document.getElementById('productId');
const averageId = document.getElementById('averageId');

const num1 = parseInt(prompt(`Type a first number:`));
const num2 = parseInt(prompt(`Type a second number:`));
const num3 = parseInt(prompt(`Type a third number:`));

function summation(num1, num2, num3) {
  return num1 + num2 + num3;
}

function product(num1, num2, num3) {
  return num1 * num2 * num3;
}

function average(num1, num2, num3) {
  return summation(num1, num2, num3) / 3;
}

const summationResult = summation(num1, num2, num3);
const productResult = product(num1, num2, num3);
const averageResult = average(num1, num2, num3);

targetId.innerHTML = `The inserted numbers were ${num1}, ${num2} and ${num3}.`;
summationId.innerHTML = `The sum of the numbers is ${summationResult}.`;
productId.innerHTML = `The product of the numbers is ${productResult}.`;
averageId.innerHTML = `The average of the numbers is ${averageResult.toFixed(
    2)}.`;
