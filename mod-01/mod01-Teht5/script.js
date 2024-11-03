`use strict`;

function isLeapYear(year) {
  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
}

function printResult() {
  const resultId = document.getElementById("resultId");
  const year = prompt("Give a year: ");
  
  if (year === null || year === '') {
    alert(`Please insert a year.`);
  }
  else {
    if (isLeapYear(year)) {
      resultId.innerHTML = `${year} is a leap year.`;
    }
    else {
      resultId.innerHTML = `${year} is not a leap year.`;
    }
  }
}

printResult();
