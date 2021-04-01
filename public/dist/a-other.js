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

/***/ "./app/pages/Animations/ball.js":
/*!**************************************!*\
  !*** ./app/pages/Animations/ball.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ball (radius, color) {\n  if (radius === undefined) { radius = 40; }\n  if (color === undefined) { color = \"#ff0000\"; }\n  this.x = 0;\n  this.y = 0;\n  this.radius = radius;\n  this.rotation = 0;\n  this.scaleX = 1;\n  this.scaleY = 1;\n  this.color = utils.parseColor(color);\n  this.lineWidth = 1;\n}\n\nBall.prototype.draw = function (context) {\n  context.save();\n  context.translate(this.x, this.y);\n  context.rotate(this.rotation);\n  context.scale(this.scaleX, this.scaleY);\n  \n  context.lineWidth = this.lineWidth;\n  context.fillStyle = this.color;\n  context.beginPath();\n  //x, y, radius, start_angle, end_angle, anti-clockwise\n  context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);\n  context.closePath();\n  context.fill();\n  if (this.lineWidth > 0) {\n    context.stroke();\n  }\n  context.restore();\n};\n\nBall.prototype.getBounds = function () {\n  return {\n    x: this.x - this.radius,\n    y: this.y - this.radius,\n    width: this.radius * 2,\n    height: this.radius * 2\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/ball.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/other/capture-touch/capture-touch.js":
/*!*************************************************************************!*\
  !*** ./app/pages/Animations/pages/other/capture-touch/capture-touch.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CaptureTouch)\n/* harmony export */ });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ball */ \"./app/pages/Animations/ball.js\");\n\n\nclass CaptureTouch {\n  constructor() {\n    this.canvas = document.getElementById('capture-touch');\n    this.context = this.canvas.getContext('2d');\n    this.touch = utils.captureTouch(this.canvas);\n    this.log = document.getElementById('capture-touch-log');\n\n    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__.default();\n    this.ball.x = this.canvas.width / 2;\n    this.ball.y = this.canvas.height / 2;\n    this.ball.draw(this.context);\n    this.markerOn = false;\n    \n    this.initListeners();\n  }\n\n  onMouseMove() {\n    this.context.lineTo(this.touch.x, this.touch.y);\n    this.context.strokeStyle = \"yellow\";\n    this.context.stroke();\n  }\n\n  initListeners() {\n    this.canvas.addEventListener('touchstart', (event) => {\n      event.preventDefault();\n\n      if (utils.containsPoint(this.ball.getBounds(), this.touch.x, this.touch.y)) {\n        this.log.value = \"in ball: touchstart\";\n      } else {\n        this.log.value = \"canvas: touchstart\";\n      }\n\n      this.markerOn = true;\n      this.context.beginPath();\n\n    }, false);\n\n    this.canvas.addEventListener('touchend', (event) => {\n      event.preventDefault();\n      this.log.value = \"canvas: touchend\";\n\n      this.markerOn = false;\n    }, false);\n\n    this.canvas.addEventListener('touchmove', (event) => {\n      event.preventDefault();\n\n      if (utils.containsPoint(this.ball.getBounds(), this.touch.x, this.touch.y)) {\n        this.log.value = \"in ball: touchmove\";\n      } else {\n        this.log.value = \"canvas: touchmove\";\n      }\n\n      if (this.markerOn) {\n        this.onMouseMove();\n      }\n    }, false);\n  }\n}\n\nnew CaptureTouch;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/other/capture-touch/capture-touch.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/other/motorcycle/motorcycle.js":
/*!*******************************************************************!*\
  !*** ./app/pages/Animations/pages/other/motorcycle/motorcycle.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Motorcycle)\n/* harmony export */ });\nclass Motorcycle {\n  constructor() {\n    this.canvas = document.getElementById('motorcycle');\n    this.context = this.canvas.getContext('2d');\n\n    this.perm = [];\n    this.vx = 0;\n    this.ax = 3;\n\n    this.generatePerm();\n\n    this.drawFrame();\n  }\n\n  lerp(a, b, t) {\n    return a + (b - a) * (1 - Math.cos(t * Math.PI)) / 2;\n  }\n\n  noise(x) {\n    let normalizedX = x * 0.01 % 255;\n    return this.lerp(this.perm[Math.floor(normalizedX)], this.perm[Math.ceil(normalizedX)], normalizedX - Math.floor(normalizedX));\n  }\n\n  generatePerm() {\n    while (this.perm.length < 255) {\n      let val;\n      while (this.perm.includes(val = Math.floor(Math.random() * 255)));\n      this.perm.push(val);\n    }\n  }\n\n  draw() {\n    this.clearRect();\n    \n    this.vx += this.ax;\n    this.context.fillStyle = \"#19f\";\n    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);\n\n    this.context.fillStyle = \"black\";\n    this.context.beginPath();\n    this.context.moveTo(0, this.canvas.height);\n    for (let i = 0; i < this.canvas.width; i++) {\n      this.context.lineTo(i, this.canvas.height - 20 - this.noise(this.vx + i) * 0.25);\n    }\n    this.context.lineTo(this.canvas.width, this.canvas.height);\n    this.context.fill();\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.draw();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew Motorcycle;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/other/motorcycle/motorcycle.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/other/other.js":
/*!***************************************************!*\
  !*** ./app/pages/Animations/pages/other/other.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./app/pages/Animations/utils.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _capture_touch_capture_touch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./capture-touch/capture-touch */ \"./app/pages/Animations/pages/other/capture-touch/capture-touch.js\");\n/* harmony import */ var _perspective_perspective__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./perspective/perspective */ \"./app/pages/Animations/pages/other/perspective/perspective.js\");\n/* harmony import */ var _pixel_move_pixel_move__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pixel-move/pixel-move */ \"./app/pages/Animations/pages/other/pixel-move/pixel-move.js\");\n/* harmony import */ var _motorcycle_motorcycle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./motorcycle/motorcycle */ \"./app/pages/Animations/pages/other/motorcycle/motorcycle.js\");\n\n\n\n\n\n\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/other/other.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/other/perspective/perspective.js":
/*!*********************************************************************!*\
  !*** ./app/pages/Animations/pages/other/perspective/perspective.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Perspective)\n/* harmony export */ });\nclass Perspective {\n  constructor() {\n    this.canvas = document.getElementById('perspective');\n    this.context = this.canvas.getContext('2d');\n    this.w = this.canvas.width;\n    this.h = this.canvas.height;\n    this.fov = 250; //pixels are 250px away from us\n    this.pixels = [];\n\n    this.generatePoints();\n    this.drawFrame();\n  }\n\n  generatePoints() {\n      for(var x = -250; x < 250; x+=5)\n        for(var z = -250; z < 250; z+=5)\n          this.pixels.push({x: x, y: 30, z: z});\n  }\n\n  draw() {\n    this.clearRect();\n\n    var imagedata = this.context.getImageData(0,0,this.w,this.h);\n    \n    var i = this.pixels.length;\n    while(i--) {\n      var pixel = this.pixels[i];\n      \n      var scale = this.fov/(this.fov+pixel.z);\n      var x2d = pixel.x * scale + this.w/2;\n      var y2d = pixel.y * scale + this.h/2;\n      \n      if(x2d >= 0 && x2d <= this.w && y2d >= 0 && y2d <= this.h) {\n        var c = (Math.round(y2d) * imagedata.width + Math.round(x2d))*4;\n\n        imagedata.data[c] = 0;\n        imagedata.data[c+1] = 255;\n        imagedata.data[c+2] = 60;\n        imagedata.data[c+3] = 255;\n      }\n\n      pixel.z -= 1;\n\n      if(pixel.z < -this.fov) pixel.z += 2*this.fov;\n    }\n\n    this.context.putImageData(imagedata, 0, 0);\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.draw();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew Perspective;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/other/perspective/perspective.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/other/pixel-move/pixel-move.js":
/*!*******************************************************************!*\
  !*** ./app/pages/Animations/pages/other/pixel-move/pixel-move.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PixelMove)\n/* harmony export */ });\nclass PixelMove {\n  constructor() {\n    this.canvas = document.getElementById('pixel-move');\n    this.context = this.canvas.getContext('2d');\n    this.mouse = utils.captureMouse(this.canvas);\n    \n    this.drawFrame();\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    for (var i = 0; i < this.canvas.width; i += 10) {\n      for (var j = 0; j < this.canvas.height; j += 10) {\n        this.context.fillStyle = (i % 20 === 0) ? \"#fee\" : ((i % 30 === 0) ? \"#eee\" : \"#bee\");\n        this.context.fillRect(i, j, 10, 10);\n      }\n    }\n\n    const imagedata = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);\n    const pixels = imagedata.data;\n\n    for (var y = 0; y < imagedata.height; y += 1) {\n      for (var x = 0; x < imagedata.width; x += 1) {\n\n        const dx = x - this.mouse.x;\n        const dy = y - this.mouse.y;\n        const dist = Math.sqrt(dx * dx + dy * dy);\n        const offset = (x + y * imagedata.width) * 4;\n        const r = pixels[offset];\n        const g = pixels[offset + 1];\n        const b = pixels[offset + 2];\n\n        pixels[offset]     = Math.sin(r * dist * 0.0005) * 256;\n        pixels[offset + 1] = Math.sin(g * dist * 0.0005) * 256;\n        pixels[offset + 2] = Math.sin(b * dist * 0.0005) * 256;\n      }\n    }\n\n    this.context.putImageData(imagedata, 0, 0);\n  }\n}\n\nnew PixelMove;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/other/pixel-move/pixel-move.js?");

/***/ }),

/***/ "./app/pages/Animations/utils.js":
/*!***************************************!*\
  !*** ./app/pages/Animations/utils.js ***!
  \***************************************/
/***/ (() => {

eval("\n\n/**\n * Normalize the browser animation API across implementations. This requests\n * the browser to schedule a repaint of the window for the next animation frame.\n * Checks for cross-browser support, and, failing to find it, falls back to setTimeout.\n * @param {function}    callback  Function to call when it's time to update your animation for the next repaint.\n * @param {HTMLElement} element   Optional parameter specifying the element that visually bounds the entire animation.\n * @return {number} Animation frame request.\n */\n if (!window.requestAnimationFrame) {\n  window.requestAnimationFrame = (window.webkitRequestAnimationFrame ||\n                                  window.mozRequestAnimationFrame ||\n                                  window.msRequestAnimationFrame ||\n                                  window.oRequestAnimationFrame ||\n                                  function (callback) {\n                                    return window.setTimeout(callback, 17 /*~ 1000/60*/);\n                                  });\n}\n\n/**\n * ERRATA: 'cancelRequestAnimationFrame' renamed to 'cancelAnimationFrame' to reflect an update to the W3C Animation-Timing Spec.\n *\n * Cancels an animation frame request.\n * Checks for cross-browser support, falls back to clearTimeout.\n * @param {number}  Animation frame request.\n */\nif (!window.cancelAnimationFrame) {\n  window.cancelAnimationFrame = (window.cancelRequestAnimationFrame ||\n                                 window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||\n                                 window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||\n                                 window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||\n                                 window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||\n                                 window.clearTimeout);\n}\n\n/* Object that contains our utility functions.\n * Attached to the window object which acts as the global namespace.\n */\nwindow.utils = {};\n\n/**\n * Keeps track of the current mouse position, relative to an element.\n * @param {HTMLElement} element\n * @return {object} Contains properties: x, y, event\n */\nwindow.utils.captureMouse = function (element) {\n  var mouse = {x: 0, y: 0, event: null},\n      body_scrollLeft = document.body.scrollLeft,\n      element_scrollLeft = document.documentElement.scrollLeft,\n      body_scrollTop = document.body.scrollTop,\n      element_scrollTop = document.documentElement.scrollTop,\n      offsetLeft = element.offsetLeft,\n      offsetTop = element.offsetTop;\n  \n  element.addEventListener('mousemove', function (event) {\n    var x, y;\n    \n    if (event.pageX || event.pageY) {\n      x = event.pageX;\n      y = event.pageY;\n    } else {\n      x = event.clientX + body_scrollLeft + element_scrollLeft;\n      y = event.clientY + body_scrollTop + element_scrollTop;\n    }\n    x -= offsetLeft;\n    y -= offsetTop;\n    \n    mouse.x = x;\n    mouse.y = y;\n    mouse.event = event;\n  }, false);\n  \n  return mouse;\n};\n\n/**\n * Keeps track of the current (first) touch position, relative to an element.\n * @param {HTMLElement} element\n * @return {object} Contains properties: x, y, isPressed, event\n */\nwindow.utils.captureTouch = function (element) {\n  var touch = {x: null, y: null, isPressed: false, event: null},\n      body_scrollLeft = document.body.scrollLeft,\n      element_scrollLeft = document.documentElement.scrollLeft,\n      body_scrollTop = document.body.scrollTop,\n      element_scrollTop = document.documentElement.scrollTop,\n      offsetLeft = element.offsetLeft,\n      offsetTop = element.offsetTop;\n\n  element.addEventListener('touchstart', function (event) {\n    touch.isPressed = true;\n    touch.event = event;\n  }, false);\n\n  element.addEventListener('touchend', function (event) {\n    touch.isPressed = false;\n    touch.x = null;\n    touch.y = null;\n    touch.event = event;\n  }, false);\n  \n  element.addEventListener('touchmove', function (event) {\n    var x, y,\n        touch_event = event.touches[0]; //first touch\n    \n    if (touch_event.pageX || touch_event.pageY) {\n      x = touch_event.pageX;\n      y = touch_event.pageY;\n    } else {\n      x = touch_event.clientX + body_scrollLeft + element_scrollLeft;\n      y = touch_event.clientY + body_scrollTop + element_scrollTop;\n    }\n    x -= offsetLeft;\n    y -= offsetTop;\n    \n    touch.x = x;\n    touch.y = y;\n    touch.event = event;\n  }, false);\n  \n  return touch;\n};\n\n/**\n * Returns a color in the format: '#RRGGBB', or as a hex number if specified.\n * @param {number|string} color\n * @param {boolean=}      toNumber=false  Return color as a hex number.\n * @return {string|number}\n */\nwindow.utils.parseColor = function (color, toNumber) {\n  if (toNumber === true) {\n    if (typeof color === 'number') {\n      return (color | 0); //chop off decimal\n    }\n    if (typeof color === 'string' && color[0] === '#') {\n      color = color.slice(1);\n    }\n    return window.parseInt(color, 16);\n  } else {\n    if (typeof color === 'number') {\n      color = '#' + ('00000' + (color | 0).toString(16)).substr(-6); //pad\n    }\n    return color;\n  }\n};\n\n/**\n * Converts a color to the RGB string format: 'rgb(r,g,b)' or 'rgba(r,g,b,a)'\n * @param {number|string} color\n * @param {number}        alpha\n * @return {string}\n */\nwindow.utils.colorToRGB = function (color, alpha) {\n  //number in octal format or string prefixed with #\n  if (typeof color === 'string' && color[0] === '#') {\n    color = window.parseInt(color.slice(1), 16);\n  }\n  alpha = (alpha === undefined) ? 1 : alpha;\n  //parse hex values\n  var r = color >> 16 & 0xff,\n      g = color >> 8 & 0xff,\n      b = color & 0xff,\n      a = (alpha < 0) ? 0 : ((alpha > 1) ? 1 : alpha);\n  //only use 'rgba' if needed\n  if (a === 1) {\n    return \"rgb(\"+ r +\",\"+ g +\",\"+ b +\")\";\n  } else {\n    return \"rgba(\"+ r +\",\"+ g +\",\"+ b +\",\"+ a +\")\";\n  }\n};\n\n/**\n * Determine if a rectangle contains the coordinates (x,y) within it's boundaries.\n * @param {object}  rect  Object with properties: x, y, width, height.\n * @param {number}  x     Coordinate position x.\n * @param {number}  y     Coordinate position y.\n * @return {boolean}\n */\nwindow.utils.containsPoint = function (rect, x, y) {\n  return !(x < rect.x ||\n           x > rect.x + rect.width ||\n           y < rect.y ||\n           y > rect.y + rect.height);\n};\n\n/**\n * Determine if two rectangles overlap.\n * @param {object}  rectA Object with properties: x, y, width, height.\n * @param {object}  rectB Object with properties: x, y, width, height.\n * @return {boolean}\n */\nwindow.utils.intersects = function (rectA, rectB) {\n  return !(rectA.x + rectA.width < rectB.x ||\n           rectB.x + rectB.width < rectA.x ||\n           rectA.y + rectA.height < rectB.y ||\n           rectB.y + rectB.height < rectA.y);\n};\n\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/pages/Animations/pages/other/other.js");
/******/ 	
/******/ })()
;