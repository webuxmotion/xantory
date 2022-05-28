/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app/pages/Animations/utils.js":
/*!***************************************!*\
  !*** ./app/pages/Animations/utils.js ***!
  \***************************************/
/***/ (() => {

eval("\n\n/**\n * Normalize the browser animation API across implementations. This requests\n * the browser to schedule a repaint of the window for the next animation frame.\n * Checks for cross-browser support, and, failing to find it, falls back to setTimeout.\n * @param {function}    callback  Function to call when it's time to update your animation for the next repaint.\n * @param {HTMLElement} element   Optional parameter specifying the element that visually bounds the entire animation.\n * @return {number} Animation frame request.\n */\n if (!window.requestAnimationFrame) {\n  window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||\n                                  window.mozRequestAnimationFrame ||\n                                  window.msRequestAnimationFrame ||\n                                  window.oRequestAnimationFrame ||\n                                  function (callback) {\n                                    return window.setTimeout(callback, 17 /*~ 1000/60*/);\n                                  });\n}\n\n/**\n * ERRATA: 'cancelRequestAnimationFrame' renamed to 'cancelAnimationFrame' to reflect an update to the W3C Animation-Timing Spec.\n *\n * Cancels an animation frame request.\n * Checks for cross-browser support, falls back to clearTimeout.\n * @param {number}  Animation frame request.\n */\nif (!window.cancelAnimationFrame) {\n  window.cancelAnimationFrame = (window.cancelRequestAnimationFrame ||\n                                 window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||\n                                 window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||\n                                 window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||\n                                 window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||\n                                 window.clearTimeout);\n}\n\n/* Object that contains our utility functions.\n * Attached to the window object which acts as the global namespace.\n */\nwindow.utils = {};\n\n/**\n * Keeps track of the current mouse position, relative to an element.\n * @param {HTMLElement} element\n * @return {object} Contains properties: x, y, event\n */\nwindow.utils.captureMouse = function (element) {\n  var mouse = {x: 0, y: 0, event: null},\n      body_scrollLeft = document.body.scrollLeft,\n      element_scrollLeft = document.documentElement.scrollLeft,\n      body_scrollTop = document.body.scrollTop,\n      element_scrollTop = document.documentElement.scrollTop,\n      offsetLeft = element.offsetLeft,\n      offsetTop = element.offsetTop;\n  \n  element.addEventListener('mousemove', function (event) {\n    var x, y;\n    \n    if (event.pageX || event.pageY) {\n      x = event.pageX;\n      y = event.pageY;\n    } else {\n      x = event.clientX + body_scrollLeft + element_scrollLeft;\n      y = event.clientY + body_scrollTop + element_scrollTop;\n    }\n    x -= offsetLeft;\n    y -= offsetTop;\n    \n    mouse.x = x;\n    mouse.y = y;\n    mouse.event = event;\n  }, false);\n  \n  return mouse;\n};\n\n/**\n * Keeps track of the current (first) touch position, relative to an element.\n * @param {HTMLElement} element\n * @return {object} Contains properties: x, y, isPressed, event\n */\nwindow.utils.captureTouch = function (element) {\n  var touch = {x: null, y: null, isPressed: false, event: null},\n      body_scrollLeft = document.body.scrollLeft,\n      element_scrollLeft = document.documentElement.scrollLeft,\n      body_scrollTop = document.body.scrollTop,\n      element_scrollTop = document.documentElement.scrollTop,\n      offsetLeft = element.offsetLeft,\n      offsetTop = element.offsetTop;\n\n  element.addEventListener('touchstart', function (event) {\n    touch.isPressed = true;\n    touch.event = event;\n  }, false);\n\n  element.addEventListener('touchend', function (event) {\n    touch.isPressed = false;\n    touch.x = null;\n    touch.y = null;\n    touch.event = event;\n  }, false);\n  \n  element.addEventListener('touchmove', function (event) {\n    var x, y,\n        touch_event = event.touches[0]; //first touch\n    \n    if (touch_event.pageX || touch_event.pageY) {\n      x = touch_event.pageX;\n      y = touch_event.pageY;\n    } else {\n      x = touch_event.clientX + body_scrollLeft + element_scrollLeft;\n      y = touch_event.clientY + body_scrollTop + element_scrollTop;\n    }\n    x -= offsetLeft;\n    y -= offsetTop;\n    \n    touch.x = x;\n    touch.y = y;\n    touch.event = event;\n  }, false);\n  \n  return touch;\n};\n\n/**\n * Returns a color in the format: '#RRGGBB', or as a hex number if specified.\n * @param {number|string} color\n * @param {boolean=}      toNumber=false  Return color as a hex number.\n * @return {string|number}\n */\nwindow.utils.parseColor = function (color, toNumber) {\n  if (toNumber === true) {\n    if (typeof color === 'number') {\n      return (color | 0); //chop off decimal\n    }\n    if (typeof color === 'string' && color[0] === '#') {\n      color = color.slice(1);\n    }\n    return window.parseInt(color, 16);\n  } else {\n    if (typeof color === 'number') {\n      color = '#' + ('00000' + (color | 0).toString(16)).substr(-6); //pad\n    }\n    return color;\n  }\n};\n\n/**\n * Converts a color to the RGB string format: 'rgb(r,g,b)' or 'rgba(r,g,b,a)'\n * @param {number|string} color\n * @param {number}        alpha\n * @return {string}\n */\nwindow.utils.colorToRGB = function (color, alpha) {\n  //number in octal format or string prefixed with #\n  if (typeof color === 'string' && color[0] === '#') {\n    color = window.parseInt(color.slice(1), 16);\n  }\n  alpha = (alpha === undefined) ? 1 : alpha;\n  //parse hex values\n  var r = color >> 16 & 0xff,\n      g = color >> 8 & 0xff,\n      b = color & 0xff,\n      a = (alpha < 0) ? 0 : ((alpha > 1) ? 1 : alpha);\n  //only use 'rgba' if needed\n  if (a === 1) {\n    return \"rgb(\"+ r +\",\"+ g +\",\"+ b +\")\";\n  } else {\n    return \"rgba(\"+ r +\",\"+ g +\",\"+ b +\",\"+ a +\")\";\n  }\n};\n\n/**\n * Determine if a rectangle contains the coordinates (x,y) within it's boundaries.\n * @param {object}  rect  Object with properties: x, y, width, height.\n * @param {number}  x     Coordinate position x.\n * @param {number}  y     Coordinate position y.\n * @return {boolean}\n */\nwindow.utils.containsPoint = function (rect, x, y) {\n  return !(x < rect.x ||\n           x > rect.x + rect.width ||\n           y < rect.y ||\n           y > rect.y + rect.height);\n};\n\n/**\n * Determine if two rectangles overlap.\n * @param {object}  rectA Object with properties: x, y, width, height.\n * @param {object}  rectB Object with properties: x, y, width, height.\n * @return {boolean}\n */\nwindow.utils.intersects = function (rectA, rectB) {\n  return !(rectA.x + rectA.width < rectB.x ||\n           rectB.x + rectB.width < rectA.x ||\n           rectA.y + rectA.height < rectB.y ||\n           rectB.y + rectB.height < rectA.y);\n};\n\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/utils.js?");

/***/ }),

/***/ "./app/pages/Experiments/pages/common/common.js":
/*!******************************************************!*\
  !*** ./app/pages/Experiments/pages/common/common.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Animations_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Animations/utils */ \"./app/pages/Animations/utils.js\");\n/* harmony import */ var _Animations_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Animations_utils__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _grid_grid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./grid/grid */ \"./app/pages/Experiments/pages/common/grid/grid.js\");\n\n\n\n//# sourceURL=webpack://tonephp/./app/pages/Experiments/pages/common/common.js?");

/***/ }),

/***/ "./app/pages/Experiments/pages/common/grid/grid.js":
/*!*********************************************************!*\
  !*** ./app/pages/Experiments/pages/common/grid/grid.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Grid)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./app/pages/Experiments/pages/common/grid/utils.js\");\n\r\n\r\nclass Grid {\r\n\tconstructor() {\r\n\t\tthis.canvas = document.getElementById('grid');\r\n\t\tthis.canvas.style.background = '#363636';\r\n\t\tthis.context = this.canvas.getContext('2d');\r\n\t\tthis.mouse = utils.captureMouse(this.canvas);\r\n\t\tthis.points = {\r\n\t\t\ta: {\r\n\t\t\t\tx: this.canvas.width / 2,\r\n\t\t\t\ty: this.canvas.height / 2,\r\n\t\t\t\tradius: 10,\r\n\t\t\t},\r\n\t\t\tb: {\r\n\t\t\t\tx: this.canvas.width / 2 + 200,\r\n\t\t\t\ty: this.canvas.height / 2 - 100,\r\n\t\t\t\tradius: 10,\r\n\t\t\t},\r\n\t\t\tc: {\r\n\t\t\t\tx: this.canvas.width / 2 + 200,\r\n\t\t\t\ty: this.canvas.height / 2,\r\n\t\t\t\tradius: 10,\r\n\t\t\t}\r\n\t\t}\r\n\t\tthis.colorPickerForMajorLines = document.getElementById('grid-main-grid-color-picker');\r\n\t\tthis.colorPickerLabelForMajorLines = document.querySelector('#grid-main-grid-color-picker + label');\r\n\t\tthis.bigStepSize = 100;\r\n\t\t\r\n\t\tthis.updateColorPicker();\r\n\t\tthis.drawFrame();\r\n\r\n\t\tthis.tankImage = new Image();\r\n\t\tthis.tankImage.src = \"/img/Tank.png\";\r\n\t\tthis.tankImageReady = false;\r\n\t\tthis.tankImage.onload = () => {        \r\n\t\t\tthis.tankImageReady = true;\r\n\t\t};\r\n\r\n\t\tthis.helicopterImage = new Image();\r\n\t\tthis.helicopterImage.src = \"/img/Helicopter.png\";\r\n\t\tthis.helicopterImageReady = false;\r\n\t\tthis.helicopterImage.onload = () => {        \r\n\t\t\tthis.helicopterImageReady = true;\r\n\t\t};\r\n\t}\r\n\r\n\tupdateColorPicker() {\r\n\t\tlet newColor = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getColorFromElement)(this.colorPickerForMajorLines);\r\n\t\tif (newColor !== this.majorLinesColor) {\r\n\t\t\tthis.majorLinesColor = newColor;\r\n\t\t\tthis.colorPickerLabelForMajorLines.innerHTML = newColor;\r\n\t\t}\r\n\t}\r\n\r\n\tdrawTank() {\r\n\t\tif (this.tankImageReady) {\r\n\t\t\tthis.context.save();\r\n\t\t\tthis.context.translate(this.points.a.x,this.points.a.y);\r\n\t\t\tconst ac = this.points.c.x - this.points.a.x;\r\n\t\t\tconst bc = this.points.c.y - this.points.b.y;\r\n\t\t\tconst angle = Math.atan2(bc, ac);\r\n\t\t\tthis.context.rotate(-Math.PI - angle);\r\n\t\t\tthis.context.drawImage(this.tankImage, -100, -100, 200, 200);\r\n\t\t\t\r\n\t\t\tthis.context.restore();\r\n\t\t}\r\n\t}\r\n\r\n\tdrawHelicopter() {\r\n\t\tif (this.helicopterImageReady) {\r\n\t\t\tthis.context.drawImage(this.helicopterImage, this.points.b.x - 100, this.points.b.y - 100, 300, 150);\r\n\t\t}\r\n\t}\r\n\r\n\tdraw() {\r\n\t\tthis.clearRect();\r\n\t\tthis.updateColorPicker();\r\n\t\tthis.drawMajorLines(this.majorLinesColor);\r\n\t\tthis.drawRadius();\r\n\t\tthis.drawTank();\r\n\t\tthis.drawHelicopter();\r\n\t\tthis.drawTriangle();\r\n\t}\r\n\r\n\tdrawRadius() {\r\n\t\tthis.context.save();\r\n\t\tthis.context.strokeStyle = 'yellow';\r\n\t\tthis.context.beginPath();\r\n\t\tthis.context.moveTo(this.points.a.x, this.points.a.y);\r\n\t\tthis.context.lineTo(this.points.b.x, this.points.b.y);\r\n\t\tthis.context.stroke();\r\n\t\tthis.context.restore();\r\n\t}\r\n\r\n\tdrawMajorLines(color) {\r\n\t\t(0,_utils__WEBPACK_IMPORTED_MODULE_0__.drawVerticalLines)({\r\n\t\t\tctx: this.context,\r\n\t\t\tcanvasWidth: this.canvas.width,\r\n\t\t\tcanvasHeight: this.canvas.height,\r\n\t\t\txStep: this.bigStepSize,\r\n\t\t\tcolor,\r\n\t\t});\r\n\r\n\t\t(0,_utils__WEBPACK_IMPORTED_MODULE_0__.drawHorizontalLines)({\r\n\t\t\tctx: this.context,\r\n\t\t\tcanvasWidth: this.canvas.width,\r\n\t\t\tcanvasHeight: this.canvas.height,\r\n\t\t\tyStep: this.bigStepSize,\r\n\t\t\tcolor,\r\n\t\t});\r\n\t}\r\n\r\n\tdrawTriangle() {\r\n\t\tObject.keys(this.points).forEach(el => {\r\n\t\t\tconst point = this.points[el];\r\n\r\n\t\t\tthis.context.beginPath();\r\n\t\t\tthis.context.arc(point.x, point.y, point.radius, 0, 2 * Math.PI);\r\n\t\t\tthis.context.fill();\r\n\t\t\tthis.context.font = \"30px sans-serif\";\r\n\t\t\tthis.context.fillText(`${el} (${point.x}, ${point.y})`, point.x + point.radius, point.y - point.radius);\r\n\t\t});\r\n\r\n\t\tconst ac = this.points.c.x - this.points.a.x;\r\n\t\tconst bc = this.points.c.y - this.points.b.y;\r\n\t\tconst ab = Math.sqrt(ac * ac + bc * bc);\r\n\r\n\t\tthis.context.beginPath();\r\n\t\tthis.context.arc(this.points.a.x, this.points.a.y, ab, 0, 2 * Math.PI);\r\n\t\tthis.context.stroke();\r\n\t\t\r\n\r\n\t\tif (this.mouse.x && this.mouse.y) {\r\n\t\t\tthis.points.b.x = this.mouse.x;\r\n\t\t\tthis.points.b.y = this.mouse.y;\r\n\r\n\t\t\tthis.points.c.x = this.points.b.x;\r\n\t\t\tthis.points.c.y = this.points.a.y;\r\n\t\t}\r\n\t}\r\n\r\n\tdrawFrame() {\r\n\t\twindow.requestAnimationFrame(\r\n\t\t\tthis.drawFrame.bind(this, this.canvas)\r\n\t\t);\r\n\r\n\t\tthis.draw();\r\n\t}\r\n\r\n\tclearRect() {\r\n\t\tthis.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\r\n\t}\r\n}\r\n\r\nnew Grid;\n\n//# sourceURL=webpack://tonephp/./app/pages/Experiments/pages/common/grid/grid.js?");

/***/ }),

/***/ "./app/pages/Experiments/pages/common/grid/utils.js":
/*!**********************************************************!*\
  !*** ./app/pages/Experiments/pages/common/grid/utils.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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