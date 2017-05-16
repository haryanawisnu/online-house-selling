import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import form from '@/components/form'
import listview from '@/components/listview'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home
  }, {
    path: '/form',
    name: 'form',
    component: form
  }, {
    path: '/listview',
    name: 'listview',
    component: listview
  }]
})
