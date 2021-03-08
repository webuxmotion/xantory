export default class DrawingCurves {
  constructor(id) {
    this.canvas = document.getElementById(id);
    this.context = this.canvas.getContext('2d');
    this.mouse = utils.captureMouse(this.canvas);
    this.x0 = 100;
    this.y0 = 200;
    this.x2 = 300;
    this.y2 = 200;
    this.cursorX;
    this.cursorY;

    this.initMouseMoveListener();
  }

  initMouseMoveListener() {
    this.canvas.addEventListener('mousemove', () => {
      this.clearRect();
      this.setCursorPosition();
      this.drawRedLines();
      this.drawCurveLine();
    }, false);
  }

  drawRedLines() {
    this.context.beginPath();
    this.context.strokeStyle = "red";
    this.context.moveTo(this.x0, this.y0);
    this.context.lineTo(this.cursorX, this.cursorY);
  
    this.context.moveTo(this.x2, this.y2);
    this.context.lineTo(this.cursorX, this.cursorY);
    this.context.stroke();
  }

  drawCurveLine() {
    this.context.beginPath();
    this.context.moveTo(this.x0, this.y0);
    this.context.quadraticCurveTo(this.cursorX, this.cursorY, this.x2, this.y2);
    this.context.strokeStyle = "blue";
    this.context.stroke();
  }

  setCursorPosition() {
    this.cursorX = this.mouse.x;
    this.cursorY = this.mouse.y;
  }

  clearRect() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}