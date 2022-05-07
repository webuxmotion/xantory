function drawVerticalLines({
    ctx,
    canvasWidth,
    canvasHeight,
    xStep,
    color = 'red',
}) {
    const linesCount = canvasWidth / xStep;

    ctx.save();
    ctx.strokeStyle = color;

    for (let i = 0; i < linesCount; i++) {
        drawSingleVerticalLine({
            ctx,
            canvasHeight,
            x: i * xStep
        });
    }
    ctx.restore();
}

function drawHorizontalLines({
    ctx,
    canvasWidth,
    canvasHeight,
    yStep,
    color = 'red',
}) {
    const linesCount = canvasHeight / yStep;

    ctx.save();
    ctx.strokeStyle = color;

    for (let i = 0; i < linesCount; i++) {
        drawSingleHorizontalLine({
            ctx,
            canvasWidth,
            y: i * yStep
        });
    }
    ctx.restore();
}

function drawSingleVerticalLine({ ctx, x, canvasHeight }) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvasHeight);
    ctx.stroke();
}

function drawSingleHorizontalLine({ ctx, y, canvasWidth }) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvasWidth, y);
    ctx.stroke();
}

function getColorFromElement(element) {
    return element.value;
}

export {
    drawSingleVerticalLine,
    drawVerticalLines,
    drawHorizontalLines,
    drawSingleHorizontalLine,
    getColorFromElement,
}
