const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",   
    },
    user: {
      type: String,  // if you don’t have a User model yet
      required: true,
    },
    body: {
      type: String,  // the actual comment text
      required: true,
    },
  },
);

module.exports = mongoose.model("Comment", commentSchema);
