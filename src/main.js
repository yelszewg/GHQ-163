import Vue from "vue";
import App from "./App";

import "lib-flexible/flexible"
import router from './router'




Vue.config.productionTip = false


new Vue({
  el: '#app',
  render: createElement=>createElement(App),
  router
});
(function(){
  var rem = document.createElement('script');
  rem.src = './public/rem.js';
  document.body.appendChild(rem)
})()

