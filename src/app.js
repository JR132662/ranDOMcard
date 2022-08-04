/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let numbers = [
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
  let suits = ["♦", "♥", "♠", "♣"];
  let Randnum = Math.floor(Math.random() * numbers.length);
  document.querySelector(".card-number").innerText = numbers[Randnum];
  console.log(Randnum);
  let SuitsRdm = Math.floor(Math.random() * suits.length);
  document.querySelector(".top-suit").innerText = suits[SuitsRdm];
  document.querySelector(".bottom-suit").innerText = suits[SuitsRdm];
  if (suits[SuitsRdm] == "♥" || [SuitsRdm] == "♣") {
    document.querySelector(".top-suit").classList.add("red");
    document.querySelector(".bottom-suit").classList.add("red");
    document.querySelector(".card-number").classList.add("red");
  }
};
