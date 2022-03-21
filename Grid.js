import { CELL_SIZE, GRID_SIZE, CELL_GAP } from "./constants.js";

export default class Grid {
  constructor(gridElement) {
    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);
    createCellElement(gridElement);
  }
}

const createSingleCell = () => {
  const cell = document.createElement("div");
  cell.classList.add("cell");

  return cell;
};

const createCellElement = (gridElement) => {
  const cells = [];

  for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
    const cell = createSingleCell();
    cells.push(cell);
    gridElement.append(cell);
  }

  return cells;
};
