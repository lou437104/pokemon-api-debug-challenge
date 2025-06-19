const btn = document.getElementByID("searchBtn");
const resultText = document.querySelector("#pokeResult");
const image = document.querySelector("pokeImg");

btn.addEventListener("click", function() {
  const name = document.getElementById("pokeName").value.toLowercase;

  fetch("https://pokeapi.com/api/v2/pokemon/" + name)
    .then(response => response.json())
    .then(data => {
      resultText.text = data.name.toUpperCase();
      image.src = data.sprites.front_default;
    })
    .catch(err => {
      resultText.innerHTML = "Not Found!";
      image.src = "";
    })
});
