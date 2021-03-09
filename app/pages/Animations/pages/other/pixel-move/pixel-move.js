export default class PixelMove {
  constructor() {
    this.canvas = document.getElementById('pixel-move');
    this.context = this.canvas.getContext('2d');
    this.mouse = utils.captureMouse(this.canvas);
    
    this.drawFrame();
  }

  drawFrame() {
    window.requestAnimationFrame(
      this.drawFrame.bind(this, this.canvas)
    );

    for (var i = 0; i < this.canvas.width; i += 10) {
      for (var j = 0; j < this.canvas.height; j += 10) {
        this.context.fillStyle = (i % 20 === 0) ? "#fee" : ((i % 30 === 0) ? "#eee" : "#bee");
        this.context.fillRect(i, j, 10, 10);
      }
    }

    const imagedata = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const pixels = imagedata.data;

    for (var y = 0; y < imagedata.height; y += 1) {
      for (var x = 0; x < imagedata.width; x += 1) {

        const dx = x - this.mouse.x;
        const dy = y - this.mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const offset = (x + y * imagedata.width) * 4;
        const r = pixels[offset];
        const g = pixels[offset + 1];
        const b = pixels[offset + 2];

        pixels[offset]     = Math.sin(r * dist * 0.0005) * 256;
        pixels[offset + 1] = Math.sin(g * dist * 0.0005) * 256;
        pixels[offset + 2] = Math.sin(b * dist * 0.0005) * 256;
      }
    }

    this.context.putImageData(imagedata, 0, 0);
  }
}

new PixelMove;