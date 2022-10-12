const { create, findAll } = require("../Services/TodoServices");

exports.createTodoItem = async (req, res) => {
  try {
    const data = await create(req.body);
    res.status(201).json("todo item added");
  } catch (e) {
    res.status(400).json(e);
  }
};

exports.getTodoItems = async (req, res) => {
  try {
    const data = await findAll();
    res.status(200).json(data);
  } catch (e) {
    res.status(400).json(e);
  }
};
