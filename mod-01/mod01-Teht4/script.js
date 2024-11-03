`use strict`;

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

document.getElementById("welcome").innerHTML = `Welcome ${name}!`;
document.getElementById("result").innerHTML = `${name}, as a new student, you have been assigned to the ${result} class.`;
