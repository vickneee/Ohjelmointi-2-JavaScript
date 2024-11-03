`use strict`;

const welcomeId = document.getElementById("welcomeId");
const resultId = document.getElementById("resultId");

const name = prompt(`Give your name:`);

function randomClass() {
  const randomClasses = Math.floor(Math.random() * 4) + 1;
  let chosenClass;
  switch(randomClasses) {
    case 1:
      chosenClass = `Gryffindor`;
      break;
    case 2:
      chosenClass = `Slytherin`;
      break;
    case 3:
      chosenClass = `Hufflepuff`;
      break;
    case 4:
      chosenClass = `Ravenclaw`;
      break;
  }
  return chosenClass;
}

result = randomClass();

welcomeId.innerHTML = `Welcome to Hogwarts, ${name}!`;
resultId.innerHTML = `${name}, you have been assigned to the ${result} class.`;
