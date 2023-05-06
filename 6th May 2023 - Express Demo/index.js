// Nodemon -> node monitor
// Express -> ExpressJS
// Body Parser -> Parse JSON data
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.json());

let items = [];

app.get("/", (req, res) => {
  res.send(items);
});

app.post("/", (req, res) => {
  let data = req.body;
  items.push(...items, data);
  res.send("Sent!");
});

app.get("/about", (req, res) => {
  res.json({ message: "This is the response" });
});

app.get("/contact", (req, res) => {
  res.send("Hello from the Contact page!");
});

app.listen(port, () => {
  console.log("Server is running!");
});
