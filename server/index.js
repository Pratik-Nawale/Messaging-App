const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const port = 4500 || process.env.PORT;



app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello");
});

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", () => {
  console.log("New Connection");
});

server.listen(port, () => {
  console.log(`Server is up and running on http://localhost:${port}`);
});
