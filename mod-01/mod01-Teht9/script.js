`use strict`;

function isPrime() {
  const number = parseInt(prompt(`Give a number: `));
  const targetId = document.getElementById('targetId');
  
  if (number === 1) {
    targetId.innerHTML = `No, ${number} is not a prime number.`;
    console.log(`No, ${number} is not a prime number.`);
  }
  else if (number > 1) {
      let isPrime = true;
      for (let i = 2; i < number; i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        targetId.innerHTML = `${number} is prime.`;
        console.log(`${number} is Prime`);
      } else {
        targetId.innerHTML = `${number} is NOT prime.`;
        console.log(`${number} is NOT Prime`);
      }
    }
    else if (number <= 0) {
      targetId.innerHTML = `Please enter an positive number.`;
    }
}

isPrime();
