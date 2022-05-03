module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./admin.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./src/admin/components/Settings.js":
/*!******************************************!*\
  !*** ./src/admin/components/Settings.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Settings; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/ExtensionPage */ "flarum/components/ExtensionPage");
/* harmony import */ var flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/tags/utils/sortTags */ "flarum/tags/utils/sortTags");
/* harmony import */ var flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6__);








var Settings = /*#__PURE__*/function (_ExtensionPage) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Settings, _ExtensionPage);

  function Settings() {
    return _ExtensionPage.apply(this, arguments) || this;
  }

  var _proto = Settings.prototype;

  _proto.oninit = function oninit(vnode) {
    var _this = this;

    _ExtensionPage.prototype.oninit.call(this, vnode);

    this.prim = 0;
    this.second = 0;
    flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_4___default()(flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.store.all('tags')).map(function (tag) {
      if (tag.isPrimary()) {
        _this.prim++;
      } else {
        _this.second++;
      }
    });
    this.disable = true;
    this.loading = false;
    this.tagsPrimary = [];
    this.tagsSecondary = [];
    this.tagsPrimaryIds = [];
    this.tagsSecondaryIds = [];
    this.jsonFile = '';
  };

  _proto.content = function content() {
    var _this2 = this;

    return [m('.ExtensionPage-settings', [m('.container', [m('Form', {
      onsubmit: this.onsubmit.bind(this)
    }, [m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('data-from-json.admin.settings.file_name_label')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('data-from-json.admin.settings.file_name_help_text')), m('button.Button.jsonFile', {
      type: 'button',
      onclick: function onclick() {
        return _this2.$('#jsonFile').click();
      }
    }, [m('span', 'Alege fisier'), m('input', {
      id: 'jsonFile',
      type: 'file',
      accept: '.json',
      multiple: false,
      oninput: function oninput() {
        try {
          if (_this2.$('#jsonFile').prop('files')[0].type == 'application/json') {
            _this2.jsonFile = _this2.$('#jsonFile').prop('files')[0];

            _this2.$('#jsonFile').val('');

            _this2.disable = false;
          } else {
            _this2.jsonFile = '';
            _this2.disable = true;
          }
        } catch (_unused) {
          _this2.jsonFile = '';
          _this2.disable = true;
        }
      }
    })])]), this.prim > 0 ? m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('data-from-json.admin.settings.primary_tags_label')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('data-from-json.admin.settings.primary_tags_help_text') + flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.forum.attribute('maxPrimaryTags')), m('.TagGroup', [m('ul.TagList', [flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_4___default()(flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.store.all('tags')).map(function (tag) {
      var tags = _this2.tagsPrimary;
      var tagsIds = _this2.tagsPrimaryIds;

      if (tag.isPrimary()) {
        return [flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5___default.a.component({
          id: tag.slug(),
          state: tags.length ? tags.includes(tag.slug()) : false,
          onchange: function onchange() {
            this.state ? tags.splice(tags.indexOf(this.id), 1) && tagsIds.splice(tagsIds.indexOf(tag.id()), 1) : tags.push(this.id) && tagsIds.push(tag.id());
            tags.length > flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.forum.attribute('maxPrimaryTags') ? tags.shift() && tagsIds.shift() : '';
          },
          className: 'switchTags'
        }, m('li', {
          style: {
            color: tag.color(),
            lineHeight: '20px',
            fontSize: '16px',
            marginLeft: !(tag.isPrimary() || tag.position() === null) ? '20px' : ''
          }
        }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()(tag.icon()), tag.name()))];
      }
    })])])]) : '', this.second > 0 ? m('.Form-group', [m('label', flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('data-from-json.admin.settings.secondary_tags_label')), m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('data-from-json.admin.settings.secondary_tags_help_text') + flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.forum.attribute('maxSecondaryTags')), m('.TagGroup', [m('ul.TagList', [flarum_tags_utils_sortTags__WEBPACK_IMPORTED_MODULE_4___default()(flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.store.all('tags')).map(function (tag) {
      var tags = _this2.tagsSecondary;
      var tagsIds = _this2.tagsSecondaryIds;

      if (!tag.isPrimary()) {
        return [flarum_components_Switch__WEBPACK_IMPORTED_MODULE_5___default.a.component({
          id: tag.slug(),
          state: tags.length ? tags.includes(tag.slug()) : false,
          onchange: function onchange() {
            this.state ? tags.splice(tags.indexOf(this.id), 1) && tagsIds.splice(tagsIds.indexOf(tag.id()), 1) : tags.push(this.id) && tagsIds.push(tag.id());
            tags.length > flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.forum.attribute('maxSecondaryTags') ? tags.shift() && tagsIds.shift() : '';
          },
          className: 'switchTags'
        }, m('li', {
          style: {
            color: tag.color(),
            lineHeight: '20px',
            fontSize: '16px',
            marginLeft: !(tag.isPrimary() || tag.position() === null) ? '20px' : ''
          }
        }, flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()(tag.icon()), tag.name()))];
      }
    })])])]) : '', m('.Form-group', [m('.helpText', flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('data-from-json.admin.settings.attention'))]), flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      type: 'submit',
      className: 'Button Button--primary',
      loading: this.loading,
      disabled: this.disable
    }, flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.translator.trans('data-from-json.admin.settings.submit_button'))])])])];
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;

    e.preventDefault();
    this.loading = true;
    var data = new FormData();
    data.append('file_name', this.fileName);
    data.append('tags_primary_ids', this.tagsPrimaryIds);
    data.append('tags_secondary_ids', this.tagsSecondaryIds);
    data.append('file[]', this.jsonFile);
    flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.request({
      url: flarum_app__WEBPACK_IMPORTED_MODULE_3___default.a.forum.attribute('apiUrl') + '/json-data',
      method: 'POST',
      body: data
    }).then(function () {
      _this3.disable = true;
      _this3.loading = false;
      _this3.tagsPrimary = [];
      _this3.tagsSecondary = [];
      _this3.tagsPrimaryIds = [];
      _this3.tagsSecondaryIds = [];
      _this3.jsonFile = '';
      m.redraw();
    })["catch"](function (e) {
      _this3.loading = false;
      _this3.disable = true;
      _this3.tagsPrimary = [];
      _this3.tagsSecondary = [];
      _this3.tagsPrimaryIds = [];
      _this3.tagsSecondaryIds = [];
      _this3.jsonFile = '';
      m.redraw();
      throw e;
    });
  };

  return Settings;
}(flarum_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Settings */ "./src/admin/components/Settings.js");


flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.initializers.add('block-cat/data-from-json', function () {
  flarum_app__WEBPACK_IMPORTED_MODULE_0___default.a.extensionData["for"]('block-cat-data-from-json').registerPage(_components_Settings__WEBPACK_IMPORTED_MODULE_1__["default"]);
});

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/ExtensionPage":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/ExtensionPage']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ExtensionPage'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/tags/utils/sortTags":
/*!************************************************************!*\
  !*** external "flarum.core.compat['tags/utils/sortTags']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['tags/utils/sortTags'];

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map