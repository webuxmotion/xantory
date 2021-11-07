import Mouse from "./mouse";
import Ball from './ball';

const canvas = document.querySelector('#jelly');

if (canvas) {
  canvas.style.cursor = 'none';
  const mouse = new Mouse(canvas);
  const ctx = canvas.getContext('2d');
  const balls = [];
  const mouseBall = new Ball(0, 0, 50, 'green');
  const ballsCount = 12;
  let image = null;

  for (let i = 0; i < ballsCount; i++) {
    balls.push(
      new Ball(
        canvas.clientWidth / 2 + 100 * Math.sin(i * 2 * Math.PI / ballsCount),
        canvas.clientHeight / 2 + 100 * Math.cos(i * 2 * Math.PI / ballsCount),
      )
    );
  }

  render();
  initSvg();

  function initSvg() {
    image = new Image();
    image.src = "/img/emomoe-alt.svg";
    image.onload = function() {
      drawImage(0, 0);
    }
  }

  function drawImage(x, y) {
    if (image) {
      ctx.drawImage(image, x - 50, y - 50);
    }
  }

  function render() {
    window.requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    balls.forEach((ball) => {
      ball.think(mouse);
      //ball.draw(ctx);
    });

    mouseBall.setPosition(mouse.x, mouse.y);
    //mouseBall.draw(ctx);
    connectDots(balls);

    // var path = new Path2D('M60.5255 65.7696L66.1824 60.1127L53.4546 47.3849L66.1825 34.6569L60.5257 29L47.7977 41.728L35.0697 29L29.4128 34.6569L42.1408 47.3849L29.413 60.1127L35.0698 65.7696L47.7977 53.0417L60.5255 65.7696Z');
    // ctx.stroke(path);

    drawImage(mouse.x, mouse.y);
  }

  function connectDots(dots) {
    ctx.beginPath();
  
    for (var i = 0, jlen = dots.length; i <= jlen; ++i) {
      var p0 = dots[i + 0 >= jlen ? i + 0 - jlen : i + 0];
      var p1 = dots[i + 1 >= jlen ? i + 1 - jlen : i + 1];
      ctx.quadraticCurveTo(p0.x, p0.y, (p0.x + p1.x) * 0.5, (p0.y + p1.y) * 0.5);
    }
    ctx.fillStyle = 'white';
    ctx.closePath();
    ctx.fill();
  }
}
