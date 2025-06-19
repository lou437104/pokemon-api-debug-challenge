# 🐛 Pokémon Finder – Debugging Challenge

This project began as a deliberately broken version of a simple Pokémon search app. The goal was to simulate real-world debugging conditions by fixing a wide range of issues across HTML, CSS, and JavaScript.

---

## 🔧 Project Description

The original code was full of intentional bugs, including:
- HTML structural problems
- CSS syntax and styling issues
- JavaScript errors in logic, API handling, and DOM manipulation

I went through the code line-by-line, identified each bug, and fixed them to build a fully working application that:
- Lets users search for a Pokémon by name
- Fetches data from the [PokéAPI](https://pokeapi.co/)
- Displays the Pokémon’s name and image
- Handles invalid input gracefully

---

## ✅ What I Fixed

- Corrected HTML element structure (e.g. heading tags, self-closing inputs)
- Fixed broken CSS syntax (`text-align center`, missing `px`, missing semicolons)
- Debugged JavaScript errors:
  - Typos in method names (`getElementByID`, `toLowercase`)
  - Broken API URL
  - Incorrect use of `.text`, `.innerHTML`, and selectors
  - Proper error handling using `.catch()`

---

## 💡 Skills Practiced

- Manual bug tracking and resolution
- DOM manipulation and input handling
- Fetching and displaying API data
- Clean coding practices and accessibility improvements
- Writing helpful commit messages to track debugging progress

---

## 🧠 Educational Purpose

This was a personal learning exercise to practice **debugging real-world front-end issues**. Each fix was made intentionally and committed separately to reinforce:
- Isolating bugs efficiently
- Reading code critically
- Developing resilience during frustrating bugs (e.g. missing comma bugs!)

---

## 🧪 Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)
- [PokéAPI](https://pokeapi.co/)

---

## 📦 How to Use

1. Clone the repo:
```bash
git clone https://github.com/your-username/pokemon-api-debug-challenge.git
cd pokemon-api-debug-challenge
