const express = require("express");
const router = express.Router();
const { AddBlog } = require("../Controllers/Blog/blog.controller");

router.post("/insert", AddBlog);

module.exports = router;
