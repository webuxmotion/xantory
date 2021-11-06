import Mouse from "./mouse";
import Ball from './ball';

const canvas = document.querySelector('#jelly');

if (canvas) {
  const mouse = new Mouse(canvas);
  const ctx = canvas.getContext('2d');
  const balls = [];
  const mouseBall = new Ball(0, 0, 50, 'green');
  const ballsCount = 12;

  for (let i = 0; i < ballsCount; i++) {
    balls.push(
      new Ball(
        canvas.clientWidth / 2 + 100 * Math.sin(i * 2 * Math.PI / ballsCount),
        canvas.clientHeight / 2 + 100 * Math.cos(i * 2 * Math.PI / ballsCount),
      )
    );
  }

  render();

  function render() {
    window.requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    balls.forEach((ball) => {
      ball.think(mouse);
      //ball.draw(ctx);
    });

    mouseBall.setPosition(mouse.x, mouse.y);
    mouseBall.draw(ctx);
    connectDots(balls);
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
