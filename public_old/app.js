/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

  const menu = document.querySelector('.nav1');
  menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    document.querySelector('.nav1').classList.toggle.active();
  });
  const postcode = document.getElementById('postcode');
  const city = document.getElementById('city');
  const data = document.getElementById('data');
  const diet = document.querySelectorAll('.diet');
  const error404 = document.getElementById('error404');

  if (data) {
    (0,imask__WEBPACK_IMPORTED_MODULE_2__["default"])(postcode, {
      mask: '00-000'
    });
    let timeout = false;

    const search = () => {
      if (timeout) clearTimeout(timeout);
      document.querySelector('#data .yes').style.display = 'none';
      document.querySelector('#data .no').style.display = 'none';
      document.querySelector('#data .loading').style.display = 'block';
      data.classList.remove('hidden');
      timeout = setTimeout(() => {
        if (postcode.value || city.value) {
          const form = new FormData();
          form.append('action', 'check');
          form.append('postcode', postcode.value);
          form.append('city', city.value);
          fetch('/wp-admin/admin-ajax.php', {
            method: 'post',
            body: form
          }).then(response => response.json()).then(data => {
            document.querySelector('#data .loading').style.display = 'none';

            if (data.postcode || data.city) {
              document.querySelector('#data .yes').style.display = 'block';
            } else {
              document.querySelector('#data .no').style.display = 'block';
            }
          }).catch(error => {
            console.error(error);
          });
        }
      }, 500); //   diet.forEach(value => {
      //     if (value.dataset.postcode.includes(postcode.value) && value.dataset.city.includes(city.value)) {
      //       value.classList.remove('hidden');
      //     } else {
      //       value.classList.add('hidden');
      //     }
      //   });
      // } else {
      //   diet.forEach(value => value.classList.add('hidden'));
      // }
      // const visibility = [];
      // diet.forEach(value => visibility.push(value.classList.contains('hidden') ? true : false));
      // if (visibility.every(value => value === true)) {
      //   data.classList.add('hidden');
      //   error404.classList.remove('hidden');
      // } else {
      //   data.classList.remove('hidden');
      //   error404.classList.add('hidden');
      // }
    };

    postcode.addEventListener('keyup', () => {
      city.value = '';
      search();
    });
    city.addEventListener('keyup', () => {
      postcode.value = '';
      search();
    });
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
  }

  if (document.getElementById('swiper-comment')) {
    new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('#swiper-comment', {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination],
      pagination: {
        el: '#pagination',
        clickable: true
      },
      loop: true,
      spaceBetween: 20,
      breakpoints: {
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        }
      }
    });
  }

  if (document.getElementById('diety')) {
    new swiper__WEBPACK_IMPORTED_MODULE_1__["default"]('#diety', {
      modules: [swiper__WEBPACK_IMPORTED_MODULE_1__.Pagination],
      pagination: {
        el: '#diety-pagination',
        clickable: true
      },
      loop: true,
      spaceBetween: 32,
      breakpoints: {
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        },
        1400: {
          slidesPerView: 4
        }
      }
    });
  }

  document.querySelectorAll('.diet.block .content, #diety .content-diet .content').forEach(element => {
    const content = element.querySelector('p');
    const toggle = document.createElement('span');
    toggle.classList.add('opis-toggle');
    content.style.display = 'none';
    toggle.innerText = 'Rozwiń opis';
    element.append(toggle);
    toggle.addEventListener('click', e => {
      e.preventDefault();

      if (toggle.classList.contains('on')) {
        content.style.display = 'none';
        toggle.innerText = 'Rozwiń opis';
      } else {
        content.style.display = 'block';
        toggle.innerText = 'Zwiń opis';
      }

      toggle.classList.toggle('on');
      return false;
    });
  }); // application code
};

let faq = document.querySelectorAll(".faq-list .faq");
faq.forEach(event => {
  event.addEventListener('click', () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});
let menu = document.querySelectorAll(".menu-title");
menu.forEach(event => {
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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[2]!./resources/styles/app.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__("./resources/images/comment.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__("./resources/images/sub-menu.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__("./resources/images/form-select.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__("./resources/images/bi_fire.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__("./resources/images/arrow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__("./resources/images/lady-black.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__("./resources/images/lady.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__("./resources/images/man-black.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__("./resources/images/man.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.2.4/swiper-bundle.min.css);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n/*\n! tailwindcss v3.0.24 | MIT License | https://tailwindcss.com\n*/\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n::before,\n::after {\n  --tw-content: '';\n}\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n/*\nRemove the default font size and weight for headings.\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/*\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/*\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\nbutton,\nselect {\n  text-transform: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n:-moz-focusring {\n  outline: auto;\n}\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*\nPrevent resizing textareas horizontally by default.\n*/\ntextarea {\n  resize: vertical;\n}\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n/*\nSet the default cursor for buttons.\n*/\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n[hidden] {\n  display: none;\n}\n*, ::before, ::after{\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container{\n  width: 100%;\n}\n@media (min-width: 640px){\n  .container{\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px){\n  .container{\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px){\n  .container{\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px){\n  .container{\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px){\n  .container{\n    max-width: 1536px;\n  }\n}\n.aspect-w-4{\n  position: relative;\n  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);\n  --tw-aspect-w: 4;\n}\n.aspect-w-4 > *{\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.aspect-h-3{\n  --tw-aspect-h: 3;\n}\n.aspect-w-16{\n  position: relative;\n  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);\n  --tw-aspect-w: 16;\n}\n.aspect-w-16 > *{\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.aspect-h-9{\n  --tw-aspect-h: 9;\n}\n.aspect-w-1{\n  position: relative;\n  padding-bottom: calc(var(--tw-aspect-h) / var(--tw-aspect-w) * 100%);\n  --tw-aspect-w: 1;\n}\n.aspect-w-1 > *{\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.aspect-h-1{\n  --tw-aspect-h: 1;\n}\n.sr-only{\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n.static{\n  position: static;\n}\n.absolute{\n  position: absolute;\n}\n.relative{\n  position: relative;\n}\n.sticky{\n  position: sticky;\n}\n.inset-x-0{\n  left: 0px;\n  right: 0px;\n}\n.left-\\[6\\%\\]{\n  left: 6%;\n}\n.bottom-0{\n  bottom: 0px;\n}\n.top-1\\/2{\n  top: 50%;\n}\n.top-4{\n  top: 1rem;\n}\n.right-4{\n  right: 1rem;\n}\n.-z-10{\n  z-index: -10;\n}\n.mx-auto{\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-\\[26px\\]{\n  margin-top: 26px;\n  margin-bottom: 26px;\n}\n.-mx-4{\n  margin-left: -1rem;\n  margin-right: -1rem;\n}\n.mx-4{\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.my-8{\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.my-9{\n  margin-top: 2.25rem;\n  margin-bottom: 2.25rem;\n}\n.my-\\[28px\\]{\n  margin-top: 28px;\n  margin-bottom: 28px;\n}\n.my-4{\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.mt-8{\n  margin-top: 2rem;\n}\n.ml-2{\n  margin-left: 0.5rem;\n}\n.mt-\\[14px\\]{\n  margin-top: 14px;\n}\n.mb-\\[36px\\]{\n  margin-bottom: 36px;\n}\n.mt-10{\n  margin-top: 2.5rem;\n}\n.mb-8{\n  margin-bottom: 2rem;\n}\n.mt-\\[18px\\]{\n  margin-top: 18px;\n}\n.mb-\\[26px\\]{\n  margin-bottom: 26px;\n}\n.ml-4{\n  margin-left: 1rem;\n}\n.mt-1{\n  margin-top: 0.25rem;\n}\n.mt-2{\n  margin-top: 0.5rem;\n}\n.ml-6{\n  margin-left: 1.5rem;\n}\n.mb-6{\n  margin-bottom: 1.5rem;\n}\n.mt-6{\n  margin-top: 1.5rem;\n}\n.mb-\\[25px\\]{\n  margin-bottom: 25px;\n}\n.mr-2\\.5{\n  margin-right: 0.625rem;\n}\n.mr-2{\n  margin-right: 0.5rem;\n}\n.mt-4{\n  margin-top: 1rem;\n}\n.ml-\\[7\\%\\]{\n  margin-left: 7%;\n}\n.mb-\\[60px\\]{\n  margin-bottom: 60px;\n}\n.mt-3{\n  margin-top: 0.75rem;\n}\n.mr-4{\n  margin-right: 1rem;\n}\n.mt-\\[31px\\]{\n  margin-top: 31px;\n}\n.mb-4{\n  margin-bottom: 1rem;\n}\n.ml-\\[-20px\\]{\n  margin-left: -20px;\n}\n.mb-2\\.5{\n  margin-bottom: 0.625rem;\n}\n.mb-2{\n  margin-bottom: 0.5rem;\n}\n.mt-2\\.5{\n  margin-top: 0.625rem;\n}\n.mt-11{\n  margin-top: 2.75rem;\n}\n.ml-10{\n  margin-left: 2.5rem;\n}\n.mb-\\[10px\\]{\n  margin-bottom: 10px;\n}\n.mt-14{\n  margin-top: 3.5rem;\n}\n.mb-\\[42px\\]{\n  margin-bottom: 42px;\n}\n.ml-5{\n  margin-left: 1.25rem;\n}\n.mb-\\[7px\\]{\n  margin-bottom: 7px;\n}\n.mr-5{\n  margin-right: 1.25rem;\n}\n.mb-\\[17px\\]{\n  margin-bottom: 17px;\n}\n.mb-\\[46px\\]{\n  margin-bottom: 46px;\n}\n.mt-5{\n  margin-top: 1.25rem;\n}\n.mb-\\[15px\\]{\n  margin-bottom: 15px;\n}\n.mt-\\[83px\\]{\n  margin-top: 83px;\n}\n.mt-\\[15px\\]{\n  margin-top: 15px;\n}\n.mt-12{\n  margin-top: 3rem;\n}\n.mt-16{\n  margin-top: 4rem;\n}\n.mr-\\[35px\\]{\n  margin-right: 35px;\n}\n.mt-\\[23px\\]{\n  margin-top: 23px;\n}\n.ml-3{\n  margin-left: 0.75rem;\n}\n.ml-1{\n  margin-left: 0.25rem;\n}\n.block{\n  display: block;\n}\n.inline-block{\n  display: inline-block;\n}\n.flex{\n  display: flex;\n}\n.inline-flex{\n  display: inline-flex;\n}\n.contents{\n  display: contents;\n}\n.hidden{\n  display: none;\n}\n.h-11{\n  height: 2.75rem;\n}\n.h-\\[438px\\]{\n  height: 438px;\n}\n.h-\\[466px\\]{\n  height: 466px;\n}\n.h-5{\n  height: 1.25rem;\n}\n.h-auto{\n  height: auto;\n}\n.h-\\[285px\\]{\n  height: 285px;\n}\n.h-24{\n  height: 6rem;\n}\n.h-\\[23px\\]{\n  height: 23px;\n}\n.h-\\[750px\\]{\n  height: 750px;\n}\n.h-\\[44px\\]{\n  height: 44px;\n}\n.h-16{\n  height: 4rem;\n}\n.h-8{\n  height: 2rem;\n}\n.h-\\[29px\\]{\n  height: 29px;\n}\n.max-h-16{\n  max-height: 4rem;\n}\n.min-h-\\[72px\\]{\n  min-height: 72px;\n}\n.w-10\\/12{\n  width: 83.333333%;\n}\n.w-full{\n  width: 100%;\n}\n.w-4{\n  width: 1rem;\n}\n.w-1\\/2{\n  width: 50%;\n}\n.w-\\[449px\\]{\n  width: 449px;\n}\n.w-5{\n  width: 1.25rem;\n}\n.w-\\[46\\%\\]{\n  width: 46%;\n}\n.w-auto{\n  width: auto;\n}\n.w-\\[285px\\]{\n  width: 285px;\n}\n.w-\\[26px\\]{\n  width: 26px;\n}\n.w-4\\/5{\n  width: 80%;\n}\n.w-3\\/4{\n  width: 75%;\n}\n.w-\\[23\\%\\]{\n  width: 23%;\n}\n.w-\\[167px\\]{\n  width: 167px;\n}\n.w-1\\/3{\n  width: 33.333333%;\n}\n.w-32{\n  width: 8rem;\n}\n.w-\\[285\\]{\n  width: 285;\n}\n.w-8{\n  width: 2rem;\n}\n.w-11{\n  width: 2.75rem;\n}\n.w-\\[24px\\]{\n  width: 24px;\n}\n.w-1\\/4{\n  width: 25%;\n}\n.max-w-\\[80\\%\\]{\n  max-width: 80%;\n}\n.max-w-\\[590px\\]{\n  max-width: 590px;\n}\n.max-w-\\[9rem\\]{\n  max-width: 9rem;\n}\n.max-w-\\[16rem\\]{\n  max-width: 16rem;\n}\n.max-w-xl{\n  max-width: 36rem;\n}\n.max-w-lg{\n  max-width: 32rem;\n}\n.max-w-\\[50\\%\\]{\n  max-width: 50%;\n}\n.flex-none{\n  flex: none;\n}\n.-translate-y-1\\/2{\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.cursor-pointer{\n  cursor: pointer;\n}\n.flex-col{\n  flex-direction: column;\n}\n.flex-col-reverse{\n  flex-direction: column-reverse;\n}\n.flex-wrap{\n  flex-wrap: wrap;\n}\n.items-start{\n  align-items: flex-start;\n}\n.items-center{\n  align-items: center;\n}\n.justify-start{\n  justify-content: flex-start;\n}\n.justify-end{\n  justify-content: flex-end;\n}\n.justify-center{\n  justify-content: center;\n}\n.justify-between{\n  justify-content: space-between;\n}\n.rounded-md{\n  border-radius: 5px;\n}\n.rounded-full{\n  border-radius: 9999px;\n}\n.rounded{\n  border-radius: 4px;\n}\n.rounded-\\[5px\\]{\n  border-radius: 5px;\n}\n.rounded-sm{\n  border-radius: 0.125rem;\n}\n.border-\\[1px\\]{\n  border-width: 1px;\n}\n.border-2{\n  border-width: 2px;\n}\n.border-4{\n  border-width: 4px;\n}\n.border-t{\n  border-top-width: 1px;\n}\n.border-l-2{\n  border-left-width: 2px;\n}\n.border-b-\\[1px\\]{\n  border-bottom-width: 1px;\n}\n.border-solid{\n  border-style: solid;\n}\n.border-\\[\\#f2f2f2\\]{\n  --tw-border-opacity: 1;\n  border-color: rgb(242 242 242 / var(--tw-border-opacity));\n}\n.border-black{\n  --tw-border-opacity: 1;\n  border-color: rgb(0 0 0 / var(--tw-border-opacity));\n}\n.border-\\[\\#0B8344\\]{\n  --tw-border-opacity: 1;\n  border-color: rgb(11 131 68 / var(--tw-border-opacity));\n}\n.border-\\[\\#A6CD39\\]{\n  --tw-border-opacity: 1;\n  border-color: rgb(166 205 57 / var(--tw-border-opacity));\n}\n.border-white{\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n.border-\\[\\#B0B0B0\\]{\n  --tw-border-opacity: 1;\n  border-color: rgb(176 176 176 / var(--tw-border-opacity));\n}\n.bg-indigo-400{\n  --tw-bg-opacity: 1;\n  background-color: rgb(129 140 248 / var(--tw-bg-opacity));\n}\n.bg-green-400{\n  --tw-bg-opacity: 1;\n  background-color: rgb(74 222 128 / var(--tw-bg-opacity));\n}\n.bg-yellow-400{\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 204 21 / var(--tw-bg-opacity));\n}\n.bg-red-400{\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 113 113 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#f2f2f2\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgb(242 242 242 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#A6CD39\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgb(166 205 57 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#028523\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgb(2 133 35 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#E7F3ED\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 243 237 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#0B8344\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgb(11 131 68 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#b7f15f\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgb(183 241 95 / var(--tw-bg-opacity));\n}\n.bg-white\\/75{\n  background-color: rgb(255 255 255 / 0.75);\n}\n.bg-white{\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#e7e7e7\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 231 231 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#F6F7F2\\]{\n  --tw-bg-opacity: 1;\n  background-color: rgb(246 247 242 / var(--tw-bg-opacity));\n}\n.bg-\\[\\#0B8344\\]\\/\\[\\.01\\]{\n  background-color: rgb(11 131 68 / .01);\n}\n.bg-cover{\n  background-size: cover;\n}\n.bg-fixed{\n  background-attachment: fixed;\n}\n.bg-center{\n  background-position: center;\n}\n.bg-no-repeat{\n  background-repeat: no-repeat;\n}\n.fill-\\[\\#b7f15f\\]{\n  fill: #b7f15f;\n}\n.fill-\\[\\#028523\\]{\n  fill: #028523;\n}\n.fill-\\[\\#2d2d2d\\]{\n  fill: #2d2d2d;\n}\n.object-cover{\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.p-4{\n  padding: 1rem;\n}\n.p-8{\n  padding: 2rem;\n}\n.p-6{\n  padding: 1.5rem;\n}\n.px-5{\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n.py-2\\.5{\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n.py-2{\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-4{\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-\\[29px\\]{\n  padding-left: 29px;\n  padding-right: 29px;\n}\n.px-2{\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-\\[30px\\]{\n  padding-left: 30px;\n  padding-right: 30px;\n}\n.py-\\[10px\\]{\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n.px-8{\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-6{\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.px-7{\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n}\n.py-3{\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n.px-9{\n  padding-left: 2.25rem;\n  padding-right: 2.25rem;\n}\n.px-\\[28px\\]{\n  padding-left: 28px;\n  padding-right: 28px;\n}\n.py-\\[32px\\]{\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n.py-4{\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.px-0{\n  padding-left: 0px;\n  padding-right: 0px;\n}\n.px-14{\n  padding-left: 3.5rem;\n  padding-right: 3.5rem;\n}\n.pt-4{\n  padding-top: 1rem;\n}\n.pb-8{\n  padding-bottom: 2rem;\n}\n.pb-6{\n  padding-bottom: 1.5rem;\n}\n.pl-\\[27px\\]{\n  padding-left: 27px;\n}\n.pt-16{\n  padding-top: 4rem;\n}\n.pt-8{\n  padding-top: 2rem;\n}\n.pl-\\[39px\\]{\n  padding-left: 39px;\n}\n.pt-\\[33px\\]{\n  padding-top: 33px;\n}\n.pt-\\[29px\\]{\n  padding-top: 29px;\n}\n.pb-\\[13px\\]{\n  padding-bottom: 13px;\n}\n.pt-\\[50px\\]{\n  padding-top: 50px;\n}\n.text-center{\n  text-align: center;\n}\n.text-justify{\n  text-align: justify;\n}\n.text-sm{\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.text-xl{\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.text-base{\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-\\[16px\\]{\n  font-size: 16px;\n}\n.text-2xl{\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl{\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-\\[14px\\]{\n  font-size: 14px;\n}\n.text-lg{\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-\\[31px\\]{\n  font-size: 31px;\n}\n.text-xs{\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.text-\\[20px\\]{\n  font-size: 20px;\n}\n.text-\\[39px\\]{\n  font-size: 39px;\n}\n.text-\\[18px\\]{\n  font-size: 18px;\n}\n.text-4xl{\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-\\[25px\\]{\n  font-size: 25px;\n}\n.font-bold{\n  font-weight: 700;\n}\n.font-semibold{\n  font-weight: 600;\n}\n.font-light{\n  font-weight: 300;\n}\n.uppercase{\n  text-transform: uppercase;\n}\n.leading-6{\n  line-height: 1.5rem;\n}\n.leading-\\[49px\\]{\n  line-height: 49px;\n}\n.leading-\\[24px\\]{\n  line-height: 24px;\n}\n.leading-8{\n  line-height: 2rem;\n}\n.leading-\\[22px\\]{\n  line-height: 22px;\n}\n.leading-\\[35px\\]{\n  line-height: 35px;\n}\n.text-indigo-50{\n  --tw-text-opacity: 1;\n  color: rgb(238 242 255 / var(--tw-text-opacity));\n}\n.text-green-50{\n  --tw-text-opacity: 1;\n  color: rgb(240 253 244 / var(--tw-text-opacity));\n}\n.text-yellow-50{\n  --tw-text-opacity: 1;\n  color: rgb(254 252 232 / var(--tw-text-opacity));\n}\n.text-red-50{\n  --tw-text-opacity: 1;\n  color: rgb(254 242 242 / var(--tw-text-opacity));\n}\n.text-\\[\\#0B8344\\]{\n  --tw-text-opacity: 1;\n  color: rgb(11 131 68 / var(--tw-text-opacity));\n}\n.text-black{\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n.text-white{\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-\\[\\#696969\\]{\n  --tw-text-opacity: 1;\n  color: rgb(105 105 105 / var(--tw-text-opacity));\n}\n.text-\\[\\#0B8243\\]{\n  --tw-text-opacity: 1;\n  color: rgb(11 130 67 / var(--tw-text-opacity));\n}\n.text-\\[\\#028523\\]{\n  --tw-text-opacity: 1;\n  color: rgb(2 133 35 / var(--tw-text-opacity));\n}\n.text-\\[\\#2d2d2d\\]{\n  --tw-text-opacity: 1;\n  color: rgb(45 45 45 / var(--tw-text-opacity));\n}\n.text-\\[\\#A6CD39\\]{\n  --tw-text-opacity: 1;\n  color: rgb(166 205 57 / var(--tw-text-opacity));\n}\n.text-\\[\\#4F4F4F\\]{\n  --tw-text-opacity: 1;\n  color: rgb(79 79 79 / var(--tw-text-opacity));\n}\n.text-\\[\\#f2f2f2\\]{\n  --tw-text-opacity: 1;\n  color: rgb(242 242 242 / var(--tw-text-opacity));\n}\n.shadow{\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.outline{\n  outline-style: solid;\n}\n.duration-150{\n  transition-duration: 150ms;\n}\nbody {\n  font-family: 'Poppins', sans-serif;\n}\n.container {\n  max-width: 1280px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.title{\n  padding-top: 2rem;\n  --tw-text-opacity: 1;\n  color: rgb(45 45 45 / var(--tw-text-opacity));\n}\n.h1{\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n@media (min-width: 768px){\n  .h1{\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n}\n.h2{\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n@media (min-width: 768px){\n  .h2{\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n}\n.h3{\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n@media (min-width: 768px){\n  .h3{\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\n.content{\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(45 45 45 / var(--tw-text-opacity));\n}\n.content p{\n  margin-top: 1rem;\n}\n.content ul{\n  margin-top: 1rem;\n  list-style-position: inside;\n  list-style-type: disc;\n}\n.content h1{\n  margin-top: 1rem;\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n@media (min-width: 768px){\n  .content h1{\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n}\n.content h2{\n  margin-top: 1rem;\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n@media (min-width: 768px){\n  .content h2{\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n}\n.content h3{\n  margin-top: 1rem;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n@media (min-width: 768px){\n  .content h3{\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\n.content iframe{\n  height: 20rem;\n  width: 100%;\n}\n@media (min-width: 768px){\n  .content iframe{\n    height: 24rem;\n  }\n}\n#pagination{\n  display: flex;\n  justify-content: center;\n}\n#pagination span{\n  margin-top: 2rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 231 231 / var(--tw-bg-opacity));\n  opacity: 1;\n  transition-duration: 150ms;\n}\n#pagination .swiper-pagination-bullet-active{\n  --tw-bg-opacity: 1;\n  background-color: rgb(45 45 45 / var(--tw-bg-opacity));\n}\n#diety-pagination{\n  display: flex;\n  justify-content: center;\n}\n#diety-pagination span{\n  margin-top: 2rem;\n  height: 0.75rem;\n  width: 0.75rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(231 231 231 / var(--tw-bg-opacity));\n  opacity: 1;\n  transition-duration: 150ms;\n}\n#diety-pagination .swiper-pagination-bullet-active{\n  height: 0.75rem;\n  width: 0.75rem;\n  --tw-bg-opacity: 1;\n  background-color: rgb(45 45 45 / var(--tw-bg-opacity));\n}\n.comment {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + "), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-position: 0 0, right bottom;\n  margin-top: 1rem;\n  background-size: 2rem auto;\n  background-repeat: no-repeat;\n  padding: 1rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(45 45 45 / var(--tw-text-opacity));\n}\n/* #nav {\n  @apply bg-[#f2f2f2] items-center px-4 lg:p-0 z-10 fixed inset-0 duration-150 opacity-0 flex invisible lg:static lg:visible lg:opacity-100 lg:bg-transparent overflow-y-auto lg:overflow-y-visible w-full justify-center;\n} */\n#nav.active{\n  visibility: visible;\n  visibility: hidden;\n  position: fixed;\n  top: 0px;\n  right: 0px;\n  bottom: 0px;\n  left: 0px;\n  z-index: 10;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  overflow-y: auto;\n  --tw-bg-opacity: 1;\n  background-color: rgb(242 242 242 / var(--tw-bg-opacity));\n  padding-left: 1rem;\n  padding-right: 1rem;\n  opacity: 0;\n  transition-duration: 150ms;\n}\n@media (min-width: 1024px){\n  #nav.active{\n    visibility: visible;\n    position: static;\n    overflow-y: visible;\n    background-color: transparent;\n    padding: 0px;\n    opacity: 1;\n  }\n}\n#text {\n  margin-bottom: 8px;\n}\n.wpcf7-form-control-wrap {\n  margin-top: 8px;\n  border:1px;\n  border-color:#0B8344;\n}\n.primary_navigation{\n  margin: auto;\n  width: 100%;\n  justify-content: space-between;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n@media (min-width: 1024px){\n  .primary_navigation{\n    display: flex;\n  }\n}\n.primary_navigation>li{\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-align: center;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n@media (min-width: 1024px){\n  .primary_navigation>li{\n    margin-top: 0px;\n    margin-bottom: 0px;\n  }\n}\n.primary_navigation a{\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n  transition-duration: 150ms;\n}\n.primary_navigation a:hover{\n  --tw-text-opacity: 1;\n  color: rgb(2 133 35 / var(--tw-text-opacity));\n}\n@media (min-width: 768px){\n  .primary_navigation a{\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n}\n@media (min-width: 1024px){\n  .primary_navigation a{\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n}\n.primary_navigation>li>a{\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n  font-weight: 600;\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n@media (min-width: 768px){\n  .primary_navigation>li>a{\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n}\n@media (min-width: 1024px){\n  .primary_navigation>li>a{\n    display: block;\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n}\n.primary_navigation .current-menu-item>a{\n  text-align: center;\n  --tw-text-opacity: 1;\n  color: rgb(2 133 35 / var(--tw-text-opacity));\n}\n.menu-item-has-children>a {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  pointer-events: none;\n  background-size: 1rem auto;\n  background-position: right;\n  background-repeat: no-repeat;\n  padding-right: 2rem;\n}\n@media (min-width: 1024px){\n  .menu-item-has-children>a{\n    pointer-events: auto;\n  }\n}\n.form-text{\n  font-size: 1rem;\n  line-height: 1.5rem;\n  font-weight: 600;\n}\n.sub-menu{\n  margin-top: 1rem;\n  display: none;\n  width: 83.333333%;\n}\n@media (min-width: 1024px){\n  .sub-menu{\n    visibility: hidden;\n    position: absolute;\n    left: 1rem;\n    right: 1rem;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 0px;\n    max-width: 1536px;\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n    padding-left: 2rem;\n    padding-right: 2rem;\n    padding-top: 1rem;\n    padding-bottom: 2rem;\n    opacity: 0;\n    --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n    transition-duration: 150ms;\n  }\n}\nli:hover .sub-menu{\n  display: block;\n}\n@media (min-width: 1024px){\n  li:hover .sub-menu{\n    visibility: visible;\n    display: flex;\n    flex-wrap: wrap;\n    opacity: 1;\n  }\n}\n.sub-menu li{\n  text-align: center;\n}\n@media (min-width: 1024px){\n  .sub-menu li{\n    margin-top: 1rem;\n    width: 33.333333%;\n    text-align: left;\n  }\n}\ntable{\n  margin-top: 1rem;\n  width: 100%;\n  --tw-bg-opacity: 1;\n  background-color: rgb(242 242 242 / var(--tw-bg-opacity));\n}\nth, td{\n  padding: 1rem;\n  text-align: center;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(45 45 45 / var(--tw-text-opacity));\n}\nth{\n  font-weight: 700;\n}\ntbody tr{\n  border-top-width: 1px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 231 231 / var(--tw-border-opacity));\n  transition-duration: 150ms;\n}\ntbody tr:hover{\n  --tw-bg-opacity: 1;\n  background-color: rgb(183 241 95 / var(--tw-bg-opacity));\n}\n.form-input, .form-select{\n  margin-top: 1rem;\n  width: 100%;\n  border-radius: 4px;\n  border-width: 1px;\n  border-style: solid;\n  --tw-border-opacity: 1;\n  border-color: rgb(231 231 231 / var(--tw-border-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  padding: 1rem;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  --tw-text-opacity: 1;\n  color: rgb(45 45 45 / var(--tw-text-opacity));\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n  transition-duration: 150ms;\n}\n.form-input:focus, .form-select:focus{\n  --tw-border-opacity: 1;\n  border-color: rgb(2 133 35 / var(--tw-border-opacity));\n}\n.form-select {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  -webkit-appearance: none;\n          appearance: none;\n  background-size: 1rem auto;\n  background-position: right 1rem center;\n  background-repeat: no-repeat;\n}\n.form__email, .form__name , .form__title, .form__message {\n  font-size: 14px;\n  margin-bottom: 8px;\n  width: 100%;\n}\n.wpcf7-form-control-wrap{\n  width: 100%;\n  display: block;\n}\n.wpcf7-form input{\n  width: 100%;\n  height: 50px;\n  border-radius:5px;\n  border-color: #0B8344 ;\n}\n.wpcf7-form textarea{\n  width: 100%;\n}\n.wpcf7-form p {\n  margin-top:10px;\n}\n.nav1.active + .nav-primary {\n  display: block!important;\n}\n.Footer_cities {\n  display: flex;\n  flex-wrap: wrap;\n  /* width: 83.333%; */\n  margin-left: auto;\n  margin-right: auto;\n\n}\n.Footer_cities li a {\n  font-size: 14px;\n  line-height: 22px;\n  margin-left: 3px;\n  margin-right: 3px;\n  color: #696969;\n\n}\n.secondary_navigation {\n  display: flex;\n  flex-direction: column;\n}\n.secondary_navigation li {\n  margin-top:10px;\n}\n.secondary_navigation li a {\n  color: #696969;\n  margin-top: 5px;\n}\n.margin-button {\n  margin-left: 5%;\n}\n.kalorycznosc::before {\n  content: '';\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n  background-position: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n}\n.tertiary_navigation {\n  display: flex;\n  flex-direction: column;\n}\n.tertiary_navigation li {\n\n  margin-top: 10px;\n}\n.tertiary_navigation li a {\n  color: #696969;\n  margin-top: 5px;\n}\n.answer {\n  display: none;\n}\n.menu-list {\n  display: none;\n}\n.menu-title {\n  cursor: pointer;\n  font-size: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 600;\n  line-height: 62px;\n}\n.menu-title::after {\n  content: '';\n  background-size: contain;\n  background-repeat: no-repeat;\n  display: inline-block;\n  background-position: center;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  width:20px;\n  height: 10px;\n}\n.menu-title.active + .menu-list {\n  display:block;\n}\n.faq-list .faq.active .answer {\n  display:block;\n}\n.female-box {\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  height: 67px;\n  width: 26px;\n}\n.female-box::checked + label{\n  color:#0B8344;\n\n}\n.female-box::checked {\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n}\n.radio-box{\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.radio-box label div{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #FFFFFF;\n  border: 1px solid #B0B0B0;\n  border-radius: 5px;\n  padding:18px;\n  margin-top: 23px;\n  cursor: pointer;\n}\n.radio-box input{\n  display: none;\n}\n.radio-box label span{\n  position: relative;\n  padding-left: 35px;\n}\n.radio-box label span::before{\n  content: ' ';\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translatey(-50%);\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #D9D9D9;\n}\n.radio-box label input:checked + div{\n  background: #A6CD39;\n}\n.radio-box label input:checked + div span::before{\n  background: #fff;\n}\n.radio-box label input:checked + div span::after{\n  content: ' ';\n  position: absolute;\n  top: 40%;\n  left: 6px;\n  transform: translatey(-50%) rotate(-45deg);\n  width: 14px;\n  height: 7px;\n  border: 2px solid black;\n  border-top: 0;\n  border-right: 0;\n}\n.calc-gender{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding:18px;\n  margin-top: 23px;\n  cursor: pointer;\n  padding-left: 45px;\n  position: relative;\n}\n.calc-gender input{\n  display: none;\n}\n.male span::before {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  transform: translateY(-50%);\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ");\n  background-repeat: no-repeat;\n  height: 67px;\n  width: 26px;\n}\n.female span::before {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  transform: translateY(-50%);\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n  background-repeat: no-repeat;\n  height: 67px;\n  width: 26px;\n}\n.calc-gender.female input:checked + span::before{\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ");\n\n}\n.calc-gender.male input:checked + span::before{\n  background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ");\n\n}\n.calc-gender input:checked + span::after{\n  content: ' ';\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translatex(-50%);\n  width: 100%;\n  height: 2px;\n  background: green;\n}\n.calc-gender input:checked + span {\n  color:#0B8344;\n}\n.after\\:absolute::after{\n  content: var(--tw-content);\n  position: absolute;\n}\n.after\\:top-full::after{\n  content: var(--tw-content);\n  top: 100%;\n}\n.after\\:my-8::after{\n  content: var(--tw-content);\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.after\\:block::after{\n  content: var(--tw-content);\n  display: block;\n}\n.after\\:h-px::after{\n  content: var(--tw-content);\n  height: 1px;\n}\n.after\\:w-full::after{\n  content: var(--tw-content);\n  width: 100%;\n}\n.after\\:bg-gray-400::after{\n  content: var(--tw-content);\n  --tw-bg-opacity: 1;\n  background-color: rgb(156 163 175 / var(--tw-bg-opacity));\n}\n.after\\:content-\\[\\\"\\\"\\]::after{\n  --tw-content: \"\";\n  content: var(--tw-content);\n}\n.hover\\:bg-\\[\\#b7f15f\\]:hover{\n  --tw-bg-opacity: 1;\n  background-color: rgb(183 241 95 / var(--tw-bg-opacity));\n}\n.hover\\:bg-\\[\\#2d2d2d\\]:hover{\n  --tw-bg-opacity: 1;\n  background-color: rgb(45 45 45 / var(--tw-bg-opacity));\n}\n.hover\\:bg-\\[\\#028523\\]:hover{\n  --tw-bg-opacity: 1;\n  background-color: rgb(2 133 35 / var(--tw-bg-opacity));\n}\n.hover\\:text-white:hover{\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.focus\\:not-sr-only:focus{\n  position: static;\n  width: auto;\n  height: auto;\n  padding: 0;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n  white-space: normal;\n}\n.group:hover .group-hover\\:fill-\\[\\#2d2d2d\\]{\n  fill: #2d2d2d;\n}\n.group:hover .group-hover\\:text-\\[\\#2d2d2d\\]{\n  --tw-text-opacity: 1;\n  color: rgb(45 45 45 / var(--tw-text-opacity));\n}\n@media (min-width: 640px){\n  .sm\\:w-1\\/2{\n    width: 50%;\n  }\n  .sm\\:text-5xl{\n    font-size: 3rem;\n    line-height: 1;\n  }\n}\n@media (min-width: 768px){\n  .md\\:left-\\[13\\%\\]{\n    left: 13%;\n  }\n  .md\\:order-last{\n    order: 9999;\n  }\n  .md\\:mx-16{\n    margin-left: 4rem;\n    margin-right: 4rem;\n  }\n  .md\\:mx-0{\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n  .md\\:mt-5{\n    margin-top: 1.25rem;\n  }\n  .md\\:mt-28{\n    margin-top: 7rem;\n  }\n  .md\\:mt-\\[87px\\]{\n    margin-top: 87px;\n  }\n  .md\\:mr-\\[5\\%\\]{\n    margin-right: 5%;\n  }\n  .md\\:mt-\\[93px\\]{\n    margin-top: 93px;\n  }\n  .md\\:mt-0{\n    margin-top: 0px;\n  }\n  .md\\:mb-0{\n    margin-bottom: 0px;\n  }\n  .md\\:mt-\\[83px\\]{\n    margin-top: 83px;\n  }\n  .md\\:mt-\\[60px\\]{\n    margin-top: 60px;\n  }\n  .md\\:ml-4{\n    margin-left: 1rem;\n  }\n  .md\\:mr-5{\n    margin-right: 1.25rem;\n  }\n  .md\\:flex{\n    display: flex;\n  }\n  .md\\:hidden{\n    display: none;\n  }\n  .md\\:h-\\[417px\\]{\n    height: 417px;\n  }\n  .md\\:h-\\[548px\\]{\n    height: 548px;\n  }\n  .md\\:h-\\[46px\\]{\n    height: 46px;\n  }\n  .md\\:h-\\[556px\\]{\n    height: 556px;\n  }\n  .md\\:h-16{\n    height: 4rem;\n  }\n  .md\\:w-\\[23\\%\\]{\n    width: 23%;\n  }\n  .md\\:w-1\\/2{\n    width: 50%;\n  }\n  .md\\:w-\\[53\\%\\]{\n    width: 53%;\n  }\n  .md\\:w-\\[60\\%\\]{\n    width: 60%;\n  }\n  .md\\:w-2\\/3{\n    width: 66.666667%;\n  }\n  .md\\:w-\\[53px\\]{\n    width: 53px;\n  }\n  .md\\:w-\\[47\\%\\]{\n    width: 47%;\n  }\n  .md\\:w-\\[436px\\]{\n    width: 436px;\n  }\n  .md\\:w-\\[31\\%\\]{\n    width: 31%;\n  }\n  .md\\:w-1\\/3{\n    width: 33.333333%;\n  }\n  .md\\:w-3\\/5{\n    width: 60%;\n  }\n  .md\\:w-\\[46\\%\\]{\n    width: 46%;\n  }\n  .md\\:w-1\\/4{\n    width: 25%;\n  }\n  .md\\:w-auto{\n    width: auto;\n  }\n  .md\\:w-full{\n    width: 100%;\n  }\n  .md\\:w-4\\/5{\n    width: 80%;\n  }\n  .md\\:w-10\\/12{\n    width: 83.333333%;\n  }\n  .md\\:flex-row{\n    flex-direction: row;\n  }\n  .md\\:p-0{\n    padding: 0px;\n  }\n  .md\\:py-\\[55px\\]{\n    padding-top: 55px;\n    padding-bottom: 55px;\n  }\n  .md\\:px-4{\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .md\\:pt-\\[62px\\]{\n    padding-top: 62px;\n  }\n  .md\\:pt-\\[87px\\]{\n    padding-top: 87px;\n  }\n  .md\\:pl-\\[70px\\]{\n    padding-left: 70px;\n  }\n  .md\\:pr-\\[57px\\]{\n    padding-right: 57px;\n  }\n  .md\\:text-\\[22px\\]{\n    font-size: 22px;\n  }\n  .md\\:text-5xl{\n    font-size: 3rem;\n    line-height: 1;\n  }\n  .md\\:text-4xl{\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n  .md\\:text-\\[16px\\]{\n    font-size: 16px;\n  }\n  .md\\:text-6xl{\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n  .md\\:text-xl{\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n  .md\\:leading-\\[69px\\]{\n    line-height: 69px;\n  }\n  .md\\:leading-\\[62px\\]{\n    line-height: 62px;\n  }\n  .md\\:leading-\\[28px\\]{\n    line-height: 28px;\n  }\n  .md\\:leading-\\[49px\\]{\n    line-height: 49px;\n  }\n}\n@media (min-width: 1024px){\n  .lg\\:mx-0{\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n  .lg\\:mx-32{\n    margin-left: 8rem;\n    margin-right: 8rem;\n  }\n  .lg\\:mt-7{\n    margin-top: 1.75rem;\n  }\n  .lg\\:mt-0{\n    margin-top: 0px;\n  }\n  .lg\\:mt-\\[70px\\]{\n    margin-top: 70px;\n  }\n  .lg\\:mt-12{\n    margin-top: 3rem;\n  }\n  .lg\\:mb-\\[39px\\]{\n    margin-bottom: 39px;\n  }\n  .lg\\:mt-16{\n    margin-top: 4rem;\n  }\n  .lg\\:mb-6{\n    margin-bottom: 1.5rem;\n  }\n  .lg\\:mt-\\[40px\\]{\n    margin-top: 40px;\n  }\n  .lg\\:mb-\\[14px\\]{\n    margin-bottom: 14px;\n  }\n  .lg\\:mt-\\[63px\\]{\n    margin-top: 63px;\n  }\n  .lg\\:mt-\\[39px\\]{\n    margin-top: 39px;\n  }\n  .lg\\:mb-10{\n    margin-bottom: 2.5rem;\n  }\n  .lg\\:mt-\\[59px\\]{\n    margin-top: 59px;\n  }\n  .lg\\:block{\n    display: block;\n  }\n  .lg\\:flex{\n    display: flex;\n  }\n  .lg\\:hidden{\n    display: none;\n  }\n  .lg\\:w-1\\/3{\n    width: 33.333333%;\n  }\n  .lg\\:w-1\\/5{\n    width: 20%;\n  }\n  .lg\\:w-1\\/2{\n    width: 50%;\n  }\n  .lg\\:w-\\[800px\\]{\n    width: 800px;\n  }\n  .lg\\:w-1\\/4{\n    width: 25%;\n  }\n  .lg\\:text-\\[30px\\]{\n    font-size: 30px;\n  }\n  .lg\\:text-\\[31px\\]{\n    font-size: 31px;\n  }\n  .lg\\:text-\\[61px\\]{\n    font-size: 61px;\n  }\n  .lg\\:text-\\[48px\\]{\n    font-size: 48px;\n  }\n  .lg\\:text-base{\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n  .lg\\:text-7xl{\n    font-size: 4.5rem;\n    line-height: 1;\n  }\n  .lg\\:leading-\\[49px\\]{\n    line-height: 49px;\n  }\n  .lg\\:leading-\\[62px\\]{\n    line-height: 62px;\n  }\n}\n@media (min-width: 1280px){\n  .xl\\:w-1\\/4{\n    width: 25%;\n  }\n  .xl\\:text-8xl{\n    font-size: 6rem;\n    line-height: 1;\n  }\n}\n@media (min-width: 1536px){\n  .\\32xl\\:text-9xl{\n    font-size: 8rem;\n    line-height: 1;\n  }\n}", "",{"version":3,"sources":["webpack://./node_modules/tailwindcss/base.css","webpack://./node_modules/tailwindcss/components.css","webpack://./node_modules/tailwindcss/utilities.css","webpack://./resources/styles/app.css","<no source>"],"names":[],"mappings":"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A;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,sBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;KAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,eAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,0EAAmB;EAAnB,8FAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;ACOnB;EACE,kCAAkC;AACpC;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;AAGE;EAAA,iBAA0B;EAA1B,oBAA0B;EAA1B;AAA0B;AAG1B;EAAA,iBAA2B;EAA3B;AAA2B;AAA3B;EAAA;IAAA,mBAA2B;IAA3B;EAA2B;AAAA;AAG3B;EAAA,kBAA0B;EAA1B;AAA0B;AAA1B;EAAA;IAAA,iBAA0B;IAA1B;EAA0B;AAAA;AAG1B;EAAA,mBAAyB;EAAzB;AAAyB;AAAzB;EAAA;IAAA,kBAAyB;IAAzB;EAAyB;AAAA;AAIzB;EAAA,mBAA6B;EAA7B,oBAA6B;EAA7B,oBAA6B;EAA7B;AAA6B;AAG7B;EAAA;AAAW;AAGX;EAAA,gBAAiC;EAAjC,2BAAiC;EAAjC;AAAiC;AAGjC;EAAA,gBAAgC;EAAhC,iBAAgC;EAAhC;AAAgC;AAAhC;EAAA;IAAA,mBAAgC;IAAhC;EAAgC;AAAA;AAGhC;EAAA,gBAA+B;EAA/B,kBAA+B;EAA/B;AAA+B;AAA/B;EAAA;IAAA,iBAA+B;IAA/B;EAA+B;AAAA;AAG/B;EAAA,gBAA8B;EAA9B,mBAA8B;EAA9B;AAA8B;AAA9B;EAAA;IAAA,kBAA8B;IAA9B;EAA8B;AAAA;AAG9B;EAAA,aAA0B;EAA1B;AAA0B;AAA1B;EAAA;IAAA;EAA0B;AAAA;AAM1B;EAAA,aAA0B;EAA1B;AAA0B;AAG1B;EAAA,gBAAiD;EAAjD,kBAAiD;EAAjD,yDAAiD;EAAjD,UAAiD;EAAjD;AAAiD;AAGjD;EAAA,kBAAmB;EAAnB;AAAmB;AAInB;EAAA,aAA0B;EAA1B;AAA0B;AAG1B;EAAA,gBAAyD;EAAzD,eAAyD;EAAzD,cAAyD;EAAzD,kBAAyD;EAAzD,yDAAyD;EAAzD,UAAyD;EAAzD;AAAyD;AAGzD;EAAA,eAA2B;EAA3B,cAA2B;EAA3B,kBAA2B;EAA3B;AAA2B;AAI7B;EACE,kGAA4E;EAC5E,sCAAsC;EACtC,gBAAyE;EAAzE,0BAAyE;EAAzE,4BAAyE;EAAzE,aAAyE;EAAzE,mBAAyE;EAAzE,oBAAyE;EAAzE,oBAAyE;EAAzE,6CAAyE;AAC3E;AAEA;;GAEG;AAED;EAAA,mBAA2O;EAA3O,kBAA2O;EAA3O,eAA2O;EAA3O,QAA2O;EAA3O,UAA2O;EAA3O,WAA2O;EAA3O,SAA2O;EAA3O,WAA2O;EAA3O,aAA2O;EAA3O,WAA2O;EAA3O,mBAA2O;EAA3O,uBAA2O;EAA3O,gBAA2O;EAA3O,kBAA2O;EAA3O,yDAA2O;EAA3O,kBAA2O;EAA3O,mBAA2O;EAA3O,UAA2O;EAA3O;AAA2O;AAA3O;EAAA;IAAA,mBAA2O;IAA3O,gBAA2O;IAA3O,mBAA2O;IAA3O,6BAA2O;IAA3O,YAA2O;IAA3O;EAA2O;AAAA;AAG7O;EACE,kBAAkB;AACpB;AACA;EACE,eAAe;EACf,UAAU;EACV,oBAAoB;AACtB;AAEE;EAAA,YAA6E;EAA7E,WAA6E;EAA7E,8BAA6E;EAA7E,eAA6E;EAA7E,mBAA6E;EAA7E,gBAA6E;EAA7E,oBAA6E;EAA7E;AAA6E;AAA7E;EAAA;IAAA;EAA6E;AAAA;AAG7E;EAAA,gBAAgE;EAAhE,mBAAgE;EAAhE,kBAAgE;EAAhE,eAAgE;EAAhE,mBAAgE;EAAhE,gBAAgE;EAAhE,oBAAgE;EAAhE;AAAgE;AAAhE;EAAA;IAAA,eAAgE;IAAhE;EAAgE;AAAA;AAGhE;EAAA,gBAAyF;EAAzF,oBAAyF;EAAzF,0CAAyF;EAAzF;AAAyF;AAAzF;EAAA,oBAAyF;EAAzF;AAAyF;AAAzF;EAAA;IAAA,mBAAyF;IAAzF;EAAyF;AAAA;AAAzF;EAAA;IAAA,eAAyF;IAAzF;EAAyF;AAAA;AAGzF;EAAA,oBAAqE;EAArE,uBAAqE;EAArE,gBAAqE;EAArE,oBAAqE;EAArE;AAAqE;AAArE;EAAA;IAAA,mBAAqE;IAArE;EAAqE;AAAA;AAArE;EAAA;IAAA,cAAqE;IAArE,eAAqE;IAArE;EAAqE;AAAA;AAGtE;EAAA,kBAAkC;EAAlC,oBAAkC;EAAlC;AAAkC;AAGnC;EACE,yDAA+C;EAC/C,oBAAkG;EAAlG,0BAAkG;EAAlG,0BAAkG;EAAlG,4BAAkG;EAAlG,mBAAkG;AACpG;AADE;EAAA;IAAA;EAAkG;AAAA;AAIlG;EAAA,eAA8B;EAA9B,mBAA8B;EAA9B;AAA8B;AAI9B;EAAA,gBAAwN;EAAxN,aAAwN;EAAxN;AAAwN;AAAxN;EAAA;IAAA,kBAAwN;IAAxN,kBAAwN;IAAxN,UAAwN;IAAxN,WAAwN;IAAxN,iBAAwN;IAAxN,kBAAwN;IAAxN,eAAwN;IAAxN,iBAAwN;IAAxN,kBAAwN;IAAxN,yDAAwN;IAAxN,kBAAwN;IAAxN,mBAAwN;IAAxN,iBAAwN;IAAxN,oBAAwN;IAAxN,UAAwN;IAAxN,0EAAwN;IAAxN,8FAAwN;IAAxN,uGAAwN;IAAxN;EAAwN;AAAA;AAGxN;EAAA;AAA2D;AAA3D;EAAA;IAAA,mBAA2D;IAA3D,aAA2D;IAA3D,eAA2D;IAA3D;EAA2D;AAAA;AAG3D;EAAA;AAAgD;AAAhD;EAAA;IAAA,gBAAgD;IAAhD,iBAAgD;IAAhD;EAAgD;AAAA;AAIhD;EAAA,gBAA+B;EAA/B,WAA+B;EAA/B,kBAA+B;EAA/B;AAA+B;AAIhC;EAAA,aAA6C;EAA7C,kBAA6C;EAA7C,mBAA6C;EAA7C,oBAA6C;EAA7C,oBAA6C;EAA7C;AAA6C;AAG5C;EAAA;AAAgB;AAGhB;EAAA,qBAA6E;EAA7E,mBAA6E;EAA7E,sBAA6E;EAA7E,yDAA6E;EAA7E;AAA6E;AAA7E;EAAA,kBAA6E;EAA7E;AAA6E;AAK7E;EAAA,gBAAoJ;EAApJ,WAAoJ;EAApJ,kBAAoJ;EAApJ,iBAAoJ;EAApJ,mBAAoJ;EAApJ,sBAAoJ;EAApJ,yDAAoJ;EAApJ,kBAAoJ;EAApJ,yDAAoJ;EAApJ,aAAoJ;EAApJ,mBAAoJ;EAApJ,oBAAoJ;EAApJ,oBAAoJ;EAApJ,6CAAoJ;EAApJ,8BAAoJ;EAApJ,mBAAoJ;EAApJ;AAAoJ;AAApJ;EAAA,sBAAoJ;EAApJ;AAAoJ;AAGtJ;EACE,yDAAkD;EAClD,wBAAgF;UAAhF,gBAAgF;EAAhF,0BAAgF;EAAhF,sCAAgF;EAAhF,4BAAgF;AAClF;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,WAAW;AACb;AACA;EACE,WAAW;EACX,cAAc;AAChB;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;AACxB;AACA;EACE,WAAW;AACb;AAEA;EACE,eAAe;AACjB;AAEA;EACE,wBAAwB;AAC1B;AAEA;EACE,aAAa;EACb,eAAe;EACf,oBAAoB;EACpB,iBAAiB;EACjB,kBAAkB;;AAEpB;AACA;EACE,eAAe;EACf,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,cAAc;;AAEhB;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;AAEA;EACE,eAAe;AACjB;AAEA;EACE,cAAc;EACd,eAAe;AACjB;AAEA;EACE,eAAe;AACjB;AAGA;EACE,WAAW;EACX,qBAAqB;EACrB,YAAY;EACZ,WAAW;EACX,2BAA2B;EAC3B,yDAA4C;AAC9C;AACA;EACE,aAAa;EACb,sBAAsB;AACxB;AACA;;EAEE,gBAAgB;AAClB;AAEA;EACE,cAAc;EACd,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,eAAe;EACf,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,WAAW;EAEX,wBAAwB;EACxB,4BAA4B;EAC5B,qBAAqB;EACrB,2BAA2B;EAC3B,yDAA0C;EAC1C,UAAU;EACV,YAAY;AACd;AACA;EACE,aAAa;AACf;AACA;EACE,aAAa;AACf;AACA;EACE,wDAA8C;EAC9C,YAAY;EACZ,WAAW;AACb;AACA;EACE,aAAa;;AAEf;AAEA;EACE,wDAAwC;AAC1C;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,kBAAkB;EAClB,YAAY;EACZ,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,aAAa;AACf;AACA;EACE,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,OAAO;EACP,2BAA2B;EAC3B,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,gBAAgB;AAClB;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,0CAA0C;EAC1C,WAAW;EACX,WAAW;EACX,uBAAuB;EACvB,aAAa;EACb,eAAe;AACjB;AAGA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,gBAAgB;EAChB,eAAe;EACf,kBAAkB;EAClB,kBAAkB;AACpB;AACA;EACE,aAAa;AACf;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,2BAA2B;EAC3B,wDAA6C;EAC7C,4BAA4B;EAC5B,YAAY;EACZ,WAAW;AACb;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,OAAO;EACP,2BAA2B;EAC3B,wDAA8C;EAC9C,4BAA4B;EAC5B,YAAY;EACZ,WAAW;AACb;AACA;EACE,wDAAwC;;AAE1C;AACA;EACE,wDAAuC;;AAEzC;AACA;EACE,YAAY;EACZ,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,2BAA2B;EAC3B,WAAW;EACX,WAAW;EACX,iBAAiB;AACnB;AAEA;EACE,aAAa;AACf;AA3YA;EAAA,2BCAA;EDAA;CCAA;ADAA;EAAA,2BCAA;EDAA;CCAA;ADAA;EAAA,2BCAA;EDAA,iBCAA;EDAA;CCAA;ADAA;EAAA,2BCAA;EDAA;CCAA;ADAA;EAAA,2BCAA;EDAA;CCAA;ADAA;EAAA,2BCAA;EDAA;CCAA;ADAA;EAAA,2BCAA;EDAA,mBCAA;EDAA;CCAA;ADAA;EAAA,iBCAA;EDAA;CCAA;ADAA;EAAA,mBCAA;EDAA;CCAA;ADAA;EAAA,mBCAA;EDAA;CCAA;ADAA;EAAA,mBCAA;EDAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA,iBCAA;EDAA,YCAA;EDAA,aCAA;EDAA,WCAA;EDAA,UCAA;EDAA,kBCAA;EDAA,WCAA;EDAA;CCAA;ADAA;EAAA;CCAA;ADAA;EAAA,qBCAA;EDAA;CCAA;ADAA;EAAA;IAAA;GCAA;EDAA;IAAA,gBCAA;IDAA;GCAA;CAAA;ADAA;EAAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA,kBCAA;IDAA;GCAA;EDAA;IAAA,iBCAA;IDAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA,kBCAA;IDAA;GCAA;EDAA;IAAA,mBCAA;IDAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA,gBCAA;IDAA;GCAA;EDAA;IAAA,mBCAA;IDAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA,mBCAA;IDAA;GCAA;EDAA;IAAA,mBCAA;IDAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;CAAA;ADAA;EAAA;IAAA,iBCAA;IDAA;GCAA;EDAA;IAAA,kBCAA;IDAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA,gBCAA;IDAA;GCAA;EDAA;IAAA,kBCAA;IDAA;GCAA;EDAA;IAAA;GCAA;EDAA;IAAA;GCAA;CAAA;ADAA;EAAA;IAAA;GCAA;EDAA;IAAA,gBCAA;IDAA;GCAA;CAAA;ADAA;EAAA;IAAA,gBCAA;IDAA;GCAA;CAAA","sourcesContent":["@tailwind base;\n","@tailwind components;\n","@tailwind utilities;\n","@import 'tailwindcss/base';\n@import 'tailwindcss/components';\n@import 'tailwindcss/utilities';\n\n@import \"https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.2.4/swiper-bundle.min.css\";\n@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap');\n\nbody {\n  font-family: 'Poppins', sans-serif;\n}\n\n.container {\n  max-width: 1280px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.title {\n  @apply pt-8 text-[#2d2d2d];\n}\n.h1 {\n  @apply text-2xl md:text-3xl;\n}\n.h2 {\n  @apply text-xl md:text-2xl;\n}\n.h3 {\n  @apply text-lg md:text-xl;\n}\n\n.content {\n  @apply text-sm text-[#2d2d2d];\n}\n.content p {\n  @apply mt-4;\n}\n.content ul {\n  @apply mt-4 list-disc list-inside;\n}\n.content h1 {\n  @apply text-2xl md:text-3xl mt-4;\n}\n.content h2 {\n  @apply text-xl md:text-2xl mt-4;\n}\n.content h3 {\n  @apply text-lg md:text-xl mt-4;\n}\n.content iframe {\n  @apply w-full h-80 md:h-96;\n}\n\n\n\n#pagination {\n  @apply justify-center flex;\n}\n#pagination span {\n  @apply bg-[#e7e7e7] mt-8 duration-150 opacity-100;\n}\n#pagination .swiper-pagination-bullet-active {\n  @apply bg-[#2d2d2d];\n}\n\n#diety-pagination {\n  @apply justify-center flex;\n}\n#diety-pagination span {\n  @apply bg-[#e7e7e7] mt-8 duration-150 opacity-100 w-3 h-3;\n}\n#diety-pagination .swiper-pagination-bullet-active {\n  @apply bg-[#2d2d2d] w-3 h-3;\n}\n\n\n.comment {\n  background-image: url(\"../images/comment.svg\"), url(\"../images/comment.svg\");\n  background-position: 0 0, right bottom;\n  @apply bg-no-repeat p-4 mt-4 text-sm text-[#2d2d2d] bg-[length:2rem_auto];\n}\n\n/* #nav {\n  @apply bg-[#f2f2f2] items-center px-4 lg:p-0 z-10 fixed inset-0 duration-150 opacity-0 flex invisible lg:static lg:visible lg:opacity-100 lg:bg-transparent overflow-y-auto lg:overflow-y-visible w-full justify-center;\n} */\n#nav.active {\n  @apply visible opacity-100 bg-[#f2f2f2] items-center px-4 lg:p-0 z-10 fixed inset-0 duration-150 opacity-0 flex invisible lg:static lg:visible lg:opacity-100 lg:bg-transparent overflow-y-auto lg:overflow-y-visible w-full justify-center;\n}\n\n#text {\n  margin-bottom: 8px;\n}\n.wpcf7-form-control-wrap {\n  margin-top: 8px;\n  border:1px;\n  border-color:#0B8344;\n}\n.primary_navigation {\n  @apply m-auto lg:flex w-full justify-between text-base text-black font-medium;\n}\n.primary_navigation>li {\n  @apply text-base text-black font-medium text-center my-4 lg:my-0;\n}\n.primary_navigation a {\n  @apply lg:text-base text-black font-semibold md:text-sm duration-150 hover:text-[#028523];\n}\n.primary_navigation>li>a {\n  @apply py-5 lg:block lg:text-base md:text-sm text-black font-semibold;\n}\n.primary_navigation .current-menu-item>a {\n\t@apply text-[#028523]  text-center;\n}\n\n.menu-item-has-children>a {\n  background-image: url(\"../images/sub-menu.svg\");\n  @apply bg-no-repeat bg-right bg-[length:1rem_auto] pr-8 pointer-events-none lg:pointer-events-auto;\n}\n\n.form-text {\n  @apply text-base font-semibold;\n}\n\n.sub-menu {\n  @apply hidden lg:absolute lg:bg-white w-10/12 lg:shadow lg:inset-x-4 lg:max-w-screen-lg lg:max-w-screen-xl lg:max-w-screen-2xl lg:mx-auto lg:pt-4 lg:px-8 lg:pb-8 lg:duration-150 lg:opacity-0 lg:invisible mt-4 lg:mt-0;\n}\nli:hover .sub-menu {\n  @apply block lg:visible lg:opacity-100 lg:flex lg:flex-wrap;\n}\n.sub-menu li {\n  @apply text-center lg:text-left lg:w-1/3 lg:mt-4;\n}\n\ntable {\n  @apply w-full mt-4 bg-[#f2f2f2];\n}\nth,\ntd {\n\t@apply p-4 text-sm text-[#2d2d2d] text-center;\n}\nth {\n  @apply font-bold;\n}\ntbody tr {\n  @apply border-t border-[#e7e7e7] border-solid duration-150 hover:bg-[#b7f15f];\n}\n\n.form-input,\n.form-select {\n  @apply border border-[#e7e7e7] border-solid mt-4 p-4 rounded text-sm text-[#2d2d2d] duration-150 outline-none focus:border-[#028523] bg-white w-full;\n}\n\n.form-select {\n  background-image: url(\"../images/form-select.svg\");\n  @apply bg-no-repeat bg-[length:1rem_auto] bg-[right_1rem_center] appearance-none;\n}\n\n.form__email, .form__name , .form__title, .form__message {\n  font-size: 14px;\n  margin-bottom: 8px;\n  width: 100%;\n}\n.wpcf7-form-control-wrap{\n  width: 100%;\n  display: block;\n}\n\n.wpcf7-form input{\n  width: 100%;\n  height: 50px;\n  border-radius:5px;\n  border-color: #0B8344 ;\n}\n.wpcf7-form textarea{\n  width: 100%;\n}\n\n.wpcf7-form p {\n  margin-top:10px;\n}\n\n.nav1.active + .nav-primary {\n  display: block!important;\n}\n\n.Footer_cities {\n  display: flex;\n  flex-wrap: wrap;\n  /* width: 83.333%; */\n  margin-left: auto;\n  margin-right: auto;\n\n}\n.Footer_cities li a {\n  font-size: 14px;\n  line-height: 22px;\n  margin-left: 3px;\n  margin-right: 3px;\n  color: #696969;\n\n}\n\n.secondary_navigation {\n  display: flex;\n  flex-direction: column;\n}\n\n.secondary_navigation li {\n  margin-top:10px;\n}\n\n.secondary_navigation li a {\n  color: #696969;\n  margin-top: 5px;\n}\n\n.margin-button {\n  margin-left: 5%;\n}\n\n\n.kalorycznosc::before {\n  content: '';\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n  background-position: center;\n  background-image: url(../images/bi_fire.png);\n}\n.tertiary_navigation {\n  display: flex;\n  flex-direction: column;\n}\n.tertiary_navigation li {\n\n  margin-top: 10px;\n} \n\n.tertiary_navigation li a {\n  color: #696969;\n  margin-top: 5px;\n}\n.answer {\n  display: none;\n}\n.menu-list {\n  display: none;\n}\n.menu-title {\n  cursor: pointer;\n  font-size: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 600;\n  line-height: 62px;\n}\n.menu-title::after {\n  content: '';\n  display: inline-block;\n  background-size: contain;\n  background-repeat: no-repeat;\n  display: inline-block;\n  background-position: center;\n  background-image: url(../images/arrow.png);\n  width:20px;\n  height: 10px;\n}\n.menu-title.active + .menu-list {\n  display:block;\n}\n.faq-list .faq.active .answer {\n  display:block;\n}\n.female-box {\n  background-image:url(../images/lady-black.png);\n  height: 67px;\n  width: 26px;\n}\n.female-box::checked + label{\n  color:#0B8344;\n\n}\n\n.female-box::checked {\n  background-image:url(../images/lady.png);\n}\n\n.radio-box{\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n.radio-box label div{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #FFFFFF;\n  border: 1px solid #B0B0B0;\n  border-radius: 5px;\n  padding:18px;\n  margin-top: 23px;\n  cursor: pointer;\n}\n.radio-box input{\n  display: none;\n}\n.radio-box label span{\n  position: relative;\n  padding-left: 35px;\n}\n.radio-box label span::before{\n  content: ' ';\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translatey(-50%);\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #D9D9D9;\n}\n.radio-box label input:checked + div{\n  background: #A6CD39;\n}\n.radio-box label input:checked + div span::before{\n  background: #fff;\n}\n.radio-box label input:checked + div span::after{\n  content: ' ';\n  position: absolute;\n  top: 40%;\n  left: 6px;\n  transform: translatey(-50%) rotate(-45deg);\n  width: 14px;\n  height: 7px;\n  border: 2px solid black;\n  border-top: 0;\n  border-right: 0;\n}\n\n\n.calc-gender{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding:18px;\n  margin-top: 23px;\n  cursor: pointer;\n  padding-left: 45px;\n  position: relative;\n}\n.calc-gender input{\n  display: none;\n}\n\n.male span::before {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  transform: translateY(-50%);\n  background-image:url(../images/man-black.png);\n  background-repeat: no-repeat;\n  height: 67px;\n  width: 26px;\n}\n.female span::before {\n  content: ' ';\n  position: absolute;\n  left: 0;\n  transform: translateY(-50%);\n  background-image:url(../images/lady-black.png);\n  background-repeat: no-repeat;\n  height: 67px;\n  width: 26px;\n}\n.calc-gender.female input:checked + span::before{\n  background-image:url(../images/lady.png);\n\n}\n.calc-gender.male input:checked + span::before{\n  background-image:url(../images/man.png);\n\n}\n.calc-gender input:checked + span::after{\n  content: ' ';\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  transform: translatex(-50%);\n  width: 100%;\n  height: 2px;\n  background: green;\n}\n\n.calc-gender input:checked + span {\n  color:#0B8344;\n}",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/styles/app.css":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[2]!./resources/styles/app.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[2]!./resources/styles/app.css",
      function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[1]!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].oneOf[1].use[2]!./resources/styles/app.css");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_1_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_oneOf_1_use_2_app_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./resources/images/arrow.png":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/arrow.png";

/***/ }),

/***/ "./resources/images/bi_fire.png":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/bi_fire.png";

/***/ }),

/***/ "./resources/images/comment.svg":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/comment.svg";

/***/ }),

/***/ "./resources/images/form-select.svg":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/form-select.svg";

/***/ }),

/***/ "./resources/images/lady-black.png":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/lady-black.png";

/***/ }),

/***/ "./resources/images/lady.png":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/lady.png";

/***/ }),

/***/ "./resources/images/man-black.png":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/man-black.png";

/***/ }),

/***/ "./resources/images/man.png":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/man.png";

/***/ }),

/***/ "./resources/images/sub-menu.svg":
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/sub-menu.svg";

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "app." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "bb2a47210a418726265a"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "sage:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/wp-content/themes/dietering/public/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatesage"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksage"] = self["webpackChunksage"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	!function() {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__.O(undefined, ["vendor/bud.app.editor","vendor/app"], function() { return __webpack_require__("./node_modules/@roots/bud-server/lib/cjs/client/index.js?name=bud&bud.overlay=true&bud.indicator=true&path=/__bud/hmr"); })
/******/ 	__webpack_require__.O(undefined, ["vendor/bud.app.editor","vendor/app"], function() { return __webpack_require__("./node_modules/@roots/bud-server/lib/cjs/client/proxy-click-interceptor.js"); })
/******/ 	__webpack_require__.O(undefined, ["vendor/bud.app.editor","vendor/app"], function() { return __webpack_require__(683); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor/bud.app.editor","vendor/app"], function() { return __webpack_require__("./resources/styles/app.css"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=app.js.map