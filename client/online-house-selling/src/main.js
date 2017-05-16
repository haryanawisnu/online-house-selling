// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import navbar from '@/components/navbar'
import {
  store
} from './store/house'

Vue.config.productionTip = false
Vue.component('navbar', navbar);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  },
  ready() {
    var myOptions = {
      zoom: 12,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      center: new google.maps.LatLng(25.761680, -80.19179)
    };
    var map = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);
  }
})
