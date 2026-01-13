/*console.log("Hi")*/

const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return options[Math.floor(Math.random() * options.length)];
}


function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors?");
    return choice ? choice.toLowerCase() : "";
}



function playGame() {
   
    let humanScore = 0;
    let computerScore = 0;

   
    function playRound(playerSelection, computerSelection) {

        const result = checkWinner(playerSelection, computerSelection);

        if (result == "Tie") {
            console.log("It's a Tie!");
        } else if (result == "Player") {
            humanScore++;
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        } else {
            computerScore++; 
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
        }
    }

    function checkWinner(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
            return "Tie";
        } else if (
            (playerSelection == "rock" && computerSelection == "scissors") ||
            (playerSelection == "scissors" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock")
        ) {
            return "Player";
        } else {
            return "Computer";
        }
    }

   
    for (let i = 0; i < 5; i++) {
        console.log(`--- Round ${i + 1} ---`);
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(playerSelection, computerSelection);
    }

   
    console.log("-----------------------");
    console.log(`Final Score -> You: ${humanScore} | Computer: ${computerScore}`);
    
    if (humanScore > computerScore) {
        console.log("Congratulations! You actully won the game!");
    } else if (humanScore < computerScore) {
        console.log("Game over. The computer won.");
    } else {
        console.log("It was a draw.");
    }
}


playGame();