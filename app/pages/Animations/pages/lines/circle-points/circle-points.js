import Ball from '../../../ball';
import Slider from '../../../slider';

export default class CirclePathMovement {
    constructor() {
      this.canvas = document.getElementById('circle-points');
      this.context = this.canvas.getContext('2d');
      this.centerX = this.canvas.width / 2;
      this.centerY = this.canvas.height / 2;
      this.radius = 100;
      this.ball = new Ball();
      this.ball.radius = 10;
      this.pointsCount = 12;
      this.angle = 0;

      this.slider = new Slider(-0.005, 0.005, 0.001);
      this.slider.x = 300;
      this.slider.y = 20;
      this.slider.captureMouse(this.canvas);

      this.drawFrame();
    }
  
    draw() {
      this.clearRect();
  
      for (let i = 0; i < this.pointsCount; i++) {
        
        const angle = i / this.pointsCount * Math.PI * 2;

        this.ball.x = this.centerX + this.radius * Math.cos(angle + this.angle);
        this.ball.y = this.centerY + this.radius * Math.sin(angle + this.angle);

        this.angle += this.slider.value;
        if (this.angle < -1 * (Math.PI * 2)) {
          this.angle = 0;
        }

        this.ball.draw(this.context);
      }

      this.slider.draw(this.context);
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