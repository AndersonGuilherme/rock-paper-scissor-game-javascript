let userScore = 0;
let computerScore = 0;
const userScoreLabel = document.getElementById("user-score-label");
const computerScoreLabel = document.getElementById("computer-score-label");
const computerChoiceImage = document.getElementById("computer-choice-image");
const userChoiceImage = document.getElementById("user-choice-image");
const userLabel = document.getElementById("user-label");
const computerLabel = document.getElementById("computer-label");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const result = document.getElementById("result");
const scoreBoard = document.querySelector(".score-board");
const choicesBoard = document.querySelector(".choices");
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
}

function computer_choice() {
  let choice = Math.floor(Math.random() * 3);
  computerChoice = choices[choice];
  verify_game();
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
  show_result();
}

function fade_choices_board() {
  choicesBoard.classList.add("fadeOut");
  choicesBoard.classList.remove("fadeIn");
}

function show_choices_board() {
  choicesBoard.classList.add("fadeIn");
  choicesBoard.classList.remove("fadeOut");
}

function show_result() {
  setTimeout(function() {
    userChoiceImage.innerHTML =
      '<img src="./src/public/images/' + userChoice + '.png" alt="" />';
    computerChoiceImage.innerHTML =
      '<img src="./src/public/images/' + computerChoice + '.png" alt="" />';

    result.classList.add("fadeIn");
    result.classList.remove("fadeOut");
    computerChoiceImage.classList.add("fadeIn");
    computerChoiceImage.classList.remove("fadeOut");
    userChoiceImage.classList.add("fadeIn");
    userChoiceImage.classList.remove("fadeOut");

    fade_choices_board();
  }, 500);

  hide_result();
}

function hide_result() {
  setTimeout(function() {
    result.classList.add("fadeOut");
    result.classList.remove("fadeIn");
    computerChoiceImage.classList.add("fadeOut");
    computerChoiceImage.classList.remove("fadeIn");
    userChoiceImage.classList.add("fadeOut");
    userChoiceImage.classList.remove("fadeIn");
    show_choices_board();
  }, 2500);
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
  userScore = userScore + 1;

    setTimeout(function () {
        userLabel.classList.add('win-label');
        update_score();
    }, 500);
}

function computer_win() {
  let resultText =
    userChoice.toUpperCase() +
    " loses to " +
    computerChoice.toUpperCase() +
    ". You Lost!";
  result.innerHTML = resultText;
    computerScore = computerScore + 1;
    setTimeout(function () {
        computerLabel.classList.add('win-label');
        update_score();
    }, 500);
}

function draw() {
  let resultText =
    userChoice.toUpperCase() +
    " equals " +
    computerChoice.toUpperCase() +
    ". It's draw!";
  result.innerHTML = resultText;
}
