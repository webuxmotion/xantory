export default class Motorcycle {
  constructor() {
    this.canvas = document.getElementById('motorcycle');
    this.context = this.canvas.getContext('2d');

    this.perm = [];
    this.vx = 0;
    this.ax = 3;

    this.generatePerm();

    this.drawFrame();
  }

  lerp(a, b, t) {
    return a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;
  }

  noise(x) {
    let normalizedX = x * 0.01 % 255;
    return this.lerp(this.perm[Math.floor(normalizedX)], this.perm[Math.ceil(normalizedX)], normalizedX - Math.floor(normalizedX));
  }

  generatePerm() {
    while (this.perm.length < 255) {
      let val;
      while (this.perm.includes(val = Math.floor(Math.random() * 255)));
      this.perm.push(val);
    }
  }

  draw() {
    this.clearRect();
    
    this.vx += this.ax;
    this.context.fillStyle = "#19f";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.context.fillStyle = "black";
    this.context.beginPath();
    this.context.moveTo(0, this.canvas.height);
    for (let i = 0; i < this.canvas.width; i++) {
      this.context.lineTo(i, this.canvas.height - 20 - this.noise(this.vx + i) * 0.25);
    }
    this.context.lineTo(this.canvas.width, this.canvas.height);
    this.context.fill();
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

new Motorcycle;