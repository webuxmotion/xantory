import Ball from '../../../ball';
import { checkFocusedById } from '../../../helpers';

export default class PixelMove {
  constructor() {
    this.id = 'acceleration-2';
    this.canvas = document.getElementById(this.id);
    this.context = this.canvas.getContext('2d');
    this.ball = new Ball();
    this.ball.x = this.canvas.width / 2;
    this.ball.y = this.canvas.height / 2;
    this.vx = 0;
    this.ax = 0;
          
    this.addListeners();
    this.drawFrame();
  }

  draw() {
    this.clearRect();
    
    this.vx += this.ax;
    this.ball.x += this.vx;
    this.ball.draw(this.context);
  }

  addListeners() {
    window.addEventListener('keydown', event => {
      if (checkFocusedById(this.id)) {
        if (event.code == "ArrowLeft") {
          this.ax = -0.1;
        } else if (event.code == "ArrowRight") {
          this.ax = 0.1;
        }
      }
      
    }, false);

    window.addEventListener('keyup', () => {
      if (checkFocusedById(this.id)) {
        this.ax = 0;
      }
    }, false);
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