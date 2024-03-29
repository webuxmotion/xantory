export default class Ball {
  constructor(x, y, radius, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.originalX = x || 0;
    this.originalY = y || 0;
    this.radius = radius || 5;
    this.color = color || '#ff6600';
    this.mouseRadius = 50;

    this.vx = 0;
    this.vy = 0;
    this.friction = 0.4;
    this.springFactor = 0.1;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  think(mouse) {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < this.mouseRadius) {
      const angle = Math.atan2(dy, dx);
      const tx = mouse.x + Math.cos(angle) * this.mouseRadius;
      const ty = mouse.y + Math.sin(angle) * this.mouseRadius;

      this.vx += tx - this.x;
      this.vy += ty - this.y;
    }

    const dx1 = this.x - this.originalX;
    const dy1 = this.y - this.originalY;

    this.vx -= dx1 * this.springFactor;
    this.vy -= dy1 * this.springFactor;

    this.vx *= this.friction;
    this.vy *= this.friction;


    this.x += this.vx;
    this.y += this.vy;
  }

  spring() {

  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}