webpackJsonp([2],{

/***/ 18:
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(9),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\WINDOWS\\GD2\\web\\testfiles\\webpack2\\_node_dev\\git_vueCarousel1\\src\\vue-components\\Carousel1_01.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
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
})()}

module.exports = Component.exports


/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_store_js__ = __webpack_require__(18);
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
  data: function data() {
    return {
      items: __WEBPACK_IMPORTED_MODULE_0__js_store_js__["a" /* store */].items,
      cIndex: 0
    };
  },

  mounted: function mounted() {},
  methods: {
    nextItem: function nextItem() {
      this.cIndex = this.cIndex + 1;
      this.cIndex = this.cIndex % this.items.length; // go to first
      return this.items[this.cIndex];
      // this.refresh();
    },
    prevItem: function prevItem() {
      if (this.cIndex === 0) {
        this.cIndex = this.items.length; // go to last
      }
      this.cIndex = this.cIndex - 1;
      return this.items[this.cIndex];
      // this.refresh();
    },
    customPage: function customPage(index) {
      console.log(index);
    }
  }
});

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-2ebc8f98", module.exports)
  }
}

/***/ })

});