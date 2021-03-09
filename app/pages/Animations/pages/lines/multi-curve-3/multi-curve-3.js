class MultiCurve {
  constructor() {
    this.canvas = document.getElementById('multi-curve-3');
    this.context = this.canvas.getContext('2d');
    this.points = [];
    this.numPoints = 5;
    this.ctrlPoint = {};
    this.ctrlPoint1 = {};

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
    
    //find the first midpoint and move to it
    this.ctrlPoint1.x = (this.points[0].x + this.points[this.numPoints-1].x) / 2;
    this.ctrlPoint1.y = (this.points[0].y + this.points[this.numPoints-1].y) / 2;
    this.context.beginPath();
    this.context.moveTo(this.ctrlPoint1.x, this.ctrlPoint1.y);

    //curve through the rest, stopping at each midpoint
    for (var i = 0; i < this.numPoints - 1; i++) {
      this.ctrlPoint.x = (this.points[i].x + this.points[i+1].x) / 2;
      this.ctrlPoint.y = (this.points[i].y + this.points[i+1].y) / 2;
      this.context.quadraticCurveTo(this.points[i].x, this.points[i].y,
                               this.ctrlPoint.x, this.ctrlPoint.y);
    }
    //curve through the last point, back to the first midpoint
    this.context.quadraticCurveTo(this.points[i].x, this.points[i].y,
                             this.ctrlPoint1.x, this.ctrlPoint1.y);

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

    this.context.lineTo(this.points[0].x, this.points[0].y);

    this.context.strokeStyle = "red";
    this.context.stroke();
  }

  clearRect() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

new MultiCurve;