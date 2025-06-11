const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;
const BASE_DIR = "/Volumes/AddaDevelop/AddaChenAdda.github.io";

const server = http.createServer((req, res) => {
  let url = req.url === "/" ? "/index.html" : req.url;

  // 處理根目錄下的 index.html 請求，顯示 404 頁面
  if (url === "/index.html") {
    fs.readFile(path.join(BASE_DIR, "404.html"), (err, content) => {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end(content, "utf-8");
    });
    return;
  }

  const filePath = path.join(BASE_DIR, url);
  const extname = String(path.extname(filePath)).toLowerCase();

  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon",
  };

  const contentType = mimeTypes[extname] || "application/octet-stream";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // 檔案不存在
        fs.readFile(path.join(BASE_DIR, "404.html"), (err, content) => {
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end(content, "utf-8");
        });
      } else {
        // 伺服器錯誤
        res.writeHead(500);
        res.end(`伺服器錯誤: ${err.code}`);
      }
    } else {
      // 成功返回檔案
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(PORT, () => {
  console.log(`伺服器執行在 http://localhost:${PORT}`);
  console.log(
    `您可以透過 http://localhost:${PORT}/resume/index.html 訪問您的履歷`
  );
});
