const Post = require('../models/postmodel');   // Capitalized for convention
const Comment = require('../models/commentmodel'); // Import Comment model

exports.createComment = async (req, res) => {
  try {
    // fetch data from request body
    const { post, user, body } = req.body;

    // create new comment
    const comment = new Comment({
      post,
      user,
      body
    });

    const savedComment = await comment.save();

    // update the post by pushing new comment
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { comments: savedComment._id } },
      { new: true }
    )
      .populate("comments")
      .exec();

    res.json({
      post: updatedPost,
    });

  } catch (e) {
    return res.status(500).json({
      error: "Error while creating comment",
      details: e.message,
    });
  }
};


