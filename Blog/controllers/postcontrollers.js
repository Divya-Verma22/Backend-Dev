const Post = require('../models/postmodel');

exports.createPost = async (req, res) => {
    try {
        const { title, body } = req.body;

        // create new comment
        const post = new Post({
            title, body

        })
        const savedPost = await post.save();

        // update the post by pushing new comment

        res.json({
            post: savedPost,
        });


    }
    catch (e) {
        return res.status(400).json({
            error: "Error while creating post",
            details: e.message,
        });  

    }
}


exports.getAllPost = async (req, res) => {
    try {
        const posts = await Post.find().populate("comments").populate("likes")

        res.json({
            posts
        })



    }
    catch (err) {
        return res.status(400).json({
            error: "Error while fetching post",
            details: err.message,
        });

    }
}
