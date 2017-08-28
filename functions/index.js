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
const apiai_functions_1 = __webpack_require__(2);
exports.dbTrigger = apiai_functions_1.dbTrigger;
exports.webhook = apiai_functions_1.webhook;


/***/ }),
/* 2 */
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
const core_1 = __webpack_require__(3);
exports.dbTrigger = functions.database.ref('/chatbot/messages/{pushId}')
    .onWrite(event => {
    const data = event.data.val();
    if (data.to != undefined && data.text != undefined && data.from == 'bot') {
        console.log("no reply for bot message");
        return 0;
    }
    const query = data.text;
    console.log("you said: ", query);
    core_1.apiai.textQuery(query, {
        sessionId: "adfadff"
    }).then(function (response) {
        const reply = response.result.fulfillment.speech;
        console.log("reply is: ", reply);
        return event.data.ref.parent.push({
            text: reply,
            from: "bot",
            to: "zia"
        });
    });
});
exports.webhook = functions.https.onRequest((req, res) => __awaiter(this, void 0, void 0, function* () {
    console.log("this is body: ", req.body);
    console.log("this is headers: ", req.headers);
    var response = {};
    // response = {
    //     speech: "this is speech from firebase",
    //     displayText: "this is displayText from firebase",
    //     data: { "this": "is data from firebase" },
    //     contextOut: [
    //         {
    //             "name": "weather",
    //             "lifespan": 2,
    //             "parameters": { "city": "Rome" }
    //         }
    //     ],
    //     source: "this is source from firebase",
    //     // followupEvent: {
    //     //     name: "signup",
    //     //     data: { 
    //     //         'givenname': "john",
    //     //         'lastname': "john"
    //     //      }
    //     // },
    // }
    console.log("response: ", response);
    res.json({
        speech: "working"
    });
}));


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const uppercase_1 = __webpack_require__(4);
exports.upcaseMessage = uppercase_1.upcaseMessage;
const apiai_1 = __webpack_require__(5);
exports.apiai = apiai_1.apiai;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function upcaseMessage(msg) {
    return msg.toUpperCase();
}
exports.upcaseMessage = upcaseMessage;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const functions = __webpack_require__(0);
const _apiai = __webpack_require__(6);
let app = _apiai(functions.config().apiai.access_token);
class apiai {
}
apiai.textQuery = (text, options) => {
    return new Promise((resolve, reject) => {
        let request = app.textRequest(text, options);
        request.on('response', function (response) {
            // console.log(response);
            resolve(response);
        });
        request.on('error', function (error) {
            // console.log(error);
            reject(error);
        });
        request.end();
    });
};
apiai.eventQuery = (event, options) => {
    return new Promise((resolve, reject) => {
        let request = app.eventRequest(event, options);
        request.on('response', function (response) {
            //console.log(response);
            resolve(response);
        });
        request.on('error', function (error) {
            //console.log(error);
            reject(error);
        });
        request.end();
    });
};
exports.apiai = apiai;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("apiai");

/***/ })
/******/ ])));