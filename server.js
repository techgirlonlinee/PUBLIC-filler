const http = require("http");
const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.static("express"));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

const server = http.createServer(app);
const port = 80;
server.listen(port);
console.debug("Server listening on port " + port);
