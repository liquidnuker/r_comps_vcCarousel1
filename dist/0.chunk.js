webpackJsonp([0],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(5),
  /* template */
  __webpack_require__(12),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\WINDOWS\\GD2\\web\\testfiles\\webpack2\\_node_dev\\git_vueCarousel1\\src\\vue-components\\Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19b7a970", Component.options)
  } else {
    hotAPI.reload("data-v-19b7a970", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', {
    staticClass: "item-id"
  }, [_vm._v("vueCarousel1-02")]), _vm._v(" "), _c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-3"
  }, [_vm._v("\n      39\n    ")]), _vm._v(" "), _c('div', {
    staticClass: "col-sm-9"
  }, [_c('div', {
    attrs: {
      "id": "vuecarousel1-02_mount"
    }
  })])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-19b7a970", module.exports)
  }
}

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
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
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 5:
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

// import Vue from "vue";
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },

  mounted: function mounted() {
    console.log("App.vue mounted");
    this.loadCarousel1_02();
  },
  methods: {
    loadCarousel1_02: function loadCarousel1_02() {
      var Carousel1_02 = function Carousel1_02(resolve) {
        __webpack_require__.e/* require.ensure */(1).then((function () {
          resolve(__webpack_require__(4));
        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
      };

      // inject to carousel mount
      new Vue({
        el: '#vuecarousel1-02_mount',
        render: function render(h) {
          return h(Carousel1_02);
        }
      });
    }
  }
});

/***/ })

});