const {
  createTodoItem,
  getTodoItems,
} = require("../Controllers/TodoControllers");

const route = require("express").Router();

// get all todo items
route.get("/", getTodoItems);

// create todo items
route.post("/", createTodoItem);

module.exports = route;
