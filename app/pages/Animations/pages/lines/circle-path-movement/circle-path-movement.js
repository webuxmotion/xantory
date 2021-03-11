import Ball from '../../../ball';

export default class CirclePathMovement {
    constructor() {
      this.canvas = document.getElementById('circle-path-movement');
      this.context = this.canvas.getContext('2d');
      this.ball = new Ball();
      this.ball.radius = 5;
      this.angle = 0;
      this.centerX = this.canvas.width / 2;
      this.centerY = this.canvas.height / 2,
      this.radius = 100,
      this.speed = 0.05;

      this.drawFrame();
    }
  
    draw() {
      this.clearRect();
  
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ball.x = this.centerX + Math.sin(this.angle) * this.radius;
      this.ball.y = this.centerY + Math.cos(this.angle) * this.radius;
      this.angle -= this.speed;

      if (this.angle < -1 * (Math.PI * 2)) {
        this.angle = 0;
      }

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
  
  new CirclePathMovement;