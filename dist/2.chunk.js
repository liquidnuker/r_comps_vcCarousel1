webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Carousel1_01_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ebc8f98_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Carousel1_01_vue__ = __webpack_require__(8);
var disposed = false
var normalizeComponent = __webpack_require__(3)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Carousel1_01_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ebc8f98_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_Carousel1_01_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\Carousel1_01.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Carousel1_01.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2ebc8f98", Component.options)
  } else {
    hotAPI.reload("data-v-2ebc8f98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_store_js__ = __webpack_require__(7);
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      items: __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].items,
      cIndex: 0
    };
  },

  mounted: function mounted() {},
  methods: {
    nextItem: function nextItem() {
      var cIndex = this.cIndex;
      var items = this.items;
      cIndex = cIndex + 1;
      cIndex = cIndex % items.length; // go to first        
      // return items[cIndex];
      this.cIndex = cIndex;
      // this.refresh();
    },
    prevItem: function prevItem() {
      var cIndex = this.cIndex;
      var items = this.items;
      if (cIndex === 0) {
        cIndex = items.length; // go to last
      }
      cIndex = cIndex - 1;
      // return this.items[cIndex];
      this.cIndex = cIndex;
      // this.refresh();
    },
    customPage: function customPage(index) {
      this.cIndex = index;
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return store; });
var store = {
  items: [{
    itemName: "item1",
    description: "",
    imgSrc: ""
  }, {
    itemName: "item2",
    description: "",
    imgSrc: ""
  }, {
    itemName: "item3",
    description: "",
    imgSrc: ""
  }]
};



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', [_vm._v("\n    " + _vm._s(_vm.items[_vm.cIndex].itemName) + "\n  ")]), _vm._v(" "), _vm._l((_vm.items), function(i, index) {
    return _c('span', [_c('button', {
      on: {
        "click": function($event) {
          _vm.customPage(index)
        }
      }
    }, [_vm._v(_vm._s(index))])])
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.prevItem
    }
  }, [_vm._v("previous")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.nextItem
    }
  }, [_vm._v("next")])], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ebc8f98", esExports)
  }
}

/***/ })
]);