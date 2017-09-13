const Koa = require('koa')
const koaStatic = require('koa-static')

const config = require('./config')
const routes = require('./service/router')
const templating = require('./service/templating')

const app = new Koa();
const isProduction = process.env.node_env === 'production';

// load static middleware
app.use(koaStatic('.'))

// load static template middleware
app.use(templating('views', {
    noCache: !isProduction,
    watch: !isProduction
}))


// load router middleware
app.use(routes());

// listen to port 3000
app.listen(config.server.port)
console.log('app started at port 3000...')
