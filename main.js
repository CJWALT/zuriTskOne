const colorsBtn = ['red', 'green', 'yellow', 'blue', 'orange', 'purple'];

//Set the DOM
const color = document.querySelector(".guessColor");
const startAgainBtn = document.querySelector(".startAgain");
const colorOptions = document.querySelectorAll(".colorBtn");
const statusDisplay = document.querySelector(".status");
const scoreDisplay = document.querySelector(".score");

let targetColor = "";
let score = 0;
let rounds = 0; 
let maxRounds = 6;

console.log(rounds)


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
  score = 0; 
  scoreDisplay.textContent = `Score: ${score}`;
  rounds = 0;  
  
});



colorOptions.forEach((option, index) => {
  option.style.backgroundColor = colorsBtn[index];

  option.addEventListener("click", function(){
    if (rounds >= maxRounds) return;

    let selectedColor = this.style.backgroundColor;
    console.log(selectedColor)
    console.log(targetColor)
    if (selectedColor === targetColor) {
        setTimeout(() => {
            statusDisplay.innerHTML = '<i class="ri-bard-fill"></i> Congratulations! You guessed correctly!';
        }, 10); 
    score++;
    setNewTargetColor();
    } else {
        setTimeout(() => {
            statusDisplay.innerHTML = '<i class="ri-error-warning-fill"></i> Try again!';
        }, 10); 
    }

    scoreDisplay.textContent = `Score: ${score}`;
    rounds++;
    console.log(rounds)
    
    if (rounds >= maxRounds) {
        setTimeout(() => {
            statusDisplay.innerHTML = `Game Over! Final Score: ${score} <br> Click "Start Again" to play again.`;
        }, 10); 
        colorOptions.forEach(option => option.disabled = true); // Disable buttons after 6 rounds
        
    } else { 
        setNewTargetColor();
    }

});
   console.log(rounds)
 
});


// const colorsBtn = ['red', 'green', 'yellow', 'blue', 'orange', 'purple'];

// // Set the DOM
// const color = document.querySelector(".guessColor");
// const startAgainBtn = document.querySelector(".startAgain");
// const colorOptions = document.querySelectorAll(".colorBtn");
// const statusDisplay = document.querySelector(".status");
// const scoreDisplay = document.querySelector(".score");

// let targetColor = "";
// let score = 0;
// let rounds = 0;
// let maxRounds = 6;

// // Set new target color
// function setNewTargetColor() {
//     let randomNum = Math.floor(Math.random() * colorsBtn.length);
//     targetColor = colorsBtn[randomNum];  // Store as a simple string
//     color.style.backgroundColor = targetColor;
//     color.style.border = `2px solid ${targetColor}`;
//     statusDisplay.textContent = "";

//     console.log("New Target Color:", targetColor);
// }

// // Start Again button
// startAgainBtn.addEventListener("click", function () {
//     setNewTargetColor();
//     startAgainBtn.textContent = "Start Again";
//     score = 0;
//     rounds = 0;
//     scoreDisplay.textContent = `Score: ${score}`;

//     // Enable buttons again
//     colorOptions.forEach(option => option.disabled = false);
// });

// // Attach event listeners to color buttons
// colorOptions.forEach((option, index) => {
//     option.style.backgroundColor = colorsBtn[index];
//     option.addEventListener("click", function () {
//         if (rounds >= maxRounds) return;
    
//         let selectedColor = colorsBtn[index];  // Use the color name directly
    
//         console.log("Selected Color:", selectedColor);
//         console.log("Target Color:", targetColor);
    
//         if (selectedColor === targetColor) {
//             console.log("✅ MATCH - Updating status display");
//             setTimeout(() => {
//                 statusDisplay.innerHTML = '<i class="ri-error-warning-fill"></i> correct!';
//             }, 10); 
//             score++;
//         } else {
//             setTimeout(() => {
//                 statusDisplay.innerHTML = '<i class="ri-error-warning-fill"></i> warning!';
//             }, 10); 
//             statusDisplay.innerHTML = '<i class="ri-error-warning-fill"></i> Try again!';
//         }
    
//         console.log("Current Score:", score);
//         console.log("Rounds:", rounds);
    
//         scoreDisplay.textContent = `Score: ${score}`;
//         rounds++;
    
//         if (rounds >= maxRounds) {
//             console.log("🎮 Game Over - Disabling buttons.");
//             setTimeout(() => {
//                 statusDisplay.innerHTML = '<i class="ri-error-warning-fill"></i> game over!';
//             }, 10); 
//             colorOptions.forEach(option => option.disabled = true);
//         } else {
//             setNewTargetColor();
//         }
//     });
    
// });

