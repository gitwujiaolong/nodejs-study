const KOB = require("./kob");
const app = new KOB();
const Router = require("./router");
const router = new Router();

router.get("/", async (ctx) => {
  ctx.body = "index page";
});
router.get("/post", async (ctx, next) => {
  ctx.body = "post page";
  await next();
});
router.get("/list", async (ctx) => {
  ctx.body = "list page";
});
router.post("/index", async (ctx) => {
  ctx.body = "post page";
});

app.use(router.routes());
app.use(async (ctx, next) => {
  ctx.body += "1";
  await next();
});
/* app.use(async (ctx, next) => {
  ctx.body = "1";
  await next();
  ctx.body += "5";
});
app.use(async (ctx, next) => {
  ctx.body += "2";
  await next();
  ctx.body += "4";
});
app.use(async (ctx, next) => {
  ctx.body += "3";
});
// 返回1，2，3，4，5 */

app.listen(3000, () => {
  console.log("监听3000端口");
});
