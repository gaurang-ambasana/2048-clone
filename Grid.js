import { CELL_SIZE, GRID_SIZE, CELL_GAP } from "./constants.js";

export default class Grid {
  constructor(gridElemenr) {
    gridElemenr.style.setProperty("--grid-size", GRID_SIZE);
    gridElemenr.style.setProperty("--cell-size", `${CELL_SIZE}vmin`);
    gridElemenr.style.setProperty("--cell-gap", `${CELL_GAP}vmin`);
  }
}
