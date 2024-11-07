`use strict`;

function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

function main() {
  let sides = parseInt(prompt('Give the number of sides on the dice: '));
  let roll = 0;
  let ul = document.createElement('ul');
  document.body.appendChild(ul);
  
  while (roll !== sides) {
    roll = rollDice(sides);
    let li = document.createElement('li');
    li.textContent = roll.toString();
    ul.appendChild(li);
  }
}

main();
