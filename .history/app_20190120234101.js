let userScore = 0;
let computerScore = 0;
const userScoreLabel = document.getElementById("user-score-label");
const computerScoreLabel = document.getElementById("computer-score-label");
const computerChoiceImage = document.getElementById("computer-choice-image");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const result = document.getElementById("result");
const scoreBoard = document.querySelector(".score-board");
const choices = ["rock", "paper", "scissor"];
let userChoice = "";
let computerChoice = "";

game_start();

function game_start() {
  rock.addEventListener("click", function() {
    user_choice("rock");
  });

  paper.addEventListener("click", function() {
    user_choice("paper");
  });

  scissor.addEventListener("click", function() {
    user_choice("scissor");
  });
}

function user_choice(choice) {
  userChoice = choice;
  computer_choice();
  verify_game();
}

function computer_choice() {
  let choice = Math.floor(Math.random() * 3);
  set
    computerChoice = choices[choice];
    computerChoiceImage.innerHTML =
        '<img src="./src/public/images/' + computerChoice + '.png" alt="" />';
}

function verify_game() {
  console.log(userChoice + " " + computerChoice);
  switch (userChoice + " " + computerChoice) {
    case "rock scissor":
    case "paper rock":
    case "scissor paper":
      user_win();
      break;

    case "scissor rock":
    case "rock paper":
    case "paper scissor":
      computer_win();
      break;

    case "rock rock":
    case "paper paper":
    case "scissor scissor":
      draw();
      break;
  }
}

function update_score() {
  userScoreLabel.innerHTML = userScore;
  computerScoreLabel.innerHTML = computerScore;
}

function user_win() {
  let resultText =
    userChoice.toUpperCase() +
    " covers " +
    computerChoice.toUpperCase() +
    ". You win!";
  result.innerHTML = resultText;
  console.log(userScore);
  userScore = userScore + 1;
  console.log(userScore);
  update_score();
}

function computer_win() {
  let resultText =
    userChoice.toUpperCase() +
    " loses to " +
    computerChoice.toUpperCase() +
    ". You Lost!";
  result.innerHTML = resultText;
  computerScore = computerScore + 1;
  update_score();
}

function draw() {
  let resultText =
    userChoice.toUpperCase() +
    " equals " +
    computerChoice.toUpperCase() +
    ". It's draw!";
  result.innerHTML = resultText;
}
