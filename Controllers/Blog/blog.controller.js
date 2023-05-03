const { QuertAddPost } = require("../../Models/Blog/blog.model");

const AddBlog = async (req, res) => {
  const data = req.body;
  const result = await QuertAddPost(data, "blogs");
  res.json(result);
};

module.exports = { AddBlog };
