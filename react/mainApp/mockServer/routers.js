module.exports = function(router, koaBody) {
  // 模拟数据返回 
  // 测试
  const testBack = require('./routes/test');

  testBack(router, koaBody);
}