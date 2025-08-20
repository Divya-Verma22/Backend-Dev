const express = require("express");
const router = express.Router();   // ✅ Correct way

const { createComment } = require("../controllers/commentcontrollers");
const { createPost, getAllPost } = require("../controllers/postcontrollers");
const { createLike, deleteLike } = require("../controllers/likecontrollers");

// Routes
router.post("/create/comment", createComment);
router.post("/create/post", createPost);
router.get("/posts", getAllPost);
router.post("/create/likes", createLike);
router.delete("/like/unlike", deleteLike);   // ✅ FIXED (added /)

module.exports = router;

