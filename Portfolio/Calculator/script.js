const symbols=["+","-","*","/","reset"];
const numbers =["1","2","3","4","5","6","7","8","9","0"];



const btn = document.querySelectorAll(".calcButton");
const screen =document.querySelector("#screen");

let currentInput = "";
let operator = "";
let firstValue = "";

btn.forEach(b => {
  b.addEventListener("click", () => {
    const value = b.textContent;

    if (b.classList.contains("reset")) {
      screen.value = "0";
      currentInput = "";
      firstValue = "";
      operator = "";
      return;
    }

    if (b.classList.contains("numberButton")) {
      currentInput += value;
      screen.value = currentInput;
    }

    if (b.classList.contains("opButton")) {
      firstValue = currentInput;
      operator = value;
      currentInput = "";
    }

    if (b.classList.contains("equalButton")) {
      const secondValue = currentInput;
      let result;

      if (operator === "+") result = Number(firstValue) + Number(secondValue);
      if (operator === "-") result = Number(firstValue) - Number(secondValue);
      if (operator === "*") result = Number(firstValue) * Number(secondValue);
      if (operator === "/") result = Number(firstValue) / Number(secondValue);

      screen.value = result;
      currentInput = result.toString();
    }
  });
});



