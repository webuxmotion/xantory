import Mouse from "./mouse";
import Ball from './ball';

const canvas = document.querySelector('#jelly');

if (canvas) {
  const mouse = new Mouse(canvas);
  const ctx = canvas.getContext('2d');
  const balls = [];
  const mouseBall = new Ball(0, 0, 30, 'green');

  for (let i = 0; i < 200; i++) {
    balls.push(
      new Ball(
        Math.random() * canvas.clientWidth,
        Math.random() * canvas.clientHeight
      )
    );
  }

  render();

  function render() {
    window.requestAnimationFrame(render);
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    balls.forEach((ball) => {
      ball.draw(ctx);
    });

    mouseBall.setPosition(mouse.x, mouse.y);
    mouseBall.draw(ctx);
  }
}
