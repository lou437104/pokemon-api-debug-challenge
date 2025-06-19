const btn = document.getElementById("searchBtn");
const resultText = document.querySelector("#pokeResult");
const image = document.querySelector("#pokeImg");
const name = document.getElementById("pokeName").value.trim().toLowerCase();

btn.addEventListener("click", function() {
  const name = document.getElementById("pokeName").value.toLowerCase();

  btn.disabled = true;
  btn.textContent = "Searching...";

  fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then(response => response.json())
    .then(data => {
      resultText.textContent = data.name.toUpperCase();
      image.src = data.sprites.front_default;
    })
    .catch(err => {
      resultText.textContent = "Not Found!";
      image.src = "";
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = "Search";
    });
});
