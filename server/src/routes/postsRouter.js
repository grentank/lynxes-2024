const express = require('express');
const { Post } = require('../../db/models');

const postsRouter = express.Router();

postsRouter
  .route('/')
  .get((req, res) =>
    Post.findAll({ order: [['id', 'DESC']] }).then((data) => res.json(data)),
  )
  .post(async (req, res) => {
    try {
      const post = await Post.create(req.body);
      res.status(201).json(post);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  });

postsRouter.delete('/:postId', async (req, res) => {
  const { postId } = req.params;
  await Post.destroy({ where: { id: postId } });
  res.sendStatus(204);
});

module.exports = postsRouter;
