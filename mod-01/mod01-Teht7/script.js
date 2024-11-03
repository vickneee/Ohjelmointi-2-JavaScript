`use strict`;

function summation(number) {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    let randomResult = Math.floor(Math.random() * 6) + 1;
    document.getElementById("diceRoll").innerHTML += `${randomResult} `;
    sum += randomResult
  }
  return sum
}

function rollDice() {
  const diceRolls = parseInt(prompt(`How many times do you want to roll the dice?`));
  
  if (diceRolls < 1) {
    alert("Please insert number greater than 1.")
  } else {
    let sum = summation(diceRolls)
    document.getElementById("result").innerHTML = `Sum of ${diceRolls} dice rolls is ${sum}.`
  }
}

rollDice()
