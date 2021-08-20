const KOB = require("./kob");
const app = new KOB();
app.use(async (ctx, next) => {
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
// 返回1，2，3，4，5
app.listen(3000, () => {
  console.log("监听3000端口");
});
