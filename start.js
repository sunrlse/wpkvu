const path = require('path')
const Koa = require('koa')
const koaStatic = require('koa-static')
const { historyApiFallback } = require('koa2-connect-history-api-fallback')
const compress = require('koa-compress')

const app = new Koa()

const options = {
  threshold: 1024
}
app.use(compress(options))

app.use(historyApiFallback()) // 这里要在static前面，不然无效果
app.use(koaStatic(path.join(__dirname, './dist/')))

app.on('error', (err, ctx) => {
  console.error('server error ', err, ctx)
})

app.listen(8001, () => {
  console.log('server is listening on 8001 port.')
})