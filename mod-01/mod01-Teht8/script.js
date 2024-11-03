`use strict`;

function isLeapYear(year) {
  return (year % 4 ===0) && (year % 100 !== 0) || (year % 400 === 0);
}

function printLeapYears() {
  const leapYearList = document.getElementById("leapYearsList");
  const startYear = parseInt(prompt("Give a start year: "));
  const endYear = parseInt(prompt("Give an end year: "));
  
  if ((startYear === null) || (endYear === null)) {
    alert(`Please insert a year.`);
  }
  else {
    if (startYear < endYear) {
      for (let year = startYear; year < endYear; year++) {
        if (isLeapYear(year)) {
          const listItem = document.createElement("li");
          listItem.innerHTML = year.toString();
          leapYearList.appendChild(listItem);
        }
      }
    }
    else {
      alert(`The start year must be smaller than the end year.`);
    }
  }
}


printLeapYears();
