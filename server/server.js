const express = require('express')
const Vue = require('vue')
const VueServerRender = require('vue-server-renderer')

const app = express()

const App = new Vue({
  data: {
    msg: 'hello  world'
  },
  template: `<p>{{msg}}</p>`
})

const renderer = VueServerRender.createRenderer()

app.get('/', (req, res) => {
  renderer.renderToString(App, (err, html) => {
    if (err) {
      res.status(500).send('Internal Server Error')
    } {
      res.send(html)
    }
  })
})

app.listen(3000, () => {
  console.log('服务器启动成功：3000');
})