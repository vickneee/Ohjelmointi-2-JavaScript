`use strict`;

function calculate() {
  const calculation = document.getElementById(`calculation`);
  
  const insertedCalculation = calculation.value.trim(); // Remove extra white space
  let result;
  
  if (insertedCalculation.includes(`+`)) {
    const numbers = insertedCalculation.split(`+`);
    result = Number(numbers[0]) + Number(numbers[1]);
  } else if (insertedCalculation.includes(`-`)) {
    const numbers = insertedCalculation.split(`-`);
    result = Number(numbers[0]) - Number(numbers[1]);
  } else if (insertedCalculation.includes(`*`)) {
    const numbers = insertedCalculation.split(`*`);
    result = Number(numbers[0]) * Number(numbers[1]);
  } else if (insertedCalculation.includes(`/`)) {
    const numbers = insertedCalculation.split(`/`);
    result = Number(numbers[0]) / Number(numbers[1]);
  }
  
  document.getElementById(`result`).textContent = result;
}

document.getElementById(`start`).addEventListener(`click`, calculate);
