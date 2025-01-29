/*
- rock = 1 
- paper = 2
- scissors = 3
- rock <> scissors = rock
- paper <> rock = paper
- scissors <> paper = scissors
*/

var choices = Array.from(document.querySelectorAll(".choice"));
var yourScoreElem = document.querySelector(".your-score");
var computerScoreElem = document.querySelector(".computer-score");
var yourChoiceElem = document.querySelector(".your-choice");
var computerChoiceElem = document.querySelector(".computer-choice");
var resetButton = document.querySelector(".reset-button");
var winnerElem = document.querySelector(".winner");
var defaultScore = 0;
var defaultChoice = "choose";

var roundCount = 0;
const NUM_OF_ROUNDS = 10;
var gameActive = true;

var humanScore = 0;
var computerScore = 0;

function getSelectedChoice(event) {
  if (!gameActive) return;
  let humanChoice = event.target.dataset.choice;
  roundCount++;

  if (roundCount > NUM_OF_ROUNDS) {
    let winner = checkWinner(humanScore, computerScore);
    winnerElem.textContent = winner;
    gameActive = false;
    return;
  }

  playRound(humanChoice, getComputerChoice());
}

function getComputerChoice() {
  let randomVal = Math.floor(Math.random() * 3);
  let handSignal;
  if (randomVal == 1) {
    handSignal = "rock";
  } else if (randomVal == 2) {
    handSignal = "paper";
  } else {
    handSignal = "scissors";
  }
  return handSignal;
}

function playRound(humanChoice, computerChoice) {
  yourChoiceElem.textContent = humanChoice;
  computerChoiceElem.textContent = computerChoice;
  if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "paper" && computerChoice == "rock") ||
    (humanChoice == "scissors" && computerChoice == "paper")
  ) {
    humanScore++;
  } else if (
    (computerChoice == "rock" && humanChoice == "scissors") ||
    (computerChoice == "paper" && humanChoice == "rock") ||
    (computerChoice == "scissors" && humanChoice == "paper")
  ) {
    computerScore++;
  }

  yourScoreElem.textContent = humanScore;
  computerScoreElem.textContent = computerScore;
}

function checkWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    return "You won";
  } else if (humanScore < computerScore) {
    return "You lost";
  } else if (humanScore == computerScore) {
    return "It's a tie";
  }
}

function resetGame() {
  gameActive = true;
  roundCount = 0;
  humanScore = 0;
  computerScore = 0;
  yourChoiceElem.textContent = defaultChoice;
  computerChoiceElem.textContent = defaultChoice;
  yourScoreElem.textContent = defaultScore;
  computerScoreElem.textContent = defaultScore;
  winnerElem.textContent = "";
}

choices.forEach(function addEvents(choice) {
  choice.addEventListener("click", getSelectedChoice);
});

resetButton.addEventListener("click", resetGame);
