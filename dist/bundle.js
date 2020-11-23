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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var FFT_SIZE = 16384 / 2; // 2の累乗
document.querySelector(".start-button").onclick = function () {
    document.querySelector(".start-scene").style.display = "none";
    document.querySelector(".game-scene").style.display = "";
    var audioCtx = new window.AudioContext();
    var analyser = audioCtx.createAnalyser();
    analyser.minDecibels = -100;
    analyser.maxDecibels = -10;
    analyser.smoothingTimeConstant = 0.5;
    // ユーザーに音声入力の許可を求める
    var constraints = { audio: true };
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (stream) {
        var source = audioCtx.createMediaStreamSource(stream);
        source.connect(analyser);
        start();
    })
        .catch(function (err) { console.log('The following gUM error occured: ' + err); });
    function start() {
        var _this = this;
        analyser.fftSize = FFT_SIZE;
        var bufferLengthAlt = analyser.frequencyBinCount;
        var dataArrayAlt = new Uint8Array(bufferLengthAlt);
        var correctAnswerCount = 0;
        // フレーム単位の処理
        var processFrame = function () { return __awaiter(_this, void 0, void 0, function () {
            var answer, question, currentQuestion, nextQuestion, zeroTo7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // fftの結果をdataArrayAltに書き込んでもらう
                        analyser.getByteFrequencyData(dataArrayAlt);
                        answer = estimateScale(dataArrayAlt);
                        if (answer.avg <= 30) {
                            document.querySelector(".answer > span").textContent = "";
                            requestAnimationFrame(processFrame);
                            return [2 /*return*/];
                        }
                        document.querySelector(".answer > span").textContent = answer.scale;
                        question = document.querySelector(".question > span").textContent;
                        if (answer.scale === question) {
                            correctAnswerCount++;
                        }
                        if (!(correctAnswerCount >= 30)) return [3 /*break*/, 2];
                        // 正解の〇を出す
                        document.querySelector(".circle").style.display = "";
                        return [4 /*yield*/, new Promise(function (res) { return setTimeout(res, 300); })];
                    case 1:
                        _a.sent();
                        currentQuestion = document.querySelector(".question > span").textContent;
                        nextQuestion = "";
                        // 前回とは異なる問題にする
                        do {
                            zeroTo7 = Math.floor(Math.random() * 8);
                            nextQuestion = scaleAndHz[zeroTo7].scale;
                        } while (nextQuestion == currentQuestion);
                        document.querySelector(".question > span").textContent = nextQuestion;
                        // 正解の〇を消す
                        correctAnswerCount = 0;
                        document.querySelector(".circle").style.display = "none";
                        _a.label = 2;
                    case 2:
                        requestAnimationFrame(processFrame);
                        return [2 /*return*/];
                }
            });
        }); };
        processFrame();
    }
};
var indexToHz = [];
for (var i = 0; i < FFT_SIZE; i++) {
    indexToHz.push(i * 44100 / FFT_SIZE);
}
var scaleAndHz = [
    { scale: 'C', hz: 261.626 },
    { scale: 'D', hz: 293.665 },
    { scale: 'E', hz: 329.628 },
    { scale: 'F', hz: 349.228 },
    { scale: 'G', hz: 391.995 },
    { scale: 'A', hz: 440.000 },
    { scale: 'B', hz: 493.883 },
    { scale: 'C', hz: 523.251 },
];
// fftの結果から音程を推定する
var estimateScale = function (dataArrayAlt) {
    // ピークを抽出する
    var peaks = [];
    for (var i = 3; i < dataArrayAlt.length - 3; i++) {
        if (dataArrayAlt[i - 3] < dataArrayAlt[i - 2] &&
            dataArrayAlt[i - 2] < dataArrayAlt[i - 1] &&
            dataArrayAlt[i - 1] < dataArrayAlt[i] &&
            dataArrayAlt[i] > dataArrayAlt[i + 1] &&
            dataArrayAlt[i + 1] > dataArrayAlt[i + 2] &&
            dataArrayAlt[i + 2] > dataArrayAlt[i + 3]) {
            peaks.push({ hz: indexToHz[i], value: dataArrayAlt[i] });
        }
    }
    // 各ピークの周波数を2で割ったり掛けたりして260~525にする。
    var normalizedPeaks = peaks.map(function (peak) {
        while (peak.hz <= 260) {
            peak.hz *= 2;
        }
        while (peak.hz >= 525) {
            peak.hz /= 2;
        }
        return { hz: Math.floor(peak.hz * 100) / 100, value: peak.value };
    });
    // ピークからスケール(A~Gのどれか)と大きさを抽出する
    var peakScales = normalizedPeaks.map(function (peak) {
        var abs = scaleAndHz.map(function (v) { return Math.abs(v.hz - peak.hz); });
        var minIndex = abs.reduce(function (minIndex, curr, currI, array) {
            if (array[minIndex] >= array[currI]) {
                return currI;
            }
            else {
                return minIndex;
            }
        }, 0);
        return { scale: scaleAndHz[minIndex].scale, value: peak.value };
    });
    // 各ピークから音程を推定する
    // 各音程の大きさの和が一番高いやつを返す
    var candidate = {};
    scaleAndHz.forEach(function (a) {
        candidate[a.scale] = { scale: a.scale, count: 0, avg: 0 };
    });
    for (var _i = 0, peakScales_1 = peakScales; _i < peakScales_1.length; _i++) {
        var _a = peakScales_1[_i], scale = _a.scale, value = _a.value;
        candidate[scale].count++;
        candidate[scale].avg = (candidate[scale].avg * (candidate[scale].count - 1) + value) / candidate[scale].count;
    }
    var answer = Object.values(candidate).reduce(function (prev, curr) {
        if (prev.avg * prev.count < curr.avg * curr.count) {
            return curr;
        }
        else {
            return prev;
        }
    });
    return answer;
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map