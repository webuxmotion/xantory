import { drawHorizontalLines, drawVerticalLines, getColorFromElement } from './utils';

export default class Grid {
	constructor() {
		this.canvas = document.getElementById('grid');
		this.canvas.style.background = '#363636';
		this.context = this.canvas.getContext('2d');
		this.mouse = utils.captureMouse(this.canvas);
		this.points = {
			a: {
				x: this.canvas.width / 2,
				y: this.canvas.height / 2,
				radius: 10,
			},
			b: {
				x: this.canvas.width / 2 + 200,
				y: this.canvas.height / 2 - 100,
				radius: 10,
			},
			c: {
				x: this.canvas.width / 2 + 200,
				y: this.canvas.height / 2,
				radius: 10,
			}
		}
		this.colorPickerForMajorLines = document.getElementById('grid-main-grid-color-picker');
		this.colorPickerLabelForMajorLines = document.querySelector('#grid-main-grid-color-picker + label');
		this.bigStepSize = 100;
		
		this.updateColorPicker();
		this.drawFrame();

		this.tankImage = new Image();
		this.tankImage.src = "/img/Tank.png";
		this.tankImageReady = false;
		this.tankImage.onload = () => {        
			this.tankImageReady = true;
		};

		this.helicopterImage = new Image();
		this.helicopterImage.src = "/img/Helicopter.png";
		this.helicopterImageReady = false;
		this.helicopterImage.onload = () => {        
			this.helicopterImageReady = true;
		};
	}

	updateColorPicker() {
		let newColor = getColorFromElement(this.colorPickerForMajorLines);
		if (newColor !== this.majorLinesColor) {
			this.majorLinesColor = newColor;
			this.colorPickerLabelForMajorLines.innerHTML = newColor;
		}
	}

	drawTank() {
		if (this.tankImageReady) {
			this.context.save();
			this.context.translate(this.points.a.x,this.points.a.y);
			const ac = this.points.c.x - this.points.a.x;
			const bc = this.points.c.y - this.points.b.y;
			const angle = Math.atan2(bc, ac);
			this.context.rotate(-Math.PI - angle);
			this.context.drawImage(this.tankImage, -100, -100, 200, 200);
			
			this.context.restore();
		}
	}

	drawHelicopter() {
		if (this.helicopterImageReady) {
			this.context.drawImage(this.helicopterImage, this.points.b.x - 100, this.points.b.y - 100, 300, 150);
		}
	}

	draw() {
		this.clearRect();
		this.updateColorPicker();
		this.drawMajorLines(this.majorLinesColor);
		this.drawRadius();
		this.drawTank();
		this.drawHelicopter();
		this.drawTriangle();
	}

	drawRadius() {
		this.context.save();
		this.context.strokeStyle = 'yellow';
		this.context.beginPath();
		this.context.moveTo(this.points.a.x, this.points.a.y);
		this.context.lineTo(this.points.b.x, this.points.b.y);
		this.context.stroke();
		this.context.restore();
	}

	drawMajorLines(color) {
		drawVerticalLines({
			ctx: this.context,
			canvasWidth: this.canvas.width,
			canvasHeight: this.canvas.height,
			xStep: this.bigStepSize,
			color,
		});

		drawHorizontalLines({
			ctx: this.context,
			canvasWidth: this.canvas.width,
			canvasHeight: this.canvas.height,
			yStep: this.bigStepSize,
			color,
		});
	}

	drawTriangle() {
		Object.keys(this.points).forEach(el => {
			const point = this.points[el];

			this.context.beginPath();
			this.context.arc(point.x, point.y, point.radius, 0, 2 * Math.PI);
			this.context.fill();
			this.context.font = "30px sans-serif";
			this.context.fillText(`${el} (${point.x}, ${point.y})`, point.x + point.radius, point.y - point.radius);
		});

		const ac = this.points.c.x - this.points.a.x;
		const bc = this.points.c.y - this.points.b.y;
		const ab = Math.sqrt(ac * ac + bc * bc);

		this.context.beginPath();
		this.context.arc(this.points.a.x, this.points.a.y, ab, 0, 2 * Math.PI);
		this.context.stroke();
		

		if (this.mouse.x && this.mouse.y) {
			this.points.b.x = this.mouse.x;
			this.points.b.y = this.mouse.y;

			this.points.c.x = this.points.b.x;
			this.points.c.y = this.points.a.y;
		}
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

new Grid;