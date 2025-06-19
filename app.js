const btn = document.getElementById("searchBtn");
const resultText = document.querySelector("#pokeResult");
const image = document.querySelector("#pokeImg");

btn.addEventListener("click", function() {
  const name = document.getElementById("pokeName").value.trim().toLowerCase();

  btn.disabled = true;
  btn.textContent = "Searching...";

  fetch("https://pokeapi.co/api/v2/pokemon/" + name)
    .then(response => {
      if (!response.ok) {
        throw new Error("Not Found");
      }
      return response.json();
    })
    .then(data => {
      resultText.textContent = data.name.toUpperCase();
      image.src = data.sprites.front_default;
      image.alt = data.name + " image";
    })
    .catch(err => {
      resultText.textContent = "Not Found!";
      image.src = "";
      image.alt = "No image";
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = "Search";
    });
});
