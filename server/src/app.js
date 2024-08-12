const express = require('express');
const morgan = require('morgan');
const { Post } = require('../db/models');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/api/posts', (req, res) => Post.findAll().then((data) => res.json(data)));

app.delete('/api/posts/:postId', async (req, res) => {
  const { postId } = req.params;
  await Post.destroy({ where: { id: postId } });
  res.sendStatus(204);
});

module.exports = app;
