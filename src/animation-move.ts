export default class AnimationMoveController {
  private readonly _windowWidth = window.screen.width;
  private readonly _windowHeight = window.screen.height;
  private readonly _speed = 3;
  private _xDirection = 1;
  private _yDirection = 1;
  private _element?: HTMLDivElement | null;

  constructor(idComponent: string) {
    this._element = document.querySelector(`#${idComponent}`);
    if (this._element) {
      this._element.style.top = "0px";
      this._element.style.left = "0px";
    }
  }
  startAnimationMove() {
    this.changePositionEffect();
  }
  changePositionEffect() {
    if (!this._element) return;
    let currentX = parseInt(this._element.style.left);
    let currentY = parseInt(this._element.style.top);

    let newX = currentX + this._speed * this._xDirection;
    let newY = currentY + this._speed * this._yDirection;

    if (newX < 0 || newX > this._windowWidth - this._element.offsetWidth) {
      this._xDirection *= -1;
    }
    if (newY < 0 || newY > this._windowHeight - this._element.offsetHeight) {
      this._yDirection *= -1;
    }

    this._element.style.left = newX + "px";
    this._element.style.top = newY + "px";

    requestAnimationFrame(() => this.changePositionEffect());
  }
}
