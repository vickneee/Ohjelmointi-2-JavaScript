`use strict`;

// Prevent form from submitting normally and handle with JavaScript
document.querySelector('form').addEventListener('submit', async function(evt) {
  evt.preventDefault();
  
  // const query = document.getElementById('query').value;
  const query = document.querySelector('input[name=q]').value;
  const url = `https://api.tvmaze.com/search/shows?q=${query}`;
  const results = document.getElementById('results');
  
  // Clear previous results
  results.innerHTML = '';
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);  // Display results in console
    
    data.forEach(item => {
      const show = item.show;
      
      // Create article element
      const article = document.createElement('article');
      
      // Add show name to article
      const h2 = document.createElement('h2');
      h2.textContent = show.name;
      article.appendChild(h2);
      
      // Add a show link
      const a = document.createElement('a');
      a.href = show.url;
      a.target = '_blank';
      article.appendChild(a);
      
      // Add show image using ternary operator AND placeholder image
      const placeholder = './placeholder.png';  //Prime target to test if image is not found
      const img = document.createElement('img');
      img.src = show.image?.medium ? show.image.medium : placeholder;
      img.alt = show.image?.medium ? show.name : 'Image not found';
      a.appendChild(img);
      
      // Add show summary
      if (show.summary) {
        const summary = document.createElement('div');
        summary.innerHTML = show.summary;
        article.appendChild(summary);
      }
      
      results.appendChild(article);
    });
    
  } catch (error) {
    console.log(error.message);
  }
});


