`use strict`;

function randomClass() {
  const welcomeId = document.getElementById('welcomeId');
  const resultId = document.getElementById('resultId');
  
  const name = prompt(`Give your name:`);
  
  if (name === null || name === '') {
    alert(`Please insert your name.`);
    return randomClass();
  }
  else {
    const randomClasses = Math.floor(Math.random() * 4) + 1;
    let chosenClass;
    switch (randomClasses) {
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
    let result = chosenClass;
    welcomeId.innerHTML = `Welcome to Hogwarts, ${name}!`;
    resultId.innerHTML = `Our four classes are Gryffindor, Slytherin, Hufflepuff, and Ravenclaw.<br>
    ${name}, you have been assigned to the ${result} class.`;
  }
}

randomClass();
