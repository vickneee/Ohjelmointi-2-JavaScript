`use strict`;

const target = document.getElementById("target");

const name = prompt(`Type your name:`);

target.innerHTML = `Hello, ${name}!`;
