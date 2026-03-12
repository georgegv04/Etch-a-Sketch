function getGridSize() {
  let size = prompt("Insert a grid size");
  return size;
}

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

  container.innerHTML = ""; // Clear Previous Grid

  const squareSize = 640 / size;

  for (let i = 0; i < size * size; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("square");

    gridSquare.style.width = `${squareSize}px`;
    gridSquare.style.height = `${squareSize}px`;

    gridSquare.addEventListener("mouseenter", function () {
      gridSquare.style.backgroundColor = generateRandomColor();
    });
    container.appendChild(gridSquare);
  }
}

size = getGridSize();
createGrid(size);
