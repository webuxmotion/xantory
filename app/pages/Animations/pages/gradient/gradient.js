class MultiCurve {
  constructor() {
    this.canvas = document.getElementById('gradients');
    this.context = this.canvas.getContext('2d');
    this.pt1 = {x: 0, y: 0};             //gradient start point
    this.pt2 = {x: 100, y: 100};         //gradient end point
    this.gradient = this.context.createLinearGradient(this.pt1.x, this.pt1.y, this.pt2.x, this.pt2.y);
  
    this.draw();
    this.drawSecondGradient();
    this.drawRadialGradient();
  }

  draw() {
    this.gradient.addColorStop(0, "#ffffff");
    this.gradient.addColorStop(1, "#ff0000");

    this.context.fillStyle = this.gradient;
    this.context.fillRect(this.pt1.x, this.pt1.y, 200, 100);
  }

  drawSecondGradient() {
    const pt1 = {x: 100, y: 100};           //gradient start point
    const pt2 = {x: 200, y: 200};           //gradient end point
    const gradient = this.context.createLinearGradient(pt1.x, pt1.y, pt2.x, pt2.y);

    //white to blue to red
    gradient.addColorStop(0, "#ffffff");
    gradient.addColorStop(0.5, "#0000ff");
    gradient.addColorStop(1, "#ff0000");

    this.context.fillStyle = gradient;
    this.context.fillRect(100, 100, 100, 100);
  }

  drawRadialGradient() {
    const c1 = {x: 250, y: 150, radius: 0};  //gradient start circle
    const c2 = {x: 250, y: 150, radius: 50}; //gradient end circle
    const gradient = this.context.createRadialGradient(
      c1.x, c1.y, c1.radius,
      c2.x, c2.y, c2.radius
    );
    //all black alpha blend
    gradient.addColorStop(0, "#ffffff");
    gradient.addColorStop(1, "rgba(256, 0, 0, 0)"); //alpha required

    this.context.fillStyle = gradient;
    this.context.fillRect(200, 100, 100, 100);
  }
}

new MultiCurve;