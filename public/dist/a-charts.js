/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/pages/Animations/pages/charts/charts.js":
/*!*****************************************************!*\
  !*** ./app/pages/Animations/pages/charts/charts.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _telegram_chart_telegram_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./telegram-chart/telegram-chart */ \"./app/pages/Animations/pages/charts/telegram-chart/telegram-chart.js\");\n\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/charts/charts.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/charts/telegram-chart/Canvas.js":
/*!********************************************************************!*\
  !*** ./app/pages/Animations/pages/charts/telegram-chart/Canvas.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst WIDTH = 600;\nconst HEIGHT = 200;\nconst DPI_WIDTH = WIDTH * 2;\nconst DPI_HEIGHT = HEIGHT * 2;\nconst ROWS_COUNT = 5;\nconst PADDING = 40;\nconst VIEW_HEIGHT = DPI_HEIGHT - PADDING * 2;\n\nclass Chart {\n    constructor({ canvas, context, data }) {\n        this.canvas = canvas;\n        this.context = context;\n        this.data = data;\n\n        this.canvas.style.width = WIDTH + 'px';\n        this.canvas.style.height = HEIGHT + 'px';\n\n        this.canvas.width = DPI_WIDTH;\n        this.canvas.height = DPI_HEIGHT;\n\n        const [yMin, yMax] = this.getMinMaxY();\n\n        this.yMin = yMin;\n        this.yMax = yMax;\n\n        this.yRatio = VIEW_HEIGHT / (this.yMax - this.yMin);\n\n        this.drawHorizontalLines();\n        this.draw(); \n    }\n\n    draw() {\n        this.context.beginPath();\n        this.context.lineWidth = 4;\n        this.context.strokeStyle = '#ff0000';\n\n        for (const [x, y] of this.data) {\n            this.context.lineTo(x, DPI_HEIGHT - PADDING - y * this.yRatio);\n        }\n\n        this.context.stroke();\n        this.context.closePath();\n    }\n\n    drawHorizontalLines() {\n        const stepHeight = VIEW_HEIGHT / ROWS_COUNT;\n        const textStep = (this.yMax - this.yMin) / ROWS_COUNT;\n\n        this.context.beginPath();\n        this.context.lineWidth = 1;\n        this.context.strokeStyle = '#222';\n\n        for (let i = 1; i <= ROWS_COUNT; i++) {\n            const y = stepHeight * i;\n            const text = this.yMax - textStep * i;\n\n            this.context.font = 'normal 20px Helvetica, sans-serif';   \n            this.context.fillStyle = '#96a2aa';\n            this.context.fillText(text, 5, y + PADDING - 10);\n            this.context.moveTo(0, y + PADDING);\n            this.context.lineTo(DPI_WIDTH, y + PADDING);\n        }\n\n        this.context.stroke();\n        this.context.closePath();\n    }\n\n    getMinMaxY() {\n        let min;\n        let max;\n\n        for (const [, y] of this.data) {\n            if (typeof min !== 'number') min = y;\n            if (typeof max !== 'number') max = y;\n\n            if (min > y) min = y;\n            if (max < y) max = y;\n        }\n\n        return [min, max];\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Chart);\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/charts/telegram-chart/Canvas.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/charts/telegram-chart/telegram-chart.js":
/*!****************************************************************************!*\
  !*** ./app/pages/Animations/pages/charts/telegram-chart/telegram-chart.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PixelMove)\n/* harmony export */ });\n/* harmony import */ var _Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Canvas */ \"./app/pages/Animations/pages/charts/telegram-chart/Canvas.js\");\n\n\nclass PixelMove {\n  constructor() {\n    this.canvas = document.getElementById('telegram-chart');\n    this.context = this.canvas.getContext('2d');\n    \n    new _Canvas__WEBPACK_IMPORTED_MODULE_0__.default({\n      canvas: this.canvas,\n      context: this.context,\n      data: [\n        [0, 0],\n        [200, 100],\n        [400, 50],\n        [600, 500],\n        [800, 400],\n      ]\n    });\n  }\n\n  draw() {\n    this.clearRect();\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.draw();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew PixelMove;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/charts/telegram-chart/telegram-chart.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/pages/Animations/pages/charts/charts.js");
/******/ 	
/******/ })()
;