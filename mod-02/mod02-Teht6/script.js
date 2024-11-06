`use strict`;

// Write a function that returns a random dice roll between 1 and 6. The function should not have any parameters. Write a main program that rolls the dice until the result is 6. The main program should print out the result of each roll in an unordered list (<ul>). (2p)

function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

function main() {
  let roll = 0;
  let ul = document.createElement('ul');
  document.body.appendChild(ul);
  
  while (roll !== 6) {
    roll = rollDice();
    let li = document.createElement('li');
    li.textContent = roll.toString();
    ul.appendChild(li);
  }
}

main();
