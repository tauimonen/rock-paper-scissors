function getComputerChoice() {
    const rndInt = Math.floor(Math.random() * 3) + 1;
    let computerChoice = "";
    if (rndInt === 1) {
        computerChoice = "rock";
    } else if (rndInt === 2) {
        computerChoice = "paper";
    } else if (rndInt === 3) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")) {
        return "You won!";
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "rock")) {
        return "You lose!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    console.log("Result: You: " + playerScore + " Computer: " + computerScore);
    
    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("Tie game!")
    }
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", e => {
    console.log(e.target);
});

paperBtn.addEventListener("click", e => {
    console.log(e.target);
});

scissorsBtn.addEventListener("click", e => {
    console.log(e.target);
});





