`use strict`;

const form = document.querySelector(`#search-form`);

form.addEventListener(`submit`, async function(evt) {
  evt.preventDefault();
  
  const query = document.querySelector(`#query`);
  const results = document.querySelector(`#results`);
  const url = `https://api.chucknorris.io/jokes/search?query=${query.value}`;
  
  // Clear previous results
  results.innerHTML = ``;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    let article = document.createElement(`article`);
    results.appendChild(article);
    
    if (data.result.length === 0) {
      let p = document.createElement(`p`);
      p.textContent = `No results found.`;
      article.appendChild(p);
    }
    else {
      data.result.forEach(joke => {
        let p = document.createElement(`p`);
        p.textContent = joke.value 
        article.appendChild(p);
      });
    }
  } catch (error) {
    console.error(`Error: `, error);
  }
});
