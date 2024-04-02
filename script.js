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
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");
const result = document.querySelector("#result");
const round = document.querySelector("#round");
const pick = document.querySelector("#pick");
const winner = document.querySelector("#winner");

function printResult() {
    result.textContent = "Score: Player " + playerWins + " Computer " + computerWins;  
}
function calculateFinalResult() {
    let finalResult;
    if (playerWins > computerWins) {
        finalResult = 'Player';
    } else if (computerWins > playerWins) {
        finalResult = 'Computer';
    } else {
        finalResult = 'It\'s a tie';
    }
    winner.textContent = "The Winner: " + finalResult;
}


rock.addEventListener("click", () => {
    playerSelection = "Rock";
    let computerSelection = getComputerChoice();
    pick.textContent = "Player pick: " + playerSelection +" Computer Pick: " + computerSelection;

    if (computerSelection === 'Rock') {
        round.textContent = "It's a tie! Try again";
    } else if (computerSelection === 'Paper') {
        computerWins++;
        round.textContent = 'You lose! Paper beats Rock';
    } else if (computerSelection === 'Scissor') {
        playerWins++;
        round.textContent = 'You win! Rock beats Scissor';
    }; 
    printResult();
    calculateFinalResult();
});

paper.addEventListener("click", () => {
    playerSelection = "Paper";
    let computerSelection = getComputerChoice();
    pick.textContent = "Player pick: " + playerSelection +" Computer Pick: " + computerSelection;

    if (computerSelection === 'Rock') {
        playerWins++;
        round.textContent = "You win! Paper beats Rock";
    } else if (computerSelection === 'Paper') {
        round.textContent = "It's a tie! Try again";
    } else if (computerSelection === 'Scissor') {
        computerWins++;
        round.textContent = 'You lose! Scissor beats Paper';
    };
    printResult();
    calculateFinalResult();
});

scissor.addEventListener("click", () => {
    playerSelection = "Scissor";
    let computerSelection = getComputerChoice();
    pick.textContent = "Player pick: " + playerSelection +" Computer Pick: " + computerSelection;

    if (computerSelection === 'Rock') {
        computerWins++;
        round.textContent = "You lose! Rock beats Scissor";
    } else if (computerSelection === 'Paper') {
        playerWins++
        round.textContent = "You win! Scissor beats Paper";
    } else if (computerSelection === 'Scissor') {
        round.textContent = "It's a tie! Try again";
    };
    printResult();
    calculateFinalResult();
});


/*

function playGame() {
//    let playerSelection = prompt("Please pick: Rock, Paper or Scissor");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection))
}

*/




