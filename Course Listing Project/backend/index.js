require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const { Course } = require("./models/CourseModel");
const { SupportMessage } = require("./models/SupportModel");
const PORT = process.env.PORT || 3001;

mongoose
  .connect(process.env.mongodbURL)
  .then(() => console.log("Connected to db"));

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", async function (req, res) {
  res.json(await Course.find({}));
});

app.post("/addCourse", async function (req, res) {
  const newCourse = new Course(req.body);
  await newCourse.save();
  res.send({ message: "Success!" });
});

app.post("/supportMessage", async function (req, res) {
  const newSupportMessage = new SupportMessage(req.body);
  await newSupportMessage.save();
  res.send({
    message: "We have received your message! Expect a reply shortly.",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
