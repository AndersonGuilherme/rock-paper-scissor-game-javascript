const userScore = document.getElementById('user-score');
const computerScore = document.getElementById("computer-score");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const result = document.getElementById("result");
const scoreBoard = document.querySelector('.score-board');
let userChoice = '';
let computerChoice = '';

game_start();

function game_start()
{
    rock.addEventListener('click', function () {
        user_choice('rock');
    });

    paper.addEventListener('click', function () {
        user_choice('paper');
    });

    scissor.addEventListener('click', function () {
        user_choice('scissor');
    });

}

function user_choice(choice){
    userChoice = 

}


function computer_choice(){
    const choices = ['rock','paper','scissor'];
    let choice = Math.floor(Math.random() * 3)
    return choices[choice];
}

