import Arrow from '../../../arrow';

export default class PixelMove {
  constructor() {
    this.canvas = document.getElementById('rotational-velocity');
    this.context = this.canvas.getContext('2d');
    this.arrow = new Arrow();
    this.arrow.x = this.canvas.width / 2;
    this.arrow.y = this.canvas.height / 2;
    this.vr = 1; // rotation velocity in degrees

    this.drawFrame();
  }

  draw() {
    this.clearRect();
          
    this.arrow.rotation += this.vr  * Math.PI / 180;
    this.arrow.draw(this.context);
  }

  drawFrame() {
    window.requestAnimationFrame(
      this.drawFrame.bind(this, this.canvas)
    );

    this.draw();
  }

  clearRect() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

new PixelMove;