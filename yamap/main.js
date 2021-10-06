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

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./style.css */ \"./src/style.css?0469\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n<head>\\r\\n    <meta charset=\\\"UTF-8\\\">\\r\\n    <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\r\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n    <title>YaMap</title>\\r\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\">\\r\\n</head>\\r\\n<body>\\r\\n    <div id=\\\"map\\\"></div>\\r\\n    <script type=\\\"template\\\" id=\\\"addFormTemplate\\\">\\r\\n        <div class=\\\"review-list\\\"></div>\\r\\n        <div class=\\\"form\\\" data-role=\\\"review-form\\\">\\r\\n            <h3>Отзыв:</h3>\\r\\n            <div class=\\\"field\\\">\\r\\n                <input data-role=\\\"review-name\\\" type=\\\"text\\\" placeholder=\\\"Укажите ваше имя\\\">\\r\\n            </div>\\r\\n            <div class=\\\"field\\\">\\r\\n                <input data-role=\\\"review-place\\\" type=\\\"text\\\" placeholder=\\\"Укажите место\\\">\\r\\n            </div>\\r\\n            <div class=\\\"field\\\">\\r\\n                <textarea data-role=\\\"review-text\\\" placeholder=\\\"Оставьте отзыв\\\" rows=\\\"5\\\"></textarea>\\r\\n            </div>\\r\\n    \\r\\n            <button data-role=\\\"review-add\\\">Добавить</button>\\r\\n            <span class=\\\"form-error\\\"></span>\\r\\n        </div>\\r\\n    </script>\\r\\n</body>\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://yamap/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://yamap/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/style.css?e320":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://yamap/./src/style.css?");

/***/ }),

/***/ "./src/geoReview.js":
/*!**************************!*\
  !*** ./src/geoReview.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GeoReview)\n/* harmony export */ });\n/* harmony import */ var _interactiveMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactiveMap */ \"./src/interactiveMap.js\");\n\r\n\r\nclass GeoReview {\r\n    constructor() {\r\n        this.formTemplate = document.querySelector('#addFormTemplate').innerHTML;\r\n        this.map = new _interactiveMap__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('map', this.onClick.bind(this));\r\n        this.map.init().then(this.onInit.bind(this));\r\n    }\r\n\r\n    async onInit() {\r\n        const coords = await this.callApi('coords') \r\n            \r\n            for (const item of coords) {\r\n                for (let i=0; i < item.total; i++) {\r\n                    this.map.createPlacemark(item.coords);\r\n                }\r\n            }\r\n        \r\n        document.body.addEventListener('click', this.onDocumentClick.bind(this));\r\n    }\r\n\r\n    async callApi(method, body = {}) {\r\n        const res = await fetch(`/geo-review/${method}`, {\r\n            method: 'post',\r\n            body: JSON.stringify(body),\r\n        });\r\n        return await res.json();\r\n    }\r\n\r\n    createForm(coords, reviews) {\r\n        const root = document.createElement('div');\r\n        root.innerHTML = this.formTemplate;\r\n        const reviewForm = root.querySelector('[data-role=review-form]');\r\n        reviewForm.dataset.coords = JSON.stringify(coords);\r\n\r\n        for (const item of reviews) {\r\n            const div = document.createElement('div');\r\n            div.classList.add('review-item');\r\n            div.innerHTML = `\r\n            <div>\r\n                <b>${item.name}</b> [${item.place}]\r\n            </div>\r\n            <div>${item.text}</div>\r\n            `;\r\n            reviewList.appendChild(div);\r\n        }\r\n\r\n        return root;\r\n    }\r\n\r\n    async onClick(coords) {\r\n        this.map.openBalloon(coords, 'Loading...');\r\n        const list = await this.callApi('list', {coords});\r\n        const form = this.createForm(coords, list);\r\n        this.map.setBalloonContent(form.innerHTML);\r\n    }\r\n    \r\n    async onDocumentClick(e) {\r\n        if (e.target.dataset.role === 'review-add') {\r\n          const reviewForm = document.querySelector('[data-role=review-form]');\r\n          const coords = JSON.parse(reviewForm.dataset.coords);\r\n          const data = {\r\n            coords,\r\n            review: {\r\n              name: document.querySelector('[data-role=review-name]').value,\r\n              place: document.querySelector('[data-role=review-place]').value,\r\n              text: document.querySelector('[data-role=review-text]').value,\r\n            },\r\n          };\r\n    \r\n          try {\r\n            await this.callApi('add', data);\r\n            this.map.createPlacemark(coords);\r\n            this.map.closeBalloon();\r\n          } catch (e) {\r\n            const formError = document.querySelector('.form-error');\r\n            formError.innerText = e.message;\r\n          }\r\n        }\r\n      }\r\n}\n\n//# sourceURL=webpack://yamap/./src/geoReview.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _geoReview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geoReview */ \"./src/geoReview.js\");\n\r\n\r\n\r\nnew _geoReview__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\n//# sourceURL=webpack://yamap/./src/index.js?");

/***/ }),

/***/ "./src/interactiveMap.js":
/*!*******************************!*\
  !*** ./src/interactiveMap.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InteractiveMap)\n/* harmony export */ });\nclass InteractiveMap {\r\n    constructor(mapId, onClick) {\r\n        this.mapId = mapId;\r\n        this.onClick = onClick;\r\n    }\r\n\r\n    async init() {\r\n        await this.injectYMapsScript();\r\n        await this.loadYMaps();\r\n        this.initMap();\r\n    }\r\n\r\n    injectYMapsScript() {\r\n        return new Promise((resolve) => {\r\n            const ymapsScript = document.createElement('script');\r\n            ymapsScript.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';\r\n            document.body.appendChild(ymapsScript);\r\n            ymapsScript.addEventListener('load', resolve);\r\n        });\r\n    }\r\n\r\n    loadYMaps() {\r\n        return new Promise((resolve) => ymaps.ready(resolve));\r\n    }\r\n\r\n    initMap() {\r\n        this.clusterer = new ymaps.Clusterer({\r\n            groupByCoordinates: true,\r\n            clusterDisableClickZoom: true,\r\n            clusterOpenBalloonOnClick: false,\r\n        });\r\n        this.clusterer.events.add('click', (e) => {\r\n            const coords = e.get('target').geometry.getCoordinates();\r\n            this.onClick(coords);\r\n        });\r\n        this.map = new ymaps.Map(this.mapId, {\r\n            center: [55.76, 37.64],\r\n            zoom: 12,\r\n        });\r\n        this.map.events.add('click', (e) => this.onClick(e.get('coords')));\r\n        this.map.geoObjects.add(this.clusterer);\r\n    }\r\n\r\n    openBalloonContent(coords, content) {\r\n        this.map.balloon.open(coords, content);\r\n    }\r\n\r\n    setBalloonContent(content) {\r\n        this.map.balloon.setData(content);\r\n    }\r\n\r\n    closeBalloon() {\r\n        this.map.balloon.close();\r\n    }\r\n\r\n    createPlacemark(coords) {\r\n        const placemark = new ymaps.Placemark(coords);\r\n        placemark.events.add('click', (e) => {\r\n            const coords = e.get('target').geometry.getCoordinates();\r\n            this.onClick(coords);\r\n        });\r\n        this.clusterer.add(placemark);\r\n    }\r\n}\n\n//# sourceURL=webpack://yamap/./src/interactiveMap.js?");

/***/ }),

/***/ "./src/style.css?0469":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b88d04fba731603756b1.css\";\n\n//# sourceURL=webpack://yamap/./src/style.css?");

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/style.css?e320");
/******/ 	
/******/ })()
;