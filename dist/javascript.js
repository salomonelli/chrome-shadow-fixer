var ChromeShadowFixer =
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var getElements = function getElements(elements) {
  if (elements && elements.length > 0) return elements;
  elements = document.getElementsByTagName('*');
  var ret = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var element = _step.value;

      var style = window.getComputedStyle(element, null).getPropertyValue('box-shadow');
      if (style !== 'none') {
        element.style.boxShadow = 'none';
        console.log(element.getBoundingClientRect());
        ret.push({
          shadow: style,
          top: element.offsetTop + 'px',
          left: element.offsetleft + 'px',
          width: element.getBoundingClientRect().width,
          height: element.getBoundingClientRect().height
        });
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return ret;
};

var generateElements = function generateElements(elements) {
  var ret = '<div id="chrome-shadow-fixer">';
  elements.forEach(function (el, i) {
    return ret += '<div id="chrome-shadow-fixer-' + i + '"></div>';
  });
  return ret += '</div>';
};

var fix = exports.fix = function fix(elements) {
  var elementsWithShadows = getElements(elements);
  if (elementsWithShadows.length < 1) {
    console.warn('fixShadows(): No elements to fix shadows.');
    return;
  }
  var generatedElements = generateElements(elementsWithShadows);
  document.body.innerHTML += generatedElements;
  elementsWithShadows.forEach(function (el, i) {
    var element = document.querySelector('#chrome-shadow-fixer-' + i);
    element.style.height = el.height;
    element.style.width = el.width;
    element.style.left = el.left;
    element.style.top = el.top;
    element.style.position = 'absolute';
    element.style.boxShadow = el.shadow;
    element.style['-webkit-print-color-adjust'] = 'exact';
    element.style['-webkit-filter'] = 'opacity(1)';
  });
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);