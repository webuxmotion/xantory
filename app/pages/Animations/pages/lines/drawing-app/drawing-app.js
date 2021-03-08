const canvas = document.getElementById('drawing-app');
const context = canvas.getContext('2d');
const mouse = utils.captureMouse(canvas);

const onMouseMove = () => {
  context.lineTo(mouse.x, mouse.y);
  context.strokeStyle = "blue";
  context.stroke();
}

canvas.addEventListener('mousedown', function () {
  context.beginPath();
  context.moveTo(mouse.x, mouse.y);
  
  canvas.addEventListener('mousemove', onMouseMove, false);
}, false);

canvas.addEventListener('mouseup', function () {
  canvas.removeEventListener('mousemove', onMouseMove, false);
}, false);