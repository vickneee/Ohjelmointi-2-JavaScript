`use strict`;

async function fetchJoke() {
  const url = `https://api.chucknorris.io/jokes/random`;
  try {
    const response = await fetch(url);
    const joke = await response.json();
    console.log(joke.value);
  } catch (error) {
    console.log(error.message);
  }
}

fetchJoke().catch(error => console.log(error.message));
