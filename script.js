/*
- rock = 1 
- paper = 2
- scissors = 3
- rock <> scissors = rock
- paper <> rock = paper
- scissors <> paper = scissors
*/

const choices = Array.from(document.querySelectorAll(".choice"));
const yourScoreElem = document.querySelector(".your-score");
const computerScoreElem = document.querySelector(".computer-score");
const yourChoiceElem = document.querySelector(".your-choice");
const computerChoiceElem = document.querySelector(".computer-choice");
const resetButton = document.querySelector(".reset-button");
const winnerElem = document.querySelector(".winner");
const defaultScore = 0;
const defaultChoice = "choose";
const NUM_OF_ROUNDS = 10;

var roundCount = 0;
var gameActive = true;

var humanScore = 0;
var computerScore = 0;

function getSelectedChoice(event) {
  if (!gameActive) return;
  var humanChoice = event.target.dataset.choice;
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
  var randomVal = Math.floor(Math.random() * 3);
  var handSignal;
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
