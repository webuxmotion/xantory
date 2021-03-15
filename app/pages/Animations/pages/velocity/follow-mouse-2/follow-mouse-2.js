import Arrow from '../../../arrow';
import Ball from '../../../ball';

export default class PixelMove {
  constructor() {
    this.canvas = document.getElementById('follow-mouse-2');
    this.context = this.canvas.getContext('2d');
    this.mouse = utils.captureMouse(this.canvas);
    this.arrow = new Arrow();
    this.ball = new Ball();
    this.vx = 0;
    this.vy = 0;
    this.force = 0.05;
    
    this.drawFrame();
  }

  draw() {
    this.clearRect();
          
    const dx = this.mouse.x - this.arrow.x;
    const dy = this.mouse.y - this.arrow.y;
    const angle = Math.atan2(dy, dx);

    const ax = Math.cos(angle) * this.force;
    const ay = Math.sin(angle) * this.force;

    this.vx += ax;
    this.vy += ay;

    this.arrow.rotation = angle;
    this.arrow.x += this.vx;
    this.arrow.y += this.vy;
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