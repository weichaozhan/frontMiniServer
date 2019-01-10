const Koa = require('koa');
const CORS = require('koa2-cors');
// 使用router
const Router = require('koa-router');
const Boom = require('boom');
const bodyParser = require('koa-bodyparser');
const koaBody = require('koa-body');
const app = new Koa();
const router = new Router();
const port = 9091;

// 跨域处理
app.use(CORS({
  origin: 'http://localhost:3000',
  credentials: true,
  allowMethods: [
      'GET',
      'PUT',
      'POST',
      'PATCH',
      'DELETE',
      'HEAD',
      'OPTIONS'
  ],
  expose: ['Authorization'],
}))
app.use(router.routes());
app.use(router.allowedMethods({
  throw: true,
  notImplemented: () => new Boom.notImplemented(),
  methodNotAllowed: () => new Boom.methodNotAllowed(),
}));
// 使用bodyparser 解析get,post的参数
app.use(bodyParser());

const routers = require('./routers');

routers(router, koaBody);

// log error
app.on('error', (err, ctx) => {
  console.log('server error', err, ctx);
});

app.listen(port, () => {
  console.log('mock server listening on port ' + port);
});