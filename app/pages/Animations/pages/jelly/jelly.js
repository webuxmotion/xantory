import Mouse from "./mouse";

export default class Jelly {
  constructor() {
    this.canvas = document.getElementById('jelly');
    this.ctx = this.canvas.getContext('2d');
    this.mouse = new Mouse(this.canvas);
    this.dist = 0;

    this.drawFrame();
  }

  draw() {
    this.drawMouse();
    //this.drawP3();
    this.drawCenterPoint();
    this.drawLineBetween();
    this.calculateDist();
  }

  drawMouse() {
    this.ctx.save();
    const radius = 50;
    const color = this.dist < radius ? 'red' : 'white';

    this.ctx.beginPath();
    this.ctx.arc(this.mouse.x, this.mouse.y, radius, 0, 2 * Math.PI);
    this.ctx.strokeStyle = color;
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.arc(this.mouse.x, this.mouse.y, 4, 0, 2 * Math.PI);
    this.ctx.fillStyle = color;
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.restore();
  }

  drawCenterPoint() {
    this.ctx.save();

    this.ctx.beginPath();
    this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, 4, 0, 2 * Math.PI);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.restore();
  }

  drawLineBetween() {
    this.ctx.save();

    this.ctx.beginPath();
    this.ctx.moveTo(this.canvas.width / 2, this.canvas.height / 2);
    this.ctx.lineTo(this.mouse.x, this.mouse.y);
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.restore();
  }

  drawP3() {
    this.ctx.save();

    this.ctx.beginPath();
    this.ctx.arc(this.canvas.width / 2, this.mouse.y, 4, 0, 2 * Math.PI);
    this.ctx.fillStyle = 'red';
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.restore();
  }

  calculateDist() {
    const dx = this.canvas.width / 2 - this.mouse.x;
    const dy = this.canvas.height / 2 - this.mouse.y;
    this.dist = Math.sqrt(dx * dx + dy * dy);
  }

  drawFrame() {
    window.requestAnimationFrame(
      this.drawFrame.bind(this, this.canvas)
    );

    this.clearRect();
    this.draw();
  }

  clearRect() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

new Jelly;