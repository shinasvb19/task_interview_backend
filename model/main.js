const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const MainSchema = new Schema(
  {
    name: String,

    img1: String,

    img2: String,
    header: String,

    aboutDesc: String,

    mobile: {
      type: Number,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);
const Main = mongoose.model("Main", MainSchema);
module.exports = Main;
