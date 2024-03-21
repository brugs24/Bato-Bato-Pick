let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else if (randomNumber === 2) {
        return 'Scissor';
    }
}

function playRound(playerSelection, computerSelection) {
    const lowerCasePlayer = playerSelection.toLowerCase();

    if (lowerCasePlayer === 'rock' && computerSelection === 'Rock') {
        return "Its a tie! Try again";
    } else if (lowerCasePlayer === 'paper' && computerSelection === 'Paper') {
        return "Its a tie! Try again";
    } else if (lowerCasePlayer === 'scissor' && computerSelection === 'Scissor') {
        return "Its a tie! Try again";
    } else if (lowerCasePlayer === 'rock' && computerSelection === 'Paper') {
        computerWins++;
        return "You lose! Paper beats Rock";
    } else if (lowerCasePlayer === 'rock' && computerSelection === 'Scissor') {
        playerWins++;
        return "You win! Rock beats Scissor";
    } else if (lowerCasePlayer === 'paper' && computerSelection === 'Rock') {
        playerWins++;
        return "You win! Paper beats Rock";
    } else if (lowerCasePlayer === 'paper' && computerSelection === 'Scissor') {
        computerWins++;
        return "You lose! Scissor beats Paper";
    } else if (lowerCasePlayer === 'scissor' && computerSelection === 'Rock') {
        computerWins++;
        return "You lose! Rocks beats Scissor";
    } else if (lowerCasePlayer === 'scissor' && computerSelection === 'Paper') {
        playerWins++;
        return "You win! Scissor beats Paper";
    }
}



function playGame() {
    let playerSelection = prompt("Please pick: Rock, Paper or Scissor");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))
}

playGame();
playGame();
playGame();
playGame();
playGame();

let winner;
    if (playerWins > computerWins) {
        winner = 'Player';
    } else if (computerWins > playerWins) {
        winner = 'Computer';
    } else {
        winner = 'It\'s a tie';
    }
console.log(`The Winner: ${winner}`)
