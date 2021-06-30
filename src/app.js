import Vue from 'vue'
import { createRouter } from '../router/index'
import App from '../App.vue'

/**
 * 创建 App 组件
 */
export function createApp() {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App),
  })

  // 同时返回 router，让服务端可以根据请求的 url 设置 router 的位置
  return { app, router }
}