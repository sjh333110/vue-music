import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

fastclick.attach(document.body)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})