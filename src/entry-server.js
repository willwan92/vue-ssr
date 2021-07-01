// entry-server.js
import { createApp } from './app'

// 实现服务器端路由逻辑，并把函数暴露出去，
// 通过webpack打包后就可以用该函数创建 App 组件
/**
 * 
 * @param { Object } context 上下文对象，包含q
 * @returns 
 */
export default function (context) {
  // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
  // 以便服务器能够等待所有的内容在渲染前就已经准备就绪。
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()

    // 设置服务器端 router 的位置
    router.push(context.url)
    router.onReady(() => {
      const components = router.getMatchedComponents()
      // 匹配不到的路由，执行 reject 函数，并返回 404
      if (!components.lenght) {
        reject({ code: 404 })
      } else {
        resolve(app)
      }
    }, reject)
  })
}
