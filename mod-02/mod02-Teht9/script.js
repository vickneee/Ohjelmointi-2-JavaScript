`use strict`;

function even(arr) {
  let evenArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenArr.push(arr[i]);
    }
  }
  return evenArr;
  
}

function main() {
  const oldArrayId = document.getElementById('oldArrayId');
  const newEvenArrayId = document.getElementById('newEvenArrayId');
  
  const array = [2, 7, 4, 9, 5, 8];
  const evenArray = even(array);
  
  console.log(array);
  console.log(evenArray);
  
  oldArrayId.innerHTML = array.toString();
  newEvenArrayId.innerHTML = evenArray.toString();
}

main();
