function getComputerChoice() {
    choice = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * choice.length);
    const randomChoice = choice[randomIndex].toUpperCase();
    return randomChoice;
}

function getPlayerChoice() {
    choice = "paper".toUpperCase();
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        return "Computer wins!"
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return "Player wins!"
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        return "Computer wins!"
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        return "Player wins!"
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return "Player wins!"
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        return "Computer wins!"
    } else if (playerSelection === computerSelection) {
        return "It's a Tie!"
    } else if (playerSelection != "ROCK" || playerSelection != "PAPER" || playerSelection != "SCISSORS") {
        return "Input rock, paper, or scissors"
    }
}

const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

function game() {
    
}