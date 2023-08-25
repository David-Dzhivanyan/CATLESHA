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

/***/ "./src/bundles/common/footer.bemjson.js":
/*!**********************************************!*\
  !*** ./src/bundles/common/footer.bemjson.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nmodule.exports = [{\n  block: 'footer',\n  content: []\n}, __webpack_require__(/*! ./modals.bemjson */ \"./src/bundles/common/modals.bemjson.js\")];\n\n//# sourceURL=webpack://project-stub/./src/bundles/common/footer.bemjson.js?");

/***/ }),

/***/ "./src/bundles/common/header.bemjson.js":
/*!**********************************************!*\
  !*** ./src/bundles/common/header.bemjson.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = [{\n  block: 'header',\n  content: []\n}];\n\n//# sourceURL=webpack://project-stub/./src/bundles/common/header.bemjson.js?");

/***/ }),

/***/ "./src/bundles/common/modals.bemjson.js":
/*!**********************************************!*\
  !*** ./src/bundles/common/modals.bemjson.js ***!
  \**********************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = [];\n\n//# sourceURL=webpack://project-stub/./src/bundles/common/modals.bemjson.js?");

/***/ }),

/***/ "./src/bundles/index.bemjson.js":
/*!**************************************!*\
  !*** ./src/bundles/index.bemjson.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nmodule.exports = {\n  block: 'page',\n  title: 'Пустая',\n  content: [__webpack_require__(/*! ./common/header.bemjson */ \"./src/bundles/common/header.bemjson.js\"), {\n    cls: 'container',\n    content: [{\n      block: 'img',\n      mods: {\n        lazy: true\n      },\n      src: 'http://place-hold.it/1200x200'\n    }]\n  }, __webpack_require__(/*! ./common/footer.bemjson */ \"./src/bundles/common/footer.bemjson.js\")]\n};\n\n//# sourceURL=webpack://project-stub/./src/bundles/index.bemjson.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/bundles/common/footer.bemjson.js");
/******/ 	__webpack_require__("./src/bundles/common/header.bemjson.js");
/******/ 	__webpack_require__("./src/bundles/common/modals.bemjson.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/bundles/index.bemjson.js");
/******/ 	
/******/ })()
;