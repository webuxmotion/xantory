import Ball from '../../../ball';

export default class PixelMove {
  constructor() {
    this.canvas = document.getElementById('acceleration');
    this.context = this.canvas.getContext('2d');
    this.ball = new Ball();
    this.ball.x = this.canvas.width / 5;
    this.ball.y = this.canvas.height / 2;
    this.vx = -4;
    this.ax = 0.1;
          
    this.drawFrame();
  }

  draw() {
    this.clearRect();
    
    this.vx += this.ax;
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