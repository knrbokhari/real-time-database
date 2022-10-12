const { create, findAll } = require("../Services/TodoServices");

exports.createTodoItem = async (req, res) => {
  // console.log(req.body);
  const io = req.app.get("socketio");
  console.log(req.body);
  try {
    await create(req.body);

    io.emit("newTaskAdded");

    res.status(201).json("todo item added");
  } catch (e) {
    res.status(400).json(e);
  }
};

exports.getTodoItems = async (req, res) => {
  try {
    const data = await findAll();
    res.status(200).send(data);
  } catch (e) {
    res.status(400).json(e);
  }
};
