const express = require("express");
const router = express.Router();

router.get("/test", () => {
  console.log("Working test");
});

module.exports = router;
