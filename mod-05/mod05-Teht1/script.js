`use strict`;

const myText = document.getElementById("myText");
const myBtn = document.getElementById("myBtn")

myBtn.onclick = function() {
	// myText.textContent = `Tämä teksti on nyt vaihdettu!`;
	myText.innerHTML = `Tämä teksti on nyt vaihdettu!`;
}
