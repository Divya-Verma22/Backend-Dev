const Post = require('../models/postmodel');   // Capitalized for convention
const Like = require('../models/likemodel'); // Import Comment model

exports.createLike = async (req, res) => {
  try {
    const { post, user } = req.body;

    
    const like = new Like({
      post,
      user
    });

    const savedLikes = await like.save();

    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $push: { likes : savedLikes._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.json({
      post: updatedPost,
    });

  } catch (e) {
    return res.status(500).json({
      error: "Error while creating likes",
      details: e.message,
    });
  }
};


exports.deleteLike = async (req, res) => {
  try {
    const { post, like } = req.body;

    // Delete the like document
    const deletedLike = await Like.findOneAndDelete({ post: post, _id: like });
    if (!deletedLike) {
      return res.status(404).json({ error: "Like not found" });
    }

    // Update the Post by pulling the like reference
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      { $pull: { likes: deletedLike._id } },
      { new: true }
    )
      .populate("likes")
      .exec();

    res.json({
      message: "Like removed successfully",
      post: updatedPost,
    });
  } catch (e) {
    return res.status(500).json({
      error: "Error while deleting like",
      details: e.message,
    });
  }
};
