const { Post } = require('../../db/models');

class PostService {
  constructor(model) {
    this.model = model;
  }

  async addPost(formData) {
    const post = await this.model.create(formData);
    const postWithUser = await this.model.findByPk(post.id, {
      include: 'User',
    });
    return postWithUser;
  }

  getPosts() {
    return this.model.findAll({ order: [['id', 'DESC']], include: 'User' });
  }

  async deletePost(id) {
    try {
      await this.model.destroy({ where: { id } });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async editPost(newData, id) {
    const post = await this.model.findByPk(id);
    await post.update(newData);
    const updatedPost = await this.model.findByPk(id, { include: 'User' });
    return updatedPost;
  }
}

const postService = new PostService(Post);

module.exports = postService;
