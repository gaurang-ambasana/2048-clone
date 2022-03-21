import { CELL_SIZE, GRID_SIZE, CELL_GAP } from "./constants.js";

export default class Grid {
  constructor(gridElement) {
    gridElement.style.setProperty("--grid-size", GRID_SIZE);
    gridElement.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElement.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);
  }
}
