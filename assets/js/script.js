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
                alert("You clicked rock!")
            } else {
                let playerChoice = this.getAttribute("data-choice");
                alert(`You clicked ${playerChoice}!`)
                /*playgame(playerChoice);*/
            }
        })
    }
})

/**
 * Main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame() {

    let computerChoice = Math.floor(Math.random() * 5);
}

function checkWinner() {

}