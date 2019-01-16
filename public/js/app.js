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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(9);
var isBuffer = __webpack_require__(48);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(29)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(50);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(10);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(10);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.21
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ("development" !== 'production' && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  
  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    try {
      return fn.apply(null, arguments)
    } finally {
      useMacroTask = false;    
    }
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }

      if (renderCompleted) {
        contexts.length = 0;
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ("development" !== 'production' && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        if (!(key in hash) && !(camelizedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + camelizedKey)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ("development" !== 'production' && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.21';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (true) {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      (el.tagName === 'TEXTAREA' || el.tagName === 'INPUT') &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
  el.plain = false;
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
  el.plain = false;
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (name === 'click') {
    if (modifiers.right) {
      name = 'contextmenu';
      delete modifiers.right;
    } else if (modifiers.middle) {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = {
    value: value.trim()
  };
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  if (true) {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (true) {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  if (true) {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally'
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    if (true) {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function closeElement (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        if (true) {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else if (true) {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      closeElement(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        if (true) {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var res;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if (true) {
      if (el.tag === 'template') {
        warn$2("<template> cannot be keyed. Place the key on real elements instead.");
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys."
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else if (true) {
      warn$2(
        ("Invalid v-for expression: " + exp)
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else if (true) {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      /* istanbul ignore if */
      if ("development" !== 'production' && el.attrsMap['v-for']) {
        warn$2(
          "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
          "(v-for takes higher priority). Use a wrapper <template> for the " +
          "scoped slot to make it clearer.",
          true
        );
      }
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (el.tag !== 'template' && !el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (
          "development" !== 'production' &&
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      if (true) {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true');
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !(isReservedTag(el.tag) && !el.component); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    /* istanbul ignore if */
    {
      res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
    }
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (
  ident,
  type,
  text,
  errors
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
    }
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    if (true) {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    if (true) {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    if (true) {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      if (true) {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        if (true) {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(23).setImmediate))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*!
  * vue-router v3.0.2
  * (c) 2018 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if ("development" !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

function extend (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    // used by devtools to display a router-view badge
    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
}

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (true) {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    "development" !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
      ? 'router-link-active'
      : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
      ? 'router-link-exact-active'
      : globalExactActiveClass;
    var activeClass = this.activeClass == null
      ? activeClassFallback
      : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
      ? exactActiveClassFallback
      : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
}

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (true) {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (true) {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (true) {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if ("development" !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (true) {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */

function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params = extend(extend({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (true) {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

/*  */



function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (true) {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
      ? originalRedirect(createRoute(record, location, null, router))
      : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (true) {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (true) {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (true) {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */

var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  // Fix for #2195 Add optional third attribute to workaround a bug in safari https://bugs.webkit.org/show_bug.cgi?id=182678
  window.history.replaceState({ key: getStateKey() }, '', window.location.href.replace(window.location.origin, ''));
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (true) {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(router, to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (true) {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          "development" !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (
    instances[key] &&
    !instances[key]._isBeingDestroyed // do not reuse being destroyed instance
  ) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */

var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (supportsScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = decodeURI(window.location.pathname);
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */

var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : decodeURI(href.slice(index + 1))
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */

var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */



var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (true) {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  "development" !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '3.0.2';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["a"] = (VueRouter);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(51);
var buildURL = __webpack_require__(53);
var parseHeaders = __webpack_require__(54);
var isURLSameOrigin = __webpack_require__(55);
var createError = __webpack_require__(11);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(56);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(57);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(52);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(15);
module.exports = __webpack_require__(87);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__video__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__video__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_list__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__video_list__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_video_js_dist_video_min_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_video_js_dist_video_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_video_js_dist_video_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__learn__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__learn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__learn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comments__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__comments___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__comments__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue_router__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_App__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_App__);
// import './bootstrap'












window.Vue = __webpack_require__(6);
__WEBPACK_IMPORTED_MODULE_7_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_8_vue_router__["a" /* default */]);

new __WEBPACK_IMPORTED_MODULE_7_vue___default.a({
    router: __WEBPACK_IMPORTED_MODULE_9__router__["a" /* default */],
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_10__components_App___default.a }
}).$mount('#app');

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 播放页面禁止滚动
//pc
$(document).on('mouseover', '.video-part', function () {
    $("body").css("overflow", "hidden");
    $(".change-lesson").css("display", "block");
});
$(document).on('mouseout', '.video-part', function () {
    $("body").css("overflow", "scroll");
    $(".change-lesson").css("display", "none");
});
//mobile
$(document).on('touchstart', '.video-part', function () {
    $("body").css("overflow", "hidden");
    $(".change-lesson").css("display", "block");
});
$(document).on('touchend', '.video-part', function () {
    $("body").css("overflow", "scroll");
    $(".change-lesson").css("display", "none");
});
$(document).ready(function () {});

/***/ }),
/* 17 */
/***/ (function(module, exports) {

$(document).on('mouseover', '.video-list-item', function () {
   $(this).css('background-color', '#EEE');
});
$(document).on('mouseout', '.video-list-item', function () {
   $(this).css('background-color', '#fff');
});
//mobile
$(document).on('click', '.video-list-item', function () {
   $(this).css('background-color', '#EEE');
});

// $(document).on('click', '.spec', function(){
//     $(this).addClass('active');
// });

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * @license
 * Video.js 7.1.0 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.videojs=t()}(this,function(){var d="7.1.0",e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var i,g="undefined"!=typeof window?window:"undefined"!=typeof e?e:"undefined"!=typeof self?self:{},r={},n=Object.freeze({default:r}),a=n&&r||n,s="undefined"!=typeof e?e:"undefined"!=typeof window?window:{};"undefined"!=typeof document?i=document:(i=s["__GLOBAL_DOCUMENT_CACHE@4"])||(i=s["__GLOBAL_DOCUMENT_CACHE@4"]=a);var p=i,o=void 0,u="info",l=[],c=function(e,t){var i=o.levels[u],r=new RegExp("^("+i+")$");if("log"!==e&&t.unshift(e.toUpperCase()+":"),l&&l.push([].concat(t)),t.unshift("VIDEOJS:"),g.console){var n=g.console[e];n||"debug"!==e||(n=g.console.info||g.console.log),n&&i&&r.test(e)&&n[Array.isArray(t)?"apply":"call"](g.console,t)}};(o=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];c("log",t)}).levels={all:"debug|log|warn|error",off:"",debug:"debug|log|warn|error",info:"log|warn|error",warn:"warn|error",error:"error",DEFAULT:u},o.level=function(e){if("string"==typeof e){if(!o.levels.hasOwnProperty(e))throw new Error('"'+e+'" in not a valid log level');u=e}return u},o.history=function(){return l?[].concat(l):[]},o.history.clear=function(){l&&(l.length=0)},o.history.disable=function(){null!==l&&(l.length=0,l=null)},o.history.enable=function(){null===l&&(l=[])},o.error=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return c("error",t)},o.warn=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return c("warn",t)},o.debug=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return c("debug",t)};var f=o;var m=function(e){for(var t="",i=0;i<arguments.length;i++)t+=e[i].replace(/\n\r?\s*/g,"")+(arguments[i+1]||"");return t},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},_=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},b=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},h=function(e,t){return e.raw=t,e},T=Object.prototype.toString,S=function(e){return E(e)?Object.keys(e):[]};function k(t,i){S(t).forEach(function(e){return i(t[e],e)})}function C(i){for(var e=arguments.length,t=Array(1<e?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];return Object.assign?Object.assign.apply(Object,[i].concat(t)):(t.forEach(function(e){e&&k(e,function(e,t){i[t]=e})}),i)}function E(e){return!!e&&"object"===("undefined"==typeof e?"undefined":v(e))}function w(e){return E(e)&&"[object Object]"===T.call(e)&&e.constructor===Object}function A(e,t){if(!e||!t)return"";if("function"==typeof g.getComputedStyle){var i=g.getComputedStyle(e);return i?i[t]:""}return""}var L=h(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."],["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."]);function P(e){return"string"==typeof e&&/\S/.test(e)}function O(e){if(/\s/.test(e))throw new Error("class has illegal whitespace characters")}function I(){return p===g.document}function x(e){return E(e)&&1===e.nodeType}function D(){try{return g.parent!==g.self}catch(e){return!0}}function R(r){return function(e,t){if(!P(e))return p[r](null);P(t)&&(t=p.querySelector(t));var i=x(t)?t:p;return i[r]&&i[r](e)}}function M(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"div",i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3],n=p.createElement(e);return Object.getOwnPropertyNames(i).forEach(function(e){var t=i[e];-1!==e.indexOf("aria-")||"role"===e||"type"===e?(f.warn(m(L,e,t)),n.setAttribute(e,t)):"textContent"===e?U(n,t):n[e]=t}),Object.getOwnPropertyNames(t).forEach(function(e){n.setAttribute(e,t[e])}),r&&te(n,r),n}function U(e,t){return"undefined"==typeof e.textContent?e.innerText=t:e.textContent=t,e}function N(e,t){t.firstChild?t.insertBefore(e,t.firstChild):t.appendChild(e)}function B(e,t){return O(t),e.classList?e.classList.contains(t):(i=t,new RegExp("(^|\\s)"+i+"($|\\s)")).test(e.className);var i}function j(e,t){return e.classList?e.classList.add(t):B(e,t)||(e.className=(e.className+" "+t).trim()),e}function F(e,t){return e.classList?e.classList.remove(t):(O(t),e.className=e.className.split(/\s+/).filter(function(e){return e!==t}).join(" ")),e}function H(e,t,i){var r=B(e,t);if("function"==typeof i&&(i=i(e,t)),"boolean"!=typeof i&&(i=!r),i!==r)return i?j(e,t):F(e,t),e}function V(i,r){Object.getOwnPropertyNames(r).forEach(function(e){var t=r[e];null===t||"undefined"==typeof t||!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})}function q(e){var t={},i=",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";if(e&&e.attributes&&0<e.attributes.length)for(var r=e.attributes,n=r.length-1;0<=n;n--){var a=r[n].name,s=r[n].value;"boolean"!=typeof e[a]&&-1===i.indexOf(","+a+",")||(s=null!==s),t[a]=s}return t}function W(e,t){return e.getAttribute(t)}function z(e,t,i){e.setAttribute(t,i)}function G(e,t){e.removeAttribute(t)}function X(){p.body.focus(),p.onselectstart=function(){return!1}}function Y(){p.onselectstart=function(){return!0}}function $(e){if(e&&e.getBoundingClientRect&&e.parentNode){var t=e.getBoundingClientRect(),i={};return["bottom","height","left","right","top","width"].forEach(function(e){void 0!==t[e]&&(i[e]=t[e])}),i.height||(i.height=parseFloat(A(e,"height"))),i.width||(i.width=parseFloat(A(e,"width"))),i}}function K(e){var t=void 0;if(e.getBoundingClientRect&&e.parentNode&&(t=e.getBoundingClientRect()),!t)return{left:0,top:0};var i=p.documentElement,r=p.body,n=i.clientLeft||r.clientLeft||0,a=g.pageXOffset||r.scrollLeft,s=t.left+a-n,o=i.clientTop||r.clientTop||0,u=g.pageYOffset||r.scrollTop,l=t.top+u-o;return{left:Math.round(s),top:Math.round(l)}}function Q(e,t){var i={},r=K(e),n=e.offsetWidth,a=e.offsetHeight,s=r.top,o=r.left,u=t.pageY,l=t.pageX;return t.changedTouches&&(l=t.changedTouches[0].pageX,u=t.changedTouches[0].pageY),i.y=Math.max(0,Math.min(1,(s-u+a)/a)),i.x=Math.max(0,Math.min(1,(l-o)/n)),i}function J(e){return E(e)&&3===e.nodeType}function Z(e){for(;e.firstChild;)e.removeChild(e.firstChild);return e}function ee(e){return"function"==typeof e&&(e=e()),(Array.isArray(e)?e:[e]).map(function(e){return"function"==typeof e&&(e=e()),x(e)||J(e)?e:"string"==typeof e&&/\S/.test(e)?p.createTextNode(e):void 0}).filter(function(e){return e})}function te(t,e){return ee(e).forEach(function(e){return t.appendChild(e)}),t}function ie(e,t){return te(Z(e),t)}function re(e){return void 0===e.button&&void 0===e.buttons||(0===e.button&&void 0===e.buttons||0===e.button&&1===e.buttons)}var ne=R("querySelector"),ae=R("querySelectorAll"),se=Object.freeze({isReal:I,isEl:x,isInFrame:D,createEl:M,textContent:U,prependTo:N,hasClass:B,addClass:j,removeClass:F,toggleClass:H,setAttributes:V,getAttributes:q,getAttribute:W,setAttribute:z,removeAttribute:G,blockTextSelection:X,unblockTextSelection:Y,getBoundingClientRect:$,findPosition:K,getPointerPosition:Q,isTextNode:J,emptyEl:Z,normalizeContent:ee,appendContent:te,insertContent:ie,isSingleLeftClick:re,$:ne,$$:ae}),oe=1;function ue(){return oe++}var le={},ce="vdata"+(new Date).getTime();function he(e){var t=e[ce];return t||(t=e[ce]=ue()),le[t]||(le[t]={}),le[t]}function de(e){var t=e[ce];return!!t&&!!Object.getOwnPropertyNames(le[t]).length}function pe(t){var e=t[ce];if(e){delete le[e];try{delete t[ce]}catch(e){t.removeAttribute?t.removeAttribute(ce):t[ce]=null}}}function fe(e,t){var i=he(e);0===i.handlers[t].length&&(delete i.handlers[t],e.removeEventListener?e.removeEventListener(t,i.dispatcher,!1):e.detachEvent&&e.detachEvent("on"+t,i.dispatcher)),Object.getOwnPropertyNames(i.handlers).length<=0&&(delete i.handlers,delete i.dispatcher,delete i.disabled),0===Object.getOwnPropertyNames(i).length&&pe(e)}function me(t,i,e,r){e.forEach(function(e){t(i,e,r)})}function ge(e){function t(){return!0}function i(){return!1}if(!e||!e.isPropagationStopped){var r=e||g.event;for(var n in e={},r)"layerX"!==n&&"layerY"!==n&&"keyLocation"!==n&&"webkitMovementX"!==n&&"webkitMovementY"!==n&&("returnValue"===n&&r.preventDefault||(e[n]=r[n]));if(e.target||(e.target=e.srcElement||p),e.relatedTarget||(e.relatedTarget=e.fromElement===e.target?e.toElement:e.fromElement),e.preventDefault=function(){r.preventDefault&&r.preventDefault(),e.returnValue=!1,r.returnValue=!1,e.defaultPrevented=!0},e.defaultPrevented=!1,e.stopPropagation=function(){r.stopPropagation&&r.stopPropagation(),e.cancelBubble=!0,r.cancelBubble=!0,e.isPropagationStopped=t},e.isPropagationStopped=i,e.stopImmediatePropagation=function(){r.stopImmediatePropagation&&r.stopImmediatePropagation(),e.isImmediatePropagationStopped=t,e.stopPropagation()},e.isImmediatePropagationStopped=i,null!==e.clientX&&void 0!==e.clientX){var a=p.documentElement,s=p.body;e.pageX=e.clientX+(a&&a.scrollLeft||s&&s.scrollLeft||0)-(a&&a.clientLeft||s&&s.clientLeft||0),e.pageY=e.clientY+(a&&a.scrollTop||s&&s.scrollTop||0)-(a&&a.clientTop||s&&s.clientTop||0)}e.which=e.charCode||e.keyCode,null!==e.button&&void 0!==e.button&&(e.button=1&e.button?0:4&e.button?1:2&e.button?2:0)}return e}var ye=!1;!function(){try{var e=Object.defineProperty({},"passive",{get:function(){ye=!0}});g.addEventListener("test",null,e),g.removeEventListener("test",null,e)}catch(e){}}();var ve=["touchstart","touchmove"];function _e(s,e,t){if(Array.isArray(e))return me(_e,s,e,t);var o=he(s);if(o.handlers||(o.handlers={}),o.handlers[e]||(o.handlers[e]=[]),t.guid||(t.guid=ue()),o.handlers[e].push(t),o.dispatcher||(o.disabled=!1,o.dispatcher=function(e,t){if(!o.disabled){e=ge(e);var i=o.handlers[e.type];if(i)for(var r=i.slice(0),n=0,a=r.length;n<a&&!e.isImmediatePropagationStopped();n++)try{r[n].call(s,e,t)}catch(e){f.error(e)}}}),1===o.handlers[e].length)if(s.addEventListener){var i=!1;ye&&-1<ve.indexOf(e)&&(i={passive:!0}),s.addEventListener(e,o.dispatcher,i)}else s.attachEvent&&s.attachEvent("on"+e,o.dispatcher)}function be(e,t,i){if(de(e)){var r=he(e);if(r.handlers){if(Array.isArray(t))return me(be,e,t,i);var n=function(e,t){r.handlers[t]=[],fe(e,t)};if(void 0!==t){var a=r.handlers[t];if(a)if(i){if(i.guid)for(var s=0;s<a.length;s++)a[s].guid===i.guid&&a.splice(s--,1);fe(e,t)}else n(e,t)}else for(var o in r.handlers)Object.prototype.hasOwnProperty.call(r.handlers||{},o)&&n(e,o)}}}function Te(e,t,i){var r=de(e)?he(e):{},n=e.parentNode||e.ownerDocument;if("string"==typeof t?t={type:t,target:e}:t.target||(t.target=e),t=ge(t),r.dispatcher&&r.dispatcher.call(e,t,i),n&&!t.isPropagationStopped()&&!0===t.bubbles)Te.call(null,n,t,i);else if(!n&&!t.defaultPrevented){var a=he(t.target);t.target[t.type]&&(a.disabled=!0,"function"==typeof t.target[t.type]&&t.target[t.type](),a.disabled=!1)}return!t.defaultPrevented}function Se(t,i,r){if(Array.isArray(i))return me(Se,t,i,r);var e=function e(){be(t,i,e),r.apply(this,arguments)};e.guid=r.guid=r.guid||ue(),_e(t,i,e)}var ke=Object.freeze({fixEvent:ge,on:_e,off:be,trigger:Te,one:Se}),Ce=!1,Ee=void 0,we=function(){if(I()&&!1!==Ee.options.autoSetup){var e=Array.prototype.slice.call(p.getElementsByTagName("video")),t=Array.prototype.slice.call(p.getElementsByTagName("audio")),i=Array.prototype.slice.call(p.getElementsByTagName("video-js")),r=e.concat(t,i);if(r&&0<r.length)for(var n=0,a=r.length;n<a;n++){var s=r[n];if(!s||!s.getAttribute){Ae(1);break}void 0===s.player&&null!==s.getAttribute("data-setup")&&Ee(s)}else Ce||Ae(1)}};function Ae(e,t){t&&(Ee=t),g.setTimeout(we,e)}I()&&"complete"===p.readyState?Ce=!0:Se(g,"load",function(){Ce=!0});var Le=function(e){var t=p.createElement("style");return t.className=e,t},Pe=function(e,t){e.styleSheet?e.styleSheet.cssText=t:e.textContent=t},Oe=function(e,t,i){t.guid||(t.guid=ue());var r=function(){return t.apply(e,arguments)};return r.guid=i?i+"_"+t.guid:t.guid,r},Ie=function(t,i){var r=Date.now();return function(){var e=Date.now();i<=e-r&&(t.apply(void 0,arguments),r=e)}},xe=function(r,n,a){var s=3<arguments.length&&void 0!==arguments[3]?arguments[3]:g,o=void 0;return function(){var e=this,t=arguments,i=function(){i=o=null,a||r.apply(e,t)};!o&&a&&r.apply(e,t),s.clearTimeout(o),o=s.setTimeout(i,n)}},De=function(){};De.prototype.allowedEvents_={},De.prototype.addEventListener=De.prototype.on=function(e,t){var i=this.addEventListener;this.addEventListener=function(){},_e(this,e,t),this.addEventListener=i},De.prototype.removeEventListener=De.prototype.off=function(e,t){be(this,e,t)},De.prototype.one=function(e,t){var i=this.addEventListener;this.addEventListener=function(){},Se(this,e,t),this.addEventListener=i},De.prototype.dispatchEvent=De.prototype.trigger=function(e){var t=e.type||e;"string"==typeof e&&(e={type:t}),e=ge(e),this.allowedEvents_[t]&&this["on"+t]&&this["on"+t](e),Te(this,e)};var Re=function(t){return t instanceof De||!!t.eventBusEl_&&["on","one","off","trigger"].every(function(e){return"function"==typeof t[e]})},Me=function(e){return"string"==typeof e&&/\S/.test(e)||Array.isArray(e)&&!!e.length},Ue=function(e){if(!e.nodeName&&!Re(e))throw new Error("Invalid target; must be a DOM node or evented object.")},Ne=function(e){if(!Me(e))throw new Error("Invalid event type; must be a non-empty string or array.")},Be=function(e){if("function"!=typeof e)throw new Error("Invalid listener; must be a function.")},je=function(e,t){var i=t.length<3||t[0]===e||t[0]===e.eventBusEl_,r=void 0,n=void 0,a=void 0;return i?(r=e.eventBusEl_,3<=t.length&&t.shift(),n=t[0],a=t[1]):(r=t[0],n=t[1],a=t[2]),Ue(r),Ne(n),Be(a),{isTargetingSelf:i,target:r,type:n,listener:a=Oe(e,a)}},Fe=function(e,t,i,r){Ue(e),e.nodeName?ke[t](e,i,r):e[t](i,r)},He={on:function(){for(var e=this,t=arguments.length,i=Array(t),r=0;r<t;r++)i[r]=arguments[r];var n=je(this,i),a=n.isTargetingSelf,s=n.target,o=n.type,u=n.listener;if(Fe(s,"on",o,u),!a){var l=function(){return e.off(s,o,u)};l.guid=u.guid;var c=function(){return e.off("dispose",l)};c.guid=u.guid,Fe(this,"on","dispose",l),Fe(s,"on","dispose",c)}},one:function(){for(var n=this,e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];var r=je(this,t),a=r.isTargetingSelf,s=r.target,o=r.type,u=r.listener;if(a)Fe(s,"one",o,u);else{var l=function e(){for(var t=arguments.length,i=Array(t),r=0;r<t;r++)i[r]=arguments[r];n.off(s,o,e),u.apply(null,i)};l.guid=u.guid,Fe(s,"one",o,l)}},off:function(e,t,i){if(!e||Me(e))be(this.eventBusEl_,e,t);else{var r=e,n=t;Ue(r),Ne(n),Be(i),i=Oe(this,i),this.off("dispose",i),r.nodeName?(be(r,n,i),be(r,"dispose",i)):Re(r)&&(r.off(n,i),r.off("dispose",i))}},trigger:function(e,t){return Te(this.eventBusEl_,e,t)}};function Ve(e){var t=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).eventBusKey;if(t){if(!e[t].nodeName)throw new Error('The eventBusKey "'+t+'" does not refer to an element.');e.eventBusEl_=e[t]}else e.eventBusEl_=M("span",{className:"vjs-event-bus"});return C(e,He),e.on("dispose",function(){e.off(),g.setTimeout(function(){e.eventBusEl_=null},0)}),e}var qe={state:{},setState:function(e){var i=this;"function"==typeof e&&(e=e());var r=void 0;return k(e,function(e,t){i.state[t]!==e&&((r=r||{})[t]={from:i.state[t],to:e}),i.state[t]=e}),r&&Re(this)&&this.trigger({changes:r,type:"statechanged"}),r}};function We(e,t){return C(e,qe),e.state=C({},e.state,t),"function"==typeof e.handleStateChanged&&Re(e)&&e.on("statechanged",e.handleStateChanged),e}function ze(e){return"string"!=typeof e?e:e.charAt(0).toUpperCase()+e.slice(1)}function Ge(){for(var i={},e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.forEach(function(e){e&&k(e,function(e,t){w(e)?(w(i[t])||(i[t]={}),i[t]=Ge(i[t],e)):i[t]=e})}),i}var Xe=function(){function l(e,t,i){if(y(this,l),!e&&this.play?this.player_=e=this:this.player_=e,this.options_=Ge({},this.options_),t=this.options_=Ge(this.options_,t),this.id_=t.id||t.el&&t.el.id,!this.id_){var r=e&&e.id&&e.id()||"no_player";this.id_=r+"_component_"+ue()}this.name_=t.name||null,t.el?this.el_=t.el:!1!==t.createEl&&(this.el_=this.createEl()),!1!==t.evented&&Ve(this,{eventBusKey:this.el_?"el_":null}),We(this,this.constructor.defaultState),this.children_=[],this.childIndex_={},!(this.childNameIndex_={})!==t.initChildren&&this.initChildren(),this.ready(i),!1!==t.reportTouchActivity&&this.enableTouchActivity()}return l.prototype.dispose=function(){if(this.trigger({type:"dispose",bubbles:!1}),this.children_)for(var e=this.children_.length-1;0<=e;e--)this.children_[e].dispose&&this.children_[e].dispose();this.children_=null,this.childIndex_=null,this.childNameIndex_=null,this.el_&&(this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_),pe(this.el_),this.el_=null),this.player_=null},l.prototype.player=function(){return this.player_},l.prototype.options=function(e){return f.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"),e&&(this.options_=Ge(this.options_,e)),this.options_},l.prototype.el=function(){return this.el_},l.prototype.createEl=function(e,t,i){return M(e,t,i)},l.prototype.localize=function(e,n){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:e,i=this.player_.language&&this.player_.language(),r=this.player_.languages&&this.player_.languages(),a=r&&r[i],s=i&&i.split("-")[0],o=r&&r[s],u=t;return a&&a[e]?u=a[e]:o&&o[e]&&(u=o[e]),n&&(u=u.replace(/\{(\d+)\}/g,function(e,t){var i=n[t-1],r=i;return"undefined"==typeof i&&(r=e),r})),u},l.prototype.contentEl=function(){return this.contentEl_||this.el_},l.prototype.id=function(){return this.id_},l.prototype.name=function(){return this.name_},l.prototype.children=function(){return this.children_},l.prototype.getChildById=function(e){return this.childIndex_[e]},l.prototype.getChild=function(e){if(e)return e=ze(e),this.childNameIndex_[e]},l.prototype.addChild=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this.children_.length,r=void 0,n=void 0;if("string"==typeof e){n=ze(e);var a=t.componentClass||n;t.name=n;var s=l.getComponent(a);if(!s)throw new Error("Component "+a+" does not exist");if("function"!=typeof s)return null;r=new s(this.player_||this,t)}else r=e;if(this.children_.splice(i,0,r),"function"==typeof r.id&&(this.childIndex_[r.id()]=r),(n=n||r.name&&ze(r.name()))&&(this.childNameIndex_[n]=r),"function"==typeof r.el&&r.el()){var o=this.contentEl().children[i]||null;this.contentEl().insertBefore(r.el(),o)}return r},l.prototype.removeChild=function(e){if("string"==typeof e&&(e=this.getChild(e)),e&&this.children_){for(var t=!1,i=this.children_.length-1;0<=i;i--)if(this.children_[i]===e){t=!0,this.children_.splice(i,1);break}if(t){this.childIndex_[e.id()]=null,this.childNameIndex_[e.name()]=null;var r=e.el();r&&r.parentNode===this.contentEl()&&this.contentEl().removeChild(e.el())}}},l.prototype.initChildren=function(){var n=this,r=this.options_.children;if(r){var a=this.options_,e=void 0,i=l.getComponent("Tech");(e=Array.isArray(r)?r:Object.keys(r)).concat(Object.keys(this.options_).filter(function(t){return!e.some(function(e){return"string"==typeof e?t===e:t===e.name})})).map(function(e){var t=void 0,i=void 0;return"string"==typeof e?i=r[t=e]||n.options_[t]||{}:(t=e.name,i=e),{name:t,opts:i}}).filter(function(e){var t=l.getComponent(e.opts.componentClass||ze(e.name));return t&&!i.isTech(t)}).forEach(function(e){var t=e.name,i=e.opts;if(void 0!==a[t]&&(i=a[t]),!1!==i){!0===i&&(i={}),i.playerOptions=n.options_.playerOptions;var r=n.addChild(t,i);r&&(n[t]=r)}})}},l.prototype.buildCSSClass=function(){return""},l.prototype.ready=function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(e)return this.isReady_?void(t?e.call(this):this.setTimeout(e,1)):(this.readyQueue_=this.readyQueue_||[],void this.readyQueue_.push(e))},l.prototype.triggerReady=function(){this.isReady_=!0,this.setTimeout(function(){var e=this.readyQueue_;this.readyQueue_=[],e&&0<e.length&&e.forEach(function(e){e.call(this)},this),this.trigger("ready")},1)},l.prototype.$=function(e,t){return ne(e,t||this.contentEl())},l.prototype.$$=function(e,t){return ae(e,t||this.contentEl())},l.prototype.hasClass=function(e){return B(this.el_,e)},l.prototype.addClass=function(e){j(this.el_,e)},l.prototype.removeClass=function(e){F(this.el_,e)},l.prototype.toggleClass=function(e,t){H(this.el_,e,t)},l.prototype.show=function(){this.removeClass("vjs-hidden")},l.prototype.hide=function(){this.addClass("vjs-hidden")},l.prototype.lockShowing=function(){this.addClass("vjs-lock-showing")},l.prototype.unlockShowing=function(){this.removeClass("vjs-lock-showing")},l.prototype.getAttribute=function(e){return W(this.el_,e)},l.prototype.setAttribute=function(e,t){z(this.el_,e,t)},l.prototype.removeAttribute=function(e){G(this.el_,e)},l.prototype.width=function(e,t){return this.dimension("width",e,t)},l.prototype.height=function(e,t){return this.dimension("height",e,t)},l.prototype.dimensions=function(e,t){this.width(e,!0),this.height(t)},l.prototype.dimension=function(e,t,i){if(void 0!==t)return null!==t&&t==t||(t=0),-1!==(""+t).indexOf("%")||-1!==(""+t).indexOf("px")?this.el_.style[e]=t:this.el_.style[e]="auto"===t?"":t+"px",void(i||this.trigger("componentresize"));if(!this.el_)return 0;var r=this.el_.style[e],n=r.indexOf("px");return-1!==n?parseInt(r.slice(0,n),10):parseInt(this.el_["offset"+ze(e)],10)},l.prototype.currentDimension=function(e){var t=0;if("width"!==e&&"height"!==e)throw new Error("currentDimension only accepts width or height value");if("function"==typeof g.getComputedStyle){var i=g.getComputedStyle(this.el_);t=i.getPropertyValue(e)||i[e]}if(0===(t=parseFloat(t))){var r="offset"+ze(e);t=this.el_[r]}return t},l.prototype.currentDimensions=function(){return{width:this.currentDimension("width"),height:this.currentDimension("height")}},l.prototype.currentWidth=function(){return this.currentDimension("width")},l.prototype.currentHeight=function(){return this.currentDimension("height")},l.prototype.focus=function(){this.el_.focus()},l.prototype.blur=function(){this.el_.blur()},l.prototype.emitTapEvents=function(){var t=0,r=null,n=void 0;this.on("touchstart",function(e){1===e.touches.length&&(r={pageX:e.touches[0].pageX,pageY:e.touches[0].pageY},t=(new Date).getTime(),n=!0)}),this.on("touchmove",function(e){if(1<e.touches.length)n=!1;else if(r){var t=e.touches[0].pageX-r.pageX,i=e.touches[0].pageY-r.pageY;10<Math.sqrt(t*t+i*i)&&(n=!1)}});var e=function(){n=!1};this.on("touchleave",e),this.on("touchcancel",e),this.on("touchend",function(e){!(r=null)===n&&((new Date).getTime()-t<200&&(e.preventDefault(),this.trigger("tap")))})},l.prototype.enableTouchActivity=function(){if(this.player()&&this.player().reportUserActivity){var t=Oe(this.player(),this.player().reportUserActivity),i=void 0;this.on("touchstart",function(){t(),this.clearInterval(i),i=this.setInterval(t,250)});var e=function(e){t(),this.clearInterval(i)};this.on("touchmove",t),this.on("touchend",e),this.on("touchcancel",e)}},l.prototype.setTimeout=function(e,t){var i,r,n=this;return e=Oe(this,e),i=g.setTimeout(function(){n.off("dispose",r),e()},t),(r=function(){return n.clearTimeout(i)}).guid="vjs-timeout-"+i,this.on("dispose",r),i},l.prototype.clearTimeout=function(e){g.clearTimeout(e);var t=function(){};return t.guid="vjs-timeout-"+e,this.off("dispose",t),e},l.prototype.setInterval=function(e,t){var i=this;e=Oe(this,e);var r=g.setInterval(e,t),n=function(){return i.clearInterval(r)};return n.guid="vjs-interval-"+r,this.on("dispose",n),r},l.prototype.clearInterval=function(e){g.clearInterval(e);var t=function(){};return t.guid="vjs-interval-"+e,this.off("dispose",t),e},l.prototype.requestAnimationFrame=function(e){var t,i,r=this;return this.supportsRaf_?(e=Oe(this,e),t=g.requestAnimationFrame(function(){r.off("dispose",i),e()}),(i=function(){return r.cancelAnimationFrame(t)}).guid="vjs-raf-"+t,this.on("dispose",i),t):this.setTimeout(e,1e3/60)},l.prototype.cancelAnimationFrame=function(e){if(this.supportsRaf_){g.cancelAnimationFrame(e);var t=function(){};return t.guid="vjs-raf-"+e,this.off("dispose",t),e}return this.clearTimeout(e)},l.registerComponent=function(e,t){if("string"!=typeof e||!e)throw new Error('Illegal component name, "'+e+'"; must be a non-empty string.');var i=l.getComponent("Tech"),r=i&&i.isTech(t),n=l===t||l.prototype.isPrototypeOf(t.prototype);if(r||!n){var a=void 0;throw a=r?"techs must be registered using Tech.registerTech()":"must be a Component subclass",new Error('Illegal component, "'+e+'"; '+a+".")}e=ze(e),l.components_||(l.components_={});var s=l.getComponent("Player");if("Player"===e&&s&&s.players){var o=s.players,u=Object.keys(o);if(o&&0<u.length&&u.map(function(e){return o[e]}).every(Boolean))throw new Error("Can not register Player component after player has been created.")}return l.components_[e]=t},l.getComponent=function(e){if(e)return e=ze(e),l.components_&&l.components_[e]?l.components_[e]:void 0},l}();Xe.prototype.supportsRaf_="function"==typeof g.requestAnimationFrame&&"function"==typeof g.cancelAnimationFrame,Xe.registerComponent("Component",Xe);var Ye,$e,Ke,Qe,Je=g.navigator&&g.navigator.userAgent||"",Ze=/AppleWebKit\/([\d.]+)/i.exec(Je),et=Ze?parseFloat(Ze.pop()):null,tt=/iPad/i.test(Je),it=/iPhone/i.test(Je)&&!tt,rt=/iPod/i.test(Je),nt=it||tt||rt,at=(Ye=Je.match(/OS (\d+)_/i))&&Ye[1]?Ye[1]:null,st=/Android/i.test(Je),ot=function(){var e=Je.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);if(!e)return null;var t=e[1]&&parseFloat(e[1]),i=e[2]&&parseFloat(e[2]);return t&&i?parseFloat(e[1]+"."+e[2]):t||null}(),ut=st&&ot<5&&et<537,lt=/Firefox/i.test(Je),ct=/Edge/i.test(Je),ht=!ct&&(/Chrome/i.test(Je)||/CriOS/i.test(Je)),dt=($e=Je.match(/(Chrome|CriOS)\/(\d+)/))&&$e[2]?parseFloat($e[2]):null,pt=(Ke=/MSIE\s(\d+)\.\d/.exec(Je),!(Qe=Ke&&parseFloat(Ke[1]))&&/Trident\/7.0/i.test(Je)&&/rv:11.0/.test(Je)&&(Qe=11),Qe),ft=/Safari/i.test(Je)&&!ht&&!st&&!ct,mt=(ft||nt)&&!ht,gt=I()&&("ontouchstart"in g||g.navigator.maxTouchPoints||g.DocumentTouch&&g.document instanceof g.DocumentTouch),yt=Object.freeze({IS_IPAD:tt,IS_IPHONE:it,IS_IPOD:rt,IS_IOS:nt,IOS_VERSION:at,IS_ANDROID:st,ANDROID_VERSION:ot,IS_NATIVE_ANDROID:ut,IS_FIREFOX:lt,IS_EDGE:ct,IS_CHROME:ht,CHROME_VERSION:dt,IE_VERSION:pt,IS_SAFARI:ft,IS_ANY_SAFARI:mt,TOUCH_ENABLED:gt});function vt(e,t,i,r){return function(e,t,i){if("number"!=typeof t||t<0||i<t)throw new Error("Failed to execute '"+e+"' on 'TimeRanges': The index provided ("+t+") is non-numeric or out of bounds (0-"+i+").")}(e,r,i.length-1),i[r][t]}function _t(e){return void 0===e||0===e.length?{length:0,start:function(){throw new Error("This TimeRanges object is empty")},end:function(){throw new Error("This TimeRanges object is empty")}}:{length:e.length,start:vt.bind(null,"start",0,e),end:vt.bind(null,"end",1,e)}}function bt(e,t){return Array.isArray(e)?_t(e):void 0===e||void 0===t?_t():_t([[e,t]])}function Tt(e,t){var i=0,r=void 0,n=void 0;if(!t)return 0;e&&e.length||(e=bt(0,0));for(var a=0;a<e.length;a++)r=e.start(a),t<(n=e.end(a))&&(n=t),i+=n-r;return i/t}for(var St={},kt=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Ct=kt[0],Et=void 0,wt=0;wt<kt.length;wt++)if(kt[wt][1]in p){Et=kt[wt];break}if(Et)for(var At=0;At<Et.length;At++)St[Ct[At]]=Et[At];function Lt(e){if(e instanceof Lt)return e;"number"==typeof e?this.code=e:"string"==typeof e?this.message=e:E(e)&&("number"==typeof e.code&&(this.code=e.code),C(this,e)),this.message||(this.message=Lt.defaultMessages[this.code]||"")}Lt.prototype.code=0,Lt.prototype.message="",Lt.prototype.status=null,Lt.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"],Lt.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."};for(var Pt=0;Pt<Lt.errorTypes.length;Pt++)Lt[Lt.errorTypes[Pt]]=Pt,Lt.prototype[Lt.errorTypes[Pt]]=Pt;var Ot=function(e,t){var i,r=null;try{i=JSON.parse(e,t)}catch(e){r=e}return[r,i]};function It(e){return null!=e&&"function"==typeof e.then}function xt(e){It(e)&&e.then(null,function(e){})}var Dt=function(r){return["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce(function(e,t,i){return r[t]&&(e[t]=r[t]),e},{cues:r.cues&&Array.prototype.map.call(r.cues,function(e){return{startTime:e.startTime,endTime:e.endTime,text:e.text,id:e.id}})})},Rt=function(e){var t=e.$$("track"),i=Array.prototype.map.call(t,function(e){return e.track});return Array.prototype.map.call(t,function(e){var t=Dt(e.track);return e.src&&(t.src=e.src),t}).concat(Array.prototype.filter.call(e.textTracks(),function(e){return-1===i.indexOf(e)}).map(Dt))},Mt=function(e,i){return e.forEach(function(e){var t=i.addRemoteTextTrack(e).track;!e.src&&e.cues&&e.cues.forEach(function(e){return t.addCue(e)})}),i.textTracks()},Ut="vjs-modal-dialog",Nt=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.opened_=i.hasBeenOpened_=i.hasBeenFilled_=!1,i.closeable(!i.options_.uncloseable),i.content(i.options_.content),i.contentEl_=M("div",{className:Ut+"-content"},{role:"document"}),i.descEl_=M("p",{className:Ut+"-description vjs-control-text",id:i.el().getAttribute("aria-describedby")}),U(i.descEl_,i.description()),i.el_.appendChild(i.descEl_),i.el_.appendChild(i.contentEl_),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:this.buildCSSClass(),tabIndex:-1},{"aria-describedby":this.id()+"_description","aria-hidden":"true","aria-label":this.label(),role:"dialog"})},n.prototype.dispose=function(){this.contentEl_=null,this.descEl_=null,this.previouslyActiveEl_=null,r.prototype.dispose.call(this)},n.prototype.buildCSSClass=function(){return Ut+" vjs-hidden "+r.prototype.buildCSSClass.call(this)},n.prototype.handleKeyPress=function(e){27===e.which&&this.closeable()&&this.close()},n.prototype.label=function(){return this.localize(this.options_.label||"Modal Window")},n.prototype.description=function(){var e=this.options_.description||this.localize("This is a modal window.");return this.closeable()&&(e+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),e},n.prototype.open=function(){if(!this.opened_){var e=this.player();this.trigger("beforemodalopen"),this.opened_=!0,(this.options_.fillAlways||!this.hasBeenOpened_&&!this.hasBeenFilled_)&&this.fill(),this.wasPlaying_=!e.paused(),this.options_.pauseOnOpen&&this.wasPlaying_&&e.pause(),this.closeable()&&this.on(this.el_.ownerDocument,"keydown",Oe(this,this.handleKeyPress)),this.hadControls_=e.controls(),e.controls(!1),this.show(),this.conditionalFocus_(),this.el().setAttribute("aria-hidden","false"),this.trigger("modalopen"),this.hasBeenOpened_=!0}},n.prototype.opened=function(e){return"boolean"==typeof e&&this[e?"open":"close"](),this.opened_},n.prototype.close=function(){if(this.opened_){var e=this.player();this.trigger("beforemodalclose"),this.opened_=!1,this.wasPlaying_&&this.options_.pauseOnOpen&&e.play(),this.closeable()&&this.off(this.el_.ownerDocument,"keydown",Oe(this,this.handleKeyPress)),this.hadControls_&&e.controls(!0),this.hide(),this.el().setAttribute("aria-hidden","true"),this.trigger("modalclose"),this.conditionalBlur_(),this.options_.temporary&&this.dispose()}},n.prototype.closeable=function(e){if("boolean"==typeof e){var t=this.closeable_=!!e,i=this.getChild("closeButton");if(t&&!i){var r=this.contentEl_;this.contentEl_=this.el_,i=this.addChild("closeButton",{controlText:"Close Modal Dialog"}),this.contentEl_=r,this.on(i,"close",this.close)}!t&&i&&(this.off(i,"close",this.close),this.removeChild(i),i.dispose())}return this.closeable_},n.prototype.fill=function(){this.fillWith(this.content())},n.prototype.fillWith=function(e){var t=this.contentEl(),i=t.parentNode,r=t.nextSibling;this.trigger("beforemodalfill"),this.hasBeenFilled_=!0,i.removeChild(t),this.empty(),ie(t,e),this.trigger("modalfill"),r?i.insertBefore(t,r):i.appendChild(t);var n=this.getChild("closeButton");n&&i.appendChild(n.el_)},n.prototype.empty=function(){this.trigger("beforemodalempty"),Z(this.contentEl()),this.trigger("modalempty")},n.prototype.content=function(e){return"undefined"!=typeof e&&(this.content_=e),this.content_},n.prototype.conditionalFocus_=function(){var e=p.activeElement,t=this.player_.el_;this.previouslyActiveEl_=null,(t.contains(e)||t===e)&&(this.previouslyActiveEl_=e,this.focus(),this.on(p,"keydown",this.handleKeyDown))},n.prototype.conditionalBlur_=function(){this.previouslyActiveEl_&&(this.previouslyActiveEl_.focus(),this.previouslyActiveEl_=null),this.off(p,"keydown",this.handleKeyDown)},n.prototype.handleKeyDown=function(e){if(9===e.which){for(var t=this.focusableEls_(),i=this.el_.querySelector(":focus"),r=void 0,n=0;n<t.length;n++)if(i===t[n]){r=n;break}p.activeElement===this.el_&&(r=0),e.shiftKey&&0===r?(t[t.length-1].focus(),e.preventDefault()):e.shiftKey||r!==t.length-1||(t[0].focus(),e.preventDefault())}},n.prototype.focusableEls_=function(){var e=this.el_.querySelectorAll("*");return Array.prototype.filter.call(e,function(e){return(e instanceof g.HTMLAnchorElement||e instanceof g.HTMLAreaElement)&&e.hasAttribute("href")||(e instanceof g.HTMLInputElement||e instanceof g.HTMLSelectElement||e instanceof g.HTMLTextAreaElement||e instanceof g.HTMLButtonElement)&&!e.hasAttribute("disabled")||e instanceof g.HTMLIFrameElement||e instanceof g.HTMLObjectElement||e instanceof g.HTMLEmbedElement||e.hasAttribute("tabindex")&&-1!==e.getAttribute("tabindex")||e.hasAttribute("contenteditable")})},n}(Xe);Nt.prototype.options_={pauseOnOpen:!0,temporary:!0},Xe.registerComponent("ModalDialog",Nt);var Bt=function(r){function n(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);var t=b(this,r.call(this));t.tracks_=[],Object.defineProperty(t,"length",{get:function(){return this.tracks_.length}});for(var i=0;i<e.length;i++)t.addTrack(e[i]);return t}return _(n,r),n.prototype.addTrack=function(e){var t=this.tracks_.length;""+t in this||Object.defineProperty(this,t,{get:function(){return this.tracks_[t]}}),-1===this.tracks_.indexOf(e)&&(this.tracks_.push(e),this.trigger({track:e,type:"addtrack"}))},n.prototype.removeTrack=function(e){for(var t=void 0,i=0,r=this.length;i<r;i++)if(this[i]===e){(t=this[i]).off&&t.off(),this.tracks_.splice(i,1);break}t&&this.trigger({track:t,type:"removetrack"})},n.prototype.getTrackById=function(e){for(var t=null,i=0,r=this.length;i<r;i++){var n=this[i];if(n.id===e){t=n;break}}return t},n}(De);for(var jt in Bt.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack"},Bt.prototype.allowedEvents_)Bt.prototype["on"+jt]=null;var Ft=function(e,t){for(var i=0;i<e.length;i++)Object.keys(e[i]).length&&t.id!==e[i].id&&(e[i].enabled=!1)},Ht=function(r){function n(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);for(var t=e.length-1;0<=t;t--)if(e[t].enabled){Ft(e,e[t]);break}var i=b(this,r.call(this,e));return i.changing_=!1,i}return _(n,r),n.prototype.addTrack=function(e){var t=this;e.enabled&&Ft(this,e),r.prototype.addTrack.call(this,e),e.addEventListener&&e.addEventListener("enabledchange",function(){t.changing_||(t.changing_=!0,Ft(t,e),t.changing_=!1,t.trigger("change"))})},n}(Bt),Vt=function(e,t){for(var i=0;i<e.length;i++)Object.keys(e[i]).length&&t.id!==e[i].id&&(e[i].selected=!1)},qt=function(r){function n(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);for(var t=e.length-1;0<=t;t--)if(e[t].selected){Vt(e,e[t]);break}var i=b(this,r.call(this,e));return i.changing_=!1,Object.defineProperty(i,"selectedIndex",{get:function(){for(var e=0;e<this.length;e++)if(this[e].selected)return e;return-1},set:function(){}}),i}return _(n,r),n.prototype.addTrack=function(e){var t=this;e.selected&&Vt(this,e),r.prototype.addTrack.call(this,e),e.addEventListener&&e.addEventListener("selectedchange",function(){t.changing_||(t.changing_=!0,Vt(t,e),t.changing_=!1,t.trigger("change"))})},n}(Bt),Wt=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.addTrack=function(e){t.prototype.addTrack.call(this,e),e.addEventListener("modechange",Oe(this,function(){this.trigger("change")}));-1===["metadata","chapters"].indexOf(e.kind)&&e.addEventListener("modechange",Oe(this,function(){this.trigger("selectedlanguagechange")}))},e}(Bt),zt=function(){function r(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,r),this.trackElements_=[],Object.defineProperty(this,"length",{get:function(){return this.trackElements_.length}});for(var t=0,i=e.length;t<i;t++)this.addTrackElement_(e[t])}return r.prototype.addTrackElement_=function(e){var t=this.trackElements_.length;""+t in this||Object.defineProperty(this,t,{get:function(){return this.trackElements_[t]}}),-1===this.trackElements_.indexOf(e)&&this.trackElements_.push(e)},r.prototype.getTrackElementByTrack_=function(e){for(var t=void 0,i=0,r=this.trackElements_.length;i<r;i++)if(e===this.trackElements_[i].track){t=this.trackElements_[i];break}return t},r.prototype.removeTrackElement_=function(e){for(var t=0,i=this.trackElements_.length;t<i;t++)if(e===this.trackElements_[t]){this.trackElements_.splice(t,1);break}},r}(),Gt=function(){function t(e){y(this,t),t.prototype.setCues_.call(this,e),Object.defineProperty(this,"length",{get:function(){return this.length_}})}return t.prototype.setCues_=function(e){var t=this.length||0,i=0,r=e.length;this.cues_=e,this.length_=e.length;var n=function(e){""+e in this||Object.defineProperty(this,""+e,{get:function(){return this.cues_[e]}})};if(t<r)for(i=t;i<r;i++)n.call(this,i)},t.prototype.getCueById=function(e){for(var t=null,i=0,r=this.length;i<r;i++){var n=this[i];if(n.id===e){t=n;break}}return t},t}(),Xt={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},Yt={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},$t={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},Kt={disabled:"disabled",hidden:"hidden",showing:"showing"},Qt=function(a){function s(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var t=b(this,a.call(this)),i={id:e.id||"vjs_track_"+ue(),kind:e.kind||"",label:e.label||"",language:e.language||""},r=function(e){Object.defineProperty(t,e,{get:function(){return i[e]},set:function(){}})};for(var n in i)r(n);return t}return _(s,a),s}(De),Jt=function(e){var t=["protocol","hostname","port","pathname","search","hash","host"],i=p.createElement("a");i.href=e;var r=""===i.host&&"file:"!==i.protocol,n=void 0;r&&((n=p.createElement("div")).innerHTML='<a href="'+e+'"></a>',i=n.firstChild,n.setAttribute("style","display:none; position:absolute;"),p.body.appendChild(n));for(var a={},s=0;s<t.length;s++)a[t[s]]=i[t[s]];return"http:"===a.protocol&&(a.host=a.host.replace(/:80$/,"")),"https:"===a.protocol&&(a.host=a.host.replace(/:443$/,"")),a.protocol||(a.protocol=g.location.protocol),r&&p.body.removeChild(n),a},Zt=function(e){if(!e.match(/^https?:\/\//)){var t=p.createElement("div");t.innerHTML='<a href="'+e+'">x</a>',e=t.firstChild.href}return e},ei=function(e){if("string"==typeof e){var t=/^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(e);if(t)return t.pop().toLowerCase()}return""},ti=function(e){var t=g.location,i=Jt(e);return(":"===i.protocol?t.protocol:i.protocol)+i.host!==t.protocol+t.host},ii=Object.freeze({parseUrl:Jt,getAbsoluteURL:Zt,getFileExtension:ei,isCrossOrigin:ti}),ri=function(e){var t=ni.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)},ni=Object.prototype.toString;var ai=Object.freeze({default:ri,__moduleExports:ri}),si=t(function(e,t){(t=e.exports=function(e){return e.replace(/^\s*|\s*$/g,"")}).left=function(e){return e.replace(/^\s*/,"")},t.right=function(e){return e.replace(/\s*$/,"")}}),oi=si.left,ui=si.right,li=Object.freeze({default:si,__moduleExports:si,left:oi,right:ui}),ci=ai&&ri||ai,hi=function(e,t,i){if(!ci(t))throw new TypeError("iterator must be a function");arguments.length<3&&(i=this);"[object Array]"===di.call(e)?function(e,t,i){for(var r=0,n=e.length;r<n;r++)pi.call(e,r)&&t.call(i,e[r],r,e)}(e,t,i):"string"==typeof e?function(e,t,i){for(var r=0,n=e.length;r<n;r++)t.call(i,e.charAt(r),r,e)}(e,t,i):function(e,t,i){for(var r in e)pi.call(e,r)&&t.call(i,e[r],r,e)}(e,t,i)},di=Object.prototype.toString,pi=Object.prototype.hasOwnProperty;var fi=Object.freeze({default:hi,__moduleExports:hi}),mi=li&&si||li,gi=fi&&hi||fi,yi=function(e){if(!e)return{};var a={};return gi(mi(e).split("\n"),function(e){var t,i=e.indexOf(":"),r=mi(e.slice(0,i)).toLowerCase(),n=mi(e.slice(i+1));"undefined"==typeof a[r]?a[r]=n:(t=a[r],"[object Array]"===Object.prototype.toString.call(t)?a[r].push(n):a[r]=[a[r],n])}),a},vi=Object.freeze({default:yi,__moduleExports:yi}),_i=function(){for(var e={},t=0;t<arguments.length;t++){var i=arguments[t];for(var r in i)bi.call(i,r)&&(e[r]=i[r])}return e},bi=Object.prototype.hasOwnProperty;var Ti=Object.freeze({default:_i,__moduleExports:_i}),Si=vi&&yi||vi,ki=Ti&&_i||Ti,Ci=wi;function Ei(e,t,i){var r=e;return ci(t)?(i=t,"string"==typeof e&&(r={uri:e})):r=ki(t,{uri:e}),r.callback=i,r}function wi(e,t,i){return Ai(t=Ei(e,t,i))}function Ai(r){if("undefined"==typeof r.callback)throw new Error("callback argument missing");var n=!1,a=function(e,t,i){n||(n=!0,r.callback(e,t,i))};function t(e){return clearTimeout(u),e instanceof Error||(e=new Error(""+(e||"Unknown XMLHttpRequest Error"))),e.statusCode=0,a(e,m)}function e(){if(!s){var e;clearTimeout(u),e=r.useXDR&&void 0===o.status?200:1223===o.status?204:o.status;var t=m,i=null;return 0!==e?(t={body:function(){var e=void 0;if(e=o.response?o.response:o.responseText||function(e){if("document"===e.responseType)return e.responseXML;var t=e.responseXML&&"parsererror"===e.responseXML.documentElement.nodeName;return""!==e.responseType||t?null:e.responseXML}(o),f)try{e=JSON.parse(e)}catch(e){}return e}(),statusCode:e,method:c,headers:{},url:l,rawRequest:o},o.getAllResponseHeaders&&(t.headers=Si(o.getAllResponseHeaders()))):i=new Error("Internal XMLHttpRequest Error"),a(i,t,t.body)}}var i,s,o=r.xhr||null;o||(o=r.cors||r.useXDR?new wi.XDomainRequest:new wi.XMLHttpRequest);var u,l=o.url=r.uri||r.url,c=o.method=r.method||"GET",h=r.body||r.data,d=o.headers=r.headers||{},p=!!r.sync,f=!1,m={body:void 0,headers:{},statusCode:0,method:c,url:l,rawRequest:o};if("json"in r&&!1!==r.json&&(f=!0,d.accept||d.Accept||(d.Accept="application/json"),"GET"!==c&&"HEAD"!==c&&(d["content-type"]||d["Content-Type"]||(d["Content-Type"]="application/json"),h=JSON.stringify(!0===r.json?h:r.json))),o.onreadystatechange=function(){4===o.readyState&&setTimeout(e,0)},o.onload=e,o.onerror=t,o.onprogress=function(){},o.onabort=function(){s=!0},o.ontimeout=t,o.open(c,l,!p,r.username,r.password),p||(o.withCredentials=!!r.withCredentials),!p&&0<r.timeout&&(u=setTimeout(function(){if(!s){s=!0,o.abort("timeout");var e=new Error("XMLHttpRequest timeout");e.code="ETIMEDOUT",t(e)}},r.timeout)),o.setRequestHeader)for(i in d)d.hasOwnProperty(i)&&o.setRequestHeader(i,d[i]);else if(r.headers&&!function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}(r.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in r&&(o.responseType=r.responseType),"beforeSend"in r&&"function"==typeof r.beforeSend&&r.beforeSend(o),o.send(h||null),o}wi.XMLHttpRequest=g.XMLHttpRequest||function(){},wi.XDomainRequest="withCredentials"in new wi.XMLHttpRequest?wi.XMLHttpRequest:g.XDomainRequest,function(e,t){for(var i=0;i<e.length;i++)t(e[i])}(["get","put","post","patch","head","delete"],function(r){wi["delete"===r?"del":r]=function(e,t,i){return(t=Ei(e,t,i)).method=r.toUpperCase(),Ai(t)}});var Li=function(e,t){var i=new g.WebVTT.Parser(g,g.vttjs,g.WebVTT.StringDecoder()),r=[];i.oncue=function(e){t.addCue(e)},i.onparsingerror=function(e){r.push(e)},i.onflush=function(){t.trigger({type:"loadeddata",target:t})},i.parse(e),0<r.length&&(g.console&&g.console.groupCollapsed&&g.console.groupCollapsed("Text Track parsing errors for "+t.src),r.forEach(function(e){return f.error(e)}),g.console&&g.console.groupEnd&&g.console.groupEnd()),i.flush()},Pi=function(e,n){var t={uri:e},i=ti(e);i&&(t.cors=i),Ci(t,Oe(this,function(e,t,i){if(e)return f.error(e,t);if(n.loaded_=!0,"function"!=typeof g.WebVTT){if(n.tech_){var r=function(){return Li(i,n)};n.tech_.on("vttjsloaded",r),n.tech_.on("vttjserror",function(){f.error("vttjs failed to load, stopping trying to process "+n.src),n.tech_.off("vttjsloaded",r)})}}else Li(i,n)}))},Oi=function(l){function c(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(y(this,c),!e.tech)throw new Error("A tech was not provided.");var t=Ge(e,{kind:$t[e.kind]||"subtitles",language:e.language||e.srclang||""}),i=Kt[t.mode]||"disabled",r=t.default;"metadata"!==t.kind&&"chapters"!==t.kind||(i="hidden");var n=b(this,l.call(this,t));n.tech_=t.tech,n.cues_=[],n.activeCues_=[];var a=new Gt(n.cues_),s=new Gt(n.activeCues_),o=!1,u=Oe(n,function(){this.activeCues,o&&(this.trigger("cuechange"),o=!1)});return"disabled"!==i&&n.tech_.ready(function(){n.tech_.on("timeupdate",u)},!0),Object.defineProperties(n,{default:{get:function(){return r},set:function(){}},mode:{get:function(){return i},set:function(e){var t=this;Kt[e]&&("showing"===(i=e)&&this.tech_.ready(function(){t.tech_.on("timeupdate",u)},!0),this.trigger("modechange"))}},cues:{get:function(){return this.loaded_?a:null},set:function(){}},activeCues:{get:function(){if(!this.loaded_)return null;if(0===this.cues.length)return s;for(var e=this.tech_.currentTime(),t=[],i=0,r=this.cues.length;i<r;i++){var n=this.cues[i];n.startTime<=e&&n.endTime>=e?t.push(n):n.startTime===n.endTime&&n.startTime<=e&&n.startTime+.5>=e&&t.push(n)}if(o=!1,t.length!==this.activeCues_.length)o=!0;else for(var a=0;a<t.length;a++)-1===this.activeCues_.indexOf(t[a])&&(o=!0);return this.activeCues_=t,s.setCues_(this.activeCues_),s},set:function(){}}}),t.src?(n.src=t.src,Pi(t.src,n)):n.loaded_=!0,n}return _(c,l),c.prototype.addCue=function(e){var t=e;if(g.vttjs&&!(e instanceof g.vttjs.VTTCue)){for(var i in t=new g.vttjs.VTTCue(e.startTime,e.endTime,e.text),e)i in t||(t[i]=e[i]);t.id=e.id,t.originalCue_=e}for(var r=this.tech_.textTracks(),n=0;n<r.length;n++)r[n]!==this&&r[n].removeCue(t);this.cues_.push(t),this.cues.setCues_(this.cues_)},c.prototype.removeCue=function(e){for(var t=this.cues_.length;t--;){var i=this.cues_[t];if(i===e||i.originalCue_&&i.originalCue_===e){this.cues_.splice(t,1),this.cues.setCues_(this.cues_);break}}},c}(Qt);Oi.prototype.allowedEvents_={cuechange:"cuechange"};var Ii=function(n){function a(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,a);var t=Ge(e,{kind:Yt[e.kind]||""}),i=b(this,n.call(this,t)),r=!1;return Object.defineProperty(i,"enabled",{get:function(){return r},set:function(e){"boolean"==typeof e&&e!==r&&(r=e,this.trigger("enabledchange"))}}),t.enabled&&(i.enabled=t.enabled),i.loaded_=!0,i}return _(a,n),a}(Qt),xi=function(n){function a(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,a);var t=Ge(e,{kind:Xt[e.kind]||""}),i=b(this,n.call(this,t)),r=!1;return Object.defineProperty(i,"selected",{get:function(){return r},set:function(e){"boolean"==typeof e&&e!==r&&(r=e,this.trigger("selectedchange"))}}),t.selected&&(i.selected=t.selected),i}return _(a,n),a}(Qt),Di=0,Ri=2,Mi=function(n){function a(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,a);var t=b(this,n.call(this)),i=void 0,r=new Oi(e);return t.kind=r.kind,t.src=r.src,t.srclang=r.language,t.label=r.label,t.default=r.default,Object.defineProperties(t,{readyState:{get:function(){return i}},track:{get:function(){return r}}}),i=Di,r.addEventListener("loadeddata",function(){i=Ri,t.trigger({type:"load",target:t})}),t}return _(a,n),a}(De);Mi.prototype.allowedEvents_={load:"load"},Mi.NONE=Di,Mi.LOADING=1,Mi.LOADED=Ri,Mi.ERROR=3;var Ui={audio:{ListClass:Ht,TrackClass:Ii,capitalName:"Audio"},video:{ListClass:qt,TrackClass:xi,capitalName:"Video"},text:{ListClass:Wt,TrackClass:Oi,capitalName:"Text"}};Object.keys(Ui).forEach(function(e){Ui[e].getterName=e+"Tracks",Ui[e].privateName=e+"Tracks_"});var Ni={remoteText:{ListClass:Wt,TrackClass:Oi,capitalName:"RemoteText",getterName:"remoteTextTracks",privateName:"remoteTextTracks_"},remoteTextEl:{ListClass:zt,TrackClass:Mi,capitalName:"RemoteTextTrackEls",getterName:"remoteTextTrackEls",privateName:"remoteTextTrackEls_"}},Bi=Ge(Ui,Ni);Ni.names=Object.keys(Ni),Ui.names=Object.keys(Ui),Bi.names=[].concat(Ni.names).concat(Ui.names);var ji=Object.create||function(){function t(){}return function(e){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return t.prototype=e,new t}}();function Fi(e,t){this.name="ParsingError",this.code=e.code,this.message=t||e.message}function Hi(e){function t(e,t,i,r){return 3600*(0|e)+60*(0|t)+(0|i)+(0|r)/1e3}var i=e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return i?i[3]?t(i[1],i[2],i[3].replace(":",""),i[4]):59<i[1]?t(i[1],i[2],0,i[4]):t(0,i[1],i[2],i[4]):null}function Vi(){this.values=ji(null)}function qi(e,t,i,r){var n=r?e.split(r):[e];for(var a in n)if("string"==typeof n[a]){var s=n[a].split(i);if(2===s.length)t(s[0],s[1])}}function Wi(t,e,a){var i,r,s,n=t;function o(){var e=Hi(t);if(null===e)throw new Fi(Fi.Errors.BadTimeStamp,"Malformed timestamp: "+n);return t=t.replace(/^[^\sa-zA-Z-]+/,""),e}function u(){t=t.replace(/^\s+/,"")}if(u(),e.startTime=o(),u(),"--\x3e"!==t.substr(0,3))throw new Fi(Fi.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '--\x3e'): "+n);t=t.substr(3),u(),e.endTime=o(),u(),i=t,r=e,s=new Vi,qi(i,function(e,t){switch(e){case"region":for(var i=a.length-1;0<=i;i--)if(a[i].id===t){s.set(e,a[i].region);break}break;case"vertical":s.alt(e,t,["rl","lr"]);break;case"line":var r=t.split(","),n=r[0];s.integer(e,n),s.percent(e,n)&&s.set("snapToLines",!1),s.alt(e,n,["auto"]),2===r.length&&s.alt("lineAlign",r[1],["start","middle","end"]);break;case"position":r=t.split(","),s.percent(e,r[0]),2===r.length&&s.alt("positionAlign",r[1],["start","middle","end"]);break;case"size":s.percent(e,t);break;case"align":s.alt(e,t,["start","middle","end","left","right"])}},/:/,/\s/),r.region=s.get("region",null),r.vertical=s.get("vertical",""),r.line=s.get("line","auto"),r.lineAlign=s.get("lineAlign","start"),r.snapToLines=s.get("snapToLines",!0),r.size=s.get("size",100),r.align=s.get("align","middle"),r.position=s.get("position",{start:0,left:0,middle:50,end:100,right:100},r.align),r.positionAlign=s.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},r.align)}((Fi.prototype=ji(Error.prototype)).constructor=Fi).Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},Vi.prototype={set:function(e,t){this.get(e)||""===t||(this.values[e]=t)},get:function(e,t,i){return i?this.has(e)?this.values[e]:t[i]:this.has(e)?this.values[e]:t},has:function(e){return e in this.values},alt:function(e,t,i){for(var r=0;r<i.length;++r)if(t===i[r]){this.set(e,t);break}},integer:function(e,t){/^-?\d+$/.test(t)&&this.set(e,parseInt(t,10))},percent:function(e,t){return!!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&0<=(t=parseFloat(t))&&t<=100)&&(this.set(e,t),!0)}};var zi={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},Gi={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},Xi={v:"title",lang:"lang"},Yi={rt:"ruby"};function $i(a,i){function e(){if(!i)return null;var e,t=i.match(/^([^<]*)(<[^>]*>?)?/);return e=t[1]?t[1]:t[2],i=i.substr(e.length),e}function t(e){return zi[e]}function r(e){for(;f=e.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)e=e.replace(f[0],t);return e}function n(e,t){var i=Gi[e];if(!i)return null;var r=a.document.createElement(i);r.localName=i;var n=Xi[e];return n&&t&&(r[n]=t.trim()),r}for(var s,o,u,l=a.document.createElement("div"),c=l,h=[];null!==(s=e());)if("<"!==s[0])c.appendChild(a.document.createTextNode(r(s)));else{if("/"===s[1]){h.length&&h[h.length-1]===s.substr(2).replace(">","")&&(h.pop(),c=c.parentNode);continue}var d,p=Hi(s.substr(1,s.length-2));if(p){d=a.document.createProcessingInstruction("timestamp",p),c.appendChild(d);continue}var f=s.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!f)continue;if(!(d=n(f[1],f[3])))continue;if(o=c,Yi[(u=d).localName]&&Yi[u.localName]!==o.localName)continue;f[2]&&(d.className=f[2].substr(1).replace("."," ")),h.push(f[1]),c.appendChild(d),c=d}return l}var Ki=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function Qi(e){for(var t=0;t<Ki.length;t++){var i=Ki[t];if(e>=i[0]&&e<=i[1])return!0}return!1}function Ji(){}function Zi(e,t,i){Ji.call(this),this.cue=t,this.cueDiv=$i(e,t.text);var r={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:""===t.vertical?"horizontal-tb":"lr"===t.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"};this.applyStyles(r,this.cueDiv),this.div=e.document.createElement("div"),r={direction:function(e){var t=[],i="";if(!e||!e.childNodes)return"ltr";function n(e,t){for(var i=t.childNodes.length-1;0<=i;i--)e.push(t.childNodes[i])}function a(e){if(!e||!e.length)return null;var t=e.pop(),i=t.textContent||t.innerText;if(i){var r=i.match(/^.*(\n|\r)/);return r?r[e.length=0]:i}return"ruby"===t.tagName?a(e):t.childNodes?(n(e,t),a(e)):void 0}for(n(t,e);i=a(t);)for(var r=0;r<i.length;r++)if(Qi(i.charCodeAt(r)))return"rtl";return"ltr"}(this.cueDiv),writingMode:""===t.vertical?"horizontal-tb":"lr"===t.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:"middle"===t.align?"center":t.align,font:i.font,whiteSpace:"pre-line",position:"absolute"},this.applyStyles(r),this.div.appendChild(this.cueDiv);var n=0;switch(t.positionAlign){case"start":n=t.position;break;case"middle":n=t.position-t.size/2;break;case"end":n=t.position-t.size}""===t.vertical?this.applyStyles({left:this.formatStyle(n,"%"),width:this.formatStyle(t.size,"%")}):this.applyStyles({top:this.formatStyle(n,"%"),height:this.formatStyle(t.size,"%")}),this.move=function(e){this.applyStyles({top:this.formatStyle(e.top,"px"),bottom:this.formatStyle(e.bottom,"px"),left:this.formatStyle(e.left,"px"),right:this.formatStyle(e.right,"px"),height:this.formatStyle(e.height,"px"),width:this.formatStyle(e.width,"px")})}}function er(e){var t,i,r,n;if(e.div){i=e.div.offsetHeight,r=e.div.offsetWidth,n=e.div.offsetTop;var a=(a=e.div.childNodes)&&(a=a[0])&&a.getClientRects&&a.getClientRects();e=e.div.getBoundingClientRect(),t=a?Math.max(a[0]&&a[0].height||0,e.height/a.length):0}this.left=e.left,this.right=e.right,this.top=e.top||n,this.height=e.height||i,this.bottom=e.bottom||n+(e.height||i),this.width=e.width||r,this.lineHeight=void 0!==t?t:e.lineHeight}function tr(e,t,o,u){var i=new er(t),r=t.cue,n=function(e){if("number"==typeof e.line&&(e.snapToLines||0<=e.line&&e.line<=100))return e.line;if(!e.track||!e.track.textTrackList||!e.track.textTrackList.mediaElement)return-1;for(var t=e.track,i=t.textTrackList,r=0,n=0;n<i.length&&i[n]!==t;n++)"showing"===i[n].mode&&r++;return-1*++r}(r),a=[];if(r.snapToLines){var s;switch(r.vertical){case"":a=["+y","-y"],s="height";break;case"rl":a=["+x","-x"],s="width";break;case"lr":a=["-x","+x"],s="width"}var l=i.lineHeight,c=l*Math.round(n),h=o[s]+l,d=a[0];Math.abs(c)>h&&(c=c<0?-1:1,c*=Math.ceil(h/l)*l),n<0&&(c+=""===r.vertical?o.height:o.width,a=a.reverse()),i.move(d,c)}else{var p=i.lineHeight/o.height*100;switch(r.lineAlign){case"middle":n-=p/2;break;case"end":n-=p}switch(r.vertical){case"":t.applyStyles({top:t.formatStyle(n,"%")});break;case"rl":t.applyStyles({left:t.formatStyle(n,"%")});break;case"lr":t.applyStyles({right:t.formatStyle(n,"%")})}a=["+y","-x","+x","-y"],i=new er(t)}var f=function(e,t){for(var i,r=new er(e),n=1,a=0;a<t.length;a++){for(;e.overlapsOppositeAxis(o,t[a])||e.within(o)&&e.overlapsAny(u);)e.move(t[a]);if(e.within(o))return e;var s=e.intersectPercentage(o);s<n&&(i=new er(e),n=s),e=new er(r)}return i||r}(i,a);t.move(f.toCSSCompatValues(o))}function ir(){}Ji.prototype.applyStyles=function(e,t){for(var i in t=t||this.div,e)e.hasOwnProperty(i)&&(t.style[i]=e[i])},Ji.prototype.formatStyle=function(e,t){return 0===e?0:e+t},(Zi.prototype=ji(Ji.prototype)).constructor=Zi,er.prototype.move=function(e,t){switch(t=void 0!==t?t:this.lineHeight,e){case"+x":this.left+=t,this.right+=t;break;case"-x":this.left-=t,this.right-=t;break;case"+y":this.top+=t,this.bottom+=t;break;case"-y":this.top-=t,this.bottom-=t}},er.prototype.overlaps=function(e){return this.left<e.right&&this.right>e.left&&this.top<e.bottom&&this.bottom>e.top},er.prototype.overlapsAny=function(e){for(var t=0;t<e.length;t++)if(this.overlaps(e[t]))return!0;return!1},er.prototype.within=function(e){return this.top>=e.top&&this.bottom<=e.bottom&&this.left>=e.left&&this.right<=e.right},er.prototype.overlapsOppositeAxis=function(e,t){switch(t){case"+x":return this.left<e.left;case"-x":return this.right>e.right;case"+y":return this.top<e.top;case"-y":return this.bottom>e.bottom}},er.prototype.intersectPercentage=function(e){return Math.max(0,Math.min(this.right,e.right)-Math.max(this.left,e.left))*Math.max(0,Math.min(this.bottom,e.bottom)-Math.max(this.top,e.top))/(this.height*this.width)},er.prototype.toCSSCompatValues=function(e){return{top:this.top-e.top,bottom:e.bottom-this.bottom,left:this.left-e.left,right:e.right-this.right,height:this.height,width:this.width}},er.getSimpleBoxPosition=function(e){var t=e.div?e.div.offsetHeight:e.tagName?e.offsetHeight:0,i=e.div?e.div.offsetWidth:e.tagName?e.offsetWidth:0,r=e.div?e.div.offsetTop:e.tagName?e.offsetTop:0;return{left:(e=e.div?e.div.getBoundingClientRect():e.tagName?e.getBoundingClientRect():e).left,right:e.right,top:e.top||r,height:e.height||t,bottom:e.bottom||r+(e.height||t),width:e.width||i}},ir.StringDecoder=function(){return{decode:function(e){if(!e)return"";if("string"!=typeof e)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(e))}}},ir.convertCueToDOMTree=function(e,t){return e&&t?$i(e,t):null};ir.processCues=function(r,n,e){if(!r||!n||!e)return null;for(;e.firstChild;)e.removeChild(e.firstChild);var a=r.document.createElement("div");if(a.style.position="absolute",a.style.left="0",a.style.right="0",a.style.top="0",a.style.bottom="0",a.style.margin="1.5%",e.appendChild(a),function(e){for(var t=0;t<e.length;t++)if(e[t].hasBeenReset||!e[t].displayState)return!0;return!1}(n)){var s=[],o=er.getSimpleBoxPosition(a),u={font:Math.round(.05*o.height*100)/100+"px sans-serif"};!function(){for(var e,t,i=0;i<n.length;i++)t=n[i],e=new Zi(r,t,u),a.appendChild(e.div),tr(0,e,o,s),t.displayState=e.div,s.push(er.getSimpleBoxPosition(e))}()}else for(var t=0;t<n.length;t++)a.appendChild(n[t].displayState)},(ir.Parser=function(e,t,i){i||(i=t,t={}),t||(t={}),this.window=e,this.vttjs=t,this.state="INITIAL",this.buffer="",this.decoder=i||new TextDecoder("utf8"),this.regionList=[]}).prototype={reportOrThrowError:function(e){if(!(e instanceof Fi))throw e;this.onparsingerror&&this.onparsingerror(e)},parse:function(e){var a=this;function t(){for(var e=a.buffer,t=0;t<e.length&&"\r"!==e[t]&&"\n"!==e[t];)++t;var i=e.substr(0,t);return"\r"===e[t]&&++t,"\n"===e[t]&&++t,a.buffer=e.substr(t),i}function i(e){e.match(/X-TIMESTAMP-MAP/)?qi(e,function(e,t){switch(e){case"X-TIMESTAMP-MAP":i=t,r=new Vi,qi(i,function(e,t){switch(e){case"MPEGT":r.integer(e+"S",t);break;case"LOCA":r.set(e+"L",Hi(t))}},/[^\d]:/,/,/),a.ontimestampmap&&a.ontimestampmap({MPEGTS:r.get("MPEGTS"),LOCAL:r.get("LOCAL")})}var i,r},/=/):qi(e,function(e,t){switch(e){case"Region":!function(e){var n=new Vi;if(qi(e,function(e,t){switch(e){case"id":n.set(e,t);break;case"width":n.percent(e,t);break;case"lines":n.integer(e,t);break;case"regionanchor":case"viewportanchor":var i=t.split(",");if(2!==i.length)break;var r=new Vi;if(r.percent("x",i[0]),r.percent("y",i[1]),!r.has("x")||!r.has("y"))break;n.set(e+"X",r.get("x")),n.set(e+"Y",r.get("y"));break;case"scroll":n.alt(e,t,["up"])}},/=/,/\s/),n.has("id")){var t=new(a.vttjs.VTTRegion||a.window.VTTRegion);t.width=n.get("width",100),t.lines=n.get("lines",3),t.regionAnchorX=n.get("regionanchorX",0),t.regionAnchorY=n.get("regionanchorY",100),t.viewportAnchorX=n.get("viewportanchorX",0),t.viewportAnchorY=n.get("viewportanchorY",100),t.scroll=n.get("scroll",""),a.onregion&&a.onregion(t),a.regionList.push({id:n.get("id"),region:t})}}(t)}},/:/)}e&&(a.buffer+=a.decoder.decode(e,{stream:!0}));try{var r;if("INITIAL"===a.state){if(!/\r\n|\n/.test(a.buffer))return this;var n=(r=t()).match(/^WEBVTT([ \t].*)?$/);if(!n||!n[0])throw new Fi(Fi.Errors.BadSignature);a.state="HEADER"}for(var s=!1;a.buffer;){if(!/\r\n|\n/.test(a.buffer))return this;switch(s?s=!1:r=t(),a.state){case"HEADER":/:/.test(r)?i(r):r||(a.state="ID");continue;case"NOTE":r||(a.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(r)){a.state="NOTE";break}if(!r)continue;if(a.cue=new(a.vttjs.VTTCue||a.window.VTTCue)(0,0,""),a.state="CUE",-1===r.indexOf("--\x3e")){a.cue.id=r;continue}case"CUE":try{Wi(r,a.cue,a.regionList)}catch(e){a.reportOrThrowError(e),a.cue=null,a.state="BADCUE";continue}a.state="CUETEXT";continue;case"CUETEXT":var o=-1!==r.indexOf("--\x3e");if(!r||o&&(s=!0)){a.oncue&&a.oncue(a.cue),a.cue=null,a.state="ID";continue}a.cue.text&&(a.cue.text+="\n"),a.cue.text+=r;continue;case"BADCUE":r||(a.state="ID");continue}}}catch(e){a.reportOrThrowError(e),"CUETEXT"===a.state&&a.cue&&a.oncue&&a.oncue(a.cue),a.cue=null,a.state="INITIAL"===a.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var t=this;try{if(t.buffer+=t.decoder.decode(),(t.cue||"HEADER"===t.state)&&(t.buffer+="\n\n",t.parse()),"INITIAL"===t.state)throw new Fi(Fi.Errors.BadSignature)}catch(e){t.reportOrThrowError(e)}return t.onflush&&t.onflush(),this}};var rr=ir,nr=Object.freeze({default:rr,__moduleExports:rr}),ar="auto",sr={"":1,lr:1,rl:1},or={start:1,middle:1,end:1,left:1,right:1};function ur(e){return"string"==typeof e&&(!!or[e.toLowerCase()]&&e.toLowerCase())}function lr(e,t,i){this.hasBeenReset=!1;var r="",n=!1,a=e,s=t,o=i,u=null,l="",c=!0,h="auto",d="start",p=50,f="middle",m=50,g="middle";Object.defineProperties(this,{id:{enumerable:!0,get:function(){return r},set:function(e){r=""+e}},pauseOnExit:{enumerable:!0,get:function(){return n},set:function(e){n=!!e}},startTime:{enumerable:!0,get:function(){return a},set:function(e){if("number"!=typeof e)throw new TypeError("Start time must be set to a number.");a=e,this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e)throw new TypeError("End time must be set to a number.");s=e,this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return o},set:function(e){o=""+e,this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return u},set:function(e){u=e,this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return l},set:function(e){var t,i="string"==typeof(t=e)&&!!sr[t.toLowerCase()]&&t.toLowerCase();if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");l=i,this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return c},set:function(e){c=!!e,this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return h},set:function(e){if("number"!=typeof e&&e!==ar)throw new SyntaxError("An invalid number or illegal string was specified.");h=e,this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return d},set:function(e){var t=ur(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");d=t,this.hasBeenReset=!0}},position:{enumerable:!0,get:function(){return p},set:function(e){if(e<0||100<e)throw new Error("Position must be between 0 and 100.");p=e,this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return f},set:function(e){var t=ur(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");f=t,this.hasBeenReset=!0}},size:{enumerable:!0,get:function(){return m},set:function(e){if(e<0||100<e)throw new Error("Size must be between 0 and 100.");m=e,this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return g},set:function(e){var t=ur(e);if(!t)throw new SyntaxError("An invalid or illegal string was specified.");g=t,this.hasBeenReset=!0}}}),this.displayState=void 0}lr.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)};var cr=lr,hr=Object.freeze({default:cr,__moduleExports:cr}),dr={"":!0,up:!0};function pr(e){return"number"==typeof e&&0<=e&&e<=100}var fr=function(){var t=100,i=3,r=0,n=100,a=0,s=100,o="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return t},set:function(e){if(!pr(e))throw new Error("Width must be between 0 and 100.");t=e}},lines:{enumerable:!0,get:function(){return i},set:function(e){if("number"!=typeof e)throw new TypeError("Lines must be set to a number.");i=e}},regionAnchorY:{enumerable:!0,get:function(){return n},set:function(e){if(!pr(e))throw new Error("RegionAnchorX must be between 0 and 100.");n=e}},regionAnchorX:{enumerable:!0,get:function(){return r},set:function(e){if(!pr(e))throw new Error("RegionAnchorY must be between 0 and 100.");r=e}},viewportAnchorY:{enumerable:!0,get:function(){return s},set:function(e){if(!pr(e))throw new Error("ViewportAnchorY must be between 0 and 100.");s=e}},viewportAnchorX:{enumerable:!0,get:function(){return a},set:function(e){if(!pr(e))throw new Error("ViewportAnchorX must be between 0 and 100.");a=e}},scroll:{enumerable:!0,get:function(){return o},set:function(e){var t,i="string"==typeof(t=e)&&!!dr[t.toLowerCase()]&&t.toLowerCase();if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");o=i}}})},mr=Object.freeze({default:fr,__moduleExports:fr}),gr=nr&&rr||nr,yr=hr&&cr||hr,vr=mr&&fr||mr,_r=t(function(e){var t=e.exports={WebVTT:gr,VTTCue:yr,VTTRegion:vr};g.vttjs=t,g.WebVTT=t.WebVTT;var i=t.VTTCue,r=t.VTTRegion,n=g.VTTCue,a=g.VTTRegion;t.shim=function(){g.VTTCue=i,g.VTTRegion=r},t.restore=function(){g.VTTCue=n,g.VTTRegion=a},g.VTTCue||t.shim()});_r.WebVTT,_r.VTTCue,_r.VTTRegion;var br=function(t){function n(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){};y(this,n),i.reportTouchActivity=!1;var r=b(this,t.call(this,null,i,e));return r.hasStarted_=!1,r.on("playing",function(){this.hasStarted_=!0}),r.on("loadstart",function(){this.hasStarted_=!1}),Bi.names.forEach(function(e){var t=Bi[e];i&&i[t.getterName]&&(r[t.privateName]=i[t.getterName])}),r.featuresProgressEvents||r.manualProgressOn(),r.featuresTimeupdateEvents||r.manualTimeUpdatesOn(),["Text","Audio","Video"].forEach(function(e){!1===i["native"+e+"Tracks"]&&(r["featuresNative"+e+"Tracks"]=!1)}),!1===i.nativeCaptions||!1===i.nativeTextTracks?r.featuresNativeTextTracks=!1:!0!==i.nativeCaptions&&!0!==i.nativeTextTracks||(r.featuresNativeTextTracks=!0),r.featuresNativeTextTracks||r.emulateTextTracks(),r.autoRemoteTextTracks_=new Bi.text.ListClass,r.initTrackListeners(),i.nativeControlsForTouch||r.emitTapEvents(),r.constructor&&(r.name_=r.constructor.name||"Unknown Tech"),r}return _(n,t),n.prototype.triggerSourceset=function(e){var t=this;this.isReady_||this.one("ready",function(){return t.setTimeout(function(){return t.triggerSourceset(e)},1)}),this.trigger({src:e,type:"sourceset"})},n.prototype.manualProgressOn=function(){this.on("durationchange",this.onDurationChange),this.manualProgress=!0,this.one("ready",this.trackProgress)},n.prototype.manualProgressOff=function(){this.manualProgress=!1,this.stopTrackingProgress(),this.off("durationchange",this.onDurationChange)},n.prototype.trackProgress=function(e){this.stopTrackingProgress(),this.progressInterval=this.setInterval(Oe(this,function(){var e=this.bufferedPercent();this.bufferedPercent_!==e&&this.trigger("progress"),1===(this.bufferedPercent_=e)&&this.stopTrackingProgress()}),500)},n.prototype.onDurationChange=function(e){this.duration_=this.duration()},n.prototype.buffered=function(){return bt(0,0)},n.prototype.bufferedPercent=function(){return Tt(this.buffered(),this.duration_)},n.prototype.stopTrackingProgress=function(){this.clearInterval(this.progressInterval)},n.prototype.manualTimeUpdatesOn=function(){this.manualTimeUpdates=!0,this.on("play",this.trackCurrentTime),this.on("pause",this.stopTrackingCurrentTime)},n.prototype.manualTimeUpdatesOff=function(){this.manualTimeUpdates=!1,this.stopTrackingCurrentTime(),this.off("play",this.trackCurrentTime),this.off("pause",this.stopTrackingCurrentTime)},n.prototype.trackCurrentTime=function(){this.currentTimeInterval&&this.stopTrackingCurrentTime(),this.currentTimeInterval=this.setInterval(function(){this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},250)},n.prototype.stopTrackingCurrentTime=function(){this.clearInterval(this.currentTimeInterval),this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},n.prototype.dispose=function(){this.clearTracks(Ui.names),this.manualProgress&&this.manualProgressOff(),this.manualTimeUpdates&&this.manualTimeUpdatesOff(),t.prototype.dispose.call(this)},n.prototype.clearTracks=function(e){var n=this;(e=[].concat(e)).forEach(function(e){for(var t=n[e+"Tracks"]()||[],i=t.length;i--;){var r=t[i];"text"===e&&n.removeRemoteTextTrack(r),t.removeTrack(r)}})},n.prototype.cleanupAutoTextTracks=function(){for(var e=this.autoRemoteTextTracks_||[],t=e.length;t--;){var i=e[t];this.removeRemoteTextTrack(i)}},n.prototype.reset=function(){},n.prototype.error=function(e){return void 0!==e&&(this.error_=new Lt(e),this.trigger("error")),this.error_},n.prototype.played=function(){return this.hasStarted_?bt(0,0):bt()},n.prototype.setCurrentTime=function(){this.manualTimeUpdates&&this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},n.prototype.initTrackListeners=function(){var n=this;Ui.names.forEach(function(e){var t=Ui[e],i=function(){n.trigger(e+"trackchange")},r=n[t.getterName]();r.addEventListener("removetrack",i),r.addEventListener("addtrack",i),n.on("dispose",function(){r.removeEventListener("removetrack",i),r.removeEventListener("addtrack",i)})})},n.prototype.addWebVttScript_=function(){var e=this;if(!g.WebVTT)if(p.body.contains(this.el())){if(!this.options_["vtt.js"]&&w(_r)&&0<Object.keys(_r).length)return void this.trigger("vttjsloaded");var t=p.createElement("script");t.src=this.options_["vtt.js"]||"https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js",t.onload=function(){e.trigger("vttjsloaded")},t.onerror=function(){e.trigger("vttjserror")},this.on("dispose",function(){t.onload=null,t.onerror=null}),g.WebVTT=!0,this.el().parentNode.appendChild(t)}else this.ready(this.addWebVttScript_)},n.prototype.emulateTextTracks=function(){var e=this,i=this.textTracks(),t=this.remoteTextTracks(),r=function(e){return i.addTrack(e.track)},n=function(e){return i.removeTrack(e.track)};t.on("addtrack",r),t.on("removetrack",n),this.addWebVttScript_();var a=function(){return e.trigger("texttrackchange")},s=function(){a();for(var e=0;e<i.length;e++){var t=i[e];t.removeEventListener("cuechange",a),"showing"===t.mode&&t.addEventListener("cuechange",a)}};s(),i.addEventListener("change",s),i.addEventListener("addtrack",s),i.addEventListener("removetrack",s),this.on("dispose",function(){t.off("addtrack",r),t.off("removetrack",n),i.removeEventListener("change",s),i.removeEventListener("addtrack",s),i.removeEventListener("removetrack",s);for(var e=0;e<i.length;e++){i[e].removeEventListener("cuechange",a)}})},n.prototype.addTextTrack=function(e,t,i){if(!e)throw new Error("TextTrack kind is required but was not provided");return function(e,t,i,r){var n=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},a=e.textTracks();n.kind=t,i&&(n.label=i),r&&(n.language=r),n.tech=e;var s=new Bi.text.TrackClass(n);return a.addTrack(s),s}(this,e,t,i)},n.prototype.createRemoteTextTrack=function(e){var t=Ge(e,{tech:this});return new Ni.remoteTextEl.TrackClass(t)},n.prototype.addRemoteTextTrack=function(){var e=this,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=this.createRemoteTextTrack(t);return!0!==i&&!1!==i&&(f.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),i=!0),this.remoteTextTrackEls().addTrackElement_(r),this.remoteTextTracks().addTrack(r.track),!0!==i&&this.ready(function(){return e.autoRemoteTextTracks_.addTrack(r.track)}),r},n.prototype.removeRemoteTextTrack=function(e){var t=this.remoteTextTrackEls().getTrackElementByTrack_(e);this.remoteTextTrackEls().removeTrackElement_(t),this.remoteTextTracks().removeTrack(e),this.autoRemoteTextTracks_.removeTrack(e)},n.prototype.getVideoPlaybackQuality=function(){return{}},n.prototype.setPoster=function(){},n.prototype.playsinline=function(){},n.prototype.setPlaysinline=function(){},n.prototype.overrideNativeAudioTracks=function(){},n.prototype.overrideNativeVideoTracks=function(){},n.prototype.canPlayType=function(){return""},n.canPlayType=function(){return""},n.canPlaySource=function(e,t){return n.canPlayType(e.type)},n.isTech=function(e){return e.prototype instanceof n||e instanceof n||e===n},n.registerTech=function(e,t){if(n.techs_||(n.techs_={}),!n.isTech(t))throw new Error("Tech "+e+" must be a Tech");if(!n.canPlayType)throw new Error("Techs must have a static canPlayType method on them");if(!n.canPlaySource)throw new Error("Techs must have a static canPlaySource method on them");return e=ze(e),n.techs_[e]=t,"Tech"!==e&&n.defaultTechOrder_.push(e),t},n.getTech=function(e){if(e)return e=ze(e),n.techs_&&n.techs_[e]?n.techs_[e]:g&&g.videojs&&g.videojs[e]?(f.warn("The "+e+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),g.videojs[e]):void 0},n}(Xe);Bi.names.forEach(function(e){var t=Bi[e];br.prototype[t.getterName]=function(){return this[t.privateName]=this[t.privateName]||new t.ListClass,this[t.privateName]}}),br.prototype.featuresVolumeControl=!0,br.prototype.featuresMuteControl=!0,br.prototype.featuresFullscreenResize=!1,br.prototype.featuresPlaybackRate=!1,br.prototype.featuresProgressEvents=!1,br.prototype.featuresSourceset=!1,br.prototype.featuresTimeupdateEvents=!1,br.prototype.featuresNativeTextTracks=!1,br.withSourceHandlers=function(n){n.registerSourceHandler=function(e,t){var i=n.sourceHandlers;i||(i=n.sourceHandlers=[]),void 0===t&&(t=i.length),i.splice(t,0,e)},n.canPlayType=function(e){for(var t=n.sourceHandlers||[],i=void 0,r=0;r<t.length;r++)if(i=t[r].canPlayType(e))return i;return""},n.selectSourceHandler=function(e,t){for(var i=n.sourceHandlers||[],r=0;r<i.length;r++)if(i[r].canHandleSource(e,t))return i[r];return null},n.canPlaySource=function(e,t){var i=n.selectSourceHandler(e,t);return i?i.canHandleSource(e,t):""};["seekable","seeking","duration"].forEach(function(e){var t=this[e];"function"==typeof t&&(this[e]=function(){return this.sourceHandler_&&this.sourceHandler_[e]?this.sourceHandler_[e].apply(this.sourceHandler_,arguments):t.apply(this,arguments)})},n.prototype),n.prototype.setSource=function(e){var t=n.selectSourceHandler(e,this.options_);t||(n.nativeSourceHandler?t=n.nativeSourceHandler:f.error("No source handler found for the current source.")),this.disposeSourceHandler(),this.off("dispose",this.disposeSourceHandler),t!==n.nativeSourceHandler&&(this.currentSource_=e),this.sourceHandler_=t.handleSource(e,this,this.options_),this.on("dispose",this.disposeSourceHandler)},n.prototype.disposeSourceHandler=function(){this.currentSource_&&(this.clearTracks(["audio","video"]),this.currentSource_=null),this.cleanupAutoTextTracks(),this.sourceHandler_&&(this.sourceHandler_.dispose&&this.sourceHandler_.dispose(),this.sourceHandler_=null)}},Xe.registerComponent("Tech",br),br.registerTech("Tech",br),br.defaultTechOrder_=[];var Tr={},Sr={},kr={};function Cr(e,t,i){e.setTimeout(function(){return function i(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];var n=arguments[2];var a=arguments[3];var s=4<arguments.length&&void 0!==arguments[4]?arguments[4]:[];var o=5<arguments.length&&void 0!==arguments[5]&&arguments[5];var t=e[0],u=e.slice(1);if("string"==typeof t)i(r,Tr[t],n,a,s,o);else if(t){var l=function(e,t){var i=Sr[e.id()],r=null;if(null==i)return r=t(e),Sr[e.id()]=[[t,r]],r;for(var n=0;n<i.length;n++){var a=i[n],s=a[0],o=a[1];s===t&&(r=o)}null===r&&(r=t(e),i.push([t,r]));return r}(a,t);if(!l.setSource)return s.push(l),i(r,u,n,a,s,o);l.setSource(C({},r),function(e,t){if(e)return i(r,u,n,a,s,o);s.push(l),i(t,r.type===t.type?u:Tr[t.type],n,a,s,o)})}else u.length?i(r,u,n,a,s,o):o?n(r,s):i(r,Tr["*"],n,a,s,!0)}(t,Tr[t.type],i,e)},1)}function Er(e,t,i){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,n="call"+ze(i),a=e.reduce(Pr(n),r),s=a===kr,o=s?null:t[i](a);return function(e,t,i,r){for(var n=e.length-1;0<=n;n--){var a=e[n];a[t]&&a[t](r,i)}}(e,i,o,s),o}var wr={buffered:1,currentTime:1,duration:1,seekable:1,played:1,paused:1},Ar={setCurrentTime:1},Lr={play:1,pause:1};function Pr(i){return function(e,t){return e===kr?kr:t[i]?t[i](e):e}}var Or={opus:"video/ogg",ogv:"video/ogg",mp4:"video/mp4",mov:"video/mp4",m4v:"video/mp4",mkv:"video/x-matroska",mp3:"audio/mpeg",aac:"audio/aac",oga:"audio/ogg",m3u8:"application/x-mpegURL"},Ir=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=ei(e);return Or[t.toLowerCase()]||""};function xr(e){var t=Ir(e.src);return!e.type&&t&&(e.type=t),e}var Dr=function(l){function c(e,t,i){y(this,c);var r=Ge({createEl:!1},t),n=b(this,l.call(this,e,r,i));if(t.playerOptions.sources&&0!==t.playerOptions.sources.length)e.src(t.playerOptions.sources);else for(var a=0,s=t.playerOptions.techOrder;a<s.length;a++){var o=ze(s[a]),u=br.getTech(o);if(o||(u=Xe.getComponent(o)),u&&u.isSupported()){e.loadTech_(o);break}}return n}return _(c,l),c}(Xe);Xe.registerComponent("MediaLoader",Dr);var Rr=function(n){function r(e,t){y(this,r);var i=b(this,n.call(this,e,t));return i.emitTapEvents(),i.enable(),i}return _(r,n),r.prototype.createEl=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"div",t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};t=C({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass(),tabIndex:0},t),"button"===e&&f.error("Creating a ClickableComponent with an HTML element of "+e+" is not supported; use a Button instead."),i=C({role:"button"},i),this.tabIndex_=t.tabIndex;var r=n.prototype.createEl.call(this,e,t,i);return this.createControlTextEl(r),r},r.prototype.dispose=function(){this.controlTextEl_=null,n.prototype.dispose.call(this)},r.prototype.createControlTextEl=function(e){return this.controlTextEl_=M("span",{className:"vjs-control-text"},{"aria-live":"polite"}),e&&e.appendChild(this.controlTextEl_),this.controlText(this.controlText_,e),this.controlTextEl_},r.prototype.controlText=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.el();if(void 0===e)return this.controlText_||"Need Text";var i=this.localize(e);this.controlText_=e,U(this.controlTextEl_,i),this.nonIconControl||t.setAttribute("title",i)},r.prototype.buildCSSClass=function(){return"vjs-control vjs-button "+n.prototype.buildCSSClass.call(this)},r.prototype.enable=function(){this.enabled_||(this.enabled_=!0,this.removeClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","false"),"undefined"!=typeof this.tabIndex_&&this.el_.setAttribute("tabIndex",this.tabIndex_),this.on(["tap","click"],this.handleClick),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur))},r.prototype.disable=function(){this.enabled_=!1,this.addClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","true"),"undefined"!=typeof this.tabIndex_&&this.el_.removeAttribute("tabIndex"),this.off(["tap","click"],this.handleClick),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur)},r.prototype.handleClick=function(e){},r.prototype.handleFocus=function(e){_e(p,"keydown",Oe(this,this.handleKeyPress))},r.prototype.handleKeyPress=function(e){32===e.which||13===e.which?(e.preventDefault(),this.trigger("click")):n.prototype.handleKeyPress&&n.prototype.handleKeyPress.call(this,e)},r.prototype.handleBlur=function(e){be(p,"keydown",Oe(this,this.handleKeyPress))},r}(Xe);Xe.registerComponent("ClickableComponent",Rr);var Mr=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.update(),e.on("posterchange",Oe(i,i.update)),i}return _(n,r),n.prototype.dispose=function(){this.player().off("posterchange",this.update),r.prototype.dispose.call(this)},n.prototype.createEl=function(){return M("div",{className:"vjs-poster",tabIndex:-1})},n.prototype.update=function(e){var t=this.player().poster();this.setSrc(t),t?this.show():this.hide()},n.prototype.setSrc=function(e){var t="";e&&(t='url("'+e+'")'),this.el_.style.backgroundImage=t},n.prototype.handleClick=function(e){this.player_.controls()&&(this.player_.paused()?xt(this.player_.play()):this.player_.pause())},n}(Rr);Xe.registerComponent("PosterImage",Mr);var Ur="#222",Nr={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'};function Br(e,t){var i=void 0;if(4===e.length)i=e[1]+e[1]+e[2]+e[2]+e[3]+e[3];else{if(7!==e.length)throw new Error("Invalid color code provided, "+e+"; must be formatted as e.g. #f0e or #f604e2.");i=e.slice(1)}return"rgba("+parseInt(i.slice(0,2),16)+","+parseInt(i.slice(2,4),16)+","+parseInt(i.slice(4,6),16)+","+t+")"}function jr(e,t,i){try{e.style[t]=i}catch(e){return}}var Fr=function(n){function a(i,e,t){y(this,a);var r=b(this,n.call(this,i,e,t));return i.on("loadstart",Oe(r,r.toggleDisplay)),i.on("texttrackchange",Oe(r,r.updateDisplay)),i.on("loadstart",Oe(r,r.preselectTrack)),i.ready(Oe(r,function(){if(i.tech_&&i.tech_.featuresNativeTextTracks)this.hide();else{i.on("fullscreenchange",Oe(this,this.updateDisplay));for(var e=this.options_.playerOptions.tracks||[],t=0;t<e.length;t++)this.player_.addRemoteTextTrack(e[t],!0);this.preselectTrack()}})),r}return _(a,n),a.prototype.preselectTrack=function(){for(var e={captions:1,subtitles:1},t=this.player_.textTracks(),i=this.player_.cache_.selectedLanguage,r=void 0,n=void 0,a=void 0,s=0;s<t.length;s++){var o=t[s];i&&i.enabled&&i.language===o.language?o.kind===i.kind?a=o:a||(a=o):i&&!i.enabled?n=r=a=null:o.default&&("descriptions"!==o.kind||r?o.kind in e&&!n&&(n=o):r=o)}a?a.mode="showing":n?n.mode="showing":r&&(r.mode="showing")},a.prototype.toggleDisplay=function(){this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide():this.show()},a.prototype.createEl=function(){return n.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"},{"aria-live":"off","aria-atomic":"true"})},a.prototype.clearDisplay=function(){"function"==typeof g.WebVTT&&g.WebVTT.processCues(g,[],this.el_)},a.prototype.updateDisplay=function(){var e=this.player_.textTracks();this.clearDisplay();for(var t=null,i=null,r=e.length;r--;){var n=e[r];"showing"===n.mode&&("descriptions"===n.kind?t=n:i=n)}i?("off"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","off"),this.updateForTrack(i)):t&&("assertive"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","assertive"),this.updateForTrack(t))},a.prototype.updateForTrack=function(e){if("function"==typeof g.WebVTT&&e.activeCues){for(var t=[],i=0;i<e.activeCues.length;i++)t.push(e.activeCues[i]);if(g.WebVTT.processCues(g,t,this.el_),this.player_.textTrackSettings)for(var r=this.player_.textTrackSettings.getValues(),n=t.length;n--;){var a=t[n];if(a){var s=a.displayState;if(r.color&&(s.firstChild.style.color=r.color),r.textOpacity&&jr(s.firstChild,"color",Br(r.color||"#fff",r.textOpacity)),r.backgroundColor&&(s.firstChild.style.backgroundColor=r.backgroundColor),r.backgroundOpacity&&jr(s.firstChild,"backgroundColor",Br(r.backgroundColor||"#000",r.backgroundOpacity)),r.windowColor&&(r.windowOpacity?jr(s,"backgroundColor",Br(r.windowColor,r.windowOpacity)):s.style.backgroundColor=r.windowColor),r.edgeStyle&&("dropshadow"===r.edgeStyle?s.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px "+Ur:"raised"===r.edgeStyle?s.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px "+Ur:"depressed"===r.edgeStyle?s.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px "+Ur:"uniform"===r.edgeStyle&&(s.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px "+Ur)),r.fontPercent&&1!==r.fontPercent){var o=g.parseFloat(s.style.fontSize);s.style.fontSize=o*r.fontPercent+"px",s.style.height="auto",s.style.top="auto",s.style.bottom="2px"}r.fontFamily&&"default"!==r.fontFamily&&("small-caps"===r.fontFamily?s.firstChild.style.fontVariant="small-caps":s.firstChild.style.fontFamily=Nr[r.fontFamily])}}}},a}(Xe);Xe.registerComponent("TextTrackDisplay",Fr);var Hr=function(n){function e(){return y(this,e),b(this,n.apply(this,arguments))}return _(e,n),e.prototype.createEl=function(){var e=this.player_.isAudio(),t=this.localize(e?"Audio Player":"Video Player"),i=M("span",{className:"vjs-control-text",innerHTML:this.localize("{1} is loading.",[t])}),r=n.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner",dir:"ltr"});return r.appendChild(i),r},e}(Xe);Xe.registerComponent("LoadingSpinner",Hr);var Vr=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};t=C({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass()},t),i=C({type:"button"},i);var r=Xe.prototype.createEl.call(this,"button",t,i);return this.createControlTextEl(r),r},e.prototype.addChild=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=this.constructor.name;return f.warn("Adding an actionable (user controllable) child to a Button ("+i+") is not supported; use a ClickableComponent instead."),Xe.prototype.addChild.call(this,e,t)},e.prototype.enable=function(){t.prototype.enable.call(this),this.el_.removeAttribute("disabled")},e.prototype.disable=function(){t.prototype.disable.call(this),this.el_.setAttribute("disabled","disabled")},e.prototype.handleKeyPress=function(e){32!==e.which&&13!==e.which&&t.prototype.handleKeyPress.call(this,e)},e}(Rr);Xe.registerComponent("Button",Vr);var qr=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.mouseused_=!1,i.on("mousedown",i.handleMouseDown),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-big-play-button"},n.prototype.handleClick=function(e){var t=this.player_.play();if(this.mouseused_&&e.clientX&&e.clientY)xt(t);else{var i=this.player_.getChild("controlBar"),r=i&&i.getChild("playToggle");if(r){var n=function(){return r.focus()};It(t)?t.then(n,function(){}):this.setTimeout(n,1)}else this.player_.focus()}},n.prototype.handleKeyPress=function(e){this.mouseused_=!1,r.prototype.handleKeyPress.call(this,e)},n.prototype.handleMouseDown=function(e){this.mouseused_=!0},n}(Vr);qr.prototype.controlText_="Play Video",Xe.registerComponent("BigPlayButton",qr);var Wr=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.controlText(t&&t.controlText||i.localize("Close")),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-close-button "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(e){this.trigger({type:"close",bubbles:!1})},n}(Vr);Xe.registerComponent("CloseButton",Wr);var zr=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.on(e,"play",i.handlePlay),i.on(e,"pause",i.handlePause),i.on(e,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-play-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(e){this.player_.paused()?this.player_.play():this.player_.pause()},n.prototype.handleSeeked=function(e){this.removeClass("vjs-ended"),this.player_.paused()?this.handlePause(e):this.handlePlay(e)},n.prototype.handlePlay=function(e){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.controlText("Pause")},n.prototype.handlePause=function(e){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.controlText("Play")},n.prototype.handleEnded=function(e){this.removeClass("vjs-playing"),this.addClass("vjs-ended"),this.controlText("Replay"),this.one(this.player_,"seeked",this.handleSeeked)},n}(Vr);zr.prototype.controlText_="Play",Xe.registerComponent("PlayToggle",zr);var Gr=function(e,t){e=e<0?0:e;var i=Math.floor(e%60),r=Math.floor(e/60%60),n=Math.floor(e/3600),a=Math.floor(t/60%60),s=Math.floor(t/3600);return(isNaN(e)||e===1/0)&&(n=r=i="-"),(n=0<n||0<s?n+":":"")+(r=((n||10<=a)&&r<10?"0"+r:r)+":")+(i=i<10?"0"+i:i)},Xr=Gr;function Yr(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:e;return Xr(e,t)}var $r=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.throttledUpdateContent=Ie(Oe(i,i.updateContent),25),i.on(e,"timeupdate",i.throttledUpdateContent),i}return _(n,r),n.prototype.createEl=function(e){var t=this.buildCSSClass(),i=r.prototype.createEl.call(this,"div",{className:t+" vjs-time-control vjs-control",innerHTML:'<span class="vjs-control-text">'+this.localize(this.labelText_)+" </span>"});return this.contentEl_=M("span",{className:t+"-display"},{"aria-live":"off"}),this.updateTextNode_(),i.appendChild(this.contentEl_),i},n.prototype.dispose=function(){this.contentEl_=null,this.textNode_=null,r.prototype.dispose.call(this)},n.prototype.updateTextNode_=function(){if(this.contentEl_){for(;this.contentEl_.firstChild;)this.contentEl_.removeChild(this.contentEl_.firstChild);this.textNode_=p.createTextNode(this.formattedTime_||this.formatTime_(0)),this.contentEl_.appendChild(this.textNode_)}},n.prototype.formatTime_=function(e){return Yr(e)},n.prototype.updateFormattedTime_=function(e){var t=this.formatTime_(e);t!==this.formattedTime_&&(this.formattedTime_=t,this.requestAnimationFrame(this.updateTextNode_))},n.prototype.updateContent=function(e){},n}(Xe);$r.prototype.labelText_="Time",$r.prototype.controlText_="Time",Xe.registerComponent("TimeDisplay",$r);var Kr=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.on(e,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-current-time"},n.prototype.updateContent=function(e){var t=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();this.updateFormattedTime_(t)},n.prototype.handleEnded=function(e){this.player_.duration()&&this.updateFormattedTime_(this.player_.duration())},n}($r);Kr.prototype.labelText_="Current Time",Kr.prototype.controlText_="Current Time",Xe.registerComponent("CurrentTimeDisplay",Kr);var Qr=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.on(e,"durationchange",i.updateContent),i.on(e,"loadedmetadata",i.throttledUpdateContent),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-duration"},n.prototype.updateContent=function(e){var t=this.player_.duration();t&&this.duration_!==t&&(this.duration_=t,this.updateFormattedTime_(t))},n}($r);Qr.prototype.labelText_="Duration",Qr.prototype.controlText_="Duration",Xe.registerComponent("DurationDisplay",Qr);var Jr=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-time-control vjs-time-divider",innerHTML:"<div><span>/</span></div>"})},t}(Xe);Xe.registerComponent("TimeDivider",Jr);var Zr=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.on(e,"durationchange",i.throttledUpdateContent),i.on(e,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-remaining-time"},n.prototype.formatTime_=function(e){return"-"+r.prototype.formatTime_.call(this,e)},n.prototype.updateContent=function(e){this.player_.duration()&&(this.player_.remainingTimeDisplay?this.updateFormattedTime_(this.player_.remainingTimeDisplay()):this.updateFormattedTime_(this.player_.remainingTime()))},n.prototype.handleEnded=function(e){this.player_.duration()&&this.updateFormattedTime_(0)},n}($r);Zr.prototype.labelText_="Remaining Time",Zr.prototype.controlText_="Remaining Time",Xe.registerComponent("RemainingTimeDisplay",Zr);var en=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.updateShowing(),i.on(i.player(),"durationchange",i.updateShowing),i}return _(n,r),n.prototype.createEl=function(){var e=r.prototype.createEl.call(this,"div",{className:"vjs-live-control vjs-control"});return this.contentEl_=M("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Stream Type")+" </span>"+this.localize("LIVE")},{"aria-live":"off"}),e.appendChild(this.contentEl_),e},n.prototype.dispose=function(){this.contentEl_=null,r.prototype.dispose.call(this)},n.prototype.updateShowing=function(e){this.player().duration()===1/0?this.show():this.hide()},n}(Xe);Xe.registerComponent("LiveDisplay",en);var tn=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.bar=i.getChild(i.options_.barName),i.vertical(!!i.options_.vertical),i.enable(),i}return _(n,r),n.prototype.enabled=function(){return this.enabled_},n.prototype.enable=function(){this.enabled()||(this.on("mousedown",this.handleMouseDown),this.on("touchstart",this.handleMouseDown),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur),this.on("click",this.handleClick),this.on(this.player_,"controlsvisible",this.update),this.playerEvent&&this.on(this.player_,this.playerEvent,this.update),this.removeClass("disabled"),this.setAttribute("tabindex",0),this.enabled_=!0)},n.prototype.disable=function(){if(this.enabled()){var e=this.bar.el_.ownerDocument;this.off("mousedown",this.handleMouseDown),this.off("touchstart",this.handleMouseDown),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur),this.off("click",this.handleClick),this.off(this.player_,"controlsvisible",this.update),this.off(e,"mousemove",this.handleMouseMove),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchmove",this.handleMouseMove),this.off(e,"touchend",this.handleMouseUp),this.removeAttribute("tabindex"),this.addClass("disabled"),this.playerEvent&&this.off(this.player_,this.playerEvent,this.update),this.enabled_=!1}},n.prototype.createEl=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return t.className=t.className+" vjs-slider",t=C({tabIndex:0},t),i=C({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},i),r.prototype.createEl.call(this,e,t,i)},n.prototype.handleMouseDown=function(e){var t=this.bar.el_.ownerDocument;"mousedown"===e.type&&e.preventDefault(),"touchstart"!==e.type||ht||e.preventDefault(),X(),this.addClass("vjs-sliding"),this.trigger("slideractive"),this.on(t,"mousemove",this.handleMouseMove),this.on(t,"mouseup",this.handleMouseUp),this.on(t,"touchmove",this.handleMouseMove),this.on(t,"touchend",this.handleMouseUp),this.handleMouseMove(e)},n.prototype.handleMouseMove=function(e){},n.prototype.handleMouseUp=function(){var e=this.bar.el_.ownerDocument;Y(),this.removeClass("vjs-sliding"),this.trigger("sliderinactive"),this.off(e,"mousemove",this.handleMouseMove),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchmove",this.handleMouseMove),this.off(e,"touchend",this.handleMouseUp),this.update()},n.prototype.update=function(){if(this.el_){var e=this.getPercent(),t=this.bar;if(t){("number"!=typeof e||e!=e||e<0||e===1/0)&&(e=0);var i=(100*e).toFixed(2)+"%",r=t.el().style;return this.vertical()?r.height=i:r.width=i,e}}},n.prototype.calculateDistance=function(e){var t=Q(this.el_,e);return this.vertical()?t.y:t.x},n.prototype.handleFocus=function(){this.on(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},n.prototype.handleKeyPress=function(e){37===e.which||40===e.which?(e.preventDefault(),this.stepBack()):38!==e.which&&39!==e.which||(e.preventDefault(),this.stepForward())},n.prototype.handleBlur=function(){this.off(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},n.prototype.handleClick=function(e){e.stopImmediatePropagation(),e.preventDefault()},n.prototype.vertical=function(e){if(void 0===e)return this.vertical_||!1;this.vertical_=!!e,this.vertical_?this.addClass("vjs-slider-vertical"):this.addClass("vjs-slider-horizontal")},n}(Xe);Xe.registerComponent("Slider",tn);var rn=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.partEls_=[],i.on(e,"progress",i.update),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Loaded")+"</span>: 0%</span>"})},n.prototype.dispose=function(){this.partEls_=null,r.prototype.dispose.call(this)},n.prototype.update=function(e){var t=this.player_.buffered(),i=this.player_.duration(),r=this.player_.bufferedEnd(),n=this.partEls_,a=function(e,t){var i=e/t||0;return 100*(1<=i?1:i)+"%"};this.el_.style.width=a(r,i);for(var s=0;s<t.length;s++){var o=t.start(s),u=t.end(s),l=n[s];l||(l=this.el_.appendChild(M()),n[s]=l),l.style.left=a(o,r),l.style.width=a(u-o,r)}for(var c=n.length;c>t.length;c--)this.el_.removeChild(n[c-1]);n.length=t.length},n}(Xe);Xe.registerComponent("LoadProgressBar",rn);var nn=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-time-tooltip"})},t.prototype.update=function(e,t,i){var r=$(this.el_),n=$(this.player_.el()),a=e.width*t;if(n&&r){var s=e.left-n.left+a,o=e.width-a+(n.right-e.right),u=r.width/2;s<u?u+=u-s:o<u&&(u=o),u<0?u=0:u>r.width&&(u=r.width),this.el_.style.right="-"+u+"px",U(this.el_,i)}},t}(Xe);Xe.registerComponent("TimeTooltip",nn);var an=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-play-progress vjs-slider-bar",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Progress")+"</span>: 0%</span>"})},t.prototype.update=function(i,r){var n=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var e=Yr(n.player_.scrubbing()?n.player_.getCache().currentTime:n.player_.currentTime(),n.player_.duration()),t=n.getChild("timeTooltip");t&&t.update(i,r,e)})},t}(Xe);an.prototype.options_={children:[]},nt||st||an.prototype.options_.children.push("timeTooltip"),Xe.registerComponent("PlayProgressBar",an);var sn=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.update=Ie(Oe(i,i.update),25),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})},n.prototype.update=function(i,r){var n=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var e=n.player_.duration(),t=Yr(r*e,e);n.el_.style.left=i.width*r+"px",n.getChild("timeTooltip").update(i,r,t)})},n}(Xe);sn.prototype.options_={children:["timeTooltip"]},Xe.registerComponent("MouseTimeDisplay",sn);var on=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.setEventHandlers_(),i}return _(n,r),n.prototype.setEventHandlers_=function(){var e=this;this.update=Ie(Oe(this,this.update),30),this.on(this.player_,"timeupdate",this.update),this.on(this.player_,"ended",this.handleEnded),this.updateInterval=null,this.on(this.player_,["playing"],function(){e.clearInterval(e.updateInterval),e.updateInterval=e.setInterval(function(){e.requestAnimationFrame(function(){e.update()})},30)}),this.on(this.player_,["ended","pause","waiting"],function(){e.clearInterval(e.updateInterval)}),this.on(this.player_,["timeupdate","ended"],this.update)},n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-progress-holder"},{"aria-label":this.localize("Progress Bar")})},n.prototype.update_=function(e,t){var i=this.player_.duration();this.el_.setAttribute("aria-valuenow",(100*t).toFixed(2)),this.el_.setAttribute("aria-valuetext",this.localize("progress bar timing: currentTime={1} duration={2}",[Yr(e,i),Yr(i,i)],"{1} of {2}")),this.bar.update($(this.el_),t)},n.prototype.update=function(e){var t=r.prototype.update.call(this);return this.update_(this.getCurrentTime_(),t),t},n.prototype.getCurrentTime_=function(){return this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()},n.prototype.handleEnded=function(e){this.update_(this.player_.duration(),1)},n.prototype.getPercent=function(){var e=this.getCurrentTime_()/this.player_.duration();return 1<=e?1:e||0},n.prototype.handleMouseDown=function(e){re(e)&&(e.stopPropagation(),this.player_.scrubbing(!0),this.videoWasPlaying=!this.player_.paused(),this.player_.pause(),r.prototype.handleMouseDown.call(this,e))},n.prototype.handleMouseMove=function(e){if(re(e)){var t=this.calculateDistance(e)*this.player_.duration();t===this.player_.duration()&&(t-=.1),this.player_.currentTime(t)}},n.prototype.enable=function(){r.prototype.enable.call(this);var e=this.getChild("mouseTimeDisplay");e&&e.show()},n.prototype.disable=function(){r.prototype.disable.call(this);var e=this.getChild("mouseTimeDisplay");e&&e.hide()},n.prototype.handleMouseUp=function(e){r.prototype.handleMouseUp.call(this,e),e&&e.stopPropagation(),this.player_.scrubbing(!1),this.player_.trigger({type:"timeupdate",target:this,manuallyTriggered:!0}),this.videoWasPlaying&&xt(this.player_.play())},n.prototype.stepForward=function(){this.player_.currentTime(this.player_.currentTime()+5)},n.prototype.stepBack=function(){this.player_.currentTime(this.player_.currentTime()-5)},n.prototype.handleAction=function(e){this.player_.paused()?this.player_.play():this.player_.pause()},n.prototype.handleKeyPress=function(e){32===e.which||13===e.which?(e.preventDefault(),this.handleAction(e)):r.prototype.handleKeyPress&&r.prototype.handleKeyPress.call(this,e)},n}(tn);on.prototype.options_={children:["loadProgressBar","playProgressBar"],barName:"playProgressBar"},nt||st||on.prototype.options_.children.splice(1,0,"mouseTimeDisplay"),on.prototype.playerEvent="timeupdate",Xe.registerComponent("SeekBar",on);var un=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.handleMouseMove=Ie(Oe(i,i.handleMouseMove),25),i.throttledHandleMouseSeek=Ie(Oe(i,i.handleMouseSeek),25),i.enable(),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})},n.prototype.handleMouseMove=function(e){var t=this.getChild("seekBar");if(t){var i=t.getChild("mouseTimeDisplay"),r=t.el(),n=$(r),a=Q(r,e).x;1<a?a=1:a<0&&(a=0),i&&i.update(n,a)}},n.prototype.handleMouseSeek=function(e){var t=this.getChild("seekBar");t&&t.handleMouseMove(e)},n.prototype.enabled=function(){return this.enabled_},n.prototype.disable=function(){this.children().forEach(function(e){return e.disable&&e.disable()}),this.enabled()&&(this.off(["mousedown","touchstart"],this.handleMouseDown),this.off(this.el_,"mousemove",this.handleMouseMove),this.handleMouseUp(),this.addClass("disabled"),this.enabled_=!1)},n.prototype.enable=function(){this.children().forEach(function(e){return e.enable&&e.enable()}),this.enabled()||(this.on(["mousedown","touchstart"],this.handleMouseDown),this.on(this.el_,"mousemove",this.handleMouseMove),this.removeClass("disabled"),this.enabled_=!0)},n.prototype.handleMouseDown=function(e){var t=this.el_.ownerDocument,i=this.getChild("seekBar");i&&i.handleMouseDown(e),this.on(t,"mousemove",this.throttledHandleMouseSeek),this.on(t,"touchmove",this.throttledHandleMouseSeek),this.on(t,"mouseup",this.handleMouseUp),this.on(t,"touchend",this.handleMouseUp)},n.prototype.handleMouseUp=function(e){var t=this.el_.ownerDocument,i=this.getChild("seekBar");i&&i.handleMouseUp(e),this.off(t,"mousemove",this.throttledHandleMouseSeek),this.off(t,"touchmove",this.throttledHandleMouseSeek),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchend",this.handleMouseUp)},n}(Xe);un.prototype.options_={children:["seekBar"]},Xe.registerComponent("ProgressControl",un);var ln=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.on(e,"fullscreenchange",i.handleFullscreenChange),!1===p[St.fullscreenEnabled]&&i.disable(),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-fullscreen-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleFullscreenChange=function(e){this.player_.isFullscreen()?this.controlText("Non-Fullscreen"):this.controlText("Fullscreen")},n.prototype.handleClick=function(e){this.player_.isFullscreen()?this.player_.exitFullscreen():this.player_.requestFullscreen()},n}(Vr);ln.prototype.controlText_="Fullscreen",Xe.registerComponent("FullscreenToggle",ln);var cn=function(e,t){t.tech_&&!t.tech_.featuresVolumeControl&&e.addClass("vjs-hidden"),e.on(t,"loadstart",function(){t.tech_.featuresVolumeControl?e.removeClass("vjs-hidden"):e.addClass("vjs-hidden")})},hn=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})},t}(Xe);Xe.registerComponent("VolumeLevel",hn);var dn=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.on("slideractive",i.updateLastVolume_),i.on(e,"volumechange",i.updateARIAAttributes),e.ready(function(){return i.updateARIAAttributes()}),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-volume-bar vjs-slider-bar"},{"aria-label":this.localize("Volume Level"),"aria-live":"polite"})},n.prototype.handleMouseDown=function(e){re(e)&&r.prototype.handleMouseDown.call(this,e)},n.prototype.handleMouseMove=function(e){re(e)&&(this.checkMuted(),this.player_.volume(this.calculateDistance(e)))},n.prototype.checkMuted=function(){this.player_.muted()&&this.player_.muted(!1)},n.prototype.getPercent=function(){return this.player_.muted()?0:this.player_.volume()},n.prototype.stepForward=function(){this.checkMuted(),this.player_.volume(this.player_.volume()+.1)},n.prototype.stepBack=function(){this.checkMuted(),this.player_.volume(this.player_.volume()-.1)},n.prototype.updateARIAAttributes=function(e){var t=this.player_.muted()?0:this.volumeAsPercentage_();this.el_.setAttribute("aria-valuenow",t),this.el_.setAttribute("aria-valuetext",t+"%")},n.prototype.volumeAsPercentage_=function(){return Math.round(100*this.player_.volume())},n.prototype.updateLastVolume_=function(){var e=this,t=this.player_.volume();this.one("sliderinactive",function(){0===e.player_.volume()&&e.player_.lastVolume_(t)})},n}(tn);dn.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"},dn.prototype.playerEvent="volumechange",Xe.registerComponent("VolumeBar",dn);var pn=function(r){function n(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n),t.vertical=t.vertical||!1,("undefined"==typeof t.volumeBar||w(t.volumeBar))&&(t.volumeBar=t.volumeBar||{},t.volumeBar.vertical=t.vertical);var i=b(this,r.call(this,e,t));return cn(i,e),i.throttledHandleMouseMove=Ie(Oe(i,i.handleMouseMove),25),i.on("mousedown",i.handleMouseDown),i.on("touchstart",i.handleMouseDown),i.on(i.volumeBar,["focus","slideractive"],function(){i.volumeBar.addClass("vjs-slider-active"),i.addClass("vjs-slider-active"),i.trigger("slideractive")}),i.on(i.volumeBar,["blur","sliderinactive"],function(){i.volumeBar.removeClass("vjs-slider-active"),i.removeClass("vjs-slider-active"),i.trigger("sliderinactive")}),i}return _(n,r),n.prototype.createEl=function(){var e="vjs-volume-horizontal";return this.options_.vertical&&(e="vjs-volume-vertical"),r.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control "+e})},n.prototype.handleMouseDown=function(e){var t=this.el_.ownerDocument;this.on(t,"mousemove",this.throttledHandleMouseMove),this.on(t,"touchmove",this.throttledHandleMouseMove),this.on(t,"mouseup",this.handleMouseUp),this.on(t,"touchend",this.handleMouseUp)},n.prototype.handleMouseUp=function(e){var t=this.el_.ownerDocument;this.off(t,"mousemove",this.throttledHandleMouseMove),this.off(t,"touchmove",this.throttledHandleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchend",this.handleMouseUp)},n.prototype.handleMouseMove=function(e){this.volumeBar.handleMouseMove(e)},n}(Xe);pn.prototype.options_={children:["volumeBar"]},Xe.registerComponent("VolumeControl",pn);var fn=function(e,t){t.tech_&&!t.tech_.featuresMuteControl&&e.addClass("vjs-hidden"),e.on(t,"loadstart",function(){t.tech_.featuresMuteControl?e.removeClass("vjs-hidden"):e.addClass("vjs-hidden")})},mn=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return fn(i,e),i.on(e,["loadstart","volumechange"],i.update),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-mute-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(e){var t=this.player_.volume(),i=this.player_.lastVolume_();if(0===t){var r=i<.1?.1:i;this.player_.volume(r),this.player_.muted(!1)}else this.player_.muted(!this.player_.muted())},n.prototype.update=function(e){this.updateIcon_(),this.updateControlText_()},n.prototype.updateIcon_=function(){var e=this.player_.volume(),t=3;nt&&this.player_.muted(this.player_.tech_.el_.muted),0===e||this.player_.muted()?t=0:e<.33?t=1:e<.67&&(t=2);for(var i=0;i<4;i++)F(this.el_,"vjs-vol-"+i);j(this.el_,"vjs-vol-"+t)},n.prototype.updateControlText_=function(){var e=this.player_.muted()||0===this.player_.volume()?"Unmute":"Mute";this.controlText()!==e&&this.controlText(e)},n}(Vr);mn.prototype.controlText_="Mute",Xe.registerComponent("MuteToggle",mn);var gn=function(r){function n(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n),"undefined"!=typeof t.inline?t.inline=t.inline:t.inline=!0,("undefined"==typeof t.volumeControl||w(t.volumeControl))&&(t.volumeControl=t.volumeControl||{},t.volumeControl.vertical=!t.inline);var i=b(this,r.call(this,e,t));return i.on(e,["loadstart"],i.volumePanelState_),i.on(i.volumeControl,["slideractive"],i.sliderActive_),i.on(i.volumeControl,["sliderinactive"],i.sliderInactive_),i}return _(n,r),n.prototype.sliderActive_=function(){this.addClass("vjs-slider-active")},n.prototype.sliderInactive_=function(){this.removeClass("vjs-slider-active")},n.prototype.volumePanelState_=function(){this.volumeControl.hasClass("vjs-hidden")&&this.muteToggle.hasClass("vjs-hidden")&&this.addClass("vjs-hidden"),this.volumeControl.hasClass("vjs-hidden")&&!this.muteToggle.hasClass("vjs-hidden")&&this.addClass("vjs-mute-toggle-only")},n.prototype.createEl=function(){var e="vjs-volume-panel-horizontal";return this.options_.inline||(e="vjs-volume-panel-vertical"),r.prototype.createEl.call(this,"div",{className:"vjs-volume-panel vjs-control "+e})},n}(Xe);gn.prototype.options_={children:["muteToggle","volumeControl"]},Xe.registerComponent("VolumePanel",gn);var yn=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return t&&(i.menuButton_=t.menuButton),i.focusedChild_=-1,i.on("keydown",i.handleKeyPress),i}return _(n,r),n.prototype.addItem=function(t){this.addChild(t),t.on("click",Oe(this,function(e){this.menuButton_&&(this.menuButton_.unpressButton(),"CaptionSettingsMenuItem"!==t.name()&&this.menuButton_.focus())}))},n.prototype.createEl=function(){var e=this.options_.contentElType||"ul";this.contentEl_=M(e,{className:"vjs-menu-content"}),this.contentEl_.setAttribute("role","menu");var t=r.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});return t.appendChild(this.contentEl_),_e(t,"click",function(e){e.preventDefault(),e.stopImmediatePropagation()}),t},n.prototype.dispose=function(){this.contentEl_=null,r.prototype.dispose.call(this)},n.prototype.handleKeyPress=function(e){37===e.which||40===e.which?(e.preventDefault(),this.stepForward()):38!==e.which&&39!==e.which||(e.preventDefault(),this.stepBack())},n.prototype.stepForward=function(){var e=0;void 0!==this.focusedChild_&&(e=this.focusedChild_+1),this.focus(e)},n.prototype.stepBack=function(){var e=0;void 0!==this.focusedChild_&&(e=this.focusedChild_-1),this.focus(e)},n.prototype.focus=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,t=this.children().slice();t.length&&t[0].className&&/vjs-menu-title/.test(t[0].className)&&t.shift(),0<t.length&&(e<0?e=0:e>=t.length&&(e=t.length-1),t[this.focusedChild_=e].el_.focus())},n}(Xe);Xe.registerComponent("Menu",yn);var vn=function(n){function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,a);var i=b(this,n.call(this,e,t));i.menuButton_=new Vr(e,t),i.menuButton_.controlText(i.controlText_),i.menuButton_.el_.setAttribute("aria-haspopup","true");var r=Vr.prototype.buildCSSClass();return i.menuButton_.el_.className=i.buildCSSClass()+" "+r,i.menuButton_.removeClass("vjs-control"),i.addChild(i.menuButton_),i.update(),i.enabled_=!0,i.on(i.menuButton_,"tap",i.handleClick),i.on(i.menuButton_,"click",i.handleClick),i.on(i.menuButton_,"focus",i.handleFocus),i.on(i.menuButton_,"blur",i.handleBlur),i.on("keydown",i.handleSubmenuKeyPress),i}return _(a,n),a.prototype.update=function(){var e=this.createMenu();this.menu&&(this.menu.dispose(),this.removeChild(this.menu)),this.menu=e,this.addChild(e),this.buttonPressed_=!1,this.menuButton_.el_.setAttribute("aria-expanded","false"),this.items&&this.items.length<=this.hideThreshold_?this.hide():this.show()},a.prototype.createMenu=function(){var e=new yn(this.player_,{menuButton:this});if(this.hideThreshold_=0,this.options_.title){var t=M("li",{className:"vjs-menu-title",innerHTML:ze(this.options_.title),tabIndex:-1});this.hideThreshold_+=1,e.children_.unshift(t),N(t,e.contentEl())}if(this.items=this.createItems(),this.items)for(var i=0;i<this.items.length;i++)e.addItem(this.items[i]);return e},a.prototype.createItems=function(){},a.prototype.createEl=function(){return n.prototype.createEl.call(this,"div",{className:this.buildWrapperCSSClass()},{})},a.prototype.buildWrapperCSSClass=function(){var e="vjs-menu-button";return!0===this.options_.inline?e+="-inline":e+="-popup","vjs-menu-button "+e+" "+Vr.prototype.buildCSSClass()+" "+n.prototype.buildCSSClass.call(this)},a.prototype.buildCSSClass=function(){var e="vjs-menu-button";return!0===this.options_.inline?e+="-inline":e+="-popup","vjs-menu-button "+e+" "+n.prototype.buildCSSClass.call(this)},a.prototype.controlText=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.menuButton_.el();return this.menuButton_.controlText(e,t)},a.prototype.handleClick=function(e){this.one(this.menu.contentEl(),"mouseleave",Oe(this,function(e){this.unpressButton(),this.el_.blur()})),this.buttonPressed_?this.unpressButton():this.pressButton()},a.prototype.focus=function(){this.menuButton_.focus()},a.prototype.blur=function(){this.menuButton_.blur()},a.prototype.handleFocus=function(){_e(p,"keydown",Oe(this,this.handleKeyPress))},a.prototype.handleBlur=function(){be(p,"keydown",Oe(this,this.handleKeyPress))},a.prototype.handleKeyPress=function(e){27===e.which||9===e.which?(this.buttonPressed_&&this.unpressButton(),9!==e.which&&(e.preventDefault(),this.menuButton_.el_.focus())):38!==e.which&&40!==e.which||this.buttonPressed_||(this.pressButton(),e.preventDefault())},a.prototype.handleSubmenuKeyPress=function(e){27!==e.which&&9!==e.which||(this.buttonPressed_&&this.unpressButton(),9!==e.which&&(e.preventDefault(),this.menuButton_.el_.focus()))},a.prototype.pressButton=function(){if(this.enabled_){if(this.buttonPressed_=!0,this.menu.lockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","true"),nt&&D())return;this.menu.focus()}},a.prototype.unpressButton=function(){this.enabled_&&(this.buttonPressed_=!1,this.menu.unlockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","false"))},a.prototype.disable=function(){this.unpressButton(),this.enabled_=!1,this.addClass("vjs-disabled"),this.menuButton_.disable()},a.prototype.enable=function(){this.enabled_=!0,this.removeClass("vjs-disabled"),this.menuButton_.enable()},a}(Xe);Xe.registerComponent("MenuButton",vn);var _n=function(a){function s(e,t){y(this,s);var i=t.tracks,r=b(this,a.call(this,e,t));if(r.items.length<=1&&r.hide(),!i)return b(r);var n=Oe(r,r.update);return i.addEventListener("removetrack",n),i.addEventListener("addtrack",n),r.player_.on("ready",n),r.player_.on("dispose",function(){i.removeEventListener("removetrack",n),i.removeEventListener("addtrack",n)}),r}return _(s,a),s}(vn);Xe.registerComponent("TrackButton",_n);var bn=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.selectable=t.selectable,i.isSelected_=t.selected||!1,i.multiSelectable=t.multiSelectable,i.selected(i.isSelected_),i.selectable?i.multiSelectable?i.el_.setAttribute("role","menuitemcheckbox"):i.el_.setAttribute("role","menuitemradio"):i.el_.setAttribute("role","menuitem"),i}return _(n,r),n.prototype.createEl=function(e,t,i){return this.nonIconControl=!0,r.prototype.createEl.call(this,"li",C({className:"vjs-menu-item",innerHTML:'<span class="vjs-menu-item-text">'+this.localize(this.options_.label)+"</span>",tabIndex:-1},t),i)},n.prototype.handleClick=function(e){this.selected(!0)},n.prototype.selected=function(e){this.selectable&&(e?(this.addClass("vjs-selected"),this.el_.setAttribute("aria-checked","true"),this.controlText(", selected"),this.isSelected_=!0):(this.removeClass("vjs-selected"),this.el_.setAttribute("aria-checked","false"),this.controlText(""),this.isSelected_=!1))},n}(Rr);Xe.registerComponent("MenuItem",bn);var Tn=function(u){function l(e,t){y(this,l);var i=t.track,r=e.textTracks();t.label=i.label||i.language||"Unknown",t.selected="showing"===i.mode;var n=b(this,u.call(this,e,t));n.track=i;var a=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];n.handleTracksChange.apply(n,t)},s=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];n.handleSelectedLanguageChange.apply(n,t)};if(e.on(["loadstart","texttrackchange"],a),r.addEventListener("change",a),r.addEventListener("selectedlanguagechange",s),n.on("dispose",function(){e.off(["loadstart","texttrackchange"],a),r.removeEventListener("change",a),r.removeEventListener("selectedlanguagechange",s)}),void 0===r.onchange){var o=void 0;n.on(["tap","click"],function(){if("object"!==v(g.Event))try{o=new g.Event("change")}catch(e){}o||(o=p.createEvent("Event")).initEvent("change",!0,!0),r.dispatchEvent(o)})}return n.handleTracksChange(),n}return _(l,u),l.prototype.handleClick=function(e){var t=this.track.kind,i=this.track.kinds,r=this.player_.textTracks();if(i||(i=[t]),u.prototype.handleClick.call(this,e),r)for(var n=0;n<r.length;n++){var a=r[n];a===this.track&&-1<i.indexOf(a.kind)?"showing"!==a.mode&&(a.mode="showing"):"disabled"!==a.mode&&(a.mode="disabled")}},l.prototype.handleTracksChange=function(e){var t="showing"===this.track.mode;t!==this.isSelected_&&this.selected(t)},l.prototype.handleSelectedLanguageChange=function(e){if("showing"===this.track.mode){var t=this.player_.cache_.selectedLanguage;if(t&&t.enabled&&t.language===this.track.language&&t.kind!==this.track.kind)return;this.player_.cache_.selectedLanguage={enabled:!0,language:this.track.language,kind:this.track.kind}}},l.prototype.dispose=function(){this.track=null,u.prototype.dispose.call(this)},l}(bn);Xe.registerComponent("TextTrackMenuItem",Tn);var Sn=function(i){function r(e,t){return y(this,r),t.track={player:e,kind:t.kind,kinds:t.kinds,default:!1,mode:"disabled"},t.kinds||(t.kinds=[t.kind]),t.label?t.track.label=t.label:t.track.label=t.kinds.join(" and ")+" off",t.selectable=!0,t.multiSelectable=!1,b(this,i.call(this,e,t))}return _(r,i),r.prototype.handleTracksChange=function(e){for(var t=this.player().textTracks(),i=!0,r=0,n=t.length;r<n;r++){var a=t[r];if(-1<this.options_.kinds.indexOf(a.kind)&&"showing"===a.mode){i=!1;break}}i!==this.isSelected_&&this.selected(i)},r.prototype.handleSelectedLanguageChange=function(e){for(var t=this.player().textTracks(),i=!0,r=0,n=t.length;r<n;r++){var a=t[r];if(-1<["captions","descriptions","subtitles"].indexOf(a.kind)&&"showing"===a.mode){i=!1;break}}i&&(this.player_.cache_.selectedLanguage={enabled:!1})},r}(Tn);Xe.registerComponent("OffTextTrackMenuItem",Sn);var kn=function(i){function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return y(this,r),t.tracks=e.textTracks(),b(this,i.call(this,e,t))}return _(r,i),r.prototype.createItems=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:Tn,i=void 0;this.label_&&(i=this.label_+" off"),e.push(new Sn(this.player_,{kinds:this.kinds_,kind:this.kind_,label:i})),this.hideThreshold_+=1;var r=this.player_.textTracks();Array.isArray(this.kinds_)||(this.kinds_=[this.kind_]);for(var n=0;n<r.length;n++){var a=r[n];if(-1<this.kinds_.indexOf(a.kind)){var s=new t(this.player_,{track:a,selectable:!0,multiSelectable:!1});s.addClass("vjs-"+a.kind+"-menu-item"),e.push(s)}}return e},r}(_n);Xe.registerComponent("TextTrackButton",kn);var Cn=function(s){function o(e,t){y(this,o);var i=t.track,r=t.cue,n=e.currentTime();t.selectable=!0,t.multiSelectable=!1,t.label=r.text,t.selected=r.startTime<=n&&n<r.endTime;var a=b(this,s.call(this,e,t));return a.track=i,a.cue=r,i.addEventListener("cuechange",Oe(a,a.update)),a}return _(o,s),o.prototype.handleClick=function(e){s.prototype.handleClick.call(this),this.player_.currentTime(this.cue.startTime),this.update(this.cue.startTime)},o.prototype.update=function(e){var t=this.cue,i=this.player_.currentTime();this.selected(t.startTime<=i&&i<t.endTime)},o}(bn);Xe.registerComponent("ChaptersTrackMenuItem",Cn);var En=function(r){function n(e,t,i){return y(this,n),b(this,r.call(this,e,t,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-chapters-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-chapters-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.update=function(e){this.track_&&(!e||"addtrack"!==e.type&&"removetrack"!==e.type)||this.setTrack(this.findChaptersTrack()),r.prototype.update.call(this)},n.prototype.setTrack=function(e){if(this.track_!==e){if(this.updateHandler_||(this.updateHandler_=this.update.bind(this)),this.track_){var t=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);t&&t.removeEventListener("load",this.updateHandler_),this.track_=null}if(this.track_=e,this.track_){this.track_.mode="hidden";var i=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);i&&i.addEventListener("load",this.updateHandler_)}}},n.prototype.findChaptersTrack=function(){for(var e=this.player_.textTracks()||[],t=e.length-1;0<=t;t--){var i=e[t];if(i.kind===this.kind_)return i}},n.prototype.getMenuCaption=function(){return this.track_&&this.track_.label?this.track_.label:this.localize(ze(this.kind_))},n.prototype.createMenu=function(){return this.options_.title=this.getMenuCaption(),r.prototype.createMenu.call(this)},n.prototype.createItems=function(){var e=[];if(!this.track_)return e;var t=this.track_.cues;if(!t)return e;for(var i=0,r=t.length;i<r;i++){var n=t[i],a=new Cn(this.player_,{track:this.track_,cue:n});e.push(a)}return e},n}(kn);En.prototype.kind_="chapters",En.prototype.controlText_="Chapters",Xe.registerComponent("ChaptersButton",En);var wn=function(s){function o(e,t,i){y(this,o);var r=b(this,s.call(this,e,t,i)),n=e.textTracks(),a=Oe(r,r.handleTracksChange);return n.addEventListener("change",a),r.on("dispose",function(){n.removeEventListener("change",a)}),r}return _(o,s),o.prototype.handleTracksChange=function(e){for(var t=this.player().textTracks(),i=!1,r=0,n=t.length;r<n;r++){var a=t[r];if(a.kind!==this.kind_&&"showing"===a.mode){i=!0;break}}i?this.disable():this.enable()},o.prototype.buildCSSClass=function(){return"vjs-descriptions-button "+s.prototype.buildCSSClass.call(this)},o.prototype.buildWrapperCSSClass=function(){return"vjs-descriptions-button "+s.prototype.buildWrapperCSSClass.call(this)},o}(kn);wn.prototype.kind_="descriptions",wn.prototype.controlText_="Descriptions",Xe.registerComponent("DescriptionsButton",wn);var An=function(r){function n(e,t,i){return y(this,n),b(this,r.call(this,e,t,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-subtitles-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-subtitles-button "+r.prototype.buildWrapperCSSClass.call(this)},n}(kn);An.prototype.kind_="subtitles",An.prototype.controlText_="Subtitles",Xe.registerComponent("SubtitlesButton",An);var Ln=function(r){function n(e,t){y(this,n),t.track={player:e,kind:t.kind,label:t.kind+" settings",selectable:!1,default:!1,mode:"disabled"},t.selectable=!1,t.name="CaptionSettingsMenuItem";var i=b(this,r.call(this,e,t));return i.addClass("vjs-texttrack-settings"),i.controlText(", opens "+t.kind+" settings dialog"),i}return _(n,r),n.prototype.handleClick=function(e){this.player().getChild("textTrackSettings").open()},n}(Tn);Xe.registerComponent("CaptionSettingsMenuItem",Ln);var Pn=function(r){function n(e,t,i){return y(this,n),b(this,r.call(this,e,t,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-captions-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-captions-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createItems=function(){var e=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(e.push(new Ln(this.player_,{kind:this.kind_})),this.hideThreshold_+=1),r.prototype.createItems.call(this,e)},n}(kn);Pn.prototype.kind_="captions",Pn.prototype.controlText_="Captions",Xe.registerComponent("CaptionsButton",Pn);var On=function(n){function e(){return y(this,e),b(this,n.apply(this,arguments))}return _(e,n),e.prototype.createEl=function(e,t,i){var r='<span class="vjs-menu-item-text">'+this.localize(this.options_.label);return"captions"===this.options_.track.kind&&(r+='\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> '+this.localize("Captions")+"</span>\n      "),r+="</span>",n.prototype.createEl.call(this,e,C({innerHTML:r},t),i)},e}(Tn);Xe.registerComponent("SubsCapsMenuItem",On);var In=function(r){function n(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n);var i=b(this,r.call(this,e,t));return i.label_="subtitles",-1<["en","en-us","en-ca","fr-ca"].indexOf(i.player_.language_)&&(i.label_="captions"),i.menuButton_.controlText(ze(i.label_)),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-subs-caps-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-subs-caps-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createItems=function(){var e=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(e.push(new Ln(this.player_,{kind:this.label_})),this.hideThreshold_+=1),e=r.prototype.createItems.call(this,e,On)},n}(kn);In.prototype.kinds_=["captions","subtitles"],In.prototype.controlText_="Subtitles",Xe.registerComponent("SubsCapsButton",In);var xn=function(s){function o(e,t){y(this,o);var i=t.track,r=e.audioTracks();t.label=i.label||i.language||"Unknown",t.selected=i.enabled;var n=b(this,s.call(this,e,t));n.track=i,n.addClass("vjs-"+i.kind+"-menu-item");var a=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];n.handleTracksChange.apply(n,t)};return r.addEventListener("change",a),n.on("dispose",function(){r.removeEventListener("change",a)}),n}return _(o,s),o.prototype.createEl=function(e,t,i){var r='<span class="vjs-menu-item-text">'+this.localize(this.options_.label);return"main-desc"===this.options_.track.kind&&(r+='\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> '+this.localize("Descriptions")+"</span>\n      "),r+="</span>",s.prototype.createEl.call(this,e,C({innerHTML:r},t),i)},o.prototype.handleClick=function(e){var t=this.player_.audioTracks();s.prototype.handleClick.call(this,e);for(var i=0;i<t.length;i++){var r=t[i];r.enabled=r===this.track}},o.prototype.handleTracksChange=function(e){this.selected(this.track.enabled)},o}(bn);Xe.registerComponent("AudioTrackMenuItem",xn);var Dn=function(i){function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return y(this,r),t.tracks=e.audioTracks(),b(this,i.call(this,e,t))}return _(r,i),r.prototype.buildCSSClass=function(){return"vjs-audio-button "+i.prototype.buildCSSClass.call(this)},r.prototype.buildWrapperCSSClass=function(){return"vjs-audio-button "+i.prototype.buildWrapperCSSClass.call(this)},r.prototype.createItems=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];this.hideThreshold_=1;for(var t=this.player_.audioTracks(),i=0;i<t.length;i++){var r=t[i];e.push(new xn(this.player_,{track:r,selectable:!0,multiSelectable:!1}))}return e},r}(_n);Dn.prototype.controlText_="Audio Track",Xe.registerComponent("AudioTrackButton",Dn);var Rn=function(a){function s(e,t){y(this,s);var i=t.rate,r=parseFloat(i,10);t.label=i,t.selected=1===r,t.selectable=!0,t.multiSelectable=!1;var n=b(this,a.call(this,e,t));return n.label=i,n.rate=r,n.on(e,"ratechange",n.update),n}return _(s,a),s.prototype.handleClick=function(e){a.prototype.handleClick.call(this),this.player().playbackRate(this.rate)},s.prototype.update=function(e){this.selected(this.player().playbackRate()===this.rate)},s}(bn);Rn.prototype.contentElType="button",Xe.registerComponent("PlaybackRateMenuItem",Rn);var Mn=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.updateVisibility(),i.updateLabel(),i.on(e,"loadstart",i.updateVisibility),i.on(e,"ratechange",i.updateLabel),i}return _(n,r),n.prototype.createEl=function(){var e=r.prototype.createEl.call(this);return this.labelEl_=M("div",{className:"vjs-playback-rate-value",innerHTML:"1x"}),e.appendChild(this.labelEl_),e},n.prototype.dispose=function(){this.labelEl_=null,r.prototype.dispose.call(this)},n.prototype.buildCSSClass=function(){return"vjs-playback-rate "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-playback-rate "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createMenu=function(){var e=new yn(this.player()),t=this.playbackRates();if(t)for(var i=t.length-1;0<=i;i--)e.addChild(new Rn(this.player(),{rate:t[i]+"x"}));return e},n.prototype.updateARIAAttributes=function(){this.el().setAttribute("aria-valuenow",this.player().playbackRate())},n.prototype.handleClick=function(e){for(var t=this.player().playbackRate(),i=this.playbackRates(),r=i[0],n=0;n<i.length;n++)if(i[n]>t){r=i[n];break}this.player().playbackRate(r)},n.prototype.playbackRates=function(){return this.options_.playbackRates||this.options_.playerOptions&&this.options_.playerOptions.playbackRates},n.prototype.playbackRateSupported=function(){return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&0<this.playbackRates().length},n.prototype.updateVisibility=function(e){this.playbackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},n.prototype.updateLabel=function(e){this.playbackRateSupported()&&(this.labelEl_.innerHTML=this.player().playbackRate()+"x")},n}(vn);Mn.prototype.controlText_="Playback Rate",Xe.registerComponent("PlaybackRateMenuButton",Mn);var Un=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.buildCSSClass=function(){return"vjs-spacer "+e.prototype.buildCSSClass.call(this)},t.prototype.createEl=function(){return e.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},t}(Xe);Xe.registerComponent("Spacer",Un);var Nn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.buildCSSClass=function(){return"vjs-custom-control-spacer "+t.prototype.buildCSSClass.call(this)},e.prototype.createEl=function(){var e=t.prototype.createEl.call(this,{className:this.buildCSSClass()});return e.innerHTML=" ",e},e}(Un);Xe.registerComponent("CustomControlSpacer",Nn);var Bn=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.createEl=function(){return e.prototype.createEl.call(this,"div",{className:"vjs-control-bar",dir:"ltr"})},t}(Xe);Bn.prototype.options_={children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subsCapsButton","audioTrackButton","fullscreenToggle"]},Xe.registerComponent("ControlBar",Bn);var jn=function(r){function n(e,t){y(this,n);var i=b(this,r.call(this,e,t));return i.on(e,"error",i.open),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-error-display "+r.prototype.buildCSSClass.call(this)},n.prototype.content=function(){var e=this.player().error();return e?this.localize(e.message):""},n}(Nt);jn.prototype.options_=Ge(Nt.prototype.options_,{pauseOnOpen:!1,fillAlways:!0,temporary:!1,uncloseable:!0}),Xe.registerComponent("ErrorDisplay",jn);var Fn="vjs-text-track-settings",Hn=["#000","Black"],Vn=["#00F","Blue"],qn=["#0FF","Cyan"],Wn=["#0F0","Green"],zn=["#F0F","Magenta"],Gn=["#F00","Red"],Xn=["#FFF","White"],Yn=["#FF0","Yellow"],$n=["1","Opaque"],Kn=["0.5","Semi-Transparent"],Qn=["0","Transparent"],Jn={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[Hn,Xn,Gn,Wn,Vn,Yn,zn,qn]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[$n,Kn,Qn]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[Xn,Hn,Gn,Wn,Vn,Yn,zn,qn]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.00","200%"],["3.00","300%"],["4.00","400%"]],default:2,parser:function(e){return"1.00"===e?null:Number(e)}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[$n,Kn]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captions-window-opacity-%s",label:"Transparency",options:[Qn,Kn,$n]}};function Zn(e,t){if(t&&(e=t(e)),e&&"none"!==e)return e}Jn.windowColor.options=Jn.backgroundColor.options;var ea=function(r){function n(e,t){y(this,n),t.temporary=!1;var i=b(this,r.call(this,e,t));return i.updateDisplay=Oe(i,i.updateDisplay),i.fill(),i.hasBeenOpened_=i.hasBeenFilled_=!0,i.endDialog=M("p",{className:"vjs-control-text",textContent:i.localize("End of dialog window.")}),i.el().appendChild(i.endDialog),i.setDefaults(),void 0===t.persistTextTrackSettings&&(i.options_.persistTextTrackSettings=i.options_.playerOptions.persistTextTrackSettings),i.on(i.$(".vjs-done-button"),"click",function(){i.saveSettings(),i.close()}),i.on(i.$(".vjs-default-button"),"click",function(){i.setDefaults(),i.updateDisplay()}),k(Jn,function(e){i.on(i.$(e.selector),"change",i.updateDisplay)}),i.options_.persistTextTrackSettings&&i.restoreSettings(),i}return _(n,r),n.prototype.dispose=function(){this.endDialog=null,r.prototype.dispose.call(this)},n.prototype.createElSelect_=function(e){var i=this,t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"label",n=Jn[e],a=n.id.replace("%s",this.id_),s=[t,a].join(" ").trim();return["<"+r+' id="'+a+'" class="'+("label"===r?"vjs-label":"")+'">',this.localize(n.label),"</"+r+">",'<select aria-labelledby="'+s+'">'].concat(n.options.map(function(e){var t=a+"-"+e[1].replace(/\W+/g,"");return['<option id="'+t+'" value="'+e[0]+'" ','aria-labelledby="'+s+" "+t+'">',i.localize(e[1]),"</option>"].join("")})).concat("</select>").join("")},n.prototype.createElFgColor_=function(){var e="captions-text-legend-"+this.id_;return['<fieldset class="vjs-fg-color vjs-track-setting">','<legend id="'+e+'">',this.localize("Text"),"</legend>",this.createElSelect_("color",e),'<span class="vjs-text-opacity vjs-opacity">',this.createElSelect_("textOpacity",e),"</span>","</fieldset>"].join("")},n.prototype.createElBgColor_=function(){var e="captions-background-"+this.id_;return['<fieldset class="vjs-bg-color vjs-track-setting">','<legend id="'+e+'">',this.localize("Background"),"</legend>",this.createElSelect_("backgroundColor",e),'<span class="vjs-bg-opacity vjs-opacity">',this.createElSelect_("backgroundOpacity",e),"</span>","</fieldset>"].join("")},n.prototype.createElWinColor_=function(){var e="captions-window-"+this.id_;return['<fieldset class="vjs-window-color vjs-track-setting">','<legend id="'+e+'">',this.localize("Window"),"</legend>",this.createElSelect_("windowColor",e),'<span class="vjs-window-opacity vjs-opacity">',this.createElSelect_("windowOpacity",e),"</span>","</fieldset>"].join("")},n.prototype.createElColors_=function(){return M("div",{className:"vjs-track-settings-colors",innerHTML:[this.createElFgColor_(),this.createElBgColor_(),this.createElWinColor_()].join("")})},n.prototype.createElFont_=function(){return M("div",{className:"vjs-track-settings-font",innerHTML:['<fieldset class="vjs-font-percent vjs-track-setting">',this.createElSelect_("fontPercent","","legend"),"</fieldset>",'<fieldset class="vjs-edge-style vjs-track-setting">',this.createElSelect_("edgeStyle","","legend"),"</fieldset>",'<fieldset class="vjs-font-family vjs-track-setting">',this.createElSelect_("fontFamily","","legend"),"</fieldset>"].join("")})},n.prototype.createElControls_=function(){var e=this.localize("restore all settings to the default values");return M("div",{className:"vjs-track-settings-controls",innerHTML:['<button class="vjs-default-button" title="'+e+'">',this.localize("Reset"),'<span class="vjs-control-text"> '+e+"</span>","</button>",'<button class="vjs-done-button">'+this.localize("Done")+"</button>"].join("")})},n.prototype.content=function(){return[this.createElColors_(),this.createElFont_(),this.createElControls_()]},n.prototype.label=function(){return this.localize("Caption Settings Dialog")},n.prototype.description=function(){return this.localize("Beginning of dialog window. Escape will cancel and close the window.")},n.prototype.buildCSSClass=function(){return r.prototype.buildCSSClass.call(this)+" vjs-text-track-settings"},n.prototype.getValues=function(){var s=this;return function(i,r){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;return S(i).reduce(function(e,t){return r(e,i[t],t)},e)}(Jn,function(e,t,i){var r,n,a=(r=s.$(t.selector),n=t.parser,Zn(r.options[r.options.selectedIndex].value,n));return void 0!==a&&(e[i]=a),e},{})},n.prototype.setValues=function(i){var r=this;k(Jn,function(e,t){!function(e,t,i){if(t)for(var r=0;r<e.options.length;r++)if(Zn(e.options[r].value,i)===t){e.selectedIndex=r;break}}(r.$(e.selector),i[t],e.parser)})},n.prototype.setDefaults=function(){var i=this;k(Jn,function(e){var t=e.hasOwnProperty("default")?e.default:0;i.$(e.selector).selectedIndex=t})},n.prototype.restoreSettings=function(){var e=void 0;try{e=JSON.parse(g.localStorage.getItem(Fn))}catch(e){f.warn(e)}e&&this.setValues(e)},n.prototype.saveSettings=function(){if(this.options_.persistTextTrackSettings){var e=this.getValues();try{Object.keys(e).length?g.localStorage.setItem(Fn,JSON.stringify(e)):g.localStorage.removeItem(Fn)}catch(e){f.warn(e)}}},n.prototype.updateDisplay=function(){var e=this.player_.getChild("textTrackDisplay");e&&e.updateDisplay()},n.prototype.conditionalBlur_=function(){this.previouslyActiveEl_=null,this.off(p,"keydown",this.handleKeyDown);var e=this.player_.controlBar,t=e&&e.subsCapsButton,i=e&&e.captionsButton;t?t.focus():i&&i.focus()},n}(Nt);Xe.registerComponent("TextTrackSettings",ea);var ta=function(a){function s(e,t){y(this,s);var i=t.ResizeObserver||g.ResizeObserver;null===t.ResizeObserver&&(i=!1);var r=Ge({createEl:!i},t),n=b(this,a.call(this,e,r));return n.ResizeObserver=t.ResizeObserver||g.ResizeObserver,n.loadListener_=null,n.resizeObserver_=null,n.debouncedHandler_=xe(function(){n.resizeHandler()},100,!1,e),i?(n.resizeObserver_=new n.ResizeObserver(n.debouncedHandler_),n.resizeObserver_.observe(e.el())):(n.loadListener_=function(){n.el_.contentWindow&&_e(n.el_.contentWindow,"resize",n.debouncedHandler_),n.off("load",n.loadListener_)},n.on("load",n.loadListener_)),n}return _(s,a),s.prototype.createEl=function(){return a.prototype.createEl.call(this,"iframe",{className:"vjs-resize-manager"})},s.prototype.resizeHandler=function(){this.player_.trigger("playerresize")},s.prototype.dispose=function(){this.resizeObserver_&&(this.player_.el()&&this.resizeObserver_.unobserve(this.player_.el()),this.resizeObserver_.disconnect()),this.el_&&this.el_.contentWindow&&be(this.el_.contentWindow,"resize",this.debouncedHandler_),this.loadListener_&&this.off("load",this.loadListener_),this.ResizeObserver=null,this.resizeObserver=null,this.debouncedHandler_=null,this.loadListener_=null},s}(Xe);Xe.registerComponent("ResizeManager",ta);var ia=function(e){var t=e.el();if(t.hasAttribute("src"))return e.triggerSourceset(t.src),!0;var i=e.$$("source"),r=[],n="";if(!i.length)return!1;for(var a=0;a<i.length;a++){var s=i[a].src;s&&-1===r.indexOf(s)&&r.push(s)}return!!r.length&&(1===r.length&&(n=r[0]),e.triggerSourceset(n),!0)},ra=Object.defineProperty({},"innerHTML",{get:function(){return this.cloneNode(!0).innerHTML},set:function(e){var t=p.createElement(this.nodeName.toLowerCase());t.innerHTML=e;for(var i=p.createDocumentFragment();t.childNodes.length;)i.appendChild(t.childNodes[0]);return this.innerText="",g.Element.prototype.appendChild.call(this,i),this.innerHTML}}),na=function(e,t){for(var i={},r=0;r<e.length&&!((i=Object.getOwnPropertyDescriptor(e[r],t))&&i.set&&i.get);r++);return i.enumerable=!0,i.configurable=!0,i},aa=function(a){var s=a.el();if(!s.resetSourceWatch_){var t={},e=na([a.el(),g.HTMLMediaElement.prototype,g.Element.prototype,ra],"innerHTML"),i=function(n){return function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];var r=n.apply(s,t);return ia(a),r}};["append","appendChild","insertAdjacentHTML"].forEach(function(e){s[e]&&(t[e]=s[e],s[e]=i(t[e]))}),Object.defineProperty(s,"innerHTML",Ge(e,{set:i(e.set)})),s.resetSourceWatch_=function(){s.resetSourceWatch_=null,Object.keys(t).forEach(function(e){s[e]=t[e]}),Object.defineProperty(s,"innerHTML",e)},a.one("sourceset",s.resetSourceWatch_)}},sa=Object.defineProperty({},"src",{get:function(){return this.hasAttribute("src")?Zt(g.Element.prototype.getAttribute.call(this,"src")):""},set:function(e){return g.Element.prototype.setAttribute.call(this,"src",e),e}}),oa=function(r){if(r.featuresSourceset){var n=r.el();if(!n.resetSourceset_){var i=na([r.el(),g.HTMLMediaElement.prototype,sa],"src"),a=n.setAttribute,t=n.load;Object.defineProperty(n,"src",Ge(i,{set:function(e){var t=i.set.call(n,e);return r.triggerSourceset(n.src),t}})),n.setAttribute=function(e,t){var i=a.call(n,e,t);return/src/i.test(e)&&r.triggerSourceset(n.src),i},n.load=function(){var e=t.call(n);return ia(r)||(r.triggerSourceset(""),aa(r)),e},n.currentSrc?r.triggerSourceset(n.currentSrc):ia(r)||aa(r),n.resetSourceset_=function(){n.resetSourceset_=null,n.load=t,n.setAttribute=a,Object.defineProperty(n,"src",i),n.resetSourceWatch_&&n.resetSourceWatch_()}}}},ua=h(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."],["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),la=function(c){function h(e,t){y(this,h);var i=b(this,c.call(this,e,t)),r=e.source,n=!1;if(r&&(i.el_.currentSrc!==r.src||e.tag&&3===e.tag.initNetworkState_)?i.setSource(r):i.handleLateInit_(i.el_),e.enableSourceset&&i.setupSourcesetHandling_(),i.el_.hasChildNodes()){for(var a=i.el_.childNodes,s=a.length,o=[];s--;){var u=a[s];"track"===u.nodeName.toLowerCase()&&(i.featuresNativeTextTracks?(i.remoteTextTrackEls().addTrackElement_(u),i.remoteTextTracks().addTrack(u.track),i.textTracks().addTrack(u.track),n||i.el_.hasAttribute("crossorigin")||!ti(u.src)||(n=!0)):o.push(u))}for(var l=0;l<o.length;l++)i.el_.removeChild(o[l])}return i.proxyNativeTracks_(),i.featuresNativeTextTracks&&n&&f.warn(m(ua)),i.restoreMetadataTracksInIOSNativePlayer_(),(gt||it||ut)&&!0===e.nativeControlsForTouch&&i.setControls(!0),i.proxyWebkitFullscreen_(),i.triggerReady(),i}return _(h,c),h.prototype.dispose=function(){this.el_&&this.el_.resetSourceset_&&this.el_.resetSourceset_(),h.disposeMediaElement(this.el_),this.options_=null,c.prototype.dispose.call(this)},h.prototype.setupSourcesetHandling_=function(){oa(this)},h.prototype.restoreMetadataTracksInIOSNativePlayer_=function(){var r=this.textTracks(),n=void 0,e=function(){n=[];for(var e=0;e<r.length;e++){var t=r[e];"metadata"===t.kind&&n.push({track:t,storedMode:t.mode})}};e(),r.addEventListener("change",e),this.on("dispose",function(){return r.removeEventListener("change",e)});var t=function e(){for(var t=0;t<n.length;t++){var i=n[t];"disabled"===i.track.mode&&i.track.mode!==i.storedMode&&(i.track.mode=i.storedMode)}r.removeEventListener("change",e)};this.on("webkitbeginfullscreen",function(){r.removeEventListener("change",e),r.removeEventListener("change",t),r.addEventListener("change",t)}),this.on("webkitendfullscreen",function(){r.removeEventListener("change",e),r.addEventListener("change",e),r.removeEventListener("change",t)})},h.prototype.overrideNative_=function(e,t){var i=this;if(t===this["featuresNative"+e+"Tracks"]){var r=e.toLowerCase();this[r+"TracksListeners_"]&&Object.keys(this[r+"TracksListeners_"]).forEach(function(e){i.el()[r+"Tracks"].removeEventListener(e,i[r+"TracksListeners_"][e])}),this["featuresNative"+e+"Tracks"]=!t,this[r+"TracksListeners_"]=null,this.proxyNativeTracksForType_(r)}},h.prototype.overrideNativeAudioTracks=function(e){this.overrideNative_("Audio",e)},h.prototype.overrideNativeVideoTracks=function(e){this.overrideNative_("Video",e)},h.prototype.proxyNativeTracksForType_=function(e){var r=this,t=Ui[e],n=this.el()[t.getterName],a=this[t.getterName]();if(this["featuresNative"+t.capitalName+"Tracks"]&&n&&n.addEventListener){var s={change:function(e){a.trigger({type:"change",target:a,currentTarget:a,srcElement:a})},addtrack:function(e){a.addTrack(e.track)},removetrack:function(e){a.removeTrack(e.track)}},i=function(){for(var e=[],t=0;t<a.length;t++){for(var i=!1,r=0;r<n.length;r++)if(n[r]===a[t]){i=!0;break}i||e.push(a[t])}for(;e.length;)a.removeTrack(e.shift())};this[t.getterName+"Listeners_"]=s,Object.keys(s).forEach(function(t){var i=s[t];n.addEventListener(t,i),r.on("dispose",function(e){return n.removeEventListener(t,i)})}),this.on("loadstart",i),this.on("dispose",function(e){return r.off("loadstart",i)})}},h.prototype.proxyNativeTracks_=function(){var t=this;Ui.names.forEach(function(e){t.proxyNativeTracksForType_(e)})},h.prototype.createEl=function(){var e=this.options_.tag;if(!e||!this.options_.playerElIngest&&!this.movingMediaElementInDOM){if(e){var t=e.cloneNode(!0);e.parentNode&&e.parentNode.insertBefore(t,e),h.disposeMediaElement(e),e=t}else{e=p.createElement("video");var i=Ge({},this.options_.tag&&q(this.options_.tag));gt&&!0===this.options_.nativeControlsForTouch||delete i.controls,V(e,C(i,{id:this.options_.techId,class:"vjs-tech"}))}e.playerId=this.options_.playerId}"undefined"!=typeof this.options_.preload&&z(e,"preload",this.options_.preload);for(var r=["loop","muted","playsinline","autoplay"],n=0;n<r.length;n++){var a=r[n],s=this.options_[a];"undefined"!=typeof s&&(s?z(e,a,a):G(e,a),e[a]=s)}return e},h.prototype.handleLateInit_=function(e){if(0!==e.networkState&&3!==e.networkState){if(0===e.readyState){var t=!1,i=function(){t=!0};this.on("loadstart",i);var r=function(){t||this.trigger("loadstart")};return this.on("loadedmetadata",r),void this.ready(function(){this.off("loadstart",i),this.off("loadedmetadata",r),t||this.trigger("loadstart")})}var n=["loadstart"];n.push("loadedmetadata"),2<=e.readyState&&n.push("loadeddata"),3<=e.readyState&&n.push("canplay"),4<=e.readyState&&n.push("canplaythrough"),this.ready(function(){n.forEach(function(e){this.trigger(e)},this)})}},h.prototype.setCurrentTime=function(e){try{this.el_.currentTime=e}catch(e){f(e,"Video is not ready. (Video.js)")}},h.prototype.duration=function(){var t=this;if(this.el_.duration===1/0&&st&&ht&&0===this.el_.currentTime){return this.on("timeupdate",function e(){0<t.el_.currentTime&&(t.el_.duration===1/0&&t.trigger("durationchange"),t.off("timeupdate",e))}),NaN}return this.el_.duration||NaN},h.prototype.width=function(){return this.el_.offsetWidth},h.prototype.height=function(){return this.el_.offsetHeight},h.prototype.proxyWebkitFullscreen_=function(){var e=this;if("webkitDisplayingFullscreen"in this.el_){var t=function(){this.trigger("fullscreenchange",{isFullscreen:!1})},i=function(){"webkitPresentationMode"in this.el_&&"picture-in-picture"!==this.el_.webkitPresentationMode&&(this.one("webkitendfullscreen",t),this.trigger("fullscreenchange",{isFullscreen:!0}))};this.on("webkitbeginfullscreen",i),this.on("dispose",function(){e.off("webkitbeginfullscreen",i),e.off("webkitendfullscreen",t)})}},h.prototype.supportsFullScreen=function(){if("function"==typeof this.el_.webkitEnterFullScreen){var e=g.navigator&&g.navigator.userAgent||"";if(/Android/.test(e)||!/Chrome|Mac OS X 10.5/.test(e))return!0}return!1},h.prototype.enterFullScreen=function(){var e=this.el_;e.paused&&e.networkState<=e.HAVE_METADATA?(this.el_.play(),this.setTimeout(function(){e.pause(),e.webkitEnterFullScreen()},0)):e.webkitEnterFullScreen()},h.prototype.exitFullScreen=function(){this.el_.webkitExitFullScreen()},h.prototype.src=function(e){if(void 0===e)return this.el_.src;this.setSrc(e)},h.prototype.reset=function(){h.resetMediaElement(this.el_)},h.prototype.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.currentSrc},h.prototype.setControls=function(e){this.el_.controls=!!e},h.prototype.addTextTrack=function(e,t,i){return this.featuresNativeTextTracks?this.el_.addTextTrack(e,t,i):c.prototype.addTextTrack.call(this,e,t,i)},h.prototype.createRemoteTextTrack=function(e){if(!this.featuresNativeTextTracks)return c.prototype.createRemoteTextTrack.call(this,e);var t=p.createElement("track");return e.kind&&(t.kind=e.kind),e.label&&(t.label=e.label),(e.language||e.srclang)&&(t.srclang=e.language||e.srclang),e.default&&(t.default=e.default),e.id&&(t.id=e.id),e.src&&(t.src=e.src),t},h.prototype.addRemoteTextTrack=function(e,t){var i=c.prototype.addRemoteTextTrack.call(this,e,t);return this.featuresNativeTextTracks&&this.el().appendChild(i),i},h.prototype.removeRemoteTextTrack=function(e){if(c.prototype.removeRemoteTextTrack.call(this,e),this.featuresNativeTextTracks)for(var t=this.$$("track"),i=t.length;i--;)e!==t[i]&&e!==t[i].track||this.el().removeChild(t[i])},h.prototype.getVideoPlaybackQuality=function(){if("function"==typeof this.el().getVideoPlaybackQuality)return this.el().getVideoPlaybackQuality();var e={};return"undefined"!=typeof this.el().webkitDroppedFrameCount&&"undefined"!=typeof this.el().webkitDecodedFrameCount&&(e.droppedVideoFrames=this.el().webkitDroppedFrameCount,e.totalVideoFrames=this.el().webkitDecodedFrameCount),g.performance&&"function"==typeof g.performance.now?e.creationTime=g.performance.now():g.performance&&g.performance.timing&&"number"==typeof g.performance.timing.navigationStart&&(e.creationTime=g.Date.now()-g.performance.timing.navigationStart),e},h}(br);if(I()){la.TEST_VID=p.createElement("video");var ca=p.createElement("track");ca.kind="captions",ca.srclang="en",ca.label="English",la.TEST_VID.appendChild(ca)}la.isSupported=function(){try{la.TEST_VID.volume=.5}catch(e){return!1}return!(!la.TEST_VID||!la.TEST_VID.canPlayType)},la.canPlayType=function(e){return la.TEST_VID.canPlayType(e)},la.canPlaySource=function(e,t){return la.canPlayType(e.type)},la.canControlVolume=function(){try{var e=la.TEST_VID.volume;return la.TEST_VID.volume=e/2+.1,e!==la.TEST_VID.volume}catch(e){return!1}},la.canMuteVolume=function(){try{var e=la.TEST_VID.muted;return la.TEST_VID.muted=!e,la.TEST_VID.muted?z(la.TEST_VID,"muted","muted"):G(la.TEST_VID,"muted"),e!==la.TEST_VID.muted}catch(e){return!1}},la.canControlPlaybackRate=function(){if(st&&ht&&dt<58)return!1;try{var e=la.TEST_VID.playbackRate;return la.TEST_VID.playbackRate=e/2+.1,e!==la.TEST_VID.playbackRate}catch(e){return!1}},la.canOverrideAttributes=function(){try{var e=function(){};Object.defineProperty(p.createElement("video"),"src",{get:e,set:e}),Object.defineProperty(p.createElement("audio"),"src",{get:e,set:e}),Object.defineProperty(p.createElement("video"),"innerHTML",{get:e,set:e}),Object.defineProperty(p.createElement("audio"),"innerHTML",{get:e,set:e})}catch(e){return!1}return!0},la.supportsNativeTextTracks=function(){return mt||nt&&ht},la.supportsNativeVideoTracks=function(){return!(!la.TEST_VID||!la.TEST_VID.videoTracks)},la.supportsNativeAudioTracks=function(){return!(!la.TEST_VID||!la.TEST_VID.audioTracks)},la.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"],la.prototype.featuresVolumeControl=la.canControlVolume(),la.prototype.featuresMuteControl=la.canMuteVolume(),la.prototype.featuresPlaybackRate=la.canControlPlaybackRate(),la.prototype.featuresSourceset=la.canOverrideAttributes(),la.prototype.movingMediaElementInDOM=!nt,la.prototype.featuresFullscreenResize=!0,la.prototype.featuresProgressEvents=!0,la.prototype.featuresTimeupdateEvents=!0,la.prototype.featuresNativeTextTracks=la.supportsNativeTextTracks(),la.prototype.featuresNativeVideoTracks=la.supportsNativeVideoTracks(),la.prototype.featuresNativeAudioTracks=la.supportsNativeAudioTracks();var ha=la.TEST_VID&&la.TEST_VID.constructor.prototype.canPlayType,da=/^application\/(?:x-|vnd\.apple\.)mpegurl/i;la.patchCanPlayType=function(){4<=ot&&!lt&&!ht&&(la.TEST_VID.constructor.prototype.canPlayType=function(e){return e&&da.test(e)?"maybe":ha.call(this,e)})},la.unpatchCanPlayType=function(){var e=la.TEST_VID.constructor.prototype.canPlayType;return la.TEST_VID.constructor.prototype.canPlayType=ha,e},la.patchCanPlayType(),la.disposeMediaElement=function(e){if(e){for(e.parentNode&&e.parentNode.removeChild(e);e.hasChildNodes();)e.removeChild(e.firstChild);e.removeAttribute("src"),"function"==typeof e.load&&function(){try{e.load()}catch(e){}}()}},la.resetMediaElement=function(e){if(e){for(var t=e.querySelectorAll("source"),i=t.length;i--;)e.removeChild(t[i]);e.removeAttribute("src"),"function"==typeof e.load&&function(){try{e.load()}catch(e){}}()}},["muted","defaultMuted","autoplay","controls","loop","playsinline"].forEach(function(e){la.prototype[e]=function(){return this.el_[e]||this.el_.hasAttribute(e)}}),["muted","defaultMuted","autoplay","loop","playsinline"].forEach(function(t){la.prototype["set"+ze(t)]=function(e){(this.el_[t]=e)?this.el_.setAttribute(t,t):this.el_.removeAttribute(t)}}),["paused","currentTime","buffered","volume","poster","preload","error","seeking","seekable","ended","playbackRate","defaultPlaybackRate","played","networkState","readyState","videoWidth","videoHeight"].forEach(function(e){la.prototype[e]=function(){return this.el_[e]}}),["volume","src","poster","preload","playbackRate","defaultPlaybackRate"].forEach(function(t){la.prototype["set"+ze(t)]=function(e){this.el_[t]=e}}),["pause","load","play"].forEach(function(e){la.prototype[e]=function(){return this.el_[e]()}}),br.withSourceHandlers(la),la.nativeSourceHandler={},la.nativeSourceHandler.canPlayType=function(e){try{return la.TEST_VID.canPlayType(e)}catch(e){return""}},la.nativeSourceHandler.canHandleSource=function(e,t){if(e.type)return la.nativeSourceHandler.canPlayType(e.type);if(e.src){var i=ei(e.src);return la.nativeSourceHandler.canPlayType("video/"+i)}return""},la.nativeSourceHandler.handleSource=function(e,t,i){t.setSrc(e.src)},la.nativeSourceHandler.dispose=function(){},la.registerSourceHandler(la.nativeSourceHandler),br.registerTech("Html5",la);var pa=h(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "],["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),fa=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","resize","volumechange","texttrackchange"],ma={canplay:"CanPlay",canplaythrough:"CanPlayThrough",playing:"Playing",seeked:"Seeked"},ga=function(c){function h(e,t,i){if(y(this,h),e.id=e.id||t.id||"vjs_video_"+ue(),(t=C(h.getTagSettings(e),t)).initChildren=!1,t.createEl=!1,t.evented=!1,t.reportTouchActivity=!1,!t.language)if("function"==typeof e.closest){var r=e.closest("[lang]");r&&r.getAttribute&&(t.language=r.getAttribute("lang"))}else for(var n=e;n&&1===n.nodeType;){if(q(n).hasOwnProperty("lang")){t.language=n.getAttribute("lang");break}n=n.parentNode}var a=b(this,c.call(this,null,t,i));if(a.isPosterFromTech_=!1,a.queuedCallbacks_=[],a.isReady_=!1,a.hasStarted_=!1,a.userActive_=!1,!a.options_||!a.options_.techOrder||!a.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");if(a.tag=e,a.tagAttributes=e&&q(e),a.language(a.options_.language),t.languages){var s={};Object.getOwnPropertyNames(t.languages).forEach(function(e){s[e.toLowerCase()]=t.languages[e]}),a.languages_=s}else a.languages_=h.prototype.options_.languages;a.cache_={},a.poster_=t.poster||"",a.controls_=!!t.controls,a.cache_.lastVolume=1,e.controls=!1,e.removeAttribute("controls"),e.hasAttribute("autoplay")?a.options_.autoplay=!0:a.autoplay(a.options_.autoplay),a.scrubbing_=!1,a.el_=a.createEl(),a.cache_.lastPlaybackRate=a.defaultPlaybackRate(),Ve(a,{eventBusKey:"el_"});var o=Ge(a.options_);if(t.plugins){var u=t.plugins;Object.keys(u).forEach(function(e){if("function"!=typeof this[e])throw new Error('plugin "'+e+'" does not exist');this[e](u[e])},a)}a.options_.playerOptions=o,a.middleware_=[],a.initChildren(),a.isAudio("audio"===e.nodeName.toLowerCase()),a.controls()?a.addClass("vjs-controls-enabled"):a.addClass("vjs-controls-disabled"),a.el_.setAttribute("role","region"),a.isAudio()?a.el_.setAttribute("aria-label",a.localize("Audio Player")):a.el_.setAttribute("aria-label",a.localize("Video Player")),a.isAudio()&&a.addClass("vjs-audio"),a.flexNotSupported_()&&a.addClass("vjs-no-flex"),nt||a.addClass("vjs-workinghover"),h.players[a.id_]=a;var l=d.split(".")[0];return a.addClass("vjs-v"+l),a.userActive(!0),a.reportUserActivity(),a.one("play",a.listenForUserActivity_),a.on("fullscreenchange",a.handleFullscreenChange_),a.on("stageclick",a.handleStageClick_),a.changingSrc_=!1,a.playWaitingForReady_=!1,a.playOnLoadstart_=null,a}return _(h,c),h.prototype.dispose=function(){this.trigger("dispose"),this.off("dispose"),this.styleEl_&&this.styleEl_.parentNode&&(this.styleEl_.parentNode.removeChild(this.styleEl_),this.styleEl_=null),h.players[this.id_]=null,this.tag&&this.tag.player&&(this.tag.player=null),this.el_&&this.el_.player&&(this.el_.player=null),this.tech_&&(this.tech_.dispose(),this.isPosterFromTech_=!1,this.poster_=""),this.playerElIngest_&&(this.playerElIngest_=null),this.tag&&(this.tag=null),Sr[this.id()]=null,c.prototype.dispose.call(this)},h.prototype.createEl=function(){var t=this.tag,i=void 0,e=this.playerElIngest_=t.parentNode&&t.parentNode.hasAttribute&&t.parentNode.hasAttribute("data-vjs-player"),r="video-js"===this.tag.tagName.toLowerCase();e?i=this.el_=t.parentNode:r||(i=this.el_=c.prototype.createEl.call(this,"div"));var n=q(t);if(r){for(i=this.el_=t,t=this.tag=p.createElement("video");i.children.length;)t.appendChild(i.firstChild);B(i,"video-js")||j(i,"video-js"),i.appendChild(t),e=this.playerElIngest_=i,Object.keys(i).forEach(function(e){t[e]=i[e]})}if(t.setAttribute("tabindex","-1"),pt&&t.setAttribute("role","application"),t.removeAttribute("width"),t.removeAttribute("height"),Object.getOwnPropertyNames(n).forEach(function(e){r&&"class"===e||i.setAttribute(e,n[e]),r&&t.setAttribute(e,n[e])}),t.playerId=t.id,t.id+="_html5_api",t.className="vjs-tech",t.player=i.player=this,this.addClass("vjs-paused"),!0!==g.VIDEOJS_NO_DYNAMIC_STYLE){this.styleEl_=Le("vjs-styles-dimensions");var a=ne(".vjs-styles-defaults"),s=ne("head");s.insertBefore(this.styleEl_,a?a.nextSibling:s.firstChild)}this.width(this.options_.width),this.height(this.options_.height),this.fluid(this.options_.fluid),this.aspectRatio(this.options_.aspectRatio);for(var o=t.getElementsByTagName("a"),u=0;u<o.length;u++){var l=o.item(u);j(l,"vjs-hidden"),l.setAttribute("hidden","hidden")}return t.initNetworkState_=t.networkState,t.parentNode&&!e&&t.parentNode.insertBefore(i,t),N(t,i),this.children_.unshift(t),this.el_.setAttribute("lang",this.language_),this.el_=i},h.prototype.width=function(e){return this.dimension("width",e)},h.prototype.height=function(e){return this.dimension("height",e)},h.prototype.dimension=function(e,t){var i=e+"_";if(void 0===t)return this[i]||0;if(""===t)return this[i]=void 0,void this.updateStyleEl_();var r=parseFloat(t);isNaN(r)?f.error('Improper value "'+t+'" supplied for for '+e):(this[i]=r,this.updateStyleEl_())},h.prototype.fluid=function(e){if(void 0===e)return!!this.fluid_;this.fluid_=!!e,e?this.addClass("vjs-fluid"):this.removeClass("vjs-fluid"),this.updateStyleEl_()},h.prototype.aspectRatio=function(e){if(void 0===e)return this.aspectRatio_;if(!/^\d+\:\d+$/.test(e))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");this.aspectRatio_=e,this.fluid(!0),this.updateStyleEl_()},h.prototype.updateStyleEl_=function(){if(!0!==g.VIDEOJS_NO_DYNAMIC_STYLE){var e=void 0,t=void 0,i=void 0,r=(void 0!==this.aspectRatio_&&"auto"!==this.aspectRatio_?this.aspectRatio_:0<this.videoWidth()?this.videoWidth()+":"+this.videoHeight():"16:9").split(":"),n=r[1]/r[0];e=void 0!==this.width_?this.width_:void 0!==this.height_?this.height_/n:this.videoWidth()||300,t=void 0!==this.height_?this.height_:e*n,i=/^[^a-zA-Z]/.test(this.id())?"dimensions-"+this.id():this.id()+"-dimensions",this.addClass(i),Pe(this.styleEl_,"\n      ."+i+" {\n        width: "+e+"px;\n        height: "+t+"px;\n      }\n\n      ."+i+".vjs-fluid {\n        padding-top: "+100*n+"%;\n      }\n    ")}else{var a="number"==typeof this.width_?this.width_:this.options_.width,s="number"==typeof this.height_?this.height_:this.options_.height,o=this.tech_&&this.tech_.el();o&&(0<=a&&(o.width=a),0<=s&&(o.height=s))}},h.prototype.loadTech_=function(e,t){var i=this;this.tech_&&this.unloadTech_();var r=ze(e),n=e.charAt(0).toLowerCase()+e.slice(1);"Html5"!==r&&this.tag&&(br.getTech("Html5").disposeMediaElement(this.tag),this.tag.player=null,this.tag=null),this.techName_=r,this.isReady_=!1;var a={source:t,autoplay:"string"!=typeof this.autoplay()&&this.autoplay(),nativeControlsForTouch:this.options_.nativeControlsForTouch,playerId:this.id(),techId:this.id()+"_"+r+"_api",playsinline:this.options_.playsinline,preload:this.options_.preload,loop:this.options_.loop,muted:this.options_.muted,poster:this.poster(),language:this.language(),playerElIngest:this.playerElIngest_||!1,"vtt.js":this.options_["vtt.js"],canOverridePoster:!!this.options_.techCanOverridePoster,enableSourceset:this.options_.enableSourceset};Bi.names.forEach(function(e){var t=Bi[e];a[t.getterName]=i[t.privateName]}),C(a,this.options_[r]),C(a,this.options_[n]),C(a,this.options_[e.toLowerCase()]),this.tag&&(a.tag=this.tag),t&&t.src===this.cache_.src&&0<this.cache_.currentTime&&(a.startTime=this.cache_.currentTime);var s=br.getTech(e);if(!s)throw new Error("No Tech named '"+r+"' exists! '"+r+"' should be registered using videojs.registerTech()'");this.tech_=new s(a),this.tech_.ready(Oe(this,this.handleTechReady_),!0),Mt(this.textTracksJson_||[],this.tech_),fa.forEach(function(e){i.on(i.tech_,e,i["handleTech"+ze(e)+"_"])}),Object.keys(ma).forEach(function(t){i.on(i.tech_,t,function(e){0===i.tech_.playbackRate()&&i.tech_.seeking()?i.queuedCallbacks_.push({callback:i["handleTech"+ma[t]+"_"].bind(i),event:e}):i["handleTech"+ma[t]+"_"](e)})}),this.on(this.tech_,"loadstart",this.handleTechLoadStart_),this.on(this.tech_,"sourceset",this.handleTechSourceset_),this.on(this.tech_,"waiting",this.handleTechWaiting_),this.on(this.tech_,"ended",this.handleTechEnded_),this.on(this.tech_,"seeking",this.handleTechSeeking_),this.on(this.tech_,"play",this.handleTechPlay_),this.on(this.tech_,"firstplay",this.handleTechFirstPlay_),this.on(this.tech_,"pause",this.handleTechPause_),this.on(this.tech_,"durationchange",this.handleTechDurationChange_),this.on(this.tech_,"fullscreenchange",this.handleTechFullscreenChange_),this.on(this.tech_,"error",this.handleTechError_),this.on(this.tech_,"loadedmetadata",this.updateStyleEl_),this.on(this.tech_,"posterchange",this.handleTechPosterChange_),this.on(this.tech_,"textdata",this.handleTechTextData_),this.on(this.tech_,"ratechange",this.handleTechRateChange_),this.usingNativeControls(this.techGet_("controls")),this.controls()&&!this.usingNativeControls()&&this.addTechControlsListeners_(),this.tech_.el().parentNode===this.el()||"Html5"===r&&this.tag||N(this.tech_.el(),this.el()),this.tag&&(this.tag.player=null,this.tag=null)},h.prototype.unloadTech_=function(){var i=this;Bi.names.forEach(function(e){var t=Bi[e];i[t.privateName]=i[t.getterName]()}),this.textTracksJson_=Rt(this.tech_),this.isReady_=!1,this.tech_.dispose(),this.tech_=!1,this.isPosterFromTech_&&(this.poster_="",this.trigger("posterchange")),this.isPosterFromTech_=!1},h.prototype.tech=function(e){return void 0===e&&f.warn(m(pa)),this.tech_},h.prototype.addTechControlsListeners_=function(){this.removeTechControlsListeners_(),this.on(this.tech_,"mousedown",this.handleTechClick_),this.on(this.tech_,"dblclick",this.handleTechDoubleClick_),this.on(this.tech_,"touchstart",this.handleTechTouchStart_),this.on(this.tech_,"touchmove",this.handleTechTouchMove_),this.on(this.tech_,"touchend",this.handleTechTouchEnd_),this.on(this.tech_,"tap",this.handleTechTap_)},h.prototype.removeTechControlsListeners_=function(){this.off(this.tech_,"tap",this.handleTechTap_),this.off(this.tech_,"touchstart",this.handleTechTouchStart_),this.off(this.tech_,"touchmove",this.handleTechTouchMove_),this.off(this.tech_,"touchend",this.handleTechTouchEnd_),this.off(this.tech_,"mousedown",this.handleTechClick_),this.off(this.tech_,"dblclick",this.handleTechDoubleClick_)},h.prototype.handleTechReady_=function(){this.triggerReady(),this.cache_.volume&&this.techCall_("setVolume",this.cache_.volume),this.handleTechPosterChange_(),this.handleTechDurationChange_()},h.prototype.handleTechLoadStart_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-seeking"),this.error(null),this.paused()?(this.hasStarted(!1),this.trigger("loadstart")):(this.trigger("loadstart"),this.trigger("firstplay")),this.manualAutoplay_(this.autoplay())},h.prototype.manualAutoplay_=function(t){var i=this;if(this.tech_&&"string"==typeof t){var e=function(){var t=i.muted();i.muted(!0);var e=i.play();if(e&&e.then&&e.catch)return e.catch(function(e){i.muted(t)})},r=void 0;if("any"===t?(r=this.play())&&r.then&&r.catch&&r.catch(function(){return e()}):r="muted"===t?e():this.play(),r&&r.then&&r.catch)return r.then(function(){i.trigger({type:"autoplay-success",autoplay:t})}).catch(function(e){i.trigger({type:"autoplay-failure",autoplay:t})})}},h.prototype.updateSourceCaches_=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",t=e,i="";"string"!=typeof t&&(t=e.src,i=e.type),this.cache_.source=this.cache_.source||{},this.cache_.sources=this.cache_.sources||[],t&&!i&&(i=function(e,t){if(!t)return"";if(e.cache_.source.src===t&&e.cache_.source.type)return e.cache_.source.type;var i=e.cache_.sources.filter(function(e){return e.src===t});if(i.length)return i[0].type;for(var r=e.$$("source"),n=0;n<r.length;n++){var a=r[n];if(a.type&&a.src&&a.src===t)return a.type}return Ir(t)}(this,t)),this.cache_.source=Ge({},e,{src:t,type:i});for(var r=this.cache_.sources.filter(function(e){return e.src&&e.src===t}),n=[],a=this.$$("source"),s=[],o=0;o<a.length;o++){var u=q(a[o]);n.push(u),u.src&&u.src===t&&s.push(u.src)}s.length&&!r.length?this.cache_.sources=n:r.length||(this.cache_.sources=[this.cache_.source]),this.cache_.src=t},h.prototype.handleTechSourceset_=function(e){var i=this;if(!this.changingSrc_&&(this.updateSourceCaches_(e.src),!e.src)){this.tech_.one(["sourceset","loadstart"],function e(t){"sourceset"!==t.type&&i.updateSourceCaches_(i.techGet_("currentSrc")),i.tech_.off(["sourceset","loadstart"],e)})}this.trigger({src:e.src,type:"sourceset"})},h.prototype.hasStarted=function(e){if(void 0===e)return this.hasStarted_;e!==this.hasStarted_&&(this.hasStarted_=e,this.hasStarted_?(this.addClass("vjs-has-started"),this.trigger("firstplay")):this.removeClass("vjs-has-started"))},h.prototype.handleTechPlay_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.hasStarted(!0),this.trigger("play")},h.prototype.handleTechRateChange_=function(){0<this.tech_.playbackRate()&&0===this.cache_.lastPlaybackRate&&(this.queuedCallbacks_.forEach(function(e){return e.callback(e.event)}),this.queuedCallbacks_=[]),this.cache_.lastPlaybackRate=this.tech_.playbackRate(),this.trigger("ratechange")},h.prototype.handleTechWaiting_=function(){var e=this;this.addClass("vjs-waiting"),this.trigger("waiting"),this.one("timeupdate",function(){return e.removeClass("vjs-waiting")})},h.prototype.handleTechCanPlay_=function(){this.removeClass("vjs-waiting"),this.trigger("canplay")},h.prototype.handleTechCanPlayThrough_=function(){this.removeClass("vjs-waiting"),this.trigger("canplaythrough")},h.prototype.handleTechPlaying_=function(){this.removeClass("vjs-waiting"),this.trigger("playing")},h.prototype.handleTechSeeking_=function(){this.addClass("vjs-seeking"),this.trigger("seeking")},h.prototype.handleTechSeeked_=function(){this.removeClass("vjs-seeking"),this.trigger("seeked")},h.prototype.handleTechFirstPlay_=function(){this.options_.starttime&&(f.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),this.currentTime(this.options_.starttime)),this.addClass("vjs-has-started"),this.trigger("firstplay")},h.prototype.handleTechPause_=function(){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.trigger("pause")},h.prototype.handleTechEnded_=function(){this.addClass("vjs-ended"),this.options_.loop?(this.currentTime(0),this.play()):this.paused()||this.pause(),this.trigger("ended")},h.prototype.handleTechDurationChange_=function(){this.duration(this.techGet_("duration"))},h.prototype.handleTechClick_=function(e){re(e)&&this.controls_&&(this.paused()?xt(this.play()):this.pause())},h.prototype.handleTechDoubleClick_=function(t){this.controls_&&(Array.prototype.some.call(this.$$(".vjs-control-bar, .vjs-modal-dialog"),function(e){return e.contains(t.target)})||(this.isFullscreen()?this.exitFullscreen():this.requestFullscreen()))},h.prototype.handleTechTap_=function(){this.userActive(!this.userActive())},h.prototype.handleTechTouchStart_=function(){this.userWasActive=this.userActive()},h.prototype.handleTechTouchMove_=function(){this.userWasActive&&this.reportUserActivity()},h.prototype.handleTechTouchEnd_=function(e){e.preventDefault()},h.prototype.handleFullscreenChange_=function(){this.isFullscreen()?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen")},h.prototype.handleStageClick_=function(){this.reportUserActivity()},h.prototype.handleTechFullscreenChange_=function(e,t){t&&this.isFullscreen(t.isFullscreen),this.trigger("fullscreenchange")},h.prototype.handleTechError_=function(){var e=this.tech_.error();this.error(e)},h.prototype.handleTechTextData_=function(){var e=null;1<arguments.length&&(e=arguments[1]),this.trigger("textdata",e)},h.prototype.getCache=function(){return this.cache_},h.prototype.techCall_=function(n,a){this.ready(function(){if(n in Ar)return e=this.middleware_,t=this.tech_,r=a,t[i=n](e.reduce(Pr(i),r));if(n in Lr)return Er(this.middleware_,this.tech_,n,a);var e,t,i,r;try{this.tech_&&this.tech_[n](a)}catch(e){throw f(e),e}},!0)},h.prototype.techGet_=function(t){if(this.tech_&&this.tech_.isReady_){if(t in wr)return e=this.middleware_,i=this.tech_,r=t,e.reduceRight(Pr(r),i[r]());if(t in Lr)return Er(this.middleware_,this.tech_,t);var e,i,r;try{return this.tech_[t]()}catch(e){if(void 0===this.tech_[t])throw f("Video.js: "+t+" method not defined for "+this.techName_+" playback technology.",e),e;if("TypeError"===e.name)throw f("Video.js: "+t+" unavailable on "+this.techName_+" playback technology element.",e),this.tech_.isReady_=!1,e;throw f(e),e}}},h.prototype.play=function(){var e=this;if(this.playOnLoadstart_&&this.off("loadstart",this.playOnLoadstart_),this.isReady_){if(!this.changingSrc_&&(this.src()||this.currentSrc()))return this.techGet_("play");this.playOnLoadstart_=function(){e.playOnLoadstart_=null,xt(e.play())},this.one("loadstart",this.playOnLoadstart_)}else{if(this.playWaitingForReady_)return;this.playWaitingForReady_=!0,this.ready(function(){e.playWaitingForReady_=!1,xt(e.play())})}},h.prototype.pause=function(){this.techCall_("pause")},h.prototype.paused=function(){return!1!==this.techGet_("paused")},h.prototype.played=function(){return this.techGet_("played")||bt(0,0)},h.prototype.scrubbing=function(e){if("undefined"==typeof e)return this.scrubbing_;this.scrubbing_=!!e,e?this.addClass("vjs-scrubbing"):this.removeClass("vjs-scrubbing")},h.prototype.currentTime=function(e){return"undefined"!=typeof e?(e<0&&(e=0),void this.techCall_("setCurrentTime",e)):(this.cache_.currentTime=this.techGet_("currentTime")||0,this.cache_.currentTime)},h.prototype.duration=function(e){if(void 0===e)return void 0!==this.cache_.duration?this.cache_.duration:NaN;(e=parseFloat(e))<0&&(e=1/0),e!==this.cache_.duration&&((this.cache_.duration=e)===1/0?this.addClass("vjs-live"):this.removeClass("vjs-live"),this.trigger("durationchange"))},h.prototype.remainingTime=function(){return this.duration()-this.currentTime()},h.prototype.remainingTimeDisplay=function(){return Math.floor(this.duration())-Math.floor(this.currentTime())},h.prototype.buffered=function(){var e=this.techGet_("buffered");return e&&e.length||(e=bt(0,0)),e},h.prototype.bufferedPercent=function(){return Tt(this.buffered(),this.duration())},h.prototype.bufferedEnd=function(){var e=this.buffered(),t=this.duration(),i=e.end(e.length-1);return t<i&&(i=t),i},h.prototype.volume=function(e){var t=void 0;return void 0!==e?(t=Math.max(0,Math.min(1,parseFloat(e))),this.cache_.volume=t,this.techCall_("setVolume",t),void(0<t&&this.lastVolume_(t))):(t=parseFloat(this.techGet_("volume")),isNaN(t)?1:t)},h.prototype.muted=function(e){if(void 0===e)return this.techGet_("muted")||!1;this.techCall_("setMuted",e)},h.prototype.defaultMuted=function(e){return void 0!==e?this.techCall_("setDefaultMuted",e):this.techGet_("defaultMuted")||!1},h.prototype.lastVolume_=function(e){if(void 0===e||0===e)return this.cache_.lastVolume;this.cache_.lastVolume=e},h.prototype.supportsFullScreen=function(){return this.techGet_("supportsFullScreen")||!1},h.prototype.isFullscreen=function(e){if(void 0===e)return!!this.isFullscreen_;this.isFullscreen_=!!e},h.prototype.requestFullscreen=function(){var i=St;this.isFullscreen(!0),i.requestFullscreen?(_e(p,i.fullscreenchange,Oe(this,function e(t){this.isFullscreen(p[i.fullscreenElement]),!1===this.isFullscreen()&&be(p,i.fullscreenchange,e),this.trigger("fullscreenchange")})),this.el_[i.requestFullscreen]()):this.tech_.supportsFullScreen()?this.techCall_("enterFullScreen"):(this.enterFullWindow(),this.trigger("fullscreenchange"))},h.prototype.exitFullscreen=function(){var e=St;this.isFullscreen(!1),e.requestFullscreen?p[e.exitFullscreen]():this.tech_.supportsFullScreen()?this.techCall_("exitFullScreen"):(this.exitFullWindow(),this.trigger("fullscreenchange"))},h.prototype.enterFullWindow=function(){this.isFullWindow=!0,this.docOrigOverflow=p.documentElement.style.overflow,_e(p,"keydown",Oe(this,this.fullWindowOnEscKey)),p.documentElement.style.overflow="hidden",j(p.body,"vjs-full-window"),this.trigger("enterFullWindow")},h.prototype.fullWindowOnEscKey=function(e){27===e.keyCode&&(!0===this.isFullscreen()?this.exitFullscreen():this.exitFullWindow())},h.prototype.exitFullWindow=function(){this.isFullWindow=!1,be(p,"keydown",this.fullWindowOnEscKey),p.documentElement.style.overflow=this.docOrigOverflow,F(p.body,"vjs-full-window"),this.trigger("exitFullWindow")},h.prototype.canPlayType=function(e){for(var t=void 0,i=0,r=this.options_.techOrder;i<r.length;i++){var n=r[i],a=br.getTech(n);if(a||(a=Xe.getComponent(n)),a){if(a.isSupported()&&(t=a.canPlayType(e)))return t}else f.error('The "'+n+'" tech is undefined. Skipped browser support check for that tech.')}return""},h.prototype.selectSource=function(e){var i,r=this,t=this.options_.techOrder.map(function(e){return[e,br.getTech(e)]}).filter(function(e){var t=e[0],i=e[1];return i?i.isSupported():(f.error('The "'+t+'" tech is undefined. Skipped browser support check for that tech.'),!1)}),n=function(e,i,r){var n=void 0;return e.some(function(t){return i.some(function(e){if(n=r(t,e))return!0})}),n},a=function(e,t){var i=e[0];if(e[1].canPlaySource(t,r.options_[i.toLowerCase()]))return{source:t,tech:i}};return(this.options_.sourceOrder?n(e,t,(i=a,function(e,t){return i(t,e)})):n(t,e,a))||!1},h.prototype.src=function(e){var n=this;if("undefined"==typeof e)return this.cache_.src||"";var a=function t(e){if(Array.isArray(e)){var i=[];e.forEach(function(e){e=t(e),Array.isArray(e)?i=i.concat(e):E(e)&&i.push(e)}),e=i}else e="string"==typeof e&&e.trim()?[xr({src:e})]:E(e)&&"string"==typeof e.src&&e.src&&e.src.trim()?[xr(e)]:[];return e}(e);a.length?(this.changingSrc_=!0,this.cache_.sources=a,this.updateSourceCaches_(a[0]),Cr(this,a[0],function(e,t){var i,r;if(n.middleware_=t,n.cache_.sources=a,n.updateSourceCaches_(e),n.src_(e))return 1<a.length?n.src(a.slice(1)):(n.changingSrc_=!1,n.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0),void n.triggerReady());i=t,r=n.tech_,i.forEach(function(e){return e.setTech&&e.setTech(r)})})):this.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0)},h.prototype.src_=function(e){var t,i,r=this,n=this.selectSource([e]);return!n||(t=n.tech,i=this.techName_,ze(t)!==ze(i)?(this.changingSrc_=!0,this.loadTech_(n.tech,n.source),this.tech_.ready(function(){r.changingSrc_=!1})):this.ready(function(){this.tech_.constructor.prototype.hasOwnProperty("setSource")?this.techCall_("setSource",e):this.techCall_("src",e.src),this.changingSrc_=!1},!0),!1)},h.prototype.load=function(){this.techCall_("load")},h.prototype.reset=function(){this.loadTech_(this.options_.techOrder[0],null),this.techCall_("reset")},h.prototype.currentSources=function(){var e=this.currentSource(),t=[];return 0!==Object.keys(e).length&&t.push(e),this.cache_.sources||t},h.prototype.currentSource=function(){return this.cache_.source||{}},h.prototype.currentSrc=function(){return this.currentSource()&&this.currentSource().src||""},h.prototype.currentType=function(){return this.currentSource()&&this.currentSource().type||""},h.prototype.preload=function(e){return void 0!==e?(this.techCall_("setPreload",e),void(this.options_.preload=e)):this.techGet_("preload")},h.prototype.autoplay=function(e){if(void 0===e)return this.options_.autoplay||!1;var t=void 0;"string"==typeof e&&/(any|play|muted)/.test(e)?(this.options_.autoplay=e,this.manualAutoplay_(e),t=!1):this.options_.autoplay=!!e,t=t||this.options_.autoplay,this.tech_&&this.techCall_("setAutoplay",t)},h.prototype.playsinline=function(e){return void 0!==e?(this.techCall_("setPlaysinline",e),this.options_.playsinline=e,this):this.techGet_("playsinline")},h.prototype.loop=function(e){return void 0!==e?(this.techCall_("setLoop",e),void(this.options_.loop=e)):this.techGet_("loop")},h.prototype.poster=function(e){if(void 0===e)return this.poster_;e||(e=""),e!==this.poster_&&(this.poster_=e,this.techCall_("setPoster",e),this.isPosterFromTech_=!1,this.trigger("posterchange"))},h.prototype.handleTechPosterChange_=function(){if((!this.poster_||this.options_.techCanOverridePoster)&&this.tech_&&this.tech_.poster){var e=this.tech_.poster()||"";e!==this.poster_&&(this.poster_=e,this.isPosterFromTech_=!0,this.trigger("posterchange"))}},h.prototype.controls=function(e){if(void 0===e)return!!this.controls_;e=!!e,this.controls_!==e&&(this.controls_=e,this.usingNativeControls()&&this.techCall_("setControls",e),this.controls_?(this.removeClass("vjs-controls-disabled"),this.addClass("vjs-controls-enabled"),this.trigger("controlsenabled"),this.usingNativeControls()||this.addTechControlsListeners_()):(this.removeClass("vjs-controls-enabled"),this.addClass("vjs-controls-disabled"),this.trigger("controlsdisabled"),this.usingNativeControls()||this.removeTechControlsListeners_()))},h.prototype.usingNativeControls=function(e){if(void 0===e)return!!this.usingNativeControls_;e=!!e,this.usingNativeControls_!==e&&(this.usingNativeControls_=e,this.usingNativeControls_?(this.addClass("vjs-using-native-controls"),this.trigger("usingnativecontrols")):(this.removeClass("vjs-using-native-controls"),this.trigger("usingcustomcontrols")))},h.prototype.error=function(e){return void 0===e?this.error_||null:null===e?(this.error_=e,this.removeClass("vjs-error"),void(this.errorDisplay&&this.errorDisplay.close())):(this.error_=new Lt(e),this.addClass("vjs-error"),f.error("(CODE:"+this.error_.code+" "+Lt.errorTypes[this.error_.code]+")",this.error_.message,this.error_),void this.trigger("error"))},h.prototype.reportUserActivity=function(e){this.userActivity_=!0},h.prototype.userActive=function(e){if(void 0===e)return this.userActive_;if((e=!!e)!==this.userActive_){if(this.userActive_=e,this.userActive_)return this.userActivity_=!0,this.removeClass("vjs-user-inactive"),this.addClass("vjs-user-active"),void this.trigger("useractive");this.tech_&&this.tech_.one("mousemove",function(e){e.stopPropagation(),e.preventDefault()}),this.userActivity_=!1,this.removeClass("vjs-user-active"),this.addClass("vjs-user-inactive"),this.trigger("userinactive")}},h.prototype.listenForUserActivity_=function(){var t=void 0,i=void 0,r=void 0,n=Oe(this,this.reportUserActivity);this.on("mousedown",function(){n(),this.clearInterval(t),t=this.setInterval(n,250)}),this.on("mousemove",function(e){e.screenX===i&&e.screenY===r||(i=e.screenX,r=e.screenY,n())}),this.on("mouseup",function(e){n(),this.clearInterval(t)}),this.on("keydown",n),this.on("keyup",n);var a=void 0;this.setInterval(function(){if(this.userActivity_){this.userActivity_=!1,this.userActive(!0),this.clearTimeout(a);var e=this.options_.inactivityTimeout;e<=0||(a=this.setTimeout(function(){this.userActivity_||this.userActive(!1)},e))}},250)},h.prototype.playbackRate=function(e){if(void 0===e)return this.tech_&&this.tech_.featuresPlaybackRate?this.cache_.lastPlaybackRate||this.techGet_("playbackRate"):1;this.techCall_("setPlaybackRate",e)},h.prototype.defaultPlaybackRate=function(e){return void 0!==e?this.techCall_("setDefaultPlaybackRate",e):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("defaultPlaybackRate"):1},h.prototype.isAudio=function(e){if(void 0===e)return!!this.isAudio_;this.isAudio_=!!e},h.prototype.addTextTrack=function(e,t,i){if(this.tech_)return this.tech_.addTextTrack(e,t,i)},h.prototype.addRemoteTextTrack=function(e,t){if(this.tech_)return this.tech_.addRemoteTextTrack(e,t)},h.prototype.removeRemoteTextTrack=function(){var e=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).track,t=void 0===e?arguments[0]:e;if(this.tech_)return this.tech_.removeRemoteTextTrack(t)},h.prototype.getVideoPlaybackQuality=function(){return this.techGet_("getVideoPlaybackQuality")},h.prototype.videoWidth=function(){return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0},h.prototype.videoHeight=function(){return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0},h.prototype.language=function(e){if(void 0===e)return this.language_;this.language_=String(e).toLowerCase()},h.prototype.languages=function(){return Ge(h.prototype.options_.languages,this.languages_)},h.prototype.toJSON=function(){var e=Ge(this.options_),t=e.tracks;e.tracks=[];for(var i=0;i<t.length;i++){var r=t[i];(r=Ge(r)).player=void 0,e.tracks[i]=r}return e},h.prototype.createModal=function(e,t){var i=this;(t=t||{}).content=e||"";var r=new Nt(this,t);return this.addChild(r),r.on("dispose",function(){i.removeChild(r)}),r.open(),r},h.getTagSettings=function(e){var t={sources:[],tracks:[]},i=q(e),r=i["data-setup"];if(B(e,"vjs-fluid")&&(i.fluid=!0),null!==r){var n=Ot(r||"{}"),a=n[0],s=n[1];a&&f.error(a),C(i,s)}if(C(t,i),e.hasChildNodes())for(var o=e.childNodes,u=0,l=o.length;u<l;u++){var c=o[u],h=c.nodeName.toLowerCase();"source"===h?t.sources.push(q(c)):"track"===h&&t.tracks.push(q(c))}return t},h.prototype.flexNotSupported_=function(){var e=p.createElement("i");return!("flexBasis"in e.style||"webkitFlexBasis"in e.style||"mozFlexBasis"in e.style||"msFlexBasis"in e.style||"msFlexOrder"in e.style)},h}(Xe);Bi.names.forEach(function(e){var t=Bi[e];ga.prototype[t.getterName]=function(){return this.tech_?this.tech_[t.getterName]():(this[t.privateName]=this[t.privateName]||new t.ListClass,this[t.privateName])}}),ga.players={};var ya=g.navigator;ga.prototype.options_={techOrder:br.defaultTechOrder_,html5:{},flash:{},inactivityTimeout:2e3,playbackRates:[],children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","controlBar","errorDisplay","textTrackSettings","resizeManager"],language:ya&&(ya.languages&&ya.languages[0]||ya.userLanguage||ya.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media."},["ended","seeking","seekable","networkState","readyState"].forEach(function(e){ga.prototype[e]=function(){return this.techGet_(e)}}),fa.forEach(function(e){ga.prototype["handleTech"+ze(e)+"_"]=function(){return this.trigger(e)}}),Xe.registerComponent("Player",ga);var va="plugin",_a="activePlugins_",ba={},Ta=function(e){return ba.hasOwnProperty(e)},Sa=function(e){return Ta(e)?ba[e]:void 0},ka=function(e,t){e[_a]=e[_a]||{},e[_a][t]=!0},Ca=function(e,t,i){var r=(i?"before":"")+"pluginsetup";e.trigger(r,t),e.trigger(r+":"+t.name,t)},Ea=function(n,a){return a.prototype.name=n,function(){Ca(this,{name:n,plugin:a,instance:null},!0);for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];var r=new(Function.prototype.bind.apply(a,[null].concat([this].concat(t))));return this[n]=function(){return r},Ca(this,r.getEventHash()),r}},wa=function(){function a(e){if(y(this,a),this.constructor===a)throw new Error("Plugin must be sub-classed; not directly instantiated.");this.player=e,Ve(this),delete this.trigger,We(this,this.constructor.defaultState),ka(e,this.name),this.dispose=Oe(this,this.dispose),e.on("dispose",this.dispose)}return a.prototype.version=function(){return this.constructor.VERSION},a.prototype.getEventHash=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return e.name=this.name,e.plugin=this.constructor,e.instance=this,e},a.prototype.trigger=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Te(this.eventBusEl_,e,this.getEventHash(t))},a.prototype.handleStateChanged=function(e){},a.prototype.dispose=function(){var e=this.name,t=this.player;this.trigger("dispose"),this.off(),t.off("dispose",this.dispose),t[_a][e]=!1,this.player=this.state=null,t[e]=Ea(e,ba[e])},a.isBasic=function(e){var t="string"==typeof e?Sa(e):e;return"function"==typeof t&&!a.prototype.isPrototypeOf(t.prototype)},a.registerPlugin=function(e,t){if("string"!=typeof e)throw new Error('Illegal plugin name, "'+e+'", must be a string, was '+("undefined"==typeof e?"undefined":v(e))+".");if(Ta(e))f.warn('A plugin named "'+e+'" already exists. You may want to avoid re-registering plugins!');else if(ga.prototype.hasOwnProperty(e))throw new Error('Illegal plugin name, "'+e+'", cannot share a name with an existing player method!');if("function"!=typeof t)throw new Error('Illegal plugin for "'+e+'", must be a function, was '+("undefined"==typeof t?"undefined":v(t))+".");var i,r,n;return ba[e]=t,e!==va&&(a.isBasic(t)?ga.prototype[e]=(i=e,r=t,n=function(){Ca(this,{name:i,plugin:r,instance:null},!0);var e=r.apply(this,arguments);return ka(this,i),Ca(this,{name:i,plugin:r,instance:e}),e},Object.keys(r).forEach(function(e){n[e]=r[e]}),n):ga.prototype[e]=Ea(e,t)),t},a.deregisterPlugin=function(e){if(e===va)throw new Error("Cannot de-register base plugin.");Ta(e)&&(delete ba[e],delete ga.prototype[e])},a.getPlugins=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Object.keys(ba),i=void 0;return e.forEach(function(e){var t=Sa(e);t&&((i=i||{})[e]=t)}),i},a.getPluginVersion=function(e){var t=Sa(e);return t&&t.VERSION||""},a}();wa.getPlugin=Sa,wa.BASE_PLUGIN_NAME=va,wa.registerPlugin(va,wa),ga.prototype.usingPlugin=function(e){return!!this[_a]&&!0===this[_a][e]},ga.prototype.hasPlugin=function(e){return!!Ta(e)};var Aa=function(e){return 0===e.indexOf("#")?e.slice(1):e};function La(e,i,t){var r=La.getPlayer(e);if(r)return i&&f.warn('Player "'+e+'" is already initialised. Options will not be applied.'),t&&r.ready(t),r;var n="string"==typeof e?ne("#"+Aa(e)):e;if(!x(n))throw new TypeError("The element or ID supplied is not valid. (videojs)");p.body.contains(n)||f.warn("The element supplied is not included in the DOM"),i=i||{},La.hooks("beforesetup").forEach(function(e){var t=e(n,Ge(i));E(t)&&!Array.isArray(t)?i=Ge(i,t):f.error("please return an object in beforesetup hooks")});var a=Xe.getComponent("Player");return r=new a(n,i,t),La.hooks("setup").forEach(function(e){return e(r)}),r}if(La.hooks_={},La.hooks=function(e,t){return La.hooks_[e]=La.hooks_[e]||[],t&&(La.hooks_[e]=La.hooks_[e].concat(t)),La.hooks_[e]},La.hook=function(e,t){La.hooks(e,t)},La.hookOnce=function(i,e){La.hooks(i,[].concat(e).map(function(t){return function e(){return La.removeHook(i,e),t.apply(void 0,arguments)}}))},La.removeHook=function(e,t){var i=La.hooks(e).indexOf(t);return!(i<=-1)&&(La.hooks_[e]=La.hooks_[e].slice(),La.hooks_[e].splice(i,1),!0)},!0!==g.VIDEOJS_NO_DYNAMIC_STYLE&&I()){var Pa=ne(".vjs-styles-defaults");if(!Pa){Pa=Le("vjs-styles-defaults");var Oa=ne("head");Oa&&Oa.insertBefore(Pa,Oa.firstChild),Pe(Pa,"\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")}}Ae(1,La),La.VERSION=d,La.options=ga.prototype.options_,La.getPlayers=function(){return ga.players},La.getPlayer=function(e){var t=ga.players,i=void 0;if("string"==typeof e){var r=Aa(e),n=t[r];if(n)return n;i=ne("#"+r)}else i=e;if(x(i)){var a=i,s=a.player,o=a.playerId;if(s||t[o])return s||t[o]}},La.getAllPlayers=function(){return Object.keys(ga.players).map(function(e){return ga.players[e]}).filter(Boolean)},La.players=ga.players,La.getComponent=Xe.getComponent,La.registerComponent=function(e,t){br.isTech(t)&&f.warn("The "+e+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),Xe.registerComponent.call(Xe,e,t)},La.getTech=br.getTech,La.registerTech=br.registerTech,La.use=function(e,t){Tr[e]=Tr[e]||[],Tr[e].push(t)},Object.defineProperty(La,"middleware",{value:{},writeable:!1,enumerable:!0}),Object.defineProperty(La.middleware,"TERMINATOR",{value:kr,writeable:!1,enumerable:!0}),La.browser=yt,La.TOUCH_ENABLED=gt,La.extend=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=function(){e.apply(this,arguments)},r={};for(var n in"object"===("undefined"==typeof t?"undefined":v(t))?(t.constructor!==Object.prototype.constructor&&(i=t.constructor),r=t):"function"==typeof t&&(i=t),function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":v(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(e.super_=t)}(i,e),r)r.hasOwnProperty(n)&&(i.prototype[n]=r[n]);return i},La.mergeOptions=Ge,La.bind=Oe,La.registerPlugin=wa.registerPlugin,La.plugin=function(e,t){return f.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),wa.registerPlugin(e,t)},La.getPlugins=wa.getPlugins,La.getPlugin=wa.getPlugin,La.getPluginVersion=wa.getPluginVersion,La.addLanguage=function(e,t){var i;return e=(""+e).toLowerCase(),La.options.languages=Ge(La.options.languages,((i={})[e]=t,i)),La.options.languages[e]},La.log=f,La.createTimeRange=La.createTimeRanges=bt,La.formatTime=Yr,La.setFormatTime=function(e){Xr=e},La.resetFormatTime=function(){Xr=Gr},La.parseUrl=Jt,La.isCrossOrigin=ti,La.EventTarget=De,La.on=_e,La.one=Se,La.off=be,La.trigger=Te,La.xhr=Ci,La.TextTrack=Oi,La.AudioTrack=Ii,La.VideoTrack=xi,["isEl","isTextNode","createEl","hasClass","addClass","removeClass","toggleClass","setAttributes","getAttributes","emptyEl","appendContent","insertContent"].forEach(function(e){La[e]=function(){return f.warn("videojs."+e+"() is deprecated; use videojs.dom."+e+"() instead"),se[e].apply(null,arguments)}}),La.computedStyle=A,La.dom=se,La.url=ii;var Ia=t(function(e,t){var i,c,r,n,h;i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,c=/^([^\/;?#]*)(.*)$/,r=/(?:\/|^)\.(?=\/)/g,n=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,h={buildAbsoluteURL:function(e,t,i){if(i=i||{},e=e.trim(),!(t=t.trim())){if(!i.alwaysNormalize)return e;var r=h.parseURL(e);if(!r)throw new Error("Error trying to parse base URL.");return r.path=h.normalizePath(r.path),h.buildURLFromParts(r)}var n=h.parseURL(t);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return i.alwaysNormalize?(n.path=h.normalizePath(n.path),h.buildURLFromParts(n)):t;var a=h.parseURL(e);if(!a)throw new Error("Error trying to parse base URL.");if(!a.netLoc&&a.path&&"/"!==a.path[0]){var s=c.exec(a.path);a.netLoc=s[1],a.path=s[2]}a.netLoc&&!a.path&&(a.path="/");var o={scheme:a.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(o.netLoc=a.netLoc,"/"!==n.path[0]))if(n.path){var u=a.path,l=u.substring(0,u.lastIndexOf("/")+1)+n.path;o.path=h.normalizePath(l)}else o.path=a.path,n.params||(o.params=a.params,n.query||(o.query=a.query));return null===o.path&&(o.path=i.alwaysNormalize?h.normalizePath(n.path):n.path),h.buildURLFromParts(o)},parseURL:function(e){var t=i.exec(e);return t?{scheme:t[1]||"",netLoc:t[2]||"",path:t[3]||"",params:t[4]||"",query:t[5]||"",fragment:t[6]||""}:null},normalizePath:function(e){for(e=e.split("").reverse().join("").replace(r,"");e.length!==(e=e.replace(n,"")).length;);return e.split("").reverse().join("")},buildURLFromParts:function(e){return e.scheme+e.netLoc+e.path+e.params+e.query+e.fragment}},e.exports=h}),xa=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Da=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},Ra=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":v(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Ma=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":v(t))&&"function"!=typeof t?e:t},Ua=function(){function e(){xa(this,e),this.listeners={}}return e.prototype.on=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.prototype.off=function(e,t){if(!this.listeners[e])return!1;var i=this.listeners[e].indexOf(t);return this.listeners[e].splice(i,1),-1<i},e.prototype.trigger=function(e){var t=this.listeners[e],i=void 0,r=void 0,n=void 0;if(t)if(2===arguments.length)for(r=t.length,i=0;i<r;++i)t[i].call(this,arguments[1]);else for(n=Array.prototype.slice.call(arguments,1),r=t.length,i=0;i<r;++i)t[i].apply(this,n)},e.prototype.dispose=function(){this.listeners={}},e.prototype.pipe=function(t){this.on("data",function(e){t.push(e)})},e}(),Na=function(t){function i(){xa(this,i);var e=Ma(this,t.call(this));return e.buffer="",e}return Ra(i,t),i.prototype.push=function(e){var t=void 0;for(this.buffer+=e,t=this.buffer.indexOf("\n");-1<t;t=this.buffer.indexOf("\n"))this.trigger("data",this.buffer.substring(0,t)),this.buffer=this.buffer.substring(t+1)},i}(Ua),Ba=function(e){for(var t=e.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')),i={},r=t.length,n=void 0;r--;)""!==t[r]&&((n=/([^=]*)=(.*)/.exec(t[r]).slice(1))[0]=n[0].replace(/^\s+|\s+$/g,""),n[1]=n[1].replace(/^\s+|\s+$/g,""),n[1]=n[1].replace(/^['"](.*)['"]$/g,"$1"),i[n[0]]=n[1]);return i},ja=function(t){function i(){xa(this,i);var e=Ma(this,t.call(this));return e.customParsers=[],e}return Ra(i,t),i.prototype.push=function(e){var t=void 0,i=void 0;if(0!==(e=e.replace(/^[\u0000\s]+|[\u0000\s]+$/g,"")).length)if("#"===e[0]){for(var r=0;r<this.customParsers.length;r++)if(this.customParsers[r].call(this,e))return;if(0===e.indexOf("#EXT"))if(e=e.replace("\r",""),t=/^#EXTM3U/.exec(e))this.trigger("data",{type:"tag",tagType:"m3u"});else{if(t=/^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e))return i={type:"tag",tagType:"inf"},t[1]&&(i.duration=parseFloat(t[1])),t[2]&&(i.title=t[2]),void this.trigger("data",i);if(t=/^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e))return i={type:"tag",tagType:"targetduration"},t[1]&&(i.duration=parseInt(t[1],10)),void this.trigger("data",i);if(t=/^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(e))return i={type:"tag",tagType:"totalduration"},t[1]&&(i.duration=parseInt(t[1],10)),void this.trigger("data",i);if(t=/^#EXT-X-VERSION:?([0-9.]*)?/.exec(e))return i={type:"tag",tagType:"version"},t[1]&&(i.version=parseInt(t[1],10)),void this.trigger("data",i);if(t=/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e))return i={type:"tag",tagType:"media-sequence"},t[1]&&(i.number=parseInt(t[1],10)),void this.trigger("data",i);if(t=/^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e))return i={type:"tag",tagType:"discontinuity-sequence"},t[1]&&(i.number=parseInt(t[1],10)),void this.trigger("data",i);if(t=/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e))return i={type:"tag",tagType:"playlist-type"},t[1]&&(i.playlistType=t[1]),void this.trigger("data",i);if(t=/^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(e))return i={type:"tag",tagType:"byterange"},t[1]&&(i.length=parseInt(t[1],10)),t[2]&&(i.offset=parseInt(t[2],10)),void this.trigger("data",i);if(t=/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e))return i={type:"tag",tagType:"allow-cache"},t[1]&&(i.allowed=!/NO/.test(t[1])),void this.trigger("data",i);if(t=/^#EXT-X-MAP:?(.*)$/.exec(e)){if(i={type:"tag",tagType:"map"},t[1]){var n=Ba(t[1]);if(n.URI&&(i.uri=n.URI),n.BYTERANGE){var a=n.BYTERANGE.split("@"),s=a[0],o=a[1];i.byterange={},s&&(i.byterange.length=parseInt(s,10)),o&&(i.byterange.offset=parseInt(o,10))}}this.trigger("data",i)}else if(t=/^#EXT-X-STREAM-INF:?(.*)$/.exec(e)){if(i={type:"tag",tagType:"stream-inf"},t[1]){if(i.attributes=Ba(t[1]),i.attributes.RESOLUTION){var u=i.attributes.RESOLUTION.split("x"),l={};u[0]&&(l.width=parseInt(u[0],10)),u[1]&&(l.height=parseInt(u[1],10)),i.attributes.RESOLUTION=l}i.attributes.BANDWIDTH&&(i.attributes.BANDWIDTH=parseInt(i.attributes.BANDWIDTH,10)),i.attributes["PROGRAM-ID"]&&(i.attributes["PROGRAM-ID"]=parseInt(i.attributes["PROGRAM-ID"],10))}this.trigger("data",i)}else{if(t=/^#EXT-X-MEDIA:?(.*)$/.exec(e))return i={type:"tag",tagType:"media"},t[1]&&(i.attributes=Ba(t[1])),void this.trigger("data",i);if(t=/^#EXT-X-ENDLIST/.exec(e))this.trigger("data",{type:"tag",tagType:"endlist"});else if(t=/^#EXT-X-DISCONTINUITY/.exec(e))this.trigger("data",{type:"tag",tagType:"discontinuity"});else{if(t=/^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(e))return i={type:"tag",tagType:"program-date-time"},t[1]&&(i.dateTimeString=t[1],i.dateTimeObject=new Date(t[1])),void this.trigger("data",i);if(t=/^#EXT-X-KEY:?(.*)$/.exec(e))return i={type:"tag",tagType:"key"},t[1]&&(i.attributes=Ba(t[1]),i.attributes.IV&&("0x"===i.attributes.IV.substring(0,2).toLowerCase()&&(i.attributes.IV=i.attributes.IV.substring(2)),i.attributes.IV=i.attributes.IV.match(/.{8}/g),i.attributes.IV[0]=parseInt(i.attributes.IV[0],16),i.attributes.IV[1]=parseInt(i.attributes.IV[1],16),i.attributes.IV[2]=parseInt(i.attributes.IV[2],16),i.attributes.IV[3]=parseInt(i.attributes.IV[3],16),i.attributes.IV=new Uint32Array(i.attributes.IV))),void this.trigger("data",i);if(t=/^#EXT-X-START:?(.*)$/.exec(e))return i={type:"tag",tagType:"start"},t[1]&&(i.attributes=Ba(t[1]),i.attributes["TIME-OFFSET"]=parseFloat(i.attributes["TIME-OFFSET"]),i.attributes.PRECISE=/YES/.test(i.attributes.PRECISE)),void this.trigger("data",i);if(t=/^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(e))return i={type:"tag",tagType:"cue-out-cont"},t[1]?i.data=t[1]:i.data="",void this.trigger("data",i);if(t=/^#EXT-X-CUE-OUT:?(.*)?$/.exec(e))return i={type:"tag",tagType:"cue-out"},t[1]?i.data=t[1]:i.data="",void this.trigger("data",i);if(t=/^#EXT-X-CUE-IN:?(.*)?$/.exec(e))return i={type:"tag",tagType:"cue-in"},t[1]?i.data=t[1]:i.data="",void this.trigger("data",i);this.trigger("data",{type:"tag",data:e.slice(4)})}}}else this.trigger("data",{type:"comment",text:e.slice(1)})}else this.trigger("data",{type:"uri",uri:e})},i.prototype.addParser=function(e){var t=this,i=e.expression,r=e.customType,n=e.dataParser,a=e.segment;"function"!=typeof n&&(n=function(e){return e}),this.customParsers.push(function(e){if(i.exec(e))return t.trigger("data",{type:"custom",data:n(e),customType:r,segment:a}),!0})},i}(Ua),Fa=function(t){function i(){xa(this,i);var e=Ma(this,t.call(this));e.lineStream=new Na,e.parseStream=new ja,e.lineStream.pipe(e.parseStream);var n=e,a=[],s={},o=void 0,u=void 0,l={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},c=0;return e.manifest={allowCache:!0,discontinuityStarts:[],segments:[]},e.parseStream.on("data",function(t){var i=void 0,r=void 0;({tag:function(){({"allow-cache":function(){this.manifest.allowCache=t.allowed,"allowed"in t||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange:function(){var e={};"length"in t&&((s.byterange=e).length=t.length,"offset"in t||(this.trigger("info",{message:"defaulting offset to zero"}),t.offset=0)),"offset"in t&&((s.byterange=e).offset=t.offset)},endlist:function(){this.manifest.endList=!0},inf:function(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),0<t.duration&&(s.duration=t.duration),0===t.duration&&(s.duration=.01,this.trigger("info",{message:"updating zero segment duration to a small value"})),this.manifest.segments=a},key:function(){t.attributes?"NONE"!==t.attributes.METHOD?t.attributes.URI?(t.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),u={method:t.attributes.METHOD||"AES-128",uri:t.attributes.URI},"undefined"!=typeof t.attributes.IV&&(u.iv=t.attributes.IV)):this.trigger("warn",{message:"ignoring key declaration without URI"}):u=null:this.trigger("warn",{message:"ignoring key declaration without attribute list"})},"media-sequence":function(){isFinite(t.number)?this.manifest.mediaSequence=t.number:this.trigger("warn",{message:"ignoring invalid media sequence: "+t.number})},"discontinuity-sequence":function(){isFinite(t.number)?(this.manifest.discontinuitySequence=t.number,c=t.number):this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+t.number})},"playlist-type":function(){/VOD|EVENT/.test(t.playlistType)?this.manifest.playlistType=t.playlistType:this.trigger("warn",{message:"ignoring unknown playlist type: "+t.playlist})},map:function(){o={},t.uri&&(o.uri=t.uri),t.byterange&&(o.byterange=t.byterange)},"stream-inf":function(){this.manifest.playlists=a,this.manifest.mediaGroups=this.manifest.mediaGroups||l,t.attributes?(s.attributes||(s.attributes={}),Da(s.attributes,t.attributes)):this.trigger("warn",{message:"ignoring empty stream-inf attributes"})},media:function(){if(this.manifest.mediaGroups=this.manifest.mediaGroups||l,t.attributes&&t.attributes.TYPE&&t.attributes["GROUP-ID"]&&t.attributes.NAME){var e=this.manifest.mediaGroups[t.attributes.TYPE];e[t.attributes["GROUP-ID"]]=e[t.attributes["GROUP-ID"]]||{},i=e[t.attributes["GROUP-ID"]],(r={default:/yes/i.test(t.attributes.DEFAULT)}).default?r.autoselect=!0:r.autoselect=/yes/i.test(t.attributes.AUTOSELECT),t.attributes.LANGUAGE&&(r.language=t.attributes.LANGUAGE),t.attributes.URI&&(r.uri=t.attributes.URI),t.attributes["INSTREAM-ID"]&&(r.instreamId=t.attributes["INSTREAM-ID"]),t.attributes.CHARACTERISTICS&&(r.characteristics=t.attributes.CHARACTERISTICS),t.attributes.FORCED&&(r.forced=/yes/i.test(t.attributes.FORCED)),i[t.attributes.NAME]=r}else this.trigger("warn",{message:"ignoring incomplete or missing media group"})},discontinuity:function(){c+=1,s.discontinuity=!0,this.manifest.discontinuityStarts.push(a.length)},"program-date-time":function(){"undefined"==typeof this.manifest.dateTimeString&&(this.manifest.dateTimeString=t.dateTimeString,this.manifest.dateTimeObject=t.dateTimeObject),s.dateTimeString=t.dateTimeString,s.dateTimeObject=t.dateTimeObject},targetduration:function(){!isFinite(t.duration)||t.duration<0?this.trigger("warn",{message:"ignoring invalid target duration: "+t.duration}):this.manifest.targetDuration=t.duration},totalduration:function(){!isFinite(t.duration)||t.duration<0?this.trigger("warn",{message:"ignoring invalid total duration: "+t.duration}):this.manifest.totalDuration=t.duration},start:function(){t.attributes&&!isNaN(t.attributes["TIME-OFFSET"])?this.manifest.start={timeOffset:t.attributes["TIME-OFFSET"],precise:t.attributes.PRECISE}:this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"})},"cue-out":function(){s.cueOut=t.data},"cue-out-cont":function(){s.cueOutCont=t.data},"cue-in":function(){s.cueIn=t.data}}[t.tagType]||function(){}).call(n)},uri:function(){s.uri=t.uri,a.push(s),!this.manifest.targetDuration||"duration"in s||(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),s.duration=this.manifest.targetDuration),u&&(s.key=u),s.timeline=c,o&&(s.map=o),s={}},comment:function(){},custom:function(){t.segment?(s.custom=s.custom||{},s.custom[t.customType]=t.data):(this.manifest.custom=this.manifest.custom||{},this.manifest.custom[t.customType]=t.data)}})[t.type].call(n)}),e}return Ra(i,t),i.prototype.push=function(e){this.lineStream.push(e)},i.prototype.end=function(){this.lineStream.push("\n")},i.prototype.addParser=function(e){this.parseStream.addParser(e)},i}(Ua),Ha=function(e){var t,i=e.attributes,r=e.segments,n={attributes:(t={NAME:i.id,AUDIO:"audio",SUBTITLES:"subs",RESOLUTION:{width:i.width,height:i.height},CODECS:i.codecs,BANDWIDTH:i.bandwidth},t["PROGRAM-ID"]=1,t),uri:"",endList:"static"===(i.type||"static"),timeline:i.periodIndex,resolvedUri:"",targetDuration:i.duration,segments:r,mediaSequence:r.length?r[0].number:1};return i.contentProtection&&(n.contentProtection=i.contentProtection),n},Va="function"==typeof Symbol&&"symbol"===v(Symbol.iterator)?function(e){return"undefined"==typeof e?"undefined":v(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":"undefined"==typeof e?"undefined":v(e)},qa=function(e){return!!e&&"object"===("undefined"==typeof e?"undefined":Va(e))},Wa=function r(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.reduce(function(t,i){return Object.keys(i).forEach(function(e){Array.isArray(t[e])&&Array.isArray(i[e])?t[e]=t[e].concat(i[e]):qa(t[e])&&qa(i[e])?t[e]=r(t[e],i[e]):t[e]=i[e]}),t},{})},za=function(e,t){return/^[a-z]+:/i.test(t)?t:(/\/\//i.test(e)||(e=Ia.buildAbsoluteURL(g.location.href,e)),Ia.buildAbsoluteURL(e,t))},Ga=function(e){var t=e.baseUrl,i=void 0===t?"":t,r=e.source,n=void 0===r?"":r,a=e.range,s=void 0===a?"":a,o={uri:n,resolvedUri:za(i||"",n)};if(s){var u=s.split("-"),l=parseInt(u[0],10),c=parseInt(u[1],10);o.byterange={length:c-l,offset:l}}return o},Xa=function(e,t){for(var i,r,n,a,s,o,u,l,c,h,d,p,f=e.type,m=void 0===f?"static":f,g=e.minimumUpdatePeriod,y=void 0===g?0:g,v=e.media,_=void 0===v?"":v,b=e.sourceDuration,T=e.timescale,S=void 0===T?1:T,k=e.startNumber,C=void 0===k?1:k,E=e.periodIndex,w=[],A=-1,L=0;L<t.length;L++){var P=t[L],O=P.d,I=P.r||0,x=P.t||0;A<0&&(A=x),x&&A<x&&(A=x);var D=void 0;if(I<0){var R=L+1;R===t.length?"dynamic"===m&&0<y&&0<_.indexOf("$Number$")?(r=A,n=O,void 0,a=(i=e).NOW,s=i.clientOffset,o=i.availabilityStartTime,u=i.timescale,l=void 0===u?1:u,c=i.start,h=void 0===c?0:c,d=i.minimumUpdatePeriod,p=(a+s)/1e3+(void 0===d?0:d)-(o+h),D=Math.ceil((p*l-r)/n)):D=(b*S-A)/O:D=(t[R].t-A)/O}else D=I+1;for(var M=C+w.length+D,U=C+w.length;U<M;)w.push({number:U,duration:O/S,time:A,timeline:E}),A+=O,U++}return w},Ya=function(e){return e.reduce(function(e,t){return e.concat(t)},[])},$a=function(e){if(!e.length)return[];for(var t=[],i=0;i<e.length;i++)t.push(e[i]);return t},Ka={static:function(e){var t=e.duration,i=e.timescale,r=void 0===i?1:i,n=e.sourceDuration;return{start:0,end:Math.ceil(n/(t/r))}},dynamic:function(e){var t=e.NOW,i=e.clientOffset,r=e.availabilityStartTime,n=e.timescale,a=void 0===n?1:n,s=e.duration,o=e.start,u=void 0===o?0:o,l=e.minimumUpdatePeriod,c=void 0===l?0:l,h=e.timeShiftBufferDepth,d=void 0===h?1/0:h,p=(t+i)/1e3,f=r+u,m=p+c-f,g=Math.ceil(m*a/s),y=Math.floor((p-f-d)*a/s),v=Math.floor((p-f)*a/s);return{start:Math.max(0,y),end:Math.min(g,v)}}},Qa=function(e){var o,t=e.type,i=void 0===t?"static":t,r=e.duration,n=e.timescale,a=void 0===n?1:n,s=e.sourceDuration,u=Ka[i](e),l=function(e,t){for(var i=[],r=e;r<t;r++)i.push(r);return i}(u.start,u.end).map((o=e,function(e,t){var i=o.duration,r=o.timescale,n=void 0===r?1:r,a=o.periodIndex,s=o.startNumber;return{number:(void 0===s?1:s)+e,duration:i/n,timeline:a,time:t*i}}));if("static"===i){var c=l.length-1;l[c].duration=s-r/a*c}return l},Ja=/\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,Za=function(e,t){return e.replace(Ja,(a=t,function(e,t,i,r){if("$$"===e)return"$";if("undefined"==typeof a[t])return e;var n=""+a[t];return"RepresentationID"===t?n:(r=i?parseInt(r,10):1)<=n.length?n:""+new Array(r-n.length+1).join("0")+n}));var a},es=function(i,e){var t,r,n={RepresentationID:i.id,Bandwidth:i.bandwidth||0},a=i.initialization,s=void 0===a?{sourceURL:"",range:""}:a,o=Ga({baseUrl:i.baseUrl,source:Za(s.sourceURL,n),range:s.range});return(r=e,(t=i).duration||r?t.duration?Qa(t):Xa(t,r):[{number:t.startNumber||1,duration:t.sourceDuration,time:0,timeline:t.periodIndex}]).map(function(e){n.Number=e.number,n.Time=e.time;var t=Za(i.media||"",n);return{uri:t,timeline:e.timeline,duration:e.duration,resolvedUri:za(i.baseUrl||"",t),map:o,number:e.number}})},ts="INVALID_NUMBER_OF_PERIOD",is="DASH_EMPTY_MANIFEST",rs="DASH_INVALID_XML",ns="NO_BASE_URL",as="SEGMENT_TIME_UNSPECIFIED",ss="UNSUPPORTED_UTC_TIMING_SCHEME",os=function(u,e){var t=u.duration,i=u.segmentUrls,r=void 0===i?[]:i;if(!t&&!e||t&&e)throw new Error(as);var n=r.map(function(e){return i=e,r=(t=u).baseUrl,n=t.initialization,s=Ga({baseUrl:r,source:(a=void 0===n?{}:n).sourceURL,range:a.range}),(o=Ga({baseUrl:r,source:i.media,range:i.mediaRange})).map=s,o;var t,i,r,n,a,s,o}),a=void 0;return t&&(a=Qa(u)),e&&(a=Xa(u,e)),a.map(function(e,t){if(n[t]){var i=n[t];return i.timeline=e.timeline,i.duration=e.duration,i.number=e.number,i}}).filter(function(e){return e})},us=function(e){var t=e.baseUrl,i=e.initialization,r=void 0===i?{}:i,n=e.sourceDuration,a=e.timescale,s=void 0===a?1:a,o=e.indexRange,u=void 0===o?"":o,l=e.duration;if(!t)throw new Error(ns);var c=Ga({baseUrl:t,source:r.sourceURL,range:r.range}),h=Ga({baseUrl:t,source:t,range:u});if(h.map=c,l){var d=Qa(e);d.length&&(h.duration=d[0].duration,h.timeline=d[0].timeline)}else n&&(h.duration=n/s,h.timeline=0);return h.number=0,[h]},ls=function(e){var t=e.attributes,i=e.segmentInfo,r=void 0,n=void 0;if(i.template?(n=es,r=Wa(t,i.template)):i.base?(n=us,r=Wa(t,i.base)):i.list&&(n=os,r=Wa(t,i.list)),!n)return{attributes:t};var a=n(r,i.timeline);if(r.duration){var s=r,o=s.duration,u=s.timescale,l=void 0===u?1:u;r.duration=o/l}else a.length?r.duration=a.reduce(function(e,t){return Math.max(e,Math.ceil(t.duration))},0):r.duration=0;return{attributes:r,segments:a}},cs=function(e,t){return $a(e.childNodes).filter(function(e){return e.tagName===t})},hs=function(e){return e.textContent.trim()},ds=function(e){var t=/P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e);if(!t)return 0;var i=t.slice(1),r=i[0],n=i[1],a=i[2],s=i[3],o=i[4],u=i[5];return 31536e3*parseFloat(r||0)+2592e3*parseFloat(n||0)+86400*parseFloat(a||0)+3600*parseFloat(s||0)+60*parseFloat(o||0)+parseFloat(u||0)},ps={mediaPresentationDuration:function(e){return ds(e)},availabilityStartTime:function(e){return/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(t=e)&&(t+="Z"),Date.parse(t)/1e3;var t},minimumUpdatePeriod:function(e){return ds(e)},timeShiftBufferDepth:function(e){return ds(e)},start:function(e){return ds(e)},width:function(e){return parseInt(e,10)},height:function(e){return parseInt(e,10)},bandwidth:function(e){return parseInt(e,10)},startNumber:function(e){return parseInt(e,10)},timescale:function(e){return parseInt(e,10)},duration:function(e){var t=parseInt(e,10);return isNaN(t)?ds(e):t},d:function(e){return parseInt(e,10)},t:function(e){return parseInt(e,10)},r:function(e){return parseInt(e,10)},DEFAULT:function(e){return e}},fs=function(e){return e&&e.attributes?$a(e.attributes).reduce(function(e,t){var i=ps[t.name]||ps.DEFAULT;return e[t.name]=i(t.value),e},{}):{}};var ms,gs,ys={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"},vs=function(e,i){return i.length?Ya(e.map(function(t){return i.map(function(e){return za(t,hs(e))})})):e},_s=function(e){var t=cs(e,"SegmentTemplate")[0],i=cs(e,"SegmentList")[0],r=i&&cs(i,"SegmentURL").map(function(e){return Wa({tag:"SegmentURL"},fs(e))}),n=cs(e,"SegmentBase")[0],a=i||t,s=a&&cs(a,"SegmentTimeline")[0],o=i||n||t,u=o&&cs(o,"Initialization")[0],l=t&&fs(t);l&&u?l.initialization=u&&fs(u):l&&l.initialization&&(l.initialization={sourceURL:l.initialization});var c={template:l,timeline:s&&cs(s,"S").map(function(e){return fs(e)}),list:i&&Wa(fs(i),{segmentUrls:r,initialization:fs(u)}),base:n&&Wa(fs(n),{initialization:fs(u)})};return Object.keys(c).forEach(function(e){c[e]||delete c[e]}),c},bs=function(e){return e.reduce(function(e,t){var i=fs(t),r=ys[i.schemeIdUri];if(r){e[r]={attributes:i};var n=cs(t,"cenc:pssh")[0];if(n){var a=hs(n),s=a&&function(e){for(var t=g.atob(e),i=new Uint8Array(t.length),r=0;r<t.length;r++)i[r]=t.charCodeAt(r);return i}(a);e[r].pssh=s}}return e},{})},Ts=function(p,f,m){return function(e){var t=fs(e),i=vs(f,cs(e,"BaseURL")),r=cs(e,"Role")[0],n={role:fs(r)},a=Wa(p,t,n),s=bs(cs(e,"ContentProtection"));Object.keys(s).length&&(a=Wa(a,{contentProtection:s}));var o,u,l,c=_s(e),h=cs(e,"Representation"),d=Wa(m,c);return Ya(h.map((o=a,u=i,l=d,function(e){var t=cs(e,"BaseURL"),i=vs(u,t),r=Wa(o,fs(e)),n=_s(e);return i.map(function(e){return{segmentInfo:Wa(l,n),attributes:Wa(r,{baseUrl:e})}})})))}},Ss=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=t.manifestUri,r=void 0===i?"":i,n=t.NOW,a=void 0===n?Date.now():n,s=t.clientOffset,o=void 0===s?0:s,u=cs(e,"Period");if(1!==u.length)throw new Error(ts);var l,c,h=fs(e),d=vs([r],cs(e,"BaseURL"));return h.sourceDuration=h.mediaPresentationDuration||0,h.NOW=a,h.clientOffset=o,Ya(u.map((l=h,c=d,function(e,t){var i=vs(c,cs(e,"BaseURL")),r=fs(e),n=Wa(l,r,{periodIndex:t}),a=cs(e,"AdaptationSet"),s=_s(e);return Ya(a.map(Ts(n,i,s)))})))},ks=function(e){if(""===e)throw new Error(is);var t=(new g.DOMParser).parseFromString(e,"application/xml"),i=t&&"MPD"===t.documentElement.tagName?t.documentElement:null;if(!i||i&&0<i.getElementsByTagName("parsererror").length)throw new Error(rs);return i},Cs=function(e,t){return function(e){var t;if(!e.length)return{};var i=e[0].attributes,r=i.sourceDuration,n=i.minimumUpdatePeriod,a=void 0===n?0:n,s=e.filter(function(e){var t=e.attributes;return"video/mp4"===t.mimeType||"video"===t.contentType}).map(Ha),o=e.filter(function(e){var t=e.attributes;return"audio/mp4"===t.mimeType||"audio"===t.contentType}),u=e.filter(function(e){var t=e.attributes;return"text/vtt"===t.mimeType||"text"===t.contentType}),l={allowCache:!0,discontinuityStarts:[],segments:[],endList:!0,mediaGroups:(t={AUDIO:{},VIDEO:{}},t["CLOSED-CAPTIONS"]={},t.SUBTITLES={},t),uri:"",duration:r,playlists:s,minimumUpdatePeriod:1e3*a};return o.length&&(l.mediaGroups.AUDIO.audio=o.reduce(function(e,t){var i,r,n,a,s,o=t.attributes.role&&t.attributes.role.value||"main",u=t.attributes.lang||"",l="main";return u&&(l=t.attributes.lang+" ("+o+")"),e[l]&&e[l].playlists[0].attributes.BANDWIDTH>t.attributes.bandwidth||(e[l]={language:u,autoselect:!0,default:"main"===o,playlists:[(i=t,n=i.attributes,a=i.segments,s={attributes:(r={NAME:n.id,BANDWIDTH:n.bandwidth,CODECS:n.codecs},r["PROGRAM-ID"]=1,r),uri:"",endList:"static"===(n.type||"static"),timeline:n.periodIndex,resolvedUri:"",targetDuration:n.duration,segments:a,mediaSequence:a.length?a[0].number:1},n.contentProtection&&(s.contentProtection=n.contentProtection),s)],uri:""}),e},{})),u.length&&(l.mediaGroups.SUBTITLES.subs=u.reduce(function(e,t){var i,r,n,a,s=t.attributes.lang||"text";return e[s]||(e[s]={language:s,default:!1,autoselect:!1,playlists:[(i=t,n=i.attributes,a=i.segments,"undefined"==typeof a&&(a=[{uri:n.baseUrl,timeline:n.periodIndex,resolvedUri:n.baseUrl||"",duration:n.sourceDuration,number:0}],n.duration=n.sourceDuration),{attributes:(r={NAME:n.id,BANDWIDTH:n.bandwidth},r["PROGRAM-ID"]=1,r),uri:"",endList:"static"===(n.type||"static"),timeline:n.periodIndex,resolvedUri:n.baseUrl||"",targetDuration:n.duration,segments:a,mediaSequence:a.length?a[0].number:1})],uri:""}),e},{})),l}(Ss(ks(e),t).map(ls))},Es=function(e){return function(e){var t=cs(e,"UTCTiming")[0];if(!t)return null;var i=fs(t);switch(i.schemeIdUri){case"urn:mpeg:dash:utc:http-head:2014":case"urn:mpeg:dash:utc:http-head:2012":i.method="HEAD";break;case"urn:mpeg:dash:utc:http-xsdate:2014":case"urn:mpeg:dash:utc:http-iso:2014":case"urn:mpeg:dash:utc:http-xsdate:2012":case"urn:mpeg:dash:utc:http-iso:2012":i.method="GET";break;case"urn:mpeg:dash:utc:direct:2014":case"urn:mpeg:dash:utc:direct:2012":i.method="DIRECT",i.value=Date.parse(i.value);break;case"urn:mpeg:dash:utc:http-ntp:2014":case"urn:mpeg:dash:utc:ntp:2014":case"urn:mpeg:dash:utc:sntp:2014":default:throw new Error(ss)}return i}(ks(e))},ws={toUnsigned:function(e){return e>>>0}},As=ws.toUnsigned,Ls=Object.freeze({default:ws,__moduleExports:ws,toUnsigned:As}),Ps=(Ls&&ws||Ls).toUnsigned;ms=function(e,t){var i,r,n,a,s,o=[];if(!t.length)return null;for(i=0;i<e.byteLength;)r=Ps(e[i]<<24|e[i+1]<<16|e[i+2]<<8|e[i+3]),n=gs(e.subarray(i+4,i+8)),a=1<r?i+r:e.byteLength,n===t[0]&&(1===t.length?o.push(e.subarray(i+8,a)):(s=ms(e.subarray(i+8,a),t.slice(1))).length&&(o=o.concat(s))),i=a;return o};gs=function(e){var t="";return t+=String.fromCharCode(e[0]),t+=String.fromCharCode(e[1]),t+=String.fromCharCode(e[2]),t+=String.fromCharCode(e[3])};var Os=function(e){return ms(e,["moov","trak"]).reduce(function(e,t){var i,r,n,a,s;return(i=ms(t,["tkhd"])[0])?(r=i[0],a=Ps(i[n=0===r?12:20]<<24|i[n+1]<<16|i[n+2]<<8|i[n+3]),(s=ms(t,["mdia","mdhd"])[0])?(n=0===(r=s[0])?12:20,e[a]=Ps(s[n]<<24|s[n+1]<<16|s[n+2]<<8|s[n+3]),e):null):null},{})},Is=function(n,e){var t,i,r;return t=ms(e,["moof","traf"]),i=[].concat.apply([],t.map(function(r){return ms(r,["tfhd"]).map(function(e){var t,i;return t=Ps(e[4]<<24|e[5]<<16|e[6]<<8|e[7]),i=n[t]||9e4,(ms(r,["tfdt"]).map(function(e){var t,i;return t=e[0],i=Ps(e[4]<<24|e[5]<<16|e[6]<<8|e[7]),1===t&&(i*=Math.pow(2,32),i+=Ps(e[8]<<24|e[9]<<16|e[10]<<8|e[11])),i})[0]||1/0)/i})})),r=Math.min.apply(null,i),isFinite(r)?r:0},xs={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},Ds=xs.H264_STREAM_TYPE,Rs=xs.ADTS_STREAM_TYPE,Ms=xs.METADATA_STREAM_TYPE,Us=Object.freeze({default:xs,__moduleExports:xs,H264_STREAM_TYPE:Ds,ADTS_STREAM_TYPE:Rs,METADATA_STREAM_TYPE:Ms}),Ns=function(){this.init=function(){var a={};this.on=function(e,t){a[e]||(a[e]=[]),a[e]=a[e].concat(t)},this.off=function(e,t){var i;return!!a[e]&&(i=a[e].indexOf(t),a[e]=a[e].slice(),a[e].splice(i,1),-1<i)},this.trigger=function(e){var t,i,r,n;if(t=a[e])if(2===arguments.length)for(r=t.length,i=0;i<r;++i)t[i].call(this,arguments[1]);else{for(n=[],i=arguments.length,i=1;i<arguments.length;++i)n.push(arguments[i]);for(r=t.length,i=0;i<r;++i)t[i].apply(this,n)}},this.dispose=function(){a={}}}};Ns.prototype.pipe=function(t){return this.on("data",function(e){t.push(e)}),this.on("done",function(e){t.flush(e)}),t},Ns.prototype.push=function(e){this.trigger("data",e)},Ns.prototype.flush=function(e){this.trigger("done",e)};var Bs=Ns,js=Object.freeze({default:Bs,__moduleExports:Bs}),Fs=function(e,t){var i=1;for(t<e&&(i=-1);4294967296<Math.abs(t-e);)e+=8589934592*i;return e},Hs=function e(t){var i,r;e.prototype.init.call(this),this.type_=t,this.push=function(e){e.type===this.type_&&(void 0===r&&(r=e.dts),e.dts=Fs(e.dts,r),e.pts=Fs(e.pts,r),i=e.dts,this.trigger("data",e))},this.flush=function(){r=i,this.trigger("done")},this.discontinuity=function(){i=r=void 0}};Hs.prototype=new(js&&Bs||js);var Vs={TimestampRolloverStream:Hs,handleRollover:Fs},qs=Vs.TimestampRolloverStream,Ws=Vs.handleRollover,zs=Object.freeze({default:Vs,__moduleExports:Vs,TimestampRolloverStream:qs,handleRollover:Ws}),Gs=Us&&xs||Us,Xs=function(e){var t=31&e[1];return t<<=8,t|=e[2]},Ys=function(e){return!!(64&e[1])},$s=function(e){var t=0;return 1<(48&e[3])>>>4&&(t+=e[4]+1),t},Ks=function(e){switch(e){case 5:return"slice_layer_without_partitioning_rbsp_idr";case 6:return"sei_rbsp";case 7:return"seq_parameter_set_rbsp";case 8:return"pic_parameter_set_rbsp";case 9:return"access_unit_delimiter_rbsp";default:return null}},Qs={parseType:function(e,t){var i=Xs(e);return 0===i?"pat":i===t?"pmt":t?"pes":null},parsePat:function(e){var t=Ys(e),i=4+$s(e);return t&&(i+=e[i]+1),(31&e[i+10])<<8|e[i+11]},parsePmt:function(e){var t={},i=Ys(e),r=4+$s(e);if(i&&(r+=e[r]+1),1&e[r+5]){var n;n=3+((15&e[r+1])<<8|e[r+2])-4;for(var a=12+((15&e[r+10])<<8|e[r+11]);a<n;){var s=r+a;t[(31&e[s+1])<<8|e[s+2]]=e[s],a+=5+((15&e[s+3])<<8|e[s+4])}return t}},parsePayloadUnitStartIndicator:Ys,parsePesType:function(e,t){switch(t[Xs(e)]){case Gs.H264_STREAM_TYPE:return"video";case Gs.ADTS_STREAM_TYPE:return"audio";case Gs.METADATA_STREAM_TYPE:return"timed-metadata";default:return null}},parsePesTime:function(e){if(!Ys(e))return null;var t=4+$s(e);if(t>=e.byteLength)return null;var i,r=null;return 192&(i=e[t+7])&&((r={}).pts=(14&e[t+9])<<27|(255&e[t+10])<<20|(254&e[t+11])<<12|(255&e[t+12])<<5|(254&e[t+13])>>>3,r.pts*=4,r.pts+=(6&e[t+13])>>>1,r.dts=r.pts,64&i&&(r.dts=(14&e[t+14])<<27|(255&e[t+15])<<20|(254&e[t+16])<<12|(255&e[t+17])<<5|(254&e[t+18])>>>3,r.dts*=4,r.dts+=(6&e[t+18])>>>1)),r},videoPacketContainsKeyFrame:function(e){for(var t=4+$s(e),i=e.subarray(t),r=0,n=0,a=!1;n<i.byteLength-3;n++)if(1===i[n+2]){r=n+5;break}for(;r<i.byteLength;)switch(i[r]){case 0:if(0!==i[r-1]){r+=2;break}if(0!==i[r-2]){r++;break}for(n+3!==r-2&&"slice_layer_without_partitioning_rbsp_idr"===Ks(31&i[n+3])&&(a=!0);1!==i[++r]&&r<i.length;);n=r-2,r+=3;break;case 1:if(0!==i[r-1]||0!==i[r-2]){r+=3;break}"slice_layer_without_partitioning_rbsp_idr"===Ks(31&i[n+3])&&(a=!0),n=r-2,r+=3;break;default:r+=3}return i=i.subarray(n),r-=n,n=0,i&&3<i.byteLength&&"slice_layer_without_partitioning_rbsp_idr"===Ks(31&i[n+3])&&(a=!0),a}},Js=Qs.parseType,Zs=Qs.parsePat,eo=Qs.parsePmt,to=Qs.parsePayloadUnitStartIndicator,io=Qs.parsePesType,ro=Qs.parsePesTime,no=Qs.videoPacketContainsKeyFrame,ao=Object.freeze({default:Qs,__moduleExports:Qs,parseType:Js,parsePat:Zs,parsePmt:eo,parsePayloadUnitStartIndicator:to,parsePesType:io,parsePesTime:ro,videoPacketContainsKeyFrame:no}),so=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],oo=function(e){return e[0]<<21|e[1]<<14|e[2]<<7|e[3]},uo={parseId3TagSize:function(e,t){var i=e[t+6]<<21|e[t+7]<<14|e[t+8]<<7|e[t+9];return(16&e[t+5])>>4?i+20:i+10},parseAdtsSize:function(e,t){var i=(224&e[t+5])>>5,r=e[t+4]<<3;return 6144&e[t+3]|r|i},parseType:function(e,t){return e[t]==="I".charCodeAt(0)&&e[t+1]==="D".charCodeAt(0)&&e[t+2]==="3".charCodeAt(0)?"timed-metadata":!0&e[t]&&240==(240&e[t+1])?"audio":null},parseSampleRate:function(e){for(var t=0;t+5<e.length;){if(255===e[t]&&240==(246&e[t+1]))return so[(60&e[t+2])>>>2];t++}return null},parseAacTimestamp:function(e){var t,i,r;t=10,64&e[5]&&(t+=4,t+=oo(e.subarray(10,14)));do{if((i=oo(e.subarray(t+4,t+8)))<1)return null;if("PRIV"===String.fromCharCode(e[t],e[t+1],e[t+2],e[t+3])){r=e.subarray(t+10,t+i+10);for(var n=0;n<r.byteLength;n++)if(0===r[n]){if("com.apple.streaming.transportStreamTimestamp"===unescape(function(e,t,i){var r,n="";for(r=t;r<i;r++)n+="%"+("00"+e[r].toString(16)).slice(-2);return n}(r,0,n))){var a=r.subarray(n+1),s=(1&a[3])<<30|a[4]<<22|a[5]<<14|a[6]<<6|a[7]>>>2;return s*=4,s+=3&a[7]}break}}t+=10,t+=i}while(t<e.byteLength);return null}},lo=uo.parseId3TagSize,co=uo.parseAdtsSize,ho=uo.parseType,po=uo.parseSampleRate,fo=uo.parseAacTimestamp,mo=Object.freeze({default:uo,__moduleExports:uo,parseId3TagSize:lo,parseAdtsSize:co,parseType:ho,parseSampleRate:po,parseAacTimestamp:fo}),go=ao&&Qs||ao,yo=mo&&uo||mo,vo=(zs&&Vs||zs).handleRollover,_o={};_o.ts=go,_o.aac=yo;var bo=188,To=function(e,t,i){for(var r,n,a,s,o=0,u=bo,l=!1;u<e.byteLength;)if(71!==e[o]||71!==e[u])o++,u++;else{switch(r=e.subarray(o,u),_o.ts.parseType(r,t.pid)){case"pes":n=_o.ts.parsePesType(r,t.table),a=_o.ts.parsePayloadUnitStartIndicator(r),"audio"===n&&a&&(s=_o.ts.parsePesTime(r))&&(s.type="audio",i.audio.push(s),l=!0)}if(l)break;o+=bo,u+=bo}for(o=(u=e.byteLength)-bo,l=!1;0<=o;)if(71!==e[o]||71!==e[u])o--,u--;else{switch(r=e.subarray(o,u),_o.ts.parseType(r,t.pid)){case"pes":n=_o.ts.parsePesType(r,t.table),a=_o.ts.parsePayloadUnitStartIndicator(r),"audio"===n&&a&&(s=_o.ts.parsePesTime(r))&&(s.type="audio",i.audio.push(s),l=!0)}if(l)break;o-=bo,u-=bo}},So=function(e,t,i){for(var r,n,a,s,o,u,l,c=0,h=bo,d=!1,p={data:[],size:0};h<e.byteLength;)if(71!==e[c]||71!==e[h])c++,h++;else{switch(r=e.subarray(c,h),_o.ts.parseType(r,t.pid)){case"pes":if(n=_o.ts.parsePesType(r,t.table),a=_o.ts.parsePayloadUnitStartIndicator(r),"video"===n&&(a&&!d&&(s=_o.ts.parsePesTime(r))&&(s.type="video",i.video.push(s),d=!0),!i.firstKeyFrame)){if(a&&0!==p.size){for(o=new Uint8Array(p.size),u=0;p.data.length;)l=p.data.shift(),o.set(l,u),u+=l.byteLength;_o.ts.videoPacketContainsKeyFrame(o)&&(i.firstKeyFrame=_o.ts.parsePesTime(o),i.firstKeyFrame.type="video"),p.size=0}p.data.push(r),p.size+=r.byteLength}}if(d&&i.firstKeyFrame)break;c+=bo,h+=bo}for(c=(h=e.byteLength)-bo,d=!1;0<=c;)if(71!==e[c]||71!==e[h])c--,h--;else{switch(r=e.subarray(c,h),_o.ts.parseType(r,t.pid)){case"pes":n=_o.ts.parsePesType(r,t.table),a=_o.ts.parsePayloadUnitStartIndicator(r),"video"===n&&a&&(s=_o.ts.parsePesTime(r))&&(s.type="video",i.video.push(s),d=!0)}if(d)break;c-=bo,h-=bo}},ko=function(e){var t={pid:null,table:null},i={};for(var r in function(e,t){for(var i,r=0,n=bo;n<e.byteLength;)if(71!==e[r]||71!==e[n])r++,n++;else{switch(i=e.subarray(r,n),_o.ts.parseType(i,t.pid)){case"pat":t.pid||(t.pid=_o.ts.parsePat(i));break;case"pmt":t.table||(t.table=_o.ts.parsePmt(i))}if(t.pid&&t.table)return;r+=bo,n+=bo}}(e,t),t.table){if(t.table.hasOwnProperty(r))switch(t.table[r]){case Gs.H264_STREAM_TYPE:i.video=[],So(e,t,i),0===i.video.length&&delete i.video;break;case Gs.ADTS_STREAM_TYPE:i.audio=[],To(e,t,i),0===i.audio.length&&delete i.audio}}return i},Co=function(e,t){var i,r;return(r=(i=e)[0]==="I".charCodeAt(0)&&i[1]==="D".charCodeAt(0)&&i[2]==="3".charCodeAt(0)?function(e){for(var t,i=!1,r=0,n=null,a=null,s=0,o=0;3<=e.length-o;){switch(_o.aac.parseType(e,o)){case"timed-metadata":if(e.length-o<10){i=!0;break}if((s=_o.aac.parseId3TagSize(e,o))>e.length){i=!0;break}null===a&&(t=e.subarray(o,o+s),a=_o.aac.parseAacTimestamp(t)),o+=s;break;case"audio":if(e.length-o<7){i=!0;break}if((s=_o.aac.parseAdtsSize(e,o))>e.length){i=!0;break}null===n&&(t=e.subarray(o,o+s),n=_o.aac.parseSampleRate(t)),r++,o+=s;break;default:o++}if(i)return null}if(null===n||null===a)return null;var u=9e4/n;return{audio:[{type:"audio",dts:a,pts:a},{type:"audio",dts:a+1024*r*u,pts:a+1024*r*u}]}}(e):ko(e))&&(r.audio||r.video)?(function(e,t){if(e.audio&&e.audio.length){var i=t;"undefined"==typeof i&&(i=e.audio[0].dts),e.audio.forEach(function(e){e.dts=vo(e.dts,i),e.pts=vo(e.pts,i),e.dtsTime=e.dts/9e4,e.ptsTime=e.pts/9e4})}if(e.video&&e.video.length){var r=t;if("undefined"==typeof r&&(r=e.video[0].dts),e.video.forEach(function(e){e.dts=vo(e.dts,r),e.pts=vo(e.pts,r),e.dtsTime=e.dts/9e4,e.ptsTime=e.pts/9e4}),e.firstKeyFrame){var n=e.firstKeyFrame;n.dts=vo(n.dts,r),n.pts=vo(n.pts,r),n.dtsTime=n.dts/9e4,n.ptsTime=n.dts/9e4}}}(r,t),r):null};var Eo=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},wo=function(){function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}}(),Ao=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":v(t))&&"function"!=typeof t?e:t},Lo=function(){var e=[[[],[],[],[],[]],[[],[],[],[],[]]],t=e[0],i=e[1],r=t[4],n=i[4],a=void 0,s=void 0,o=void 0,u=[],l=[],c=void 0,h=void 0,d=void 0,p=void 0,f=void 0;for(a=0;a<256;a++)l[(u[a]=a<<1^283*(a>>7))^a]=a;for(s=o=0;!r[s];s^=c||1,o=l[o]||1)for(d=(d=o^o<<1^o<<2^o<<3^o<<4)>>8^255&d^99,f=16843009*u[h=u[c=u[n[r[s]=d]=s]]]^65537*h^257*c^16843008*s,p=257*u[d]^16843008*d,a=0;a<4;a++)t[a][s]=p=p<<24^p>>>8,i[a][d]=f=f<<24^f>>>8;for(a=0;a<5;a++)t[a]=t[a].slice(0),i[a]=i[a].slice(0);return e},Po=null,Oo=function(){function c(e){Eo(this,c),Po||(Po=Lo()),this._tables=[[Po[0][0].slice(),Po[0][1].slice(),Po[0][2].slice(),Po[0][3].slice(),Po[0][4].slice()],[Po[1][0].slice(),Po[1][1].slice(),Po[1][2].slice(),Po[1][3].slice(),Po[1][4].slice()]];var t=void 0,i=void 0,r=void 0,n=void 0,a=void 0,s=this._tables[0][4],o=this._tables[1],u=e.length,l=1;if(4!==u&&6!==u&&8!==u)throw new Error("Invalid aes key size");for(n=e.slice(0),a=[],this._key=[n,a],t=u;t<4*u+28;t++)r=n[t-1],(t%u==0||8===u&&t%u==4)&&(r=s[r>>>24]<<24^s[r>>16&255]<<16^s[r>>8&255]<<8^s[255&r],t%u==0&&(r=r<<8^r>>>24^l<<24,l=l<<1^283*(l>>7))),n[t]=n[t-u]^r;for(i=0;t;i++,t--)r=n[3&i?t:t-4],a[i]=t<=4||i<4?r:o[0][s[r>>>24]]^o[1][s[r>>16&255]]^o[2][s[r>>8&255]]^o[3][s[255&r]]}return c.prototype.decrypt=function(e,t,i,r,n,a){var s=this._key[1],o=e^s[0],u=r^s[1],l=i^s[2],c=t^s[3],h=void 0,d=void 0,p=void 0,f=s.length/4-2,m=void 0,g=4,y=this._tables[1],v=y[0],_=y[1],b=y[2],T=y[3],S=y[4];for(m=0;m<f;m++)h=v[o>>>24]^_[u>>16&255]^b[l>>8&255]^T[255&c]^s[g],d=v[u>>>24]^_[l>>16&255]^b[c>>8&255]^T[255&o]^s[g+1],p=v[l>>>24]^_[c>>16&255]^b[o>>8&255]^T[255&u]^s[g+2],c=v[c>>>24]^_[o>>16&255]^b[u>>8&255]^T[255&l]^s[g+3],g+=4,o=h,u=d,l=p;for(m=0;m<4;m++)n[(3&-m)+a]=S[o>>>24]<<24^S[u>>16&255]<<16^S[l>>8&255]<<8^S[255&c]^s[g++],h=o,o=u,u=l,l=c,c=h},c}(),Io=function(){function e(){Eo(this,e),this.listeners={}}return e.prototype.on=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.prototype.off=function(e,t){if(!this.listeners[e])return!1;var i=this.listeners[e].indexOf(t);return this.listeners[e].splice(i,1),-1<i},e.prototype.trigger=function(e){var t=this.listeners[e];if(t)if(2===arguments.length)for(var i=t.length,r=0;r<i;++r)t[r].call(this,arguments[1]);else for(var n=Array.prototype.slice.call(arguments,1),a=t.length,s=0;s<a;++s)t[s].apply(this,n)},e.prototype.dispose=function(){this.listeners={}},e.prototype.pipe=function(t){this.on("data",function(e){t.push(e)})},e}(),xo=function(t){function i(){Eo(this,i);var e=Ao(this,t.call(this,Io));return e.jobs=[],e.delay=1,e.timeout_=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":v(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,t),i.prototype.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},i.prototype.push=function(e){this.jobs.push(e),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},i}(Io),Do=function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24},Ro=function(e,t,i){var r=new Int32Array(e.buffer,e.byteOffset,e.byteLength>>2),n=new Oo(Array.prototype.slice.call(t)),a=new Uint8Array(e.byteLength),s=new Int32Array(a.buffer),o=void 0,u=void 0,l=void 0,c=void 0,h=void 0,d=void 0,p=void 0,f=void 0,m=void 0;for(o=i[0],u=i[1],l=i[2],c=i[3],m=0;m<r.length;m+=4)h=Do(r[m]),d=Do(r[m+1]),p=Do(r[m+2]),f=Do(r[m+3]),n.decrypt(h,d,p,f,s,m),s[m]=Do(s[m]^o),s[m+1]=Do(s[m+1]^u),s[m+2]=Do(s[m+2]^l),s[m+3]=Do(s[m+3]^c),o=h,u=d,l=p,c=f;return a},Mo=function(){function u(e,t,i,r){Eo(this,u);var n=u.STEP,a=new Int32Array(e.buffer),s=new Uint8Array(e.byteLength),o=0;for(this.asyncStream_=new xo,this.asyncStream_.push(this.decryptChunk_(a.subarray(o,o+n),t,i,s)),o=n;o<a.length;o+=n)i=new Uint32Array([Do(a[o-4]),Do(a[o-3]),Do(a[o-2]),Do(a[o-1])]),this.asyncStream_.push(this.decryptChunk_(a.subarray(o,o+n),t,i,s));this.asyncStream_.push(function(){var e;r(null,(e=s).subarray(0,e.byteLength-e[e.byteLength-1]))})}return u.prototype.decryptChunk_=function(t,i,r,n){return function(){var e=Ro(t,i,r);n.set(e,t.byteOffset)}},wo(u,null,[{key:"STEP",get:function(){return 32e3}}]),u}(),Uo=function(e,t){return/^[a-z]+:/i.test(t)?t:(/\/\//i.test(e)||(e=Ia.buildAbsoluteURL(g.location.href,e)),Ia.buildAbsoluteURL(e,t))},No=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Bo=function(){function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}}(),jo=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":v(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Fo=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":v(t))&&"function"!=typeof t?e:t},Ho=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],r=!0,n=!1,a=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(i.push(s.value),!t||i.length!==t);r=!0);}catch(e){n=!0,a=e}finally{try{!r&&o.return&&o.return()}finally{if(n)throw a}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},Vo=La.mergeOptions,qo=La.EventTarget,Wo=La.log,zo=function(n,a){["AUDIO","SUBTITLES"].forEach(function(e){for(var t in n.mediaGroups[e])for(var i in n.mediaGroups[e][t]){var r=n.mediaGroups[e][t][i];a(r,e,t,i)}})},Go=function(e,t){var i=Vo(e,{}),r=i.playlists[t.uri];if(!r)return null;if(r.segments&&t.segments&&r.segments.length===t.segments.length&&r.mediaSequence===t.mediaSequence)return null;var n=Vo(r,t);r.segments&&(n.segments=function(e,t,i){var r=t.slice();i=i||0;for(var n=Math.min(e.length,t.length+i),a=i;a<n;a++)r[a-i]=Vo(e[a],r[a-i]);return r}(r.segments,t.segments,t.mediaSequence-r.mediaSequence)),n.segments.forEach(function(e){var t,i;t=e,i=n.resolvedUri,t.resolvedUri||(t.resolvedUri=Uo(i,t.uri)),t.key&&!t.key.resolvedUri&&(t.key.resolvedUri=Uo(i,t.key.uri)),t.map&&!t.map.resolvedUri&&(t.map.resolvedUri=Uo(i,t.map.uri))});for(var a=0;a<i.playlists.length;a++)i.playlists[a].uri===t.uri&&(i.playlists[a]=n);return i.playlists[t.uri]=n,i},Xo=function(e){for(var t=e.playlists.length;t--;){var i=e.playlists[t];(e.playlists[i.uri]=i).resolvedUri=Uo(e.uri,i.uri),i.id=t,i.attributes||(i.attributes={},Wo.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))}},Yo=function(t){zo(t,function(e){e.uri&&(e.resolvedUri=Uo(t.uri,e.uri))})},$o=function(e,t){var i=e.segments[e.segments.length-1];return t&&i&&i.duration?1e3*i.duration:500*(e.targetDuration||10)},Ko=function(e){function n(e,t,i){No(this,n);var r=Fo(this,(n.__proto__||Object.getPrototypeOf(n)).call(this));if(r.srcUrl=e,r.hls_=t,r.withCredentials=i,!r.srcUrl)throw new Error("A non-empty playlist URL is required");return r.state="HAVE_NOTHING",r.on("mediaupdatetimeout",function(){"HAVE_METADATA"===r.state&&(r.state="HAVE_CURRENT_METADATA",r.request=r.hls_.xhr({uri:Uo(r.master.uri,r.media().uri),withCredentials:r.withCredentials},function(e,t){if(r.request)return e?r.playlistRequestError(r.request,r.media().uri,"HAVE_METADATA"):void r.haveMetadata(r.request,r.media().uri)}))}),r}return jo(n,qo),Bo(n,[{key:"playlistRequestError",value:function(e,t,i){this.request=null,i&&(this.state=i),this.error={playlist:this.master.playlists[t],status:e.status,message:"HLS playlist request error at URL: "+t,responseText:e.responseText,code:500<=e.status?4:2},this.trigger("error")}},{key:"haveMetadata",value:function(e,t){var i=this;this.request=null,this.state="HAVE_METADATA";var r=new Fa;r.push(e.responseText),r.end(),r.manifest.uri=t,r.manifest.attributes=r.manifest.attributes||{};var n=Go(this.master,r.manifest);this.targetDuration=r.manifest.targetDuration,n?(this.master=n,this.media_=this.master.playlists[r.manifest.uri]):this.trigger("playlistunchanged"),this.media().endList||(g.clearTimeout(this.mediaUpdateTimeout),this.mediaUpdateTimeout=g.setTimeout(function(){i.trigger("mediaupdatetimeout")},$o(this.media(),!!n))),this.trigger("loadedplaylist")}},{key:"dispose",value:function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout)}},{key:"stopRequest",value:function(){if(this.request){var e=this.request;this.request=null,e.onreadystatechange=null,e.abort()}}},{key:"media",value:function(i){var r=this;if(!i)return this.media_;if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);var n=this.state;if("string"==typeof i){if(!this.master.playlists[i])throw new Error("Unknown playlist URI: "+i);i=this.master.playlists[i]}var e=!this.media_||i.uri!==this.media_.uri;if(this.master.playlists[i.uri].endList)return this.request&&(this.request.onreadystatechange=null,this.request.abort(),this.request=null),this.state="HAVE_METADATA",this.media_=i,void(e&&(this.trigger("mediachanging"),this.trigger("mediachange")));if(e){if(this.state="SWITCHING_MEDIA",this.request){if(Uo(this.master.uri,i.uri)===this.request.url)return;this.request.onreadystatechange=null,this.request.abort(),this.request=null}this.media_&&this.trigger("mediachanging"),this.request=this.hls_.xhr({uri:Uo(this.master.uri,i.uri),withCredentials:this.withCredentials},function(e,t){if(r.request){if(e)return r.playlistRequestError(r.request,i.uri,n);r.haveMetadata(t,i.uri),"HAVE_MASTER"===n?r.trigger("loadedmetadata"):r.trigger("mediachange")}})}}},{key:"pause",value:function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout),"HAVE_NOTHING"===this.state&&(this.started=!1),"SWITCHING_MEDIA"===this.state?this.media_?this.state="HAVE_METADATA":this.state="HAVE_MASTER":"HAVE_CURRENT_METADATA"===this.state&&(this.state="HAVE_METADATA")}},{key:"load",value:function(e){var t=this;g.clearTimeout(this.mediaUpdateTimeout);var i=this.media();if(e){var r=i?i.targetDuration/2*1e3:5e3;this.mediaUpdateTimeout=g.setTimeout(function(){return t.load()},r)}else this.started?i&&!i.endList?this.trigger("mediaupdatetimeout"):this.trigger("loadedplaylist"):this.start()}},{key:"start",value:function(){var r=this;this.started=!0,this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(e,t){if(r.request){if(r.request=null,e)return r.error={status:t.status,message:"HLS playlist request error at URL: "+r.srcUrl,responseText:t.responseText,code:2},"HAVE_NOTHING"===r.state&&(r.started=!1),r.trigger("error");var i=new Fa;return i.push(t.responseText),i.end(),r.state="HAVE_MASTER",i.manifest.uri=r.srcUrl,i.manifest.playlists?(r.master=i.manifest,Xo(r.master),Yo(r.master),r.trigger("loadedplaylist"),void(r.request||r.media(i.manifest.playlists[0]))):(r.master={mediaGroups:{AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},uri:g.location.href,playlists:[{uri:r.srcUrl,id:0}]},r.master.playlists[r.srcUrl]=r.master.playlists[0],r.master.playlists[0].resolvedUri=r.srcUrl,r.master.playlists[0].attributes=r.master.playlists[0].attributes||{},r.haveMetadata(t,r.srcUrl),r.trigger("loadedmetadata"))}})}}]),n}(),Qo=La.createTimeRange,Jo=function(e,t,i){var r,n;return"undefined"==typeof t&&(t=e.mediaSequence+e.segments.length),t<e.mediaSequence?0:(r=function(e,t){var i=0,r=t-e.mediaSequence,n=e.segments[r];if(n){if("undefined"!=typeof n.start)return{result:n.start,precise:!0};if("undefined"!=typeof n.end)return{result:n.end-n.duration,precise:!0}}for(;r--;){if("undefined"!=typeof(n=e.segments[r]).end)return{result:i+n.end,precise:!0};if(i+=n.duration,"undefined"!=typeof n.start)return{result:i+n.start,precise:!0}}return{result:i,precise:!1}}(e,t)).precise?r.result:(n=function(e,t){for(var i=0,r=void 0,n=t-e.mediaSequence;n<e.segments.length;n++){if("undefined"!=typeof(r=e.segments[n]).start)return{result:r.start-i,precise:!0};if(i+=r.duration,"undefined"!=typeof r.end)return{result:r.end-i,precise:!0}}return{result:-1,precise:!1}}(e,t)).precise?n.result:r.result+i},Zo=function(e,t,i){if(!e)return 0;if("number"!=typeof i&&(i=0),"undefined"==typeof t){if(e.totalDuration)return e.totalDuration;if(!e.endList)return g.Infinity}return Jo(e,t,i)},eu=function(e,t,i){var r=0;if(i<t){var n=[i,t];t=n[0],i=n[1]}if(t<0){for(var a=t;a<Math.min(0,i);a++)r+=e.targetDuration;t=0}for(var s=t;s<i;s++)r+=e.segments[s].duration;return r},tu=function(e){if(!e.segments.length)return 0;for(var t=e.segments.length-1,i=e.segments[t].duration||e.targetDuration,r=i+2*e.targetDuration;t--&&!(r<=(i+=e.segments[t].duration)););return Math.max(0,t)},iu=function(e,t,i){if(!e||!e.segments)return null;if(e.endList)return Zo(e);if(null===t)return null;t=t||0;var r=i?tu(e):e.segments.length;return Jo(e,e.mediaSequence+r,t)},ru=function(e){return e-Math.floor(e)==0},nu=function(e,t){if(ru(t))return t+.1*e;for(var i=t.toString().split(".")[1].length,r=1;r<=i;r++){var n=Math.pow(10,r),a=t*n;if(ru(a)||r===i)return(a+e)/n}},au=nu.bind(null,1),su=nu.bind(null,-1),ou=function(e){return e.excludeUntil&&e.excludeUntil>Date.now()},uu=function(e){return e.excludeUntil&&e.excludeUntil===1/0},lu=function(e){var t=ou(e);return!e.disabled&&!t},cu=function(e,t){return t.attributes&&t.attributes[e]},hu=function(e,t){if(1===e.playlists.length)return!0;var i=t.attributes.BANDWIDTH||Number.MAX_VALUE;return 0===e.playlists.filter(function(e){return!!lu(e)&&(e.attributes.BANDWIDTH||0)<i}).length},du={duration:Zo,seekable:function(e,t){var i=t||0,r=iu(e,t,!0);return null===r?Qo():Qo(i,r)},safeLiveIndex:tu,getMediaInfoForTime:function(e,t,i,r){var n=void 0,a=void 0,s=e.segments.length,o=t-r;if(o<0){if(0<i)for(n=i-1;0<=n;n--)if(a=e.segments[n],0<(o+=su(a.duration)))return{mediaIndex:n,startTime:r-eu(e,i,n)};return{mediaIndex:0,startTime:t}}if(i<0){for(n=i;n<0;n++)if((o-=e.targetDuration)<0)return{mediaIndex:0,startTime:t};i=0}for(n=i;n<s;n++)if(a=e.segments[n],(o-=au(a.duration))<0)return{mediaIndex:n,startTime:r+eu(e,i,n)};return{mediaIndex:s-1,startTime:t}},isEnabled:lu,isDisabled:function(e){return e.disabled},isBlacklisted:ou,isIncompatible:uu,playlistEnd:iu,isAes:function(e){for(var t=0;t<e.segments.length;t++)if(e.segments[t].key)return!0;return!1},isFmp4:function(e){for(var t=0;t<e.segments.length;t++)if(e.segments[t].map)return!0;return!1},hasAttribute:cu,estimateSegmentRequestTime:function(e,t,i){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0;return cu("BANDWIDTH",i)?(e*i.attributes.BANDWIDTH-8*r)/t:NaN},isLowestEnabledRendition:hu},pu=La.xhr,fu=La.mergeOptions,mu=function(){return function e(t,r){t=fu({timeout:45e3},t);var i=e.beforeRequest||La.Hls.xhr.beforeRequest;if(i&&"function"==typeof i){var n=i(t);n&&(t=n)}var a=pu(t,function(e,t){var i=a.response;!e&&i&&(a.responseTime=Date.now(),a.roundTripTime=a.responseTime-a.requestTime,a.bytesReceived=i.byteLength||i.length,a.bandwidth||(a.bandwidth=Math.floor(a.bytesReceived/a.roundTripTime*8*1e3))),t.headers&&(a.responseHeaders=t.headers),e&&"ETIMEDOUT"===e.code&&(a.timedout=!0),e||a.aborted||200===t.statusCode||206===t.statusCode||0===t.statusCode||(e=new Error("XHR Failed with a response of: "+(a&&(i||a.responseText)))),r(e,a)}),s=a.abort;return a.abort=function(){return a.aborted=!0,s.apply(a,arguments)},a.uri=t.uri,a.requestTime=Date.now(),a}},gu=function(e,t){var i=e.toString(16);return"00".substring(0,2-i.length)+i+(t%2?" ":"")},yu=function(e){return 32<=e&&e<126?String.fromCharCode(e):"."},vu=function(i){var r={};return Object.keys(i).forEach(function(e){var t=i[e];ArrayBuffer.isView(t)?r[e]={bytes:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength}:r[e]=t}),r},_u=function(e){var t=e.byterange||{length:1/0,offset:0};return[t.length,t.offset,e.resolvedUri].join(",")},bu=function(e){for(var t=Array.prototype.slice.call(e),i="",r=0;r<t.length/16;r++)i+=t.slice(16*r,16*r+16).map(gu).join("")+" "+t.slice(16*r,16*r+16).map(yu).join("")+"\n";return i},Tu=Object.freeze({createTransferableMessage:vu,initSegmentId:_u,hexDump:bu,tagDump:function(e){var t=e.bytes;return bu(t)},textRanges:function(e){var t,i,r="",n=void 0;for(n=0;n<e.length;n++)r+=(i=n,(t=e).start(i)+"-"+t.end(i)+" ");return r}}),Su=1/30,ku=function(e,t){var i=[],r=void 0;if(e&&e.length)for(r=0;r<e.length;r++)t(e.start(r),e.end(r))&&i.push([e.start(r),e.end(r)]);return La.createTimeRanges(i)},Cu=function(e,i){return ku(e,function(e,t){return e-Su<=i&&i<=t+Su})},Eu=function(e,t){return ku(e,function(e){return t<=e-Su})},wu=function(e){var t=[];if(!e||!e.length)return"";for(var i=0;i<e.length;i++)t.push(e.start(i)+" => "+e.end(i));return t.join(", ")},Au=function(e){for(var t=[],i=0;i<e.length;i++)t.push({start:e.start(i),end:e.end(i)});return t},Lu=function(e,t,i){var r=void 0,n=void 0;if(i&&i.cues)for(r=i.cues.length;r--;)(n=i.cues[r]).startTime<=t&&n.endTime>=e&&i.removeCue(n)},Pu=function(e){return isNaN(e)||Math.abs(e)===1/0?Number.MAX_VALUE:e},Ou=function(e,t,i){var n=g.WebKitDataCue||g.VTTCue;if(t&&t.forEach(function(e){var t=e.stream;this.inbandTextTracks_[t].addCue(new n(e.startTime+this.timestampOffset,e.endTime+this.timestampOffset,e.text))},e),i){var a=Pu(e.mediaSource_.duration);if(i.forEach(function(e){var r=e.cueTime+this.timestampOffset;e.frames.forEach(function(e){var t,i=new n(r,r,e.value||e.url||e.data||"");i.frame=e,i.value=e,t=i,Object.defineProperties(t.frame,{id:{get:function(){return La.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."),t.value.key}},value:{get:function(){return La.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."),t.value.data}},privateData:{get:function(){return La.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."),t.value.data}}}),this.metadataTrack_.addCue(i)},this)},e),e.metadataTrack_&&e.metadataTrack_.cues&&e.metadataTrack_.cues.length){for(var r=e.metadataTrack_.cues,s=[],o=0;o<r.length;o++)r[o]&&s.push(r[o]);var u=s.reduce(function(e,t){var i=e[t.startTime]||[];return i.push(t),e[t.startTime]=i,e},{}),l=Object.keys(u).sort(function(e,t){return Number(e)-Number(t)});l.forEach(function(e,t){var i=u[e],r=Number(l[t+1])||a;i.forEach(function(e){e.endTime=r})})}}},Iu="undefined"!=typeof window?window:{},xu="undefined"==typeof Symbol?"__target":Symbol(),Du="application/javascript",Ru=Iu.BlobBuilder||Iu.WebKitBlobBuilder||Iu.MozBlobBuilder||Iu.MSBlobBuilder,Mu=Iu.URL||Iu.webkitURL||Mu&&Mu.msURL,Uu=Iu.Worker;function Nu(n,a){return function(e){var t=this;if(!a)return new Uu(n);if(Uu&&!e){var i=Hu(a.toString().replace(/^function.+?{/,"").slice(0,-1));return this[xu]=new Uu(i),function(e,t){if(!e||!t)return;var i=e.terminate;e.objURL=t,e.terminate=function(){e.objURL&&Mu.revokeObjectURL(e.objURL),i.call(e)}}(this[xu],i),this[xu]}var r={postMessage:function(e){t.onmessage&&setTimeout(function(){t.onmessage({data:e,target:r})})}};a.call(r),this.postMessage=function(e){setTimeout(function(){r.onmessage({data:e,target:t})})},this.isThisThread=!0}}if(Uu){var Bu,ju=Hu("self.onmessage = function () {}"),Fu=new Uint8Array(1);try{(Bu=new Uu(ju)).postMessage(Fu,[Fu.buffer])}catch(e){Uu=null}finally{Mu.revokeObjectURL(ju),Bu&&Bu.terminate()}}function Hu(t){try{return Mu.createObjectURL(new Blob([t],{type:Du}))}catch(e){var i=new Ru;return i.append(t),Mu.createObjectURL(i.getBlob(type))}}var Vu=new Nu("./transmuxer-worker.worker.js",function(it,e){var rt=this;!function(){var o,t,i,n,a,r,e,s,u,l,c,h,d,p,f,m,g,y,v,_,b,T,S,k,C,E,w,A,L,P,O,I,x,D,R,M,U,N,B,j,F="undefined"!=typeof it?it:"undefined"!=typeof global?global:"undefined"!=typeof rt?rt:{},H="undefined"!=typeof it?it:"undefined"!=typeof F?F:"undefined"!=typeof rt?rt:{},V=Math.pow(2,32)-1;!function(){var e;if(T={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],smhd:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],styp:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[]},"undefined"!=typeof Uint8Array){for(e in T)T.hasOwnProperty(e)&&(T[e]=[e.charCodeAt(0),e.charCodeAt(1),e.charCodeAt(2),e.charCodeAt(3)]);S=new Uint8Array(["i".charCodeAt(0),"s".charCodeAt(0),"o".charCodeAt(0),"m".charCodeAt(0)]),C=new Uint8Array(["a".charCodeAt(0),"v".charCodeAt(0),"c".charCodeAt(0),"1".charCodeAt(0)]),k=new Uint8Array([0,0,0,1]),E=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),w=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),A={video:E,audio:w},O=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),P=new Uint8Array([0,0,0,0,0,0,0,0]),I=new Uint8Array([0,0,0,0,0,0,0,0]),x=I,D=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),R=I,L=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])}}(),o=function(e){var t,i,r=[],n=0;for(t=1;t<arguments.length;t++)r.push(arguments[t]);for(t=r.length;t--;)n+=r[t].byteLength;for(i=new Uint8Array(n+8),new DataView(i.buffer,i.byteOffset,i.byteLength).setUint32(0,i.byteLength),i.set(e,4),t=0,n=8;t<r.length;t++)i.set(r[t],n),n+=r[t].byteLength;return i},t=function(){return o(T.dinf,o(T.dref,O))},i=function(e){return o(T.esds,new Uint8Array([0,0,0,0,3,25,0,0,0,4,17,64,21,0,6,0,0,0,218,192,0,0,218,192,5,2,e.audioobjecttype<<3|e.samplingfrequencyindex>>>1,e.samplingfrequencyindex<<7|e.channelcount<<3,6,1,2]))},f=function(e){return o(T.hdlr,A[e])},p=function(e){var t=new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,0,1,95,144,e.duration>>>24&255,e.duration>>>16&255,e.duration>>>8&255,255&e.duration,85,196,0,0]);return e.samplerate&&(t[12]=e.samplerate>>>24&255,t[13]=e.samplerate>>>16&255,t[14]=e.samplerate>>>8&255,t[15]=255&e.samplerate),o(T.mdhd,t)},d=function(e){return o(T.mdia,p(e),f(e.type),r(e))},a=function(e){return o(T.mfhd,new Uint8Array([0,0,0,0,(4278190080&e)>>24,(16711680&e)>>16,(65280&e)>>8,255&e]))},r=function(e){return o(T.minf,"video"===e.type?o(T.vmhd,L):o(T.smhd,P),t(),g(e))},e=function(e,t){for(var i=[],r=t.length;r--;)i[r]=v(t[r]);return o.apply(null,[T.moof,a(e)].concat(i))},s=function(e){for(var t=e.length,i=[];t--;)i[t]=c(e[t]);return o.apply(null,[T.moov,l(4294967295)].concat(i).concat(u(e)))},u=function(e){for(var t=e.length,i=[];t--;)i[t]=_(e[t]);return o.apply(null,[T.mvex].concat(i))},l=function(e){var t=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,0,1,95,144,(4278190080&e)>>24,(16711680&e)>>16,(65280&e)>>8,255&e,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return o(T.mvhd,t)},m=function(e){var t,i,r=e.samples||[],n=new Uint8Array(4+r.length);for(i=0;i<r.length;i++)t=r[i].flags,n[i+4]=t.dependsOn<<4|t.isDependedOn<<2|t.hasRedundancy;return o(T.sdtp,n)},g=function(e){return o(T.stbl,y(e),o(T.stts,R),o(T.stsc,x),o(T.stsz,D),o(T.stco,I))},y=function(e){return o(T.stsd,new Uint8Array([0,0,0,0,0,0,0,1]),"video"===e.type?M(e):U(e))},M=function(e){var t,i=e.sps||[],r=e.pps||[],n=[],a=[];for(t=0;t<i.length;t++)n.push((65280&i[t].byteLength)>>>8),n.push(255&i[t].byteLength),n=n.concat(Array.prototype.slice.call(i[t]));for(t=0;t<r.length;t++)a.push((65280&r[t].byteLength)>>>8),a.push(255&r[t].byteLength),a=a.concat(Array.prototype.slice.call(r[t]));return o(T.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,(65280&e.width)>>8,255&e.width,(65280&e.height)>>8,255&e.height,0,72,0,0,0,72,0,0,0,0,0,0,0,1,19,118,105,100,101,111,106,115,45,99,111,110,116,114,105,98,45,104,108,115,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o(T.avcC,new Uint8Array([1,e.profileIdc,e.profileCompatibility,e.levelIdc,255].concat([i.length]).concat(n).concat([r.length]).concat(a))),o(T.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))},U=function(e){return o(T.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,(65280&e.channelcount)>>8,255&e.channelcount,(65280&e.samplesize)>>8,255&e.samplesize,0,0,0,0,(65280&e.samplerate)>>8,255&e.samplerate,0,0]),i(e))},h=function(e){var t=new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,(4278190080&e.id)>>24,(16711680&e.id)>>16,(65280&e.id)>>8,255&e.id,0,0,0,0,(4278190080&e.duration)>>24,(16711680&e.duration)>>16,(65280&e.duration)>>8,255&e.duration,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,(65280&e.width)>>8,255&e.width,0,0,(65280&e.height)>>8,255&e.height,0,0]);return o(T.tkhd,t)},v=function(e){var t,i,r,n,a,s;return t=o(T.tfhd,new Uint8Array([0,0,0,58,(4278190080&e.id)>>24,(16711680&e.id)>>16,(65280&e.id)>>8,255&e.id,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0])),a=Math.floor(e.baseMediaDecodeTime/(V+1)),s=Math.floor(e.baseMediaDecodeTime%(V+1)),i=o(T.tfdt,new Uint8Array([1,0,0,0,a>>>24&255,a>>>16&255,a>>>8&255,255&a,s>>>24&255,s>>>16&255,s>>>8&255,255&s])),92,"audio"===e.type?(r=b(e,92),o(T.traf,t,i,r)):(n=m(e),r=b(e,n.length+92),o(T.traf,t,i,r,n))},c=function(e){return e.duration=e.duration||4294967295,o(T.trak,h(e),d(e))},_=function(e){var t=new Uint8Array([0,0,0,0,(4278190080&e.id)>>24,(16711680&e.id)>>16,(65280&e.id)>>8,255&e.id,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]);return"video"!==e.type&&(t[t.length-1]=0),o(T.trex,t)},j=function(e,t){var i=0,r=0,n=0,a=0;return e.length&&(void 0!==e[0].duration&&(i=1),void 0!==e[0].size&&(r=2),void 0!==e[0].flags&&(n=4),void 0!==e[0].compositionTimeOffset&&(a=8)),[0,0,i|r|n|a,1,(4278190080&e.length)>>>24,(16711680&e.length)>>>16,(65280&e.length)>>>8,255&e.length,(4278190080&t)>>>24,(16711680&t)>>>16,(65280&t)>>>8,255&t]},B=function(e,t){var i,r,n,a;for(t+=20+16*(r=e.samples||[]).length,i=j(r,t),a=0;a<r.length;a++)n=r[a],i=i.concat([(4278190080&n.duration)>>>24,(16711680&n.duration)>>>16,(65280&n.duration)>>>8,255&n.duration,(4278190080&n.size)>>>24,(16711680&n.size)>>>16,(65280&n.size)>>>8,255&n.size,n.flags.isLeading<<2|n.flags.dependsOn,n.flags.isDependedOn<<6|n.flags.hasRedundancy<<4|n.flags.paddingValue<<1|n.flags.isNonSyncSample,61440&n.flags.degradationPriority,15&n.flags.degradationPriority,(4278190080&n.compositionTimeOffset)>>>24,(16711680&n.compositionTimeOffset)>>>16,(65280&n.compositionTimeOffset)>>>8,255&n.compositionTimeOffset]);return o(T.trun,new Uint8Array(i))},N=function(e,t){var i,r,n,a;for(t+=20+8*(r=e.samples||[]).length,i=j(r,t),a=0;a<r.length;a++)n=r[a],i=i.concat([(4278190080&n.duration)>>>24,(16711680&n.duration)>>>16,(65280&n.duration)>>>8,255&n.duration,(4278190080&n.size)>>>24,(16711680&n.size)>>>16,(65280&n.size)>>>8,255&n.size]);return o(T.trun,new Uint8Array(i))},b=function(e,t){return"audio"===e.type?N(e,t):B(e,t)};var q={ftyp:n=function(){return o(T.ftyp,S,k,S,C)},mdat:function(e){return o(T.mdat,e)},moof:e,moov:s,initSegment:function(e){var t,i=n(),r=s(e);return(t=new Uint8Array(i.byteLength+r.byteLength)).set(i),t.set(r,i.byteLength),t}},W=function(){this.init=function(){var a={};this.on=function(e,t){a[e]||(a[e]=[]),a[e]=a[e].concat(t)},this.off=function(e,t){var i;return!!a[e]&&(i=a[e].indexOf(t),a[e]=a[e].slice(),a[e].splice(i,1),-1<i)},this.trigger=function(e){var t,i,r,n;if(t=a[e])if(2===arguments.length)for(r=t.length,i=0;i<r;++i)t[i].call(this,arguments[1]);else{for(n=[],i=arguments.length,i=1;i<arguments.length;++i)n.push(arguments[i]);for(r=t.length,i=0;i<r;++i)t[i].apply(this,n)}},this.dispose=function(){a={}}}};W.prototype.pipe=function(t){return this.on("data",function(e){t.push(e)}),this.on("done",function(e){t.flush(e)}),t},W.prototype.push=function(e){this.trigger("data",e)},W.prototype.flush=function(e){this.trigger("done",e)};var z=W,G=function e(){e.prototype.init.call(this),this.captionPackets_=[],this.ccStreams_=[new Q(0,0),new Q(0,1),new Q(1,0),new Q(1,1)],this.reset(),this.ccStreams_.forEach(function(e){e.on("data",this.trigger.bind(this,"data")),e.on("done",this.trigger.bind(this,"done"))},this)};(G.prototype=new z).push=function(e){var t,i,r;if("sei_rbsp"===e.nalUnitType&&(4===(t=function(e){for(var t=0,i={payloadType:-1,payloadSize:0},r=0,n=0;t<e.byteLength&&128!==e[t];){for(;255===e[t];)r+=255,t++;for(r+=e[t++];255===e[t];)n+=255,t++;if(n+=e[t++],!i.payload&&4===r){i.payloadType=r,i.payloadSize=n,i.payload=e.subarray(t,t+n);break}t+=n,n=r=0}return i}(e.escapedRBSP)).payloadType&&(i=181!==(r=t).payload[0]?null:49!=(r.payload[1]<<8|r.payload[2])?null:"GA94"!==String.fromCharCode(r.payload[3],r.payload[4],r.payload[5],r.payload[6])?null:3!==r.payload[7]?null:r.payload.subarray(8,r.payload.length-1))))if(e.dts<this.latestDts_)this.ignoreNextEqualDts_=!0;else{if(e.dts===this.latestDts_&&this.ignoreNextEqualDts_)return this.numSameDts_--,void(this.numSameDts_||(this.ignoreNextEqualDts_=!1));this.captionPackets_=this.captionPackets_.concat(function(e,t){var i,r,n,a,s=[];if(!(64&t[0]))return s;for(r=31&t[0],i=0;i<r;i++)a={type:3&t[2+(n=3*i)],pts:e},4&t[n+2]&&(a.ccData=t[n+3]<<8|t[n+4],s.push(a));return s}(e.pts,i)),this.latestDts_!==e.dts&&(this.numSameDts_=0),this.numSameDts_++,this.latestDts_=e.dts}},G.prototype.flush=function(){this.captionPackets_.length?(this.captionPackets_.forEach(function(e,t){e.presortIndex=t}),this.captionPackets_.sort(function(e,t){return e.pts===t.pts?e.presortIndex-t.presortIndex:e.pts-t.pts}),this.captionPackets_.forEach(function(e){e.type<2&&this.dispatchCea608Packet(e)},this),this.captionPackets_.length=0,this.ccStreams_.forEach(function(e){e.flush()},this)):this.ccStreams_.forEach(function(e){e.flush()},this)},G.prototype.reset=function(){this.latestDts_=null,this.ignoreNextEqualDts_=!1,this.numSameDts_=0,this.activeCea608Channel_=[null,null],this.ccStreams_.forEach(function(e){e.reset()})},G.prototype.dispatchCea608Packet=function(e){this.setsChannel1Active(e)?this.activeCea608Channel_[e.type]=0:this.setsChannel2Active(e)&&(this.activeCea608Channel_[e.type]=1),null!==this.activeCea608Channel_[e.type]&&this.ccStreams_[(e.type<<1)+this.activeCea608Channel_[e.type]].push(e)},G.prototype.setsChannel1Active=function(e){return 4096==(30720&e.ccData)},G.prototype.setsChannel2Active=function(e){return 6144==(30720&e.ccData)};var X={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,304:174,305:176,306:189,307:191,308:8482,309:162,310:163,311:9834,312:224,313:160,314:232,315:226,316:234,317:238,318:244,319:251,544:193,545:201,546:211,547:218,548:220,549:252,550:8216,551:161,552:42,553:39,554:8212,555:169,556:8480,557:8226,558:8220,559:8221,560:192,561:194,562:199,563:200,564:202,565:203,566:235,567:206,568:207,569:239,570:212,571:217,572:249,573:219,574:171,575:187,800:195,801:227,802:205,803:204,804:236,805:210,806:242,807:213,808:245,809:123,810:125,811:92,812:94,813:95,814:124,815:126,816:196,817:228,818:214,819:246,820:223,821:165,822:164,823:9474,824:197,825:229,826:216,827:248,828:9484,829:9488,830:9492,831:9496},Y=function(e){return null===e?"":(e=X[e]||e,String.fromCharCode(e))},$=[4352,4384,4608,4640,5376,5408,5632,5664,5888,5920,4096,4864,4896,5120,5152],K=function(){for(var e=[],t=15;t--;)e.push("");return e},Q=function e(t,i){e.prototype.init.call(this),this.field_=t||0,this.dataChannel_=i||0,this.name_="CC"+(1+(this.field_<<1|this.dataChannel_)),this.setConstants(),this.reset(),this.push=function(e){var t,i,r,n,a;if((t=32639&e.ccData)!==this.lastControlCode_){if(4096==(61440&t)?this.lastControlCode_=t:t!==this.PADDING_&&(this.lastControlCode_=null),r=t>>>8,n=255&t,t!==this.PADDING_)if(t===this.RESUME_CAPTION_LOADING_)this.mode_="popOn";else if(t===this.END_OF_CAPTION_)this.clearFormatting(e.pts),this.flushDisplayed(e.pts),i=this.displayed_,this.displayed_=this.nonDisplayed_,this.nonDisplayed_=i,this.startPts_=e.pts;else if(t===this.ROLL_UP_2_ROWS_)this.topRow_=13,this.mode_="rollUp";else if(t===this.ROLL_UP_3_ROWS_)this.topRow_=12,this.mode_="rollUp";else if(t===this.ROLL_UP_4_ROWS_)this.topRow_=11,this.mode_="rollUp";else if(t===this.CARRIAGE_RETURN_)this.clearFormatting(e.pts),this.flushDisplayed(e.pts),this.shiftRowsUp_(),this.startPts_=e.pts;else if(t===this.BACKSPACE_)"popOn"===this.mode_?this.nonDisplayed_[14]=this.nonDisplayed_[14].slice(0,-1):this.displayed_[14]=this.displayed_[14].slice(0,-1);else if(t===this.ERASE_DISPLAYED_MEMORY_)this.flushDisplayed(e.pts),this.displayed_=K();else if(t===this.ERASE_NON_DISPLAYED_MEMORY_)this.nonDisplayed_=K();else if(t===this.RESUME_DIRECT_CAPTIONING_)this.mode_="paintOn";else if(this.isSpecialCharacter(r,n))a=Y((r=(3&r)<<8)|n),this[this.mode_](e.pts,a),this.column_++;else if(this.isExtCharacter(r,n))"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0,-1):this.displayed_[14]=this.displayed_[14].slice(0,-1),a=Y((r=(3&r)<<8)|n),this[this.mode_](e.pts,a),this.column_++;else if(this.isMidRowCode(r,n))this.clearFormatting(e.pts),this[this.mode_](e.pts," "),this.column_++,14==(14&n)&&this.addFormatting(e.pts,["i"]),1==(1&n)&&this.addFormatting(e.pts,["u"]);else if(this.isOffsetControlCode(r,n))this.column_+=3&n;else if(this.isPAC(r,n)){var s=$.indexOf(7968&t);s!==this.row_&&(this.clearFormatting(e.pts),this.row_=s),1&n&&-1===this.formatting_.indexOf("u")&&this.addFormatting(e.pts,["u"]),16==(16&t)&&(this.column_=4*((14&t)>>1)),this.isColorPAC(n)&&14==(14&n)&&this.addFormatting(e.pts,["i"])}else this.isNormalChar(r)&&(0===n&&(n=null),a=Y(r),a+=Y(n),this[this.mode_](e.pts,a),this.column_+=a.length)}else this.lastControlCode_=null}};Q.prototype=new z,Q.prototype.flushDisplayed=function(e){var t=this.displayed_.map(function(e){return e.trim()}).join("\n").replace(/^\n+|\n+$/g,"");t.length&&this.trigger("data",{startPts:this.startPts_,endPts:e,text:t,stream:this.name_})},Q.prototype.reset=function(){this.mode_="popOn",this.topRow_=0,this.startPts_=0,this.displayed_=K(),this.nonDisplayed_=K(),this.lastControlCode_=null,this.column_=0,this.row_=14,this.formatting_=[]},Q.prototype.setConstants=function(){0===this.dataChannel_?(this.BASE_=16,this.EXT_=17,this.CONTROL_=(20|this.field_)<<8,this.OFFSET_=23):1===this.dataChannel_&&(this.BASE_=24,this.EXT_=25,this.CONTROL_=(28|this.field_)<<8,this.OFFSET_=31),this.PADDING_=0,this.RESUME_CAPTION_LOADING_=32|this.CONTROL_,this.END_OF_CAPTION_=47|this.CONTROL_,this.ROLL_UP_2_ROWS_=37|this.CONTROL_,this.ROLL_UP_3_ROWS_=38|this.CONTROL_,this.ROLL_UP_4_ROWS_=39|this.CONTROL_,this.CARRIAGE_RETURN_=45|this.CONTROL_,this.RESUME_DIRECT_CAPTIONING_=41|this.CONTROL_,this.BACKSPACE_=33|this.CONTROL_,this.ERASE_DISPLAYED_MEMORY_=44|this.CONTROL_,this.ERASE_NON_DISPLAYED_MEMORY_=46|this.CONTROL_},Q.prototype.isSpecialCharacter=function(e,t){return e===this.EXT_&&48<=t&&t<=63},Q.prototype.isExtCharacter=function(e,t){return(e===this.EXT_+1||e===this.EXT_+2)&&32<=t&&t<=63},Q.prototype.isMidRowCode=function(e,t){return e===this.EXT_&&32<=t&&t<=47},Q.prototype.isOffsetControlCode=function(e,t){return e===this.OFFSET_&&33<=t&&t<=35},Q.prototype.isPAC=function(e,t){return e>=this.BASE_&&e<this.BASE_+8&&64<=t&&t<=127},Q.prototype.isColorPAC=function(e){return 64<=e&&e<=79||96<=e&&e<=127},Q.prototype.isNormalChar=function(e){return 32<=e&&e<=127},Q.prototype.addFormatting=function(e,t){this.formatting_=this.formatting_.concat(t);var i=t.reduce(function(e,t){return e+"<"+t+">"},"");this[this.mode_](e,i)},Q.prototype.clearFormatting=function(e){if(this.formatting_.length){var t=this.formatting_.reverse().reduce(function(e,t){return e+"</"+t+">"},"");this.formatting_=[],this[this.mode_](e,t)}},Q.prototype.popOn=function(e,t){var i=this.nonDisplayed_[this.row_];i+=t,this.nonDisplayed_[this.row_]=i},Q.prototype.rollUp=function(e,t){var i=this.displayed_[14];i+=t,this.displayed_[14]=i},Q.prototype.shiftRowsUp_=function(){var e;for(e=0;e<this.topRow_;e++)this.displayed_[e]="";for(e=this.topRow_;e<14;e++)this.displayed_[e]=this.displayed_[e+1];this.displayed_[14]=""},Q.prototype.paintOn=function(){};var J={CaptionStream:G,Cea608Stream:Q},Z={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},ee=function(e,t){var i=1;for(t<e&&(i=-1);4294967296<Math.abs(t-e);)e+=8589934592*i;return e},te=function e(t){var i,r;e.prototype.init.call(this),this.type_=t,this.push=function(e){e.type===this.type_&&(void 0===r&&(r=e.dts),e.dts=ee(e.dts,r),e.pts=ee(e.pts,r),i=e.dts,this.trigger("data",e))},this.flush=function(){r=i,this.trigger("done")},this.discontinuity=function(){i=r=void 0}};te.prototype=new z;var ie,re=te,ne=function(e,t,i){var r,n="";for(r=t;r<i;r++)n+="%"+("00"+e[r].toString(16)).slice(-2);return n},ae=function(e,t,i){return decodeURIComponent(ne(e,t,i))},se=function(e){return e[0]<<21|e[1]<<14|e[2]<<7|e[3]},oe={TXXX:function(e){var t;if(3===e.data[0]){for(t=1;t<e.data.length;t++)if(0===e.data[t]){e.description=ae(e.data,1,t),e.value=ae(e.data,t+1,e.data.length).replace(/\0*$/,"");break}e.data=e.value}},WXXX:function(e){var t;if(3===e.data[0])for(t=1;t<e.data.length;t++)if(0===e.data[t]){e.description=ae(e.data,1,t),e.url=ae(e.data,t+1,e.data.length);break}},PRIV:function(e){var t,i;for(t=0;t<e.data.length;t++)if(0===e.data[t]){e.owner=(i=e.data,unescape(ne(i,0,t)));break}e.privateData=e.data.subarray(t+1),e.data=e.privateData}};(ie=function(e){var t,u={debug:!(!e||!e.debug),descriptor:e&&e.descriptor},l=0,c=[],h=0;if(ie.prototype.init.call(this),this.dispatchType=Z.METADATA_STREAM_TYPE.toString(16),u.descriptor)for(t=0;t<u.descriptor.length;t++)this.dispatchType+=("00"+u.descriptor[t].toString(16)).slice(-2);this.push=function(e){var t,i,r,n,a;if("timed-metadata"===e.type)if(e.dataAlignmentIndicator&&(h=0,c.length=0),0===c.length&&(e.data.length<10||e.data[0]!=="I".charCodeAt(0)||e.data[1]!=="D".charCodeAt(0)||e.data[2]!=="3".charCodeAt(0)))u.debug;else if(c.push(e),h+=e.data.byteLength,1===c.length&&(l=se(e.data.subarray(6,10)),l+=10),!(h<l)){for(t={data:new Uint8Array(l),frames:[],pts:c[0].pts,dts:c[0].dts},a=0;a<l;)t.data.set(c[0].data.subarray(0,l-a),a),a+=c[0].data.byteLength,h-=c[0].data.byteLength,c.shift();i=10,64&t.data[5]&&(i+=4,i+=se(t.data.subarray(10,14)),l-=se(t.data.subarray(16,20)));do{if((r=se(t.data.subarray(i+4,i+8)))<1)return;if((n={id:String.fromCharCode(t.data[i],t.data[i+1],t.data[i+2],t.data[i+3]),data:t.data.subarray(i+10,i+r+10)}).key=n.id,oe[n.id]&&(oe[n.id](n),"com.apple.streaming.transportStreamTimestamp"===n.owner)){var s=n.data,o=(1&s[3])<<30|s[4]<<22|s[5]<<14|s[6]<<6|s[7]>>>2;o*=4,o+=3&s[7],n.timeStamp=o,void 0===t.pts&&void 0===t.dts&&(t.pts=n.timeStamp,t.dts=n.timeStamp),this.trigger("timestamp",n)}t.frames.push(n),i+=10,i+=r}while(i<l);this.trigger("data",t)}}}).prototype=new z;var ue,le,ce,he=ie,de=re;(ue=function(){var n=new Uint8Array(188),a=0;ue.prototype.init.call(this),this.push=function(e){var t,i=0,r=188;for(a?((t=new Uint8Array(e.byteLength+a)).set(n.subarray(0,a)),t.set(e,a),a=0):t=e;r<t.byteLength;)71!==t[i]||71!==t[r]?(i++,r++):(this.trigger("data",t.subarray(i,r)),i+=188,r+=188);i<t.byteLength&&(n.set(t.subarray(i),0),a=t.byteLength-i)},this.flush=function(){188===a&&71===n[0]&&(this.trigger("data",n),a=0),this.trigger("done")}}).prototype=new z,(le=function(){var r,n,a,s;le.prototype.init.call(this),(s=this).packetsWaitingForPmt=[],this.programMapTable=void 0,r=function(e,t){var i=0;t.payloadUnitStartIndicator&&(i+=e[i]+1),"pat"===t.type?n(e.subarray(i),t):a(e.subarray(i),t)},n=function(e,t){t.section_number=e[7],t.last_section_number=e[8],s.pmtPid=(31&e[10])<<8|e[11],t.pmtPid=s.pmtPid},a=function(e,t){var i,r;if(1&e[5]){for(s.programMapTable={video:null,audio:null,"timed-metadata":{}},i=3+((15&e[1])<<8|e[2])-4,r=12+((15&e[10])<<8|e[11]);r<i;){var n=e[r],a=(31&e[r+1])<<8|e[r+2];n===Z.H264_STREAM_TYPE&&null===s.programMapTable.video?s.programMapTable.video=a:n===Z.ADTS_STREAM_TYPE&&null===s.programMapTable.audio?s.programMapTable.audio=a:n===Z.METADATA_STREAM_TYPE&&(s.programMapTable["timed-metadata"][a]=n),r+=5+((15&e[r+3])<<8|e[r+4])}t.programMapTable=s.programMapTable}},this.push=function(e){var t={},i=4;if(t.payloadUnitStartIndicator=!!(64&e[1]),t.pid=31&e[1],t.pid<<=8,t.pid|=e[2],1<(48&e[3])>>>4&&(i+=e[i]+1),0===t.pid)t.type="pat",r(e.subarray(i),t),this.trigger("data",t);else if(t.pid===this.pmtPid)for(t.type="pmt",r(e.subarray(i),t),this.trigger("data",t);this.packetsWaitingForPmt.length;)this.processPes_.apply(this,this.packetsWaitingForPmt.shift());else void 0===this.programMapTable?this.packetsWaitingForPmt.push([e,i,t]):this.processPes_(e,i,t)},this.processPes_=function(e,t,i){i.pid===this.programMapTable.video?i.streamType=Z.H264_STREAM_TYPE:i.pid===this.programMapTable.audio?i.streamType=Z.ADTS_STREAM_TYPE:i.streamType=this.programMapTable["timed-metadata"][i.pid],i.type="pes",i.data=e.subarray(t),this.trigger("data",i)}}).prototype=new z,le.STREAM_TYPES={h264:27,adts:15},(ce=function(){var d=this,r={data:[],size:0},n={data:[],size:0},a={data:[],size:0},s=function(e,t,i){var r,n,a=new Uint8Array(e.size),s={type:t},o=0,u=0;if(e.data.length&&!(e.size<9)){for(s.trackId=e.data[0].pid,o=0;o<e.data.length;o++)n=e.data[o],a.set(n.data,u),u+=n.data.byteLength;var l,c,h;l=a,(c=s).packetLength=6+(l[4]<<8|l[5]),c.dataAlignmentIndicator=0!=(4&l[6]),192&(h=l[7])&&(c.pts=(14&l[9])<<27|(255&l[10])<<20|(254&l[11])<<12|(255&l[12])<<5|(254&l[13])>>>3,c.pts*=4,c.pts+=(6&l[13])>>>1,c.dts=c.pts,64&h&&(c.dts=(14&l[14])<<27|(255&l[15])<<20|(254&l[16])<<12|(255&l[17])<<5|(254&l[18])>>>3,c.dts*=4,c.dts+=(6&l[18])>>>1)),c.data=l.subarray(9+l[8]),r="video"===t||s.packetLength<=e.size,(i||r)&&(e.size=0,e.data.length=0),r&&d.trigger("data",s)}};ce.prototype.init.call(this),this.push=function(i){({pat:function(){},pes:function(){var e,t;switch(i.streamType){case Z.H264_STREAM_TYPE:case Z.H264_STREAM_TYPE:e=r,t="video";break;case Z.ADTS_STREAM_TYPE:e=n,t="audio";break;case Z.METADATA_STREAM_TYPE:e=a,t="timed-metadata";break;default:return}i.payloadUnitStartIndicator&&s(e,t,!0),e.data.push(i),e.size+=i.data.byteLength},pmt:function(){var e={type:"metadata",tracks:[]},t=i.programMapTable;null!==t.video&&e.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+t.video,codec:"avc",type:"video"}),null!==t.audio&&e.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+t.audio,codec:"adts",type:"audio"}),d.trigger("data",e)}})[i.type]()},this.flush=function(){s(r,"video"),s(n,"audio"),s(a,"timed-metadata"),this.trigger("done")}}).prototype=new z;var pe={PAT_PID:0,MP2T_PACKET_LENGTH:188,TransportPacketStream:ue,TransportParseStream:le,ElementaryStream:ce,TimestampRolloverStream:de,CaptionStream:J.CaptionStream,Cea608Stream:J.Cea608Stream,MetadataStream:he};for(var fe in Z)Z.hasOwnProperty(fe)&&(pe[fe]=Z[fe]);var me,ge=pe,ye=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];(me=function(){var l;me.prototype.init.call(this),this.push=function(e){var t,i,r,n,a,s,o=0,u=0;if("audio"===e.type)for(l?(n=l,(l=new Uint8Array(n.byteLength+e.data.byteLength)).set(n),l.set(e.data,n.byteLength)):l=e.data;o+5<l.length;)if(255===l[o]&&240==(246&l[o+1])){if(i=2*(1&~l[o+1]),t=(3&l[o+3])<<11|l[o+4]<<3|(224&l[o+5])>>5,s=9e4*(a=1024*(1+(3&l[o+6])))/ye[(60&l[o+2])>>>2],r=o+t,l.byteLength<r)return;if(this.trigger("data",{pts:e.pts+u*s,dts:e.dts+u*s,sampleCount:a,audioobjecttype:1+(l[o+2]>>>6&3),channelcount:(1&l[o+2])<<2|(192&l[o+3])>>>6,samplerate:ye[(60&l[o+2])>>>2],samplingfrequencyindex:(60&l[o+2])>>>2,samplesize:16,data:l.subarray(o+7+i,r)}),l.byteLength===r)return void(l=void 0);u++,l=l.subarray(r)}else o++},this.flush=function(){this.trigger("done")}}).prototype=new z;var ve,_e,be,Te=me,Se=function(r){var n=r.byteLength,a=0,s=0;this.length=function(){return 8*n},this.bitsAvailable=function(){return 8*n+s},this.loadWord=function(){var e=r.byteLength-n,t=new Uint8Array(4),i=Math.min(4,n);if(0===i)throw new Error("no bytes available");t.set(r.subarray(e,e+i)),a=new DataView(t.buffer).getUint32(0),s=8*i,n-=i},this.skipBits=function(e){var t;e<s||(e-=s,e-=8*(t=Math.floor(e/8)),n-=t,this.loadWord()),a<<=e,s-=e},this.readBits=function(e){var t=Math.min(s,e),i=a>>>32-t;return 0<(s-=t)?a<<=t:0<n&&this.loadWord(),0<(t=e-t)?i<<t|this.readBits(t):i},this.skipLeadingZeros=function(){var e;for(e=0;e<s;++e)if(0!=(a&2147483648>>>e))return a<<=e,s-=e,e;return this.loadWord(),e+this.skipLeadingZeros()},this.skipUnsignedExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.skipExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.readUnsignedExpGolomb=function(){var e=this.skipLeadingZeros();return this.readBits(e+1)-1},this.readExpGolomb=function(){var e=this.readUnsignedExpGolomb();return 1&e?1+e>>>1:-1*(e>>>1)},this.readBoolean=function(){return 1===this.readBits(1)},this.readUnsignedByte=function(){return this.readBits(8)},this.loadWord()};(_e=function(){var i,r,n=0;_e.prototype.init.call(this),this.push=function(e){var t;for(r?((t=new Uint8Array(r.byteLength+e.data.byteLength)).set(r),t.set(e.data,r.byteLength),r=t):r=e.data;n<r.byteLength-3;n++)if(1===r[n+2]){i=n+5;break}for(;i<r.byteLength;)switch(r[i]){case 0:if(0!==r[i-1]){i+=2;break}if(0!==r[i-2]){i++;break}for(n+3!==i-2&&this.trigger("data",r.subarray(n+3,i-2));1!==r[++i]&&i<r.length;);n=i-2,i+=3;break;case 1:if(0!==r[i-1]||0!==r[i-2]){i+=3;break}this.trigger("data",r.subarray(n+3,i-2)),n=i-2,i+=3;break;default:i+=3}r=r.subarray(n),i-=n,n=0},this.flush=function(){r&&3<r.byteLength&&this.trigger("data",r.subarray(n+3)),r=null,n=0,this.trigger("done")}}).prototype=new z,be={100:!0,110:!0,122:!0,244:!0,44:!0,83:!0,86:!0,118:!0,128:!0,138:!0,139:!0,134:!0},(ve=function(){var i,r,n,a,s,o,_,t=new _e;ve.prototype.init.call(this),(i=this).push=function(e){"video"===e.type&&(r=e.trackId,n=e.pts,a=e.dts,t.push(e))},t.on("data",function(e){var t={trackId:r,pts:n,dts:a,data:e};switch(31&e[0]){case 5:t.nalUnitType="slice_layer_without_partitioning_rbsp_idr";break;case 6:t.nalUnitType="sei_rbsp",t.escapedRBSP=s(e.subarray(1));break;case 7:t.nalUnitType="seq_parameter_set_rbsp",t.escapedRBSP=s(e.subarray(1)),t.config=o(t.escapedRBSP);break;case 8:t.nalUnitType="pic_parameter_set_rbsp";break;case 9:t.nalUnitType="access_unit_delimiter_rbsp"}i.trigger("data",t)}),t.on("done",function(){i.trigger("done")}),this.flush=function(){t.flush()},_=function(e,t){var i,r=8,n=8;for(i=0;i<e;i++)0!==n&&(n=(r+t.readExpGolomb()+256)%256),r=0===n?r:n},s=function(e){for(var t,i,r=e.byteLength,n=[],a=1;a<r-2;)0===e[a]&&0===e[a+1]&&3===e[a+2]?(n.push(a+2),a+=2):a++;if(0===n.length)return e;t=r-n.length,i=new Uint8Array(t);var s=0;for(a=0;a<t;s++,a++)s===n[0]&&(s++,n.shift()),i[a]=e[s];return i},o=function(e){var t,i,r,n,a,s,o,u,l,c,h,d,p,f=0,m=0,g=0,y=0,v=1;if(i=(t=new Se(e)).readUnsignedByte(),n=t.readUnsignedByte(),r=t.readUnsignedByte(),t.skipUnsignedExpGolomb(),be[i]&&(3===(a=t.readUnsignedExpGolomb())&&t.skipBits(1),t.skipUnsignedExpGolomb(),t.skipUnsignedExpGolomb(),t.skipBits(1),t.readBoolean()))for(h=3!==a?8:12,p=0;p<h;p++)t.readBoolean()&&_(p<6?16:64,t);if(t.skipUnsignedExpGolomb(),0===(s=t.readUnsignedExpGolomb()))t.readUnsignedExpGolomb();else if(1===s)for(t.skipBits(1),t.skipExpGolomb(),t.skipExpGolomb(),o=t.readUnsignedExpGolomb(),p=0;p<o;p++)t.skipExpGolomb();if(t.skipUnsignedExpGolomb(),t.skipBits(1),u=t.readUnsignedExpGolomb(),l=t.readUnsignedExpGolomb(),0===(c=t.readBits(1))&&t.skipBits(1),t.skipBits(1),t.readBoolean()&&(f=t.readUnsignedExpGolomb(),m=t.readUnsignedExpGolomb(),g=t.readUnsignedExpGolomb(),y=t.readUnsignedExpGolomb()),t.readBoolean()&&t.readBoolean()){switch(t.readUnsignedByte()){case 1:d=[1,1];break;case 2:d=[12,11];break;case 3:d=[10,11];break;case 4:d=[16,11];break;case 5:d=[40,33];break;case 6:d=[24,11];break;case 7:d=[20,11];break;case 8:d=[32,11];break;case 9:d=[80,33];break;case 10:d=[18,11];break;case 11:d=[15,11];break;case 12:d=[64,33];break;case 13:d=[160,99];break;case 14:d=[4,3];break;case 15:d=[3,2];break;case 16:d=[2,1];break;case 255:d=[t.readUnsignedByte()<<8|t.readUnsignedByte(),t.readUnsignedByte()<<8|t.readUnsignedByte()]}d&&(v=d[0]/d[1])}return{profileIdc:i,levelIdc:r,profileCompatibility:n,width:Math.ceil((16*(u+1)-2*f-2*m)*v),height:(2-c)*(l+1)*16-2*g-2*y}}}).prototype=new z;var ke,Ce={H264Stream:ve,NalByteStream:_e};(ke=function(){var o=new Uint8Array,u=0;ke.prototype.init.call(this),this.setTimestamp=function(e){u=e},this.parseId3TagSize=function(e,t){var i=e[t+6]<<21|e[t+7]<<14|e[t+8]<<7|e[t+9];return(16&e[t+5])>>4?i+20:i+10},this.parseAdtsSize=function(e,t){var i=(224&e[t+5])>>5,r=e[t+4]<<3;return 6144&e[t+3]|r|i},this.push=function(e){var t,i,r,n,a=0,s=0;for(o.length?(n=o.length,(o=new Uint8Array(e.byteLength+n)).set(o.subarray(0,n)),o.set(e,n)):o=e;3<=o.length-s;)if(o[s]!=="I".charCodeAt(0)||o[s+1]!=="D".charCodeAt(0)||o[s+2]!=="3".charCodeAt(0))if(!0&o[s]&&240==(240&o[s+1])){if(o.length-s<7)break;if((a=this.parseAdtsSize(o,s))>o.length)break;r={type:"audio",data:o.subarray(s,s+a),pts:u,dts:u},this.trigger("data",r),s+=a}else s++;else{if(o.length-s<10)break;if((a=this.parseId3TagSize(o,s))>o.length)break;i={type:"timed-metadata",data:o.subarray(s,s+a)},this.trigger("data",i),s+=a}t=o.length-s,o=0<t?o.subarray(s):new Uint8Array}}).prototype=new z;var Ee,we,Ae,Le,Pe,Oe,Ie,xe,De,Re,Me,Ue,Ne,Be,je,Fe=ke,He=[33,16,5,32,164,27],Ve=[33,65,108,84,1,2,4,8,168,2,4,8,17,191,252],qe=function(e){for(var t=[];e--;)t.push(0);return t},We={96000:[He,[227,64],qe(154),[56]],88200:[He,[231],qe(170),[56]],64000:[He,[248,192],qe(240),[56]],48000:[He,[255,192],qe(268),[55,148,128],qe(54),[112]],44100:[He,[255,192],qe(268),[55,163,128],qe(84),[112]],32000:[He,[255,192],qe(268),[55,234],qe(226),[112]],24000:[He,[255,192],qe(268),[55,255,128],qe(268),[111,112],qe(126),[224]],16000:[He,[255,192],qe(268),[55,255,128],qe(268),[111,255],qe(269),[223,108],qe(195),[1,192]],12000:[Ve,qe(268),[3,127,248],qe(268),[6,255,240],qe(268),[13,255,224],qe(268),[27,253,128],qe(259),[56]],11025:[Ve,qe(268),[3,127,248],qe(268),[6,255,240],qe(268),[13,255,224],qe(268),[27,255,192],qe(268),[55,175,128],qe(108),[112]],8000:[Ve,qe(268),[3,121,16],qe(47),[7]]},ze=(Ee=We,Object.keys(Ee).reduce(function(e,t){return e[t]=new Uint8Array(Ee[t].reduce(function(e,t){return e.concat(t)},[])),e},{})),Ge=(we=function(e){return 9e4*e},Ae=function(e,t){return e*t},Le=function(e){return e/9e4},Pe=function(e,t){return e/t},function(e,t){return we(Pe(e,t))}),Xe=function(e,t){return Ae(Le(e),t)},Ye=Ce.H264Stream,$e=["audioobjecttype","channelcount","samplerate","samplingfrequencyindex","samplesize"],Ke=["width","height","profileIdc","levelIdc","profileCompatibility"];Re=function(e){return e[0]==="I".charCodeAt(0)&&e[1]==="D".charCodeAt(0)&&e[2]==="3".charCodeAt(0)},Be=function(e,t){var i;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0},je=function(e){var t,i=0;for(t=0;t<e.length;t++)i+=e[t].data.byteLength;return i},(Ie=function(n,a){var s=[],o=0,t=0,l=0,c=1/0;a=a||{},Ie.prototype.init.call(this),this.push=function(t){Me(n,t),n&&$e.forEach(function(e){n[e]=t[e]}),s.push(t)},this.setEarliestDts=function(e){t=e-n.timelineStartInfo.baseMediaDecodeTime},this.setVideoBaseMediaDecodeTime=function(e){c=e},this.setAudioAppendStart=function(e){l=e},this.flush=function(){var e,t,i,r;0!==s.length&&(e=this.trimAdtsFramesByEarliestDts_(s),n.baseMediaDecodeTime=Ne(n,a.keepOriginalTimestamps),this.prefixWithSilence_(n,e),n.samples=this.generateSampleTable_(e),i=q.mdat(this.concatenateFrameData_(e)),s=[],t=q.moof(o,[n]),r=new Uint8Array(t.byteLength+i.byteLength),o++,r.set(t),r.set(i,t.byteLength),Ue(n),this.trigger("data",{track:n,boxes:r})),this.trigger("done","AudioSegmentStream")},this.prefixWithSilence_=function(e,t){var i,r,n,a,s=0,o=0,u=0;if(t.length&&(i=Ge(e.baseMediaDecodeTime,e.samplerate),r=Math.ceil(9e4/(e.samplerate/1024)),l&&c&&(s=i-Math.max(l,c),u=(o=Math.floor(s/r))*r),!(o<1||45e3<u))){for((n=ze[e.samplerate])||(n=t[0].data),a=0;a<o;a++)t.splice(a,0,{data:n});e.baseMediaDecodeTime-=Math.floor(Xe(u,e.samplerate))}},this.trimAdtsFramesByEarliestDts_=function(e){return n.minSegmentDts>=t?e:(n.minSegmentDts=1/0,e.filter(function(e){return e.dts>=t&&(n.minSegmentDts=Math.min(n.minSegmentDts,e.dts),n.minSegmentPts=n.minSegmentDts,!0)}))},this.generateSampleTable_=function(e){var t,i,r=[];for(t=0;t<e.length;t++)i=e[t],r.push({size:i.data.byteLength,duration:1024});return r},this.concatenateFrameData_=function(e){var t,i,r=0,n=new Uint8Array(je(e));for(t=0;t<e.length;t++)i=e[t],n.set(i.data,r),r+=i.data.byteLength;return n}}).prototype=new z,(Oe=function(o,u){var t,i,l=0,c=[],h=[];u=u||{},Oe.prototype.init.call(this),delete o.minPTS,this.gopCache_=[],this.push=function(e){Me(o,e),"seq_parameter_set_rbsp"!==e.nalUnitType||t||(t=e.config,o.sps=[e.data],Ke.forEach(function(e){o[e]=t[e]},this)),"pic_parameter_set_rbsp"!==e.nalUnitType||i||(i=e.data,o.pps=[e.data]),c.push(e)},this.flush=function(){for(var e,t,i,r,n,a;c.length&&"access_unit_delimiter_rbsp"!==c[0].nalUnitType;)c.shift();if(0===c.length)return this.resetStream_(),void this.trigger("done","VideoSegmentStream");if(e=this.groupNalsIntoFrames_(c),(i=this.groupFramesIntoGops_(e))[0][0].keyFrame||((t=this.getGopForFusion_(c[0],o))?(i.unshift(t),i.byteLength+=t.byteLength,i.nalCount+=t.nalCount,i.pts=t.pts,i.dts=t.dts,i.duration+=t.duration):i=this.extendFirstKeyFrame_(i)),h.length){var s;if(!(s=u.alignGopsAtEnd?this.alignGopsAtEnd_(i):this.alignGopsAtStart_(i)))return this.gopCache_.unshift({gop:i.pop(),pps:o.pps,sps:o.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),c=[],this.resetStream_(),void this.trigger("done","VideoSegmentStream");Ue(o),i=s}Me(o,i),o.samples=this.generateSampleTable_(i),n=q.mdat(this.concatenateNalData_(i)),o.baseMediaDecodeTime=Ne(o,u.keepOriginalTimestamps),this.trigger("processedGopsInfo",i.map(function(e){return{pts:e.pts,dts:e.dts,byteLength:e.byteLength}})),this.gopCache_.unshift({gop:i.pop(),pps:o.pps,sps:o.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),c=[],this.trigger("baseMediaDecodeTime",o.baseMediaDecodeTime),this.trigger("timelineStartInfo",o.timelineStartInfo),r=q.moof(l,[o]),a=new Uint8Array(r.byteLength+n.byteLength),l++,a.set(r),a.set(n,r.byteLength),this.trigger("data",{track:o,boxes:a}),this.resetStream_(),this.trigger("done","VideoSegmentStream")},this.resetStream_=function(){Ue(o),i=t=void 0},this.getGopForFusion_=function(e){var t,i,r,n,a,s=1/0;for(a=0;a<this.gopCache_.length;a++)r=(n=this.gopCache_[a]).gop,o.pps&&Be(o.pps[0],n.pps[0])&&o.sps&&Be(o.sps[0],n.sps[0])&&(r.dts<o.timelineStartInfo.dts||-1e4<=(t=e.dts-r.dts-r.duration)&&t<=45e3&&(!i||t<s)&&(i=n,s=t));return i?i.gop:null},this.extendFirstKeyFrame_=function(e){var t;return!e[0][0].keyFrame&&1<e.length&&(t=e.shift(),e.byteLength-=t.byteLength,e.nalCount-=t.nalCount,e[0][0].dts=t.dts,e[0][0].pts=t.pts,e[0][0].duration+=t.duration),e},this.groupNalsIntoFrames_=function(e){var t,i,r=[],n=[];for(t=r.byteLength=0;t<e.length;t++)"access_unit_delimiter_rbsp"===(i=e[t]).nalUnitType?(r.length&&(r.duration=i.dts-r.dts,n.push(r)),(r=[i]).byteLength=i.data.byteLength,r.pts=i.pts,r.dts=i.dts):("slice_layer_without_partitioning_rbsp_idr"===i.nalUnitType&&(r.keyFrame=!0),r.duration=i.dts-r.dts,r.byteLength+=i.data.byteLength,r.push(i));return n.length&&(!r.duration||r.duration<=0)&&(r.duration=n[n.length-1].duration),n.push(r),n},this.groupFramesIntoGops_=function(e){var t,i,r=[],n=[];for(r.byteLength=0,r.nalCount=0,r.duration=0,r.pts=e[0].pts,r.dts=e[0].dts,n.byteLength=0,n.nalCount=0,n.duration=0,n.pts=e[0].pts,n.dts=e[0].dts,t=0;t<e.length;t++)(i=e[t]).keyFrame?(r.length&&(n.push(r),n.byteLength+=r.byteLength,n.nalCount+=r.nalCount,n.duration+=r.duration),(r=[i]).nalCount=i.length,r.byteLength=i.byteLength,r.pts=i.pts,r.dts=i.dts,r.duration=i.duration):(r.duration+=i.duration,r.nalCount+=i.length,r.byteLength+=i.byteLength,r.push(i));return n.length&&r.duration<=0&&(r.duration=n[n.length-1].duration),n.byteLength+=r.byteLength,n.nalCount+=r.nalCount,n.duration+=r.duration,n.push(r),n},this.generateSampleTable_=function(e,t){var i,r,n,a,s,o=t||0,u=[];for(i=0;i<e.length;i++)for(a=e[i],r=0;r<a.length;r++)s=a[r],(n={size:0,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0,degradationPriority:0}}).dataOffset=o,n.compositionTimeOffset=s.pts-s.dts,n.duration=s.duration,n.size=4*s.length,n.size+=s.byteLength,s.keyFrame&&(n.flags.dependsOn=2),o+=n.size,u.push(n);return u},this.concatenateNalData_=function(e){var t,i,r,n,a,s,o=0,u=e.byteLength,l=e.nalCount,c=new Uint8Array(u+4*l),h=new DataView(c.buffer);for(t=0;t<e.length;t++)for(n=e[t],i=0;i<n.length;i++)for(a=n[i],r=0;r<a.length;r++)s=a[r],h.setUint32(o,s.data.byteLength),o+=4,c.set(s.data,o),o+=s.data.byteLength;return c},this.alignGopsAtStart_=function(e){var t,i,r,n,a,s,o,u;for(a=e.byteLength,s=e.nalCount,o=e.duration,t=i=0;t<h.length&&i<e.length&&(r=h[t],n=e[i],r.pts!==n.pts);)n.pts>r.pts?t++:(i++,a-=n.byteLength,s-=n.nalCount,o-=n.duration);return 0===i?e:i===e.length?null:((u=e.slice(i)).byteLength=a,u.duration=o,u.nalCount=s,u.pts=u[0].pts,u.dts=u[0].dts,u)},this.alignGopsAtEnd_=function(e){var t,i,r,n,a,s,o;for(t=h.length-1,i=e.length-1,a=null,s=!1;0<=t&&0<=i;){if(r=h[t],n=e[i],r.pts===n.pts){s=!0;break}r.pts>n.pts?t--:(t===h.length-1&&(a=i),i--)}if(!s&&null===a)return null;if(0===(o=s?i:a))return e;var u=e.slice(o),l=u.reduce(function(e,t){return e.byteLength+=t.byteLength,e.duration+=t.duration,e.nalCount+=t.nalCount,e},{byteLength:0,duration:0,nalCount:0});return u.byteLength=l.byteLength,u.duration=l.duration,u.nalCount=l.nalCount,u.pts=u[0].pts,u.dts=u[0].dts,u},this.alignGopsWith=function(e){h=e}}).prototype=new z,Me=function(e,t){"number"==typeof t.pts&&(void 0===e.timelineStartInfo.pts&&(e.timelineStartInfo.pts=t.pts),void 0===e.minSegmentPts?e.minSegmentPts=t.pts:e.minSegmentPts=Math.min(e.minSegmentPts,t.pts),void 0===e.maxSegmentPts?e.maxSegmentPts=t.pts:e.maxSegmentPts=Math.max(e.maxSegmentPts,t.pts)),"number"==typeof t.dts&&(void 0===e.timelineStartInfo.dts&&(e.timelineStartInfo.dts=t.dts),void 0===e.minSegmentDts?e.minSegmentDts=t.dts:e.minSegmentDts=Math.min(e.minSegmentDts,t.dts),void 0===e.maxSegmentDts?e.maxSegmentDts=t.dts:e.maxSegmentDts=Math.max(e.maxSegmentDts,t.dts))},Ue=function(e){delete e.minSegmentDts,delete e.maxSegmentDts,delete e.minSegmentPts,delete e.maxSegmentPts},Ne=function(e,t){var i,r=e.minSegmentDts;return t||(r-=e.timelineStartInfo.dts),i=e.timelineStartInfo.baseMediaDecodeTime,i+=r,i=Math.max(0,i),"audio"===e.type&&(i*=e.samplerate/9e4,i=Math.floor(i)),i},(De=function(e,t){this.numberOfTracks=0,this.metadataStream=t,"undefined"!=typeof e.remux?this.remuxTracks=!!e.remux:this.remuxTracks=!0,this.pendingTracks=[],this.videoTrack=null,this.pendingBoxes=[],this.pendingCaptions=[],this.pendingMetadata=[],this.pendingBytes=0,this.emittedTracks=0,De.prototype.init.call(this),this.push=function(e){return e.text?this.pendingCaptions.push(e):e.frames?this.pendingMetadata.push(e):(this.pendingTracks.push(e.track),this.pendingBoxes.push(e.boxes),this.pendingBytes+=e.boxes.byteLength,"video"===e.track.type&&(this.videoTrack=e.track),void("audio"===e.track.type&&(this.audioTrack=e.track)))}}).prototype=new z,De.prototype.flush=function(e){var t,i,r,n,a=0,s={captions:[],captionStreams:{},metadata:[],info:{}},o=0;if(this.pendingTracks.length<this.numberOfTracks){if("VideoSegmentStream"!==e&&"AudioSegmentStream"!==e)return;if(this.remuxTracks)return;if(0===this.pendingTracks.length)return this.emittedTracks++,void(this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0))}for(this.videoTrack?(o=this.videoTrack.timelineStartInfo.pts,Ke.forEach(function(e){s.info[e]=this.videoTrack[e]},this)):this.audioTrack&&(o=this.audioTrack.timelineStartInfo.pts,$e.forEach(function(e){s.info[e]=this.audioTrack[e]},this)),1===this.pendingTracks.length?s.type=this.pendingTracks[0].type:s.type="combined",this.emittedTracks+=this.pendingTracks.length,r=q.initSegment(this.pendingTracks),s.initSegment=new Uint8Array(r.byteLength),s.initSegment.set(r),s.data=new Uint8Array(this.pendingBytes),n=0;n<this.pendingBoxes.length;n++)s.data.set(this.pendingBoxes[n],a),a+=this.pendingBoxes[n].byteLength;for(n=0;n<this.pendingCaptions.length;n++)(t=this.pendingCaptions[n]).startTime=t.startPts-o,t.startTime/=9e4,t.endTime=t.endPts-o,t.endTime/=9e4,s.captionStreams[t.stream]=!0,s.captions.push(t);for(n=0;n<this.pendingMetadata.length;n++)(i=this.pendingMetadata[n]).cueTime=i.pts-o,i.cueTime/=9e4,s.metadata.push(i);s.metadata.dispatchType=this.metadataStream.dispatchType,this.pendingTracks.length=0,this.videoTrack=null,this.pendingBoxes.length=0,this.pendingCaptions.length=0,this.pendingBytes=0,this.pendingMetadata.length=0,this.trigger("data",s),this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0)},(xe=function(r){var n,a,s=this,i=!0;xe.prototype.init.call(this),r=r||{},this.baseMediaDecodeTime=r.baseMediaDecodeTime||0,this.transmuxPipeline_={},this.setupAacPipeline=function(){var t={};(this.transmuxPipeline_=t).type="aac",t.metadataStream=new ge.MetadataStream,t.aacStream=new Fe,t.audioTimestampRolloverStream=new ge.TimestampRolloverStream("audio"),t.timedMetadataTimestampRolloverStream=new ge.TimestampRolloverStream("timed-metadata"),t.adtsStream=new Te,t.coalesceStream=new De(r,t.metadataStream),t.headOfPipeline=t.aacStream,t.aacStream.pipe(t.audioTimestampRolloverStream).pipe(t.adtsStream),t.aacStream.pipe(t.timedMetadataTimestampRolloverStream).pipe(t.metadataStream).pipe(t.coalesceStream),t.metadataStream.on("timestamp",function(e){t.aacStream.setTimestamp(e.timeStamp)}),t.aacStream.on("data",function(e){"timed-metadata"!==e.type||t.audioSegmentStream||(a=a||{timelineStartInfo:{baseMediaDecodeTime:s.baseMediaDecodeTime},codec:"adts",type:"audio"},t.coalesceStream.numberOfTracks++,t.audioSegmentStream=new Ie(a,r),t.adtsStream.pipe(t.audioSegmentStream).pipe(t.coalesceStream))}),t.coalesceStream.on("data",this.trigger.bind(this,"data")),t.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setupTsPipeline=function(){var i={};(this.transmuxPipeline_=i).type="ts",i.metadataStream=new ge.MetadataStream,i.packetStream=new ge.TransportPacketStream,i.parseStream=new ge.TransportParseStream,i.elementaryStream=new ge.ElementaryStream,i.videoTimestampRolloverStream=new ge.TimestampRolloverStream("video"),i.audioTimestampRolloverStream=new ge.TimestampRolloverStream("audio"),i.timedMetadataTimestampRolloverStream=new ge.TimestampRolloverStream("timed-metadata"),i.adtsStream=new Te,i.h264Stream=new Ye,i.captionStream=new ge.CaptionStream,i.coalesceStream=new De(r,i.metadataStream),i.headOfPipeline=i.packetStream,i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream),i.elementaryStream.pipe(i.videoTimestampRolloverStream).pipe(i.h264Stream),i.elementaryStream.pipe(i.audioTimestampRolloverStream).pipe(i.adtsStream),i.elementaryStream.pipe(i.timedMetadataTimestampRolloverStream).pipe(i.metadataStream).pipe(i.coalesceStream),i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream),i.elementaryStream.on("data",function(e){var t;if("metadata"===e.type){for(t=e.tracks.length;t--;)n||"video"!==e.tracks[t].type?a||"audio"!==e.tracks[t].type||((a=e.tracks[t]).timelineStartInfo.baseMediaDecodeTime=s.baseMediaDecodeTime):(n=e.tracks[t]).timelineStartInfo.baseMediaDecodeTime=s.baseMediaDecodeTime;n&&!i.videoSegmentStream&&(i.coalesceStream.numberOfTracks++,i.videoSegmentStream=new Oe(n,r),i.videoSegmentStream.on("timelineStartInfo",function(e){a&&(a.timelineStartInfo=e,i.audioSegmentStream.setEarliestDts(e.dts))}),i.videoSegmentStream.on("processedGopsInfo",s.trigger.bind(s,"gopInfo")),i.videoSegmentStream.on("baseMediaDecodeTime",function(e){a&&i.audioSegmentStream.setVideoBaseMediaDecodeTime(e)}),i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)),a&&!i.audioSegmentStream&&(i.coalesceStream.numberOfTracks++,i.audioSegmentStream=new Ie(a,r),i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream))}}),i.coalesceStream.on("data",this.trigger.bind(this,"data")),i.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setBaseMediaDecodeTime=function(e){var t=this.transmuxPipeline_;this.baseMediaDecodeTime=e,a&&(a.timelineStartInfo.dts=void 0,a.timelineStartInfo.pts=void 0,Ue(a),a.timelineStartInfo.baseMediaDecodeTime=e,t.audioTimestampRolloverStream&&t.audioTimestampRolloverStream.discontinuity()),n&&(t.videoSegmentStream&&(t.videoSegmentStream.gopCache_=[],t.videoTimestampRolloverStream.discontinuity()),n.timelineStartInfo.dts=void 0,n.timelineStartInfo.pts=void 0,Ue(n),t.captionStream.reset(),n.timelineStartInfo.baseMediaDecodeTime=e),t.timedMetadataTimestampRolloverStream&&t.timedMetadataTimestampRolloverStream.discontinuity()},this.setAudioAppendStart=function(e){a&&this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)},this.alignGopsWith=function(e){n&&this.transmuxPipeline_.videoSegmentStream&&this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)},this.push=function(e){if(i){var t=Re(e);t&&"aac"!==this.transmuxPipeline_.type?this.setupAacPipeline():t||"ts"===this.transmuxPipeline_.type||this.setupTsPipeline(),i=!1}this.transmuxPipeline_.headOfPipeline.push(e)},this.flush=function(){i=!0,this.transmuxPipeline_.headOfPipeline.flush()},this.resetCaptions=function(){this.transmuxPipeline_.captionStream&&this.transmuxPipeline_.captionStream.reset()}}).prototype=new z;var Qe={Transmuxer:xe,VideoSegmentStream:Oe,AudioSegmentStream:Ie,AUDIO_PROPERTIES:$e,VIDEO_PROPERTIES:Ke},Je={generator:q,Transmuxer:Qe.Transmuxer,AudioSegmentStream:Qe.AudioSegmentStream,VideoSegmentStream:Qe.VideoSegmentStream},Ze=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},et=function(){function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}}(),tt=function(){function t(e){Ze(this,t),this.options=e||{},this.init()}return et(t,[{key:"init",value:function(){var e;this.transmuxer&&this.transmuxer.dispose(),this.transmuxer=new Je.Transmuxer(this.options),(e=this.transmuxer).on("data",function(e){var t=e.initSegment;e.initSegment={data:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength};var i=e.data;e.data=i.buffer,H.postMessage({action:"data",segment:e,byteOffset:i.byteOffset,byteLength:i.byteLength},[e.data])}),e.captionStream&&e.captionStream.on("data",function(e){H.postMessage({action:"caption",data:e})}),e.on("done",function(e){H.postMessage({action:"done"})}),e.on("gopInfo",function(e){H.postMessage({action:"gopInfo",gopInfo:e})})}},{key:"push",value:function(e){var t=new Uint8Array(e.data,e.byteOffset,e.byteLength);this.transmuxer.push(t)}},{key:"reset",value:function(){this.init()}},{key:"setTimestampOffset",value:function(e){var t=e.timestampOffset||0;this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4*t))}},{key:"setAudioAppendStart",value:function(e){this.transmuxer.setAudioAppendStart(Math.ceil(9e4*e.appendStart))}},{key:"flush",value:function(e){this.transmuxer.flush()}},{key:"resetCaptions",value:function(){this.transmuxer.resetCaptions()}},{key:"alignGopsWith",value:function(e){this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())}}]),t}();new function(e){e.onmessage=function(e){"init"===e.data.action&&e.data.options?this.messageHandlers=new tt(e.data.options):(this.messageHandlers||(this.messageHandlers=new tt),e.data&&e.data.action&&"init"!==e.data.action&&this.messageHandlers[e.data.action]&&this.messageHandlers[e.data.action](e.data))}}(rt)}()}),qu=function(e){return/mp4a\.\d+.\d+/i.test(e)},Wu=function(e){return/avc1\.[\da-f]+/i.test(e)},zu=function(e){return e.map(function(e){return e.replace(/avc1\.(\d+)\.(\d+)/i,function(e,t,i){return"avc1."+("00"+Number(t).toString(16)).slice(-2)+"00"+("00"+Number(i).toString(16)).slice(-2)})})},Gu=function(e){function n(e,t){No(this,n);var i=Fo(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,La.EventTarget));i.timestampOffset_=0,i.pendingBuffers_=[],i.bufferUpdating_=!1,i.mediaSource_=e,i.codecs_=t,i.audioCodec_=null,i.videoCodec_=null,i.audioDisabled_=!1,i.appendAudioInitSegment_=!0,i.gopBuffer_=[],i.timeMapping_=0,i.safeAppend_=11<=La.browser.IE_VERSION;var r={remux:!1,alignGopsAtEnd:i.safeAppend_};return i.codecs_.forEach(function(e){qu(e)?i.audioCodec_=e:Wu(e)&&(i.videoCodec_=e)}),i.transmuxer_=new Vu,i.transmuxer_.postMessage({action:"init",options:r}),i.transmuxer_.onmessage=function(e){return"data"===e.data.action?i.data_(e):"done"===e.data.action?i.done_(e):"gopInfo"===e.data.action?i.appendGopInfo_(e):void 0},Object.defineProperty(i,"timestampOffset",{get:function(){return this.timestampOffset_},set:function(e){"number"==typeof e&&0<=e&&(this.timestampOffset_=e,this.appendAudioInitSegment_=!0,this.gopBuffer_.length=0,this.timeMapping_=0,this.transmuxer_.postMessage({action:"setTimestampOffset",timestampOffset:e}))}}),Object.defineProperty(i,"appendWindowStart",{get:function(){return(this.videoBuffer_||this.audioBuffer_).appendWindowStart},set:function(e){this.videoBuffer_&&(this.videoBuffer_.appendWindowStart=e),this.audioBuffer_&&(this.audioBuffer_.appendWindowStart=e)}}),Object.defineProperty(i,"updating",{get:function(){return!!(this.bufferUpdating_||!this.audioDisabled_&&this.audioBuffer_&&this.audioBuffer_.updating||this.videoBuffer_&&this.videoBuffer_.updating)}}),Object.defineProperty(i,"buffered",{get:function(){var e=null,t=null,i=0,r=[],n=[];if(!this.videoBuffer_&&!this.audioBuffer_)return La.createTimeRange();if(!this.videoBuffer_)return this.audioBuffer_.buffered;if(!this.audioBuffer_)return this.videoBuffer_.buffered;if(this.audioDisabled_)return this.videoBuffer_.buffered;if(0===this.videoBuffer_.buffered.length&&0===this.audioBuffer_.buffered.length)return La.createTimeRange();for(var a=this.videoBuffer_.buffered,s=this.audioBuffer_.buffered,o=a.length;o--;)r.push({time:a.start(o),type:"start"}),r.push({time:a.end(o),type:"end"});for(o=s.length;o--;)r.push({time:s.start(o),type:"start"}),r.push({time:s.end(o),type:"end"});for(r.sort(function(e,t){return e.time-t.time}),o=0;o<r.length;o++)"start"===r[o].type?2===++i&&(e=r[o].time):"end"===r[o].type&&1===--i&&(t=r[o].time),null!==e&&null!==t&&(n.push([e,t]),t=e=null);return La.createTimeRanges(n)}}),i}return jo(n,La.EventTarget),Bo(n,[{key:"data_",value:function(e){var t=e.data.segment;t.data=new Uint8Array(t.data,e.data.byteOffset,e.data.byteLength),t.initSegment=new Uint8Array(t.initSegment.data,t.initSegment.byteOffset,t.initSegment.byteLength),function(e,t,i){var r=t.player_;if(i.captions&&i.captions.length)for(var n in e.inbandTextTracks_||(e.inbandTextTracks_={}),i.captionStreams)if(!e.inbandTextTracks_[n]){r.tech_.trigger({type:"usage",name:"hls-608"});var a=r.textTracks().getTrackById(n);e.inbandTextTracks_[n]=a||r.addRemoteTextTrack({kind:"captions",id:n,label:n},!1).track}i.metadata&&i.metadata.length&&!e.metadataTrack_&&(e.metadataTrack_=r.addRemoteTextTrack({kind:"metadata",label:"Timed Metadata"},!1).track,e.metadataTrack_.inBandMetadataTrackDispatchType=i.metadata.dispatchType)}(this,this.mediaSource_,t),this.pendingBuffers_.push(t)}},{key:"done_",value:function(e){"closed"!==this.mediaSource_.readyState?this.processPendingSegments_():this.pendingBuffers_.length=0}},{key:"createRealSourceBuffers_",value:function(){var r=this,n=["audio","video"];n.forEach(function(t){if(r[t+"Codec_"]&&!r[t+"Buffer_"]){var i=null;if(r.mediaSource_[t+"Buffer_"])(i=r.mediaSource_[t+"Buffer_"]).updating=!1;else{var e=t+'/mp4;codecs="'+r[t+"Codec_"]+'"';i=function(e,t){var i=e.addSourceBuffer(t),r=Object.create(null);r.updating=!1,r.realBuffer_=i;var n=function(t){"function"==typeof i[t]?r[t]=function(){return i[t].apply(i,arguments)}:"undefined"==typeof r[t]&&Object.defineProperty(r,t,{get:function(){return i[t]},set:function(e){return i[t]=e}})};for(var a in i)n(a);return r}(r.mediaSource_.nativeMediaSource_,e),r.mediaSource_[t+"Buffer_"]=i}r[t+"Buffer_"]=i,["update","updatestart","updateend"].forEach(function(e){i.addEventListener(e,function(){if("audio"!==t||!r.audioDisabled_)return"updateend"===e&&(r[t+"Buffer_"].updating=!1),n.every(function(e){return!("audio"!==e||!r.audioDisabled_)||(t===e||!r[e+"Buffer_"]||!r[e+"Buffer_"].updating)})?r.trigger(e):void 0})})}})}},{key:"appendBuffer",value:function(e){if(this.bufferUpdating_=!0,this.audioBuffer_&&this.audioBuffer_.buffered.length){var t=this.audioBuffer_.buffered;this.transmuxer_.postMessage({action:"setAudioAppendStart",appendStart:t.end(t.length-1)})}this.videoBuffer_&&this.transmuxer_.postMessage({action:"alignGopsWith",gopsToAlignWith:function(e,t,i){if(!t||!e.length)return[];var r=Math.ceil(9e4*(t.currentTime()-i+3)),n=void 0;for(n=0;n<e.length&&!(e[n].pts>r);n++);return e.slice(n)}(this.gopBuffer_,this.mediaSource_.player_,this.timeMapping_)}),this.transmuxer_.postMessage({action:"push",data:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength},[e.buffer]),this.transmuxer_.postMessage({action:"flush"})}},{key:"appendGopInfo_",value:function(e){this.gopBuffer_=function(e,t,i){if(!t.length)return e;if(i)return t.slice();for(var r=t[0].pts,n=0;n<e.length&&!(e[n].pts>=r);n++);return e.slice(0,n).concat(t)}(this.gopBuffer_,e.data.gopInfo,this.safeAppend_)}},{key:"remove",value:function(e,t){if(this.videoBuffer_&&(this.videoBuffer_.updating=!0,this.videoBuffer_.remove(e,t),this.gopBuffer_=function(e,t,i,r){for(var n=Math.ceil(9e4*(t-r)),a=Math.ceil(9e4*(i-r)),s=e.slice(),o=e.length;o--&&!(e[o].pts<=a););if(-1===o)return s;for(var u=o+1;u--&&!(e[u].pts<=n););return u=Math.max(u,0),s.splice(u,o-u+1),s}(this.gopBuffer_,e,t,this.timeMapping_)),!this.audioDisabled_&&this.audioBuffer_&&(this.audioBuffer_.updating=!0,this.audioBuffer_.remove(e,t)),Lu(e,t,this.metadataTrack_),this.inbandTextTracks_)for(var i in this.inbandTextTracks_)Lu(e,t,this.inbandTextTracks_[i])}},{key:"processPendingSegments_",value:function(){var e={video:{segments:[],bytes:0},audio:{segments:[],bytes:0},captions:[],metadata:[]};e=this.pendingBuffers_.reduce(function(e,t){var i=t.type,r=t.data,n=t.initSegment;return e[i].segments.push(r),e[i].bytes+=r.byteLength,e[i].initSegment=n,t.captions&&(e.captions=e.captions.concat(t.captions)),t.info&&(e[i].info=t.info),t.metadata&&(e.metadata=e.metadata.concat(t.metadata)),e},e),this.videoBuffer_||this.audioBuffer_||(0===e.video.bytes&&(this.videoCodec_=null),0===e.audio.bytes&&(this.audioCodec_=null),this.createRealSourceBuffers_()),e.audio.info&&this.mediaSource_.trigger({type:"audioinfo",info:e.audio.info}),e.video.info&&this.mediaSource_.trigger({type:"videoinfo",info:e.video.info}),this.appendAudioInitSegment_&&(!this.audioDisabled_&&this.audioBuffer_&&(e.audio.segments.unshift(e.audio.initSegment),e.audio.bytes+=e.audio.initSegment.byteLength),this.appendAudioInitSegment_=!1);var t=!1;this.videoBuffer_&&e.video.bytes?(e.video.segments.unshift(e.video.initSegment),e.video.bytes+=e.video.initSegment.byteLength,this.concatAndAppendSegments_(e.video,this.videoBuffer_),Ou(this,e.captions,e.metadata)):!this.videoBuffer_||!this.audioDisabled_&&this.audioBuffer_||(t=!0),!this.audioDisabled_&&this.audioBuffer_&&this.concatAndAppendSegments_(e.audio,this.audioBuffer_),this.pendingBuffers_.length=0,t&&this.trigger("updateend"),this.bufferUpdating_=!1}},{key:"concatAndAppendSegments_",value:function(e,t){var i=0,r=void 0;if(e.bytes){r=new Uint8Array(e.bytes),e.segments.forEach(function(e){r.set(e,i),i+=e.byteLength});try{t.updating=!0,t.appendBuffer(r)}catch(e){this.mediaSource_.player_&&this.mediaSource_.player_.error({code:-3,type:"APPEND_BUFFER_ERR",message:e.message,originalError:e})}}}},{key:"abort",value:function(){this.videoBuffer_&&this.videoBuffer_.abort(),!this.audioDisabled_&&this.audioBuffer_&&this.audioBuffer_.abort(),this.transmuxer_&&this.transmuxer_.postMessage({action:"reset"}),this.pendingBuffers_.length=0,this.bufferUpdating_=!1}}]),n}(),Xu=function(e){function t(){No(this,t);var a=Fo(this,(t.__proto__||Object.getPrototypeOf(t)).call(this)),e=void 0;for(e in a.nativeMediaSource_=new g.MediaSource,a.nativeMediaSource_)e in t.prototype||"function"!=typeof a.nativeMediaSource_[e]||(a[e]=a.nativeMediaSource_[e].bind(a.nativeMediaSource_));return a.duration_=NaN,Object.defineProperty(a,"duration",{get:function(){return this.duration_===1/0?this.duration_:this.nativeMediaSource_.duration},set:function(e){(this.duration_=e)===1/0||(this.nativeMediaSource_.duration=e)}}),Object.defineProperty(a,"seekable",{get:function(){return this.duration_===1/0?La.createTimeRanges([[0,this.nativeMediaSource_.duration]]):this.nativeMediaSource_.seekable}}),Object.defineProperty(a,"readyState",{get:function(){return this.nativeMediaSource_.readyState}}),Object.defineProperty(a,"activeSourceBuffers",{get:function(){return this.activeSourceBuffers_}}),a.sourceBuffers=[],a.activeSourceBuffers_=[],a.updateActiveSourceBuffers_=function(){if(a.activeSourceBuffers_.length=0,1===a.sourceBuffers.length){var e=a.sourceBuffers[0];return e.appendAudioInitSegment_=!0,e.audioDisabled_=!e.audioCodec_,void a.activeSourceBuffers_.push(e)}for(var i=!1,r=!0,t=0;t<a.player_.audioTracks().length;t++){var n=a.player_.audioTracks()[t];if(n.enabled&&"main"!==n.kind){r=!(i=!0);break}}a.sourceBuffers.forEach(function(e,t){if(e.appendAudioInitSegment_=!0,e.videoCodec_&&e.audioCodec_)e.audioDisabled_=i;else if(e.videoCodec_&&!e.audioCodec_)e.audioDisabled_=!0,r=!1;else if(!e.videoCodec_&&e.audioCodec_&&(e.audioDisabled_=t?r:!r,e.audioDisabled_))return;a.activeSourceBuffers_.push(e)})},a.onPlayerMediachange_=function(){a.sourceBuffers.forEach(function(e){e.appendAudioInitSegment_=!0})},a.onHlsReset_=function(){a.sourceBuffers.forEach(function(e){e.transmuxer_&&e.transmuxer_.postMessage({action:"resetCaptions"})})},a.onHlsSegmentTimeMapping_=function(t){a.sourceBuffers.forEach(function(e){return e.timeMapping_=t.mapping})},["sourceopen","sourceclose","sourceended"].forEach(function(e){this.nativeMediaSource_.addEventListener(e,this.trigger.bind(this))},a),a.on("sourceopen",function(e){var t=p.querySelector('[src="'+a.url_+'"]');t&&(a.player_=La(t.parentNode),a.player_.tech_.on("hls-reset",a.onHlsReset_),a.player_.tech_.on("hls-segment-time-mapping",a.onHlsSegmentTimeMapping_),a.player_.audioTracks&&a.player_.audioTracks()&&(a.player_.audioTracks().on("change",a.updateActiveSourceBuffers_),a.player_.audioTracks().on("addtrack",a.updateActiveSourceBuffers_),a.player_.audioTracks().on("removetrack",a.updateActiveSourceBuffers_)),a.player_.on("mediachange",a.onPlayerMediachange_))}),a.on("sourceended",function(e){for(var t=Pu(a.duration),i=0;i<a.sourceBuffers.length;i++){var r=a.sourceBuffers[i],n=r.metadataTrack_&&r.metadataTrack_.cues;n&&n.length&&(n[n.length-1].endTime=t)}}),a.on("sourceclose",function(e){this.sourceBuffers.forEach(function(e){e.transmuxer_&&e.transmuxer_.terminate()}),this.sourceBuffers.length=0,this.player_&&(this.player_.audioTracks&&this.player_.audioTracks()&&(this.player_.audioTracks().off("change",this.updateActiveSourceBuffers_),this.player_.audioTracks().off("addtrack",this.updateActiveSourceBuffers_),this.player_.audioTracks().off("removetrack",this.updateActiveSourceBuffers_)),this.player_.el_&&(this.player_.off("mediachange",this.onPlayerMediachange_),this.player_.tech_.off("hls-reset",this.onHlsReset_),this.player_.tech_.off("hls-segment-time-mapping",this.onHlsSegmentTimeMapping_)))}),a}return jo(t,La.EventTarget),Bo(t,[{key:"addSeekableRange_",value:function(e,t){var i=void 0;if(this.duration!==1/0)throw(i=new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name="InvalidStateError",i.code=11,i;(t>this.nativeMediaSource_.duration||isNaN(this.nativeMediaSource_.duration))&&(this.nativeMediaSource_.duration=t)}},{key:"addSourceBuffer",value:function(e){var n,t,i=void 0,r=(n={type:"",parameters:{}},t=e.trim().split(";"),n.type=t.shift().trim(),t.forEach(function(e){var t=e.trim().split("=");if(1<t.length){var i=t[0].replace(/"/g,"").trim(),r=t[1].replace(/"/g,"").trim();n.parameters[i]=r}}),n);if(/^(video|audio)\/mp2t$/i.test(r.type)){var a=[];r.parameters&&r.parameters.codecs&&(a=r.parameters.codecs.split(","),a=(a=zu(a)).filter(function(e){return qu(e)||Wu(e)})),0===a.length&&(a=["avc1.4d400d","mp4a.40.2"]),i=new Gu(this,a),0!==this.sourceBuffers.length&&(this.sourceBuffers[0].createRealSourceBuffers_(),i.createRealSourceBuffers_(),this.sourceBuffers[0].audioDisabled_=!0)}else i=this.nativeMediaSource_.addSourceBuffer(e);return this.sourceBuffers.push(i),i}}]),t}(),Yu=0;La.mediaSources={};var $u=function(e,t){var i=La.mediaSources[e];if(!i)throw new Error("Media Source not found (Video.js)");i.trigger({type:"sourceopen",swfId:t})},Ku=function(){return!!g.MediaSource&&!!g.MediaSource.isTypeSupported&&g.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')},Qu=function(){if(this.MediaSource={open:$u,supportsNativeMediaSources:Ku},Ku())return new Xu;throw new Error("Cannot use create a virtual MediaSource for this video")};Qu.open=$u,Qu.supportsNativeMediaSources=Ku;var Ju={createObjectURL:function(e){var t=void 0;return e instanceof Xu?(t=g.URL.createObjectURL(e.nativeMediaSource_),e.url_=t):e instanceof Xu?(t="blob:vjs-media-source/"+Yu,Yu++,La.mediaSources[t]=e,t):(t=g.URL.createObjectURL(e),e.url_=t)}};La.MediaSource=Qu,La.URL=Ju;var Zu=La.EventTarget,el=La.mergeOptions,tl=function(e,t){for(var s=el(e,{duration:t.duration,minimumUpdatePeriod:t.minimumUpdatePeriod}),i=0;i<t.playlists.length;i++){var r=Go(s,t.playlists[i]);r&&(s=r)}return zo(t,function(e,t,i,r){if(e.playlists&&e.playlists.length){var n=e.playlists[0].uri,a=Go(s,e.playlists[0]);a&&((s=a).mediaGroups[t][i][r].playlists[0]=s.playlists[n])}}),s},il=function(e){function a(e,t,i,r){No(this,a);var n=Fo(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));if(n.hls_=t,n.withCredentials=i,!e)throw new Error("A non-empty playlist URL or playlist is required");return n.on("minimumUpdatePeriod",function(){n.refreshXml_()}),n.on("mediaupdatetimeout",function(){n.refreshMedia_()}),"string"==typeof e?(n.srcUrl=e,n.state="HAVE_NOTHING",Fo(n)):(n.masterPlaylistLoader_=r,n.state="HAVE_METADATA",n.started=!0,n.media(e),g.setTimeout(function(){n.trigger("loadedmetadata")},0),n)}return jo(a,Zu),Bo(a,[{key:"dispose",value:function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout)}},{key:"stopRequest",value:function(){if(this.request){var e=this.request;this.request=null,e.onreadystatechange=null,e.abort()}}},{key:"media",value:function(e){if(!e)return this.media_;if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);var t=this.state;if("string"==typeof e){if(!this.master.playlists[e])throw new Error("Unknown playlist URI: "+e);e=this.master.playlists[e]}var i=!this.media_||e.uri!==this.media_.uri;this.state="HAVE_METADATA",i&&(this.media_&&this.trigger("mediachanging"),this.media_=e,this.refreshMedia_(),"HAVE_MASTER"!==t&&this.trigger("mediachange"))}},{key:"pause",value:function(){this.stopRequest(),"HAVE_NOTHING"===this.state&&(this.started=!1)}},{key:"load",value:function(){this.started?this.trigger("loadedplaylist"):this.start()}},{key:"parseMasterXml",value:function(){var a=Cs(this.masterXml_,{manifestUri:this.srcUrl,clientOffset:this.clientOffset_});a.uri=this.srcUrl;for(var e=0;e<a.playlists.length;e++){var t="placeholder-uri-"+e;a.playlists[e].uri=t,a.playlists[t]=a.playlists[e]}return zo(a,function(e,t,i,r){if(e.playlists&&e.playlists.length){var n="placeholder-uri-"+t+"-"+i+"-"+r;e.playlists[0].uri=n,a.playlists[n]=e.playlists[0]}}),Xo(a),Yo(a),a}},{key:"start",value:function(){var i=this;this.started=!0,this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(e,t){if(i.request){if(i.request=null,e)return i.error={status:t.status,message:"DASH playlist request error at URL: "+i.srcUrl,responseText:t.responseText,code:2},"HAVE_NOTHING"===i.state&&(i.started=!1),i.trigger("error");i.masterXml_=t.responseText,t.responseHeaders&&t.responseHeaders.date?i.masterLoaded_=Date.parse(t.responseHeaders.date):i.masterLoaded_=Date.now(),i.syncClientServerClock_(i.onClientServerClockSync_.bind(i))}})}},{key:"syncClientServerClock_",value:function(r){var n=this,a=Es(this.masterXml_);return null===a?(this.clientOffset_=this.masterLoaded_-Date.now(),r()):"DIRECT"===a.method?(this.clientOffset_=a.value-Date.now(),r()):void(this.request=this.hls_.xhr({uri:Uo(this.srcUrl,a.value),method:a.method,withCredentials:this.withCredentials},function(e,t){if(n.request){if(e)return n.clientOffset_=n.masterLoaded_-Date.now(),r();var i=void 0;i="HEAD"===a.method?t.responseHeaders&&t.responseHeaders.date?Date.parse(t.responseHeaders.date):n.masterLoaded_:Date.parse(t.responseText),n.clientOffset_=i-Date.now(),r()}}))}},{key:"onClientServerClockSync_",value:function(){var e=this;this.master=this.parseMasterXml(),this.state="HAVE_MASTER",this.trigger("loadedplaylist"),this.media_||this.media(this.master.playlists[0]),g.setTimeout(function(){e.trigger("loadedmetadata")},0),this.master.minimumUpdatePeriod&&g.setTimeout(function(){e.trigger("minimumUpdatePeriod")},this.master.minimumUpdatePeriod)}},{key:"refreshXml_",value:function(){var r=this;this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(e,t){if(r.request){if(r.request=null,e)return r.error={status:t.status,message:"DASH playlist request error at URL: "+r.srcUrl,responseText:t.responseText,code:2},"HAVE_NOTHING"===r.state&&(r.started=!1),r.trigger("error");r.masterXml_=t.responseText;var i=r.parseMasterXml();r.master=tl(r.master,i),g.setTimeout(function(){r.trigger("minimumUpdatePeriod")},r.master.minimumUpdatePeriod)}})}},{key:"refreshMedia_",value:function(){var e=this,t=void 0,i=void 0;this.masterPlaylistLoader_?(t=this.masterPlaylistLoader_.master,i=this.masterPlaylistLoader_.parseMasterXml()):(t=this.master,i=this.parseMasterXml());var r=tl(t,i);r?(this.masterPlaylistLoader_?this.masterPlaylistLoader_.master=r:this.master=r,this.media_=r.playlists[this.media_.uri]):this.trigger("playlistunchanged"),this.media().endList||(this.mediaUpdateTimeout=g.setTimeout(function(){e.trigger("mediaupdatetimeout")},$o(this.media(),!!r))),this.trigger("loadedplaylist")}}]),a}(),rl=function(e){return La.log.debug?La.log.debug.bind(La,"VHS:",e+" >"):function(){}};function nl(){}var al=function(){function n(e,t,i,r){No(this,n),this.callbacks_=[],this.pendingCallback_=null,this.timestampOffset_=0,this.mediaSource=e,this.processedAppend_=!1,this.type_=i,this.mimeType_=t,this.logger_=rl("SourceUpdater["+i+"]["+t+"]"),"closed"===e.readyState?e.addEventListener("sourceopen",this.createSourceBuffer_.bind(this,t,r)):this.createSourceBuffer_(t,r)}return Bo(n,[{key:"createSourceBuffer_",value:function(e,t){var i=this;this.sourceBuffer_=this.mediaSource.addSourceBuffer(e),this.logger_("created SourceBuffer"),t&&(t.trigger("sourcebufferadded"),this.mediaSource.sourceBuffers.length<2)?t.on("sourcebufferadded",function(){i.start_()}):this.start_()}},{key:"start_",value:function(){var t=this;this.started_=!0,this.onUpdateendCallback_=function(){var e=t.pendingCallback_;t.pendingCallback_=null,t.logger_("buffered ["+wu(t.buffered())+"]"),e&&e(),t.runCallback_()},this.sourceBuffer_.addEventListener("updateend",this.onUpdateendCallback_),this.runCallback_()}},{key:"abort",value:function(e){var t=this;this.processedAppend_&&this.queueCallback_(function(){t.sourceBuffer_.abort()},e)}},{key:"appendBuffer",value:function(e,t){var i=this;this.processedAppend_=!0,this.queueCallback_(function(){i.sourceBuffer_.appendBuffer(e)},t)}},{key:"buffered",value:function(){return this.sourceBuffer_?this.sourceBuffer_.buffered:La.createTimeRanges()}},{key:"remove",value:function(e,t){var i=this;this.processedAppend_&&this.queueCallback_(function(){i.logger_("remove ["+e+" => "+t+"]"),i.sourceBuffer_.remove(e,t)},nl)}},{key:"updating",value:function(){return!this.sourceBuffer_||this.sourceBuffer_.updating||this.pendingCallback_}},{key:"timestampOffset",value:function(e){var t=this;return"undefined"!=typeof e&&(this.queueCallback_(function(){t.sourceBuffer_.timestampOffset=e}),this.timestampOffset_=e),this.timestampOffset_}},{key:"queueCallback_",value:function(e,t){this.callbacks_.push([e.bind(this),t]),this.runCallback_()}},{key:"runCallback_",value:function(){var e=void 0;!this.updating()&&this.callbacks_.length&&this.started_&&(e=this.callbacks_.shift(),this.pendingCallback_=e[1],e[0]())}},{key:"dispose",value:function(){this.sourceBuffer_.removeEventListener("updateend",this.onUpdateendCallback_),this.sourceBuffer_&&"open"===this.mediaSource.readyState&&this.sourceBuffer_.abort()}}]),n}(),sl={GOAL_BUFFER_LENGTH:30,MAX_GOAL_BUFFER_LENGTH:60,GOAL_BUFFER_LENGTH_RATE:1,BANDWIDTH_VARIANCE:1.2,BUFFER_LOW_WATER_LINE:0,MAX_BUFFER_LOW_WATER_LINE:30,BUFFER_LOW_WATER_LINE_RATE:1},ol=2,ul=-101,ll=-102,cl=function(e){var t,i,r={};return e.byterange&&(r.Range=(t=e.byterange,i=t.offset+t.length-1,"bytes="+t.offset+"-"+i)),r},hl=function(e){e.forEach(function(e){e.abort()})},dl=function(e,t){return t.timedout?{status:t.status,message:"HLS request timed-out at URL: "+t.uri,code:ul,xhr:t}:t.aborted?{status:t.status,message:"HLS request aborted at URL: "+t.uri,code:ll,xhr:t}:e?{status:t.status,message:"HLS request errored at URL: "+t.uri,code:ol,xhr:t}:null},pl=function(s,o,u){var l=[],c=0;return function(e,t){if(e&&(hl(s),l.push(e)),(c+=1)===s.length){if(t.endOfAllRequests=Date.now(),0<l.length){var i=l.reduce(function(e,t){return t.code>e.code?t:e});return u(i,t)}return t.encryptedBytes?(n=t,a=u,(r=o).addEventListener("message",function e(t){if(t.data.source===n.requestId){r.removeEventListener("message",e);var i=t.data.decrypted;return n.bytes=new Uint8Array(i.bytes,i.byteOffset,i.byteLength),a(null,n)}}),void r.postMessage(vu({source:n.requestId,encrypted:n.encryptedBytes,key:n.key.bytes,iv:n.key.iv}),[n.encryptedBytes.buffer,n.key.bytes.buffer])):u(null,t)}var r,n,a}},fl=function(n,a){return function(e){var t,i,r;return n.stats=La.mergeOptions(n.stats,(i=(t=e).target,(r={bandwidth:1/0,bytesReceived:0,roundTripTime:Date.now()-i.requestTime||0}).bytesReceived=t.loaded,r.bandwidth=Math.floor(r.bytesReceived/r.roundTripTime*8*1e3),r)),!n.stats.firstBytesReceivedAt&&n.stats.bytesReceived&&(n.stats.firstBytesReceivedAt=Date.now()),a(e,n)}},ml=function(e,t,i,r,n,a){var s,o,u,l,c=[],h=pl(c,i,a);if(r.key){var d=e(La.mergeOptions(t,{uri:r.key.resolvedUri,responseType:"arraybuffer"}),(s=r,o=h,function(e,t){var i=t.response,r=dl(e,t);if(r)return o(r,s);if(16!==i.byteLength)return o({status:t.status,message:"Invalid HLS key at URL: "+t.uri,code:ol,xhr:t},s);var n=new DataView(i);return s.key.bytes=new Uint32Array([n.getUint32(0),n.getUint32(4),n.getUint32(8),n.getUint32(12)]),o(null,s)}));c.push(d)}if(r.map&&!r.map.bytes){var p=e(La.mergeOptions(t,{uri:r.map.resolvedUri,responseType:"arraybuffer",headers:cl(r.map)}),(u=r,l=h,function(e,t){var i=t.response,r=dl(e,t);return r?l(r,u):0===i.byteLength?l({status:t.status,message:"Empty HLS segment content at URL: "+t.uri,code:ol,xhr:t},u):(u.map.bytes=new Uint8Array(t.response),l(null,u))}));c.push(p)}var f,m,g=e(La.mergeOptions(t,{uri:r.resolvedUri,responseType:"arraybuffer",headers:cl(r)}),(f=r,m=h,function(e,t){var i,r=t.response,n=dl(e,t);return n?m(n,f):0===r.byteLength?m({status:t.status,message:"Empty HLS segment content at URL: "+t.uri,code:ol,xhr:t},f):(f.stats={bandwidth:(i=t).bandwidth,bytesReceived:i.bytesReceived||0,roundTripTime:i.roundTripTime||0},f.key?f.encryptedBytes=new Uint8Array(t.response):f.bytes=new Uint8Array(t.response),m(null,f))}));return g.addEventListener("progress",fl(r,n)),c.push(g),function(){return hl(c)}},gl={videoCodec:"avc1",videoObjectTypeIndicator:".4d400d",audioProfile:"2"},yl=function(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",i={codecCount:0};return i.codecCount=t.split(",").length,i.codecCount=i.codecCount||2,(e=/(^|\s|,)+(avc[13])([^ ,]*)/i.exec(t))&&(i.videoCodec=e[2],i.videoObjectTypeIndicator=e[3]),i.audioProfile=/(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(t),i.audioProfile=i.audioProfile&&i.audioProfile[2],i},vl=function(e,t,i){return e+"/"+t+'; codecs="'+i.filter(function(e){return!!e}).join(", ")+'"'},_l=function(e,t){var i,r,n=(i=t).segments&&i.segments.length&&i.segments[0].map?"mp4":"mp2t",a=(r=t.attributes||{}).CODECS?yl(r.CODECS):gl,s=t.attributes||{},o=!0,u=!1;if(!t)return[];if(e.mediaGroups.AUDIO&&s.AUDIO){var l=e.mediaGroups.AUDIO[s.AUDIO];if(l)for(var c in o=!(u=!0),l)if(!l[c].uri&&!l[c].playlists){o=!0;break}}u&&!a.audioProfile&&(o||(a.audioProfile=function(e,t){if(!e.mediaGroups.AUDIO||!t)return null;var i=e.mediaGroups.AUDIO[t];if(!i)return null;for(var r in i){var n=i[r];if(n.default&&n.playlists)return yl(n.playlists[0].attributes.CODECS).audioProfile}return null}(e,s.AUDIO)),a.audioProfile||(La.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"),a.audioProfile=gl.audioProfile));var h={};a.videoCodec&&(h.video=""+a.videoCodec+a.videoObjectTypeIndicator),a.audioProfile&&(h.audio="mp4a.40."+a.audioProfile);var d=vl("audio",n,[h.audio]),p=vl("video",n,[h.video]),f=vl("video",n,[h.video,h.audio]);return u?!o&&h.video?[p,d]:o||h.video?[f,d]:[d,d]:h.video?[f]:[d]},bl=function(e,t){var i;return e&&(i=g.getComputedStyle(e))?i[t]:""},Tl=function(e,r){var n=e.slice();e.sort(function(e,t){var i=r(e,t);return 0===i?n.indexOf(e)-n.indexOf(t):i})},Sl=function(e,t){var i=void 0,r=void 0;return e.attributes.BANDWIDTH&&(i=e.attributes.BANDWIDTH),i=i||g.Number.MAX_VALUE,t.attributes.BANDWIDTH&&(r=t.attributes.BANDWIDTH),i-(r=r||g.Number.MAX_VALUE)},kl=function(e,t,i){if(!e||!t)return!1;var r=i===e.segments.length;return e.endList&&"open"===t.readyState&&r},Cl=function(e){return"number"==typeof e&&isFinite(e)},El=function(e){function i(e){No(this,i);var t=Fo(this,(i.__proto__||Object.getPrototypeOf(i)).call(this));if(!e)throw new TypeError("Initialization settings are required");if("function"!=typeof e.currentTime)throw new TypeError("No currentTime getter specified");if(!e.mediaSource)throw new TypeError("No MediaSource specified");return t.bandwidth=e.bandwidth,t.throughput={rate:0,count:0},t.roundTrip=NaN,t.resetStats_(),t.mediaIndex=null,t.hasPlayed_=e.hasPlayed,t.currentTime_=e.currentTime,t.seekable_=e.seekable,t.seeking_=e.seeking,t.duration_=e.duration,t.mediaSource_=e.mediaSource,t.hls_=e.hls,t.loaderType_=e.loaderType,t.startingMedia_=void 0,t.segmentMetadataTrack_=e.segmentMetadataTrack,t.goalBufferLength_=e.goalBufferLength,t.sourceType_=e.sourceType,t.state_="INIT",t.checkBufferTimeout_=null,t.error_=void 0,t.currentTimeline_=-1,t.pendingSegment_=null,t.mimeType_=null,t.sourceUpdater_=null,t.xhrOptions_=null,t.activeInitSegmentId_=null,t.initSegments_={},t.decrypter_=e.decrypter,t.syncController_=e.syncController,t.syncPoint_={segmentIndex:0,time:0},t.syncController_.on("syncinfoupdate",function(){return t.trigger("syncinfoupdate")}),t.mediaSource_.addEventListener("sourceopen",function(){return t.ended_=!1}),t.fetchAtBuffer_=!1,t.logger_=rl("SegmentLoader["+t.loaderType_+"]"),Object.defineProperty(t,"state",{get:function(){return this.state_},set:function(e){e!==this.state_&&(this.logger_(this.state_+" -> "+e),this.state_=e)}}),t}return jo(i,La.EventTarget),Bo(i,[{key:"resetStats_",value:function(){this.mediaBytesTransferred=0,this.mediaRequests=0,this.mediaRequestsAborted=0,this.mediaRequestsTimedout=0,this.mediaRequestsErrored=0,this.mediaTransferDuration=0,this.mediaSecondsLoaded=0}},{key:"dispose",value:function(){this.state="DISPOSED",this.pause(),this.abort_(),this.sourceUpdater_&&this.sourceUpdater_.dispose(),this.resetStats_()}},{key:"abort",value:function(){"WAITING"===this.state?(this.abort_(),this.state="READY",this.paused()||this.monitorBuffer_()):this.pendingSegment_&&(this.pendingSegment_=null)}},{key:"abort_",value:function(){this.pendingSegment_&&this.pendingSegment_.abortRequests(),this.pendingSegment_=null}},{key:"error",value:function(e){return"undefined"!=typeof e&&(this.error_=e),this.pendingSegment_=null,this.error_}},{key:"endOfStream",value:function(){this.ended_=!0,this.pause(),this.trigger("ended")}},{key:"buffered_",value:function(){return this.sourceUpdater_?this.sourceUpdater_.buffered():La.createTimeRanges()}},{key:"initSegment",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!e)return null;var i=_u(e),r=this.initSegments_[i];return t&&!r&&e.bytes&&(this.initSegments_[i]=r={resolvedUri:e.resolvedUri,byterange:e.byterange,bytes:e.bytes}),r||e}},{key:"couldBeginLoading_",value:function(){return this.playlist_&&(this.sourceUpdater_||this.mimeType_&&"INIT"===this.state)&&!this.paused()}},{key:"load",value:function(){if(this.monitorBuffer_(),this.playlist_){if(this.syncController_.setDateTimeMapping(this.playlist_),"INIT"===this.state&&this.couldBeginLoading_())return this.init_();!this.couldBeginLoading_()||"READY"!==this.state&&"INIT"!==this.state||(this.state="READY")}}},{key:"init_",value:function(){return this.state="READY",this.sourceUpdater_=new al(this.mediaSource_,this.mimeType_,this.loaderType_,this.sourceBufferEmitter_),this.resetEverything(),this.monitorBuffer_()}},{key:"playlist",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(e){var i=this.playlist_,r=this.pendingSegment_;this.playlist_=e,this.xhrOptions_=t,this.hasPlayed_()||(e.syncInfo={mediaSequence:e.mediaSequence,time:0});var n=i?i.id:null;if(this.logger_("playlist update ["+n+" => "+e.id+"]"),this.trigger("syncinfoupdate"),"INIT"===this.state&&this.couldBeginLoading_())return this.init_();if(i&&i.uri===e.uri){var a=e.mediaSequence-i.mediaSequence;this.logger_("live window shift ["+a+"]"),null!==this.mediaIndex&&(this.mediaIndex-=a),r&&(r.mediaIndex-=a,0<=r.mediaIndex&&(r.segment=e.segments[r.mediaIndex])),this.syncController_.saveExpiredSegmentInfo(i,e)}else null!==this.mediaIndex&&this.resyncLoader()}}},{key:"pause",value:function(){this.checkBufferTimeout_&&(g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=null)}},{key:"paused",value:function(){return null===this.checkBufferTimeout_}},{key:"mimeType",value:function(e,t){this.mimeType_||(this.mimeType_=e,this.sourceBufferEmitter_=t,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_())}},{key:"resetEverything",value:function(){this.ended_=!1,this.resetLoader(),this.remove(0,this.duration_()),this.trigger("reseteverything")}},{key:"resetLoader",value:function(){this.fetchAtBuffer_=!1,this.resyncLoader()}},{key:"resyncLoader",value:function(){this.mediaIndex=null,this.syncPoint_=null,this.abort()}},{key:"remove",value:function(e,t){this.sourceUpdater_&&this.sourceUpdater_.remove(e,t),Lu(e,t,this.segmentMetadataTrack_)}},{key:"monitorBuffer_",value:function(){this.checkBufferTimeout_&&g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=g.setTimeout(this.monitorBufferTick_.bind(this),1)}},{key:"monitorBufferTick_",value:function(){"READY"===this.state&&this.fillBuffer_(),this.checkBufferTimeout_&&g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=g.setTimeout(this.monitorBufferTick_.bind(this),500)}},{key:"fillBuffer_",value:function(){if(!this.sourceUpdater_.updating()){this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()));var e=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_);if(e)kl(this.playlist_,this.mediaSource_,e.mediaIndex)?this.endOfStream():(e.mediaIndex!==this.playlist_.segments.length-1||"ended"!==this.mediaSource_.readyState||this.seeking_())&&((e.timeline!==this.currentTimeline_||null!==e.startOfSegment&&e.startOfSegment<this.sourceUpdater_.timestampOffset())&&(this.syncController_.reset(),e.timestampOffset=e.startOfSegment),this.loadSegment_(e))}}},{key:"checkBuffer_",value:function(e,t,i,r,n,a){var s=0,o=void 0;e.length&&(s=e.end(e.length-1));var u=Math.max(0,s-n);if(!t.segments.length)return null;if(u>=this.goalBufferLength_())return null;if(!r&&1<=u)return null;if(null===a)return i=this.getSyncSegmentCandidate_(t),this.generateSegmentInfo_(t,i,null,!0);if(null!==i){var l=t.segments[i];return o=l&&l.end?l.end:s,this.generateSegmentInfo_(t,i+1,o,!1)}if(this.fetchAtBuffer_){var c=du.getMediaInfoForTime(t,s,a.segmentIndex,a.time);i=c.mediaIndex,o=c.startTime}else{var h=du.getMediaInfoForTime(t,n,a.segmentIndex,a.time);i=h.mediaIndex,o=h.startTime}return this.generateSegmentInfo_(t,i,o,!1)}},{key:"getSyncSegmentCandidate_",value:function(e){var t=this;if(-1===this.currentTimeline_)return 0;var i=e.segments.map(function(e,t){return{timeline:e.timeline,segmentIndex:t}}).filter(function(e){return e.timeline===t.currentTimeline_});return i.length?i[Math.min(i.length-1,1)].segmentIndex:Math.max(e.segments.length-1,0)}},{key:"generateSegmentInfo_",value:function(e,t,i,r){if(t<0||t>=e.segments.length)return null;var n=e.segments[t];return{requestId:"segment-loader-"+Math.random(),uri:n.resolvedUri,mediaIndex:t,isSyncRequest:r,startOfSegment:i,playlist:e,bytes:null,encryptedBytes:null,timestampOffset:null,timeline:n.timeline,duration:n.duration,segment:n}}},{key:"abortRequestEarly_",value:function(e){if(this.hls_.tech_.paused()||!this.xhrOptions_.timeout||!this.playlist_.attributes.BANDWIDTH)return!1;if(Date.now()-(e.firstBytesReceivedAt||Date.now())<1e3)return!1;var t=this.currentTime_(),i=e.bandwidth,r=this.pendingSegment_.duration,n=du.estimateSegmentRequestTime(r,i,this.playlist_,e.bytesReceived),a=function(e,t){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return((e.length?e.end(e.length-1):0)-t)/i}(this.buffered_(),t,this.hls_.tech_.playbackRate())-1;if(n<=a)return!1;var s=function(e){var t=e.master,i=e.currentTime,r=e.bandwidth,n=e.duration,a=e.segmentDuration,s=e.timeUntilRebuffer,o=e.currentTimeline,u=e.syncController,l=t.playlists.filter(function(e){return!du.isIncompatible(e)}),c=l.filter(du.isEnabled);c.length||(c=l.filter(function(e){return!du.isDisabled(e)}));var h=c.filter(du.hasAttribute.bind(null,"BANDWIDTH")).map(function(e){var t=u.getSyncPoint(e,n,o,i)?1:2;return{playlist:e,rebufferingImpact:du.estimateSegmentRequestTime(a,r,e)*t-s}}),d=h.filter(function(e){return e.rebufferingImpact<=0});return Tl(d,function(e,t){return Sl(t.playlist,e.playlist)}),d.length?d[0]:(Tl(h,function(e,t){return e.rebufferingImpact-t.rebufferingImpact}),h[0]||null)}({master:this.hls_.playlists.master,currentTime:t,bandwidth:i,duration:this.duration_(),segmentDuration:r,timeUntilRebuffer:a,currentTimeline:this.currentTimeline_,syncController:this.syncController_});if(s){var o=n-a-s.rebufferingImpact,u=.5;return a<=Su&&(u=1),!s.playlist||s.playlist.uri===this.playlist_.uri||o<u?!1:(this.bandwidth=s.playlist.attributes.BANDWIDTH*sl.BANDWIDTH_VARIANCE+1,this.abort(),this.trigger("earlyabort"),!0)}}},{key:"handleProgress_",value:function(e,t){this.pendingSegment_&&t.requestId===this.pendingSegment_.requestId&&!this.abortRequestEarly_(t.stats)&&this.trigger("progress")}},{key:"loadSegment_",value:function(e){this.state="WAITING",this.pendingSegment_=e,this.trimBackBuffer_(e),e.abortRequests=ml(this.hls_.xhr,this.xhrOptions_,this.decrypter_,this.createSimplifiedSegmentObj_(e),this.handleProgress_.bind(this),this.segmentRequestFinished_.bind(this))}},{key:"trimBackBuffer_",value:function(e){var t,i,r,n,a=(t=this.seekable_(),i=this.currentTime_(),r=this.playlist_.targetDuration||10,n=void 0,n=t.length&&0<t.start(0)&&t.start(0)<i?t.start(0):i-30,Math.min(n,i-r));0<a&&this.remove(0,a)}},{key:"createSimplifiedSegmentObj_",value:function(e){var t=e.segment,i={resolvedUri:t.resolvedUri,byterange:t.byterange,requestId:e.requestId};if(t.key){var r=t.key.iv||new Uint32Array([0,0,0,e.mediaIndex+e.playlist.mediaSequence]);i.key={resolvedUri:t.key.resolvedUri,iv:r}}return t.map&&(i.map=this.initSegment(t.map)),i}},{key:"segmentRequestFinished_",value:function(e,t){if(this.mediaRequests+=1,t.stats&&(this.mediaBytesTransferred+=t.stats.bytesReceived,this.mediaTransferDuration+=t.stats.roundTripTime),this.pendingSegment_){if(t.requestId===this.pendingSegment_.requestId){if(e)return this.pendingSegment_=null,this.state="READY",e.code===ll?void(this.mediaRequestsAborted+=1):(this.pause(),e.code===ul?(this.mediaRequestsTimedout+=1,this.bandwidth=1,this.roundTrip=NaN,void this.trigger("bandwidthupdate")):(this.mediaRequestsErrored+=1,this.error(e),void this.trigger("error")));this.bandwidth=t.stats.bandwidth,this.roundTrip=t.stats.roundTripTime,t.map&&(t.map=this.initSegment(t.map,!0)),this.processSegmentResponse_(t)}}else this.mediaRequestsAborted+=1}},{key:"processSegmentResponse_",value:function(e){var t=this.pendingSegment_;t.bytes=e.bytes,e.map&&(t.segment.map.bytes=e.map.bytes),t.endOfAllRequests=e.endOfAllRequests,this.handleSegment_()}},{key:"handleSegment_",value:function(){var e=this;if(this.pendingSegment_){var t=this.pendingSegment_,i=t.segment,r=this.syncController_.probeSegmentInfo(t);"undefined"==typeof this.startingMedia_&&r&&(r.containsAudio||r.containsVideo)&&(this.startingMedia_={containsAudio:r.containsAudio,containsVideo:r.containsVideo});var n,a,s,o=(n=this.loaderType_,a=this.startingMedia_,s=r,"main"===n&&a&&s?s.containsAudio||s.containsVideo?a.containsVideo&&!s.containsVideo?"Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest.":!a.containsVideo&&s.containsVideo?"Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest.":null:"Neither audio nor video found in segment.":null);if(o)return this.error({message:o,blacklistDuration:1/0}),void this.trigger("error");if(t.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY");null!==t.timestampOffset&&t.timestampOffset!==this.sourceUpdater_.timestampOffset()&&(this.sourceUpdater_.timestampOffset(t.timestampOffset),this.trigger("timestampoffset"));var u,l,c,h,d,p,f,m,g,y,v,_=this.syncController_.mappingForTimeline(t.timeline);if(null!==_&&this.trigger({type:"segmenttimemapping",mapping:_}),this.state="APPENDING",i.map){var b=_u(i.map);if(!this.activeInitSegmentId_||this.activeInitSegmentId_!==b){var T=this.initSegment(i.map);this.sourceUpdater_.appendBuffer(T.bytes,function(){e.activeInitSegmentId_=b})}}t.byteLength=t.bytes.byteLength,"number"==typeof i.start&&"number"==typeof i.end?this.mediaSecondsLoaded+=i.end-i.start:this.mediaSecondsLoaded+=i.duration,this.logger_((l=(u=t).segment,c=l.start,h=l.end,d=u.playlist,p=d.mediaSequence,f=d.id,m=d.segments,g=void 0===m?[]:m,y=u.mediaIndex,v=u.timeline,["appending ["+y+"] of ["+p+", "+(p+g.length)+"] from playlist ["+f+"]","["+c+" => "+h+"] in timeline ["+v+"]"].join(" "))),this.sourceUpdater_.appendBuffer(t.bytes,this.handleUpdateEnd_.bind(this))}else this.state="READY"}},{key:"handleUpdateEnd_",value:function(){if(!this.pendingSegment_)return this.state="READY",void(this.paused()||this.monitorBuffer_());var e=this.pendingSegment_,t=e.segment,i=null!==this.mediaIndex;(this.pendingSegment_=null,this.recordThroughput_(e),this.addSegmentMetadataCue_(e),this.state="READY",this.mediaIndex=e.mediaIndex,this.fetchAtBuffer_=!0,this.currentTimeline_=e.timeline,this.trigger("syncinfoupdate"),t.end&&this.currentTime_()-t.end>3*e.playlist.targetDuration)?this.resetEverything():(i&&this.trigger("bandwidthupdate"),this.trigger("progress"),kl(e.playlist,this.mediaSource_,e.mediaIndex+1)&&this.endOfStream(),this.paused()||this.monitorBuffer_())}},{key:"recordThroughput_",value:function(e){var t=this.throughput.rate,i=Date.now()-e.endOfAllRequests+1,r=Math.floor(e.byteLength/i*8*1e3);this.throughput.rate+=(r-t)/++this.throughput.count}},{key:"addSegmentMetadataCue_",value:function(e){if(this.segmentMetadataTrack_){var t=e.segment,i=t.start,r=t.end;if(Cl(i)&&Cl(r)){Lu(i,r,this.segmentMetadataTrack_);var n=g.WebKitDataCue||g.VTTCue,a={bandwidth:e.playlist.attributes.BANDWIDTH,resolution:e.playlist.attributes.RESOLUTION,codecs:e.playlist.attributes.CODECS,byteLength:e.byteLength,uri:e.uri,timeline:e.timeline,playlist:e.playlist.uri,start:i,end:r},s=new n(i,r,JSON.stringify(a));s.value=a,this.segmentMetadataTrack_.addCue(s)}}}}]),i}(),wl=new Uint8Array("\n\n".split("").map(function(e){return e.charCodeAt(0)})),Al=function(e){return String.fromCharCode.apply(null,e)},Ll=function(e){function r(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};No(this,r);var i=Fo(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,t));return i.mediaSource_=null,i.subtitlesTrack_=null,i}return jo(r,El),Bo(r,[{key:"buffered_",value:function(){if(!this.subtitlesTrack_||!this.subtitlesTrack_.cues.length)return La.createTimeRanges();var e=this.subtitlesTrack_.cues,t=e[0].startTime,i=e[e.length-1].startTime;return La.createTimeRanges([[t,i]])}},{key:"initSegment",value:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!e)return null;var i=_u(e),r=this.initSegments_[i];if(t&&!r&&e.bytes){var n=wl.byteLength+e.bytes.byteLength,a=new Uint8Array(n);a.set(e.bytes),a.set(wl,e.bytes.byteLength),this.initSegments_[i]=r={resolvedUri:e.resolvedUri,byterange:e.byterange,bytes:a}}return r||e}},{key:"couldBeginLoading_",value:function(){return this.playlist_&&this.subtitlesTrack_&&!this.paused()}},{key:"init_",value:function(){return this.state="READY",this.resetEverything(),this.monitorBuffer_()}},{key:"track",value:function(e){return"undefined"==typeof e||(this.subtitlesTrack_=e,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_()),this.subtitlesTrack_}},{key:"remove",value:function(e,t){Lu(e,t,this.subtitlesTrack_)}},{key:"fillBuffer_",value:function(){var e=this;this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()));var t=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_);if(t=this.skipEmptySegments_(t)){if(null===this.syncController_.timestampOffsetForTimeline(t.timeline)){return this.syncController_.one("timestampoffset",function(){e.state="READY",e.paused()||e.monitorBuffer_()}),void(this.state="WAITING_ON_TIMELINE")}this.loadSegment_(t)}}},{key:"skipEmptySegments_",value:function(e){for(;e&&e.segment.empty;)e=this.generateSegmentInfo_(e.playlist,e.mediaIndex+1,e.startOfSegment+e.duration,e.isSyncRequest);return e}},{key:"handleSegment_",value:function(){var t=this;if(this.pendingSegment_&&this.subtitlesTrack_){this.state="APPENDING";var e=this.pendingSegment_,i=e.segment;if("function"!=typeof g.WebVTT&&this.subtitlesTrack_&&this.subtitlesTrack_.tech_){var r=function(){t.handleSegment_()};return this.state="WAITING_ON_VTTJS",this.subtitlesTrack_.tech_.one("vttjsloaded",r),void this.subtitlesTrack_.tech_.one("vttjserror",function(){t.subtitlesTrack_.tech_.off("vttjsloaded",r),t.error({message:"Error loading vtt.js"}),t.state="READY",t.pause(),t.trigger("error")})}i.requested=!0;try{this.parseVTTCues_(e)}catch(e){return this.error({message:e.message}),this.state="READY",this.pause(),this.trigger("error")}if(this.updateTimeMapping_(e,this.syncController_.timelines[e.timeline],this.playlist_),e.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY");e.byteLength=e.bytes.byteLength,this.mediaSecondsLoaded+=i.duration,e.cues.length&&this.remove(e.cues[0].endTime,e.cues[e.cues.length-1].endTime),e.cues.forEach(function(e){t.subtitlesTrack_.addCue(e)}),this.handleUpdateEnd_()}else this.state="READY"}},{key:"parseVTTCues_",value:function(t){var e=void 0,i=!1;"function"==typeof g.TextDecoder?e=new g.TextDecoder("utf8"):(e=g.WebVTT.StringDecoder(),i=!0);var r=new g.WebVTT.Parser(g,g.vttjs,e);if(t.cues=[],t.timestampmap={MPEGTS:0,LOCAL:0},r.oncue=t.cues.push.bind(t.cues),r.ontimestampmap=function(e){return t.timestampmap=e},r.onparsingerror=function(e){La.log.warn("Error encountered when parsing cues: "+e.message)},t.segment.map){var n=t.segment.map.bytes;i&&(n=Al(n)),r.parse(n)}var a=t.bytes;i&&(a=Al(a)),r.parse(a),r.flush()}},{key:"updateTimeMapping_",value:function(e,t,i){var r=e.segment;if(t)if(e.cues.length){var n=e.timestampmap,a=n.MPEGTS/9e4-n.LOCAL+t.mapping;if(e.cues.forEach(function(e){e.startTime+=a,e.endTime+=a}),!i.syncInfo){var s=e.cues[0].startTime,o=e.cues[e.cues.length-1].startTime;i.syncInfo={mediaSequence:i.mediaSequence+e.mediaIndex,time:Math.min(s,o-r.duration)}}}else r.empty=!0}}]),r}(),Pl=function(e,t){for(var i=e.cues,r=0;r<i.length;r++){var n=i[r];if(t>=n.adStartTime&&t<=n.adEndTime)return n}return null},Ol=Co,Il=[{name:"VOD",run:function(e,t,i,r,n){if(i!==1/0){return{time:0,segmentIndex:0}}return null}},{name:"ProgramDateTime",run:function(e,t,i,r,n){if(!e.datetimeToDisplayTime)return null;var a=t.segments||[],s=null,o=null;n=n||0;for(var u=0;u<a.length;u++){var l=a[u];if(l.dateTimeObject){var c=l.dateTimeObject.getTime()/1e3+e.datetimeToDisplayTime,h=Math.abs(n-c);if(null!==o&&o<h)break;o=h,s={time:c,segmentIndex:u}}}return s}},{name:"Segment",run:function(e,t,i,r,n){var a=t.segments||[],s=null,o=null;n=n||0;for(var u=0;u<a.length;u++){var l=a[u];if(l.timeline===r&&"undefined"!=typeof l.start){var c=Math.abs(n-l.start);if(null!==o&&o<c)break;(!s||null===o||c<=o)&&(o=c,s={time:l.start,segmentIndex:u})}}return s}},{name:"Discontinuity",run:function(e,t,i,r,n){var a=null;if(n=n||0,t.discontinuityStarts&&t.discontinuityStarts.length)for(var s=null,o=0;o<t.discontinuityStarts.length;o++){var u=t.discontinuityStarts[o],l=t.discontinuitySequence+o+1,c=e.discontinuities[l];if(c){var h=Math.abs(n-c.time);if(null!==s&&s<h)break;(!a||null===s||h<=s)&&(s=h,a={time:c.time,segmentIndex:u})}}return a}},{name:"Playlist",run:function(e,t,i,r,n){return t.syncInfo?{time:t.syncInfo.time,segmentIndex:t.syncInfo.mediaSequence-t.mediaSequence}:null}}],xl=function(e){function t(){No(this,t);var e=Fo(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.inspectCache_=void 0,e.timelines=[],e.discontinuities=[],e.datetimeToDisplayTime=null,e.logger_=rl("SyncController"),e}return jo(t,La.EventTarget),Bo(t,[{key:"getSyncPoint",value:function(e,t,i,r){var n=this.runStrategies_(e,t,i,r);return n.length?this.selectSyncPoint_(n,{key:"time",value:r}):null}},{key:"getExpiredTime",value:function(e,t){if(!e||!e.segments)return null;var i=this.runStrategies_(e,t,e.discontinuitySequence,0);if(!i.length)return null;var r=this.selectSyncPoint_(i,{key:"segmentIndex",value:0});return 0<r.segmentIndex&&(r.time*=-1),Math.abs(r.time+eu(e,r.segmentIndex,0))}},{key:"runStrategies_",value:function(e,t,i,r){for(var n=[],a=0;a<Il.length;a++){var s=Il[a],o=s.run(this,e,t,i,r);o&&(o.strategy=s.name,n.push({strategy:s.name,syncPoint:o}))}return n}},{key:"selectSyncPoint_",value:function(e,t){for(var i=e[0].syncPoint,r=Math.abs(e[0].syncPoint[t.key]-t.value),n=e[0].strategy,a=1;a<e.length;a++){var s=Math.abs(e[a].syncPoint[t.key]-t.value);s<r&&(r=s,i=e[a].syncPoint,n=e[a].strategy)}return this.logger_("syncPoint for ["+t.key+": "+t.value+"] chosen with strategy ["+n+"]: [time:"+i.time+", segmentIndex:"+i.segmentIndex+"]"),i}},{key:"saveExpiredSegmentInfo",value:function(e,t){for(var i=t.mediaSequence-e.mediaSequence-1;0<=i;i--){var r=e.segments[i];if(r&&"undefined"!=typeof r.start){t.syncInfo={mediaSequence:e.mediaSequence+i,time:r.start},this.logger_("playlist refresh sync: [time:"+t.syncInfo.time+", mediaSequence: "+t.syncInfo.mediaSequence+"]"),this.trigger("syncinfoupdate");break}}}},{key:"setDateTimeMapping",value:function(e){if(!this.datetimeToDisplayTime&&e.segments&&e.segments.length&&e.segments[0].dateTimeObject){var t=e.segments[0].dateTimeObject.getTime()/1e3;this.datetimeToDisplayTime=-t}}},{key:"reset",value:function(){this.inspectCache_=void 0}},{key:"probeSegmentInfo",value:function(e){var t=e.segment,i=e.playlist,r=void 0;return(r=t.map?this.probeMp4Segment_(e):this.probeTsSegment_(e))&&this.calculateSegmentTimeMapping_(e,r)&&(this.saveDiscontinuitySyncInfo_(e),i.syncInfo||(i.syncInfo={mediaSequence:i.mediaSequence+e.mediaIndex,time:t.start})),r}},{key:"probeMp4Segment_",value:function(e){var t=e.segment,i=Os(t.map.bytes),r=Is(i,e.bytes);return null!==e.timestampOffset&&(e.timestampOffset-=r),{start:r,end:r+t.duration}}},{key:"probeTsSegment_",value:function(e){var t=Ol(e.bytes,this.inspectCache_),i=void 0,r=void 0;return t?(t.video&&2===t.video.length?(this.inspectCache_=t.video[1].dts,i=t.video[0].dtsTime,r=t.video[1].dtsTime):t.audio&&2===t.audio.length&&(this.inspectCache_=t.audio[1].dts,i=t.audio[0].dtsTime,r=t.audio[1].dtsTime),{start:i,end:r,containsVideo:t.video&&2===t.video.length,containsAudio:t.audio&&2===t.audio.length}):null}},{key:"timestampOffsetForTimeline",value:function(e){return"undefined"==typeof this.timelines[e]?null:this.timelines[e].time}},{key:"mappingForTimeline",value:function(e){return"undefined"==typeof this.timelines[e]?null:this.timelines[e].mapping}},{key:"calculateSegmentTimeMapping_",value:function(e,t){var i=e.segment,r=this.timelines[e.timeline];if(null!==e.timestampOffset)r={time:e.startOfSegment,mapping:e.startOfSegment-t.start},this.timelines[e.timeline]=r,this.trigger("timestampoffset"),this.logger_("time mapping for timeline "+e.timeline+": [time: "+r.time+"] [mapping: "+r.mapping+"]"),i.start=e.startOfSegment,i.end=t.end+r.mapping;else{if(!r)return!1;i.start=t.start+r.mapping,i.end=t.end+r.mapping}return!0}},{key:"saveDiscontinuitySyncInfo_",value:function(e){var t=e.playlist,i=e.segment;if(i.discontinuity)this.discontinuities[i.timeline]={time:i.start,accuracy:0};else if(t.discontinuityStarts&&t.discontinuityStarts.length)for(var r=0;r<t.discontinuityStarts.length;r++){var n=t.discontinuityStarts[r],a=t.discontinuitySequence+r+1,s=n-e.mediaIndex,o=Math.abs(s);if(!this.discontinuities[a]||this.discontinuities[a].accuracy>o){var u=void 0;u=s<0?i.start-eu(t,e.mediaIndex,n):i.end+eu(t,e.mediaIndex+1,n),this.discontinuities[a]={time:u,accuracy:o}}}}}]),t}(),Dl=new Nu("./decrypter-worker.worker.js",function(e,t){var i,a,h,r,n,d,p,g,s,l,y,o,u=this;i="undefined"!=typeof e?e:"undefined"!=typeof global?global:"undefined"!=typeof u?u:{},a="undefined"!=typeof e?e:"undefined"!=typeof i?i:"undefined"!=typeof u?u:{},h=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},r=function(){function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,i){return t&&r(e.prototype,t),i&&r(e,i),e}}(),n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==("undefined"==typeof t?"undefined":v(t))&&"function"!=typeof t?e:t},d=function(){var e=[[[],[],[],[],[]],[[],[],[],[],[]]],t=e[0],i=e[1],r=t[4],n=i[4],a=void 0,s=void 0,o=void 0,u=[],l=[],c=void 0,h=void 0,d=void 0,p=void 0,f=void 0;for(a=0;a<256;a++)l[(u[a]=a<<1^283*(a>>7))^a]=a;for(s=o=0;!r[s];s^=c||1,o=l[o]||1)for(d=(d=o^o<<1^o<<2^o<<3^o<<4)>>8^255&d^99,f=16843009*u[h=u[c=u[n[r[s]=d]=s]]]^65537*h^257*c^16843008*s,p=257*u[d]^16843008*d,a=0;a<4;a++)t[a][s]=p=p<<24^p>>>8,i[a][d]=f=f<<24^f>>>8;for(a=0;a<5;a++)t[a]=t[a].slice(0),i[a]=i[a].slice(0);return e},p=null,g=function(){function c(e){h(this,c),p||(p=d()),this._tables=[[p[0][0].slice(),p[0][1].slice(),p[0][2].slice(),p[0][3].slice(),p[0][4].slice()],[p[1][0].slice(),p[1][1].slice(),p[1][2].slice(),p[1][3].slice(),p[1][4].slice()]];var t=void 0,i=void 0,r=void 0,n=void 0,a=void 0,s=this._tables[0][4],o=this._tables[1],u=e.length,l=1;if(4!==u&&6!==u&&8!==u)throw new Error("Invalid aes key size");for(n=e.slice(0),a=[],this._key=[n,a],t=u;t<4*u+28;t++)r=n[t-1],(t%u==0||8===u&&t%u==4)&&(r=s[r>>>24]<<24^s[r>>16&255]<<16^s[r>>8&255]<<8^s[255&r],t%u==0&&(r=r<<8^r>>>24^l<<24,l=l<<1^283*(l>>7))),n[t]=n[t-u]^r;for(i=0;t;i++,t--)r=n[3&i?t:t-4],a[i]=t<=4||i<4?r:o[0][s[r>>>24]]^o[1][s[r>>16&255]]^o[2][s[r>>8&255]]^o[3][s[255&r]]}return c.prototype.decrypt=function(e,t,i,r,n,a){var s=this._key[1],o=e^s[0],u=r^s[1],l=i^s[2],c=t^s[3],h=void 0,d=void 0,p=void 0,f=s.length/4-2,m=void 0,g=4,y=this._tables[1],v=y[0],_=y[1],b=y[2],T=y[3],S=y[4];for(m=0;m<f;m++)h=v[o>>>24]^_[u>>16&255]^b[l>>8&255]^T[255&c]^s[g],d=v[u>>>24]^_[l>>16&255]^b[c>>8&255]^T[255&o]^s[g+1],p=v[l>>>24]^_[c>>16&255]^b[o>>8&255]^T[255&u]^s[g+2],c=v[c>>>24]^_[o>>16&255]^b[u>>8&255]^T[255&l]^s[g+3],g+=4,o=h,u=d,l=p;for(m=0;m<4;m++)n[(3&-m)+a]=S[o>>>24]<<24^S[u>>16&255]<<16^S[l>>8&255]<<8^S[255&c]^s[g++],h=o,o=u,u=l,l=c,c=h},c}(),s=function(){function e(){h(this,e),this.listeners={}}return e.prototype.on=function(e,t){this.listeners[e]||(this.listeners[e]=[]),this.listeners[e].push(t)},e.prototype.off=function(e,t){if(!this.listeners[e])return!1;var i=this.listeners[e].indexOf(t);return this.listeners[e].splice(i,1),-1<i},e.prototype.trigger=function(e){var t=this.listeners[e];if(t)if(2===arguments.length)for(var i=t.length,r=0;r<i;++r)t[r].call(this,arguments[1]);else for(var n=Array.prototype.slice.call(arguments,1),a=t.length,s=0;s<a;++s)t[s].apply(this,n)},e.prototype.dispose=function(){this.listeners={}},e.prototype.pipe=function(t){this.on("data",function(e){t.push(e)})},e}(),l=function(t){function i(){h(this,i);var e=n(this,t.call(this,s));return e.jobs=[],e.delay=1,e.timeout_=null,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof t?"undefined":v(t)));e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(i,t),i.prototype.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},i.prototype.push=function(e){this.jobs.push(e),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},i}(s),y=function(e){return e<<24|(65280&e)<<8|(16711680&e)>>8|e>>>24},o=function(){function u(e,t,i,r){h(this,u);var n=u.STEP,a=new Int32Array(e.buffer),s=new Uint8Array(e.byteLength),o=0;for(this.asyncStream_=new l,this.asyncStream_.push(this.decryptChunk_(a.subarray(o,o+n),t,i,s)),o=n;o<a.length;o+=n)i=new Uint32Array([y(a[o-4]),y(a[o-3]),y(a[o-2]),y(a[o-1])]),this.asyncStream_.push(this.decryptChunk_(a.subarray(o,o+n),t,i,s));this.asyncStream_.push(function(){var e;r(null,(e=s).subarray(0,e.byteLength-e[e.byteLength-1]))})}return u.prototype.decryptChunk_=function(t,i,r,n){return function(){var e=function(e,t,i){var r=new Int32Array(e.buffer,e.byteOffset,e.byteLength>>2),n=new g(Array.prototype.slice.call(t)),a=new Uint8Array(e.byteLength),s=new Int32Array(a.buffer),o=void 0,u=void 0,l=void 0,c=void 0,h=void 0,d=void 0,p=void 0,f=void 0,m=void 0;for(o=i[0],u=i[1],l=i[2],c=i[3],m=0;m<r.length;m+=4)h=y(r[m]),d=y(r[m+1]),p=y(r[m+2]),f=y(r[m+3]),n.decrypt(h,d,p,f,s,m),s[m]=y(s[m]^o),s[m+1]=y(s[m+1]^u),s[m+2]=y(s[m+2]^l),s[m+3]=y(s[m+3]^c),o=h,u=d,l=p,c=f;return a}(t,i,r);n.set(e,t.byteOffset)}},r(u,null,[{key:"STEP",get:function(){return 32e3}}]),u}(),new function(e){e.onmessage=function(e){var n=e.data,t=new Uint8Array(n.encrypted.bytes,n.encrypted.byteOffset,n.encrypted.byteLength),i=new Uint32Array(n.key.bytes,n.key.byteOffset,n.key.byteLength/4),r=new Uint32Array(n.iv.bytes,n.iv.byteOffset,n.iv.byteLength/4);new o(t,i,r,function(e,t){var i,r;a.postMessage((i={source:n.source,decrypted:t},r={},Object.keys(i).forEach(function(e){var t=i[e];ArrayBuffer.isView(t)?r[e]={bytes:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength}:r[e]=t}),r),[t.buffer])})}}(u)}),Rl=function(e,t){e.abort(),e.pause(),t&&t.activePlaylistLoader&&(t.activePlaylistLoader.pause(),t.activePlaylistLoader=null)},Ml=function(e,t){(t.activePlaylistLoader=e).load()},Ul={AUDIO:function(u,l){return function(){var e=l.segmentLoaders[u],t=l.mediaTypes[u],i=l.blacklistCurrentPlaylist;Rl(e,t);var r=t.activeTrack(),n=t.activeGroup(),a=(n.filter(function(e){return e.default})[0]||n[0]).id,s=t.tracks[a];if(r!==s){for(var o in La.log.warn("Problem encountered loading the alternate audio track.Switching back to default."),t.tracks)t.tracks[o].enabled=t.tracks[o]===s;t.onTrackChanged()}else i({message:"Problem encountered loading the default audio track."})}},SUBTITLES:function(r,n){return function(){var e=n.segmentLoaders[r],t=n.mediaTypes[r];La.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."),Rl(e,t);var i=t.activeTrack();i&&(i.mode="disabled"),t.onTrackChanged()}}},Nl={AUDIO:function(e,t,i){if(t){var r=i.tech,n=i.requestOptions,a=i.segmentLoaders[e];t.on("loadedmetadata",function(){var e=t.media();a.playlist(e,n),(!r.paused()||e.endList&&"none"!==r.preload())&&a.load()}),t.on("loadedplaylist",function(){a.playlist(t.media(),n),r.paused()||a.load()}),t.on("error",Ul[e](e,i))}},SUBTITLES:function(e,t,i){var r=i.tech,n=i.requestOptions,a=i.segmentLoaders[e],s=i.mediaTypes[e];t.on("loadedmetadata",function(){var e=t.media();a.playlist(e,n),a.track(s.activeTrack()),(!r.paused()||e.endList&&"none"!==r.preload())&&a.load()}),t.on("loadedplaylist",function(){a.playlist(t.media(),n),r.paused()||a.load()}),t.on("error",Ul[e](e,i))}},Bl=function(t,i){return function(e){return e.attributes[t]===i}},jl=function(t){return function(e){return e.resolvedUri===t}},Fl={AUDIO:function(e,t){var i,r,n=t.hls,a=t.sourceType,s=t.segmentLoaders[e],o=t.requestOptions.withCredentials,u=t.master,l=u.mediaGroups,c=u.playlists,h=t.mediaTypes[e],d=h.groups,p=h.tracks,f=t.masterPlaylistLoader;for(var m in l[e]&&0!==Object.keys(l[e]).length||(l[e]={main:{default:{default:!0}}}),l[e]){d[m]||(d[m]=[]);var g=c.filter(Bl(e,m));for(var y in l[e][m]){var v=l[e][m][y];g.filter(jl(v.resolvedUri)).length&&delete v.resolvedUri;var _=void 0;if(_=v.resolvedUri?new Ko(v.resolvedUri,n,o):v.playlists&&"dash"===a?new il(v.playlists[0],n,o,f):null,v=La.mergeOptions({id:y,playlistLoader:_},v),Nl[e](e,v.playlistLoader,t),d[m].push(v),"undefined"==typeof p[y]){var b=new La.AudioTrack({id:y,kind:(i=v,r=void 0,r=i.default?"main":"alternative",i.characteristics&&0<=i.characteristics.indexOf("public.accessibility.describes-video")&&(r="main-desc"),r),enabled:!1,language:v.language,default:v.default,label:y});p[y]=b}}}s.on("error",Ul[e](e,t))},SUBTITLES:function(e,t){var i=t.tech,r=t.hls,n=t.sourceType,a=t.segmentLoaders[e],s=t.requestOptions.withCredentials,o=t.master.mediaGroups,u=t.mediaTypes[e],l=u.groups,c=u.tracks,h=t.masterPlaylistLoader;for(var d in o[e])for(var p in l[d]||(l[d]=[]),o[e][d])if(!o[e][d][p].forced){var f=o[e][d][p],m=void 0;if("hls"===n?m=new Ko(f.resolvedUri,r,s):"dash"===n&&(m=new il(f.playlists[0],r,s,h)),f=La.mergeOptions({id:p,playlistLoader:m},f),Nl[e](e,f.playlistLoader,t),l[d].push(f),"undefined"==typeof c[p]){var g=i.addRemoteTextTrack({id:p,kind:"subtitles",enabled:!1,language:f.language,label:p},!1).track;c[p]=g}}a.on("error",Ul[e](e,t))},"CLOSED-CAPTIONS":function(e,t){var i=t.tech,r=t.master.mediaGroups,n=t.mediaTypes[e],a=n.groups,s=n.tracks;for(var o in r[e])for(var u in a[o]||(a[o]=[]),r[e][o]){var l=r[e][o][u];if(l.instreamId.match(/CC\d/)&&(a[o].push(La.mergeOptions({id:u},l)),"undefined"==typeof s[u])){var c=i.addRemoteTextTrack({id:l.instreamId,kind:"captions",enabled:!1,language:l.language,label:u},!1).track;s[u]=c}}}},Hl={AUDIO:function(i,r){return function(){var e=r.mediaTypes[i].tracks;for(var t in e)if(e[t].enabled)return e[t];return null}},SUBTITLES:function(i,r){return function(){var e=r.mediaTypes[i].tracks;for(var t in e)if("showing"===e[t].mode)return e[t];return null}}},Vl=function(t){["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach(function(e){Fl[e](e,t)});var i=t.mediaTypes,e=t.masterPlaylistLoader,r=t.tech,n=t.hls;["AUDIO","SUBTITLES"].forEach(function(e){var a,s,o,u,l,c;i[e].activeGroup=(a=e,s=t,function(t){var e=s.masterPlaylistLoader,i=s.mediaTypes[a].groups,r=e.media();if(!r)return null;var n=null;return r.attributes[a]&&(n=i[r.attributes[a]]),n=n||i.main,"undefined"==typeof t?n:null===t?null:n.filter(function(e){return e.id===t.id})[0]||null}),i[e].activeTrack=Hl[e](e,t),i[e].onGroupChanged=(o=e,u=t,function(){var e=u.segmentLoaders,t=e[o],i=e.main,r=u.mediaTypes[o],n=r.activeTrack(),a=r.activeGroup(n),s=r.activePlaylistLoader;Rl(t,r),a&&(a.playlistLoader?(t.resyncLoader(),Ml(a.playlistLoader,r)):s&&i.resetEverything())}),i[e].onTrackChanged=(l=e,c=t,function(){var e=c.segmentLoaders,t=e[l],i=e.main,r=c.mediaTypes[l],n=r.activeTrack(),a=r.activeGroup(n),s=r.activePlaylistLoader;Rl(t,r),a&&(a.playlistLoader?(s!==a.playlistLoader&&(t.track&&t.track(n),t.resetEverything()),Ml(a.playlistLoader,r)):i.resetEverything())})});var a=i.AUDIO.activeGroup(),s=(a.filter(function(e){return e.default})[0]||a[0]).id;i.AUDIO.tracks[s].enabled=!0,i.AUDIO.onTrackChanged(),e.on("mediachange",function(){["AUDIO","SUBTITLES"].forEach(function(e){return i[e].onGroupChanged()})});var o=function(){i.AUDIO.onTrackChanged(),r.trigger({type:"usage",name:"hls-audio-change"})};for(var u in r.audioTracks().addEventListener("change",o),r.remoteTextTracks().addEventListener("change",i.SUBTITLES.onTrackChanged),n.on("dispose",function(){r.audioTracks().removeEventListener("change",o),r.remoteTextTracks().removeEventListener("change",i.SUBTITLES.onTrackChanged)}),r.clearTracks("audio"),i.AUDIO.tracks)r.audioTracks().addTrack(i.AUDIO.tracks[u])},ql=function(){var t={};return["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach(function(e){t[e]={groups:{},tracks:{},activePlaylistLoader:null,activeGroup:nl,activeTrack:nl,onGroupChanged:nl,onTrackChanged:nl}}),t},Wl=void 0,zl=["mediaRequests","mediaRequestsAborted","mediaRequestsTimedout","mediaRequestsErrored","mediaTransferDuration","mediaBytesTransferred"],Gl=function(e){return this.audioSegmentLoader_[e]+this.mainSegmentLoader_[e]},Xl=function(e){function d(e){No(this,d);var t=Fo(this,(d.__proto__||Object.getPrototypeOf(d)).call(this)),i=e.url,r=e.withCredentials,n=e.tech,a=e.bandwidth,s=e.externHls,o=e.useCueTags,u=e.blacklistDuration,l=e.enableLowInitialPlaylist,c=e.sourceType;if(!i)throw new Error("A non-empty playlist URL is required");Wl=s,t.withCredentials=r,t.tech_=n,t.hls_=n.hls,t.sourceType_=c,t.useCueTags_=o,t.blacklistDuration=u,t.enableLowInitialPlaylist=l,t.useCueTags_&&(t.cueTagsTrack_=t.tech_.addTextTrack("metadata","ad-cues"),t.cueTagsTrack_.inBandMetadataTrackDispatchType=""),t.requestOptions_={withCredentials:t.withCredentials,timeout:null},t.mediaTypes_=ql(),t.mediaSource=new La.MediaSource,t.mediaSource.addEventListener("sourceopen",t.handleSourceOpen_.bind(t)),t.seekable_=La.createTimeRanges(),t.hasPlayed_=function(){return!1},t.syncController_=new xl(e),t.segmentMetadataTrack_=n.addRemoteTextTrack({kind:"metadata",label:"segment-metadata"},!1).track,t.decrypter_=new Dl;var h={hls:t.hls_,mediaSource:t.mediaSource,currentTime:t.tech_.currentTime.bind(t.tech_),seekable:function(){return t.seekable()},seeking:function(){return t.tech_.seeking()},duration:function(){return t.mediaSource.duration},hasPlayed:function(){return t.hasPlayed_()},goalBufferLength:function(){return t.goalBufferLength()},bandwidth:a,syncController:t.syncController_,decrypter:t.decrypter_,sourceType:t.sourceType_};return t.masterPlaylistLoader_="dash"===t.sourceType_?new il(i,t.hls_,t.withCredentials):new Ko(i,t.hls_,t.withCredentials),t.setupMasterPlaylistLoaderListeners_(),t.mainSegmentLoader_=new El(La.mergeOptions(h,{segmentMetadataTrack:t.segmentMetadataTrack_,loaderType:"main"}),e),t.audioSegmentLoader_=new El(La.mergeOptions(h,{loaderType:"audio"}),e),t.subtitleSegmentLoader_=new Ll(La.mergeOptions(h,{loaderType:"vtt"}),e),t.setupSegmentLoaderListeners_(),zl.forEach(function(e){t[e+"_"]=Gl.bind(t,e)}),t.logger_=rl("MPC"),t.masterPlaylistLoader_.load(),t}return jo(d,La.EventTarget),Bo(d,[{key:"setupMasterPlaylistLoaderListeners_",value:function(){var r=this;this.masterPlaylistLoader_.on("loadedmetadata",function(){var e=r.masterPlaylistLoader_.media(),t=1.5*r.masterPlaylistLoader_.targetDuration*1e3;hu(r.masterPlaylistLoader_.master,r.masterPlaylistLoader_.media())?r.requestOptions_.timeout=0:r.requestOptions_.timeout=t,e.endList&&"none"!==r.tech_.preload()&&(r.mainSegmentLoader_.playlist(e,r.requestOptions_),r.mainSegmentLoader_.load()),Vl({sourceType:r.sourceType_,segmentLoaders:{AUDIO:r.audioSegmentLoader_,SUBTITLES:r.subtitleSegmentLoader_,main:r.mainSegmentLoader_},tech:r.tech_,requestOptions:r.requestOptions_,masterPlaylistLoader:r.masterPlaylistLoader_,hls:r.hls_,master:r.master(),mediaTypes:r.mediaTypes_,blacklistCurrentPlaylist:r.blacklistCurrentPlaylist.bind(r)}),r.triggerPresenceUsage_(r.master(),e);try{r.setupSourceBuffers_()}catch(e){return La.log.warn("Failed to create SourceBuffers",e),r.mediaSource.endOfStream("decode")}r.setupFirstPlay(),r.trigger("selectedinitialmedia")}),this.masterPlaylistLoader_.on("loadedplaylist",function(){var e=r.masterPlaylistLoader_.media();if(!e){r.excludeUnsupportedVariants_();var t=void 0;return r.enableLowInitialPlaylist&&(t=r.selectInitialPlaylist()),t||(t=r.selectPlaylist()),r.initialMedia_=t,void r.masterPlaylistLoader_.media(r.initialMedia_)}if(r.useCueTags_&&r.updateAdCues_(e),r.mainSegmentLoader_.playlist(e,r.requestOptions_),r.updateDuration(),r.tech_.paused()||r.mainSegmentLoader_.load(),!e.endList){var i=function(){var e=r.seekable();0!==e.length&&r.mediaSource.addSeekableRange_(e.start(0),e.end(0))};if(r.duration()!==1/0){r.tech_.one("durationchange",function e(){r.duration()===1/0?i():r.tech_.one("durationchange",e)})}else i()}}),this.masterPlaylistLoader_.on("error",function(){r.blacklistCurrentPlaylist(r.masterPlaylistLoader_.error)}),this.masterPlaylistLoader_.on("mediachanging",function(){r.mainSegmentLoader_.abort(),r.mainSegmentLoader_.pause()}),this.masterPlaylistLoader_.on("mediachange",function(){var e=r.masterPlaylistLoader_.media(),t=1.5*r.masterPlaylistLoader_.targetDuration*1e3;hu(r.masterPlaylistLoader_.master,r.masterPlaylistLoader_.media())?r.requestOptions_.timeout=0:r.requestOptions_.timeout=t,r.mainSegmentLoader_.playlist(e,r.requestOptions_),r.mainSegmentLoader_.load(),r.tech_.trigger({type:"mediachange",bubbles:!0})}),this.masterPlaylistLoader_.on("playlistunchanged",function(){var e=r.masterPlaylistLoader_.media();r.stuckAtPlaylistEnd_(e)&&(r.blacklistCurrentPlaylist({message:"Playlist no longer updating."}),r.tech_.trigger("playliststuck"))}),this.masterPlaylistLoader_.on("renditiondisabled",function(){r.tech_.trigger({type:"usage",name:"hls-rendition-disabled"})}),this.masterPlaylistLoader_.on("renditionenabled",function(){r.tech_.trigger({type:"usage",name:"hls-rendition-enabled"})})}},{key:"triggerPresenceUsage_",value:function(e,t){var i=e.mediaGroups||{},r=!0,n=Object.keys(i.AUDIO);for(var a in i.AUDIO)for(var s in i.AUDIO[a]){i.AUDIO[a][s].uri||(r=!1)}r&&this.tech_.trigger({type:"usage",name:"hls-demuxed"}),Object.keys(i.SUBTITLES).length&&this.tech_.trigger({type:"usage",name:"hls-webvtt"}),Wl.Playlist.isAes(t)&&this.tech_.trigger({type:"usage",name:"hls-aes"}),Wl.Playlist.isFmp4(t)&&this.tech_.trigger({type:"usage",name:"hls-fmp4"}),n.length&&1<Object.keys(i.AUDIO[n[0]]).length&&this.tech_.trigger({type:"usage",name:"hls-alternate-audio"}),this.useCueTags_&&this.tech_.trigger({type:"usage",name:"hls-playlist-cue-tags"})}},{key:"setupSegmentLoaderListeners_",value:function(){var a=this;this.mainSegmentLoader_.on("bandwidthupdate",function(){var e=a.selectPlaylist(),t=a.masterPlaylistLoader_.media(),i=a.tech_.buffered(),r=i.length?i.end(i.length-1)-a.tech_.currentTime():0,n=a.bufferLowWaterLine();(!t.endList||a.duration()<sl.MAX_BUFFER_LOW_WATER_LINE||e.attributes.BANDWIDTH<t.attributes.BANDWIDTH||n<=r)&&a.masterPlaylistLoader_.media(e),a.tech_.trigger("bandwidthupdate")}),this.mainSegmentLoader_.on("progress",function(){a.trigger("progress")}),this.mainSegmentLoader_.on("error",function(){a.blacklistCurrentPlaylist(a.mainSegmentLoader_.error())}),this.mainSegmentLoader_.on("syncinfoupdate",function(){a.onSyncInfoUpdate_()}),this.mainSegmentLoader_.on("timestampoffset",function(){a.tech_.trigger({type:"usage",name:"hls-timestamp-offset"})}),this.audioSegmentLoader_.on("syncinfoupdate",function(){a.onSyncInfoUpdate_()}),this.mainSegmentLoader_.on("ended",function(){a.onEndOfStream()}),this.mainSegmentLoader_.on("earlyabort",function(){a.blacklistCurrentPlaylist({message:"Aborted early because there isn't enough bandwidth to complete the request without rebuffering."},120)}),this.mainSegmentLoader_.on("reseteverything",function(){a.tech_.trigger("hls-reset")}),this.mainSegmentLoader_.on("segmenttimemapping",function(e){a.tech_.trigger({type:"hls-segment-time-mapping",mapping:e.mapping})}),this.audioSegmentLoader_.on("ended",function(){a.onEndOfStream()})}},{key:"mediaSecondsLoaded_",value:function(){return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded+this.mainSegmentLoader_.mediaSecondsLoaded)}},{key:"load",value:function(){this.mainSegmentLoader_.load(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.load(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.load()}},{key:"fastQualityChange_",value:function(){var e=this.selectPlaylist();e!==this.masterPlaylistLoader_.media()&&(this.masterPlaylistLoader_.media(e),this.mainSegmentLoader_.resetLoader())}},{key:"play",value:function(){if(!this.setupFirstPlay()){this.tech_.ended()&&this.tech_.setCurrentTime(0),this.hasPlayed_()&&this.load();var e=this.tech_.seekable();return this.tech_.duration()===1/0&&this.tech_.currentTime()<e.start(0)?this.tech_.setCurrentTime(e.end(e.length-1)):void 0}}},{key:"setupFirstPlay",value:function(){var e=this,t=this.masterPlaylistLoader_.media();if(!t||this.tech_.paused()||this.hasPlayed_())return!1;if(!t.endList){var i=this.seekable();if(!i.length)return!1;if(La.browser.IE_VERSION&&0===this.tech_.readyState())return this.tech_.one("loadedmetadata",function(){e.trigger("firstplay"),e.tech_.setCurrentTime(i.end(0)),e.hasPlayed_=function(){return!0}}),!1;this.trigger("firstplay"),this.tech_.setCurrentTime(i.end(0))}return this.hasPlayed_=function(){return!0},this.load(),!0}},{key:"handleSourceOpen_",value:function(){try{this.setupSourceBuffers_()}catch(e){return La.log.warn("Failed to create Source Buffers",e),this.mediaSource.endOfStream("decode")}if(this.tech_.autoplay()){var e=this.tech_.play();"undefined"!=typeof e&&"function"==typeof e.then&&e.then(null,function(e){})}this.trigger("sourceopen")}},{key:"onEndOfStream",value:function(){var e=this.mainSegmentLoader_.ended_;this.mediaTypes_.AUDIO.activePlaylistLoader&&(e=!this.mainSegmentLoader_.startingMedia_||this.mainSegmentLoader_.startingMedia_.containsVideo?e&&this.audioSegmentLoader_.ended_:this.audioSegmentLoader_.ended_),e&&this.mediaSource.endOfStream()}},{key:"stuckAtPlaylistEnd_",value:function(e){if(!this.seekable().length)return!1;var t=this.syncController_.getExpiredTime(e,this.mediaSource.duration);if(null===t)return!1;var i=Wl.Playlist.playlistEnd(e,t),r=this.tech_.currentTime(),n=this.tech_.buffered();if(!n.length)return i-r<=.1;var a=n.end(n.length-1);return a-r<=.1&&i-a<=.1}},{key:"blacklistCurrentPlaylist",value:function(){var e,t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=void 0;if(r=t.playlist||this.masterPlaylistLoader_.media(),i=i||t.blacklistDuration||this.blacklistDuration,!r){this.error=t;try{return this.mediaSource.endOfStream("network")}catch(e){return this.trigger("error")}}var n=1===this.masterPlaylistLoader_.master.playlists.filter(lu).length;return n?(La.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."),this.tech_.trigger("retryplaylist"),this.masterPlaylistLoader_.load(n)):(r.excludeUntil=Date.now()+1e3*i,this.tech_.trigger("blacklistplaylist"),this.tech_.trigger({type:"usage",name:"hls-rendition-blacklisted"}),e=this.selectPlaylist(),La.log.warn("Problem encountered with the current HLS playlist."+(t.message?" "+t.message:"")+" Switching to another playlist."),this.masterPlaylistLoader_.media(e))}},{key:"pauseLoading",value:function(){this.mainSegmentLoader_.pause(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.pause(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.pause()}},{key:"setCurrentTime",value:function(e){var t=Cu(this.tech_.buffered(),e);return this.masterPlaylistLoader_&&this.masterPlaylistLoader_.media()&&this.masterPlaylistLoader_.media().segments?t&&t.length?e:(this.mainSegmentLoader_.resetEverything(),this.mainSegmentLoader_.abort(),this.mediaTypes_.AUDIO.activePlaylistLoader&&(this.audioSegmentLoader_.resetEverything(),this.audioSegmentLoader_.abort()),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&(this.subtitleSegmentLoader_.resetEverything(),this.subtitleSegmentLoader_.abort()),void this.load()):0}},{key:"duration",value:function(){return this.masterPlaylistLoader_?this.mediaSource?this.mediaSource.duration:Wl.Playlist.duration(this.masterPlaylistLoader_.media()):0}},{key:"seekable",value:function(){return this.seekable_}},{key:"onSyncInfoUpdate_",value:function(){var e=void 0,t=void 0;if(this.masterPlaylistLoader_){var i=this.masterPlaylistLoader_.media();if(i){var r=this.syncController_.getExpiredTime(i,this.mediaSource.duration);if(null!==r&&0!==(e=Wl.Playlist.seekable(i,r)).length){if(this.mediaTypes_.AUDIO.activePlaylistLoader){if(i=this.mediaTypes_.AUDIO.activePlaylistLoader.media(),null===(r=this.syncController_.getExpiredTime(i,this.mediaSource.duration)))return;if(0===(t=Wl.Playlist.seekable(i,r)).length)return}t?t.start(0)>e.end(0)||e.start(0)>t.end(0)?this.seekable_=e:this.seekable_=La.createTimeRanges([[t.start(0)>e.start(0)?t.start(0):e.start(0),t.end(0)<e.end(0)?t.end(0):e.end(0)]]):this.seekable_=e,this.logger_("seekable updated ["+wu(this.seekable_)+"]"),this.tech_.trigger("seekablechanged")}}}}},{key:"updateDuration",value:function(){var t=this,e=this.mediaSource.duration,i=Wl.Playlist.duration(this.masterPlaylistLoader_.media()),r=this.tech_.buffered(),n=function e(){t.mediaSource.duration=i,t.tech_.trigger("durationchange"),t.mediaSource.removeEventListener("sourceopen",e)};0<r.length&&(i=Math.max(i,r.end(r.length-1))),e!==i&&("open"!==this.mediaSource.readyState?this.mediaSource.addEventListener("sourceopen",n):n())}},{key:"dispose",value:function(){var r=this;this.decrypter_.terminate(),this.masterPlaylistLoader_.dispose(),this.mainSegmentLoader_.dispose(),["AUDIO","SUBTITLES"].forEach(function(e){var t=r.mediaTypes_[e].groups;for(var i in t)t[i].forEach(function(e){e.playlistLoader&&e.playlistLoader.dispose()})}),this.audioSegmentLoader_.dispose(),this.subtitleSegmentLoader_.dispose()}},{key:"master",value:function(){return this.masterPlaylistLoader_.master}},{key:"media",value:function(){return this.masterPlaylistLoader_.media()||this.initialMedia_}},{key:"setupSourceBuffers_",value:function(){var e,t=this.masterPlaylistLoader_.media();if(t&&"open"===this.mediaSource.readyState){if((e=_l(this.masterPlaylistLoader_.master,t)).length<1)return this.error="No compatible SourceBuffer configuration for the variant stream:"+t.resolvedUri,this.mediaSource.endOfStream("decode");this.configureLoaderMimeTypes_(e),this.excludeIncompatibleVariants_(t)}}},{key:"configureLoaderMimeTypes_",value:function(e){var t=1<e.length&&-1===e[0].indexOf(",")&&e[0]!==e[1]?new La.EventTarget:null;this.mainSegmentLoader_.mimeType(e[0],t),e[1]&&this.audioSegmentLoader_.mimeType(e[1],t)}},{key:"excludeUnsupportedVariants_",value:function(){this.master().playlists.forEach(function(e){e.attributes.CODECS&&g.MediaSource&&g.MediaSource.isTypeSupported&&!g.MediaSource.isTypeSupported('video/mp4; codecs="'+e.attributes.CODECS.replace(/avc1\.(\d+)\.(\d+)/i,function(e){return zu([e])[0]})+'"')&&(e.excludeUntil=1/0)})}},{key:"excludeIncompatibleVariants_",value:function(e){var i=2,r=null,t=void 0;e.attributes.CODECS&&(t=yl(e.attributes.CODECS),r=t.videoCodec,i=t.codecCount),this.master().playlists.forEach(function(e){var t={codecCount:2,videoCodec:null};e.attributes.CODECS&&(t=yl(e.attributes.CODECS)),t.codecCount!==i&&(e.excludeUntil=1/0),t.videoCodec!==r&&(e.excludeUntil=1/0)})}},{key:"updateAdCues_",value:function(e){var t=0,i=this.seekable();i.length&&(t=i.start(0)),function(e,t){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;if(e.segments)for(var r=i,n=void 0,a=0;a<e.segments.length;a++){var s=e.segments[a];if(n||(n=Pl(t,r+s.duration/2)),n){if("cueIn"in s){n.endTime=r,n.adEndTime=r,r+=s.duration,n=null;continue}if(r<n.endTime){r+=s.duration;continue}n.endTime+=s.duration}else if("cueOut"in s&&((n=new g.VTTCue(r,r+s.duration,s.cueOut)).adStartTime=r,n.adEndTime=r+parseFloat(s.cueOut),t.addCue(n)),"cueOutCont"in s){var o,u,l=s.cueOutCont.split("/").map(parseFloat),c=Ho(l,2);o=c[0],u=c[1],(n=new g.VTTCue(r,r+s.duration,"")).adStartTime=r-o,n.adEndTime=n.adStartTime+u,t.addCue(n)}r+=s.duration}}(e,this.cueTagsTrack_,t)}},{key:"goalBufferLength",value:function(){var e=this.tech_.currentTime(),t=sl.GOAL_BUFFER_LENGTH,i=sl.GOAL_BUFFER_LENGTH_RATE,r=Math.max(t,sl.MAX_GOAL_BUFFER_LENGTH);return Math.min(t+e*i,r)}},{key:"bufferLowWaterLine",value:function(){var e=this.tech_.currentTime(),t=sl.BUFFER_LOW_WATER_LINE,i=sl.BUFFER_LOW_WATER_LINE_RATE,r=Math.max(t,sl.MAX_BUFFER_LOW_WATER_LINE);return Math.min(t+e*i,r)}}]),d}(),Yl=function e(t,i,r){No(this,e);var n,a,s,o=t.masterPlaylistController_.fastQualityChange_.bind(t.masterPlaylistController_);if(i.attributes.RESOLUTION){var u=i.attributes.RESOLUTION;this.width=u.width,this.height=u.height}this.bandwidth=i.attributes.BANDWIDTH,this.id=r,this.enabled=(n=t.playlists,a=i.uri,s=o,function(e){var t=n.master.playlists[a],i=uu(t),r=lu(t);return"undefined"==typeof e?r:(e?delete t.disabled:t.disabled=!0,e===r||i||(s(),e?n.trigger("renditionenabled"):n.trigger("renditiondisabled")),e)})},$l=["seeking","seeked","pause","playing","error"],Kl=function(){function s(e){var t=this;No(this,s),this.tech_=e.tech,this.seekable=e.seekable,this.consecutiveUpdates=0,this.lastRecordedTime=null,this.timer_=null,this.checkCurrentTimeTimeout_=null,this.logger_=rl("PlaybackWatcher"),this.logger_("initialize");var i=function(){return t.monitorCurrentTime_()},r=function(){return t.techWaiting_()},n=function(){return t.cancelTimer_()},a=function(){return t.fixesBadSeeks_()};this.tech_.on("seekablechanged",a),this.tech_.on("waiting",r),this.tech_.on($l,n),this.tech_.on("canplay",i),this.dispose=function(){t.logger_("dispose"),t.tech_.off("seekablechanged",a),t.tech_.off("waiting",r),t.tech_.off($l,n),t.tech_.off("canplay",i),t.checkCurrentTimeTimeout_&&g.clearTimeout(t.checkCurrentTimeTimeout_),t.cancelTimer_()}}return Bo(s,[{key:"monitorCurrentTime_",value:function(){this.checkCurrentTime_(),this.checkCurrentTimeTimeout_&&g.clearTimeout(this.checkCurrentTimeTimeout_),this.checkCurrentTimeTimeout_=g.setTimeout(this.monitorCurrentTime_.bind(this),250)}},{key:"checkCurrentTime_",value:function(){if(this.tech_.seeking()&&this.fixesBadSeeks_())return this.consecutiveUpdates=0,void(this.lastRecordedTime=this.tech_.currentTime());if(!this.tech_.paused()&&!this.tech_.seeking()){var e=this.tech_.currentTime(),t=this.tech_.buffered();if(this.lastRecordedTime===e&&(!t.length||e+.1>=t.end(t.length-1)))return this.techWaiting_();5<=this.consecutiveUpdates&&e===this.lastRecordedTime?(this.consecutiveUpdates++,this.waiting_()):e===this.lastRecordedTime?this.consecutiveUpdates++:(this.consecutiveUpdates=0,this.lastRecordedTime=e)}}},{key:"cancelTimer_",value:function(){this.consecutiveUpdates=0,this.timer_&&(this.logger_("cancelTimer_"),clearTimeout(this.timer_)),this.timer_=null}},{key:"fixesBadSeeks_",value:function(){var e=this.tech_.seeking(),t=this.seekable(),i=this.tech_.currentTime(),r=void 0;e&&this.afterSeekableWindow_(t,i)&&(r=t.end(t.length-1));e&&this.beforeSeekableWindow_(t,i)&&(r=t.start(0)+.1);return"undefined"!=typeof r&&(this.logger_("Trying to seek outside of seekable at time "+i+" with seekable range "+wu(t)+". Seeking to "+r+"."),this.tech_.setCurrentTime(r),!0)}},{key:"waiting_",value:function(){if(!this.techWaiting_()){var e=this.tech_.currentTime(),t=this.tech_.buffered(),i=Cu(t,e);return i.length&&e+3<=i.end(0)?(this.cancelTimer_(),this.tech_.setCurrentTime(e),this.logger_("Stopped at "+e+" while inside a buffered region ["+i.start(0)+" -> "+i.end(0)+"]. Attempting to resume playback by seeking to the current time."),void this.tech_.trigger({type:"usage",name:"hls-unknown-waiting"})):void 0}}},{key:"techWaiting_",value:function(){var e=this.seekable(),t=this.tech_.currentTime();if(this.tech_.seeking()&&this.fixesBadSeeks_())return!0;if(this.tech_.seeking()||null!==this.timer_)return!0;if(this.beforeSeekableWindow_(e,t)){var i=e.end(e.length-1);return this.logger_("Fell out of live window at time "+t+". Seeking to live point (seekable end) "+i),this.cancelTimer_(),this.tech_.setCurrentTime(i),this.tech_.trigger({type:"usage",name:"hls-live-resync"}),!0}var r=this.tech_.buffered(),n=Eu(r,t);if(this.videoUnderflow_(n,r,t))return this.cancelTimer_(),this.tech_.setCurrentTime(t),this.tech_.trigger({type:"usage",name:"hls-video-underflow"}),!0;if(0<n.length){var a=n.start(0)-t;return this.logger_("Stopped at "+t+", setting timer for "+a+", seeking to "+n.start(0)),this.timer_=setTimeout(this.skipTheGap_.bind(this),1e3*a,t),!0}return!1}},{key:"afterSeekableWindow_",value:function(e,t){return!!e.length&&t>e.end(e.length-1)+.1}},{key:"beforeSeekableWindow_",value:function(e,t){return!!(e.length&&0<e.start(0)&&t<e.start(0)-.1)}},{key:"videoUnderflow_",value:function(e,t,i){if(0===e.length){var r=this.gapFromVideoUnderflow_(t,i);if(r)return this.logger_("Encountered a gap in video from "+r.start+" to "+r.end+". Seeking to current time "+i),!0}return!1}},{key:"skipTheGap_",value:function(e){var t=this.tech_.buffered(),i=this.tech_.currentTime(),r=Eu(t,i);this.cancelTimer_(),0!==r.length&&i===e&&(this.logger_("skipTheGap_:","currentTime:",i,"scheduled currentTime:",e,"nextRange start:",r.start(0)),this.tech_.setCurrentTime(r.start(0)+Su),this.tech_.trigger({type:"usage",name:"hls-gap-skip"}))}},{key:"gapFromVideoUnderflow_",value:function(e,t){for(var i=function(e){if(e.length<2)return La.createTimeRanges();for(var t=[],i=1;i<e.length;i++){var r=e.end(i-1),n=e.start(i);t.push([r,n])}return La.createTimeRanges(t)}(e),r=0;r<i.length;r++){var n=i.start(r),a=i.end(r);if(t-n<4&&2<t-n)return{start:n,end:a}}return null}}]),s}(),Ql={errorInterval:30,getSource:function(e){return e(this.tech({IWillNotUseThisInPlugins:!0}).currentSource_)}},Jl=function(e){!function t(i,e){var r=0,n=0,a=La.mergeOptions(Ql,e);i.ready(function(){i.trigger({type:"usage",name:"hls-error-reload-initialized"})});var s=function(){n&&i.currentTime(n)},o=function(e){null!=e&&(n=i.duration()!==1/0&&i.currentTime()||0,i.one("loadedmetadata",s),i.src(e),i.trigger({type:"usage",name:"hls-error-reload"}),i.play())},u=function(){if(Date.now()-r<1e3*a.errorInterval)i.trigger({type:"usage",name:"hls-error-reload-canceled"});else{if(a.getSource&&"function"==typeof a.getSource)return r=Date.now(),a.getSource.call(i,o);La.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")}},l=function e(){i.off("loadedmetadata",s),i.off("error",u),i.off("dispose",e)};i.on("error",u),i.on("dispose",l),i.reloadSourceOnError=function(e){l(),t(i,e)}}(this,e)},Zl={PlaylistLoader:Ko,Playlist:du,Decrypter:Mo,AsyncStream:xo,decrypt:Ro,utils:Tu,STANDARD_PLAYLIST_SELECTOR:function(){return function(e,t,i,r){var n=e.playlists.map(function(e){var t,i;return t=e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width,i=e.attributes.RESOLUTION&&e.attributes.RESOLUTION.height,{bandwidth:e.attributes.BANDWIDTH||g.Number.MAX_VALUE,width:t,height:i,playlist:e}});Tl(n,function(e,t){return e.bandwidth-t.bandwidth});var a=(n=n.filter(function(e){return!du.isIncompatible(e.playlist)})).filter(function(e){return du.isEnabled(e.playlist)});a.length||(a=n.filter(function(e){return!du.isDisabled(e.playlist)}));var s=a.filter(function(e){return e.bandwidth*sl.BANDWIDTH_VARIANCE<t}),o=s[s.length-1],u=s.filter(function(e){return e.bandwidth===o.bandwidth})[0],l=s.filter(function(e){return e.width&&e.height});Tl(l,function(e,t){return e.width-t.width});var c=l.filter(function(e){return e.width===i&&e.height===r});o=c[c.length-1];var h=c.filter(function(e){return e.bandwidth===o.bandwidth})[0],d=void 0,p=void 0,f=void 0;h||(p=(d=l.filter(function(e){return e.width>i||e.height>r})).filter(function(e){return e.width===d[0].width&&e.height===d[0].height}),o=p[p.length-1],f=p.filter(function(e){return e.bandwidth===o.bandwidth})[0]);var m=f||h||u||a[0]||n[0];return m?m.playlist:null}(this.playlists.master,this.systemBandwidth,parseInt(bl(this.tech_.el(),"width"),10),parseInt(bl(this.tech_.el(),"height"),10))},INITIAL_PLAYLIST_SELECTOR:function(){var e=this.playlists.master.playlists.filter(du.isEnabled);return Tl(e,function(e,t){return Sl(e,t)}),e.filter(function(e){return yl(e.attributes.CODECS).videoCodec})[0]||null},comparePlaylistBandwidth:Sl,comparePlaylistResolution:function(e,t){var i=void 0,r=void 0;return e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width&&(i=e.attributes.RESOLUTION.width),i=i||g.Number.MAX_VALUE,t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width&&(r=t.attributes.RESOLUTION.width),i===(r=r||g.Number.MAX_VALUE)&&e.attributes.BANDWIDTH&&t.attributes.BANDWIDTH?e.attributes.BANDWIDTH-t.attributes.BANDWIDTH:i-r},xhr:mu()};["GOAL_BUFFER_LENGTH","MAX_GOAL_BUFFER_LENGTH","GOAL_BUFFER_LENGTH_RATE","BUFFER_LOW_WATER_LINE","MAX_BUFFER_LOW_WATER_LINE","BUFFER_LOW_WATER_LINE_RATE","BANDWIDTH_VARIANCE"].forEach(function(t){Object.defineProperty(Zl,t,{get:function(){return La.log.warn("using Hls."+t+" is UNSAFE be sure you know what you are doing"),sl[t]},set:function(e){La.log.warn("using Hls."+t+" is UNSAFE be sure you know what you are doing"),"number"!=typeof e||e<0?La.log.warn("value of Hls."+t+" must be greater than or equal to 0"):sl[t]=e}})});var ec=function(e){if(/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(e))return"hls";return/^application\/dash\+xml/i.test(e)?"dash":null},tc=function(e,t){for(var i=t.media(),r=-1,n=0;n<e.length;n++)if(e[n].id===i.uri){r=n;break}e.selectedIndex_=r,e.trigger({selectedIndex:r,type:"change"})};Zl.canPlaySource=function(){return La.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")};var ic=function(e){if("dash"===e.options_.sourceType){var t=La.players[e.tech_.options_.playerId];if(t.eme){var i=function(e,t,i){if(!e)return e;var r={};for(var n in e)r[n]={audioContentType:'audio/mp4; codecs="'+i.attributes.CODECS+'"',videoContentType:'video/mp4; codecs="'+t.attributes.CODECS+'"'},t.contentProtection&&t.contentProtection[n]&&t.contentProtection[n].pssh&&(r[n].pssh=t.contentProtection[n].pssh),"string"==typeof e[n]&&(r[n].url=e[n]);return La.mergeOptions(e,r)}(e.source_.keySystems,e.playlists.media(),e.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader.media());i&&(t.currentSource().keySystems=i)}}};Zl.supportsNativeHls=function(){var t=p.createElement("video");if(!La.getTech("Html5").isSupported())return!1;return["application/vnd.apple.mpegurl","audio/mpegurl","audio/x-mpegurl","application/x-mpegurl","video/x-mpegurl","video/mpegurl","application/mpegurl"].some(function(e){return/maybe|probably/i.test(t.canPlayType(e))})}(),Zl.supportsNativeDash=!!La.getTech("Html5").isSupported()&&/maybe|probably/i.test(p.createElement("video").canPlayType("application/dash+xml")),Zl.supportsTypeNatively=function(e){return"hls"===e?Zl.supportsNativeHls:"dash"===e&&Zl.supportsNativeDash},Zl.isSupported=function(){return La.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")};var rc=La.getComponent("Component"),nc=function(e){function a(e,t,i){No(this,a);var r=Fo(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,t,i.hls));if(t.options_&&t.options_.playerId){var n=La(t.options_.playerId);n.hasOwnProperty("hls")||Object.defineProperty(n,"hls",{get:function(){return La.log.warn("player.hls is deprecated. Use player.tech_.hls instead."),t.trigger({type:"usage",name:"hls-player-access"}),r}}),n.vhs=r,n.dash=r}if(r.tech_=t,r.source_=e,r.stats={},r.ignoreNextSeekingEvent_=!1,r.setOptions_(),r.options_.overrideNative&&t.overrideNativeAudioTracks&&t.overrideNativeVideoTracks)t.overrideNativeAudioTracks(!0),t.overrideNativeVideoTracks(!0);else if(r.options_.overrideNative&&(t.featuresNativeVideoTracks||t.featuresNativeAudioTracks))throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");return r.on(p,["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(e){var t=p.fullscreenElement||p.webkitFullscreenElement||p.mozFullScreenElement||p.msFullscreenElement;t&&t.contains(r.tech_.el())&&r.masterPlaylistController_.fastQualityChange_()}),r.on(r.tech_,"seeking",function(){this.ignoreNextSeekingEvent_?this.ignoreNextSeekingEvent_=!1:this.setCurrentTime(this.tech_.currentTime())}),r.on(r.tech_,"error",function(){this.masterPlaylistController_&&this.masterPlaylistController_.pauseLoading()}),r.on(r.tech_,"play",r.play),r}return jo(a,rc),Bo(a,[{key:"setOptions_",value:function(){var t=this;this.options_.withCredentials=this.options_.withCredentials||!1,"number"!=typeof this.options_.blacklistDuration&&(this.options_.blacklistDuration=300),"number"!=typeof this.options_.bandwidth&&(this.options_.bandwidth=4194304),this.options_.enableLowInitialPlaylist=this.options_.enableLowInitialPlaylist&&4194304===this.options_.bandwidth,["withCredentials","bandwidth"].forEach(function(e){"undefined"!=typeof t.source_[e]&&(t.options_[e]=t.source_[e])}),this.bandwidth=this.options_.bandwidth}},{key:"src",value:function(e,t){var r=this;e&&(this.setOptions_(),this.options_.url=this.source_.src,this.options_.tech=this.tech_,this.options_.externHls=Zl,this.options_.sourceType=ec(t),this.masterPlaylistController_=new Xl(this.options_),this.playbackWatcher_=new Kl(La.mergeOptions(this.options_,{seekable:function(){return r.seekable()}})),this.masterPlaylistController_.on("error",function(){La.players[r.tech_.options_.playerId].error(r.masterPlaylistController_.error)}),this.masterPlaylistController_.selectPlaylist=this.selectPlaylist?this.selectPlaylist.bind(this):Zl.STANDARD_PLAYLIST_SELECTOR.bind(this),this.masterPlaylistController_.selectInitialPlaylist=Zl.INITIAL_PLAYLIST_SELECTOR.bind(this),this.playlists=this.masterPlaylistController_.masterPlaylistLoader_,this.mediaSource=this.masterPlaylistController_.mediaSource,Object.defineProperties(this,{selectPlaylist:{get:function(){return this.masterPlaylistController_.selectPlaylist},set:function(e){this.masterPlaylistController_.selectPlaylist=e.bind(this)}},throughput:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate},set:function(e){this.masterPlaylistController_.mainSegmentLoader_.throughput.rate=e,this.masterPlaylistController_.mainSegmentLoader_.throughput.count=1}},bandwidth:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.bandwidth},set:function(e){this.masterPlaylistController_.mainSegmentLoader_.bandwidth=e,this.masterPlaylistController_.mainSegmentLoader_.throughput={rate:0,count:0}}},systemBandwidth:{get:function(){var e=1/(this.bandwidth||1),t=void 0;return t=0<this.throughput?1/this.throughput:0,Math.floor(1/(e+t))},set:function(){La.log.error('The "systemBandwidth" property is read-only')}}}),Object.defineProperties(this.stats,{bandwidth:{get:function(){return r.bandwidth||0},enumerable:!0},mediaRequests:{get:function(){return r.masterPlaylistController_.mediaRequests_()||0},enumerable:!0},mediaRequestsAborted:{get:function(){return r.masterPlaylistController_.mediaRequestsAborted_()||0},enumerable:!0},mediaRequestsTimedout:{get:function(){return r.masterPlaylistController_.mediaRequestsTimedout_()||0},enumerable:!0},mediaRequestsErrored:{get:function(){return r.masterPlaylistController_.mediaRequestsErrored_()||0},enumerable:!0},mediaTransferDuration:{get:function(){return r.masterPlaylistController_.mediaTransferDuration_()||0},enumerable:!0},mediaBytesTransferred:{get:function(){return r.masterPlaylistController_.mediaBytesTransferred_()||0},enumerable:!0},mediaSecondsLoaded:{get:function(){return r.masterPlaylistController_.mediaSecondsLoaded_()||0},enumerable:!0},buffered:{get:function(){return Au(r.tech_.buffered())},enumerable:!0},currentTime:{get:function(){return r.tech_.currentTime()},enumerable:!0},currentSource:{get:function(){return r.tech_.currentSource_},enumerable:!0},currentTech:{get:function(){return r.tech_.name_},enumerable:!0},duration:{get:function(){return r.tech_.duration()},enumerable:!0},master:{get:function(){return r.playlists.master},enumerable:!0},playerDimensions:{get:function(){return r.tech_.currentDimensions()},enumerable:!0},seekable:{get:function(){return Au(r.tech_.seekable())},enumerable:!0},timestamp:{get:function(){return Date.now()},enumerable:!0},videoPlaybackQuality:{get:function(){return r.tech_.getVideoPlaybackQuality()},enumerable:!0}}),this.tech_.one("canplay",this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),this.masterPlaylistController_.on("selectedinitialmedia",function(){var i,e;e=(i=r).playlists,i.representations=function(){return e.master.playlists.filter(function(e){return!uu(e)}).map(function(e,t){return new Yl(i,e,e.uri)})},ic(r)}),this.on(this.masterPlaylistController_,"progress",function(){this.tech_.trigger("progress")}),this.on(this.masterPlaylistController_,"firstplay",function(){this.ignoreNextSeekingEvent_=!0}),this.tech_.ready(function(){return r.setupQualityLevels_()}),this.tech_.el()&&this.tech_.src(La.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))}},{key:"setupQualityLevels_",value:function(){var i=this,e=La.players[this.tech_.options_.playerId];e&&e.qualityLevels&&(this.qualityLevels_=e.qualityLevels(),this.masterPlaylistController_.on("selectedinitialmedia",function(){var t,e;t=i.qualityLevels_,(e=i).representations().forEach(function(e){t.addQualityLevel(e)}),tc(t,e.playlists)}),this.playlists.on("mediachange",function(){tc(i.qualityLevels_,i.playlists)}))}},{key:"play",value:function(){this.masterPlaylistController_.play()}},{key:"setCurrentTime",value:function(e){this.masterPlaylistController_.setCurrentTime(e)}},{key:"duration",value:function(){return this.masterPlaylistController_.duration()}},{key:"seekable",value:function(){return this.masterPlaylistController_.seekable()}},{key:"dispose",value:function(){this.playbackWatcher_&&this.playbackWatcher_.dispose(),this.masterPlaylistController_&&this.masterPlaylistController_.dispose(),this.qualityLevels_&&this.qualityLevels_.dispose(),function e(t,i,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,i);if(void 0===n){var a=Object.getPrototypeOf(t);return null===a?void 0:e(a,i,r)}if("value"in n)return n.value;var s=n.get;return void 0!==s?s.call(r):void 0}(a.prototype.__proto__||Object.getPrototypeOf(a.prototype),"dispose",this).call(this)}}]),a}(),ac={name:"videojs-http-streaming",VERSION:"1.1.0",canHandleSource:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=La.mergeOptions(La.options,t);return ac.canPlayType(e.type,i)},handleSource:function(e,t){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=La.mergeOptions(La.options,i);return t.hls=new nc(e,t,r),t.hls.xhr=mu(),t.hls.src(e.src,e.type),t.hls},canPlayType:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=La.mergeOptions(La.options,t).hls.overrideNative,r=ec(e);return r&&(!Zl.supportsTypeNatively(r)||i)?"maybe":""}};return"undefined"!=typeof La.MediaSource&&"undefined"!=typeof La.URL||(La.MediaSource=Qu,La.URL=Ju),Qu.supportsNativeMediaSources()&&La.getTech("Html5").registerSourceHandler(ac,0),La.HlsHandler=nc,La.HlsSourceHandler=ac,La.Hls=Zl,La.use||La.registerComponent("Hls",Zl),La.options.hls=La.options.hls||{},La.registerPlugin?La.registerPlugin("reloadSourceOnError",Jl):La.plugin("reloadSourceOnError",Jl),La});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 19 */
/***/ (function(module, exports) {

$(document).on('click', '#refresh-captcha', function () {
    console.log('1');
    var url = "/captcha/" + Math.random();
    $('#refresh-captcha > img').attr("src", url);
});

/***/ }),
/* 20 */
/***/ (function(module, exports) {

$('.head-photo,.menuList').mouseover(function () {
    $('.menuList').css('display', 'block');
});
$('.head-photo,.menuList').mouseout(function () {
    $('.menuList').css('display', 'none');
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

$(document).on('mouseover', '.learn_area', function () {
    console.log('t');
    $(this).css('width', '100%');
});
$(document).on('mouseout', '.learn_area', function () {
    console.log('q');
    $(this).css('width', '96%');
});

/***/ }),
/* 22 */
/***/ (function(module, exports) {

//写评论
$(document).ready(function () {
    $(document).on('click', '#btn_comment', function () {
        $.ajax({
            type: 'get',
            url: '/comment/store',
            dataType: 'json',
            data: {
                "discussion_id": $(".form_comment > input[ name='discussion_id']").val(),
                "user_id": $(".form_comment > input[ name='user_id' ] ").val(),
                "body": $("input[ name='body_comment' ] ").val(),
                "type": $(".form_comment > input[ name='type' ] ").val()
            },
            success: function success(data) {
                //返回json结果
                $("input[ name='body' ]").val('');
                var add = '<div class="media border p-0">';
                add += '<img src=' + data.user.imgUrl + ' class="mr-1 mt-1" style="width:45px;">';
                add += '<div class="media-body">';
                add += '<a href="" class="style-a">' + data.user.uname + '</a>';
                add += ' <span class="style-time">刚刚</span>';
                add += ' <p class="main-text">' + data.comment.body + '</p>';
                add += '</div> </div>';
                $('.comments').append(add);
            },
            error: function error(data) {}
        });
    });

    //写回复
    $(document).on('click', '.reply_trigger', function () {
        //控制回复表单的diapaly
        var show = $(this).next('.reply_form').css('display');
        var text = $(this).text();
        $(this).text(show == 'block' ? '回复' : '取消回复');
        $(this).next('.reply_form').css('display', show == 'block' ? 'none' : 'block');
    });
    $(document).on('click', '.reply_btn', function () {
        var $btn_dom = $(this);
        $.ajax({
            type: 'get',
            url: '/comment/reply',
            dataType: 'json',
            data: {
                "discussion_id": $(this).siblings("input[ name='discussion_id']").val(),
                "user_id": $(this).siblings("input[ name='user_id' ]").val(),
                "body": $(this).siblings("input[ name='body_reply' ]").val(),
                "parent_id": $(this).siblings("input[ name='parent_id' ]").val(),
                "reply_id": $(this).siblings("input[ name='reply_id']").val(),
                "reply_uname": $(this).siblings("input[ name='reply_uname']").val(),
                "type": $(".form_comment > input[ name='type' ] ").val()
            },
            success: function success(data) {
                $btn_dom.closest('.reply_form').css('display', 'none');
                $btn_dom.closest('.reply_form').prev('.reply_trigger').text('回复');
                var add = '<div class="media p-1 media">';
                add += '<img src=' + data.user.imgUrl + ' alt="" class="mr-1 mt-1" style="width:45px;">';
                add += '<div class="media-body">';
                add += '<a href="" class="style-a">' + data.user.uname + '</a>';
                add += '<span class="style-reply-font">&nbsp;回复&nbsp;</span>';
                add += '<a href="" class="style-a">' + data.reply_name + '</a>';
                add += '<span class="style-time">&nbsp;刚刚</span>';
                add += '<p class="main-text">' + data.comment.body + '</p>';
                add += '</div></div>';
                $btn_dom.closest('.media_main').append(add);
            },
            error: function error(data) {}
        });
    });
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(24);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(7)))

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_router__ = __webpack_require__(8);


var routes = [{
    path: '/videoList',
    component: __webpack_require__(26)
}];

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_vue_router__["a" /* default */]({
    routes: routes
}));

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(27)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(30)
/* template */
var __vue_template__ = __webpack_require__(65)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/videoList/videoList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-713dc4ee", Component.options)
  } else {
    hotAPI.reload("data-v-713dc4ee", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("dfc34818", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-713dc4ee\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./videoList.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-713dc4ee\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./videoList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),
/* 29 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_title_page_title__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_title_page_title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__page_title_page_title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vList_vList__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vList_vList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vList_vList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_pagination__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_pagination___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__pagination_pagination__);
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'videoList',
    components: {
        page_title: __WEBPACK_IMPORTED_MODULE_0__page_title_page_title___default.a,
        vList: __WEBPACK_IMPORTED_MODULE_1__vList_vList___default.a,
        pagination: __WEBPACK_IMPORTED_MODULE_2__pagination_pagination___default.a
    },
    mounted: function mounted() {
        console.log('Component mounted.');
    },
    data: function data() {
        return {
            page_title: 'web开发视频更新，All in here!',
            videoList: null,
            page_index: 1
        };
    },
    created: function created() {
        this.paginate();
    },

    methods: {
        changePage: function changePage(data) {
            this.page_index = data;
            this.paginate();
        },
        paginate: function paginate() {
            var _this = this;

            var axios = __webpack_require__(46);
            axios.get('/weixin/videoList/' + this.page_index).then(function (response) {
                return _this.videoList = response.data;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(32)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(34)
/* template */
var __vue_template__ = __webpack_require__(35)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6f01648c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/page_title/page_title.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6f01648c", Component.options)
  } else {
    hotAPI.reload("data-v-6f01648c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("57a7d4e0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6f01648c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page_title.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6f01648c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./page_title.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\n.container[data-v-6f01648c] {\n  width: 100%;\n}\n.container .row[data-v-6f01648c] {\n  width: 100%;\n}\n.container .row .page_title[data-v-6f01648c] {\n  height: 70px;\n  background: -webkit-gradient(linear, left top, right top, from(#232526), to(#414345));\n  background: linear-gradient(to right, #232526, #414345);\n  color: #fff;\n  -webkit-box-shadow: 0 12px 24px 0 rgba(7,17,27,0.2);\n          box-shadow: 0 12px 24px 0 rgba(7,17,27,0.2);\n  border-radius: 10px;\n  font-size: 25px;\n  line-height: 70px;\n  text-align: center;\n  margin: 10px 0;\n}\n", ""]);



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "page_title.vue",
    data: function data() {
        return {
            content: ''
        };
    },

    props: {
        page_title: {
            type: String
        }
    }
});

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-md-1" }),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-10 page_title" }, [
        _vm._v(_vm._s(_vm.page_title))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-1" })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6f01648c", module.exports)
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(37)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(39)
/* template */
var __vue_template__ = __webpack_require__(40)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-21d7a6a4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/vList/vList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21d7a6a4", Component.options)
  } else {
    hotAPI.reload("data-v-21d7a6a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(38);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("a491f9bc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-21d7a6a4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vList.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-21d7a6a4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./vList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\n.List-wrapper[data-v-21d7a6a4] {\n  margin-top: 25px;\n  height: 545px;\n}\n.List-wrapper .List[data-v-21d7a6a4] {\n  background-color: #fff;\n  -webkit-box-shadow: 0 -2px 6px rgba(0,0,0,0.36);\n          box-shadow: 0 -2px 6px rgba(0,0,0,0.36);\n  border-radius: 15px;\n}\n.List-wrapper .List .item[data-v-21d7a6a4] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  color: #3a3a3a;\n  font-weight: 700;\n  font-size: 16px;\n  vertical-align: middle;\n  padding: 14px 20px;\n  border-bottom: 1px solid #999;\n}\n.List-wrapper .List .item[data-v-21d7a6a4]:last-child {\n  border-bottom: none;\n}\n.List-wrapper .List .item .video_name[data-v-21d7a6a4] {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n}\n.List-wrapper .List .item .video_name span[data-v-21d7a6a4] {\n  padding-right: 10px;\n}\n.List-wrapper .List .item .date[data-v-21d7a6a4] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n", ""]);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "vList",
    data: function data() {
        return {
            listData: null
        };
    },

    props: {
        listData: {
            type: Object
        }
    }
});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "List-wrapper row" }, [
    _c(
      "ul",
      { staticClass: "List col-md-8 offset-md-2" },
      _vm._l(_vm.listData.videoList, function(item) {
        return _vm.listData["videoList"]
          ? _c("li", { staticClass: "item" }, [
              _c("span", { staticClass: "video_name" }, [
                _c("span", { staticClass: "iconfont icon-video" }),
                _vm._v(_vm._s(item.vname))
              ]),
              _vm._v(" "),
              _c("span", { staticClass: "date" }, [
                _vm._v(_vm._s(item.date_en))
              ])
            ])
          : _vm._e()
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-21d7a6a4", module.exports)
  }
}

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(42)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(44)
/* template */
var __vue_template__ = __webpack_require__(45)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e830fb0c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/pagination/pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e830fb0c", Component.options)
  } else {
    hotAPI.reload("data-v-e830fb0c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2222c4bd", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e830fb0c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e830fb0c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./pagination.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\n.pagination[data-v-e830fb0c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 50px;\n}\n.pagination .wrapper_page[data-v-e830fb0c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n.pagination .wrapper_page .previous_page[data-v-e830fb0c],\n.pagination .wrapper_page .next_page[data-v-e830fb0c] {\n  width: 30%;\n  padding: 8px 0px;\n  background-color: #06a7e0;\n  text-align: center;\n  color: #fff;\n  border-radius: 5px;\n  font-size: 15px;\n  line-height: 15px;\n  height: 31px;\n}\n.pagination .skip_page[data-v-e830fb0c] {\n  -webkit-box-flex: 2;\n      -ms-flex: 2;\n          flex: 2;\n}\n.pagination .skip_page .skip_wrapper[data-v-e830fb0c] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 60%;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin: 0 auto;\n  font-size: 16px;\n}\n.pagination .skip_page .skip_wrapper .skip_input[data-v-e830fb0c] {\n  width: 30px;\n}\n.pagination .skip_page .skip_wrapper .skip_button[data-v-e830fb0c] {\n  width: 60px;\n  font-size: 16px;\n  margin-left: 10px;\n  text-align: center;\n  padding: 0;\n}\n.pagination .skip_page .skip_wrapper span[data-v-e830fb0c] {\n  line-height: 30px;\n}\n", ""]);



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "pagination",
    data: function data() {
        return {
            page_index: 1,
            mes1: '已是首页',
            mes2: '已是尾页',
            page_num: null
        };
    },

    props: {
        paginationData: {
            type: Object
        }
    },
    methods: {
        changePage: function changePage() {
            this.$emit('listenToPagination', this.page_index);
        },
        previous_page: function previous_page() {
            if (this.page_index <= 1) {
                this.page_index = 0;
            } else {
                this.page_index = this.paginationData.page_index - 1;
                this.changePage();
            }
        },
        next_page: function next_page() {
            if (this.page_index >= this.paginationData.page_num) {
                this.page_index = this.paginationData.page_num;
            } else {
                this.page_index = this.paginationData.page_index + 1;
                this.changePage();
            }
        },
        tt: function tt() {
            this.page_index = this.paginationData.page_index;
        }
    },
    created: function created() {
        setTimeout(function () {
            document.querySelector('.skip_button').onmousedown = function (event) {
                event.preventDefault();
            };
        }, 500);
    }
});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "pagination col-md-8 offset-md-2" }, [
    _c("div", { staticClass: "wrapper_page" }, [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: this.paginationData.page_index > 1,
              expression: "this.paginationData.page_index > 1"
            }
          ],
          staticClass: "btn btn-primary previous_page",
          on: { click: _vm.previous_page }
        },
        [_vm._v("上一页")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: this.paginationData.page_index <= 1,
              expression: "this.paginationData.page_index <= 1"
            }
          ],
          staticClass: "btn btn-primary previous_page"
        },
        [_vm._v(_vm._s(_vm.mes1))]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "skip_page" }, [
      _c("div", { staticClass: "skip_wrapper" }, [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.page_index,
              expression: "page_index"
            }
          ],
          staticClass: "skip_input",
          attrs: { type: "text" },
          domProps: { value: _vm.page_index },
          on: {
            blur: _vm.tt,
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.page_index = $event.target.value
            }
          }
        }),
        _c("span", [_vm._v(" / " + _vm._s(this.paginationData.page_num))]),
        _vm._v(" "),
        _c(
          "button",
          {
            ref: "my_button",
            staticClass: "skip_button btn btn-info",
            on: { click: _vm.changePage }
          },
          [_vm._v("跳转")]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "wrapper_page" }, [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.page_index < this.paginationData.page_num,
              expression: "page_index < this.paginationData.page_num"
            }
          ],
          staticClass: "btn btn-primary next_page",
          on: { click: _vm.next_page }
        },
        [_vm._v("下一页")]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.page_index >= this.paginationData.page_num,
              expression: "page_index >= this.paginationData.page_num"
            }
          ],
          staticClass: "btn btn-primary next_page"
        },
        [_vm._v(_vm._s(_vm.mes2))]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e830fb0c", module.exports)
  }
}

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(9);
var Axios = __webpack_require__(49);
var defaults = __webpack_require__(5);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(13);
axios.CancelToken = __webpack_require__(63);
axios.isCancel = __webpack_require__(12);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(64);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 48 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(5);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(58);
var dispatchRequest = __webpack_require__(59);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(11);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(60);
var isCancel = __webpack_require__(12);
var defaults = __webpack_require__(5);
var isAbsoluteURL = __webpack_require__(61);
var combineURLs = __webpack_require__(62);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(13);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("page_title", { attrs: { page_title: _vm.page_title } }),
      _vm._v(" "),
      _c("vList", { attrs: { listData: _vm.videoList } }),
      _vm._v(" "),
      _c("pagination", {
        attrs: { paginationData: _vm.videoList },
        on: { listenToPagination: _vm.changePage }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-713dc4ee", module.exports)
  }
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(67)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(69)
/* template */
var __vue_template__ = __webpack_require__(86)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/App.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d59d5e8", Component.options)
  } else {
    hotAPI.reload("data-v-0d59d5e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("092c3dda", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d59d5e8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/stylus-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d59d5e8\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/stylus-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./App.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\n@font-face {\n  font-family: 'iconfont'; /* project id 984404 */\n  src: url(\"//at.alicdn.com/t/font_984404_1eyeng01v0n.eot\");\n  src: url(\"//at.alicdn.com/t/font_984404_1eyeng01v0n.eot?#iefix\") format('embedded-opentype'), url(\"//at.alicdn.com/t/font_984404_1eyeng01v0n.woff2\") format('woff2'), url(\"//at.alicdn.com/t/font_984404_1eyeng01v0n.woff\") format('woff'), url(\"//at.alicdn.com/t/font_984404_1eyeng01v0n.ttf\") format('truetype'), url(\"//at.alicdn.com/t/font_984404_1eyeng01v0n.svg#iconfont\") format('svg');\n}\n@font-face {\n  font-family: myFont;\n  src: url(\"/fonts/MG9KbUZFchDs94Tbv9U-pZBw1xU1rKptJj_0jans920.woff2\") format('woff2'), url(\"/fonts/uDssvmXgp7Nj3i336k_dShampu5_7CjHW5spxoeN3Vs.woff2\") format('woff2');\n}\n* {\n  font-family: myFont;\n}\n.iconfont {\n  font-family: iconfont !important;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.icon-search:before {\n  content: \"\\e621\";\n  font-size: 18px;\n  color: #afbdcf;\n}\n.icon-hot:before {\n  content: \"\\e757\";\n  font-size: 15px;\n  font-weight: 700;\n  color: #d81e06;\n}\n.icon-video:before {\n  content: \"\\e6bf\";\n  font-size: 16px;\n  font-weight: 700;\n}\nli {\n  list-style-type: none;\n}\n.header_wrapper {\n  width: 100%;\n}\n.header_wrapper .top-bar {\n  width: 100%;\n  height: 5px;\n  background-image: url(\"/img/top-bar.png\");\n  background-size: 100% 5px;\n}\n.header_wrapper .main_header {\n  width: 100%;\n  height: 80px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 30px;\n}\n.header_wrapper .main_header .logo_wrapper {\n  -webkit-box-flex: 3;\n      -ms-flex: 3;\n          flex: 3;\n}\n.header_wrapper .main_header .logo_wrapper .logo {\n  width: 200px;\n  height: 50px;\n  margin: 5px auto;\n  background-image: url(\"/img/logo.svg\");\n  background-size: 200px 50px;\n}\n.header_wrapper .main_header .searcher {\n  -webkit-box-flex: 8;\n      -ms-flex: 8;\n          flex: 8;\n  height: 40px;\n  margin-top: 15px;\n}\n.header_wrapper .main_header .searcher .searcher_form {\n  width: 100%;\n}\n.header_wrapper .main_header .searcher .searcher_form .form-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-left: 10px;\n  border: 1px solid rgba(175,189,207,0.5);\n  border-radius: 7px;\n}\n.header_wrapper .main_header .searcher .searcher_form .form-wrapper .search-input {\n  -webkit-box-flex: 100;\n      -ms-flex: 100;\n          flex: 100;\n  outline: none;\n  height: 30px;\n  border: none;\n  font-size: 16px;\n}\n.header_wrapper .main_header .searcher .searcher_form .form-wrapper .search-input::-webkit-input-placeholder {\n  color: rgba(175,189,207,0.8);\n  font-size: 1px;\n}\n.header_wrapper .main_header .searcher .searcher_form .form-wrapper .search_go {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 25px;\n          flex: 1 0 25px;\n  height: 30px;\n  margin-right: 4px;\n  border: none;\n}\n.header_wrapper .main_header .user-profile {\n  -webkit-box-flex: 3;\n      -ms-flex: 3;\n          flex: 3;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 10px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  height: 40px;\n}\n.header_wrapper .main_header .user-profile .button {\n  height: 40px;\n  line-height: 40px;\n  padding: 0 17px;\n  color: #f5f5f1;\n  font-family: myFont;\n  font-size: 16px;\n  font-weight: 400;\n  -webkit-text-decoration-line: none;\n          text-decoration-line: none;\n}\n.header_wrapper .main_header .user-profile .login {\n  background: -webkit-gradient(linear, left top, right top, from(#58a8e9), to(#d41f4d));\n  background: linear-gradient(90deg, #58a8e9, #d41f4d);\n  border-radius: 0.3em;\n  margin-right: 6%;\n}\n.header_wrapper .main_header .user-profile .register {\n  background: -webkit-gradient(linear, left top, left bottom, from(#3c8ce7), to(#00eaff));\n  background: linear-gradient(180deg, #3c8ce7, #00eaff);\n  border-radius: 0.3em;\n  color: #f5f8fa;\n}\n", ""]);



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vheader_v_header__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vheader_v_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__vheader_v_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_navigation__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_navigation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__navigation_navigation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vfoot_v_foot__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vfoot_v_foot___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__vfoot_v_foot__);
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'App',
    components: {
        'v-header': __WEBPACK_IMPORTED_MODULE_0__vheader_v_header___default.a,
        navigation: __WEBPACK_IMPORTED_MODULE_1__navigation_navigation___default.a,
        'v-foot': __WEBPACK_IMPORTED_MODULE_2__vfoot_v_foot___default.a
    },
    mounted: function mounted() {
        console.log('Component mounted.');
    }
});

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(71)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(73)
/* template */
var __vue_template__ = __webpack_require__(74)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/vheader/v-header.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2b0c9b56", Component.options)
  } else {
    hotAPI.reload("data-v-2b0c9b56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(72);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("44584215", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b0c9b56\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./v-header.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2b0c9b56\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./v-header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'vheader'
});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "header_wrapper" }, [
      _c("div", { staticClass: "top-bar" }),
      _vm._v(" "),
      _c("div", { staticClass: "main_header" }, [
        _c("div", { staticClass: "logo_wrapper" }, [
          _c("div", { staticClass: "logo" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "searcher" }, [
          _c("form", { staticClass: "searcher_form" }, [
            _c("div", { staticClass: "form-wrapper" }, [
              _c("input", {
                staticClass: "search-input",
                attrs: { type: "text", id: "", placeholder: "输入你想学习的" }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "search_go" }, [
                _c("div", { staticClass: "iconfont icon-search" })
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "user-profile" }, [
          _c(
            "a",
            { staticClass: "button login", attrs: { href: "/user/login" } },
            [_vm._v("登录")]
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "button register",
              attrs: { href: "/user/register" }
            },
            [_vm._v("注册")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2b0c9b56", module.exports)
  }
}

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(76)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(78)
/* template */
var __vue_template__ = __webpack_require__(79)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f4299b8c"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/navigation/navigation.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f4299b8c", Component.options)
  } else {
    hotAPI.reload("data-v-f4299b8c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(77);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("2b81fd2d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f4299b8c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navigation.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f4299b8c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/stylus-loader/index.js!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./navigation.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "\n.navigation[data-v-f4299b8c] {\n  width: 100%;\n  border-top: 1px solid rgba(0,0,0,0.12);\n  border-bottom: 1px solid rgba(0,0,0,0.12);\n}\n.navigation .nav-items[data-v-f4299b8c] {\n  width: 100%;\n  max-width: 1070px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 auto;\n}\n.navigation .nav-items .nav-item[data-v-f4299b8c] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  border-left: 1px solid rgba(0,0,0,0.12);\n  font-size: 15px;\n  font-weight: 600;\n  line-height: 15px;\n  padding: 10px 0;\n  text-align: center;\n}\n.navigation .nav-items .nav-item[data-v-f4299b8c]:last-child {\n  border-right: 1px solid rgba(0,0,0,0.12);\n}\n.navigation .nav-items .nav-item:last-child span[data-v-f4299b8c] {\n  vertical-align: text-bottom;\n}\n", ""]);



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "navigation"
});

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navigation" }, [
      _c("div", { staticClass: "nav-items" }, [
        _c("div", { staticClass: "nav-item" }, [_vm._v("全部视频")]),
        _vm._v(" "),
        _c("div", { staticClass: "nav-item" }, [_vm._v("学习路径")]),
        _vm._v(" "),
        _c("div", { staticClass: "nav-item" }, [_vm._v("问答社区")]),
        _vm._v(" "),
        _c("div", { staticClass: "nav-item" }, [_vm._v("文章教程")]),
        _vm._v(" "),
        _c("div", { staticClass: "nav-item" }, [
          _c("span", { staticClass: "iconfont icon-hot" }, [_vm._v(" ")]),
          _vm._v("订阅本站")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "nav-item" }, [_vm._v("签到优惠")])
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f4299b8c", module.exports)
  }
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(81)
}
var normalizeComponent = __webpack_require__(3)
/* script */
var __vue_script__ = __webpack_require__(84)
/* template */
var __vue_template__ = __webpack_require__(85)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-738f9e16"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/components/vfoot/v-foot.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-738f9e16", Component.options)
  } else {
    hotAPI.reload("data-v-738f9e16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(82);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("4dfe43d9", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-738f9e16\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./v-foot.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-738f9e16\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./v-foot.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Imports
exports.i(__webpack_require__(83), "");

// Module
exports.push([module.i, "\n", ""]);



/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: "footer",
    data: function data() {
        return {
            description: 'Starkweb',
            letter1: 'Starkweb',
            letter2: 'For web fans'
        };
    },
    created: function created() {
        this.logo_animation();
    },

    methods: {
        logo_animation: function logo_animation() {
            var array1 = this.letter1.split('');
            var array2 = this.letter2.split('');
            var length1 = array1.length;
            var length2 = array2.length;
            var i = 0;
            var self = this;
            var timer = setInterval(function () {
                i++;
                if (i <= length1) {
                    var str_arr = array1;
                    var str_new = str_arr.slice(0, length1 - i);
                    self.description = str_new.join('');
                } else {
                    var str_arr = array2;
                    var str_new = str_arr.slice(0, i - length1);
                    self.description = str_new.join('');
                }
                if (i > length1 + length2) {
                    clearInterval(timer);
                }
            }, 300);
        }
    }
});

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "footer" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row footer-border" }, [
        _c("div", { staticClass: "col-md-4" }, [
          _c("div", { staticClass: "footer-logo" }, [
            _c("p", { staticClass: "logo_font" }, [
              _vm._v(_vm._s(this.description))
            ])
          ]),
          _vm._v(" "),
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1)
        ]),
        _vm._v(" "),
        _vm._m(2),
        _vm._v(" "),
        _vm._m(3),
        _vm._v(" "),
        _vm._m(4),
        _vm._v(" "),
        _vm._m(5)
      ]),
      _vm._v(" "),
      _vm._m(6)
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "footer__site-description" }, [
      _c("em", [_vm._v("S")]),
      _vm._v("tark "),
      _c("em", [_vm._v("Web")]),
      _c("br"),
      _vm._v(" "),
      _c("strong", [_vm._v("为 Web 爱好者而生")]),
      _vm._v(","),
      _c("strong", [_vm._v("stark")]),
      _vm._v(
        " 的愿景是做最好的 web前后端\n                    中文视频教程和问答社区, 有任何跟 web开发 相关的问题，\n                    都可以在这里得到解决。"
      ),
      _c("br"),
      _vm._v("Today We Hack!\n                ")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "footer_connect" }, [
      _c("li", { staticClass: "qq" }, [
        _c("a", { attrs: { href: "" } }, [
          _c("i", { staticClass: "fa fa-qq", attrs: { "aria-hidden": "true" } })
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "weixin" }, [
        _c("a", { attrs: { href: "" } }, [
          _c("i", {
            staticClass: "fa fa-weixin",
            attrs: { "aria-hidden": "true" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "weibo" }, [
        _c("a", { attrs: { href: "" } }, [
          _c("i", {
            staticClass: "fa fa-weibo",
            attrs: { "aria-hidden": "true" }
          })
        ])
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "github" }, [
        _c(
          "a",
          {
            attrs: { href: "https://github.com/Tony-Stark-Plus/starkweb_beta1" }
          },
          [
            _c("i", {
              staticClass: "fa fa-github",
              attrs: { "aria-hidden": "true" }
            })
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 mobile pad" }, [
      _c("h5", { staticClass: "posControl" }, [_vm._v("学习资料")]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("文章教程")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("个人博客")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("推荐书目")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("QQ群")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 mobile pad" }, [
      _c("h5", { staticClass: "posControl" }, [_vm._v("laravel讨论")]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("学习路径")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("版本声明")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("社区规则")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("EsayWechat")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 mobile pad" }, [
      _c("h5", { staticClass: "posControl" }, [_vm._v("友情相关")]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("vip会员")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("友情链接")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("电子货币购买")])]),
      _vm._v(" "),
      _c("li", [_c("a", { attrs: { href: "" } }, [_vm._v("Stark IT Github")])])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 mobile pad" }, [
      _c("h5", { staticClass: "posControl" }, [_vm._v("服务提供商")]),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "ali-logo",
          attrs: { href: "https://www.aliyun.com/", target: "_blank" }
        },
        [
          _c("img", {
            attrs: {
              src:
                "https://gw.alicdn.com/tps/TB1xno8OFXXXXXNaFXXXXXXXXXX-338-80.png",
              alt: ""
            }
          })
        ]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "qiniu-logo",
          attrs: { href: "https://www.qiniu.com/", target: "_blank" }
        },
        [_c("img", { attrs: { src: "http://xsy-cdn.xyz/qiniu.png", alt: "" } })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "footer-bottom mobile pad" }, [
      _c("div", { staticClass: "footer-bottom-left" }, [
        _vm._v("Developed By stark,Powered By Laravel")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "footer-bottom-right" }, [
        _vm._v("© Stark Web 2018. All rights reserved. 皖ICP备18007296号-1")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "clear" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-738f9e16", module.exports)
  }
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("v-header"),
      _vm._v(" "),
      _c("navigation"),
      _vm._v(" "),
      _c("router-view"),
      _vm._v(" "),
      _c("v-foot")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0d59d5e8", module.exports)
  }
}

/***/ }),
/* 87 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);