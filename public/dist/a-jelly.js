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

/***/ "./app/pages/Animations/pages/jelly/jelly.js":
/*!***************************************************!*\
  !*** ./app/pages/Animations/pages/jelly/jelly.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Jelly)\n/* harmony export */ });\n/* harmony import */ var _mouse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouse */ \"./app/pages/Animations/pages/jelly/mouse.js\");\n\n\nclass Jelly {\n  constructor() {\n    this.canvas = document.getElementById('jelly');\n    this.ctx = this.canvas.getContext('2d');\n    this.mouse = new _mouse__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.canvas);\n    this.dist = 0;\n\n    this.drawFrame();\n  }\n\n  draw() {\n    this.drawMouse();\n    //this.drawP3();\n    this.drawCenterPoint();\n    this.drawLineBetween();\n    this.calculateDist();\n  }\n\n  drawMouse() {\n    this.ctx.save();\n    const radius = 50;\n    const color = this.dist < radius ? 'red' : 'white';\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.mouse.x, this.mouse.y, radius, 0, 2 * Math.PI);\n    this.ctx.strokeStyle = color;\n    this.ctx.stroke();\n    this.ctx.closePath();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.mouse.x, this.mouse.y, 4, 0, 2 * Math.PI);\n    this.ctx.fillStyle = color;\n    this.ctx.fill();\n    this.ctx.closePath();\n\n    this.ctx.restore();\n  }\n\n  drawCenterPoint() {\n    this.ctx.save();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.canvas.width / 2, this.canvas.height / 2, 4, 0, 2 * Math.PI);\n    this.ctx.fillStyle = 'white';\n    this.ctx.fill();\n    this.ctx.closePath();\n\n    this.ctx.restore();\n  }\n\n  drawLineBetween() {\n    this.ctx.save();\n\n    this.ctx.beginPath();\n    this.ctx.moveTo(this.canvas.width / 2, this.canvas.height / 2);\n    this.ctx.lineTo(this.mouse.x, this.mouse.y);\n    this.ctx.strokeStyle = 'white';\n    this.ctx.stroke();\n    this.ctx.closePath();\n\n    this.ctx.restore();\n  }\n\n  drawP3() {\n    this.ctx.save();\n\n    this.ctx.beginPath();\n    this.ctx.arc(this.canvas.width / 2, this.mouse.y, 4, 0, 2 * Math.PI);\n    this.ctx.fillStyle = 'red';\n    this.ctx.fill();\n    this.ctx.closePath();\n\n    this.ctx.restore();\n  }\n\n  calculateDist() {\n    const dx = this.canvas.width / 2 - this.mouse.x;\n    const dy = this.canvas.height / 2 - this.mouse.y;\n    this.dist = Math.sqrt(dx * dx + dy * dy);\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.clearRect();\n    this.draw();\n  }\n\n  clearRect() {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew Jelly;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/jelly/jelly.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/jelly/mouse.js":
/*!***************************************************!*\
  !*** ./app/pages/Animations/pages/jelly/mouse.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Mouse)\n/* harmony export */ });\nclass Mouse {\n  constructor(canvas) {\n    this.x = 0;\n    this.y = 0;\n\n    canvas.onmousemove = (e) => {\n      const rect = canvas.getBoundingClientRect();\n      this.x = e.clientX - rect.left;\n      this.y = e.clientY - rect.top;\n    }\n  }\n}\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/jelly/mouse.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/pages/Animations/pages/jelly/jelly.js");
/******/ 	
/******/ })()
;