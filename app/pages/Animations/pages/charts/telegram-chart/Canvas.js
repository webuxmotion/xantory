const WIDTH = 600;
const HEIGHT = 200;
const DPI_WIDTH = WIDTH * 2;
const DPI_HEIGHT = HEIGHT * 2;
const ROWS_COUNT = 5;
const PADDING = 40;
const VIEW_HEIGHT = DPI_HEIGHT - PADDING * 2;

class Chart {
    constructor({ canvas, context, data }) {
        this.canvas = canvas;
        this.context = context;
        this.data = data;

        this.canvas.style.width = WIDTH + 'px';
        this.canvas.style.height = HEIGHT + 'px';

        this.canvas.width = DPI_WIDTH;
        this.canvas.height = DPI_HEIGHT;

        const [yMin, yMax] = this.getMinMaxY();

        this.yMin = yMin;
        this.yMax = yMax;

        this.yRatio = VIEW_HEIGHT / (this.yMax - this.yMin);

        this.drawHorizontalLines();
        this.draw(); 
    }

    draw() {
        this.context.beginPath();
        this.context.lineWidth = 4;
        this.context.strokeStyle = '#ff0000';

        for (const [x, y] of this.data) {
            this.context.lineTo(x, DPI_HEIGHT - PADDING - y * this.yRatio);
        }

        this.context.stroke();
        this.context.closePath();
    }

    drawHorizontalLines() {
        const stepHeight = VIEW_HEIGHT / ROWS_COUNT;
        const textStep = (this.yMax - this.yMin) / ROWS_COUNT;

        this.context.beginPath();
        this.context.lineWidth = 1;
        this.context.strokeStyle = '#222';

        for (let i = 1; i <= ROWS_COUNT; i++) {
            const y = stepHeight * i;
            const text = this.yMax - textStep * i;

            this.context.font = 'normal 20px Helvetica, sans-serif';   
            this.context.fillStyle = '#96a2aa';
            this.context.fillText(text, 5, y + PADDING - 10);
            this.context.moveTo(0, y + PADDING);
            this.context.lineTo(DPI_WIDTH, y + PADDING);
        }

        this.context.stroke();
        this.context.closePath();
    }

    getMinMaxY() {
        let min;
        let max;

        for (const [, y] of this.data) {
            if (typeof min !== 'number') min = y;
            if (typeof max !== 'number') max = y;

            if (min > y) min = y;
            if (max < y) max = y;
        }

        return [min, max];
    }
}

export default Chart;