`use strict`;

function dogList() {
  const targetUl = document.getElementById('targetUl');
  const dogs = [];
  
  for (let i = 0; i < 6; i++) {
    dogs.push(prompt(`Give a dog name: `));
  }
  
  dogs.sort().reverse();
  
  for (let i = 0; i < dogs.length; i++) {
    const li = document.createElement('li');
    li.textContent = dogs[i];
    targetUl.appendChild(li);
  }
  
}

dogList();
