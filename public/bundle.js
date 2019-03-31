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
      difference = __webpack_require__(/*! ./parts/difference */ "./parts/difference.js"),
      page3 = __webpack_require__(/*! ./parts/page3 */ "./parts/page3.js"),
      helpForm = __webpack_require__(/*! ./parts/help_form */ "./parts/help_form.js");

  indexSlider();
  play();
  showupSlider();
  goToModules();
  difference();
  page3();
  helpForm();
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

/***/ "./parts/help_form.js":
/*!****************************!*\
  !*** ./parts/help_form.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function helpForm() {
  var message = {
    loading: '<img src="img/ajax-loader.gif" alt="Загрузка...">',
    succes: '<img src="img/tenor.gif" alt="Спасибо! Скоро мы с вами свяжемся!">',
    failure: '<img src="img/warning.png" alt="Что-то пошло не так...">'
  },
      form = document.querySelector('.join__evolution form'),
      inputs = form.getElementsByTagName('input'),
      statusMessage = document.createElement('div'),
      phone = document.querySelector('.join__evolution #phone');
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    sendMessage(form).then(function () {
      return statusMessage.innerHTML = message.loading;
    }).then(function () {
      return statusMessage.innerHTML = message.succes;
    }).catch(function () {
      return statusMessage.innerHTML = message.failure;
    }).then(clearInputs);
  });

  var sendMessage = function sendMessage(form) {
    form.appendChild(statusMessage);
    var formData = new FormData(form);
    return new Promise(function (resolve, reject) {
      var request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
      var obj = {};
      formData.forEach(function (value, key) {
        if (value != '') {
          obj[key] = value;
        }
      });
      var json = JSON.stringify(obj);
      request.addEventListener('readystatechange', function () {
        if (request.readyState < 4) {
          resolve();
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 3) {
            resolve();
          } else {
            reject();
          }
        }
      });
      request.send(json);
    });
  };

  function clearInputs() {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = '';
    }
  }

  inputs[2].addEventListener('keyup', function (e) {
    e.target.value = e.target.value.replace(/[а-яА-ЯёЁ]/g, '');
  });
  phone.addEventListener('keyup', function (event) {
    console.log(+event.target.value.slice(-1));

    if (Number.isInteger(+event.target.value.slice(-1))) {
      var char = event.target.value;

      if (phone.value.length == 1) {
        event.target.value = '+1(' + char;
      }

      if (char.match(/^\+\d{1}\(\d{3}$/) !== null) {
        event.target.value = char + ')';
      } else if (char.match(/^\+\d{1}\(\d{3}\)\d{3}$/) !== null) {
        event.target.value = char + '-';
      }
    } else {
      event.target.value = '';
    }
  });
}

module.exports = helpForm;

/***/ }),

/***/ "./parts/page3.js":
/*!************************!*\
  !*** ./parts/page3.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

function page3() {
  var sliders = document.querySelectorAll('.modules__content-slider .card'),
      boxContent = document.querySelector('.modules__content-slider'),
      btnPrev = document.querySelector('.modules__info-btns .slick-prev'),
      btnNext = document.querySelector('.modules__info-btns .slick-next');
  boxContent.style.display = '-webkit-inline-box';
  boxContent.style.overflow = 'hidden';
  var slideIndex = 1;

  function next() {
    var active = document.querySelector('.modules__content-slider a.card-active');
    boxContent.appendChild(active);
    plusSlides(1);
  }

  btnNext.addEventListener('click', function () {
    next();
  });
  btnPrev.addEventListener('click', function () {
    var active = boxContent.children[sliders.length - 1];
    boxContent.insertBefore(active, boxContent.children[0]);
    plusSlides(-1);
  });

  function moveSlides(n) {
    if (n > sliders.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = sliders.length;
    }

    for (var i = 0; i < sliders.length; i++) {
      sliders[i].classList.remove('card-active');
      sliders[i].children[1].style.opacity = '0.4';
      sliders[i].children[0].children[1].style.opacity = '0';
    }

    sliders[slideIndex - 1].classList.add('card-active');
    sliders[slideIndex - 1].children[1].style.opacity = '1';
    sliders[slideIndex - 1].children[0].children[1].style.opacity = '1';
  }

  function plusSlides(n) {
    moveSlides(slideIndex += n);
  }

  moveSlides(slideIndex);
  setInterval(function () {
    next();
  }, 4000);
}

module.exports = page3;

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
      btnChangeSlide = document.querySelectorAll('.sidecontrol a '),
      hanson = document.querySelector('.hanson');
  var slideIndex = 1;
  hanson.style.display = 'none';

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

    if (n == 3) {
      setTimeout(function () {
        hanson.style.display = 'block';
      }, 3000);
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