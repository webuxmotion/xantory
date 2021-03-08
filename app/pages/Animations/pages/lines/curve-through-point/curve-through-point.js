import DrawCurve from '../../../DrawCurve';

class CurveThroughPoint extends DrawCurve {
  setCursorPosition() {
    this.cursorX = this.mouse.x * 2 - (this.x0 + this.x2) / 2;
    this.cursorY = this.mouse.y * 2 - (this.y0 + this.y2) / 2;
  }
}

new CurveThroughPoint('curve-through-point');