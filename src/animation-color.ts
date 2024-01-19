export default class AnimationColorController {
  private readonly v1 = 0x88;
  private readonly v2 = 0x3f;
  private n1 = 0;
  private n2 = 0;
  private n3 = 0;
  private counter = 0;
  private color = 0x000000;
  private _element: HTMLDivElement | null = null;
  constructor(public ts: number, public idComponent: string) {
    this._element = document.querySelector(`#${idComponent}`);
    this.n1 = this.v1;
    this.n2 = this.v2;
    this.n3 = this.v2;
  }

  startAnimation() {
    setTimeout(this.changeColorSmoothly, this.ts);
  }

  changeColorSmoothly = () => {
    if (!this._element) return;
    switch (this.counter) {
      case 0:
        if (++this.n3 === this.v1) this.counter++;
        break;
      case 1:
        if (--this.n1 === this.v2) this.counter++;
        break;
      case 2:
        if (++this.n2 === this.v1) this.counter++;
        break;
      case 3:
        if (--this.n3 === this.v2) this.counter++;
        break;
      case 4:
        if (++this.n1 === this.v1) this.counter++;
        break;
      case 5:
        if (--this.n2 === this.v2) this.counter++;
        break;
      case 6:
        if (++this.n3 === this.v1) this.counter++;
        break;
      case 7:
        if (--this.n1 === this.v2) this.counter++;
        break;
      case 8:
        if (++this.n2 === this.v1) this.counter++;
        break;
      case 9:
        if (--this.n3 === this.v2) this.counter++;
        break;
      case 10:
        if (++this.n1 === this.v1) this.counter++;
        break;
      case 11:
        if (--this.n2 === this.v2) this.counter = 0;
        break;
    }
    this.color = 0x000000 | ((this.n1 << 16) | (this.n2 << 8) | this.n3);
    this._element.style.color = `#${this.color.toString(16).padStart(6, "0")}`;
    setTimeout(this.changeColorSmoothly, this.ts);
  };
}
