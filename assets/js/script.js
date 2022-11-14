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

/**
 * Add event listener to all the buttons
 */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playgame(playerChoice);
    });
}

/**
 * The main game function. Accepts one parameter, whick
 * is the data-choice value of the selected button
 */
function playGame(playerChoice) {

    playerImage.src = `assets/images/${choices[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 5);

    computerImage.src = `assets/images/${choices[computerChoice]}.png`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choice[computerChoice], choices[playerChoice]);

    updateScores(result);
}

if (playerChoice === "rock") {
    displayRockQuestion(num1, num2);
} else if (playerChoice === "paper") {
    displayPaperQuestion(num1, num2);
} else if (playerChoice === "scissors") {
    displayScissorsQuestion(num1, num2);
} else if (playerChoice === "lizard") {
    displayLizardQuestion(num1, num2);
} else if (playerChoice === "spock") {
    displaySpockQuestion(num1, num2);
} else {
    alert(`Unknown game type ${gameType}`);
    throw `Unknown game type ${gameType}, aborting!`;
}


/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("player-score").innerText);
    document.getElementById("player-score").innerText = ++oldScore;

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}

function displayRockQuestion() {

}

function displayPaperQuestion() {

}

function displayScissorsQuestion() {

}

function displayLizardQuestion() {

}

function displaySpockQuestion() {
    
}