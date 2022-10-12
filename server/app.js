const express = require("express");
const cors = require("cors");
const app = express();

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: "http://localhost:3000/",
  methods: ["GET", "POST", "PATCH", "DELETE"],
});

const todoRoutes = require("./Routes/TodoRoutes");

app.use(cors());
app.use(express.json());

app.use("/todo", todoRoutes);

app.set("socketio", io);

module.exports = { app, server };
