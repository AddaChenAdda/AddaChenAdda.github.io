const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 8000;
const MIME_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
};

http
  .createServer((req, res) => {
    console.log(`請求: ${req.url}`);

    // 將URL轉換為檔案系統路徑
    let filePath = "." + req.url;
    if (filePath === "./") {
      filePath = "./index.html";
    }

    // 取得副檔名
    const extname = path.extname(filePath).toLowerCase();

    // 預設內容類型為text/plain
    let contentType = MIME_TYPES[extname] || "text/plain";

    // 讀取檔案
    fs.readFile(filePath, (error, content) => {
      if (error) {
        if (error.code === "ENOENT") {
          // 檔案不存在
          console.log(`找不到檔案: ${filePath}`);
          res.writeHead(404, { "Content-Type": "text/html" });
          res.end("404 找不到檔案");
        } else {
          // 伺服器錯誤
          console.log(`伺服器錯誤: ${error.code}`);
          res.writeHead(500);
          res.end(`伺服器錯誤: ${error.code}`);
        }
      } else {
        // 回覆請求
        res.writeHead(200, { "Content-Type": contentType });
        res.end(content, "utf-8");
      }
    });
  })
  .listen(PORT);

console.log(`伺服器執行中，請訪問 http://localhost:${PORT}/`);
