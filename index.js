const http = require("http");
const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer(function (req, res) {
  console.log("REQUSET :", req);
  res.end("Hello Client!");
});

server.listen(port, hostname);

console.log("grap market sever on!");
