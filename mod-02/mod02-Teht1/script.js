`use strict`;

function reverseOrder() {
  let targetId = document.getElementById('targetId');
  
  let listOfN = [];
  for (let i = 0; i < 5; i++) {
    let number = prompt('Give a number: ');
    listOfN.push(number);
    console.log(listOfN);
  }
  
  let reversedList = [];
  for (let i = listOfN.length - 1; i >= 0; i--) {
    reversedList.push(listOfN[i]);
    console.log(listOfN);
  }
  
  targetId.innerHTML = `Reversed list order is ${reversedList.join(', ')}`;
}

reverseOrder();
