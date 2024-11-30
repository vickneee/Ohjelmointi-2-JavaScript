'use strict';

// When the form is submitted...
const airportForm = document.querySelector('#airport-form');
airportForm.addEventListener('submit', async function(evt) {
  // ... prevent the default action.
  evt.preventDefault();
  // get value of input element
  const code = document.querySelector('input[name=icao]').value;
  try {                                               // error handling: try/catch/finally
    const response = await fetch(`http://127.0.0.1:3000/airport/${code}`);    // starting data download, fetch returns a promise which contains an object of type 'response'
    const jsonData = await response.json();          // retrieving the data retrieved from the response object using the json() function
    console.log(jsonData.ICAO, jsonData.Name);    // log the result to the console
  } catch (error) {
    console.log(error.message);
  }
});
