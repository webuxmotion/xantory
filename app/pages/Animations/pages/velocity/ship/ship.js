import Ship from '../../../ship';
import { checkFocusedById } from '../../../helpers';

export default class PixelMove {
  constructor() {
    this.id = 'ship';
    this.canvas = document.getElementById(this.id);
    this.context = this.canvas.getContext('2d');
    
    this.ship = new Ship(),
    this.vr = 0;
    this.vx = 0;
    this.vy = 0;
    this.thrust = 0;

    this.ship.x = this.canvas.width / 2;
    this.ship.y = this.canvas.height / 2;
          
    this.addListeners();
    this.drawFrame();
  }

  draw() {
    this.clearRect();
    
    this.ship.rotation += this.vr * Math.PI / 180;
    const angle = this.ship.rotation;
    const ax = Math.cos(angle) * this.thrust;
    const ay = Math.sin(angle) * this.thrust;

    this.vx += ax;
    this.vy += ay;
    this.ship.x += this.vx;
    this.ship.y += this.vy;
    this.ship.draw(this.context);
  }

  addListeners() {
    window.addEventListener('keydown', event => {

      if (checkFocusedById(this.id)) {

        switch (event.code) {
          case "ArrowLeft":    
            this.vr = -3;
            break;
          case "ArrowRight":     
            this.vr = 3;
            break;
          case "ArrowUp":  
            event.preventDefault();
            this.thrust = 0.05;
            this.ship.showFlame = true;
            break;
          }
      }
      
    }, false);

    window.addEventListener('keyup', () => {
      if (checkFocusedById(this.id)) {
        this.vr = 0;
        this.thrust = 0;
        this.ship.showFlame = false;
      }
    }, false);
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