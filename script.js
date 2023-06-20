// Game variables
let currentPlayer = "🚀";
let playerXScore = 0;
let playerOScore = 0;
let playerOneName = "Player One";
let playerTwoName = "Player Two";
const gameboard = document.querySelector(".gameboard");
const resetBtn = document.querySelector(".reset");
const cells = document.querySelectorAll(".child");
const playerXDisplay = document.querySelector(".player-x-score");
const playerODisplay = document.querySelector(".player-o-score");
const resetScoresBtn = document.querySelector(".reset-scores");

//Winning Combinations
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Event listeners are added to each cell;
// Iterate over each element in the cells array and add a click listener event to each cell
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    // Check to see if the cell is already marked
    if (!cell.textContent) {
      // If not, fill cell with current player's emoji
      cell.textContent = currentPlayer;

      // If the current player has won, display an alert
      if (checkWin(currentPlayer)) {
        alert(
          `${
            currentPlayer === "🚀" ? playerOneName : playerTwoName
          } wins the game!`
        );

        // Update the Scoreboard and reset the game
        updateScore(currentPlayer);
        reset();
        return;
      }

      // If the game is a draw, display an alert and reset the game
      if (checkTie()) {
        alert(`It's a draw!`);
        reset();
        return;
      }

      // If there is no winner or if the game is a tie, switch to the next player
      currentPlayer = currentPlayer === "🚀" ? "🛸" : "🚀";
    }
  });
});

// Event listener is added to the reset button
resetBtn.addEventListener("click", reset);

// Event listener is added  to the reset scores button
resetScoresBtn.addEventListener("click", resetScores);

// Event listener is added to the player name form
const form = document.getElementById("twoPlayer");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  playerOneName = document.getElementById("input2").value || "Player X";
  playerTwoName = document.getElementById("input3").value || "Player O";
  playerXDisplay.textContent = `${playerOneName}: ${playerXScore}`;
  playerODisplay.textContent = `${playerTwoName}: ${playerOScore}`;
  form.reset();
  playerXDisplay.classList.add("score-color");
  playerODisplay.classList.add("score-color");
});

// Check to see if the current player has won
function checkWin(player) {
  return winningCombos.some((combo) => {
    return combo.every((index) => {
      return cells[index].textContent === player;
    });
  });
}

// Check to see if the game is a draw
function checkTie() {
  return Array.from(cells).every((cell) => {
    return cell.textContent;
  });
}

// Update the final score
function updateScore(player) {
  if (player === "🚀") {
    playerXScore++;
    playerXDisplay.textContent = `${playerOneName}: ${playerXScore}`;
  } else {
    playerOScore++;
    playerODisplay.textContent = `${playerTwoName}: ${playerOScore}`;
  }
}

// Reset the game
function reset() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  currentPlayer = "🚀";
}

// Reset the scores
function resetScores() {
  playerXScore = 0;
  playerOScore = 0;
  playerXDisplay.textContent = `${playerOneName}: ${playerXScore}`;
  playerODisplay.textContent = `${playerTwoName}: ${playerOScore}`;
}
