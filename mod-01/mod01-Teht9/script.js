`use strict`;

// number = 101;

function isPrime() {
  const number = parseInt(prompt(`Give a number: `));
  const targetId = document.getElementById('targetId');
  
  if (number === 1) {
    // console.log(`No, ${number} is not a prime number.`);
    targetId.innerHTML = `No, ${number} is not a prime number.`;
  }
  
  else if (number > 1) {
    
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return targetId.innerHTML = `${number} is NOT prime`;
        // console.log(`${number} is NOT Prime`);
        // break;
      }
    }
    }
  else {
      return targetId.innerHTML = `${number} is prime.`;
      // console.log(`${number} is Prime`);
      // break;
    }
    // return targetId.innerHTML = `${number} is prime.`;
}

isPrime();
