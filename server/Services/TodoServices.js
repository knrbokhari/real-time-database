const Todo = require("../Models/TodoModels");

exports.create = async (data) => {
  const newData = await Todo.create(data);
  return newData;
};
exports.findAll = async () => {
  const data = await Todo.find();
  return data;
};
