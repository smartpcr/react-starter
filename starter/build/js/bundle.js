/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

console.log("logging from utils.js...");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _login = __webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

(0, _login.login)("admin", "password");

document.write("Welcome to first module!");

console.log("App Loaded");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var login = function login(username, password) {
    if (username !== "admin" || password != "password") {
        console.log("invalid login");
    } else {
        console.log("user " + username + " logged in");
    }
};

exports.login = login;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleParseError: Module parse failed: Unexpected token (8:5)\nYou may need an appropriate loader to handle this file type.\n| \r\n| /*! normalize.css v3.0.2 | MIT License | git.io/normalize */\r\n| html {\r\n|     font-family: sans-serif;\r\n|     -webkit-text-size-adjust: 100%;\r\n    at doBuild (E:\\work\\github\\react-typescript-starter\\babel\\node_modules\\webpack\\lib\\NormalModule.js:303:19)\n    at runLoaders (E:\\work\\github\\react-typescript-starter\\babel\\node_modules\\webpack\\lib\\NormalModule.js:209:11)\n    at E:\\work\\github\\react-typescript-starter\\babel\\node_modules\\loader-runner\\lib\\LoaderRunner.js:370:3\n    at iterateNormalLoaders (E:\\work\\github\\react-typescript-starter\\babel\\node_modules\\loader-runner\\lib\\LoaderRunner.js:211:10)\n    at E:\\work\\github\\react-typescript-starter\\babel\\node_modules\\loader-runner\\lib\\LoaderRunner.js:202:4\n    at E:\\work\\github\\react-typescript-starter\\babel\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:70:14\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleParseError: Module parse failed: Unexpected token (1:5)\nYou may need an appropriate loader to handle this file type.\n| body {\r\n|     padding-top: 80px;\r\n| }\r\n    at doBuild (E:\\work\\github\\react-typescript-starter\\babel\\node_modules\\webpack\\lib\\NormalModule.js:303:19)\n    at runLoaders (E:\\work\\github\\react-typescript-starter\\babel\\node_modules\\webpack\\lib\\NormalModule.js:209:11)\n    at E:\\work\\github\\react-typescript-starter\\babel\\node_modules\\loader-runner\\lib\\LoaderRunner.js:370:3\n    at iterateNormalLoaders (E:\\work\\github\\react-typescript-starter\\babel\\node_modules\\loader-runner\\lib\\LoaderRunner.js:211:10)\n    at E:\\work\\github\\react-typescript-starter\\babel\\node_modules\\loader-runner\\lib\\LoaderRunner.js:202:4\n    at E:\\work\\github\\react-typescript-starter\\babel\\node_modules\\enhanced-resolve\\lib\\CachedInputFileSystem.js:70:14\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\n    at process._tickCallback (internal/process/next_tick.js:180:9)");

/***/ })
/******/ ]);