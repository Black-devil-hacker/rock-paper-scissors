document.addEventListener("DOMContentLoaded", () => {
    let playerScore = 0;
    let computerScore = 0;

    const choices = ["rock", "paper", "scissors"];
    const buttons = document.querySelectorAll(".choice");
    const resultText = document.getElementById("resultText");
    const modal = document.getElementById("modal");
    const closeModal = document.getElementById("closeModal");
    const playerScoreDisplay = document.getElementById("playerScore");
    const computerScoreDisplay = document.getElementById("computerScore");

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const playerChoice = button.id;
            const computerChoice = getWinningChoice(playerChoice);
            updateScores("computer");
            resultText.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. You lose!`;
        });
    });

    function getWinningChoice(playerChoice) {
        switch (playerChoice) {
            case "rock":
                return "paper";
            case "paper":
                return "scissors";
            case "scissors":
                return "rock";
        }
    }

    function updateScores(winner) {
        if (winner === "player") {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        } else if (winner === "computer") {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }
    }
});
