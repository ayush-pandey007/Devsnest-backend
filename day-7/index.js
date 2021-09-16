const express = require("express");
const app = express();

const port = 2000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/json", (req, res) => {
  res.json({
    name: "ayush",
    age: "20",
  });
});

app.get("/something", (req, res) => {
  res.status(200).send("OK");
});

app.get("/query", (req, res) => {
  console.log(req.query);
  res.status(200).send(req.query);
});

app.get("/team/:code", (req, res) => {
  const { code } = req.params;
  if (code == 1) {
    res.send("hello");
    return;
  }
});

app.listen(port, () => {
  console.log(`server is up on http://localhost:${port}`);
});
