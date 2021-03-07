import * as PIXI from 'pixi.js';

export default class Particle {
  constructor(x, y, texture, size) {
    this.x = x + 100;
    this.y = y + 100;

    this.sprite = new PIXI.Sprite(new PIXI.Texture(texture));
    this.sprite.texture.frame = new PIXI.Rectangle(x, y, size, size);

    this.sprite.x = x + 100;
    this.sprite.y = y + 100;

    this.speedX = 0;
    this.speedY = 0;

    this.radius = 100;
    this.friction = 0.9;
    this.gravity = 0.01;
    this.maxGravity = 0.01 + Math.random() * 0.05;

    this.dirX = Math.random() - 0.5;
    this.dirY = Math.random() - 0.5;
  }

  update(mouse) {

    let distanceX = mouse.x - this.sprite.x;
    let distanceY = mouse.y - this.sprite.y;

    let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    let normalX = distanceX/distance;
    let normalY = distanceY/distance;

    // mouse interaction
    if (distance < this.radius) {
      this.gravity *= this.friction;
      this.speedX -= normalX; 
      this.speedY -= normalY;
    } else {
      this.gravity += 0.1 * (this.maxGravity - this.gravity);
    }

    // back home
    let originDistX = this.x - this.sprite.x;
    let originDistY = this.y - this.sprite.y;
    this.speedX += originDistX * this.gravity;
    this.speedY += originDistY * this.gravity;



    this.speedX *= this.friction;
    this.speedY *= this.friction;

    this.sprite.x += this.speedX;
    this.sprite.y += this.speedY;
    
  }
}