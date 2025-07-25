let turn_no = 1;

const box1 = document.querySelector("#one");
const box2 = document.querySelector("#two");
const box3 = document.querySelector("#three");
const box4 = document.querySelector("#four");
const box5 = document.querySelector("#five");
const box6 = document.querySelector("#six");
const box7 = document.querySelector("#seven");
const box8 = document.querySelector("#eight");
const box9 = document.querySelector("#nine");
const input_box = document.querySelectorAll(".input_box");
const result = document.querySelector(".result");
const reset = document.querySelector(".reset");

function checkWin() {
  // Top row
  if (
    box1.textContent === box2.textContent &&
    box2.textContent === box3.textContent &&
    box1.textContent !== "" &&
    box1.textContent !== null
  ) {
    return true;
  }

  // Middle row
  if (
    box4.textContent === box5.textContent &&
    box5.textContent === box6.textContent &&
    box4.textContent !== "" &&
    box4.textContent !== null
  ) {
    return true;
  }

  // Bottom row
  if (
    box7.textContent === box8.textContent &&
    box8.textContent === box9.textContent &&
    box7.textContent !== "" &&
    box7.textContent !== null
  ) {
    return true;
  }

  // Left column
  if (
    box1.textContent === box4.textContent &&
    box4.textContent === box7.textContent &&
    box1.textContent !== "" &&
    box1.textContent !== null
  ) {
    return true;
  }

  // Middle column
  if (
    box2.textContent === box5.textContent &&
    box5.textContent === box8.textContent &&
    box2.textContent !== "" &&
    box2.textContent !== null
  ) {
    return true;
  }

  // Right column
  if (
    box3.textContent === box6.textContent &&
    box6.textContent === box9.textContent &&
    box3.textContent !== "" &&
    box3.textContent !== null
  ) {
    return true;
  }

  // Diagonal from top-left to bottom-right
  if (
    box1.textContent === box5.textContent &&
    box5.textContent === box9.textContent &&
    box1.textContent !== "" &&
    box1.textContent !== null
  ) {
    return true;
  }

  // Diagonal from bottom-left to top-right
  if (
    box7.textContent === box5.textContent &&
    box5.textContent === box3.textContent &&
    box7.textContent !== "" &&
    box7.textContent !== null
  ) {
    return true;
  }

  return false; // No win found
}

reset.classList.add("hidden");
input_box.forEach((box, b) => {
  box.addEventListener("click", () => {
    if (turn_no % 2 === 0) {
      box.textContent = "O";
    } else {
      box.textContent = "X";
    }
    box.style.pointerEvents = "none";
    turn_no++;
    if (checkWin()) {
      result.textContent = box.textContent + " wins";
      document.querySelector(".game_table").style.pointerEvents = "none";
      reset.classList.remove("hidden");
    }
    if (turn_no === 10) {
      result.textContent = "Draw";
      document.querySelector(".game_table").style.pointerEvents = "none";
      reset.classList.remove("hidden");
    }
  });
});

reset.addEventListener('click',()=>{
    location.reload();
})
