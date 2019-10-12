import Vue from "vue";
import App from "./App";

import "lib-flexible/flexible"
import router from './router'
import './moke/mock-server'

import store from './vuex/index.js'




Vue.config.productionTip = false,


(function () {
  var rem = document.createElement('script');
  rem.src = './public/rem.js';
  document.body.appendChild(rem)
})()


new Vue({
  el: '#app',
  render: createElement=>createElement(App),
  router,
  store
})




