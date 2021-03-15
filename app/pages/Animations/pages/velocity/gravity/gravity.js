import Ball from '../../../ball';
import { checkFocusedById } from '../../../helpers';

export default class Gravity {
  constructor() {
    this.id = 'gravity';
    this.canvas = document.getElementById(this.id);
    this.context = this.canvas.getContext('2d');
    this.ball = new Ball();
    this.ball.x = this.canvas.width / 2;
    this.ball.y = this.canvas.height / 2;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.gravity = 0.02;
          
    this.addListeners();
    this.drawFrame();
  }

  draw() {
    this.clearRect();
    
    this.vx += this.ax;
    this.vy += this.ay;
    this.vy += this.gravity;
    this.ball.x += this.vx;
    this.ball.y += this.vy;
    this.ball.draw(this.context);
  }

  addListeners() {
    window.addEventListener('keydown', event => {

      if (checkFocusedById(this.id)) {

        switch (event.code) {
          case "ArrowLeft":    
            this.ax = -0.1;
            break;
          case "ArrowRight":     
            this.ax = 0.1;
            break;
          case "ArrowUp":  
            event.preventDefault();
            this.ay = -0.1;
            break;
          case "ArrowDown":
            event.preventDefault();  
            this.ay = 0.1;
            break;
          }
      }
      
    }, false);

    window.addEventListener('keyup', () => {
      if (checkFocusedById(this.id)) {
        this.ax = 0;
        this.ay = 0;
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

new Gravity;