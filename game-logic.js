let playerScore = 0;
let computerScore = 0;

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

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}

function setScores() {
    let pScore = document.getElementById('playerScore');
    let cScore = document.getElementById('computerScore');
    pScore.innerHTML = playerScore;
    cScore.innerHTML = computerScore;
}

function playRound(playerSelection, computerSelection) {
    let winner = "";
    if (playerSelection === computerSelection) {
        console.log("Tie!");
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")) {
        console.log("Player won!");
        playerScore++;
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "rock")) {
        console.log("Computer won!");            
        computerScore++;
    }

    console.log("player: " + playerScore + ", computer: " + computerScore);
    setScores();

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {winner = "Player";}
        else if (computerScore === 5) {winner = "Computer";}

        console.log(winner + " won the game!")
        disableButtons();
    } 
}

const buttons = document.querySelectorAll('button')
console.log("Start game by pressing button")
setScores();

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.id, getComputerChoice());
    })
})











