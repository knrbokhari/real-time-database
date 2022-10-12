const { app, server } = require("./app");
const db = require("./ConnectionDB");

const PORT = 5000;

server.listen(PORT, () => {
  db();
  console.log("server running at port", PORT);
});
