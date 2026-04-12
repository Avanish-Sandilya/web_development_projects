// Get screen
const screen = document.getElementById("screen");

// Get all buttons
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

// Add click event to all buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;

        handleInput(value);
    });
});

function handleInput(value) {

    // Clear screen
    if (value === "C") {
        currentInput = "";
        screen.textContent = "0";
        return;
    }

    // Backspace
    if (value === "←") {
        currentInput = currentInput.slice(0, -1);
        screen.textContent = currentInput || "0";
        return;
    }

    // Calculate result
    if (value === "=") {
        try {
            currentInput = eval(currentInput).toString();
            screen.textContent = currentInput;
        } catch {
            screen.textContent = "Error";
            currentInput = "";
        }
        return;
    }

    // Prevent multiple operators in a row
    const operators = ["+", "-", "*", "/"];
    const lastChar = currentInput.slice(-1);

    if (operators.includes(value) && operators.includes(lastChar)) {
        return;
    }

    // Append value
    currentInput += value;
    screen.textContent = currentInput;
}