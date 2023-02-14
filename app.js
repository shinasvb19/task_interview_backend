require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mainRouter = require("./router/mainRouter");
app.use(express.json());
const dotenv = require("dotenv");
const connectDb = require("./config/mongo");
const corsOptions = require("./config/corsOption");
app.use(cors(corsOptions));
app.use("/", mainRouter);

dotenv.config();
connectDb();

app.listen(5000, () => {
  console.log("up and running !!!!");
});
