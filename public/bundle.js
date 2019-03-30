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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var indexSlider = __webpack_require__(/*! ./parts/slider_index */ "./parts/slider_index.js"),
      play = __webpack_require__(/*! ./parts/play_index */ "./parts/play_index.js"),
      showupSlider = __webpack_require__(/*! ./parts/showup_slider */ "./parts/showup_slider.js"),
      goToModules = __webpack_require__(/*! ./parts/go_to_modules.js */ "./parts/go_to_modules.js"),
      difference = __webpack_require__(/*! ./parts/difference */ "./parts/difference.js");

  indexSlider();
  play();
  showupSlider();
  goToModules();
  difference();
});

/***/ }),

/***/ "./parts/difference.js":
/*!*****************************!*\
  !*** ./parts/difference.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function difference() {
  var btnPlus = document.querySelector('.officernew .plus'),
      officerold = document.querySelector('.officerold'),
      officernew = document.querySelector('.officernew');
  console.log(btnPlus);
  var copies = {},
      count = 1,
      count2 = 1;

  for (var i = 1; i <= 3; i++) {
    copies[i] = officerold.children[i].cloneNode(true);
  }

  var plusOld = officernew.children[1].cloneNode(true);
  officerold.appendChild(plusOld);

  for (var _i = 0; _i < 3; _i++) {
    officerold.children[1].remove();
  }

  console.log(copies);
  btnPlus.addEventListener('click', function () {
    if (count <= 3) {
      var copy = copies[count].cloneNode(true);
      officernew.insertBefore(copy, officernew.children[count]);
    }

    if (count == 3) {
      officernew.children[++count].remove();
    }

    count++;
  });
  document.querySelector('.officerold .plus').addEventListener('click', function () {
    if (count2 <= 3) {
      var copy = copies[count2].cloneNode(true);
      officerold.insertBefore(copy, officerold.children[count2]);
    }

    if (count2 == 3) {
      officerold.children[++count2].remove();
    }

    count2++;
  });
}

module.exports = difference;

/***/ }),

/***/ "./parts/go_to_modules.js":
/*!********************************!*\
  !*** ./parts/go_to_modules.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function goToModules() {
  var links = document.querySelectorAll('.showup__content-slider a'),
      btnPlus = document.querySelector('.showup__content-explore .plus');
  btnPlus.addEventListener('click', function () {
    window.location.href = 'modules.html#1';
  });

  var _loop = function _loop(_i) {
    links[_i].addEventListener('click', function () {
      //window.location.href = `modules.html# ${++i}`;
      window.location.href = 'modules.html#' + ++_i;
    });

    i = _i;
  };

  for (var i = 0; i < links.length; i++) {
    _loop(i);
  }
}

module.exports = goToModules;

/***/ }),

/***/ "./parts/play_index.js":
/*!*****************************!*\
  !*** ./parts/play_index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function play() {
  var btnPlay = document.querySelector('.showup__video .play'),
      overlay = document.querySelector('.overlay'),
      blockVideo = document.querySelector('.video');
  framePlay = document.querySelector('#iframe');
  btnPlay.addEventListener('click', function (ev) {
    overlay.style.display = 'block';
    var path = btnPlay.getAttribute('data-url'); //videoPlayReady(path);

    console.log(path);
    ev.preventDefault();
  });

  function videoPlayReady(path) {
    framePlay.setAttribute('src', path);
    framePlay.style.top = '250px';
    var player = new YouTubePlayer.Player('player', {
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
}

module.exports = play;

/***/ }),

/***/ "./parts/showup_slider.js":
/*!********************************!*\
  !*** ./parts/showup_slider.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function showupSlider() {
  var showupSliders = document.querySelectorAll('.showup__content-slider a'),
      boxContent = document.querySelector('.showup__content-slider'),
      btnRight = document.querySelector('.right'),
      btnLeft = document.querySelector('.left');
  boxContent.style.display = '-webkit-inline-box';
  boxContent.style.overflow = 'hidden';
  var slideIndex = 1;
  btnRight.addEventListener('click', function () {
    var active = document.querySelector('.showup__content-slider a.card-active');
    boxContent.appendChild(active);
    plusSlides(1);
  });
  btnLeft.addEventListener('click', function () {
    var active = boxContent.children[showupSliders.length - 1];
    boxContent.insertBefore(active, boxContent.children[0]);
    console.log(active);
    plusSlides(-1);
  });

  function moveSlides(n) {
    if (n > showupSliders.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = showupSliders.length;
    }

    for (var i = 0; i < showupSliders.length; i++) {
      showupSliders[i].classList.remove('card-active');
      showupSliders[i].children[1].style.opacity = '0.4';
      showupSliders[i].children[0].children[1].style.opacity = '0';
    }

    showupSliders[slideIndex - 1].classList.add('card-active');
    showupSliders[slideIndex - 1].children[1].style.opacity = '1';
    showupSliders[slideIndex - 1].children[0].children[1].style.opacity = '1';
  }

  function plusSlides(n) {
    moveSlides(slideIndex += n);
  }

  moveSlides(slideIndex);
}

module.exports = showupSlider;

/***/ }),

/***/ "./parts/slider_index.js":
/*!*******************************!*\
  !*** ./parts/slider_index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function sliderIndex() {
  var page = document.querySelector('.page'),
      slides = page.children,
      btnChangeSlide = document.querySelectorAll('.sidecontrol a ');
  var slideIndex = 1;

  var _loop = function _loop(i) {
    btnChangeSlide[i].addEventListener('click', function () {
      if (i > 1 && i % 2 == 0) {
        showSlides(slides.length + 1);
      } else if (i % 2 != 0) {
        plusSlides(1);
      }
    });
  };

  for (var i = 0; i < btnChangeSlide.length; i++) {
    _loop(i);
  }

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none';
    }

    slides[slideIndex - 1].style.display = 'block';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  showSlides(slideIndex);
}

module.exports = sliderIndex;

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map