const express = require("express");
const { post, postFetch } = require("../controller/mainController");
const router = express.Router();
router.post("/post", post);
router.get("/post", postFetch);
module.exports = router;
