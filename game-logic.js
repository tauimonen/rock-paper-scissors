const buttons = document.querySelectorAll('.choice-button');
const newGame = document.querySelector('.new-game');

const variables = {
    playerScore: 0,
    computerScore: 0,
    gameInfoText: "Start game by pressing your choice",
    gameOver: false
};

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
        button.disabled = true;
    })
}

function enableButtons() {
    buttons.forEach(button => {
        button.disabled = false;
    })
}

function setScores() {
    let pScore = document.getElementById('playerScore');
    let cScore = document.getElementById('computerScore');
    pScore.innerHTML = variables.playerScore;
    cScore.innerHTML = variables.computerScore;
}

function setGameInfo() {
    let gameInfo = document.querySelector('.game-info');
    gameInfo.innerHTML = variables.gameInfoText;
}

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

function showOrHideNewGameButton() {
    let x = document.querySelector('.new-game');
    if (variables.gameOver) {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.id, getComputerChoice());
    })
})

newGame.addEventListener('click', function() {
    setNewGame();
});


setNewGame();












