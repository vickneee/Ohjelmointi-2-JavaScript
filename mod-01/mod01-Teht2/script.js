`use strict`;

const targetId = document.getElementById("targetId");
const name = prompt(`Type your name:`);
targetId.innerHTML = `Hello, ${name}!`;
