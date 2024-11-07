`use strict`;

// Modify the function above so that it gets the number of sides on the dice as a parameter. With the modified function you can for example roll a 21-sided role-playing dice. The difference to the last exercise is that the dice rolling in the main program continues until the program gets the maximum number on the dice, which is asked from the user at the beginning. (2p)

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
