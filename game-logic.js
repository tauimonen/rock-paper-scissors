const buttons = document.querySelectorAll('.choice-button');
const newGame = document.querySelector('.new-game');

const variables = {
    playerScore: 0,
    computerScore: 0,
    gameInfoText: "Start game by pressing your choice",
    gameOver: false
};

/**
 * Returns the computer's random selection.
 * @returns String
 */
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

/**
 * Disables the choice buttons when called.
 */
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true;
    })
}

/**
 * Enables the choice buttons when called.
 */
function enableButtons() {
    buttons.forEach(button => {
        button.disabled = false;
    })
}

/**
 * Sets the score to the display.
 */
function setScores() {
    let pScore = document.getElementById('playerScore');
    let cScore = document.getElementById('computerScore');
    pScore.innerHTML = variables.playerScore;
    cScore.innerHTML = variables.computerScore;
}

/**
 * Sets the game's event information to the screen.
 */
function setGameInfo() {
    let gameInfo = document.querySelector('.game-info');
    gameInfo.innerHTML = variables.gameInfoText;
}

/**
 * Play a round, call setup functions, and end the game when either player collects 
 * 5 points.
 * @param {*} playerSelection String
 * @param {*} computerSelection String
 */
function playRound(playerSelection, computerSelection) {
    let winner = "";
    if (playerSelection === computerSelection) {
        variables.gameInfoText = "Tie!";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")) {
                    variables.gameInfoText = "Player won!";
                    variables.playerScore += 1;
    } else if ((playerSelection === "rock" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "scissors") ||
                (playerSelection === "scissors" && computerSelection === "rock")) {
                    variables.gameInfoText = "Computer won!";            
                    variables.computerScore += 1;
    }
   
    setScores();
    setGameInfo();

    if (variables.playerScore === 5 || variables.computerScore === 5) {
        if (variables.playerScore === 5) {winner = "Player";}
        else if (variables.computerScore === 5) {winner = "Computer";}
        variables.gameInfoText = winner + " won the game!";
        setGameInfo();
        variables.gameOver = true;
        showOrHideNewGameButton();
        disableButtons();
        variables.gameOver = true;
    } 
}

/**
 * Sets the settings for a new game.
 */
function setNewGame() {
    variables.gameOver = false;
    showOrHideNewGameButton();
    variables.playerScore = 0;
    variables.computerScore = 0;
    variables.gameInfoText = "Start game by pressing your choice";
    setScores();
    setGameInfo();
    enableButtons();
}

/**
 * Shows the new game button when the game ends and hides it when a new game starts
 * and is running.
 */
function showOrHideNewGameButton() {
    let x = document.querySelector('.new-game');
    if (variables.gameOver) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

// For choice buttons 
buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.id, getComputerChoice());
    })
})

// For new game button
newGame.addEventListener('click', function() {
    setNewGame();
});


setNewGame();












