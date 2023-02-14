const Main = require("../model/main");
const mongoose = require("mongoose");
const { post } = require("../router/mainRouter");

exports.post = async (req, res) => {
  console.log(req.body.img1);
  try {
    const result = await Main.updateOne(
      { name: "post" },
      {
        $set: {
          img1: req.body.img1,
          img2: req.body.img2,
          header: req.body.header,
          aboutDesc: req.body.aboutDesc,
          mobile: req.body.mobile,
          email: req.body.email,
        },
      },
      { upsert: true }
    );
    res.status(200).json("success");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};
exports.postFetch = async (req, res) => {
  const data = await Main.findOne();
  console.log(data);
  res.status(200).json(data);
};
