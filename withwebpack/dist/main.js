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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n\n\nconst test = new _script_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0.75, 8);\n\nlet set1 = test.set('apple', 'red');\nlet set2 = test.set('banana', 'yellow');\nlet set3 = test.set('carrot', 'orange');\nlet set4 = test.set('dog', 'brown');\nlet set5 = test.set('elephant', 'gray');\nlet set6 = test.set('frog', 'green');\nlet set7 = test.set('grape', 'purple');\nlet set8 = test.set('hat', 'black');\nlet set9 = test.set('ice cream', 'white');\nlet set10 = test.set('jacket', 'blue');\nlet set11 = test.set('kite', 'pink');\nlet set12 = test.set('lion', 'golden');\n\n\n\nconsole.log(set1);\nconsole.log(12345);\n\n//# sourceURL=webpack://withwebpack/./src/index.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Hashmap)\n/* harmony export */ });\nclass Hashmap{\n\n    constructor(load_factor, capacity){\n        this.load_factor = load_factor;\n        this.capacity = capacity;\n        this.buckets = [];\n\n    }\n\n    hashKey(key){\n        let hashcode = 0;\n        const prime_number = 31;\n        for(let i = 0; i < key.length; i++){\n            hashcode = prime_number + hashcode + key.charCodeAt(i);\n            hashcode = hashcode % 16;\n        }\n        return hashcode;\n    }\n\n    set(key, value){\n        let set_values = [];\n        let hashcode = this.hashKey(key);  \n        let buckets = this.buckets;\n        let numb = 0;\n        console.log(buckets);\n        if(buckets.length > 0){\n            console.log(buckets.length);\n            for(let bucket of buckets){\n                console.log(bucket);\n                if(bucket.hashcode == hashcode){\n                    if((bucket.key == key && bucket.value == value)){\n                        let bucket_size = bucket.set_values.length;\n                        let buckets_size = buckets.length;\n                        let load_factor_a = bucket_size/buckets_size;\n                        let capacity_a = bucket_size;\n\n                        if(load_factor_a < this.load_factor && load_factor_a < 1 && load_factor_a > 0.75){\n                            let busket = {};\n                            busket.hashcode = hashcode;\n                            busket.key = key;\n                            set_values.push(value);\n                            busket.set_values = set_values;\n                            this.buckets.push(busket);\n                            numb = 1;\n                            return {hashcode, value, numb};\n                        }else{\n                            let buckets = this.buckets;\n                            numb = 2;\n                            return {hashcode, value, numb};\n                        }\n                    }else{                            \n                        let busket = {};\n                        busket.hashcode = hashcode;\n                        busket.key = key;\n                        set_values.push(value);\n                        busket.set_values = set_values;\n                        this.buckets.push(busket);\n                        numb = 3;\n                        return {hashcode, value, numb};\n                    }\n                }else{\n                        let busket = {};\n                        busket.hashcode = hashcode;\n                        busket.key = key;\n                        let set_values = [];\n                        set_values.push(value);\n                        busket.set_values = set_values;\n                        this.buckets.push(busket);\n                        numb = 4;\n                        return {hashcode, value, numb};\n                }\n            }\n        }else{\n                        let busket = {};\n                        busket.hashcode = hashcode;\n                        busket.key = key;\n                        let set_values = [];\n                        set_values.push(value);\n                        busket.set_values = set_values;\n                        this.buckets.push(busket);\n                        numb = 5;\n                        return {hashcode, value, numb};\n        }\n        numb = 6;          \n        return {hashcode, set_values, numb};                \n    }\n\n    get(key){\n        let index = key;\n        if (index < 0 || index >= buckets.length) {\n            throw new Error(\"Trying to access index out of bounds\");\n            return;\n        }\n\n        let hashcode = hashKey(key);\n        let values = set(key,null).set_values;\n        return values;\n    }\n\n    has(key){\n        let index = key;\n        if (index < 0 || index >= buckets.length) {\n            throw new Error(\"Trying to access index out of bounds\");\n            return;\n        }\n\n        let hashcode = hashKey(key);\n        let values = set(key,null).set_values;\n        if(values.length >= 1){\n            return true;\n        }else{\n            return false;\n        }\n    }\n\n    remove(key){\n        let hashcode = hashKey(key);\n        let buckets = this.buckets;\n        let count = 0;\n        let state = false;\n        for (bucket of buckets){\n            if(bucket.hashcode == hashcode){\n                state = true;\n                break;\n            }\n            count = count + 1;\n        }\n        if(state){\n            buckets.splice(count, 1);\n        }\n        this.buckets = buckets;\n        return state;\n    }\n\n    length(){\n        let buckets = this.buckets;\n        return buckets.length;\n    }\n\n    clear(){\n        this.buckets = [];\n    }\n\n    keys(){\n        let buckets = this.buckets;\n        let keys = [];\n        for(bucket of buckets){\n            if(!keys.includes(bucket.key)){\n                keys.push(bucket.key);\n            }\n        }\n        return keys;\n    }\n\n    values(){\n        let buckets = this.buckets;\n        let values = [];\n        for(bucket of buckets){\n            values = values.concat(bucket.set_values);\n        }\n        return values;\n    }\n\n    entries(){\n        let bucket = this.buckets;\n        let entry_a = [];\n        for(bucket of buckets){\n            let key = bucket.key;\n            let values = bucket.set_values;\n            entry_b = [];\n            for(value of values){\n                let enrty_c = [key,value];\n                entry_b.push(enrty_c);\n            }\n            entry_a.push(entry_b);\n        }\n        return entry_a;\n    }            \n}\n\n//# sourceURL=webpack://withwebpack/./src/script.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;