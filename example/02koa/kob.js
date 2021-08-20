const http = require("http");
const context = require("./context");
const request = require("./request");
const response = require("./response");
class KOB {
  constructor() {
    this.middlewares = [];
  }
  listen(...args) {
    const server = http.createServer(async (req, res) => {
      let ctx = this.createContext(req, res);
      // 合成中间件
      const fn = this.compose(this.middlewares);
      await fn(ctx);
      res.end(ctx.body);
    });
    server.listen(...args);
  }
  use(middleware) {
    this.middlewares.push(middleware);
  }
  compose(middlewares) {
    return function (ctx) {
      return dispatch(0);
      function dispatch(i) {
        let fn = middlewares[i];
        if (!fn) {
          return Promise.resolve();
        }
        return Promise.resolve(
          fn(ctx, () => dispatch(i + 1)) // fn(上下文，nextCallback)  fn(ctx,()=>fn(ctx,()=>null))
        );
      }
    };
  }
  createContext(req, res) {
    const ctx = Object.create(context);
    ctx.request = Object.create(request);
    ctx.response = Object.create(response);
    ctx.req = ctx.request.req = req;
    ctx.res = ctx.response.res = res;
    return ctx;
  }
}
module.exports = KOB;
