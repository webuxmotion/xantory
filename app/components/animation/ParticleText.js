import * as PIXI from 'pixi.js';
import Particle from './Particle'; 

class ParticleText {
  constructor() {
    this.app = new PIXI.Application({
      width: 800, 
      height: 400,
    });
    this.animationContainer = document.getElementById('animation');
    this.rows = 600;
    this.cols = 200;
    this.particleSize = 1;
    this.particles = [];

    this.container = new PIXI.ParticleContainer(120000);
    this.app.stage.addChild(this.container);

    this.addObjects();

    this.animationContainer.appendChild(this.app.view);
    this.animationContainer.classList.add('is-loaded');
  }

  addObjects() {
    this.app.loader.add('favicon', 'xantory-games-transparent.png').load((loader, resources) => {

      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = this.rows * this.particleSize;
      canvas.height = this.cols * this.particleSize;
      ctx.drawImage(resources.favicon.data, 0, 0);

      const hasFill = (x,y) => {
        for (let i = 0; i < this.particleSize; i++) {
          for (let j = 0; j < this.particleSize; j++) {
            const imageData = ctx.getImageData(x + i, y + j, 1, 1);

            if (
              imageData.data[0] > 0 ||
              imageData.data[1] > 0 ||
              imageData.data[2] > 0
            ) return true;
          }
        }

        return false;
      }

      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.cols; j++) {

          const filled = hasFill(
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

      this.animationContainer.classList.remove('is-loaded');
    });
  }

  animate() {
    this.app.ticker.add(() => {
      this.mouse = this.app.renderer.plugins.interaction.mouse.global;
      this.particles.forEach(p => p.update(this.mouse))
    });
  }
}

export default ParticleText;