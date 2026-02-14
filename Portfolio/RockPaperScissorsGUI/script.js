const btn = document.querySelector('#playButton');
const userInput = document.querySelector('#userChoice');
const resultBox = document.querySelector('#result');
const compChoiceBox = document.querySelector('#compChoice');
const compResultBox = document.querySelector('#compResult');

const choices = ["rock", "paper", "scissors"];

function gameplay() {

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const userChoice = userInput.value.trim().toLowerCase();

    compChoiceBox.value = computerChoice;

    if (!choices.includes(userChoice)) {
        resultBox.value = "Invalid input!";
        compResultBox.value = "";
        return;
    }

    if (userChoice === computerChoice) {
        resultBox.value = "It's a draw!";
        compResultBox.value = "Draw";
    } 
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultBox.value = "You win!";
        compResultBox.value = "Computer loses!";
    } 
    else {
        resultBox.value = "You lose!";
        compResultBox.value = "Computer wins!";
    }
}

btn.addEventListener("click", gameplay);
