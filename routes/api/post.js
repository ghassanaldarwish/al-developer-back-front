const express = require("express");

const router = express.Router();
const login = require("../../middlewares/login");

const Profile = require("../../models/Profiles");
const Post = require("../../models/Posts");
const validatePostInput = require("../../validation/post");

//public
router.get("/", async (req, res) => {
  try {
    res.json(await Post.find().sort({ date: -1 }));
  } catch (error) {
    res.status(404).json({ msg: "there is no posts" });
  }
});
//public single post
router.get("/:id", async (req, res) => {
  try {
    res.json(await Post.findById(req.params.id));
  } catch (error) {
    res.status(404).json({ msg: "this post is not exists" });
  }
});

router.get("/user-posts/:id", login, async (req, res) => {
  try {
    res.json(await Post.find({ user: req.params.id }).sort({ date: -1 }));
  } catch (error) {
    res.status(404).json({ msg: "this post is not exists" });
  }
});
//privet single post

router.post("/", login, async (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);
  if (!isValid) {
    res.status(404).json(errors);
  }
  try {
    const post = await new Post({
      text: req.body.text,
      name: req.body.name,
      avatar: req.body.avatar,
      user: req.user.id,
      handle: req.body.handle
    }).save();

    res.json(post);
  } catch (error) {
    res
      .status(404)
      .json({ msg: "you can not add the post there is somthing went wrong!!" });
  }
});
router.delete("/:id", login, (req, res) => {
  try {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id).then(post => {
        // Check for post owner
        if (post.user.toString() !== req.user.id) {
          return res.status(401).json({ notauthorized: "User not authorized" });
        }

        // Delete
        post.remove().then(() => res.json({ success: true }));
      });
    });
  } catch (error) {
    res.status(404).json({ msg: "this post is not exists" });
  }
});

//privet

router.post("/like/:id", login, (req, res) => {
  try {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id).then(post => {
        if (
          post.likes.filter(like => like.user.toString() === req.user.id)
            .length > 0
        ) {
          return res.status(400).json({ msg: "User already liked this post" });
        }

        // Add user id to likes array
        post.likes.unshift({ user: req.user.id });

        post.save().then(post => res.json(post));
      });
    });
  } catch (error) {
    res.status(404).json({ msg: "NOT FOUND" });
  }
});

router.post("/unlike/:id", login, (req, res) => {
  try {
    Profile.findOne({ user: req.user.id }).then(profile => {
      Post.findById(req.params.id).then(post => {
        if (
          post.likes.filter(like => like.user.toString() === req.user.id)
            .length === 0
        ) {
          return res
            .status(400)
            .json({ msg: "you have not yet like this post" });
        }

        // Add user id to likes array
        const removeIndex = post.likes
          .map(item => item.user.toString())
          .indexOf(req.user.id);

        post.likes.splice(removeIndex, 1);
        post.save().then(post => res.json(post));
      });
    });
  } catch (error) {
    res.status(404).json({ msg: "NOT FOUND" });
  }
});

//privet
router.post("/comment/:id", login, async (req, res) => {
  const { errors, isValid } = validatePostInput(req.body);
  if (!isValid) {
    res.status(404).json(errors);
  }
  try {
    Post.findById(req.params.id).then(post => {
      const newComment = {
        text: req.body.text,
        name: req.body.name,
        avatar: req.body.avatar,
        user: req.user.id
      };

      // Add to comments array
      post.comments.unshift(newComment);

      // Save
      post.save().then(post => res.json(post));
    });
  } catch (error) {
    res.status(404).json({ msg: "NOT FOUND" });
  }
});

// @access  Private
router.delete("/comment/:id/:comment_id", login, (req, res) => {
  Post.findById(req.params.id)
    .then(post => {
      // Check to see if comment exists
      if (
        post.comments.filter(
          comment => comment._id.toString() === req.params.comment_id
        ).length === 0
      ) {
        return res.status(404).json({ msg: "Comment does not exist" });
      }

      // Get remove index
      const removeIndex = post.comments
        .map(item => item._id.toString())
        .indexOf(req.params.comment_id);

      // Splice comment out of array
      post.comments.splice(removeIndex, 1);

      post.save().then(post => res.json(post));
    })
    .catch(err => res.status(404).json({ msg: "No post found" }));
});

module.exports = router;
