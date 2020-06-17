import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import './plugins/element.js'
import './assets/css/main.css' //全局样式表
import './assets/fonts/iconfont.css' //icon样式

Vue.use(VueRouter)
Vue.config.productionTip = false

// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location){
//   return originalPush.call(this,location).catch(err => err)
// }


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
