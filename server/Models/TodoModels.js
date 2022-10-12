const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    items: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);
