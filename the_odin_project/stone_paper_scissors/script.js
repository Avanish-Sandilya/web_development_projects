const result = document.getElementById("result");

const stoneBtn = document.getElementById("stone");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

function getComputerChoice() {
    const choices = ["stone", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function getResult(user, computer) {
    if (user === computer) return "It's a Draw!";

    if (
        (user === "stone" && computer === "scissors") ||
        (user === "paper" && computer === "stone") ||
        (user === "scissors" && computer === "paper")
    ) {
        return "You Win! 🎉";
    } else {
        return "You Lose 😢";
    }
}

stoneBtn.addEventListener("click", () => playGame("stone"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

function playGame(userChoice) {
    const computerChoice = getComputerChoice();

    const finalResult = getResult(userChoice, computerChoice);

    result.textContent = `You chose ${userChoice}, Computer chose ${computerChoice}. ${finalResult}`;
}

