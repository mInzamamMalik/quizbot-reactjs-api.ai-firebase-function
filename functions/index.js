(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("firebase-functions");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const function_category1_1 = __webpack_require__(3);
exports.addMessage = function_category1_1.addMessage;
exports.makeUppercase = function_category1_1.makeUppercase;
exports.function3 = function_category1_1.function3;
exports.function4 = function_category1_1.function4;
const function_category2_1 = __webpack_require__(5);
exports.function5 = function_category2_1.function5;
exports.function6 = function_category2_1.function6;
exports.function7 = function_category2_1.function7;
exports.function8 = function_category2_1.function8;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
const admin = __webpack_require__(4);
const _cors = __webpack_require__(2);
var cors = _cors({ origin: true }); // set these options appropriately According to your case,
// see document: https://www.npmjs.com/package/cors#configuration-options
// true means allow everything
// http example
exports.addMessage = functions.https.onRequest((req, res) => {
    const original = req.query.text;
    admin.database().ref('/messages').push({ original: original }).then(snapshot => {
        res.redirect(303, snapshot.ref);
    });
});
//databse trigger example
exports.makeUppercase = functions.database.ref('/messages/{pushId}/original')
    .onWrite(event => {
    const original = event.data.val();
    console.log('Uppercasing', event.params.pushId, original);
    const uppercase = original.toUpperCase();
    return event.data.ref.parent.child('uppercase').set(uppercase);
});
//cors example
exports.function3 = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    cors(req, res, () => {
        res.send("this is a function");
    });
}));
exports.function4 = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    res.send("this is a function");
}));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
exports.function5 = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    res.send("this is a function");
}));
exports.function6 = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    res.send("this is a function");
}));
exports.function7 = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    res.send("this is a function");
}));
exports.function8 = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    res.send("this is a function");
}));


/***/ })
/******/ ])));