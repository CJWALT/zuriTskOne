const colorsBtn = ['red', 'green', 'yellow', 'blue', 'orange', 'purple'];

//Set the DOM
const color = document.querySelector(".guessColor");
const startAgainBtn = document.querySelector(".startAgain");
const colorOptions = document.querySelectorAll(".colorBtn");
const statusDisplay = document.querySelector(".status");
const scoreDisplay = document.querySelector(".score");

let targetColor = "";
let score = 0;



function getRandomNum() {
    return Math.floor(Math.random() * colorsBtn.length);
  }


function setNewTargetColor() {
  let randomNum = getRandomNum();
  targetColor = colorsBtn[randomNum];
  color.style.backgroundColor = targetColor;
color.style.border=targetColor;
  statusDisplay.textContent = "";

}

startAgainBtn.addEventListener("click", function () {
  setNewTargetColor();
  startAgainBtn.textContent = "Start Again";
  scoreDisplay.textContent = `Score: `;
  
});



colorOptions.forEach((option, index) => {
  option.style.backgroundColor = colorsBtn[index];
  option.addEventListener("click", function(){
    let selectedColor = this.style.backgroundColor;
    if (selectedColor === targetColor) {
    statusDisplay.textContent = "Congratulations! You guessed correctly!";
    score++;
    setNewTargetColor();
    } else {
    statusDisplay.textContent = "Try again!";
    }
    scoreDisplay.textContent = `Score: ${score}`;

  });
});
