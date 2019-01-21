const userScoreLabel = document.getElementById("user-score_label");
const userScore = 0;
const computerScoreLabel = document.getElementById("computer-score_label");
const computerScore = 0;
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
  computerChoice = choices[choice];
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
      comp();
      break;

    case "rock rock":
    case "paper paper":
    case "scissor scissor":
      draw();
      break;
  }
}

function update_score(){

}
function user_win() {
  let resultText = userChoice + " covers " + computerChoice + ". You win!";
  result.innerHTML = resultText;
}

function computer_win() {
  let resultText = userChoice + " loses to " + computerChoice + ". You Lost!";
  result.innerHTML = resultText;
}

function draw() {
  let resultText = userChoice + " equals " + computerChoice + ". It's draw!";
  result.innerHTML = resultText;
}
