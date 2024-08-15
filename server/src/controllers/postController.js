const postService = require('../services/postService');

class PostController {
  constructor(service) {
    this.service = service;
  }

  getPosts = (req, res) => {
    this.service.getPosts().then((data) => res.json(data));
  };

  createPost = async (req, res) => {
    try {
      const newPost = await this.service.addPost({
        ...req.body,
        userId: res.locals.user.id,
      });
      res.status(201).json(newPost);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  };

  deletePost = async (req, res) => {
    const { postId } = req.params;
    const success = await this.service.deletePost(postId);
    res.sendStatus(success ? 204 : 500);
  };

  patchPost = async (req, res) => {
    const { postId } = req.params;
    const updatedPost = await this.service.editPost(req.body, postId);
    res.json(updatedPost);
  };
}

const postController = new PostController(postService);

module.exports = postController;
