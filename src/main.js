// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import components from './components'
import store from './vuex'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';
import _ from 'lodash'
// import $ from 'jquery'

import * as PIXI from 'pixi.js'

// var VueTouch = require('vue-touch')
// Vue.use(VueTouch, {name: 'v-touch'})

Vue.use(iView),
Vue.use(VueAwesomeSwiper, /* { default global options } */)


Object.keys(components).forEach(key => {
    var name = key.replace(/(\w)/, v => v.toUpperCase());
    Vue.component(name, components[key]);
});






Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

