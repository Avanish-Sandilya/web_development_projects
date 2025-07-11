const computer_choices = ["r", "p", "s"];

let playAgain = "y";

//wrapping the gameplay in while to continue until user wants to stop without restarting the application
while (playAgain !== "n") {
  const computer_input =
    computer_choices[Math.floor(Math.random() * computer_choices.length)];
  const user_input = prompt(
    "Enter p for paper, r for rock or s for scissors"
  ).toLocaleLowerCase();

  //comparing user input with computer's choice
  switch (user_input) {
    case "p":
      if (computer_input === "s") {
        console.log("Computer chose scissors, computer won");
      } else if (computer_input === "r") {
        console.log("Computer chose rock, you won");
      } else {
        console.log("Computer chose paper too!! its a draw");
      }
      break;
    case "r":
      if (computer_input === "s") {
        console.log("Computer chose scissors, you won");
      } else if (computer_input === "p") {
        console.log("Computer chose paper, computer won");
      } else {
        console.log("Computer chose rock too!! its a draw");
      }
      break;

    case "s":
      if (computer_input === "p") {
        console.log("Computer chose paper, you won");
      } else if (computer_input === "r") {
        console.log("Computer chose rock, computer won");
      } else {
        console.log("Computer chose scissors too!! its a draw");
      }
      break;

    default:
      console.log("Invalid attempt");
  }
  // asking user if they want to play again
  playAgain = prompt("Do you want to play again? (y/n)").toLowerCase();
}
