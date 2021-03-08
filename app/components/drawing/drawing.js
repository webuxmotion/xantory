const canvas = document.getElementById('drawing-canvas');

if (canvas) {
  const context = canvas.getContext('2d');

  canvas.setAttribute('style', "background-color: black;");
  
  window.onload = function () {
    draw();
  }
  
  document.body.addEventListener('click', () => {
    draw();
  });
  
  const draw = () => {
    context.clearRect(0, 0, canvas.width, canvas.height);
  
    var points = [],
      numPoints = 50,
      ctrlPoint = {},
      ctrlPoint1 = {};
  
  
    for (var i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height
      });
    }
  
    //find the first midpoint and move to it
    ctrlPoint1.x = (points[0].x + points[numPoints-1].x) / 2;
    ctrlPoint1.y = (points[0].y + points[numPoints-1].y) / 2;
    context.beginPath();
    context.moveTo(ctrlPoint1.x, ctrlPoint1.y);
  
    //curve through the rest, stopping at each midpoint
    for (i = 0; i < numPoints - 1; i++) {
      ctrlPoint.x = (points[i].x + points[i+1].x) / 2;
      ctrlPoint.y = (points[i].y + points[i+1].y) / 2;
      context.quadraticCurveTo(points[i].x, points[i].y,
                               ctrlPoint.x, ctrlPoint.y);
    }
  
    //curve through the last point, back to the first midpoint
    context.quadraticCurveTo(points[i].x, points[i].y,
                             ctrlPoint1.x, ctrlPoint1.y);
  
                             context.strokeStyle = "#ffffff";
                             context.stroke();
  }
}


  