import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入 element 文件
import '@/utils/element'

// 进度条
import '@/utils/permission'

// css 初始化样式
import '@/style/reset.css'
// import '@/style/Global.css'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
