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

/***/ "./app/pages/Animations/pages/lines/DrawCurve.js":
/*!*******************************************************!*\
  !*** ./app/pages/Animations/pages/lines/DrawCurve.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DrawingCurves)\n/* harmony export */ });\nclass DrawingCurves {\n  constructor(id) {\n    this.canvas = document.getElementById(id);\n    this.context = this.canvas.getContext('2d');\n    this.mouse = utils.captureMouse(this.canvas);\n    this.x0 = 100;\n    this.y0 = 200;\n    this.x2 = 300;\n    this.y2 = 200;\n    this.cursorX;\n    this.cursorY;\n\n    this.initMouseMoveListener();\n  }\n\n  initMouseMoveListener() {\n    this.canvas.addEventListener('mousemove', () => {\n      this.clearRect();\n      this.setCursorPosition();\n      this.drawRedLines();\n      this.drawCurveLine();\n    }, false);\n  }\n\n  drawRedLines() {\n    this.context.beginPath();\n    this.context.strokeStyle = \"red\";\n    this.context.moveTo(this.x0, this.y0);\n    this.context.lineTo(this.cursorX, this.cursorY);\n  \n    this.context.moveTo(this.x2, this.y2);\n    this.context.lineTo(this.cursorX, this.cursorY);\n    this.context.stroke();\n  }\n\n  drawCurveLine() {\n    this.context.beginPath();\n    this.context.moveTo(this.x0, this.y0);\n    this.context.quadraticCurveTo(this.cursorX, this.cursorY, this.x2, this.y2);\n    this.context.strokeStyle = \"blue\";\n    this.context.stroke();\n  }\n\n  setCursorPosition() {\n    this.cursorX = this.mouse.x;\n    this.cursorY = this.mouse.y;\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/lines/DrawCurve.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/lines/circle-path-movement/circle-path-movement.js":
/*!***************************************************************************************!*\
  !*** ./app/pages/Animations/pages/lines/circle-path-movement/circle-path-movement.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CirclePathMovement)\n/* harmony export */ });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ball */ \"./app/pages/Animations/ball.js\");\n\n\nclass CirclePathMovement {\n    constructor() {\n      this.canvas = document.getElementById('circle-path-movement');\n      this.context = this.canvas.getContext('2d');\n      this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      this.ball.radius = 5;\n      this.angle = 0;\n      this.centerX = this.canvas.width / 2;\n      this.centerY = this.canvas.height / 2,\n      this.radius = 100,\n      this.speed = 0.05;\n\n      this.drawFrame();\n    }\n  \n    draw() {\n      this.clearRect();\n  \n      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n      this.ball.x = this.centerX + Math.sin(this.angle) * this.radius;\n      this.ball.y = this.centerY + Math.cos(this.angle) * this.radius;\n      this.angle -= this.speed;\n\n      if (this.angle < -1 * (Math.PI * 2)) {\n        this.angle = 0;\n      }\n\n      this.ball.draw(this.context);\n    }\n  \n    drawFrame() {\n      window.requestAnimationFrame(\n        this.drawFrame.bind(this, this.canvas)\n      );\n  \n      this.draw();\n    }\n  \n    clearRect() {\n      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n  }\n  \n  new CirclePathMovement;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/lines/circle-path-movement/circle-path-movement.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/lines/circle-points/circle-points.js":
/*!*************************************************************************!*\
  !*** ./app/pages/Animations/pages/lines/circle-points/circle-points.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CirclePathMovement)\n/* harmony export */ });\n/* harmony import */ var _ball__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../ball */ \"./app/pages/Animations/ball.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../slider */ \"./app/pages/Animations/slider.js\");\n\n\n\nclass CirclePathMovement {\n    constructor() {\n      this.canvas = document.getElementById('circle-points');\n      this.context = this.canvas.getContext('2d');\n      this.centerX = this.canvas.width / 2;\n      this.centerY = this.canvas.height / 2;\n      this.radius = 100;\n      this.ball = new _ball__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n      this.ball.radius = 10;\n      this.pointsCount = 12;\n      this.angle = 0;\n\n      this.slider = new _slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"](-0.005, 0.005, 0.001);\n      this.slider.x = 300;\n      this.slider.y = 20;\n      this.slider.captureMouse(this.canvas);\n\n      this.drawFrame();\n    }\n  \n    draw() {\n      this.clearRect();\n  \n      for (let i = 0; i < this.pointsCount; i++) {\n        \n        const angle = i / this.pointsCount * Math.PI * 2;\n\n        this.ball.x = this.centerX + this.radius * Math.cos(angle + this.angle);\n        this.ball.y = this.centerY + this.radius * Math.sin(angle + this.angle);\n\n        this.angle += this.slider.value;\n        if (this.angle < -1 * (Math.PI * 2)) {\n          this.angle = 0;\n        }\n\n        this.ball.draw(this.context);\n      }\n\n      this.slider.draw(this.context);\n    }\n  \n    drawFrame() {\n      window.requestAnimationFrame(\n        this.drawFrame.bind(this, this.canvas)\n      );\n  \n      this.draw();\n    }\n  \n    clearRect() {\n      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    }\n  }\n  \n  new CirclePathMovement;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/lines/circle-points/circle-points.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/lines/curve-through-point/curve-through-point.js":
/*!*************************************************************************************!*\
  !*** ./app/pages/Animations/pages/lines/curve-through-point/curve-through-point.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DrawCurve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DrawCurve */ \"./app/pages/Animations/pages/lines/DrawCurve.js\");\n\n\nclass CurveThroughPoint extends _DrawCurve__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  setCursorPosition() {\n    this.cursorX = this.mouse.x * 2 - (this.x0 + this.x2) / 2;\n    this.cursorY = this.mouse.y * 2 - (this.y0 + this.y2) / 2;\n  }\n}\n\nnew CurveThroughPoint('curve-through-point');\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/lines/curve-through-point/curve-through-point.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/lines/custom-bezier/custom-bezier.js":
/*!*************************************************************************!*\
  !*** ./app/pages/Animations/pages/lines/custom-bezier/custom-bezier.js ***!
  \*************************************************************************/
/***/ (() => {

eval("class MultiCurve {\n  constructor() {\n    this.canvas = document.getElementById('custom-bezier');\n    this.context = this.canvas.getContext('2d');\n    this.points = [];\n    this.numPoints = 3;\n\n    this.showVariant();\n    this.addClickListener();\n  }\n\n  addClickListener() {\n    this.canvas.addEventListener('click', () => {\n      this.showVariant();\n    }, false);\n  }\n\n  showVariant() {\n    this.clearRect();\n    this.resetPoints();\n    this.generatePoints();\n    \n    this.draw();\n    this.drawLines();\n    this.drawCustomBezier();\n  }\n\n  generatePoints() {\n    for (let i = 0; i < this.numPoints; i++) {\n      this.points.push({\n        x: Math.random() * this.canvas.width,\n        y: Math.random() * this.canvas.height\n      });\n    }\n  }\n\n  resetPoints() {\n    this.points = [];\n  }\n\n  getBezierCoord(p0, p1, p2, t) {\n    const p0index = (1 - t)**2;\n    const p1index = (2 * t) * (1 - t);\n    const p2index = t**2;\n    const coord = p0index * p0 + p1index * p1 + p2index * p2;\n  \n    return coord;\n  }\n\n  drawCustomBezier() {\n    this.context.beginPath();\n    \n    this.context.moveTo(this.points[0].x, this.points[0].y);\n\n    for (let i = 0.2; i < 1; i += 0.2) {\n      const x = this.getBezierCoord(this.points[0].x, this.points[1].x, this.points[2].x, i);\n      const y = this.getBezierCoord(this.points[0].y, this.points[1].y, this.points[2].y, i);\n      \n      this.context.lineTo(x, y);\n    }\n\n    this.context.lineTo(this.points[2].x, this.points[2].y);\n\n    this.context.strokeStyle = \"yellow\";\n    this.context.stroke();\n  }\n\n  draw() {\n    this.context.beginPath();\n    \n    this.context.moveTo(this.points[0].x, this.points[0].y);\n    \n    for (let i = 1; i < this.numPoints; i += 2) {\n\n      this.context.quadraticCurveTo(\n        this.points[i].x, \n        this.points[i].y,\n        this.points[i + 1].x,\n        this.points[i + 1].y\n      );\n\n    }\n\n    this.context.strokeStyle = \"blue\";\n    this.context.stroke();\n  }\n\n  drawLines() {\n    this.context.beginPath();\n    this.context.moveTo(this.points[0].x, this.points[0].y);\n    \n    for (let i = 1; i < this.numPoints; i += 2) {\n\n      this.context.lineTo(this.points[i].x, this.points[i].y);\n      this.context.lineTo(this.points[i + 1].x, this.points[i + 1].y);\n      \n\n    }\n\n    this.context.strokeStyle = \"red\";\n    this.context.stroke();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew MultiCurve;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/lines/custom-bezier/custom-bezier.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/lines/drawing-app/drawing-app.js":
/*!*********************************************************************!*\
  !*** ./app/pages/Animations/pages/lines/drawing-app/drawing-app.js ***!
  \*********************************************************************/
/***/ (() => {

eval("const canvas = document.getElementById('drawing-app');\nconst context = canvas.getContext('2d');\nconst mouse = utils.captureMouse(canvas);\n\nconst onMouseMove = () => {\n  context.lineTo(mouse.x, mouse.y);\n  context.strokeStyle = \"blue\";\n  context.stroke();\n}\n\ncanvas.addEventListener('mousedown', function () {\n  context.beginPath();\n  context.moveTo(mouse.x, mouse.y);\n  \n  canvas.addEventListener('mousemove', onMouseMove, false);\n}, false);\n\ncanvas.addEventListener('mouseup', function () {\n  canvas.removeEventListener('mousemove', onMouseMove, false);\n}, false);\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/lines/drawing-app/drawing-app.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/lines/drawing-curves/drawing-curves.js":
/*!***************************************************************************!*\
  !*** ./app/pages/Animations/pages/lines/drawing-curves/drawing-curves.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DrawCurve__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DrawCurve */ \"./app/pages/Animations/pages/lines/DrawCurve.js\");\n\n\nnew _DrawCurve__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('drawing-curves');\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/lines/drawing-curves/drawing-curves.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/lines/lines.js":
/*!***************************************************!*\
  !*** ./app/pages/Animations/pages/lines/lines.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ \"./app/pages/Animations/utils.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _circle_points_circle_points__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circle-points/circle-points */ \"./app/pages/Animations/pages/lines/circle-points/circle-points.js\");\n/* harmony import */ var _drawing_app_drawing_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drawing-app/drawing-app */ \"./app/pages/Animations/pages/lines/drawing-app/drawing-app.js\");\n/* harmony import */ var _drawing_app_drawing_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_drawing_app_drawing_app__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _drawing_curves_drawing_curves__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawing-curves/drawing-curves */ \"./app/pages/Animations/pages/lines/drawing-curves/drawing-curves.js\");\n/* harmony import */ var _curve_through_point_curve_through_point__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./curve-through-point/curve-through-point */ \"./app/pages/Animations/pages/lines/curve-through-point/curve-through-point.js\");\n/* harmony import */ var _multi_curve_multi_curve__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multi-curve/multi-curve */ \"./app/pages/Animations/pages/lines/multi-curve/multi-curve.js\");\n/* harmony import */ var _multi_curve_multi_curve__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_multi_curve_multi_curve__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _multi_curve_2_multi_curve_2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./multi-curve-2/multi-curve-2 */ \"./app/pages/Animations/pages/lines/multi-curve-2/multi-curve-2.js\");\n/* harmony import */ var _multi_curve_2_multi_curve_2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_multi_curve_2_multi_curve_2__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _multi_curve_3_multi_curve_3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multi-curve-3/multi-curve-3 */ \"./app/pages/Animations/pages/lines/multi-curve-3/multi-curve-3.js\");\n/* harmony import */ var _multi_curve_3_multi_curve_3__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_multi_curve_3_multi_curve_3__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _custom_bezier_custom_bezier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-bezier/custom-bezier */ \"./app/pages/Animations/pages/lines/custom-bezier/custom-bezier.js\");\n/* harmony import */ var _custom_bezier_custom_bezier__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_custom_bezier_custom_bezier__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _circle_path_movement_circle_path_movement__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./circle-path-movement/circle-path-movement */ \"./app/pages/Animations/pages/lines/circle-path-movement/circle-path-movement.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/lines/lines.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/lines/multi-curve-2/multi-curve-2.js":
/*!*************************************************************************!*\
  !*** ./app/pages/Animations/pages/lines/multi-curve-2/multi-curve-2.js ***!
  \*************************************************************************/
/***/ (() => {

eval("class MultiCurve {\n  constructor() {\n    this.canvas = document.getElementById('multi-curve-2');\n    this.context = this.canvas.getContext('2d');\n    this.points = [];\n    this.numPoints = 3;\n    this.ctrlPoint = {};\n\n    this.showVariant();\n    this.addClickListener();\n  }\n\n  addClickListener() {\n    this.canvas.addEventListener('click', () => {\n      this.showVariant();\n    }, false);\n  }\n\n  showVariant() {\n    this.clearRect();\n    this.resetPoints();\n    this.generatePoints();\n    this.draw();\n    this.drawLines();\n  }\n\n  generatePoints() {\n    for (let i = 0; i < this.numPoints; i++) {\n      this.points.push({\n        x: Math.random() * this.canvas.width,\n        y: Math.random() * this.canvas.height\n      });\n    }\n  }\n\n  resetPoints() {\n    this.points = [];\n  }\n\n  draw() {\n    this.context.beginPath();\n    this.context.moveTo(this.points[0].x, this.points[0].y);\n    \n    //curve through the rest, stopping at each midpoint\n    for (var i = 1; i < this.numPoints - 2; i++) {\n      this.ctrlPoint.x = (this.points[i].x + this.points[i+1].x) / 2;\n      this.ctrlPoint.y = (this.points[i].y + this.points[i+1].y) / 2;\n\n      this.context.quadraticCurveTo(\n        this.points[i].x, \n        this.points[i].y,\n        this.ctrlPoint.x, \n        this.ctrlPoint.y\n      );\n    }\n    //curve through the last two points\n    this.context.quadraticCurveTo(\n      this.points[i].x, \n      this.points[i].y,\n      this.points[i+1].x, \n      this.points[i+1].y\n    );\n\n    this.context.strokeStyle = \"blue\";\n    this.context.stroke();\n  }\n\n  drawLines() {\n    this.context.beginPath();\n    this.context.moveTo(this.points[0].x, this.points[0].y);\n    \n    for (let i = 1; i < this.numPoints; i += 2) {\n      this.context.lineTo(this.points[i].x, this.points[i].y);\n      this.context.lineTo(this.points[i + 1].x, this.points[i + 1].y);\n    }\n\n    this.context.strokeStyle = \"red\";\n    this.context.stroke();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew MultiCurve;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/lines/multi-curve-2/multi-curve-2.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/lines/multi-curve-3/multi-curve-3.js":
/*!*************************************************************************!*\
  !*** ./app/pages/Animations/pages/lines/multi-curve-3/multi-curve-3.js ***!
  \*************************************************************************/
/***/ (() => {

eval("class MultiCurve {\n  constructor() {\n    this.canvas = document.getElementById('multi-curve-3');\n    this.context = this.canvas.getContext('2d');\n    this.points = [];\n    this.numPoints = 5;\n    this.ctrlPoint = {};\n    this.ctrlPoint1 = {};\n\n    this.showVariant();\n    this.addClickListener();\n  }\n\n  addClickListener() {\n    this.canvas.addEventListener('click', () => {\n      this.showVariant();\n    }, false);\n  }\n\n  showVariant() {\n    this.clearRect();\n    this.resetPoints();\n    this.generatePoints();\n    this.draw();\n    this.drawLines();\n  }\n\n  generatePoints() {\n    for (let i = 0; i < this.numPoints; i++) {\n      this.points.push({\n        x: Math.random() * this.canvas.width,\n        y: Math.random() * this.canvas.height\n      });\n    }\n  }\n\n  resetPoints() {\n    this.points = [];\n  }\n\n  draw() {\n    this.context.beginPath();\n    this.context.moveTo(this.points[0].x, this.points[0].y);\n    \n    //find the first midpoint and move to it\n    this.ctrlPoint1.x = (this.points[0].x + this.points[this.numPoints-1].x) / 2;\n    this.ctrlPoint1.y = (this.points[0].y + this.points[this.numPoints-1].y) / 2;\n    this.context.beginPath();\n    this.context.moveTo(this.ctrlPoint1.x, this.ctrlPoint1.y);\n\n    //curve through the rest, stopping at each midpoint\n    for (var i = 0; i < this.numPoints - 1; i++) {\n      this.ctrlPoint.x = (this.points[i].x + this.points[i+1].x) / 2;\n      this.ctrlPoint.y = (this.points[i].y + this.points[i+1].y) / 2;\n      this.context.quadraticCurveTo(this.points[i].x, this.points[i].y,\n                               this.ctrlPoint.x, this.ctrlPoint.y);\n    }\n    //curve through the last point, back to the first midpoint\n    this.context.quadraticCurveTo(this.points[i].x, this.points[i].y,\n                             this.ctrlPoint1.x, this.ctrlPoint1.y);\n\n    this.context.strokeStyle = \"blue\";\n    this.context.stroke();\n  }\n\n  drawLines() {\n    this.context.beginPath();\n    this.context.moveTo(this.points[0].x, this.points[0].y);\n    \n    for (let i = 1; i < this.numPoints; i += 2) {\n      this.context.lineTo(this.points[i].x, this.points[i].y);\n      this.context.lineTo(this.points[i + 1].x, this.points[i + 1].y);\n    }\n\n    this.context.lineTo(this.points[0].x, this.points[0].y);\n\n    this.context.strokeStyle = \"red\";\n    this.context.stroke();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew MultiCurve;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/lines/multi-curve-3/multi-curve-3.js?");

/***/ }),

/***/ "./app/pages/Animations/pages/lines/multi-curve/multi-curve.js":
/*!*********************************************************************!*\
  !*** ./app/pages/Animations/pages/lines/multi-curve/multi-curve.js ***!
  \*********************************************************************/
/***/ (() => {

eval("class MultiCurve {\n  constructor() {\n    this.canvas = document.getElementById('multi-curve');\n    this.context = this.canvas.getContext('2d');\n    this.points = [];\n    this.numPoints = 3;\n\n    this.showVariant();\n    this.addClickListener();\n  }\n\n  addClickListener() {\n    this.canvas.addEventListener('click', () => {\n      this.showVariant();\n    }, false);\n  }\n\n  showVariant() {\n    this.clearRect();\n    this.resetPoints();\n    this.generatePoints();\n    this.draw();\n    this.drawLines();\n  }\n\n  generatePoints() {\n    for (let i = 0; i < this.numPoints; i++) {\n      this.points.push({\n        x: Math.random() * this.canvas.width,\n        y: Math.random() * this.canvas.height\n      });\n    }\n  }\n\n  resetPoints() {\n    this.points = [];\n  }\n\n  draw() {\n    this.context.beginPath();\n    this.context.moveTo(this.points[0].x, this.points[0].y);\n    \n    for (let i = 1; i < this.numPoints; i += 2) {\n\n      this.context.quadraticCurveTo(\n        this.points[i].x, \n        this.points[i].y,\n        this.points[i + 1].x,\n        this.points[i + 1].y\n      );\n\n    }\n\n    this.context.strokeStyle = \"blue\";\n    this.context.stroke();\n  }\n\n  drawLines() {\n    this.context.beginPath();\n    this.context.moveTo(this.points[0].x, this.points[0].y);\n    \n    for (let i = 1; i < this.numPoints; i += 2) {\n\n      this.context.lineTo(this.points[i].x, this.points[i].y);\n      this.context.lineTo(this.points[i + 1].x, this.points[i + 1].y);\n      \n\n    }\n\n    this.context.strokeStyle = \"red\";\n    this.context.stroke();\n  }\n\n  clearRect() {\n    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);\n  }\n}\n\nnew MultiCurve;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/lines/multi-curve/multi-curve.js?");

/***/ }),

/***/ "./app/pages/Animations/slider.js":
/*!****************************************!*\
  !*** ./app/pages/Animations/slider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Slider (min, max, value) {\n  this.min = (min === undefined) ? 0 : min;\n  this.max = (max === undefined) ? 100 : max;\n  this.value = (value === undefined) ? 100 : value;\n  this.onchange = null;\n\n  this.x = 0;\n  this.y = 0;\n  this.width = 16;\n  this.height = 100;\n\n  this.backColor = \"#cccccc\";\n  this.backBorderColor = \"#999999\";\n  this.backWidth = 4;\n  this.backX = this.width / 2 - this.backWidth / 2;\n  \n  this.handleColor = \"#eeeeee\";\n  this.handleBorderColor = \"#cccccc\";\n  this.handleHeight = 6;\n  this.handleY = 0;\n\n  this.updatePosition();\n}\n\nSlider.prototype.draw = function (context) {\n  context.save();\n  context.translate(this.x, this.y);\n\n  //draw back\n  context.fillStyle = this.backColor;\n  context.beginPath();\n  context.fillRect(this.backX, 0, this.backWidth, this.height);\n  context.closePath();\n  \n  //draw handle\n  context.strokeStyle = this.handleBorderColor;\n  context.fillStyle = this.handleColor;\n  context.beginPath();\n  context.rect(0, this.handleY, this.width, this.handleHeight);\n  context.closePath();\n  context.fill();\n  context.stroke();\n\n  context.restore();\n};\n\nSlider.prototype.updateValue = function () {\n  var old_value = this.value,\n      handleRange = this.height - this.handleHeight,\n      valueRange = this.max - this.min;\n  \n  this.value = (handleRange - this.handleY) / handleRange * valueRange + this.min;\n  if (typeof this.onchange === 'function' && this.value !== old_value) {\n    this.onchange();\n  }\n};\n\nSlider.prototype.updatePosition = function () {\n  var handleRange = this.height - this.handleHeight,\n      valueRange = this.max - this.min;\n  \n  this.handleY = handleRange - ((this.value - this.min) / valueRange) * handleRange;\n};\n\nSlider.prototype.captureMouse = function (element) {\n  var self = this,\n      mouse = utils.captureMouse(element),\n      bounds = {};\n\n  setHandleBounds();\n  \n  element.addEventListener('mousedown', function () {\n    if (utils.containsPoint(bounds, mouse.x, mouse.y)) {\n      element.addEventListener('mouseup', onMouseUp, false);\n      element.addEventListener('mousemove', onMouseMove, false);\n    }\n  }, false);\n\n  function onMouseUp () {\n    element.removeEventListener('mousemove', onMouseMove, false);\n    element.removeEventListener('mouseup', onMouseUp, false);\n    setHandleBounds();\n  }\n  \n  function onMouseMove () {\n    var pos_y = mouse.y - self.y;\n    self.handleY = Math.min(self.height - self.handleHeight, Math.max(pos_y, 0));\n    self.updateValue();\n  }\n\n  function setHandleBounds () {\n    bounds.x = self.x;\n    bounds.y = self.y + self.handleY;\n    bounds.width = self.width;\n    bounds.height = self.handleHeight;\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/slider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./app/pages/Animations/pages/lines/lines.js");
/******/ 	
/******/ })()
;