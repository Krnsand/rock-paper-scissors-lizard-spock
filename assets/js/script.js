 /**
 * Declare constants for DOM elements
 * and possible choices
 */
 const buttons = document.getElementsByClassName("control");
 const playerScore = document.getElementById("player-score");
 const computerScore = document.getElementById("computer-score");
 const playerImage = document.getElementById("player-image");
 const computerImage = document.getElementById("computer-image");
 const messages = document.getElementById("messages");
 const choices = ["rock", "paper", "scissors", "lizard", "spock"];


document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-choice") === "rock") {
                checkWinner();
            } else {
                let playerChoice = this.getAttribute("data-choice");
                runGame(playerChoice);
            }
        })
    }

});

/**
 * Main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(playerChoice) {

     playerImage.src = `assets/images/${choices[playerChoice]}.png`;
     playerImage.alt = choices[playerChoice];
 
     let computerChoice = Math.floor(Math.random() * 5);
 
     computerImage.src = `assets/images/${choices[computerChoice]}.png`;
     computerImage.alt = choices[computerChoice];
 
     let result = checkWinner(choices[computerChoice], choices[playerChoice]);
 
     updateScores(result);
}

function checkWinner(playerChoice, computerChoice) {
    if (playerChoice === 'scissors'){
        if (computerChoice === 'scissors'){
            return 'draw'
        }
        else if (computerChoice === 'rock'){
            return 'lose'
        }
        else if (computerChoice === 'paper'){
            incrementScore()
        }
        else if (computerChoice === 'lizard'){
            incrementScore()

        } else if (computerChoice === 'spock'){
            return 'lose'
        }
    } 
    else if (true){

    }
}

/**
 * Get the current score from the DOM and increment i by 1
 */
function incrementScore() {
    let updateScores = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++updateScores;
}

    
/*function checkWinner(playerChoice, computerChoice) {

    let whatBeatsWhat = {
        'scissors': 'paper', 'lizard';
        'paper': 'rock', 'spock';
        'rock': 'scissors', 'lizard';
        'lizard': 'paper', 'spock';
        'spock': 'scissors', 'rock';
    }
        if (playerChoice == computerChoice){
            return 'draw'
        }
    
        if (whatBeatsWhat[playerChoice] == computerChoice) {
            return 'win'
        }
        else {
            return 'lose'
        }
    };*/