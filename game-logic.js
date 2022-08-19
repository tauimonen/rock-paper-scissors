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

function getPlayerChoice() {
    validUserInput = false;
    while (!validUserInput) {
        let playerSelection = prompt("Enter your choice (rock, paper, scissors):");
        let selection = playerSelection.toLowerCase();
        if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors") {
            validUserInput = true;
            return selection;
        } else {
            console.log("Invalid input, please enter valid input.");
            validUserInput = false;
        }
    }
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
    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        console.log("Yor choice: " + playerSelection + ", Computer's choice: " + computerSelection);
        const res = playRound(playerSelection, computerSelection);
        console.log(res);
        if (res === 'You won!') {
            playerScore += 1;
        } else if (res === 'You lose!') {
            computerScore += 1;
        }
        if (i < 4) {
            console.log("Scores: You: " + playerScore + " Computer: " + computerScore);
        }
    }

    console.log("Result: You: " + playerScore + " Computer: " + computerScore);
    
    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (playerScore < computerScore) {
        console.log("Computer won the game!");
    } else {
        console.log("Tie game!")
    }
}

game();



