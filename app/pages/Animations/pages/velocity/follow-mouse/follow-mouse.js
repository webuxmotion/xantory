import Arrow from '../../../arrow';
import Ball from '../../../ball';

export default class PixelMove {
  constructor() {
    this.canvas = document.getElementById('follow-mouse');
    this.context = this.canvas.getContext('2d');
    this.mouse = utils.captureMouse(this.canvas);
    this.arrow = new Arrow();
    this.ball = new Ball();
    this.speed = 1;
    
    this.drawFrame();
  }

  draw() {
    this.clearRect();
          
    const dx = this.mouse.x - this.arrow.x;
    const dy = this.mouse.y - this.arrow.y;
    const angle = Math.atan2(dy, dx);
    const vx = Math.cos(angle) * this.speed;
    const vy = Math.sin(angle) * this.speed;

    this.arrow.rotation = angle; //radians
    this.arrow.x += vx;
    this.arrow.y += vy;
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