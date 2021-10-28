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

/***/ "./app/pages/Animations/arrow.js":
/*!***************************************!*\
  !*** ./app/pages/Animations/arrow.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Arrow () {\n  this.x = 0;\n  this.y = 0;\n  this.color = \"#ffff00\";\n  this.rotation = 0;\n}\n\nArrow.prototype.draw = function (context) {\n  context.save();\n  context.translate(this.x, this.y);\n  context.rotate(this.rotation);\n  \n  context.lineWidth = 2;\n  context.fillStyle = this.color;\n  context.beginPath();\n  context.moveTo(-50, -25);\n  context.lineTo(0, -25);\n  context.lineTo(0, -50);\n  context.lineTo(50, 0);\n  context.lineTo(0, 50);\n  context.lineTo(0, 25);\n  context.lineTo(-50, 25);\n  context.lineTo(-50, -25);\n  context.closePath();\n  context.fill();\n  context.stroke();\n  \n  context.restore();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Arrow);\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/arrow.js?");

/***/ }),

/***/ "./app/pages/Animations/ball.js":
/*!**************************************!*\
  !*** ./app/pages/Animations/ball.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ball (radius, color) {\n  if (radius === undefined) { radius = 40; }\n  if (color === undefined) { color = \"#ff0000\"; }\n  this.x = 0;\n  this.y = 0;\n  this.radius = radius;\n  this.rotation = 0;\n  this.scaleX = 1;\n  this.scaleY = 1;\n  this.color = utils.parseColor(color);\n  this.lineWidth = 1;\n}\n\nBall.prototype.draw = function (context) {\n  context.save();\n  context.translate(this.x, this.y);\n  context.rotate(this.rotation);\n  context.scale(this.scaleX, this.scaleY);\n  \n  context.lineWidth = this.lineWidth;\n  context.fillStyle = this.color;\n  context.beginPath();\n  //x, y, radius, start_angle, end_angle, anti-clockwise\n  context.arc(0, 0, this.radius, 0, (Math.PI * 2), true);\n  context.closePath();\n  context.fill();\n  if (this.lineWidth > 0) {\n    context.stroke();\n  }\n  context.restore();\n};\n\nBall.prototype.getBounds = function () {\n  return {\n    x: this.x - this.radius,\n    y: this.y - this.radius,\n    width: this.radius * 2,\n    height: this.radius * 2\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ball);\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/ball.js?");

/***/ }),

/***/ "./app/pages/Animations/helpers.js":
/*!*****************************************!*\
  !*** ./app/pages/Animations/helpers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkFocusedById\": () => (/* binding */ checkFocusedById)\n/* harmony export */ });\nconst checkFocusedById = id => {\n  return document.activeElement.id == id;\n}\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/helpers.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/velocity/acceleration-2/acceleration-2.js":
/*!******************************************************************************!*\
  !*** ./app/pages/Animations/pages/velocity/acceleration-2/acceleration-2.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PixelMove)\n/* harmony export */ });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ball */ \"./app/pages/Animations/ball.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers */ \"./app/pages/Animations/helpers.js\");\n\n\n\nclass PixelMove {\n  constructor() {\n    this.id = 'acceleration-2';\n    this.canvas = document.getElementById(this.id);\n    this.context = this.canvas.getContext('2d');\n    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ball.x = this.canvas.width / 2;\n    this.ball.y = this.canvas.height / 2;\n    this.vx = 0;\n    this.ax = 0;\n          \n    this.addListeners();\n    this.drawFrame();\n  }\n\n  draw() {\n    this.clearRect();\n    \n    this.vx += this.ax;\n    this.ball.x += this.vx;\n    this.ball.draw(this.context);\n  }\n\n  addListeners() {\n    window.addEventListener('keydown', event => {\n      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.checkFocusedById)(this.id)) {\n        if (event.code == \"ArrowLeft\") {\n          this.ax = -0.1;\n        } else if (event.code == \"ArrowRight\") {\n          this.ax = 0.1;\n        }\n      }\n      \n    }, false);\n\n    window.addEventListener('keyup', () => {\n      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.checkFocusedById)(this.id)) {\n        this.ax = 0;\n      }\n    }, false);\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.draw();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew PixelMove;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/velocity/acceleration-2/acceleration-2.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/velocity/acceleration-3/acceleration-3.js":
/*!******************************************************************************!*\
  !*** ./app/pages/Animations/pages/velocity/acceleration-3/acceleration-3.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PixelMove)\n/* harmony export */ });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ball */ \"./app/pages/Animations/ball.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers */ \"./app/pages/Animations/helpers.js\");\n\n\n\nclass PixelMove {\n  constructor() {\n    this.id = 'acceleration-3';\n    this.canvas = document.getElementById(this.id);\n    this.context = this.canvas.getContext('2d');\n    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ball.x = this.canvas.width / 2;\n    this.ball.y = this.canvas.height / 2;\n    this.vx = 0;\n    this.vy = 0;\n    this.ax = 0;\n    this.ay = 0;\n          \n    this.addListeners();\n    this.drawFrame();\n  }\n\n  draw() {\n    this.clearRect();\n    \n    this.vx += this.ax;\n    this.vy += this.ay;\n    this.ball.x += this.vx;\n    this.ball.y += this.vy;\n    this.ball.draw(this.context);\n  }\n\n  addListeners() {\n    window.addEventListener('keydown', event => {\n\n      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.checkFocusedById)(this.id)) {\n\n        switch (event.code) {\n          case \"ArrowLeft\":    \n            this.ax = -0.1;\n            break;\n          case \"ArrowRight\":     \n            this.ax = 0.1;\n            break;\n          case \"ArrowUp\":  \n            event.preventDefault();\n            this.ay = -0.1;\n            break;\n          case \"ArrowDown\":\n            event.preventDefault();  \n            this.ay = 0.1;\n            break;\n          }\n      }\n      \n    }, false);\n\n    window.addEventListener('keyup', () => {\n      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.checkFocusedById)(this.id)) {\n        this.ax = 0;\n        this.ay = 0;\n      }\n    }, false);\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.draw();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew PixelMove;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/velocity/acceleration-3/acceleration-3.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/velocity/acceleration/acceleration.js":
/*!**************************************************************************!*\
  !*** ./app/pages/Animations/pages/velocity/acceleration/acceleration.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PixelMove)\n/* harmony export */ });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ball */ \"./app/pages/Animations/ball.js\");\n\n\nclass PixelMove {\n  constructor() {\n    this.canvas = document.getElementById('acceleration');\n    this.context = this.canvas.getContext('2d');\n    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ball.x = this.canvas.width / 5;\n    this.ball.y = this.canvas.height / 2;\n    this.vx = -4;\n    this.ax = 0.1;\n          \n    this.drawFrame();\n  }\n\n  draw() {\n    this.clearRect();\n    \n    this.vx += this.ax;\n    this.ball.x += this.vx;\n    this.ball.draw(this.context);\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.draw();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew PixelMove;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/velocity/acceleration/acceleration.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/velocity/follow-mouse-2/follow-mouse-2.js":
/*!******************************************************************************!*\
  !*** ./app/pages/Animations/pages/velocity/follow-mouse-2/follow-mouse-2.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PixelMove)\n/* harmony export */ });\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../arrow */ \"./app/pages/Animations/arrow.js\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ball */ \"./app/pages/Animations/ball.js\");\n\n\n\nclass PixelMove {\n  constructor() {\n    this.canvas = document.getElementById('follow-mouse-2');\n    this.context = this.canvas.getContext('2d');\n    this.mouse = utils.captureMouse(this.canvas);\n    this.arrow = new _arrow__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.vx = 0;\n    this.vy = 0;\n    this.force = 0.05;\n    \n    this.drawFrame();\n  }\n\n  draw() {\n    this.clearRect();\n          \n    const dx = this.mouse.x - this.arrow.x;\n    const dy = this.mouse.y - this.arrow.y;\n    const angle = Math.atan2(dy, dx);\n\n    const ax = Math.cos(angle) * this.force;\n    const ay = Math.sin(angle) * this.force;\n\n    this.vx += ax;\n    this.vy += ay;\n\n    this.arrow.rotation = angle;\n    this.arrow.x += this.vx;\n    this.arrow.y += this.vy;\n    this.arrow.draw(this.context);\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.draw();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew PixelMove;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/velocity/follow-mouse-2/follow-mouse-2.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/velocity/follow-mouse/follow-mouse.js":
/*!**************************************************************************!*\
  !*** ./app/pages/Animations/pages/velocity/follow-mouse/follow-mouse.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PixelMove)\n/* harmony export */ });\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../arrow */ \"./app/pages/Animations/arrow.js\");\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ball */ \"./app/pages/Animations/ball.js\");\n\n\n\nclass PixelMove {\n  constructor() {\n    this.canvas = document.getElementById('follow-mouse');\n    this.context = this.canvas.getContext('2d');\n    this.mouse = utils.captureMouse(this.canvas);\n    this.arrow = new _arrow__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n    this.speed = 1;\n    \n    this.drawFrame();\n  }\n\n  draw() {\n    this.clearRect();\n          \n    const dx = this.mouse.x - this.arrow.x;\n    const dy = this.mouse.y - this.arrow.y;\n    const angle = Math.atan2(dy, dx);\n    const vx = Math.cos(angle) * this.speed;\n    const vy = Math.sin(angle) * this.speed;\n\n    this.arrow.rotation = angle; //radians\n    this.arrow.x += vx;\n    this.arrow.y += vy;\n    this.arrow.draw(this.context);\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.draw();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew PixelMove;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/velocity/follow-mouse/follow-mouse.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/velocity/gravity/gravity.js":
/*!****************************************************************!*\
  !*** ./app/pages/Animations/pages/velocity/gravity/gravity.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gravity)\n/* harmony export */ });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ball */ \"./app/pages/Animations/ball.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers */ \"./app/pages/Animations/helpers.js\");\n\n\n\nclass Gravity {\n  constructor() {\n    this.id = 'gravity';\n    this.canvas = document.getElementById(this.id);\n    this.context = this.canvas.getContext('2d');\n    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.ball.x = this.canvas.width / 2;\n    this.ball.y = this.canvas.height / 2;\n    this.vx = 0;\n    this.vy = 0;\n    this.ax = 0;\n    this.ay = 0;\n    this.gravity = 0.02;\n          \n    this.addListeners();\n    this.drawFrame();\n  }\n\n  draw() {\n    this.clearRect();\n    \n    this.vx += this.ax;\n    this.vy += this.ay;\n    this.vy += this.gravity;\n    this.ball.x += this.vx;\n    this.ball.y += this.vy;\n    this.ball.draw(this.context);\n  }\n\n  addListeners() {\n    window.addEventListener('keydown', event => {\n\n      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.checkFocusedById)(this.id)) {\n\n        switch (event.code) {\n          case \"ArrowLeft\":    \n            this.ax = -0.1;\n            break;\n          case \"ArrowRight\":     \n            this.ax = 0.1;\n            break;\n          case \"ArrowUp\":  \n            event.preventDefault();\n            this.ay = -0.1;\n            break;\n          case \"ArrowDown\":\n            event.preventDefault();  \n            this.ay = 0.1;\n            break;\n          }\n      }\n      \n    }, false);\n\n    window.addEventListener('keyup', () => {\n      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.checkFocusedById)(this.id)) {\n        this.ax = 0;\n        this.ay = 0;\n      }\n    }, false);\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.draw();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew Gravity;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/velocity/gravity/gravity.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/velocity/rotational-velocity/rotational-velocity.js":
/*!****************************************************************************************!*\
  !*** ./app/pages/Animations/pages/velocity/rotational-velocity/rotational-velocity.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PixelMove)\n/* harmony export */ });\n/* harmony import */ var _arrow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../arrow */ \"./app/pages/Animations/arrow.js\");\n\n\nclass PixelMove {\n  constructor() {\n    this.canvas = document.getElementById('rotational-velocity');\n    this.context = this.canvas.getContext('2d');\n    this.arrow = new _arrow__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.arrow.x = this.canvas.width / 2;\n    this.arrow.y = this.canvas.height / 2;\n    this.vr = 1; // rotation velocity in degrees\n\n    this.drawFrame();\n  }\n\n  draw() {\n    this.clearRect();\n          \n    this.arrow.rotation += this.vr  * Math.PI / 180;\n    this.arrow.draw(this.context);\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.draw();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew PixelMove;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/velocity/rotational-velocity/rotational-velocity.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/velocity/ship/ship.js":
/*!**********************************************************!*\
  !*** ./app/pages/Animations/pages/velocity/ship/ship.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PixelMove)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ship */ \"./app/pages/Animations/ship.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers */ \"./app/pages/Animations/helpers.js\");\n\n\n\nclass PixelMove {\n  constructor() {\n    this.id = 'ship';\n    this.canvas = document.getElementById(this.id);\n    this.context = this.canvas.getContext('2d');\n    \n    this.ship = new _ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"](),\n    this.vr = 0;\n    this.vx = 0;\n    this.vy = 0;\n    this.thrust = 0;\n\n    this.ship.x = this.canvas.width / 2;\n    this.ship.y = this.canvas.height / 2;\n          \n    this.addListeners();\n    this.drawFrame();\n  }\n\n  draw() {\n    this.clearRect();\n    \n    this.ship.rotation += this.vr * Math.PI / 180;\n    const angle = this.ship.rotation;\n    const ax = Math.cos(angle) * this.thrust;\n    const ay = Math.sin(angle) * this.thrust;\n\n    this.vx += ax;\n    this.vy += ay;\n    this.ship.x += this.vx;\n    this.ship.y += this.vy;\n    this.ship.draw(this.context);\n  }\n\n  addListeners() {\n    window.addEventListener('keydown', event => {\n\n      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.checkFocusedById)(this.id)) {\n\n        switch (event.code) {\n          case \"ArrowLeft\":    \n            this.vr = -3;\n            break;\n          case \"ArrowRight\":     \n            this.vr = 3;\n            break;\n          case \"ArrowUp\":  \n            event.preventDefault();\n            this.thrust = 0.05;\n            this.ship.showFlame = true;\n            break;\n          }\n      }\n      \n    }, false);\n\n    window.addEventListener('keyup', () => {\n      if ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.checkFocusedById)(this.id)) {\n        this.vr = 0;\n        this.thrust = 0;\n        this.ship.showFlame = false;\n      }\n    }, false);\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.draw();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew PixelMove;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/velocity/ship/ship.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/velocity/velocity-2/velocity-2.js":
/*!**********************************************************************!*\
  !*** ./app/pages/Animations/pages/velocity/velocity-2/velocity-2.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PixelMove)\n/* harmony export */ });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ball */ \"./app/pages/Animations/ball.js\");\n\n\nclass PixelMove {\n  constructor() {\n    this.canvas = document.getElementById('velocity-2');\n    this.context = this.canvas.getContext('2d');\n    this.mouse = utils.captureMouse(this.canvas);\n    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.vx = 1;\n    this.vy = 1;\n\n    this.ball.x = 50;\n    this.ball.y = 100;\n    \n    this.drawFrame();\n  }\n\n  draw() {\n    this.clearRect();\n          \n    this.ball.x += this.vx;\n    this.ball.y += this.vy;\n    this.ball.draw(this.context);\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.draw();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew PixelMove;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/velocity/velocity-2/velocity-2.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/velocity/velocity-angle/velocity-angle.js":
/*!******************************************************************************!*\
  !*** ./app/pages/Animations/pages/velocity/velocity-angle/velocity-angle.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PixelMove)\n/* harmony export */ });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ball */ \"./app/pages/Animations/ball.js\");\n\n\nclass PixelMove {\n  constructor() {\n    this.canvas = document.getElementById('velocity-angle');\n    this.context = this.canvas.getContext('2d');\n    this.mouse = utils.captureMouse(this.canvas);\n    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.angle = 30;\n    this.speed = 3;\n\n    this.ball.x = 50;\n    this.ball.y = 100;\n    \n    this.drawFrame();\n  }\n\n  draw() {\n    this.clearRect();\n          \n    const radians = this.angle * Math.PI / 180;\n    const vx = Math.cos(radians) * this.speed;\n    const vy = Math.sin(radians) * this.speed;\n\n    this.ball.x += vx;\n    this.ball.y += vy;\n    this.ball.draw(this.context);\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.draw();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew PixelMove;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/velocity/velocity-angle/velocity-angle.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/velocity/velocity.js":
/*!*********************************************************!*\
  !*** ./app/pages/Animations/pages/velocity/velocity.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./app/pages/Animations/utils.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ship_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship/ship */ \"./app/pages/Animations/pages/velocity/ship/ship.js\");\n/* harmony import */ var _gravity_gravity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gravity/gravity */ \"./app/pages/Animations/pages/velocity/gravity/gravity.js\");\n/* harmony import */ var _acceleration_acceleration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./acceleration/acceleration */ \"./app/pages/Animations/pages/velocity/acceleration/acceleration.js\");\n/* harmony import */ var _acceleration_2_acceleration_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./acceleration-2/acceleration-2 */ \"./app/pages/Animations/pages/velocity/acceleration-2/acceleration-2.js\");\n/* harmony import */ var _acceleration_3_acceleration_3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./acceleration-3/acceleration-3 */ \"./app/pages/Animations/pages/velocity/acceleration-3/acceleration-3.js\");\n/* harmony import */ var _rotational_velocity_rotational_velocity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rotational-velocity/rotational-velocity */ \"./app/pages/Animations/pages/velocity/rotational-velocity/rotational-velocity.js\");\n/* harmony import */ var _velocity_velocity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./velocity/velocity */ \"./app/pages/Animations/pages/velocity/velocity/velocity.js\");\n/* harmony import */ var _velocity_2_velocity_2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./velocity-2/velocity-2 */ \"./app/pages/Animations/pages/velocity/velocity-2/velocity-2.js\");\n/* harmony import */ var _velocity_angle_velocity_angle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./velocity-angle/velocity-angle */ \"./app/pages/Animations/pages/velocity/velocity-angle/velocity-angle.js\");\n/* harmony import */ var _follow_mouse_follow_mouse__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./follow-mouse/follow-mouse */ \"./app/pages/Animations/pages/velocity/follow-mouse/follow-mouse.js\");\n/* harmony import */ var _follow_mouse_2_follow_mouse_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./follow-mouse-2/follow-mouse-2 */ \"./app/pages/Animations/pages/velocity/follow-mouse-2/follow-mouse-2.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/velocity/velocity.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/velocity/velocity/velocity.js":
/*!******************************************************************!*\
  !*** ./app/pages/Animations/pages/velocity/velocity/velocity.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PixelMove)\n/* harmony export */ });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ball */ \"./app/pages/Animations/ball.js\");\n\n\nclass PixelMove {\n  constructor() {\n    this.canvas = document.getElementById('velocity');\n    this.context = this.canvas.getContext('2d');\n    this.mouse = utils.captureMouse(this.canvas);\n    this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.vx = 1;\n\n    this.ball.x = 50;\n    this.ball.y = 100;\n    \n    this.drawFrame();\n  }\n\n  draw() {\n    this.clearRect();\n          \n    this.ball.x += this.vx;\n    this.ball.draw(this.context);\n  }\n\n  drawFrame() {\n    window.requestAnimationFrame(\n      this.drawFrame.bind(this, this.canvas)\n    );\n\n    this.draw();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew PixelMove;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/velocity/velocity/velocity.js?");

/***/ }),

/***/ "./app/pages/Animations/ship.js":
/*!**************************************!*\
  !*** ./app/pages/Animations/ship.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Ship () {\n  this.x = 0;\n  this.y = 0;\n  this.width = 25;\n  this.height = 20;\n  this.rotation = 0;\n  this.showFlame = false;\n}\n\nShip.prototype.draw = function (context) {\n  context.save();\n  context.translate(this.x, this.y);\n  context.rotate(this.rotation);\n  \n  context.lineWidth = 1;\n  context.strokeStyle = \"#ffffff\";\n  context.beginPath();\n  context.moveTo(10, 0);\n  context.lineTo(-10, 10);\n  context.lineTo(-5, 0);\n  context.lineTo(-10, -10);\n  context.lineTo(10, 0);\n  context.stroke();\n\n  if (this.showFlame) {\n    context.beginPath();\n    context.moveTo(-7.5, -5);\n    context.lineTo(-15, 0);\n    context.lineTo(-7.5, 5);\n    context.stroke();\n  }\n  context.restore();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/ship.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/pages/Animations/pages/velocity/velocity.js");
/******/ 	
/******/ })()
;