const dropdown = document.getElementById("choices");
let selectedValue = dropdown.value;
const container = document.querySelector(".container");
const reset = document.querySelector("#reset");

function createGrid(size) {
  container.innerHTML = "";
  const cellSize = 496 / size;
  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    // Dynamic sizing
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;

    // Hover coloring
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    });

    container.appendChild(cell);
  }

  container.style.width = `${496}px`;
}

createGrid(16);

reset.addEventListener("click", () => {
  location.reload();
});

dropdown.addEventListener("change", function () {
  selectedValue = dropdown.value;
  createGrid(selectedValue);
});
