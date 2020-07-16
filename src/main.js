import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/main.css'

Vue.config.productionTip = false
//  创建给全局的vuex实例

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
