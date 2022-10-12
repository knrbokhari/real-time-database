const { app } = require("./app");
const db = require("./ConnectionDB");

const PORT = 5000;

app.listen(PORT, () => {
  db();
  console.log("server running at port", PORT);
});
