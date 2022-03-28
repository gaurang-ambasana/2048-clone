export default class Tile {
  #tileElement;
  #x;
  #y;
  #value;

  constructor(tileContainer, value = Math.random() > 0.5 ? 2 : 4) {
    this.#tileElement = document.createElement("div");
    this.#tileElement.classList.add("tile");
    tileContainer.append(this.#tileElement);
    this.value = value;
  }

  get value() {
    return this.#value;
  }

  set value(val) {
    this.#value = val;
    this.#tileElement.textContent = val;

    const power = Math.log2(val);
    const backgroudLightness = 100 - power * 9;

    this.#tileElement.style.setProperty(
      "--background-lightness",
      `${backgroudLightness}%`
    );
    this.#tileElement.style.setProperty(
      "--text-lightness",
      `${backgroudLightness <= 50 ? 90 : 10}%`
    );
  }

  set x(value) {
    this.#x = value;
    this.#tileElement.style.setProperty("--x", value);
  }

  set y(value) {
    this.#y = value;
    this.#tileElement.style.setProperty("--y", value);
  }

  remove() {
    this.#tileElement.remove();
  }
}
