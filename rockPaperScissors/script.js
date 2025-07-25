// setting up initial values

const btn = document.querySelectorAll(".choiceButton");
const userImage = document.querySelector("#userImage");
const compImage = document.querySelector("#compImage");
const userScoreBox = document.querySelector("#userScore");
const compScoreBox = document.querySelector("#computerScore");
const header = document.querySelector("#header");

const computer_choices = ["r", "p", "s"];

let useScore = 0;
let compScore = 0;

let user_input = "";

// adding onclick game logic
btn.forEach((button) => {
  button.addEventListener("click", () => {
    header.textContent="Rock Paper Scissors";
    user_input = button.textContent.charAt(0).toLowerCase();
    const computer_input =
      computer_choices[Math.floor(Math.random() * computer_choices.length)];
    userImage.src = `img/${user_input}.png`;
    compImage.src = `img/${computer_input}.png`;

    // score comparison
    if (user_input === computer_input) {
    } else if (
      (user_input === "r" && computer_input === "s") ||
      (user_input === "p" && computer_input === "r") ||
      (user_input === "s" && computer_input === "p")
    ) {
      useScore++;
    } else {
      compScore++;
    }

    userScoreBox.value = useScore;
    compScoreBox.value = compScore;

    // makeshift game reset once winner is decided
    if (useScore === 5) {
      header.textContent = "You won";
      useScore = 0;
      compScore = 0;
      userScoreBox.value = 0;
      compScoreBox.value = 0;
    }

    if (compScore === 5) {
      header.textContent = "Computer won";
      useScore = 0;
      compScore = 0;
      userScoreBox.value = 0;
      compScoreBox.value = 0;
    }
  });
});

// let playAgain = "y";

// //wrapping the gameplay in while to continue until user wants to stop without restarting the application
// while (playAgain !== "n") {
//   const computer_input =
//     computer_choices[Math.floor(Math.random() * computer_choices.length)];
//   const user_input = prompt(
//     "Enter p for paper, r for rock or s for scissors"
//   ).toLocaleLowerCase();

//   //comparing user input with computer's choice
//   switch (user_input) {
//     case "p":
//       if (computer_input === "s") {
//         console.log("Computer chose scissors, computer won");
//       } else if (computer_input === "r") {
//         console.log("Computer chose rock, you won");
//       } else {
//         console.log("Computer chose paper too!! its a draw");
//       }
//       break;
//     case "r":
//       if (computer_input === "s") {
//         console.log("Computer chose scissors, you won");
//       } else if (computer_input === "p") {
//         console.log("Computer chose paper, computer won");
//       } else {
//         console.log("Computer chose rock too!! its a draw");
//       }
//       break;

//     case "s":
//       if (computer_input === "p") {
//         console.log("Computer chose paper, you won");
//       } else if (computer_input === "r") {
//         console.log("Computer chose rock, computer won");
//       } else {
//         console.log("Computer chose scissors too!! its a draw");
//       }
//       break;

//     default:
//       console.log("Invalid attempt");
//   }
//   // asking user if they want to play again
//   playAgain = prompt("Do you want to play again? (y/n)").toLowerCase();
// }
