/*
- rock = 1 
- paper = 2
- scissors = 3
- rock <> scissors = rock
- paper <> rock = paper
- scissors <> paper = scissors
*/

var humanScore = 0;
var computerScore = 0;

function randomHandSignal() {
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

function getHumanChoice() {
  let choice = prompt("Enter Hand Signal: ").toLowerCase();
  return choice;
}

/*
- rock = 1 
- paper = 2
- scissors = 3
- rock <> scissors = rock
- paper <> rock = paper
- scissors <> paper = scissors
*/

function playRound(humanChoice, computerChoice) {
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
  } else {
    humanScore++;
    computerScore++;
  }

  console.log(`Human: ${humanChoice} , Computer: ${computerChoice}`);
  console.log(`HumanScore: ${humanScore} , ComputerScore: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won");
  } else if (humanScore < computerScore) {
    console.log("You lost");
  } else if (humanScore == computerScore) {
    console.log("Tiee");
  }
}

playRound(getHumanChoice(), randomHandSignal());
