`use strict`;

const target = document.getElementById("target");

let name = prompt(`Type your name:`);

target.innerHTML = `Hello, ${name}!`;
