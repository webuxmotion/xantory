class MultiCurve {
  constructor() {
    this.canvas = document.getElementById('custom-bezier');
    this.context = this.canvas.getContext('2d');
    this.points = [];
    this.numPoints = 3;

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
    this.drawCustomBezier();
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

  getBezierCoord(p0, p1, p2, t) {
    const p0index = (1 - t)**2;
    const p1index = (2 * t) * (1 - t);
    const p2index = t**2;
    const coord = p0index * p0 + p1index * p1 + p2index * p2;
  
    return coord;
  }

  drawCustomBezier() {
    this.context.beginPath();
    
    this.context.moveTo(this.points[0].x, this.points[0].y);

    for (let i = 0.2; i < 1; i += 0.2) {
      const x = this.getBezierCoord(this.points[0].x, this.points[1].x, this.points[2].x, i);
      const y = this.getBezierCoord(this.points[0].y, this.points[1].y, this.points[2].y, i);
      
      this.context.lineTo(x, y);
    }

    this.context.lineTo(this.points[2].x, this.points[2].y);

    this.context.strokeStyle = "yellow";
    this.context.stroke();
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