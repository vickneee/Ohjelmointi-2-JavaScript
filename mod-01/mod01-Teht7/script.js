`use strict`;

function summation(numberOfRolls) {
  const diceRoll = document.getElementById("diceRoll");
  let sum = 0;
  for (let i = 0; i < numberOfRolls; i++) {
    let randomResult = Math.floor(Math.random() * 6) + 1;
    diceRoll.innerHTML += `${randomResult}; `;
    sum += randomResult;
  }
  return sum;
}

function rollDice() {
  const resultId = document.getElementById("resultId");
  const numberOfRolls = parseInt(
      prompt(`How many times do you want to roll the dice?`));
  
  if (numberOfRolls < 1) {
    alert('Please insert number greater than 1.');
  }
  else if (numberOfRolls > 1) {
      const sum = summation(numberOfRolls);
      resultId.innerHTML = `Sum of ${numberOfRolls} dice rolls is ${sum}.`;
    }
  else {
    resultId.innerHTML = `The dice is not rolled.`;
  }
}

rollDice();
