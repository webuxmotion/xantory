export default class Ball {
  constructor(x, y, radius, color) {
    this.x = x || 0;
    this.y = y || 0;
    this.radius = radius || 2;
    this.color = color || '#ff6600';

    this.vx = 0;
    this.vy = 0;
  }

  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }

  think(mouse) {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 30) {
      const angle = Math.atan2(dy, dx);
      const tx = mouse.x + Math.cos(angle) * 30;
      const ty = mouse.y + Math.sin(angle) * 30;

      this.vx += tx - this.x;
      this.vy += ty - this.y;
      console.log(dist, angle);
    }
    this.x += this.vx;
    this.y += this.vy;
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