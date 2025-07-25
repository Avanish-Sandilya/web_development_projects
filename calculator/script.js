const displayValue = document.querySelector(".display_value");
const buttons = document.querySelectorAll(".calc_button");

let val1 = "";
let val2 = "";
let op = "";
let screenValue = "0";

function updateDisplay(value) {
  displayValue.textContent = value;
}

function calculate(value1, operator, value2) {
  switch (operator) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "x":
      return value1 * value2;
    case "/":
      return value2 !== 0 ? value1 / value2 : "ERR";
    case "%":
      return value1 % value2;
    default:
      return "ERR";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btnText = button.textContent;

    if (!isNaN(btnText)) {
      // number clicked
      if (op === "") {
        val1 += btnText;
      } else {
        val2 += btnText;
      }
    } else if (btnText === ".") {
      // decimal
      if (op === "") {
        if (!val1.includes(".")) val1 += ".";
      } else {
        if (!val2.includes(".")) val2 += ".";
      }
    } else if (["+", "-", "x", "/", "%"].includes(btnText)) {
      if (val1 !== "") op = btnText;
    } else if (btnText === "=") {
      if (val1 !== "" && val2 !== "" && op !== "") {
        const result = calculate(Number(val1), op, Number(val2));
        val1 = result.toString();
        val2 = "";
        op = "";
      }
    } else if (btnText === "AC") {
      val1 = "";
      val2 = "";
      op = "";
    } else if (btnText === "<=") {
      if (val2) {
        val2 = val2.slice(0, -1);
      } else if (op) {
        op = "";
      } else {
        val1 = val1.slice(0, -1);
      }
    } else if (btnText === "sqrt") {
      if (op === "") {
        val1 = Math.sqrt(Number(val1)).toString();
      } else {
        val2 = Math.sqrt(Number(val2)).toString();
      }
    }

    // Update screen value
    screenValue = `${val1} ${op} ${val2}`.trim();
    if (screenValue === "") screenValue = "0";
    updateDisplay(screenValue);
  });
});
