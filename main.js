let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button')

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * choice.length);
    const randomChoice = choice[randomIndex].toUpperCase();
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
    let result = '';
    let wonGame = 'You won the game!';
    let lostGame = 'You lost the game :(';

    if(
        (playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
        (playerSelection == "PAPER" && computerSelection == "ROCK") ||
        (playerSelection == "SCISSORS" && computerSelection == "PAPER")
    ) {
            playerScore++;
            result = `You won the round! ${playerSelection} beats ${computerSelection}<br><br>Your score: ${playerScore}<br>Computer score: ${computerScore}`;

            if (playerScore == 5) {
                document.getElementById('end-game-outcome').textContent = wonGame;
                document.getElementById('end-game-outcome').style.cssText = 'color: #0a5e1a; font-weight: bold;';
                endGame();
            }
      }
    else if (playerSelection == computerSelection) {
        result = `It's a tie. You both chose ${playerSelection}<br><br>Your score: ${playerScore}<br>Computer score: ${computerScore}`;
    } else {
        computerScore++;
        result = `You lost the round! ${playerSelection} beats ${computerSelection}<br><br>Your score: ${playerScore}<br>Computer score: ${computerScore}`;

        if (computerScore == 5) {
            document.getElementById('end-game-outcome').textContent = lostGame;
            document.getElementById('end-game-outcome').style.cssText = 'color: #8f1414; font-weight: bold';
            endGame();
        }
    }
    document.getElementById('result').innerHTML = result;
    return;
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value);
    });
});

function endGame() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}