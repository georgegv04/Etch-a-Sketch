const gridSize = 16;

function generateRandomColor() {
  let symbols = "0123456789ABCDEF";
  let color = "#";
  for (let j = 0; j < 6; j++) {
    color += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return color;
}

function createGrid(size) {
  const container = document.querySelector(".container");

  for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square");
    gridSquare.addEventListener("mouseenter", function () {
      gridSquare.style.backgroundColor = generateRandomColor();
    });
    container.appendChild(gridSquare);
  }
}

createGrid(gridSize);
