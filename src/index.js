const Koa = require('koa')
const { vaild } = require('../src/service/vaild.vx')
const KoaRouter = require('koa-router')

const app = new Koa()

const router = new KoaRouter()

app.use(router.routes()).use(router.allowedMethods())

router.get('/msg', (ctx) => {
    console.log(ctx.request.query)
    if (vaild(ctx.request.query)) {
        ctx.body = ctx.request.query.echostr
    } else {
        ctx.body = '错了'
    }

})

app.listen(443)