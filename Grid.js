import Cell from "./Cell.js";
import { CELL_SIZE, GRID_SIZE, CELL_GAP } from "./constants.js";

export default class Grid {
  #cells;

  constructor(gridElement) {
    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);

    this.#cells = createCellElement(gridElement).map((cellEle, idx) => {
      const [x, y] = [idx % GRID_SIZE, Math.floor(idx / GRID_SIZE)];
      const cell = new Cell(cellEle, x, y);

      return cell;
    });
  }

  get cellsByColumn() {
    return this.#cells.reduce((cellGrid, cell) => {
      cellGrid[cell.x] = cellGrid[cell.x] || [];
      cellGrid[cell.x][cell.y] = cell;

      return cellGrid;
    }, []);
  }

  get cellsByRow() {
    return this.cellsByColumn.reduce(
      ($, row) => row.map((_, i) => [...($[i] || []), row[i]]),
      []
    );
  }

  get #emptyCells() {
    return this.#cells.filter((cell) => !Boolean(cell.tile));
  }

  randomEmptyCell() {
    const randomIndex = Math.floor(Math.random() * this.#emptyCells.length);
    return this.#emptyCells[randomIndex];
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
