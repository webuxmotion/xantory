import Ball from '../../../ball';

export default class CaptureTouch {
  constructor() {
    this.canvas = document.getElementById('capture-touch');
    this.context = this.canvas.getContext('2d');
    this.touch = utils.captureTouch(this.canvas);
    this.log = document.getElementById('capture-touch-log');

    this.ball = new Ball();
    this.ball.x = this.canvas.width / 2;
    this.ball.y = this.canvas.height / 2;
    this.ball.draw(this.context);
    this.markerOn = false;
    
    this.initListeners();
  }

  onMouseMove() {
    this.context.lineTo(this.touch.x, this.touch.y);
    this.context.strokeStyle = "yellow";
    this.context.stroke();
  }

  initListeners() {
    this.canvas.addEventListener('touchstart', (event) => {
      event.preventDefault();

      if (utils.containsPoint(this.ball.getBounds(), this.touch.x, this.touch.y)) {
        this.log.value = "in ball: touchstart";
      } else {
        this.log.value = "canvas: touchstart";
      }

      this.markerOn = true;
      this.context.beginPath();

    }, false);

    this.canvas.addEventListener('touchend', (event) => {
      event.preventDefault();
      this.log.value = "canvas: touchend";

      this.markerOn = false;
    }, false);

    this.canvas.addEventListener('touchmove', (event) => {
      event.preventDefault();

      if (utils.containsPoint(this.ball.getBounds(), this.touch.x, this.touch.y)) {
        this.log.value = "in ball: touchmove";
      } else {
        this.log.value = "canvas: touchmove";
      }

      if (this.markerOn) {
        this.onMouseMove();
      }
    }, false);
  }
}

new CaptureTouch;