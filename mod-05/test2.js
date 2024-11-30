'use strict';

function average(array) {
  let summa = 0;
  for (let number of array) {
    summa += number;
  }
  return summa / array.length;
}

let lista1 = [1, 2, 3, 4, 5];
console.log(average(lista1));
let lista2 = [1, 6, 3, 4];
console.log(average(lista2));

function sun(arg) {
  if (arg) {
    return `Jeeee!`;
  }
  else {
    return `Not JEeee`;
  }
}

console.log(sun(false));
