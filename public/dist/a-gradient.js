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

/***/ "./app/pages/Animations/pages/gradient/gradient.js":
/*!*********************************************************!*\
  !*** ./app/pages/Animations/pages/gradient/gradient.js ***!
  \*********************************************************/
/***/ (() => {

eval("class MultiCurve {\n  constructor() {\n    this.canvas = document.getElementById('gradients');\n    this.context = this.canvas.getContext('2d');\n    this.pt1 = {x: 0, y: 0};             //gradient start point\n    this.pt2 = {x: 100, y: 100};         //gradient end point\n    this.gradient = this.context.createLinearGradient(this.pt1.x, this.pt1.y, this.pt2.x, this.pt2.y);\n  \n    this.draw();\n    this.drawSecondGradient();\n    this.drawRadialGradient();\n  }\n\n  draw() {\n    this.gradient.addColorStop(0, \"#ffffff\");\n    this.gradient.addColorStop(1, \"#ff0000\");\n\n    this.context.fillStyle = this.gradient;\n    this.context.fillRect(this.pt1.x, this.pt1.y, 200, 100);\n  }\n\n  drawSecondGradient() {\n    const pt1 = {x: 100, y: 100};           //gradient start point\n    const pt2 = {x: 200, y: 200};           //gradient end point\n    const gradient = this.context.createLinearGradient(pt1.x, pt1.y, pt2.x, pt2.y);\n\n    //white to blue to red\n    gradient.addColorStop(0, \"#ffffff\");\n    gradient.addColorStop(0.5, \"#0000ff\");\n    gradient.addColorStop(1, \"#ff0000\");\n\n    this.context.fillStyle = gradient;\n    this.context.fillRect(100, 100, 100, 100);\n  }\n\n  drawRadialGradient() {\n    const c1 = {x: 250, y: 150, radius: 0};  //gradient start circle\n    const c2 = {x: 250, y: 150, radius: 50}; //gradient end circle\n    const gradient = this.context.createRadialGradient(\n      c1.x, c1.y, c1.radius,\n      c2.x, c2.y, c2.radius\n    );\n    //all black alpha blend\n    gradient.addColorStop(0, \"#ffffff\");\n    gradient.addColorStop(1, \"rgba(256, 0, 0, 0)\"); //alpha required\n\n    this.context.fillStyle = gradient;\n    this.context.fillRect(200, 100, 100, 100);\n  }\n}\n\nnew MultiCurve;\n\n//# sourceURL=webpack://tonephp/./app/pages/Animations/pages/gradient/gradient.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./app/pages/Animations/pages/gradient/gradient.js"]();
/******/ 	
/******/ })()
;