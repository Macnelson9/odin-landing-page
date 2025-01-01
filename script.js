"use strict";

// Data Sets
const emojis = [
  "😁 Happy",
  "😂 Cheerful",
  "😎 Cool",
  "😘 Love",
  "🤗 Excited",
  "😏 Observant",
  "😪 Not Interested",
];

const colors = [
  " #1f2937",
  "rgb(124, 164, 221)",
  "rgb(27, 185, 13)",
  "rgb(240, 12, 12)",
  "rgb(157, 12, 214)",
  "rgb(216, 14, 155)",
  "rgb(0, 0, 0)",
];

// Selected elements
const moodBtn = document.querySelector(".cta-btn-emoji");
const mood = document.querySelector(".mood");
const containerBg = document.querySelector(".cta-container");

// Event handlers
moodBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const randomNumber = Math.floor(Math.random() * colors.length);
  const randomNumber2 = Math.floor(Math.random() * emojis.length);

  mood.innerHTML = `Mood: ${emojis[randomNumber2]}`;
  containerBg.style.backgroundColor = colors[randomNumber];
});
