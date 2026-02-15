const board=document.querySelector(".padContainer");


for (let i = 0; i < 16 * 16; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseenter", () => {
    square.classList.toggle("black");
  });

  board.appendChild(square);
}

const clearButton = document.querySelector(".clearButton");
const box=document.querySelectorAll(".square");

clearButton.addEventListener('click',()=>{
    box.forEach(b=>{
        b.classList.remove("black");
    })
})


