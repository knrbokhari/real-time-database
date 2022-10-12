const express = require("express");
const cors = require("cors");
const todoRoutes = require("./Routes/TodoRoutes");

const app = express();

app.use(cors());
app.use(express.json());


app.use("/todo", todoRoutes);

module.exports = { app };
