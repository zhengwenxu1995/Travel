// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from "./store"
import "style/reset.css"//引入重置css样式
import "style/border.css"
import "style/iconfont.css"
import 'swiper/dist/css/swiper.css'
import "babel-polyfill"
import VueAwesomeSwiper from 'vue-awesome-swiper'


Vue.config.productionTip = false
fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
