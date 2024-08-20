/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const num = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const symbols = ["♦", "♥", "♠", "♣"];
  const color = ["red", "black"];
  let numAleatorio = Math.floor(Math.random() * num.length);
  let symbolsAleatorio = Math.floor(Math.random() * symbols.length);
  let colorAleatorio = Math.floor(Math.random() * color.length);
  let espacioFiguras = document.querySelectorAll("#symbols");
  espacioFiguras.forEach(element => {
    element.innerText = symbols[symbolsAleatorio];
    element.style.color = color[colorAleatorio];
  });
  let espacioDigit = document.getElementById("digit");
  espacioDigit.innerText = num[numAleatorio];
};
