`use strict`;

const form = document.querySelector('#source');
const firstName = document.querySelector('input[name=firstname]');
const lastName = document.querySelector('input[name=lastname]');
const target = document.getElementById('target');

form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  
  if (firstName.value === '' || lastName.value === '') {
    target.innerText = `Please enter both first name and last name`;
  }
  else {
    target.innerText = `Your name is ${firstName.value} ${lastName.value}`;
  }
});

