import Vue from 'vue'
import App from './App'
import router from './router/'

//import bootstrap css & js
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'popper.js/dist/popper.min'
import 'bootstrap/dist/js/bootstrap.min'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')