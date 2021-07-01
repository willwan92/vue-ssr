import Vue from 'vue'
import VueRouter from 'vue-router'
import { createRouter } from './router/index'
import App from './App.vue'

Vue.use(VueRouter)

/**
 * 创建 App 组件
 */
export function createApp() {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App),
  })

  // 同时返回 router，客户端和服务端入口文件需要使用
  return { app, router }
}