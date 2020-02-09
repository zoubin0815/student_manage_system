import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './views/index.css'
import api from './api';
import toast from "./tools/toast";
Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$Toast = toast;
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
