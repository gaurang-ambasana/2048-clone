export default class Cell {
  #cellElement;
  #x;
  #y;
  #tile;
  #mergeTile;

  constructor(cellElement, x, y) {
    this.#cellElement = cellElement;
    this.#x = x;
    this.#y = y;
    this.#tile = null;
  }

  get x() {
    return this.#x;
  }

  get y() {
    return this.#y;
  }

  get tile() {
    return this.#tile;
  }

  get mergeTile() {
    return this.#mergeTile;
  }

  set mergeTile(value) {
    this.#mergeTile = value;
    if (!value) return;
    this.#mergeTile.x = this.#x;
    this.#mergeTile.y = this.#y;
  }

  set tile(value) {
    this.#tile = value;
    if (!value) return;
    this.#tile.x = this.#x;
    this.#tile.y = this.#y;
  }

  canAccept(tile) {
    return (
      this.tile === null ||
      (this.mergeTile == null && this.#tile.value === tile.value)
    );
  }
}
