import "./styles/main.scss";
// import Vue from "vue";

const Home = resolve => {
  require.ensure(['./vue-components/Home.vue'], () => {
    resolve(require('./vue-components/Home.vue'))
  })
};

const vmA = new Vue({
  el: '#app',
  render: h => h(Home)
})