"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function (params) {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("🚫No Number");
  } else if (guess === secretNumber) {
    displayMessage("🎉🎉 Correct Number 🔥🔥");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#00712D";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost The Game 😵‍💫😵‍💫");
      document.querySelector("body").style.backgroundColor = "#FF0000";
      document.querySelector(".score").textContent = 0;
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#000000";
  document.querySelector(".number").style.fontSize = "5em";
  displayMessage("Start guessing ---");
});
