import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { createRouter } from './router/index'
import { createStore } from './store/index'
import App from './App.vue'

Vue.use(VueRouter)
Vue.use(Vuex)

/**
 * 创建 App 组件
 */
export function createApp() {
  const router = createRouter()
  const store = createStore()
  const app = new Vue({
    router,
    store,
    render: h => h(App),
  })

  // 同时返回 router，客户端和服务端入口文件需要使用
  return { app, router }
}