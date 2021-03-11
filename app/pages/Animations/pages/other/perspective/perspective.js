export default class Perspective {
  constructor() {
    this.canvas = document.getElementById('perspective');
    this.context = this.canvas.getContext('2d');
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.fov = 250; //pixels are 250px away from us
    this.pixels = [];

    this.generatePoints();
    this.drawFrame();
  }

  generatePoints() {
      for(var x = -250; x < 250; x+=5)
        for(var z = -250; z < 250; z+=5)
          this.pixels.push({x: x, y: 30, z: z});
  }

  draw() {
    this.clearRect();

    var imagedata = this.context.getImageData(0,0,this.w,this.h);
    
    var i = this.pixels.length;
    while(i--) {
      var pixel = this.pixels[i];
      
      var scale = this.fov/(this.fov+pixel.z);
      var x2d = pixel.x * scale + this.w/2;
      var y2d = pixel.y * scale + this.h/2;
      
      if(x2d >= 0 && x2d <= this.w && y2d >= 0 && y2d <= this.h) {
        var c = (Math.round(y2d) * imagedata.width + Math.round(x2d))*4;

        imagedata.data[c] = 0;
        imagedata.data[c+1] = 255;
        imagedata.data[c+2] = 60;
        imagedata.data[c+3] = 255;
      }

      pixel.z -= 1;

      if(pixel.z < -this.fov) pixel.z += 2*this.fov;
    }

    this.context.putImageData(imagedata, 0, 0);
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

new Perspective;