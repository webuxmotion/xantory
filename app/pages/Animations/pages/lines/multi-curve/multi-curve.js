class MultiCurve {
  constructor() {
    this.canvas = document.getElementById('multi-curve');
    this.context = this.canvas.getContext('2d');
    this.points = [];
    this.numPoints = 5;

    this.showVariant();
    this.addClickListener();
  }

  addClickListener() {
    this.canvas.addEventListener('click', () => {
      this.showVariant();
    }, false);
  }

  showVariant() {
    this.clearRect();
    this.resetPoints();
    this.generatePoints();
    this.draw();
    this.drawLines();
  }

  generatePoints() {
    for (let i = 0; i < this.numPoints; i++) {
      this.points.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height
      });
    }
  }

  resetPoints() {
    this.points = [];
  }

  draw() {
    this.context.beginPath();
    this.context.moveTo(this.points[0].x, this.points[0].y);
    
    for (let i = 1; i < this.numPoints; i += 2) {

      this.context.quadraticCurveTo(
        this.points[i].x, 
        this.points[i].y,
        this.points[i + 1].x,
        this.points[i + 1].y
      );

    }

    this.context.strokeStyle = "blue";
    this.context.stroke();
  }

  drawLines() {
    this.context.beginPath();
    this.context.moveTo(this.points[0].x, this.points[0].y);
    
    for (let i = 1; i < this.numPoints; i += 2) {

      this.context.lineTo(this.points[i].x, this.points[i].y);
      this.context.lineTo(this.points[i + 1].x, this.points[i + 1].y);
      

    }

    this.context.strokeStyle = "red";
    this.context.stroke();
  }

  clearRect() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

new MultiCurve;