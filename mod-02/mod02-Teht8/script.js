`use strict`;

function concat(arrOfStrings) {
  let result = '';
  
  for (let i = 0; i < arrOfStrings.length; i++) {
    result += arrOfStrings[i];
  }
  return result;
}

function main() {
  const targetId = document.getElementById('targetId');
  const hardCodedArrOfStrings = ['Johnny', 'DeeDee', 'Joey', 'Marky'];
  targetId.innerHTML = concat(hardCodedArrOfStrings);
}

main();
