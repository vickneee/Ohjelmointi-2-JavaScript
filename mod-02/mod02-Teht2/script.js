`use strict`;

function participants() {
  const targetOl = document.getElementById("targetOl");

  const participants = [];
  const numberOfParticipants = parseInt(prompt(`How many participants are there?`));
  
  for (let i = 0; i < numberOfParticipants; i++) {
    participants.push(prompt(`Enter the participants name:`));
  }
  
  participants.sort();
  
  // for (let i= 0; i < participants.length; i++) {
  //   const li = document.createElement("li");
  //   li.textContent = participants[i];
  //   targetOl.appendChild(li);
  // }
  
  participants.forEach(participant => {
    const li = document.createElement('li');
    li.textContent = participant;
    targetOl.appendChild(li);
  });
}

participants();
