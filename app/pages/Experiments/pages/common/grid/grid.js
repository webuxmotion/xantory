import { drawHorizontalLines, drawVerticalLines, getColorFromElement } from './utils';

export default class Grid {
	constructor() {
		this.canvas = document.getElementById('grid');
		this.context = this.canvas.getContext('2d');
		this.colorPickerForMajorLines = document.getElementById('grid-main-grid-color-picker');
		this.colorPickerLabelForMajorLines = document.querySelector('#grid-main-grid-color-picker + label');
		this.bigStepSize = 100;
		
		this.updateColorPicker();
		this.drawFrame();
	}

	updateColorPicker() {
		let newColor = getColorFromElement(this.colorPickerForMajorLines);
		if (newColor !== this.majorLinesColor) {
			this.majorLinesColor = newColor;
			this.colorPickerLabelForMajorLines.innerHTML = newColor;
		}
	}

	draw() {
		this.clearRect();
		this.updateColorPicker();

		this.drawMajorLines(this.majorLinesColor);
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