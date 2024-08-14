const express = require('express');
const { Post, User } = require('../../db/models');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const postsRouter = express.Router();

postsRouter
  .route('/')
  .get((req, res) =>
    Post.findAll({ order: [['id', 'DESC']], include: User }).then((data) =>
      res.json(data),
    ),
  )
  .post(verifyAccessToken, async (req, res) => {
    try {
      const post = await Post.create({...req.body, userId: res.locals.user.id});
      const newPostWithUser = await Post.findByPk(post.id, { include: User });
      res.status(201).json(newPostWithUser);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

postsRouter.delete('/:postId', verifyAccessToken, async (req, res) => {
  const { postId } = req.params;
  await Post.destroy({ where: { id: postId } });
  res.sendStatus(204);
});

module.exports = postsRouter;
