 /**
 * Declare constants for DOM elements
 * and possible choices
 */
 const buttons = document.getElementsByClassName("control");
 const playerScoreElement = document.getElementById("player-score");
 const computerScoreElement = document.getElementById("computer-score");
 const playerImage = document.getElementById("player-image");
 const computerImage = document.getElementById("computer-image");
 const messages = document.getElementById("messages");
 const choices = ["rock", "paper", "scissors", "lizard", "spock"];
 const movesLeftElement = document.getElementById("moves");
 let movesLeft = 10;
 let playerScore = 0;
 let computerScore = 0;

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("id") == "reset") {
            resetGame()

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
    if (movesLeft == 0) {
        return 
    }

     playerImage.src = `assets/images/${choices[playerChoice]}.png`;
     playerImage.alt = choices[playerChoice];
 
     let computerChoice = Math.floor(Math.random() * 5);
 
     computerImage.src = `assets/images/${choices[computerChoice]}.png`;
     computerImage.alt = choices[computerChoice];
 
     let result = checkWinner(choices[computerChoice], choices[playerChoice]);
 
     if (result == 'win') {
        playerScore += 1

     } else if (result == 'lose') {
        computerScore += 1

     }

    movesLeft -= 1
    updateHTML()

    if (movesLeft == 0) {
        
        if (playerScore > computerScore) {
            messages.innerText = "You Win!!"

        } else if (computerScore > playerScore) {
            messages.innerText = "Awwww... you suck..."
            
        } else {
            messages.innerText = "Draw"
        }
    }
}

function updateHTML() {
    movesLeftElement.innerText = movesLeft
    playerScoreElement.innerText = playerScore
    computerScoreElement.innerText = computerScore
}
    
function checkWinner(playerChoice, computerChoice) {

    let whatBeatsWhat = {
        'scissors': ['paper', 'lizard'],
        'paper': ['rock', 'spock'],
        'rock': ['scissors', 'lizard'],
        'lizard': ['paper', 'spock'],
        'spock': ['scissors', 'rock']
    }
        if (playerChoice == computerChoice){
            return 'draw'
        }
    
        if (whatBeatsWhat[playerChoice].includes(computerChoice)) {
            return 'win'
        }
        else {
            return 'lose'
        }
    };

function resetGame() {
    movesLeft = 10
    playerScore = 0
    computerScore = 0
    updateHTML()

    messages.innerText = ""
    }