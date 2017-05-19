import "./styles/main.scss";

import Vue from "vue";

const mainApp = resolve => {
  require.ensure(['./vue-components/App.vue'], () => {
    resolve(require('./vue-components/App.vue'))
  })
};

const vmA = new Vue({
  el: '#app',
  render: h => h(mainApp)
})