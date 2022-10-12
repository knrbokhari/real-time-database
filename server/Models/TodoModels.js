const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    items: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const ToDoList = mongoose.model("ToDoList", TodoSchema);

module.exports = ToDoList;
