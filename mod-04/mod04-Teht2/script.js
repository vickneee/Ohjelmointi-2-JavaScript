`use strict`;

// // Prevent form from submitting normally and handle with JavaScript
// document.querySelector('form').addEventListener('submit', async function(evt) {
//   evt.preventDefault();
//
//   // const query = document.getElementById('query').value;
//   const query = document.querySelector("input[name=q]").value;
//   const url = `https://api.tvmaze.com/search/shows?q=${query}`;
//
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.log(data); // Display results in console
//   } catch (error) {
//     console.log(error.message);
//   }
// });
