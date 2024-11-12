`use strict`;

const names = ['John', 'Paul', 'Jones'];

function printNames() {
  const target = document.getElementById('target');
  for (let i = 0; i < names.length; i++) {
    const li = document.createElement('li');
    li.innerHTML = names[i];
    target.appendChild(li);
  }
}

printNames();
