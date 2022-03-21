"use strict";

const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("btn");
generateJoke();

//Events
btn.addEventListener("click", generateJoke);
//random color
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

async function generateJoke() {
    const config = {
        headers: {
            Accept: "application/json",
        },
    };
    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();

    jokeEl.innerHTML = data.joke;
    
  const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
}
