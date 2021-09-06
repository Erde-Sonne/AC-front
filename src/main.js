import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import md5 from 'js-md5'
import global_ from './views/Global'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$md5 = md5
Vue.prototype.GLOBAL = global_ //挂载到Vue实例上面

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
