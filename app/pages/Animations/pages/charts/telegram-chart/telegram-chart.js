import Chart from './Canvas';

export default class PixelMove {
  constructor() {
    this.canvas = document.getElementById('telegram-chart');
    this.context = this.canvas.getContext('2d');
    
    new Chart({
      canvas: this.canvas,
      context: this.context,
      data: [
        [0, 0],
        [200, 100],
        [400, 50],
        [600, 500],
        [800, 400],
      ]
    });
  }

  draw() {
    this.clearRect();
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