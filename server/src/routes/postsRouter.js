const express = require('express');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const postController = require('../controllers/postController');

const postsRouter = express.Router();

postsRouter
  .route('/')
  .get(postController.getPosts)
  .post(verifyAccessToken, postController.createPost);

postsRouter
  .route('/:postId')
  .delete(postController.deletePost)
  .patch(verifyAccessToken, postController.patchPost);

module.exports = postsRouter;
