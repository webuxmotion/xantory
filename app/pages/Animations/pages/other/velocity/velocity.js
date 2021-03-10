import Ball from '../../../ball';

export default class PixelMove {
  constructor() {
    this.canvas = document.getElementById('velocity');
    this.context = this.canvas.getContext('2d');
    this.mouse = utils.captureMouse(this.canvas);
    this.ball = new Ball();
    this.vx = 1;

    this.ball.x = 50;
    this.ball.y = 100;
    
    this.drawFrame();
  }

  draw() {
    this.clearRect();
          
    this.ball.x += this.vx;
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