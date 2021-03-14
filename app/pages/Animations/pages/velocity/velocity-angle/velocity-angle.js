import Ball from '../../../ball';

export default class PixelMove {
  constructor() {
    this.canvas = document.getElementById('velocity-angle');
    this.context = this.canvas.getContext('2d');
    this.mouse = utils.captureMouse(this.canvas);
    this.ball = new Ball();
    this.angle = 30;
    this.speed = 3;

    this.ball.x = 50;
    this.ball.y = 100;
    
    this.drawFrame();
  }

  draw() {
    this.clearRect();
          
    const radians = this.angle * Math.PI / 180;
    const vx = Math.cos(radians) * this.speed;
    const vy = Math.sin(radians) * this.speed;

    this.ball.x += vx;
    this.ball.y += vy;
    this.ball.draw(this.context);
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