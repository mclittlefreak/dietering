"use strict";
self["webpackHotUpdatesage"]("app",{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _roots_sage_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(194);
/* harmony import */ var _roots_sage_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_roots_sage_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/swiper/swiper.esm.js");
/* harmony import */ var imask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/imask/esm/index.js");


swiper__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination]);

/**
 * app.main
 */

const main = async err => {
  if (err) {
    // handle hmr errors
    console.error(err);
  }

  const postcode = document.getElementById('postcode');
  const city = document.getElementById('city');
  const data = document.getElementById('data');
  const diet = document.querySelectorAll('.diet');
  const error404 = document.getElementById('error404');

  if (data) {
    (0,imask__WEBPACK_IMPORTED_MODULE_2__["default"])(postcode, {
      mask: '00-000'
    });

    const search = () => {
      if (postcode.value || city.value) {
        diet.forEach(value => {
          if (value.dataset.postcode.includes(postcode.value) && value.dataset.city.includes(city.value)) {
            value.classList.remove('hidden');
          } else {
            value.classList.add('hidden');
          }
        });
      } else {
        diet.forEach(value => value.classList.add('hidden'));
      }

      const visibility = [];
      diet.forEach(value => visibility.push(value.classList.contains('hidden') ? true : false));

      if (visibility.every(value => value === true)) {
        data.classList.add('hidden');
        error404.classList.remove('hidden');
      } else {
        data.classList.remove('hidden');
        error404.classList.add('hidden');
      }
    };

    postcode.addEventListener('keyup', search);
    city.addEventListener('keyup', search);
  }

  document.querySelectorAll('[data-nav]').forEach(value => {
    value.addEventListener('click', () => {
      document.getElementById('nav').classList.toggle('active');
    });
  });

  if (document.getElementById('swiper')) {
    new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('#swiper', {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination],
      pagination: {
        el: '#pagination',
        clickable: true
      },
      loop: true,
      spaceBetween: 32,
      breakpoints: {
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }
    });
  } // application code

};

let faq = document.querySelectorAll(".faq , .answer");
faq.forEach(event => {
  event.addEventListener('click', () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});
/**
 * Initialize
 *
 * @see https://webpack.js.org/api/hot-module-replacement
 */

(0,_roots_sage_client__WEBPACK_IMPORTED_MODULE_0__.domReady)(main);
module.hot.accept(main);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "ea66067fdc0529ea80b0"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=app.6a6b38f8e33bc60c821b.hot-update.js.map