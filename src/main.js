import Vue from 'vue'
import App from './App.vue'
// 导入element-ui及样式
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// element-ui注册到vue实例上
Vue.use(Element)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
