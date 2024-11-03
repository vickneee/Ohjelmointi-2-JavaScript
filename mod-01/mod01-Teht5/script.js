`use strict`;

const year = prompt("Give a year: ");

function isLeapYear(year) {
  return (year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0);
}

document.getElementById("result").innerHTML = isLeapYear(year) ? `The year ${year} is a leap year.` : `The year ${year} is not a leap year.`;
