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

/***/ "./app/pages/Experiments/pages/common/common.js":
/*!******************************************************!*\
  !*** ./app/pages/Experiments/pages/common/common.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _grid_grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./grid/grid */ \"./app/pages/Experiments/pages/common/grid/grid.js\");\n\n\n//# sourceURL=webpack://tonephp/./app/pages/Experiments/pages/common/common.js?");

/***/ }),

/***/ "./app/pages/Experiments/pages/common/grid/grid.js":
/*!*********************************************************!*\
  !*** ./app/pages/Experiments/pages/common/grid/grid.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Grid)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./app/pages/Experiments/pages/common/grid/utils.js\");\n\r\n\r\nclass Grid {\r\n\tconstructor() {\r\n\t\tthis.canvas = document.getElementById('grid');\r\n\t\tthis.context = this.canvas.getContext('2d');\r\n\t\tthis.colorPickerForMajorLines = document.getElementById('grid-main-grid-color-picker');\r\n\t\tthis.colorPickerLabelForMajorLines = document.querySelector('#grid-main-grid-color-picker + label');\r\n\t\tthis.bigStepSize = 100;\r\n\t\t\r\n\t\tthis.updateColorPicker();\r\n\t\tthis.drawFrame();\r\n\t}\r\n\r\n\tupdateColorPicker() {\r\n\t\tlet newColor = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getColorFromElement)(this.colorPickerForMajorLines);\r\n\t\tif (newColor !== this.majorLinesColor) {\r\n\t\t\tthis.majorLinesColor = newColor;\r\n\t\t\tthis.colorPickerLabelForMajorLines.innerHTML = newColor;\r\n\t\t}\r\n\t}\r\n\r\n\tdraw() {\r\n\t\tthis.clearRect();\r\n\t\tthis.updateColorPicker();\r\n\r\n\t\tthis.drawMajorLines(this.majorLinesColor);\r\n\t}\r\n\r\n\tdrawMajorLines(color) {\r\n\t\t(0,_utils__WEBPACK_IMPORTED_MODULE_0__.drawVerticalLines)({\r\n\t\t\tctx: this.context,\r\n\t\t\tcanvasWidth: this.canvas.width,\r\n\t\t\tcanvasHeight: this.canvas.height,\r\n\t\t\txStep: this.bigStepSize,\r\n\t\t\tcolor,\r\n\t\t});\r\n\r\n\t\t(0,_utils__WEBPACK_IMPORTED_MODULE_0__.drawHorizontalLines)({\r\n\t\t\tctx: this.context,\r\n\t\t\tcanvasWidth: this.canvas.width,\r\n\t\t\tcanvasHeight: this.canvas.height,\r\n\t\t\tyStep: this.bigStepSize,\r\n\t\t\tcolor,\r\n\t\t});\r\n\t}\r\n\r\n\tdrawFrame() {\r\n\t\twindow.requestAnimationFrame(\r\n\t\t\tthis.drawFrame.bind(this, this.canvas)\r\n\t\t);\r\n\r\n\t\tthis.draw();\r\n\t}\r\n\r\n\tclearRect() {\r\n\t\tthis.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n\t}\r\n}\r\n\r\nnew Grid;\n\n//# sourceURL=webpack://tonephp/./app/pages/Experiments/pages/common/grid/grid.js?");

/***/ }),

/***/ "./app/pages/Experiments/pages/common/grid/utils.js":
/*!**********************************************************!*\
  !*** ./app/pages/Experiments/pages/common/grid/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawSingleVerticalLine\": () => (/* binding */ drawSingleVerticalLine),\n/* harmony export */   \"drawVerticalLines\": () => (/* binding */ drawVerticalLines),\n/* harmony export */   \"drawHorizontalLines\": () => (/* binding */ drawHorizontalLines),\n/* harmony export */   \"drawSingleHorizontalLine\": () => (/* binding */ drawSingleHorizontalLine),\n/* harmony export */   \"getColorFromElement\": () => (/* binding */ getColorFromElement)\n/* harmony export */ });\nfunction drawVerticalLines({\n    ctx,\n    canvasWidth,\n    canvasHeight,\n    xStep,\n    color = 'red',\n}) {\n    const linesCount = canvasWidth / xStep;\n\n    ctx.save();\n    ctx.strokeStyle = color;\n\n    for (let i = 0; i < linesCount; i++) {\n        drawSingleVerticalLine({\n            ctx,\n            canvasHeight,\n            x: i * xStep\n        });\n    }\n    ctx.restore();\n}\n\nfunction drawHorizontalLines({\n    ctx,\n    canvasWidth,\n    canvasHeight,\n    yStep,\n    color = 'red',\n}) {\n    const linesCount = canvasHeight / yStep;\n\n    ctx.save();\n    ctx.strokeStyle = color;\n\n    for (let i = 0; i < linesCount; i++) {\n        drawSingleHorizontalLine({\n            ctx,\n            canvasWidth,\n            y: i * yStep\n        });\n    }\n    ctx.restore();\n}\n\nfunction drawSingleVerticalLine({ ctx, x, canvasHeight }) {\n    ctx.beginPath();\n    ctx.moveTo(x, 0);\n    ctx.lineTo(x, canvasHeight);\n    ctx.stroke();\n}\n\nfunction drawSingleHorizontalLine({ ctx, y, canvasWidth }) {\n    ctx.beginPath();\n    ctx.moveTo(0, y);\n    ctx.lineTo(canvasWidth, y);\n    ctx.stroke();\n}\n\nfunction getColorFromElement(element) {\n    return element.value;\n}\n\n\n\n\n//# sourceURL=webpack://tonephp/./app/pages/Experiments/pages/common/grid/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/pages/Experiments/pages/common/common.js");
/******/ 	
/******/ })()
;