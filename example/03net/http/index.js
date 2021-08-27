const express = require("express");
const fs = require("fs");
const fileUpload = require("express-fileupload");
const app = express();
app.use(express.static(__dirname + "/"));
// 文件上传中间件
app.use(fileUpload());
// 文件下载
app.get("/api/download", (req, res) => {
  fs.readFile("../download/file.pdf", (err, data) => {
    res.setHeader("Content-Type", "application/pdf");
    const fileName = encodeURI("中文");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${fileName}.pdf"`
    );
    res.end(data);
  });
});
//文件上传
app.post("/api/upload", (req, res) => {
  console.log("uplaoding");
  if (!req.files) {
    return res.status(500).send("no files were upload");
  }
  let file = req.files.file;
  file.mv(`${__dirname}/uploads/${file.name}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `uploads/${file.name}` });
  });
});

app.listen(3000, () => {
  console.log(`proxy server on port:${3000}`);
});
module.exports = app;
