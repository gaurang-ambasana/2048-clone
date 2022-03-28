import Grid from "./Grid.js";
import slideTiles from "./slideTiles.js";
import Tile from "./Tile.js";

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);
grid.randomEmptyCell().tile = new Tile(gameBoard);

setupInput();

function moveUp() {
  const { cellsByColumn } = grid;
  slideTiles(cellsByColumn);
}

function moveDown() {
  const { cellsByColumn } = grid;
  const inversedColumns = cellsByColumn.map((column) => [...column].reverse());
  slideTiles(inversedColumns);
}

function moveLeft() {
  const { cellsByRow } = grid;
  slideTiles(cellsByRow);
}

function moveRight() {
  const { cellsByRow } = grid;
  const inversedRows = cellsByRow.map((row) => [...row].reverse());
  slideTiles(inversedRows);
}

function setupInput() {
  window.addEventListener("keydown", handleInput, {
    once: true,
  });
}

function handleInput(event) {
  switch (event.key) {
    case "ArrowUp": {
      moveUp();
      break;
    }

    case "ArrowDown": {
      moveDown();
      break;
    }

    case "ArrowLeft": {
      moveLeft();
      break;
    }

    case "ArrowRight": {
      moveRight();
      break;
    }

    default: {
      setupInput();
      return;
    }
  }

  grid.cells.forEach((cell) => cell.mergeTiles());

  setupInput();
}
