// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Mint from 'mint-ui';
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
import '@/assets/css/rest.css'
import '@/assets/icon/iconfont.css'
import '@/assets/js/flexible.js'
import 'swiper/dist/css/swiper.css'
import 'mint-ui/lib/style.css';
import store from '@/store'



Vue.config.productionTip = false
FastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)
Vue.use(Mint);
Vue.use(VideoPlayer)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})
