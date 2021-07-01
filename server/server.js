const express = require('express')
const fs = require('fs')
const { createBundleRenderer  } = require('vue-server-renderer')
const bundle = require('../dist/server/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/client/vue-ssr-client-manifest.json')

const app = express()

// 开放dist目录
app.use(express.static(`${__dirname}/../dist/client`))

// 用createBundlerRenderer创建一个 renderer
const renderer = createBundleRenderer (bundle, {
  runInNewContext: false, // 推荐
  template: fs.readFileSync(`${__dirname}/../src/index.temp.html`, 'utf-8'),
  clientManifest
})

// 处理路由
app.get('*', (req, res) => {
  const context = { url: req.url }
  // 这里无需传入一个应用程序，因为在执行 bundle 时已经自动创建过。
  // 现在我们的服务器与应用程序已经解耦！
  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).send('Page not found')
      } else {
        res.status(500).send('Internal Server Error')
      }
    } else {
      res.send(html)
    }
  })
})

app.listen(3000, () => {
  console.log('服务器启动成功：3000');
})