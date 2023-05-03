const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

// Get blog router
const blogRouter = require("./Routes/blog.routes");
app.use("/api/blogs", blogRouter);

app.get("/", (req, res) => {
  res.send({ message: "Running server..." });
});
