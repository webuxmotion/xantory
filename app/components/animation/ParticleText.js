import * as PIXI from 'pixi.js';
import Particle from './Particle'; 

class ParticleText {
  constructor() {
    this.app = new PIXI.Application({
      width: 800, 
      height: 400,
    });
    this.animationDiv = document.getElementById('animation');
    this.rows = 600;
    this.cols = 200;
    this.particleSize = 1;
    this.particles = [];

    this.container = new PIXI.ParticleContainer(15000);
    this.app.stage.addChild(this.container);

    this.addObjects();

    this.animationDiv.appendChild(this.app.view);
    this.animationDiv.classList.add('is-loaded');
    
    this.initCanvas();
  }

  addObjects() {
    this.app.loader.add('favicon', 'xantory-games-transparent.png').load((loader, resources) => {

      this.drawCanvas(resources.favicon.data);

      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {

          const filled = this.hasFill(
            i * this.particleSize, 
            j * this.particleSize
          );

          if (filled) {
            let p = new Particle(
              i * this.particleSize, 
              j * this.particleSize, 
              resources.favicon.texture,
              this.particleSize
            );
  
            this.particles.push(p);
            this.container.addChild(p.sprite);
          }
        }
      }
  
      this.animate();

      this.animationDiv.classList.remove('is-loaded');
    });
  }

  initCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvasCtx = this.canvas.getContext('2d');
    this.canvas.width = this.rows * this.particleSize;
    this.canvas.height = this.cols * this.particleSize;
  }

  drawCanvas(data) {
    this.canvasCtx.drawImage(data, 0, 0);
  }

  hasFill(x,y) {
    for (let i = 0; i < this.particleSize; i++) {
      for (let j = 0; j < this.particleSize; j++) {
        const imageData = this.canvasCtx.getImageData(x + i, y + j, 1, 1);

        if (
          imageData.data[0] > 0 ||
          imageData.data[1] > 0 ||
          imageData.data[2] > 0
        ) return true;
      }
    }

    return false;
  }

  animate() {
    this.app.ticker.add(() => {
      this.mouse = this.app.renderer.plugins.interaction.mouse.global;
      this.particles.forEach(p => p.update(this.mouse))
    });
  }
}

export default ParticleText;