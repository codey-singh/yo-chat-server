const express = require("express");

const server = require("http").createServer();

const io = require("socket.io")(server, {
  path: "/test",
  serveClient: false,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

const app = express();
const port = 3000;

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

server.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
